/* Tennessee LLE Exam Prep — static app. All state lives in localStorage (per device/browser). */
(function () {
  "use strict";
  var DATA = window.COURSE_DATA;
  var LS_KEY = "tnlle-progress-v1";
  var app = document.getElementById("app");

  /* ---------- progress store ---------- */
  function loadProgress() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }
  function defaultProgress() {
    return {
      lessonsDone: {},            // lessonId -> true
      attempts: [],               // {date, mode, category, total, correct, pct, passed}
      catStats: {},               // categoryId -> {seen, correct}
      flashcards: {},             // index -> "known" | "learning"
      lastVisit: null
    };
  }
  var P = loadProgress() || defaultProgress();
  function save() {
    P.lastVisit = new Date().toISOString();
    try { localStorage.setItem(LS_KEY, JSON.stringify(P)); } catch (e) {}
  }
  function recordAnswer(catId, isCorrect) {
    var s = P.catStats[catId] || (P.catStats[catId] = { seen: 0, correct: 0 });
    s.seen += 1; if (isCorrect) s.correct += 1;
    save();
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function catLabel(id) {
    for (var i = 0; i < DATA.categories.length; i++)
      if (DATA.categories[i].id === id) return DATA.categories[i].label;
    return id;
  }
  function catCount(id) {
    return DATA.questions.filter(function (q) { return q.category === id; }).length;
  }
  function lessonById(id) {
    for (var m = 0; m < DATA.modules.length; m++)
      for (var l = 0; l < DATA.modules[m].lessons.length; l++)
        if (DATA.modules[m].lessons[l].id === id) return { mod: DATA.modules[m], les: DATA.modules[m].lessons[l] };
    return null;
  }
  function mastery(catId) {
    var s = P.catStats[catId];
    if (!s || !s.seen) return null;
    return Math.round(100 * s.correct / s.seen);
  }
  function weakestCategory() {
    var worst = null;
    DATA.categories.forEach(function (c) {
      var m = mastery(c.id);
      if (m !== null && (worst === null || m < worst.pct)) worst = { id: c.id, pct: m };
    });
    return worst;
  }
  function totalLessons() {
    return DATA.modules.reduce(function (n, m) { return n + m.lessons.length; }, 0);
  }

  /* ---------- speech (device-voice narration) ---------- */
  var speech = { chunks: [], idx: 0, playing: false, rate: 1 };
  function stopSpeech() {
    speech.playing = false; speech.chunks = []; speech.idx = 0;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    renderSpeechBarState();
  }
  function speakChunks(chunks, rate) {
    if (!("speechSynthesis" in window)) { alert("Sorry — this device/browser has no built-in speech voice."); return; }
    stopSpeech();
    speech.chunks = chunks; speech.rate = rate || 1; speech.playing = true;
    speakNext();
    renderSpeechBarState();
  }
  function speakNext() {
    if (!speech.playing || speech.idx >= speech.chunks.length) { speech.playing = false; renderSpeechBarState(); return; }
    var u = new SpeechSynthesisUtterance(speech.chunks[speech.idx]);
    u.rate = speech.rate;
    u.onend = function () { speech.idx += 1; speakNext(); };
    u.onerror = function () { speech.idx += 1; speakNext(); };
    window.speechSynthesis.speak(u);
  }
  function pauseResumeSpeech() {
    if (!("speechSynthesis" in window)) return;
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause(); speech.playing = false;
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume(); speech.playing = true;
    }
    renderSpeechBarState();
  }
  function renderSpeechBarState() {
    var b = document.getElementById("speechState");
    if (b) b.textContent = speech.playing ? "▶ Reading aloud (device voice)…" : "Device-voice narration";
  }
  function speechBar(textChunks) {
    if (!("speechSynthesis" in window)) return "";
    return '<div class="voicebar"><strong id="speechState">Device-voice narration</strong>' +
      '<span class="sub">Uses your device\'s built-in voice — not a recording.</span>' +
      '<span class="spacer"></span>' +
      '<label>Speed <select id="speechRate"><option value="0.85">0.85×</option><option value="1" selected>1×</option>' +
      '<option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select></label>' +
      '<button class="btn small blue" id="speechPlay">▶ Listen</button>' +
      '<button class="btn small ghost" id="speechPause">Pause / Resume</button>' +
      '<button class="btn small ghost" id="speechStop">Stop</button></div>';
  }
  function wireSpeechBar(getChunks) {
    var play = document.getElementById("speechPlay");
    if (!play) return;
    play.onclick = function () {
      var rate = parseFloat(document.getElementById("speechRate").value || "1");
      speakChunks(getChunks(), rate);
    };
    document.getElementById("speechPause").onclick = pauseResumeSpeech;
    document.getElementById("speechStop").onclick = stopSpeech;
  }

  /* ---------- views ---------- */
  function viewHome() {
    stopSpeech();
    var done = Object.keys(P.lessonsDone).length, total = totalLessons();
    var pct = total ? Math.round(100 * done / total) : 0;
    var worst = weakestCategory();
    var examAttempts = P.attempts.filter(function (a) { return a.mode === "full"; });
    var lastExam = examAttempts.length ? examAttempts[examAttempts.length - 1] : null;
    var meters = DATA.categories.map(function (c) {
      var m = mastery(c.id);
      return '<div class="meterrow"><span class="lbl">' + esc(c.label) + '</span>' +
        '<span class="bar"><div style="width:' + (m === null ? 0 : m) + '%"></div></span>' +
        '<span class="pct">' + (m === null ? "not started" : m + "% · " + P.catStats[c.id].seen + " seen") + "</span></div>";
    }).join("");
    app.innerHTML =
      '<p class="kicker">Tennessee · Prov · NEC 2017</p>' +
      "<h1>LLE Exam Prep Course</h1>" +
      '<p class="sub">Limited Licensed Electrician — 40 questions · 2 hours · open book · 73% (30/40) to pass. ' +
      DATA.questions.length + " original practice questions, " + total + " lessons, " + DATA.flashcards.length + " flashcards.</p>" +
      '<div class="card"><div class="rowflex"><div><div class="bigstat">' + pct + '%</div><div class="sub">lessons complete (' + done + " of " + total + ')</div></div>' +
      '<span class="spacer"></span><a class="btn" href="#/course">Continue lessons</a></div>' +
      '<div class="progressbar" style="margin-top:10px"><div style="width:' + pct + '%"></div></div></div>' +
      '<div class="grid">' +
      '<div class="card"><h3>🎯 Weakest area</h3>' + (worst ?
        "<p><strong>" + esc(catLabel(worst.id)) + "</strong> — " + worst.pct + '% mastery</p><a class="btn small blue" href="#/practice/' + worst.id + '">Drill it now</a>' :
        "<p class='sub'>Answer some practice questions and your weakest category will show up here.</p>") + "</div>" +
      '<div class="card"><h3>📝 Exam simulation</h3>' + (lastExam ?
        "<p>Last full sim: <strong>" + lastExam.correct + "/" + lastExam.total + " (" + lastExam.pct + '%)</strong> — ' +
        (lastExam.passed ? '<span class="pass">PASS</span>' : '<span class="fail">below 73%</span>') + "</p>" :
        "<p class='sub'>No full simulation yet. 40 questions, 2-hour clock, graded at the real 73% line.</p>") +
      '<a class="btn small" href="#/exam">Start a full exam sim</a></div>' +
      '<div class="card"><h3>🃏 Flashcards</h3><p class="sub">' + DATA.flashcards.length + ' cards — the numbers worth memorizing cold.</p><a class="btn small ghost" href="#/flashcards">Review cards</a></div>' +
      "</div>" +
      '<div class="card"><h2 style="margin-top:0">Category mastery</h2>' + meters +
      '<p class="sub">Mastery counts every practice, drill, and exam answer on this device.</p></div>' +
      '<div class="card"><h3>⚙️ Your data</h3><p class="sub">Progress is stored only in this browser on this device — no account, no server. Clearing browser data erases it.</p>' +
      '<button class="btn small ghost" id="resetBtn">Reset all progress</button></div>';
    document.getElementById("resetBtn").onclick = function () {
      if (confirm("Erase all saved progress on this device? Lessons, attempts, mastery, and flashcard state will be cleared.")) {
        P = defaultProgress(); save(); viewHome();
      }
    };
    window.scrollTo(0, 0);
  }

  function viewCourse() {
    stopSpeech();
    var html = "<h1>Lessons</h1><p class='sub'>" + totalLessons() + " lessons in 8 modules. Lessons you've finished are marked ✓.</p>";
    DATA.modules.forEach(function (m) {
      html += '<div class="card"><h2 style="margin-top:0">Module ' + esc(m.number) + " — " + esc(m.title) + '</h2><p class="sub">' + esc(m.subtitle) + "</p>";
      m.lessons.forEach(function (l) {
        var done = P.lessonsDone[l.id];
        html += '<a class="lessonlink" href="#/lesson/' + l.id + '"><span>' + esc(l.title) +
          ' <span class="sub">· ' + l.minutes + ' min</span></span>' +
          (done ? '<span class="donebadge">✓ Done</span>' : '<span class="sub">Start →</span>') + "</a>";
      });
      html += "</div>";
    });
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  var LESSON_DIAGRAMS = { m2l1: "faultpath", m5l1: "boxfill", m5l3: "ohmslaw", m4l1: "burial", m3l1: "service" };
  function viewLesson(id) {
    var found = lessonById(id);
    if (!found) { viewCourse(); return; }
    var les = found.les, mod = found.mod;
    var flat = [];
    DATA.modules.forEach(function (m) { m.lessons.forEach(function (l) { flat.push(l.id); }); });
    var i = flat.indexOf(id);
    var prev = i > 0 ? flat[i - 1] : null, next = i < flat.length - 1 ? flat[i + 1] : null;
    var diagram = "";
    if (window.DIAGRAMS && LESSON_DIAGRAMS[id]) {
      var d = window.DIAGRAMS[LESSON_DIAGRAMS[id]];
      diagram = '<div class="diagram">' + d.svg + '<div class="cap">' + esc(d.caption) + "</div></div>";
    }
    var tableHtml = "";
    if (les.table) {
      tableHtml = '<table class="datatable"><caption class="refs" style="text-align:left;padding:6px 0">' + esc(les.table.caption) + "</caption>";
      les.table.rows.forEach(function (row, ri) {
        tableHtml += "<tr>" + row.map(function (cell) {
          return ri === 0 ? "<th>" + esc(cell) + "</th>" : "<td>" + esc(cell) + "</td>";
        }).join("") + "</tr>";
      });
      tableHtml += "</table>";
    }
    app.innerHTML =
      '<p class="kicker">Module ' + esc(mod.number) + " — " + esc(mod.title) + "</p>" +
      "<h1>" + esc(les.title) + "</h1>" +
      '<p class="sub">' + les.minutes + " min read · " +
      (P.lessonsDone[id] ? '<span class="donebadge">✓ Completed</span>' : "not completed yet") + "</p>" +
      speechBar() +
      '<p style="font-size:1.08rem">' + esc(les.intro) + "</p>" +
      les.body.map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("") +
      diagram + tableHtml +
      '<div class="keypoints"><h3 style="margin-top:0">Key numbers</h3><ul>' +
      les.keyPoints.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="tipbox"><strong>Test-day tip:</strong> ' + esc(les.tip) + "</div>" +
      '<p class="refs">Look it up: ' + les.necRefs.map(esc).join(" · ") + "</p>" +
      '<div class="rowflex">' +
      (prev ? '<a class="btn ghost" href="#/lesson/' + prev + '">← Prev lesson</a>' : "") +
      '<button class="btn" id="markDone">' + (P.lessonsDone[id] ? "✓ Completed — tap to undo" : "Mark lesson complete") + "</button>" +
      (next ? '<a class="btn blue" href="#/lesson/' + next + '">Next lesson →</a>' : '<a class="btn blue" href="#/exam">Go to exam sim →</a>') +
      "</div>";
    wireSpeechBar(function () {
      return [les.title + ". " + les.intro].concat(les.body)
        .concat(["Key numbers. " + les.keyPoints.join(". ")])
        .concat(["Test day tip. " + les.tip]);
    });
    document.getElementById("markDone").onclick = function () {
      if (P.lessonsDone[id]) delete P.lessonsDone[id]; else P.lessonsDone[id] = true;
      save(); viewLesson(id);
    };
    window.scrollTo(0, 0);
  }

  function viewPracticeHome() {
    stopSpeech();
    var html = "<h1>Practice by category</h1><p class='sub'>Instant feedback with the explanation and Code reference after every answer. Or take a timed 10-question drill.</p><div class='grid'>";
    DATA.categories.forEach(function (c) {
      var n = catCount(c.id), m = mastery(c.id);
      html += '<div class="card"><h3 style="margin-top:0">' + esc(c.label) + '</h3>' +
        '<p class="sub">' + n + " questions" + (m === null ? "" : " · mastery " + m + "%") + "</p>" +
        '<div class="rowflex"><a class="btn small" href="#/practice/' + c.id + '">Practice</a>' +
        '<a class="btn small blue" href="#/drill/' + c.id + '">10-question drill</a></div></div>';
    });
    html += "</div>";
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  /* generic runner for practice + drill */
  var session = null;
  function startSession(mode, catId, questions) {
    session = {
      mode: mode, catId: catId, qs: questions, idx: 0,
      answers: {}, checked: {}, startedAt: Date.now()
    };
  }
  function viewSession() {
    var s = session, q = s.qs[s.idx];
    var isChecked = !!s.checked[q.id];
    var sel = s.answers[q.id];
    var opts = q.options.map(function (o, oi) {
      var cls = "qa-opt";
      if (isChecked) {
        if (oi === q.correct) cls += " correct";
        else if (oi === sel) cls += " wrong";
      } else if (oi === sel) cls += " sel";
      return '<button class="' + cls + '" data-oi="' + oi + '"' + (isChecked ? " disabled" : "") + ">" +
        "<strong>" + "ABCD"[oi] + ".</strong> " + esc(o) + "</button>";
    }).join("");
    var explain = "";
    if (isChecked) {
      var right = sel === q.correct;
      explain = '<div class="explain"><strong>' + (right ? "✓ Correct." : "✗ Not quite — correct answer is " + "ABCD"[q.correct] + ".") +
        "</strong><p>" + esc(q.explanation) + '</p><p class="ref">Reference: ' + esc(q.ref || "") + "</p></div>";
    }
    app.innerHTML =
      '<p class="kicker">' + (s.mode === "drill" ? "Drill — " : "Practice — ") + esc(catLabel(q.category)) + "</p>" +
      "<h2>Question " + (s.idx + 1) + " of " + s.qs.length + "</h2>" +
      '<div class="progressbar"><div style="width:' + Math.round(100 * s.idx / s.qs.length) + '%"></div></div>' +
      '<div class="card"><p style="font-size:1.08rem">' + esc(q.question) + "</p>" + opts + explain +
      '<div class="rowflex">' +
      (s.idx > 0 ? '<button class="btn ghost small" id="qPrev">← Back</button>' : "") +
      '<span class="spacer"></span>' +
      (!isChecked ? '<button class="btn small" id="qCheck"' + (sel === undefined ? " disabled" : "") + ">Check answer</button>" : "") +
      (s.idx < s.qs.length - 1 ? '<button class="btn blue small" id="qNext">Next →</button>' :
        '<button class="btn small" id="qFinish">Finish</button>') +
      "</div></div>";
    Array.prototype.forEach.call(app.querySelectorAll(".qa-opt"), function (b) {
      b.onclick = function () { s.answers[q.id] = parseInt(b.getAttribute("data-oi"), 10); viewSession(); };
    });
    var chk = document.getElementById("qCheck");
    if (chk) chk.onclick = function () {
      s.checked[q.id] = true;
      recordAnswer(q.category, s.answers[q.id] === q.correct);
      viewSession();
    };
    var nx = document.getElementById("qNext"); if (nx) nx.onclick = function () { s.idx++; viewSession(); };
    var pv = document.getElementById("qPrev"); if (pv) pv.onclick = function () { s.idx--; viewSession(); };
    var fn = document.getElementById("qFinish"); if (fn) fn.onclick = finishSession;
    window.scrollTo(0, 0);
  }
  function finishSession() {
    var s = session;
    var correct = 0, total = s.qs.length;
    s.qs.forEach(function (q) { if (s.answers[q.id] === q.correct) correct++; });
    var pct = Math.round(100 * correct / total);
    P.attempts.push({ date: new Date().toISOString(), mode: s.mode, category: s.catId, total: total, correct: correct, pct: pct, passed: null });
    save();
    app.innerHTML = "<h1>" + (s.mode === "drill" ? "Drill" : "Practice") + " complete</h1>" +
      '<div class="card center"><div class="bigstat">' + correct + " / " + total + "</div>" +
      "<p>" + pct + "% — " + esc(catLabel(s.catId)) + "</p>" +
      '<div class="rowflex" style="justify-content:center"><a class="btn" href="#/practice">More practice</a>' +
      '<a class="btn blue" href="#/exam">Full exam sim</a></div></div>';
    session = null;
    window.scrollTo(0, 0);
  }
  function viewPractice(catId) {
    var qs = shuffle(DATA.questions.filter(function (q) { return q.category === catId; }));
    if (!qs.length) { viewPracticeHome(); return; }
    startSession("practice", catId, qs); viewSession();
  }
  function viewDrill(catId) {
    var qs = shuffle(DATA.questions.filter(function (q) { return q.category === catId; })).slice(0, 10);
    if (!qs.length) { viewPracticeHome(); return; }
    startSession("drill", catId, qs); viewSession();
  }

  /* ---------- flashcards ---------- */
  var fc = { idx: 0, order: null };
  function viewFlashcards() {
    stopSpeech();
    if (!fc.order) fc.order = shuffle(DATA.flashcards.map(function (_, i) { return i; }));
    var total = DATA.flashcards.length;
    var knownCount = Object.keys(P.flashcards).filter(function (k) { return P.flashcards[k] === "known"; }).length;
    var cardIdx = fc.order[fc.idx % total];
    var card = DATA.flashcards[cardIdx];
    var state = P.flashcards[cardIdx];
    app.innerHTML = "<h1>Flashcards</h1>" +
      '<p class="sub">Card ' + (fc.idx % total + 1) + " of " + total + " · " + knownCount + ' marked "know it". Tap the card to flip.</p>' +
      '<div class="flashcard" id="fcCard"><div class="flashcard-inner">' +
      '<div class="flashface"><span class="tag">' + esc(card.tag) + "</span><div>" + esc(card.front) + '</div><p class="sub" style="font-size:.85rem">tap to flip</p></div>' +
      '<div class="flashface back"><span class="tag">' + esc(card.tag) + "</span><div>" + esc(card.back) + "</div></div>" +
      "</div></div>" +
      '<div class="rowflex" style="justify-content:center">' +
      '<button class="btn ghost" id="fcPrev">← Prev</button>' +
      '<button class="btn" id="fcLearning">Still learning</button>' +
      '<button class="btn blue" id="fcKnown">Know it ✓</button>' +
      '<button class="btn ghost" id="fcNext">Next →</button></div>' +
      (state ? '<p class="center sub" style="margin-top:10px">This card is marked: ' + (state === "known" ? "Know it ✓" : "Still learning") + "</p>" : "") +
      '<p class="center"><button class="btn small ghost" id="fcShuffle">Shuffle deck</button></p>';
    var el = document.getElementById("fcCard");
    el.onclick = function () { el.classList.toggle("flipped"); };
    document.getElementById("fcPrev").onclick = function () { fc.idx = (fc.idx - 1 + total) % total; viewFlashcards(); };
    document.getElementById("fcNext").onclick = function () { fc.idx = (fc.idx + 1) % total; viewFlashcards(); };
    document.getElementById("fcKnown").onclick = function () { P.flashcards[cardIdx] = "known"; save(); fc.idx++; viewFlashcards(); };
    document.getElementById("fcLearning").onclick = function () { P.flashcards[cardIdx] = "learning"; save(); fc.idx++; viewFlashcards(); };
    document.getElementById("fcShuffle").onclick = function () { fc.order = shuffle(fc.order); fc.idx = 0; viewFlashcards(); };
    window.scrollTo(0, 0);
  }

  /* ---------- exam simulation ---------- */
  var EXAM_SECONDS = 2 * 60 * 60, PASS_PCT = 73, EXAM_N = 40;
  var exam = null, examTimer = null;
  function examSample() {
    // sample proportionally across categories, like the real exam blueprint
    var byCat = {};
    DATA.categories.forEach(function (c) {
      byCat[c.id] = shuffle(DATA.questions.filter(function (q) { return q.category === c.id; }));
    });
    var weights = { services: 7, grounding: 5, boxes: 5, wiring: 4, protection: 4, equipment: 4, general: 4, osha: 4, state: 3 };
    var picked = [];
    Object.keys(weights).forEach(function (cid) {
      picked = picked.concat(byCat[cid].splice(0, Math.min(weights[cid], byCat[cid].length)));
    });
    var rest = [];
    Object.keys(byCat).forEach(function (cid) { rest = rest.concat(byCat[cid]); });
    rest = shuffle(rest);
    while (picked.length < EXAM_N && rest.length) picked.push(rest.pop());
    return shuffle(picked.slice(0, EXAM_N));
  }
  function viewExamIntro() {
    stopExamTimer();
    app.innerHTML = "<h1>Full exam simulation</h1>" +
      '<div class="card"><p>The real Prov LLE format:</p><ul>' +
      "<li><strong>40 questions</strong> sampled across all nine categories</li>" +
      "<li><strong>2-hour timer</strong> (3 minutes per question on average)</li>" +
      "<li><strong>73% to pass — 30 of 40</strong>, the real line</li>" +
      "<li>Flag questions and come back; review every answer at the end</li></ul>" +
      '<p class="sub">Treat it like test day: NEC, Ugly\'s, and OSHA book open, nothing else.</p>' +
      '<button class="btn" id="startExam">Start the clock — 40 questions</button></div>';
    document.getElementById("startExam").onclick = function () {
      exam = { qs: examSample(), idx: 0, answers: {}, flags: {}, left: EXAM_SECONDS, finished: false };
      examTimer = setInterval(function () {
        exam.left -= 1;
        var t = document.getElementById("examTimer");
        if (t) { t.textContent = fmtTime(exam.left); if (exam.left <= 300) t.classList.add("low"); }
        if (exam.left <= 0) finishExam();
      }, 1000);
      viewExamQ();
    };
    window.scrollTo(0, 0);
  }
  function fmtTime(sec) {
    sec = Math.max(0, sec);
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return (h > 0 ? h + ":" : "") + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function stopExamTimer() { if (examTimer) { clearInterval(examTimer); examTimer = null; } }
  function viewExamQ() {
    var q = exam.qs[exam.idx], sel = exam.answers[q.id];
    var nav = exam.qs.map(function (qq, i) {
      var cls = [];
      if (exam.answers[qq.id] !== undefined) cls.push("answered");
      if (exam.flags[qq.id]) cls.push("flagged");
      if (i === exam.idx) cls.push("current");
      return '<button class="' + cls.join(" ") + '" data-i="' + i + '">' + (i + 1) + "</button>";
    }).join("");
    var opts = q.options.map(function (o, oi) {
      return '<button class="qa-opt' + (oi === sel ? " sel" : "") + '" data-oi="' + oi + '"><strong>' + "ABCD"[oi] + ".</strong> " + esc(o) + "</button>";
    }).join("");
    app.innerHTML =
      '<div class="rowflex"><p class="kicker" style="margin:0">Exam sim · ' + esc(catLabel(q.category)) + '</p><span class="spacer"></span>' +
      '<span class="timer" id="examTimer">' + fmtTime(exam.left) + "</span></div>" +
      "<h2>Question " + (exam.idx + 1) + " of " + exam.qs.length + "</h2>" +
      '<div class="card"><p style="font-size:1.08rem">' + esc(q.question) + "</p>" + opts +
      '<div class="rowflex">' +
      (exam.idx > 0 ? '<button class="btn ghost small" id="ePrev">← Back</button>' : "") +
      '<button class="btn ghost small" id="eFlag">' + (exam.flags[q.id] ? "🚩 Flagged — tap to unflag" : "Flag for review") + "</button>" +
      '<span class="spacer"></span>' +
      (exam.idx < exam.qs.length - 1 ? '<button class="btn blue small" id="eNext">Next →</button>' : "") +
      '<button class="btn small" id="eFinish">Submit exam</button></div></div>' +
      '<div class="navgrid" id="examNav">' + nav + "</div>" +
      '<p class="sub">Blue = answered · orange outline = flagged. Unanswered questions count as wrong, so put a best guess on everything before submitting.</p>';
    Array.prototype.forEach.call(app.querySelectorAll(".qa-opt"), function (b) {
      b.onclick = function () { exam.answers[q.id] = parseInt(b.getAttribute("data-oi"), 10); viewExamQ(); };
    });
    Array.prototype.forEach.call(document.querySelectorAll("#examNav button"), function (b) {
      b.onclick = function () { exam.idx = parseInt(b.getAttribute("data-i"), 10); viewExamQ(); };
    });
    var pv = document.getElementById("ePrev"); if (pv) pv.onclick = function () { exam.idx--; viewExamQ(); };
    var nx = document.getElementById("eNext"); if (nx) nx.onclick = function () { exam.idx++; viewExamQ(); };
    document.getElementById("eFlag").onclick = function () { exam.flags[q.id] = !exam.flags[q.id]; viewExamQ(); };
    document.getElementById("eFinish").onclick = function () {
      var un = exam.qs.filter(function (qq) { return exam.answers[qq.id] === undefined; }).length;
      if (un > 0 && !confirm(un + " question(s) still unanswered — they count as wrong. Submit anyway?")) return;
      finishExam();
    };
  }
  function finishExam() {
    if (!exam || exam.finished) return;
    exam.finished = true; stopExamTimer();
    var correct = 0;
    exam.qs.forEach(function (q) {
      var ok = exam.answers[q.id] === q.correct;
      if (ok) correct++;
      recordAnswer(q.category, ok);
    });
    var pct = Math.round(100 * correct / exam.qs.length);
    var passed = (100 * correct / exam.qs.length) >= PASS_PCT; // unrounded: 29/40 = 72.5% must FAIL; real line is 30/40
    P.attempts.push({ date: new Date().toISOString(), mode: "full", category: null, total: exam.qs.length, correct: correct, pct: pct, passed: passed });
    save();
    var review = exam.qs.map(function (q, i) {
      var yours = exam.answers[q.id];
      var ok = yours === q.correct;
      return '<div class="card"><p><strong>Q' + (i + 1) + " — " + esc(catLabel(q.category)) + "</strong> " +
        (ok ? '<span class="pass">✓ Correct</span>' : '<span class="fail">✗ ' + (yours === undefined ? "Unanswered" : "You picked " + "ABCD"[yours]) + " · correct: " + "ABCD"[q.correct] + "</span>") + "</p>" +
        "<p>" + esc(q.question) + "</p>" +
        '<div class="explain"><p>' + esc(q.explanation) + '</p><p class="ref">Reference: ' + esc(q.ref || "") + "</p></div></div>";
    }).join("");
    app.innerHTML = "<h1>Exam results</h1>" +
      '<div class="card center"><div class="bigstat">' + correct + " / " + exam.qs.length + " — " + pct + "%</div>" +
      "<p>" + (passed ? '<span class="pass">✓ PASS</span> — at or above the 73% line (30/40).' :
        '<span class="fail">Below the line</span> — the real exam needs 30 of 40 (73%). Check your weakest categories on the home page and drill them.') + "</p>" +
      '<div class="rowflex" style="justify-content:center"><a class="btn" href="#/exam">Retake sim</a><a class="btn blue" href="#/">Home</a></div></div>' +
      "<h2>Review — every question</h2>" + review;
    exam = null;
    window.scrollTo(0, 0);
  }

  /* ---------- books & exam day ---------- */
  function viewBooks() {
    stopSpeech();
    app.innerHTML = "<h1>Books &amp; Exam Day</h1>" +
      '<div class="card"><h2 style="margin-top:0">The exam (Prov)</h2><ul>' +
      "<li><strong>40 questions · 120 minutes · open book</strong></li>" +
      "<li><strong>73% to pass</strong> — that's 30 of 40</li>" +
      "<li><strong>$53 per attempt</strong>; retakes allowed, no waiting period, no pre-approval or experience required</li>" +
      "<li>License fee $50 for 2 years (Board for Licensing Contractors) after you pass</li>" +
      "<li>Centers include MTSU Murfreesboro and Motlow Tullahoma, plus Prov remote proctoring</li>" +
      "<li>The state LLE is <strong>not</strong> accepted in the ~28 exempt jurisdictions (Nashville, Memphis, Knoxville, Chattanooga, etc.)</li></ul></div>" +
      '<div class="card"><h2 style="margin-top:0">The only three books allowed</h2>' +
      '<table class="datatable"><tr><th>Book</th><th>Edition</th><th>Why it matters</th></tr>' +
      "<tr><td>NFPA 70 — National Electrical Code</td><td><strong>2017</strong></td><td>The exam is graded on the 2017 edition. A 2023/2026 NEC has different sections and tables — don't bring one.</td></tr>" +
      "<tr><td>Ugly's Electrical References</td><td><strong>2020</strong></td><td>Fast formulas, Ohm's law, conduit fill shortcuts.</td></tr>" +
      "<tr><td>OSHA 29 CFR Part 1926 (Mancomm)</td><td>Current Mancomm printing</td><td>Construction safety rules for the OSHA questions.</td></tr></table>" +
      '<p class="sub">NFPA 70E is NOT on Prov\'s LLE list (it was in older PSI-era bundles) and would not be allowed in the room.</p></div>' +
      '<div class="card"><h2 style="margin-top:0">Check-in rules for your books</h2><ul>' +
      "<li>Highlighting and underlining (done ahead of time) are fine</li>" +
      "<li><strong>Permanent tabs are allowed</strong> — pre-printed, or printed labels on permanent tabs</li>" +
      "<li><strong>No handwritten notes</strong> anywhere in the books</li>" +
      "<li><strong>No removable tabs or Post-its</strong>, no photocopies, no study guides</li>" +
      "<li>Books are inspected at check-in; bring photo ID</li></ul>" +
      speechBar() +
      '<p class="sub">Strategy in one line: 3 minutes per question. If a lookup runs long, guess, flag, and move — banked time at the end is for the flagged ones.</p></div>';
    wireSpeechBar(function () {
      return ["Books and exam day.",
        "The Prov LLE exam is 40 questions in 120 minutes, open book, 73 percent to pass — 30 of 40. It costs 53 dollars per attempt, with no pre-approval and no experience required.",
        "Only three books are allowed: the 2017 National Electrical Code, Ugly's Electrical References 2020, and OSHA 29 CFR Part 1926. Permanent tabs and highlighting are allowed. Handwritten notes and removable tabs are not."];
    });
    window.scrollTo(0, 0);
  }

  /* ---------- router ---------- */
  function route() {
    var hash = location.hash || "#/";
    var parts = hash.replace(/^#\//, "").split("/");
    var head = parts[0] || "";
    if (exam && head !== "exam") { stopExamTimer(); exam = null; }
    if (head === "" ) viewHome();
    else if (head === "course") viewCourse();
    else if (head === "lesson" && parts[1]) viewLesson(parts[1]);
    else if (head === "practice" && parts[1]) viewPractice(parts[1]);
    else if (head === "practice") viewPracticeHome();
    else if (head === "drill" && parts[1]) viewDrill(parts[1]);
    else if (head === "flashcards") viewFlashcards();
    else if (head === "exam") viewExamIntro();
    else if (head === "books") viewBooks();
    else viewHome();
  }
  window.addEventListener("hashchange", route);
  route();
})();
