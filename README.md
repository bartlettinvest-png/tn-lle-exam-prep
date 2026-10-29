# Tennessee LLE Exam Prep Course

A free, dependency-free static website for studying for the **Tennessee Limited Licensed
Electrician (LLE)** exam administered by Prov — 40 questions, 2 hours, open book, 73%
(30/40) to pass, graded on the **2017 NEC**.

It is a standalone copy of a course originally built as a private Muse app, rebuilt as
plain HTML/CSS/JS so anyone can host and share it. **No build step, no frameworks, no
accounts, no server.**

## What's inside

- **22 lessons in 8 modules** — grounding & bonding, services & load calculations,
  wiring methods, boxes & conduit fill, overcurrent protection, motors & equipment,
  OSHA construction safety, and exam-day strategy — with key numbers, Code references,
  reference tables, test-day tips, diagrams, and device-voice read-aloud.
- **260 original practice questions** across 9 categories, each with the correct answer,
  an explanation, and the NEC/OSHA reference. Practice by category with instant feedback,
  or take timed 10-question drills.
- **Full exam simulation** — 40 questions sampled across the categories, a real 2-hour
  timer, flag-for-review, a question navigator, and an end-of-exam review, graded at the
  real 73% pass line.
- **34 flashcards** with "know it / still learning" tracking.
- **Books & Exam Day page** — the three Prov-approved references (NEC 2017, Ugly's
  Electrical References 2020, OSHA 29 CFR 1926) and the check-in rules for tabbed books.

> All questions are **original practice questions written for this course**. They are
> **not** official Prov exam items and are not copied from any leaked or published exam.

## How progress works (no logins)

There are no accounts. Each visitor's progress — completed lessons, attempt history,
per-category mastery, weakest-area tracking, and flashcard state — is saved in that
visitor's own browser using `localStorage`, on that device only. Progress does not sync
between devices, and clearing the browser's site data erases it. A **Reset all progress**
button on the home page clears it manually.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell and navigation |
| `style.css` | All styling (mobile-friendly) |
| `data.js` | Course content: lessons, questions, flashcards |
| `app.js` | App logic: router, practice, drills, exam sim, flashcards, speech, progress |
| `diagrams.js` | Inline SVG teaching diagrams |

## Publish it on GitHub Pages

1. Create a free GitHub account if you don't have one, then click **New repository**.
2. Name it something like `tn-lle-exam-prep`, set it to **Public**, and create it.
3. Click **uploading an existing file** and upload **all the files in this folder**
   (`index.html`, `style.css`, `data.js`, `app.js`, `diagrams.js`, and this `README.md`).
   Commit the upload.
4. In the repo, go to **Settings → Pages**.
5. Under "Build and deployment", choose **Deploy from a branch**, select the **main**
   branch and the **/(root)** folder, and save.
6. Wait a minute or two. GitHub shows your live URL at the top of the Pages settings,
   in the form `https://<your-username>.github.io/tn-lle-exam-prep/`. Share that link —
   anyone can open it and study; their progress saves on their own device.

To update the site later, just upload the changed files again — Pages republishes
automatically.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- The read-aloud ("Listen") feature uses your device's built-in speech voice
  (the browser's `speechSynthesis`), so narration quality depends on the device and
  no audio files are included.
- Exam facts (format, fee, book list, tab rules) reflect the Prov Candidate
  Information Bulletin for the Tennessee LLE as of October 2026. Check
  [provexam.com](https://provexam.com) for current details before scheduling.
