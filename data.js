/* Course data — generated from the Tennessee LLE Exam Prep Course content.
   All questions are original practice questions written for this course. */
window.COURSE_DATA = {
 "categories": [
  {
   "id": "general",
   "label": "General NEC & Definitions",
   "questionCount": 25
  },
  {
   "id": "grounding",
   "label": "Grounding & Bonding — Art. 250",
   "questionCount": 35
  },
  {
   "id": "services",
   "label": "Services, Feeders & Load Calcs — Art. 220/230",
   "questionCount": 40
  },
  {
   "id": "wiring",
   "label": "Wiring Methods — Art. 300–398",
   "questionCount": 30
  },
  {
   "id": "protection",
   "label": "Overcurrent & Protection — Art. 240/210",
   "questionCount": 30
  },
  {
   "id": "boxes",
   "label": "Boxes, Conduit Fill & Math — Ch. 9 / 314",
   "questionCount": 35
  },
  {
   "id": "equipment",
   "label": "Equipment, Motors & Appliances — Art. 400–430",
   "questionCount": 30
  },
  {
   "id": "osha",
   "label": "OSHA Safety — 29 CFR 1926",
   "questionCount": 20
  },
  {
   "id": "state",
   "label": "Tennessee Law & LLE Scope",
   "questionCount": 15
  }
 ],
 "modules": [
  {
   "id": "m1",
   "lessons": [
    {
     "body": [
      "The LLE covers electrical work on projects under $25,000. Work at or above that threshold requires a full electrical contractor license (CE). Taking money for a job over the limit on an LLE is the fastest way to lose the license you just earned.",
      "The exam is administered by Prov. It is 40 questions, you get 2 hours, it is open book, and you need 73% — that is 30 correct answers out of 40 — to pass. There is no experience requirement and no pre-approval: you register, you test, you pass, you apply.",
      "Only three references are allowed in the room: NFPA 70 National Electrical Code 2017 edition, Ugly's Electrical References 2020 edition, and OSHA 29 CFR Part 1926 (Mancomm). Permanent tabs and highlighting are allowed. Handwritten notes, loose Post-its, and study guides are not — books are inspected at check-in.",
      "The LLE is not accepted in the roughly 28 exempt jurisdictions that run their own licensing — places like Nashville/Davidson County, Knoxville, and Memphis. Everywhere else in Tennessee, including Putnam, Cumberland, and White counties, the state LLE is the credential."
     ],
     "id": "m1l1",
     "intro": "The Limited Licensed Electrician is Tennessee's entry license for smaller electrical work — and the exam is built to test whether you can find and apply the Code, not memorize it.",
     "keyPoints": [
      "Project limit: under $25,000 per project",
      "40 questions · 2 hours · open book · 73% (30/40) to pass",
      "Books: NEC 2017, Ugly's 2020, OSHA 1926 — tabs OK, handwriting NOT OK",
      "Not valid in exempt local jurisdictions (Nashville, Knoxville, Memphis, etc.)"
     ],
     "minutes": 6,
     "necRefs": [
      "Prov Candidate Bulletin § LLE",
      "Tenn. Code Ann. Title 62, Ch. 6"
     ],
     "tip": "Budget 3 minutes per question. If a lookup passes 3 minutes, mark your best guess, flag it, and move on — you can return with time left. Unanswered questions are always wrong.",
     "title": "What the LLE actually lets you do"
    },
    {
     "body": [
      "Chapter 1 (Articles 90–110) is general: definitions in Article 100, installation rules in 110. Chapter 2 (200–250) is wiring and protection: branch circuits, feeders, services, and grounding. Chapter 3 (300–398) is wiring methods — cable and raceways. Chapter 4 (400–490) is equipment. Chapters 5–7 cover special occupancies, equipment, and conditions. Chapter 8 is communications. Chapter 9 is tables — conduit fill and conductor properties.",
      "The single fastest tool in the book is the index at the back, plus the table of contents for each article. Exam questions are written from specific sections; the keyword in the question stem is almost always an index word. 'Tamper-resistant' → index → 406.12. 'Working space' → 110.26.",
      "Annex C gives conduit fill for conductors of the same size. Table 310.15(B)(16) gives ampacity. Chapter 9 Table 4 gives raceway dimensions and Table 5 gives conductor dimensions — together they solve every fill question.",
      "Watch for the NEC's mandatory language: 'shall' means required, 'shall not' means prohibited. Informational notes and annex material are not enforceable — and exam distractors love to quote them as if they were rules."
     ],
     "id": "m1l2",
     "intro": "The NEC is organized so that the answer to almost any exam question lives in a predictable neighborhood. Learn the map and the open book becomes a weapon.",
     "keyPoints": [
      "Ch. 1 General · Ch. 2 Wiring & Protection · Ch. 3 Wiring Methods · Ch. 4 Equipment · Ch. 9 Tables",
      "Index first, article table of contents second, keyword search third",
      "Table 310.15(B)(16) = ampacity · Ch. 9 Tables 1, 4, 5 = fill",
      "'Shall' = mandatory. Notes and annexes are not rules."
     ],
     "minutes": 8,
     "necRefs": [
      "NEC 90.3",
      "NEC 90.5",
      "Article 100"
     ],
     "tip": "Tab these before test day: 110.26, Table 220.12 / 220.42, 250.66, 250.122, Table 310.15(B)(16), 314.16, Ch. 9 Tables 1/4/5, Annex C. Those tabs alone cover a large share of LLE questions.",
     "title": "Anatomy of the NEC — finding any rule in 60 seconds"
    },
    {
     "body": [
      "Grounded vs. grounding vs. bonded is the classic trap trio. The grounded conductor is a system or circuit conductor that is intentionally grounded — in a premises system, that's the neutral. The grounding conductor (equipment grounding conductor) normally carries no current and connects equipment to ground for fault clearing. Bonded means connected to establish electrical continuity and conductivity.",
      "A branch circuit runs between the final overcurrent device and the outlets. A feeder runs between the service equipment (or source) and the final branch-circuit overcurrent device. A service is the conductors and equipment delivering energy from the serving utility to the premises.",
      "Continuous load: maximum current expected to continue for 3 hours or more. Continuous loads drive the 125% sizing rules everywhere in the Code. Accessible, readily accessible, and exposed are three different definitions — 'readily accessible' adds 'without climbing over obstacles or using ladders.'",
      "Article 110 sets the physical rules: working space (110.26), conductor termination temperature limits (110.14(C)), listing and labeling (110.3(B) — install per instructions), and interrupting rating (110.9). Equipment must be installed according to its listing — the inspector and the exam both enforce the manufacturer's instructions."
     ],
     "id": "m1l3",
     "intro": "A surprising number of exam questions are pure vocabulary. Article 100 definitions are testable word-for-word.",
     "keyPoints": [
      "Grounded conductor = neutral (intentionally grounded, carries current)",
      "Grounding conductor (EGC) = normally no current, clears faults",
      "Continuous load = 3 hours or more at maximum current",
      "110.3(B): listed equipment must be installed per its instructions"
     ],
     "minutes": 8,
     "necRefs": [
      "Article 100",
      "110.3(B)",
      "110.14(C)",
      "110.26"
     ],
     "table": {
      "caption": "110.26(A) — Minimum depth of working space (0–150V to ground)",
      "rows": [
       [
        "Condition",
        "Clear depth"
       ],
       [
        "Exposed live parts on one side, none on other",
        "3 ft"
       ],
       [
        "Exposed live parts one side, grounded parts other",
        "3 ft"
       ],
       [
        "Exposed live parts on both sides",
        "3 ft"
       ],
       [
        "Width of working space",
        "30 in. or width of equipment, whichever is greater"
       ],
       [
        "Height of working space",
        "6½ ft or height of equipment, whichever is greater"
       ]
      ]
     },
     "tip": "When a question hinges on a defined term, go to Article 100 and read the exact definition. Distractor answers usually swap 'grounded' and 'grounding' — that swap is the tell.",
     "title": "Definitions that decide questions — Article 100 & 110"
    }
   ],
   "number": "01",
   "subtitle": "Win the open book before you open it",
   "title": "How the LLE Exam & the NEC Work"
  },
  {
   "id": "m2",
   "lessons": [
    {
     "body": [
      "250.4 lays out the two jobs. System grounding connects one conductor (the neutral) to earth to limit voltage from surges and contact with higher-voltage lines. Equipment grounding connects all metal parts together and back to the source so that when a hot conductor faults to a metal box, a huge fault current flows and the breaker trips instantly.",
      "The earth itself is a terrible conductor — 250.4(A)(5) says flatly that the earth shall not be considered an effective ground-fault current path. A ground rod alone will never trip a 20A breaker; that's why the EGC run with the circuit conductors matters.",
      "Bonding is the connective tissue: bonding jumpers tie metal enclosures, raceways, and the grounding electrode system together so everything sits at the same potential and fault current has a low-impedance path back to the source.",
      "The main bonding jumper connects the grounded conductor to the EGC and enclosure at the service — and only at the service (or first disconnect). Downstream, neutrals and grounds must be kept separate; bonding them in a subpanel puts neutral current on metal parts."
     ],
     "id": "m2l1",
     "intro": "Grounding questions are the LLE's home turf. The core idea: the earth is not the fault-clearing path — the equipment grounding conductor is.",
     "keyPoints": [
      "Earth is NOT an effective fault path — 250.4(A)(5)",
      "EGC's job: carry fault current back to trip the breaker fast",
      "Main bonding jumper: at the service only — neutrals/grounds separate downstream",
      "Bonding = same potential + low-impedance fault path"
     ],
     "minutes": 9,
     "necRefs": [
      "250.4",
      "250.24",
      "250.28",
      "250.142"
     ],
     "tip": "Any question describing neutral and ground bonded in a subpanel or downstream panel: the answer is that it's a violation. This shows up on nearly every version of the test.",
     "title": "Why we ground: fault current, not lightning"
    },
    {
     "body": [
      "250.50: all grounding electrodes present at a building must be bonded together into one grounding electrode system — metal water pipe, building steel, concrete-encased electrode (Ufer), ground ring, rods, pipes, plates. You don't get to pick your favorite; if it exists, it joins the system.",
      "A metal water pipe electrode must be supplemented by another electrode (250.53(D)(2)) because plastic repairs can isolate it. A single rod, pipe, or plate must be supplemented by another electrode unless a resistance test shows 25 ohms or less to ground (250.53(A)(2)). Rods are driven at least 8 ft in contact with soil, and multiple rods are spaced at least 6 ft apart.",
      "The concrete-encased electrode — 20 ft of rebar or bare copper in the footing — is required to be used when present on new construction. It's the best electrode on the list, and inspectors ask for it by name ('Ufer').",
      "The grounding electrode conductor (GEC) is sized from Table 250.66 based on the largest service-entrance conductor. Example: 2/0 copper service conductors → #4 copper GEC. But the GEC to a rod electrode never has to be larger than #6 copper (250.66(A)) — a favorite exam ceiling rule."
     ],
     "id": "m2l2",
     "intro": "Know which electrodes count, which must be used, and how big the wire to them must be.",
     "keyPoints": [
      "All electrodes present must be bonded together — 250.50",
      "Single rod: supplement it unless ≤25 Ω — 250.53(A)(2)",
      "Rods: 8 ft in soil, spaced ≥6 ft apart",
      "GEC to a rod never larger than #6 Cu — 250.66(A)"
     ],
     "minutes": 10,
     "necRefs": [
      "250.50",
      "250.52",
      "250.53",
      "250.66",
      "250.68"
     ],
     "table": {
      "caption": "Table 250.66 — Grounding electrode conductor (copper service conductor → copper GEC)",
      "rows": [
       [
        "Service conductor (Cu)",
        "GEC (Cu)"
       ],
       [
        "2 AWG or smaller",
        "8 AWG"
       ],
       [
        "1 or 1/0 AWG",
        "6 AWG"
       ],
       [
        "2/0 or 3/0 AWG",
        "4 AWG"
       ],
       [
        "Over 3/0 – 350 kcmil",
        "2 AWG"
       ],
       [
        "Over 350 – 600 kcmil",
        "1/0 AWG"
       ]
      ]
     },
     "tip": "If the question gives you service conductor size and asks for the GEC, go straight to Table 250.66 — then check the ceiling rules: #6 max to rods, #4 max to a concrete-encased electrode (250.66(B)).",
     "title": "Grounding electrodes & the GEC — 250.50 to 250.70"
    },
    {
     "body": [
      "Table 250.122 is indexed by the rating of the overcurrent device ahead of the circuit: 15A → #14 Cu, 20A → #12 Cu, 30–60A → #10 Cu, 100A → #8 Cu, 200A → #6 Cu. When conductors are upsized for voltage drop, the EGC must be upsized proportionally by circular mil area (250.122(B)) — another classic exam item.",
      "Metal raceways — EMT, rigid, IMC — can serve as the EGC themselves when properly installed (250.118). Flexible metal conduit can too, but only within length and size limits and not as the sole path in many common cases; when in doubt for exam purposes, a wire-type EGC inside flex is the safe answer unless the question states the 250.118 conditions are met.",
      "Receptacle grounding: self-grounding receptacles, grounding contacts bonded to the box, and 250.146 methods. Replacing old two-wire receptacles: 406.4(D) allows a GFCI replacement marked 'No Equipment Ground' — and prohibits running a lone ground to a random pipe instead of an approved point in 250.130(C).",
      "Bonding around services: service raceways and enclosures are bonded per 250.92, using bonding jumpers sized per 250.102(C) from the grounded conductor size — not from Table 250.122."
     ],
     "id": "m2l3",
     "intro": "The EGC is sized by the breaker protecting the circuit — not by the circuit conductor size. That one sentence answers a whole family of questions.",
     "keyPoints": [
      "EGC size ← breaker size (Table 250.122), not wire size",
      "Upsize conductors for voltage drop → upsize EGC proportionally — 250.122(B)",
      "EMT/rigid can be the EGC — 250.118",
      "Two-wire replacement: GFCI marked 'No Equipment Ground' — 406.4(D)"
     ],
     "minutes": 8,
     "necRefs": [
      "250.102",
      "250.118",
      "250.122",
      "250.130(C)",
      "406.4(D)"
     ],
     "table": {
      "caption": "Table 250.122 — Wire-type EGC (selected rows, copper)",
      "rows": [
       [
        "Breaker / fuse",
        "Copper EGC"
       ],
       [
        "15 A",
        "14 AWG"
       ],
       [
        "20 A",
        "12 AWG"
       ],
       [
        "30–60 A",
        "10 AWG"
       ],
       [
        "100 A",
        "8 AWG"
       ],
       [
        "200 A",
        "6 AWG"
       ],
       [
        "400 A",
        "3 AWG"
       ]
      ]
     },
     "tip": "Two tables, two triggers: service conductors → 250.66 (GEC). Breaker size → 250.122 (EGC). Mixing them up is the most common grounding error on practice tests.",
     "title": "Equipment grounding conductors — Table 250.122"
    }
   ],
   "number": "02",
   "subtitle": "Article 250 — the most-tested article on the exam",
   "title": "Grounding & Bonding"
  },
  {
   "id": "m3",
   "lessons": [
    {
     "body": [
      "A building gets one service (230.2) unless special conditions apply. Service conductors run from the utility point of connection to the service disconnecting means, which must be located nearest the point of entrance of the service conductors (230.70(A)(1)) — you can't run unfused service conductors deep into a building.",
      "The classic rule: not more than six disconnects grouped at one location to disconnect a service (230.71). The 'six throws of the hand' question appears constantly. Each service disconnect must be permanently marked (230.70(B)).",
      "Overhead service drops need clearance: 8 ft over roofs (with exceptions down to 3 ft for sloped roofs in limited cases), 10 ft at the drip loop and above sidewalks accessible to pedestrians, 12 ft over residential driveways, 18 ft over public streets (230.24).",
      "Underground service laterals: burial per Table 300.5, warning ribbon required for service laterals not encased in concrete or direct-buried... the ribbon sits at least 12 in. above the installation (300.5(D)(3)). Service equipment must be marked with available fault current where required (110.24) for other-than-dwelling services."
     ],
     "id": "m3l1",
     "intro": "One service, one disconnect location, clear rules on height and protection. Article 230 questions are short and factual.",
     "keyPoints": [
      "One service per building (special cases excepted) — 230.2",
      "Max six grouped service disconnects — 230.71",
      "Disconnect nearest the point of conductor entrance — 230.70(A)(1)",
      "Clearances: 10 ft sidewalk · 12 ft res. driveway · 18 ft street — 230.24"
     ],
     "minutes": 9,
     "necRefs": [
      "230.2",
      "230.24",
      "230.70",
      "230.71",
      "230.79"
     ],
     "tip": "Minimum service size is a giveaway pair: 60A minimum for small buildings, 100A / 3-wire minimum for a one-family dwelling — 230.79(C). If a dwelling question offers 100A, it's rarely a trick.",
     "title": "Services — Article 230 essentials"
    },
    {
     "body": [
      "Step 1 — General lighting load: floor area (outside dimensions, not including open porches/garages) × 3 VA per sq ft (Table 220.12). Step 2 — Add 1,500 VA for each small-appliance branch circuit (minimum two) and 1,500 VA for the laundry circuit (220.52). Step 3 — Apply Table 220.42 demand: first 3,000 VA at 100%, the remainder at 35%.",
      "Step 4 — Appliances: fastened-in-place appliances (four or more) get a 75% demand (220.53). Dryers: 5,000 VA or nameplate, whichever is larger (220.54), with demand factors for multiple dryers. Ranges: use Table 220.55 — a single 12 kW range demands 8 kW.",
      "Step 5 — HVAC: take the larger of heating or air conditioning at 100% (220.60 — they don't run simultaneously), and add 25% of the largest motor load (220.50 / 430.24). The neutral (grounded conductor) gets its own demand: 70% on dryer/range loads over 200A of calculated load per 220.61.",
      "Worked example: 1,500 sq ft house → 4,500 VA lighting + 3,000 small appliance + 1,500 laundry = 9,000 VA. Demand: 3,000 @100% + 6,000 @35% = 3,000 + 2,100 = 5,100 VA before appliances, dryer, range, and HVAC are added."
     ],
     "id": "m3l2",
     "intro": "Load calc questions are free points if you run the same five steps every time. The exam uses the standard method of Article 220.",
     "keyPoints": [
      "3 VA/sq ft general lighting — Table 220.12",
      "1,500 VA each: small-appliance circuits (min 2) + laundry — 220.52",
      "Demand: first 3,000 VA @100%, rest @35% — Table 220.42",
      "Dryer min 5,000 VA · range per Table 220.55 · heat vs A/C: larger only"
     ],
     "minutes": 12,
     "necRefs": [
      "220.12",
      "220.42",
      "220.52",
      "220.53",
      "220.54",
      "220.55",
      "220.60",
      "220.61"
     ],
     "table": {
      "caption": "Table 220.42 — Lighting demand factors (dwelling)",
      "rows": [
       [
        "First 3,000 VA or less",
        "100%"
       ],
       [
        "3,001 – 120,000 VA",
        "35%"
       ],
       [
        "Over 120,000 VA",
        "25%"
       ]
      ]
     },
     "tip": "Write the five steps on your scratch paper the moment the test starts. Load-calc questions punish improvisation and reward a checklist.",
     "title": "Dwelling load calculations — the standard method"
    },
    {
     "body": [
      "Receptacle spacing in living areas (210.52(A)): no point along a wall may be more than 6 ft from a receptacle, and any wall space 2 ft or wider gets one. Hallways 10 ft or longer need at least one receptacle. Countertops (210.52(C)): no point more than 24 in. from a receptacle, and spaces 12 in. or wider get one.",
      "Required dedicated circuits: two 20A small-appliance circuits for the kitchen (210.11(C)(1)) serving countertop receptacles; one 20A bathroom circuit (210.11(C)(3)) for bathroom receptacles only; one laundry circuit (210.11(C)(2)). The fridge may ride a small-appliance circuit or its own 15A+ circuit.",
      "GFCI protection (210.8(A)) in dwellings: bathrooms, garages, outdoors, crawl spaces, basements, kitchen countertops, sinks (within 6 ft), boathouses, bathtubs/shower stalls (within 6 ft), and laundry areas — plus dishwashers on their own rule (210.8(D)). AFCI (210.12(A)) covers 120V 15/20A outlets in kitchens, family rooms, bedrooms, living rooms, laundry areas, and most other living spaces in the 2017 edition.",
      "Continuous loads size branch circuits at 125% (210.19(A)(1)): a 16A continuous load needs a 20A circuit. Branch-circuit rating is set by the overcurrent device (210.3). Multiwire branch circuits need a common disconnect that opens all ungrounded conductors simultaneously (210.4(B))."
     ],
     "id": "m3l3",
     "intro": "Kitchens, bathrooms, laundry, spacing, GFCI, AFCI — Article 210 is where residential LLE work lives.",
     "keyPoints": [
      "Wall receptacles: max 6 ft to a receptacle; walls ≥2 ft count — 210.52(A)",
      "Kitchen: two 20A small-appliance circuits — 210.11(C)(1)",
      "Bathroom receptacles: one 20A circuit, no other outlets — 210.11(C)(3)",
      "Continuous load → size at 125% — 210.19(A)(1)"
     ],
     "minutes": 10,
     "necRefs": [
      "210.4(B)",
      "210.8",
      "210.11(C)",
      "210.12",
      "210.19",
      "210.52"
     ],
     "tip": "GFCI vs AFCI confusion is engineered into the test. GFCI = people protection from shock (5 mA trip), located near water. AFCI = fire protection from arcing, located in living spaces. Many rooms need both — dual-function breakers exist for exactly that reason.",
     "title": "Branch circuits — Article 210 rules for houses"
    }
   ],
   "number": "03",
   "subtitle": "Articles 220, 230, 215 — the math the exam loves",
   "title": "Services, Feeders & Load Calculations"
  },
  {
   "id": "m4",
   "lessons": [
    {
     "body": [
      "Burial depths are in Table 300.5. Direct-buried cable: 24 in. PVC conduit: 18 in. Rigid metal conduit: 6 in. A 120V residential branch circuit with GFCI protection and 20A or less overcurrent protection may be buried 12 in. (Column 4). Under a building: raceway only, 0 in. cover. Under a 4-in. concrete slab: 4 in.",
      "Protecting NM cable: bored holes in studs must be at least 1¼ in. from the edge of the wood, or a 1/16-in. steel plate protects the cable (300.4(A)(1)). Notches follow the same rule. Cables run parallel to framing members stay 1¼ in. away or get protected.",
      "Boxes: conductors must have at least 6 in. of free conductor at each outlet/junction box, measured from where it emerges from the raceway or sheath, and at least 3 in. extending outside the box opening (300.14). Raceways must be complete runs between boxes before conductors are installed (300.18(A)).",
      "Securing: cables and raceways supported per their article. Underground installations need protection from 18 in. below grade to 8 ft above grade where exposed to physical damage (300.5(D)(1)). Splices live in boxes — 300.15 — with the narrow exception of listed splicing devices for cable repairs."
     ],
     "id": "m4l1",
     "intro": "Article 300 applies to every wiring method. Its numbers — burial depths, bored-hole setbacks, box depth — are pure exam material.",
     "keyPoints": [
      "Table 300.5: direct burial 24 in · PVC 18 in · rigid 6 in · resi GFCI branch 12 in",
      "Bored holes ≥1¼ in. from stud edge or steel plate — 300.4(A)",
      "6 in. free conductor at boxes, 3 in. outside the opening — 300.14",
      "Raceway complete before pulling conductors — 300.18(A)"
     ],
     "minutes": 9,
     "necRefs": [
      "300.4",
      "300.5",
      "300.14",
      "300.15",
      "300.18"
     ],
     "table": {
      "caption": "Table 300.5 — Minimum cover (selected, general locations)",
      "rows": [
       [
        "Direct-buried cable (UF)",
        "24 in."
       ],
       [
        "PVC / nonmetallic raceway",
        "18 in."
       ],
       [
        "Rigid or intermediate metal conduit",
        "6 in."
       ],
       [
        "Resi branch, 120V, GFCI, ≤20A",
        "12 in."
       ],
       [
        "Under building",
        "0 in. (raceway only)"
       ]
      ]
     },
     "tip": "Burial questions always specify the method and location. Match the row and column in Table 300.5 — the distractors are the other columns' numbers.",
     "title": "Article 300 — the general wiring rules"
    },
    {
     "body": [
      "NM is permitted in one- and two-family dwellings and multifamily of Types III, IV, V construction (334.10). It is prohibited in wet or damp locations, where exposed to physical damage without protection, in hazardous locations, and embedded in concrete — among the 334.12 list. NM is a dry-location cable, period.",
      "Support (334.30): within 12 in. of every box or fitting, and at intervals not exceeding 4½ ft. Exception: where fished through existing walls, support isn't required. At single-gang nonmetallic boxes without clamps, the cable must be secured within 8 in. of the box.",
      "Ampacity of NM is taken from the 60°C column of Table 310.15(B)(16) even though the conductors inside are 90°C rated (334.80). That's why #14 NM = 15A and #12 NM = 20A, full stop — and 240.4(D) small-conductor rules cap them there anyway.",
      "Bending radius: not less than five times the cable diameter (334.24). Protection through studs and within 1¼ in. of framing follows 300.4. In attics accessible by permanent stairs, NM within 7 ft of the access must be protected by guard strips (320.23 applied via 334.23)."
     ],
     "id": "m4l2",
     "intro": "Type NM is the default residential wiring method in Tennessee — uses permitted, uses prohibited, support, and protection.",
     "keyPoints": [
      "NM: dry locations only; dwellings and Type III/IV/V — 334.10/334.12",
      "Support within 12 in. of boxes, every 4½ ft — 334.30",
      "NM ampacity from the 60°C column — 334.80",
      "Bend radius ≥ 5× cable diameter — 334.24"
     ],
     "minutes": 8,
     "necRefs": [
      "334.10",
      "334.12",
      "334.24",
      "334.30",
      "334.80"
     ],
     "tip": "If a scenario puts NM in a wet location, buried, or in a commercial steel-stud ceiling plenum — it's the violation. The exam tests 334.12's prohibited list more than the permitted one.",
     "title": "NM cable (Romex) — Article 334"
    },
    {
     "body": [
      "EMT (Article 358): supported within 3 ft of each box and every 10 ft (358.30). Bends: no more than the equivalent of four quarter bends — 360° total — between pull points (358.26), a rule shared by nearly every raceway article. EMT is permitted in wet locations with listed fittings and is not permitted where subject to severe physical damage.",
      "PVC (Article 352): supported per Table 352.44 based on size — ½–1 in. every 3 ft, larger sizes longer spans — and within 3 ft of boxes. PVC expands with temperature: expansion fittings required when thermal movement reaches ¼ in. (352.44). Prohibited where subject to physical damage unless identified for it, and ambient above its listing.",
      "Liquidtight flexible metal conduit (356) and FMC (348): FMC secured within 12 in. of boxes and every 4½ ft (348.30). Flex is not a raceway substitute for long runs where an EGC is required beyond its limits — 250.118 conditions apply.",
      "Wireways and surface raceways show up less often; know that conductors in a wireway are limited to 20% fill at any cross-section without derating relief (376.22), and splices/taps in wireways may not fill more than 75% at that point."
     ],
     "id": "m4l3",
     "intro": "Each raceway article repeats the same pattern: uses, bends, support spacing. Learn the support numbers cold.",
     "keyPoints": [
      "EMT: support within 3 ft of box, every 10 ft — 358.30",
      "Max 360° of bends between pull points — every raceway article",
      "PVC support per Table 352.44; expansion fittings at ≥¼ in. movement",
      "FMC: within 12 in. of box, every 4½ ft — 348.30"
     ],
     "minutes": 9,
     "necRefs": [
      "348.30",
      "352.44",
      "358.26",
      "358.30",
      "376.22"
     ],
     "tip": "Support-spacing questions are pattern matching: 3 ft/10 ft = EMT and rigid; 12 in/4½ ft = NM and FMC; Table 352.44 = PVC. Sort the method first, the number follows.",
     "title": "Raceways — EMT, PVC, flex & support intervals"
    }
   ],
   "number": "04",
   "subtitle": "Articles 300–398 — cable, conduit, and protection",
   "title": "Wiring Methods & Raceways"
  },
  {
   "id": "m5",
   "lessons": [
    {
     "body": [
      "Count conductor equivalents: each conductor that enters and terminates or is spliced counts as one. Each conductor passing through unbroken counts as one. A conductor originating inside the box (a pigtail) counts zero. All EGCs together count as a single allowance based on the largest EGC (314.16(B)(5)). Internal cable clamps together count one (B)(2). Each device yoke counts two allowances based on the largest conductor on the device (B)(4).",
      "Volume per allowance comes from Table 314.16(B): #18 = 1.50, #16 = 1.75, #14 = 2.00, #12 = 2.25, #10 = 2.50, #8 = 2.75, #6 = 5.00 cubic inches.",
      "Worked example: a box with two #12 NM cables feeding a receptacle: conductors = 4 current-carrying/neutral (2 black, 2 white) = 4 allowances. EGCs = 1 allowance. Device yoke = 2 allowances. Total 7 × 2.25 = 15.75 cu in. A standard 4-in. square box 1½ in. deep is 18.0 cu in. (Table 314.16(A)) — it fits. A single-gang device box at 12.5 cu in. would not.",
      "Boxes must also be big enough physically: boxes in walls of combustible material sit flush or project out (314.20); boxes supporting ceiling fans must be listed for the purpose and marked (314.27(C)); conduit bodies follow their own fill marking rules in 314.16(C)."
     ],
     "id": "m5l1",
     "intro": "Box-fill questions hand you a box size and a pile of conductors. Count allowances, multiply by volume per conductor, compare to the box.",
     "keyPoints": [
      "Pigtails originating in the box count 0 — 314.16(B)(1)",
      "All EGCs together = 1 allowance — 314.16(B)(5)",
      "Each device yoke = 2 allowances — 314.16(B)(4)",
      "#12 = 2.25 cu in · #14 = 2.00 cu in — Table 314.16(B)"
     ],
     "minutes": 10,
     "necRefs": [
      "314.16",
      "314.20",
      "314.27",
      "314.29"
     ],
     "table": {
      "caption": "Table 314.16(B) — Volume allowance per conductor",
      "rows": [
       [
        "18 AWG",
        "1.50 cu in"
       ],
       [
        "16 AWG",
        "1.75 cu in"
       ],
       [
        "14 AWG",
        "2.00 cu in"
       ],
       [
        "12 AWG",
        "2.25 cu in"
       ],
       [
        "10 AWG",
        "2.50 cu in"
       ],
       [
        "8 AWG",
        "2.75 cu in"
       ],
       [
        "6 AWG",
        "5.00 cu in"
       ]
      ]
     },
     "tip": "Write allowances as a running tally on scratch paper: conductors + clamps(1) + grounds(1) + devices(2 each). Most wrong answers forget the yoke counts double.",
     "title": "Box fill — 314.16 step by step"
    },
    {
     "body": [
      "Chapter 9 Table 1 sets the percentage: a single conductor may fill 53% of the raceway's internal area, two conductors 31%, and over two conductors 40%. Nipples 24 in. or shorter may be filled to 60%.",
      "Annex C tables answer 'how many X-size conductors fit in Y conduit' directly when conductors are the same size and type. Example: Table C.1 — #12 THHN in ¾-in. EMT: 16 conductors. That is the 30-second method the exam expects for same-size questions.",
      "Mixed sizes need the long method: get each conductor's area from Table 5 (e.g., #12 THHN = 0.0133 sq in, #10 THHN = 0.0211 sq in), sum them, get the raceway's 40% area from Table 4 (¾-in. EMT 40% = 0.213 sq in), and compare. Equipment grounding conductors count toward fill using Table 5 dimensions for insulated or bare area from Table 8.",
      "Remember: fill and derating are different limits. More than three current-carrying conductors in a raceway triggers the ampacity adjustment factors of Table 310.15(B)(3)(a) — 4–6 conductors at 80%, 7–9 at 70% — even if the conduit isn't physically full."
     ],
     "id": "m5l2",
     "intro": "Two legal paths solve fill questions: Annex C when all conductors are the same size and insulation, Chapter 9 Tables 1/4/5 for everything else.",
     "keyPoints": [
      "Table 1 fill: 1 wire 53% · 2 wires 31% · 3+ wires 40% · nipples ≤24 in: 60%",
      "Same size/type → Annex C (fast path)",
      "Mixed sizes → Table 5 areas vs Table 4 raceway area",
      ">3 current-carrying conductors → derate per Table 310.15(B)(3)(a)"
     ],
     "minutes": 10,
     "necRefs": [
      "Chapter 9 Tables 1, 4, 5",
      "Annex C",
      "310.15(B)(3)(a)"
     ],
     "tip": "Annex C is in the back of the NEC and in Ugly's. Tab it. Same-size fill questions become 20-second lookups instead of 3-minute math.",
     "title": "Conduit fill — Chapter 9 and Annex C"
    },
    {
     "body": [
      "The wheel: E = I × R, I = E ÷ R, R = E ÷ I, and P = E × I (with P = I²R and P = E²/R as variants). Single-phase power: P = E × I × PF. Three-phase: P = E × I × 1.732 × PF. A 120V, 20A resistive load draws 2,400 W. A 240V water heater element of 12 Ω draws 20A and produces 4,800 W.",
      "Series vs parallel: resistances add in series; in parallel the total is always less than the smallest branch. Conductors in parallel share current — the reason parallel runs must be the same length, size, and material (310.10(H)).",
      "Voltage drop (informational notes to 210.19 and 215.2 recommend max 3% branch / 5% total): single-phase VD = 2 × K × I × D ÷ CM, where K = 12.9 for copper, D = one-way distance in feet, CM = conductor circular mils from Chapter 9 Table 8 (#12 = 6,530 CM, #10 = 10,380 CM).",
      "Worked example: 16A load, 100 ft one-way, #12 copper: VD = 2 × 12.9 × 16 × 100 ÷ 6,530 ≈ 6.3V — that's 5.3% on 120V, too much. Upsize to #10: VD ≈ 4.0V (3.3%). Upsizing for voltage drop then triggers the proportional EGC upsize rule of 250.122(B) from Lesson 2.3 — the exam loves chaining these."
     ],
     "id": "m5l3",
     "intro": "Ugly's Electrical References earns its seat in the exam room on calculation questions: Ohm's law wheel, power formulas, and voltage drop.",
     "keyPoints": [
      "E = IR · P = EI · 3-phase adds ×1.732",
      "VD = 2KID ÷ CM (single-phase), K = 12.9 copper / 21.2 aluminum",
      "Recommended max: 3% branch, 5% feeder + branch combined",
      "Upsize for VD → upsize the EGC proportionally — 250.122(B)"
     ],
     "minutes": 10,
     "necRefs": [
      "Ugly's: Ohm's Law / Voltage Drop",
      "210.19(A) Note 4",
      "310.10(H)",
      "Ch. 9 Table 8"
     ],
     "table": {
      "caption": "Chapter 9 Table 8 — Copper conductor circular mils (selected)",
      "rows": [
       [
        "14 AWG",
        "4,110 CM"
       ],
       [
        "12 AWG",
        "6,530 CM"
       ],
       [
        "10 AWG",
        "10,380 CM"
       ],
       [
        "8 AWG",
        "16,510 CM"
       ],
       [
        "6 AWG",
        "26,240 CM"
       ]
      ]
     },
     "tip": "Ugly's has the VD formula and CM table on facing pages. On any calculation question, open Ugly's first — it's faster than the NEC for math.",
     "title": "Ohm's law, power & voltage drop — Ugly's territory"
    }
   ],
   "number": "05",
   "subtitle": "314.16, Chapter 9, Ohm's law — the calculation core",
   "title": "Boxes, Conduit Fill & Trade Math"
  },
  {
   "id": "m6",
   "lessons": [
    {
     "body": [
      "Conductors are protected at their ampacity (240.4). The famous small-conductor caps of 240.4(D): #14 copper max 15A, #12 copper max 20A, #10 copper max 30A — regardless of the higher table ampacities at 75°C/90°C. Aluminum runs two sizes lower in protection: #12 AL max 15A, #10 AL max 25A.",
      "Next-higher-breaker rule (240.4(B)): when conductor ampacity doesn't match a standard size, you may round up to the next standard overcurrent device if the ampacity isn't over 800A, the circuit isn't a multioutlet branch circuit supplying receptacles, and the next size doesn't exceed the conditions listed. Standard sizes are listed in 240.6(A): 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200…",
      "Location rules: overcurrent devices may not be located where exposed to physical damage, in bathrooms of dwellings (240.24(E) — service/feeder OCPD prohibited; supplementary protectors are the exception), or over steps of a stairway (240.24(F)). They must be readily accessible (240.24(A)).",
      "Tap rules (240.21) let smaller conductors tap a feeder when length and protection conditions are met — the 10-ft tap and 25-ft tap rules are the tested pair. GFCI/AFCI breaker protection and selective coordination appear in specific occupancies; for the LLE, tap and 240.4(D) questions dominate."
     ],
     "id": "m6l1",
     "intro": "240 answers three questions: what size breaker, where it may live, and when you may round up.",
     "keyPoints": [
      "240.4(D) caps: #14 Cu 15A · #12 Cu 20A · #10 Cu 30A",
      "Round-up allowed only under 240.4(B) conditions",
      "No service/feeder breakers in dwelling bathrooms — 240.24(E)",
      "Standard sizes: 240.6(A) — memorize the ladder to 200A"
     ],
     "minutes": 10,
     "necRefs": [
      "240.4",
      "240.6",
      "240.21",
      "240.24"
     ],
     "tip": "90°C ampacity is for derating math only. The breaker on a #12 copper conductor is 20A. Every time. If an answer says 25A or 30A for #12 NM or THHN branch wiring, eliminate it.",
     "title": "Overcurrent protection — Article 240"
    },
    {
     "body": [
      "Receptacle replacements (406.4): a replacement must be of the grounding type where a grounding means exists; where no ground exists, use GFCI protection marked 'No Equipment Ground,' or a non-grounding type. Tamper-resistant receptacles are required in dwellings (406.12) for 125V 15/20A receptacles, and weather-resistant types outdoors (406.9(A)/(B)) with in-use (extra-duty) covers in wet locations.",
      "Receptacle orientation and faceplates: metal faceplates must be grounded (406.6). A receptacle in a floor must be in a listed floor box (314.27(B)). Receptacles may not be installed in a bathtub or shower space itself (406.9(C)).",
      "Switches (404): the grounded conductor (neutral) may not be switched — switching is in the ungrounded conductor (404.2(B)), with the 2011+ rule requiring a neutral at most switch locations for electronic controls (404.2(C)). Snap switches must be effectively grounded via the EGC (404.9(B)) unless an exception applies.",
      "Luminaires (410): recessed fixtures need thermal protection and clearance from insulation — IC-rated for contact. Closet luminaires follow the clearance table in 410.16(C): no bare incandescent lamps, and defined clearances from storage space (12 in. for surface incandescent/LED enclosed, 6 in. for recessed). Track lighting may not be installed within the zone 3 ft horizontally and 8 ft vertically from a bathtub rim (410.10(D) applies similar zones to hanging luminaires and fans)."
     ],
     "id": "m6l2",
     "intro": "Device questions are short, visual, and worth easy points: heights, orientations, and replacement rules.",
     "keyPoints": [
      "No-ground replacement: GFCI + 'No Equipment Ground' label — 406.4(D)",
      "Tamper-resistant in dwellings — 406.12 · weather-resistant outdoors — 406.9",
      "Switch the hot, never the neutral — 404.2(B); neutral required at switch boxes — 404.2(C)",
      "No receptacles inside tub/shower space — 406.9(C)"
     ],
     "minutes": 9,
     "necRefs": [
      "404.2",
      "406.4",
      "406.9",
      "406.12",
      "410.16"
     ],
     "tip": "Replacement questions hinge on one fact: does an equipment ground exist at the box? Yes → grounding-type receptacle. No → GFCI or non-grounding replacement, with labeling.",
     "title": "Receptacles, switches & luminaires — 404/406/410"
    },
    {
     "body": [
      "Motor full-load current (FLC) for calculations comes from Tables 430.247–430.250 — never from the nameplate (nameplate FLA is for overload protection, 430.6(A)). A 5 hp, 230V single-phase motor: Table 430.248 gives 28A. Branch-circuit conductors: 125% of FLC = 35A → #8 copper at 75°C (430.22).",
      "Short-circuit/ground-fault protection from Table 430.52 uses percentages by motor type: inverse-time breaker for most motors = 250% of FLC. 28A × 250% = 70A breaker (430.52(C)(1) allows the next standard size when the calculation isn't exact). Overload protection is separate: 125% of nameplate FLA for motors with service factor ≥1.15 (430.32(A)(1)).",
      "Feeder supplying multiple motors: 125% of the largest FLC + 100% of the rest (430.24). Motor disconnects must be within sight of the motor and driven machine (430.102) — 'within sight' means visible and within 50 ft (Article 100).",
      "Appliances (422): branch circuits for appliances use the same 125% continuous logic for fixed heating. Water heaters 120 gal or less are continuous loads (422.13) — 4,500W at 240V = 18.75A × 125% = 23.4A → 25A breaker, #10 conductors. Fixed electric space heating is continuous (424.3(B)) — conductors and breakers at 125%. Dishwasher/disposal and HVAC nameplate rules round out the typical appliance set."
     ],
     "id": "m6l3",
     "intro": "Motor questions follow one path: get full-load current from the tables, size conductors at 125%, size the breaker from Table 430.52.",
     "keyPoints": [
      "FLC from Tables 430.247–250, NOT the nameplate — 430.6(A)",
      "Motor conductors: 125% FLC — 430.22 · Breaker: Table 430.52 (ITB 250%)",
      "Disconnect within sight = visible + ≤50 ft — 430.102",
      "Storage water heater ≤120 gal = continuous load — 422.13"
     ],
     "minutes": 10,
     "necRefs": [
      "422.13",
      "424.3(B)",
      "430.6",
      "430.22",
      "430.24",
      "430.32",
      "430.52",
      "430.102"
     ],
     "table": {
      "caption": "Table 430.52 — Max OCPD as % of FLC (selected)",
      "rows": [
       [
        "Inverse-time breaker",
        "250%"
       ],
       [
        "Dual-element (time-delay) fuse",
        "175%"
       ],
       [
        "Non-time-delay fuse",
        "300%"
       ],
       [
        "Instantaneous-trip breaker",
        "800%"
       ]
      ]
     },
     "tip": "Motor questions give either a table FLC or a nameplate FLA. The stem tells you which to use: 'sized per Article 430 tables' → table value; 'overload protection' → nameplate. Swapping them is the designed trap.",
     "title": "Motors & appliances — 422/424/430 in brief"
    }
   ],
   "number": "06",
   "subtitle": "Articles 240, 404–430 — breakers, switches, motors",
   "title": "Overcurrent, Devices & Equipment"
  },
  {
   "id": "m7",
   "lessons": [
    {
     "body": [
      "Construction sites require GFCI protection for all 120V, single-phase, 15- and 20-ampere receptacles not part of the permanent wiring, OR an assured equipment grounding conductor program (1926.404(b)(1)). Most sites simply use GFCIs — and the assured program alternative requires written procedures, competent person inspections, and records.",
      "Live parts must be guarded: no employee may work near exposed energized parts unless de-energized/locked out or protected by insulation, guarding, or isolation (1926.416). Working space around electrical equipment on site mirrors the NEC: sufficient access and headroom, with illumination.",
      "Temporary wiring (1926.405): flexible cords must be protected from damage, splices must maintain insulation integrity (no bare twisted splices in open air outside approved methods), lamps for temporary lighting need guards, and temporary wiring must be removed when the project completes. Cords may not be run through doorways pinched, stapled, or hung on nails.",
      "Cord condition: worn or frayed cords are removed from service (1926.405(a)(2)(II)(J)? — the rule text: cords shall be maintained, and damaged cords replaced). Extension cords used with portable tools on construction sites fall under the GFCI rule above."
     ],
     "id": "m7l1",
     "intro": "OSHA questions on the LLE come from the Mancomm 1926 book. Electrical safety rules for construction are concrete and quotable.",
     "keyPoints": [
      "Site receptacles: GFCI or assured grounding program — 1926.404(b)(1)",
      "No work on/near exposed live parts without protection — 1926.416",
      "Temporary wiring: protected cords, proper splices, guarded lamps — 1926.405",
      "Damaged/frayed cords come out of service"
     ],
     "minutes": 8,
     "necRefs": [
      "OSHA 1926.404",
      "OSHA 1926.405",
      "OSHA 1926.416",
      "OSHA 1926.417"
     ],
     "tip": "When an OSHA question offers 'assured equipment grounding conductor program' as an option, it's the legitimate alternative to GFCIs — not a made-up distractor. Both answers can be right in different stems; read whether the site uses GFCI or the program.",
     "title": "Electrical safety on site — Subpart K & 1926.405/416"
    },
    {
     "body": [
      "Fall protection (1926.501/502): construction workers 6 ft or more above a lower level need guardrails, a safety net, or a personal fall arrest system. Holes and wall openings have their own triggers. (General industry uses 4 ft — the exam answer for construction is 6 ft.)",
      "Ladders (1926.1053): portable ladders used for landing access must extend at least 3 ft above the landing surface. Ladders are inspected, used at a 4:1 angle for non-self-supporting (base out 1 ft per 4 ft of height), and never loaded beyond rating. Three points of contact while climbing is the taught standard.",
      "Excavations (1926.652): trenches 5 ft or deeper require a protective system — sloping, benching, shoring, or shielding — unless in stable rock. Trenches 4 ft or more need a ladder or ramp so workers can exit within 25 ft of travel (1926.651(c)(2)). A competent person inspects daily and after rain. Spoils stay at least 2 ft back from the edge (1926.651(j)(2)).",
      "Scaffolds (1926.451): platforms fully planked, capable of supporting 4× the intended load, with fall protection above 10 ft. PPE basics (Subpart E): head protection where falling objects are a hazard, eye protection for flying particles, and gloves/foot protection matched to the hazard assessment (1926.95)."
     ],
     "id": "m7l2",
     "intro": "General construction safety is fair game on the LLE because the OSHA book is. These numbers are the ones that get quoted.",
     "keyPoints": [
      "Fall protection trigger in construction: 6 ft — 1926.501",
      "Ladder rails extend 3 ft above landing; 4:1 setup angle — 1926.1053",
      "Trench ≥5 ft: protective system; exit within 25 ft travel — 1926.651/652",
      "Spoil piles ≥2 ft from trench edge — 1926.651(j)(2)"
     ],
     "minutes": 9,
     "necRefs": [
      "OSHA 1926.95",
      "OSHA 1926.451",
      "OSHA 1926.501",
      "OSHA 1926.651",
      "OSHA 1926.652",
      "OSHA 1926.1053"
     ],
     "tip": "Memorize the OSHA number ladder: 6 ft falls, 5 ft trench protection, 4 ft trench exit rule, 3 ft ladder extension, 2 ft spoil setback, 25 ft max travel to exit. Six numbers answer most OSHA items.",
     "title": "Falls, ladders, trenches — Subparts M, X, P"
    }
   ],
   "number": "07",
   "subtitle": "29 CFR 1926 — the third book in the room",
   "title": "OSHA Construction Safety"
  },
  {
   "id": "m8",
   "lessons": [
    {
     "body": [
      "Allowed: permanent tabs (the kind that can't be repositioned without tearing), highlighting, underlining, and notes printed or written on the tabs themselves per Prov's bulletin practice. Not allowed: handwritten notes in the margins, Post-it style removable notes, loose inserts, and separate study guides. When in doubt, highlighting a section heading is safe; writing a formula in a margin is not.",
      "Tab priority list: Article 100 definitions; 110.26; 210.8/210.11/210.52; Table 220.12, 220.42, 220.55; 230.70–71; 240.4(D), 240.6; 250.66, 250.122, 250.118; Table 300.5, 300.4; 310.15(B)(16) + (B)(3)(a); 314.16(A)/(B); 334.30; 358.30; 406.4/406.12; 430.52 + 430.248/250; Chapter 9 Tables 1/4/5/8; Annex C.1. In Ugly's, tab: Ohm's law wheel, voltage drop, conduit fill, box fill, and the motor charts.",
      "Ugly's is your calculator companion: its tables are condensed versions of NEC math. Many candidates answer calculation questions entirely from Ugly's and use the NEC only for word-for-word rule questions.",
      "Bring: government photo ID, your Prov confirmation, and the three books — nothing else electronic. Remote proctored exams (Prov's Examity-style setup) require a clean desk, a webcam room scan, and no second monitor; test-center candidates near Middle Tennessee use Murfreesboro or Tullahoma locations."
     ],
     "id": "m8l1",
     "intro": "Your books enter the room with you — set them up legally and they'll carry you.",
     "keyPoints": [
      "Permanent tabs + highlighting OK · handwriting + Post-its NOT OK",
      "~25 NEC tabs cover the bulk of questions",
      "Ugly's for math, NEC for wording, OSHA book for Subpart K/M/P/X numbers",
      "Centers: Murfreesboro & Tullahoma, or remote proctoring from home"
     ],
     "minutes": 7,
     "necRefs": [
      "Prov Candidate Bulletin — References & Rules"
     ],
     "tip": "Spend one evening tabbing and one timed practice exam per tab session. Tabs you placed yourself are tabs you can find at speed.",
     "title": "Tabbing & book setup that passes inspection"
    },
    {
     "body": [
      "Pace: 40 questions in 120 minutes is 3 minutes each. Split the exam: first pass answers everything you're sure of and every quick lookup (about 60–70% of the test). Flag anything requiring multi-step math or a long search. Second pass: work the flagged questions with your remaining time — usually 30–40 minutes for 8–12 questions.",
      "Never leave a question blank at submission: there is no penalty for guessing on the Prov exam, so a 25% guess beats a 0% blank every time. Eliminate two implausible options and guess between the survivors.",
      "Keyword routing saves minutes: 'shall be permitted' questions are exception-hunting; 'minimum/maximum' questions live in tables; 'within sight' means 50 ft and visible; any question quoting a dimension (inches/feet) is almost certainly a direct section number you can find in the index under the object named.",
      "After the test: Prov scores immediately for CBT exams in most cases. If you miss 73%, the score report shows content-area performance — use it with this course's category breakdown to target your retake study. There are unlimited retakes at $53 per attempt; the license application fee is $50 for two years once you pass."
     ],
     "id": "m8l2",
     "intro": "Passing an open-book test is a time-management problem disguised as a knowledge test.",
     "keyPoints": [
      "3 minutes/question · two passes · flag the math",
      "No guessing penalty — answer everything",
      "Dimension in the stem → index lookup under the named object",
      "Retakes unlimited at $53 · license $50 / 2 years after passing"
     ],
     "minutes": 7,
     "necRefs": [
      "Prov Candidate Bulletin — Scoring & Retakes"
     ],
     "tip": "Use the simulator in this course in Full Exam mode until you finish with 10+ minutes to spare twice in a row. Speed, not knowledge, is what runs out on test day.",
     "title": "Test-day tactics — the 3-minute rule & review pass"
    }
   ],
   "number": "08",
   "subtitle": "Turn 2 hours into a passing score",
   "title": "Exam Day — The Open-Book Speed System"
  }
 ],
 "flashcards": [
  {
   "back": "73% — 30 of 40 questions, in 2 hours, open book",
   "front": "Passing score on the Prov LLE exam?",
   "tag": "Exam"
  },
  {
   "back": "#6 copper — NEC 250.66(A)",
   "front": "GEC to a ground rod — max size ever required?",
   "tag": "Grounding"
  },
  {
   "back": "25 Ω or less — 250.53(A)(2)",
   "front": "Single ground rod — supplement unless resistance is…",
   "tag": "Grounding"
  },
  {
   "back": "#6 copper — Table 250.122",
   "front": "EGC for a 200A breaker?",
   "tag": "Grounding"
  },
  {
   "back": "3 VA per sq ft — Table 220.12",
   "front": "Dwelling general lighting load?",
   "tag": "Load Calc"
  },
  {
   "back": "First 3,000 VA @ 100%, remainder @ 35%",
   "front": "Table 220.42 dwelling demand?",
   "tag": "Load Calc"
  },
  {
   "back": "8 kW",
   "front": "One 12 kW range demand (Table 220.55)?",
   "tag": "Load Calc"
  },
  {
   "back": "100A, 3-wire — 230.79(C)",
   "front": "Min. service for a one-family dwelling?",
   "tag": "Services"
  },
  {
   "back": "Six — 230.71",
   "front": "Max grouped service disconnects?",
   "tag": "Services"
  },
  {
   "back": "24 in / 18 in / 6 in — Table 300.5",
   "front": "Direct burial / PVC / rigid burial depths?",
   "tag": "Wiring"
  },
  {
   "back": "Within 12 in of boxes, every 4½ ft — 334.30",
   "front": "NM support spacing?",
   "tag": "Wiring"
  },
  {
   "back": "Within 3 ft of boxes, every 10 ft — 358.30",
   "front": "EMT support spacing?",
   "tag": "Wiring"
  },
  {
   "back": "20A — 240.4(D), even though 75°C ampacity is 25A",
   "front": "#12 copper max breaker?",
   "tag": "Protection"
  },
  {
   "back": "2.25 cu in — Table 314.16(B)",
   "front": "Box fill: #12 conductor allowance?",
   "tag": "Boxes"
  },
  {
   "back": "40% — Chapter 9 Table 1",
   "front": "Conduit fill, 3+ conductors?",
   "tag": "Boxes"
  },
  {
   "back": "70% — Table 310.15(B)(3)(a)",
   "front": "7–9 current-carrying conductors — derate to?",
   "tag": "Boxes"
  },
  {
   "back": "125% — 430.22",
   "front": "Motor conductors sized at ___ of table FLC",
   "tag": "Motors"
  },
  {
   "back": "250% of FLC",
   "front": "Inverse-time breaker for motors (Table 430.52)?",
   "tag": "Motors"
  },
  {
   "back": "6 ft — 1926.501",
   "front": "OSHA construction fall protection trigger?",
   "tag": "OSHA"
  },
  {
   "back": "5 ft deep — 1926.652; exit within 25 ft travel",
   "front": "Trench protective system required at…",
   "tag": "OSHA"
  },
  {
   "back": "VD = 2KID ÷ CM, K = 12.9 Cu / 21.2 Al",
   "front": "Voltage drop formula (single-phase)?",
   "tag": "Math"
  },
  {
   "back": "Visible and within 50 ft — Article 100",
   "front": "'Within sight' means?",
   "tag": "Definitions"
  },
  {
   "back": "8× the largest raceway trade diameter — 314.28(A)(1)",
   "front": "Straight pull box — minimum length?",
   "tag": "Boxes"
  },
  {
   "back": "6× the largest raceway + sum of the other raceways in the row — 314.28(A)(2)",
   "front": "Angle pull box — minimum distance?",
   "tag": "Boxes"
  },
  {
   "back": "42 in. (±3 in.) above the walking/working level — 1926.502(b)",
   "front": "OSHA guardrail top rail height?",
   "tag": "OSHA"
  },
  {
   "back": "More than 10 ft above a lower level — 1926.451(g)",
   "front": "Scaffold fall protection trigger?",
   "tag": "OSHA"
  },
  {
   "back": "3½ VA per sq ft — Table 220.12",
   "front": "Office building unit lighting load?",
   "tag": "Load Calc"
  },
  {
   "back": "≥20 ft of #2 bare copper, buried ≥30 in. — 250.52(A)(4)",
   "front": "Ground ring electrode specs?",
   "tag": "Grounding"
  },
  {
   "back": "#4 copper — 250.66(B)",
   "front": "GEC to a concrete-encased electrode — max size?",
   "tag": "Grounding"
  },
  {
   "back": "40A — Table 430.248 (conductors at 125% = 50A)",
   "front": "7½ hp, 230V single-phase motor FLC?",
   "tag": "Motors"
  },
  {
   "back": "125% of nameplate FLA — 430.32(A)(1) (other motors: 115%)",
   "front": "Motor overloads, service factor 1.15 or more?",
   "tag": "Motors"
  },
  {
   "back": "Within 3 ft of the outside edge of the basin — 210.52(D)",
   "front": "Bathroom basin receptacle — how close?",
   "tag": "Protection"
  },
  {
   "back": "11 kW — Table 220.55, Column C",
   "front": "Two 12 kW ranges — demand load?",
   "tag": "Load Calc"
  },
  {
   "back": "0.0211 sq in — Chapter 9 Table 5",
   "front": "#10 THHN conductor area (fill math)?",
   "tag": "Boxes"
  }
 ],
 "questions": [
  {
   "id": "b1",
   "category": "boxes",
   "question": "Per Table 314.16(B), the volume allowance for one #12 AWG conductor is:",
   "options": [
    "1.50 cu in.",
    "2.00 cu in.",
    "2.25 cu in.",
    "2.50 cu in."
   ],
   "correct": 2,
   "explanation": "Table 314.16(B): #12 = 2.25 cu in per conductor allowance.",
   "ref": "Table 314.16(B)"
  },
  {
   "id": "b10",
   "category": "boxes",
   "question": "A 120V, 1,440W resistive appliance draws how much current?",
   "options": [
    "8.3A",
    "10A",
    "12A",
    "14.4A"
   ],
   "correct": 2,
   "explanation": "I = P ÷ E = 1,440 ÷ 120 = 12A.",
   "ref": "Ohm's Law — Ugly's"
  },
  {
   "id": "b11",
   "category": "boxes",
   "question": "A short conduit nipple (24 in. or less) between boxes may be filled to what maximum percentage?",
   "options": [
    "40%",
    "50%",
    "53%",
    "60%"
   ],
   "correct": 3,
   "explanation": "Chapter 9 Table 1, Note 4: nipples not exceeding 24 in. may be filled to 60%.",
   "ref": "Ch. 9 Table 1 Note 4"
  },
  {
   "id": "b12",
   "category": "boxes",
   "question": "Conductors that originate and terminate within the same box (pigtails) count toward box fill as:",
   "options": [
    "One allowance each",
    "Two allowances each",
    "Zero allowances",
    "Half an allowance each"
   ],
   "correct": 2,
   "explanation": "314.16(B)(1): a conductor that originates within the box (e.g., a splice pigtail) is not counted.",
   "ref": "314.16(B)(1)"
  },
  {
   "id": "b13",
   "category": "boxes",
   "question": "Per Table 314.16(B), the volume allowance for one #14 AWG conductor is:",
   "options": [
    "1.50 cu in.",
    "1.75 cu in.",
    "2.00 cu in.",
    "2.25 cu in."
   ],
   "correct": 2,
   "explanation": "Table 314.16(B): #18 = 1.50, #16 = 1.75, #14 = 2.00, #12 = 2.25, #10 = 2.50.",
   "ref": "Table 314.16(B)"
  },
  {
   "id": "b14",
   "category": "boxes",
   "question": "Per Table 314.16(B), the volume allowance for one #10 AWG conductor is:",
   "options": [
    "2.00 cu in.",
    "2.25 cu in.",
    "2.50 cu in.",
    "2.75 cu in."
   ],
   "correct": 2,
   "explanation": "#10 = 2.50 cu in per allowance — box-fill math always starts from this table.",
   "ref": "Table 314.16(B)"
  },
  {
   "id": "b15",
   "category": "boxes",
   "question": "Per Table 314.16(B), the volume allowance for one #6 AWG conductor is:",
   "options": [
    "2.75 cu in.",
    "3.50 cu in.",
    "5.00 cu in.",
    "6.00 cu in."
   ],
   "correct": 2,
   "explanation": "#6 jumps to 5.00 cu in per allowance — the largest value in Table 314.16(B).",
   "ref": "Table 314.16(B)"
  },
  {
   "id": "b16",
   "category": "boxes",
   "question": "Per Table 314.16(A), the volume of a 4-in. square metal box, 1½ in. deep, is:",
   "options": [
    "12.5 cu in.",
    "18.0 cu in.",
    "21.0 cu in.",
    "30.3 cu in."
   ],
   "correct": 1,
   "explanation": "Table 314.16(A): 4 × 1½-in. square box = 18.0 cu in. (The 2⅛-in. deep version is 30.3 cu in.)",
   "ref": "Table 314.16(A)"
  },
  {
   "id": "b17",
   "category": "boxes",
   "question": "Per Table 314.16(A), the volume of a 3 × 2 × 2½-in. device box is:",
   "options": [
    "7.5 cu in.",
    "10.0 cu in.",
    "12.5 cu in.",
    "18.0 cu in."
   ],
   "correct": 2,
   "explanation": "Standard single-gang device box volumes: 2-in. deep = 10.0, 2½-in. deep = 12.5, 3½-in. deep = 18.0 cu in.",
   "ref": "Table 314.16(A)"
  },
  {
   "id": "b18",
   "category": "boxes",
   "question": "A box contains four #14 conductors, equipment grounding conductors, internal cable clamps, and one switch on a yoke, all #14. The minimum box volume required is:",
   "options": [
    "12.0 cu in.",
    "14.0 cu in.",
    "16.0 cu in.",
    "18.0 cu in."
   ],
   "correct": 2,
   "explanation": "Allowances: 4 conductors + 1 for all EGCs + 1 for clamps + 2 for the yoke = 8 × 2.00 cu in (#14) = 16.0 cu in.",
   "ref": "314.16(B)"
  },
  {
   "id": "b19",
   "category": "boxes",
   "question": "A junction box (no devices) contains six #10 conductors, equipment grounding conductors, and internal clamps. The minimum box volume required is:",
   "options": [
    "15.0 cu in.",
    "17.5 cu in.",
    "20.0 cu in.",
    "22.5 cu in."
   ],
   "correct": 2,
   "explanation": "Allowances: 6 conductors + 1 EGC allowance + 1 clamp allowance = 8 × 2.50 cu in (#10) = 20.0 cu in.",
   "ref": "314.16(B)"
  },
  {
   "id": "b2",
   "category": "boxes",
   "question": "In box-fill calculations, all equipment grounding conductors in a box count as:",
   "options": [
    "One allowance each",
    "A single allowance based on the largest EGC",
    "Zero allowances",
    "Two allowances"
   ],
   "correct": 1,
   "explanation": "314.16(B)(5): all EGCs count as a single conductor volume allowance.",
   "ref": "314.16(B)(5)"
  },
  {
   "id": "b20",
   "category": "boxes",
   "question": "Per Chapter 9 Table 5, the approximate area of one #12 AWG THHN conductor is:",
   "options": [
    "0.0097 sq in.",
    "0.0133 sq in.",
    "0.0211 sq in.",
    "0.0278 sq in."
   ],
   "correct": 1,
   "explanation": "Table 5: #14 THHN = 0.0097, #12 THHN = 0.0133, #10 THHN = 0.0211 sq in — the inputs for mixed-size fill math.",
   "ref": "Ch. 9 Table 5"
  },
  {
   "id": "b21",
   "category": "boxes",
   "question": "Per Chapter 9 Table 4, the 40% fill area of ¾-in. EMT is:",
   "options": [
    "0.122 sq in.",
    "0.213 sq in.",
    "0.346 sq in.",
    "0.533 sq in."
   ],
   "correct": 1,
   "explanation": "¾-in. EMT total internal area is 0.533 sq in; 40% of it (0.213) is the usable fill for three or more conductors.",
   "ref": "Ch. 9 Table 4"
  },
  {
   "id": "b22",
   "category": "boxes",
   "question": "Per Annex C Table C.1, the maximum number of #14 AWG THHN conductors in ½-in. EMT is:",
   "options": [
    "9",
    "12",
    "16",
    "22"
   ],
   "correct": 1,
   "explanation": "Table C.1: ½-in. EMT takes 12 #14 THHN (and 9 #12 THHN) — same-size lookups are what Annex C is for.",
   "ref": "Annex C Table C.1"
  },
  {
   "id": "b23",
   "category": "boxes",
   "question": "Per Annex C Table C.1, the maximum number of #10 AWG THHN conductors in ¾-in. EMT is:",
   "options": [
    "6",
    "8",
    "10",
    "16"
   ],
   "correct": 2,
   "explanation": "Table C.1: ¾-in. EMT takes 10 #10 THHN conductors (area check: 10 × 0.0211 = 0.211 ≤ 0.213 sq in at 40% fill).",
   "ref": "Annex C Table C.1"
  },
  {
   "id": "b24",
   "category": "boxes",
   "question": "Twelve current-carrying conductors in one raceway require an ampacity adjustment factor per Table 310.15(B)(3)(a) of:",
   "options": [
    "80%",
    "70%",
    "50%",
    "45%"
   ],
   "correct": 2,
   "explanation": "Table 310.15(B)(3)(a): 4–6 conductors = 80%, 7–9 = 70%, 10–20 = 50%, 21–30 = 45%, 31–40 = 40%.",
   "ref": "Table 310.15(B)(3)(a)"
  },
  {
   "id": "b25",
   "category": "boxes",
   "question": "Five current-carrying conductors in one raceway require an ampacity adjustment factor per Table 310.15(B)(3)(a) of:",
   "options": [
    "100%",
    "80%",
    "70%",
    "60%"
   ],
   "correct": 1,
   "explanation": "4–6 current-carrying conductors adjust to 80% — bundling derating starts at the fourth current-carrying conductor.",
   "ref": "Table 310.15(B)(3)(a)"
  },
  {
   "id": "b26",
   "category": "boxes",
   "question": "Per Table 310.15(B)(2)(a), the ambient-temperature correction factor for a 90°C-rated conductor at an ambient temperature of 40°C (104°F) is:",
   "options": [
    "1.00",
    "0.96",
    "0.91",
    "0.82"
   ],
   "correct": 2,
   "explanation": "At 40°C ambient: 60°C conductors correct to 0.82, 75°C to 0.88, 90°C to 0.91. Rooftop and attic questions hinge on these.",
   "ref": "Table 310.15(B)(2)(a)"
  },
  {
   "id": "b27",
   "category": "boxes",
   "question": "For a straight pull, the length of a pull box shall not be less than ____ times the trade diameter of the largest raceway.",
   "options": [
    "4",
    "6",
    "8",
    "10"
   ],
   "correct": 2,
   "explanation": "314.28(A)(1): straight pulls need a box length of at least 8× the largest raceway trade diameter.",
   "ref": "314.28(A)(1)"
  },
  {
   "id": "b28",
   "category": "boxes",
   "question": "For an angle or U pull, the distance between each raceway entry and the opposite wall of the box shall not be less than ____ times the trade diameter of the largest raceway, plus the sum of the diameters of the other raceways in the same row.",
   "options": [
    "4",
    "6",
    "8",
    "12"
   ],
   "correct": 1,
   "explanation": "314.28(A)(2): 6× the largest raceway plus the sum of the others in the row — versus 8× flat for straight pulls.",
   "ref": "314.28(A)(2)"
  },
  {
   "id": "b29",
   "category": "boxes",
   "question": "An outlet box used to support a luminaire shall not support a luminaire weighing more than ____ unless the box is listed for the greater weight.",
   "options": [
    "25 lb",
    "35 lb",
    "50 lb",
    "70 lb"
   ],
   "correct": 2,
   "explanation": "314.27(A)(2): 50 lb is the default ceiling for luminaire support by an outlet box.",
   "ref": "314.27(A)(2)"
  },
  {
   "id": "b3",
   "category": "boxes",
   "question": "A device yoke (e.g., one receptacle) counts in box fill as:",
   "options": [
    "One allowance",
    "Two allowances based on the largest conductor connected to the device",
    "Three allowances",
    "No allowance"
   ],
   "correct": 1,
   "explanation": "314.16(B)(4): each yoke counts as two conductor allowances based on the largest conductor terminating on the device.",
   "ref": "314.16(B)(4)"
  },
  {
   "id": "b30",
   "category": "boxes",
   "question": "Per 314.29, boxes, conduit bodies, and handhole enclosures shall be installed so that the wiring inside them can be accessed:",
   "options": [
    "Only during initial construction",
    "Without removing any part of the building or structure (buried/underground listed enclosures excepted)",
    "Only by removing drywall",
    "From the attic only"
   ],
   "correct": 1,
   "explanation": "Accessibility is why buried junction boxes fail inspection — wiring must be reachable without demolishing the building.",
   "ref": "314.29"
  },
  {
   "id": "b31",
   "category": "boxes",
   "question": "A 1,500W electric heater operates on a 120V circuit. The current draw is:",
   "options": [
    "8.0A",
    "10.0A",
    "12.5A",
    "15.0A"
   ],
   "correct": 2,
   "explanation": "I = P ÷ E = 1,500 ÷ 120 = 12.5A. (As a continuous load it would need a circuit sized at 125% of that.)",
   "ref": "Ohm's Law — Ugly's"
  },
  {
   "id": "b32",
   "category": "boxes",
   "question": "A 120V circuit supplies a resistive load that draws 5A. The resistance of the load is:",
   "options": [
    "12 ohms",
    "24 ohms",
    "60 ohms",
    "600 ohms"
   ],
   "correct": 1,
   "explanation": "R = E ÷ I = 120 ÷ 5 = 24 Ω.",
   "ref": "Ohm's Law — Ugly's"
  },
  {
   "id": "b33",
   "category": "boxes",
   "question": "Using VD = 2KID/CM (K = 12.9 copper), a 20A load located 75 ft (one-way) from the source on #10 copper (10,380 CM) has a voltage drop of approximately:",
   "options": [
    "1.9V",
    "3.7V",
    "6.2V",
    "7.5V"
   ],
   "correct": 1,
   "explanation": "2 × 12.9 × 20 × 75 ÷ 10,380 ≈ 3.7V — about 3.1% on a 120V circuit, right at the recommended branch-circuit limit.",
   "ref": "Voltage drop — Ugly's / Ch. 9 Table 8"
  },
  {
   "id": "b34",
   "category": "boxes",
   "question": "A balanced three-phase load draws 20A per phase on a 208V system at unity power factor. The total power is approximately:",
   "options": [
    "4.2 kW",
    "6.2 kW",
    "7.2 kW",
    "12.5 kW"
   ],
   "correct": 2,
   "explanation": "Three-phase: P = E × I × 1.732 × PF = 208 × 20 × 1.732 ≈ 7,205W ≈ 7.2 kW.",
   "ref": "Three-phase power — Ugly's"
  },
  {
   "id": "b35",
   "category": "boxes",
   "question": "Two 12-ohm heating elements are connected in series across a 120V source. The total current drawn is:",
   "options": [
    "10A",
    "5A",
    "2.5A",
    "20A"
   ],
   "correct": 1,
   "explanation": "Series resistances add: 12 + 12 = 24 Ω. I = 120 ÷ 24 = 5A. (In parallel the same pair would draw 20A.)",
   "ref": "Ohm's Law — Ugly's"
  },
  {
   "id": "b4",
   "category": "boxes",
   "question": "A box contains 6 current-carrying #12 conductors, 2 #12 EGCs, internal clamps, and one #12-fed receptacle. Total volume required is:",
   "options": [
    "20.25 cu in.",
    "22.50 cu in.",
    "24.75 cu in.",
    "27.00 cu in."
   ],
   "correct": 1,
   "explanation": "Conductors 6 + EGCs as 1 + clamps as 1 + yoke as 2 = 10 allowances × 2.25 = 22.5 cu in.",
   "ref": "314.16(B)"
  },
  {
   "id": "b5",
   "category": "boxes",
   "question": "Per Chapter 9 Table 1, the maximum fill for more than two conductors in a raceway is:",
   "options": [
    "31%",
    "40%",
    "53%",
    "60%"
   ],
   "correct": 1,
   "explanation": "Table 1: 1 conductor 53%, 2 conductors 31%, over 2 conductors 40%. (60% applies only to nipples ≤24 in.)",
   "ref": "Ch. 9 Table 1"
  },
  {
   "id": "b6",
   "category": "boxes",
   "question": "Per Annex C Table C.1, the maximum number of #12 AWG THHN conductors in ¾-in. EMT is:",
   "options": [
    "9",
    "12",
    "16",
    "19"
   ],
   "correct": 2,
   "explanation": "Table C.1 (EMT): ¾-in. trade size allows 16 #12 THHN conductors.",
   "ref": "Annex C Table C.1"
  },
  {
   "id": "b7",
   "category": "boxes",
   "question": "Seven current-carrying conductors in one raceway require an ampacity adjustment factor of:",
   "options": [
    "80%",
    "70%",
    "60%",
    "50%"
   ],
   "correct": 1,
   "explanation": "Table 310.15(B)(3)(a): 7–9 current-carrying conductors adjust to 70%.",
   "ref": "Table 310.15(B)(3)(a)"
  },
  {
   "id": "b8",
   "category": "boxes",
   "question": "A 240V heating element has a resistance of 12 ohms. The current draw is:",
   "options": [
    "10A",
    "20A",
    "28.8A",
    "2,880A"
   ],
   "correct": 1,
   "explanation": "I = E ÷ R = 240 ÷ 12 = 20A (and P = 240 × 20 = 4,800W).",
   "ref": "Ohm's Law — Ugly's"
  },
  {
   "id": "b9",
   "category": "boxes",
   "question": "Using VD = 2KID/CM (K = 12.9 copper), a 16A load 100 ft one-way on #12 copper (6,530 CM) has a voltage drop of approximately:",
   "options": [
    "3.2V",
    "6.3V",
    "9.5V",
    "12.6V"
   ],
   "correct": 1,
   "explanation": "2 × 12.9 × 16 × 100 ÷ 6,530 ≈ 6.3V — over 5% of 120V, so upsize the conductor.",
   "ref": "Voltage drop — Ugly's / Ch. 9 Table 8"
  },
  {
   "id": "e1",
   "category": "equipment",
   "question": "Motor branch-circuit conductors must have an ampacity of at least ____ of the motor full-load current from the Article 430 tables.",
   "options": [
    "100%",
    "115%",
    "125%",
    "150%"
   ],
   "correct": 2,
   "explanation": "430.22(A): conductors for a single motor are sized at not less than 125% of the motor FLC (table value).",
   "ref": "430.22"
  },
  {
   "id": "e10",
   "category": "equipment",
   "question": "Switches shall not control (switch) which conductor?",
   "options": [
    "The ungrounded (hot) conductor",
    "The grounded (neutral) conductor",
    "A traveler in a 3-way",
    "A switch leg"
   ],
   "correct": 1,
   "explanation": "404.2(B): the grounded conductor of a branch circuit shall not be switched (limited exceptions aside).",
   "ref": "404.2(B)"
  },
  {
   "id": "e11",
   "category": "equipment",
   "question": "A feeder supplying several motors is sized at:",
   "options": [
    "100% of all FLCs added",
    "125% of the largest FLC plus 100% of the others",
    "250% of the largest motor",
    "The largest breaker size"
   ],
   "correct": 1,
   "explanation": "430.24: 125% of the highest-rated motor's FLC plus the sum of the other motors' FLCs.",
   "ref": "430.24"
  },
  {
   "id": "e12",
   "category": "equipment",
   "question": "Receptacles installed outdoors in a wet location require:",
   "options": [
    "A standard flat cover only",
    "An 'extra-duty' weatherproof-while-in-use cover and weather-resistant receptacle",
    "No cover if under a porch",
    "GFCI only, cover optional"
   ],
   "correct": 1,
   "explanation": "406.9(B)(1): wet locations need weatherproof (in-use/extra-duty) covers; 406.9 also requires WR-listed receptacles.",
   "ref": "406.9"
  },
  {
   "id": "e13",
   "category": "equipment",
   "question": "Per Table 430.248, the full-load current of a 2 hp, 230V, single-phase motor is:",
   "options": [
    "10A",
    "12A",
    "17A",
    "20A"
   ],
   "correct": 1,
   "explanation": "Table 430.248 (230V, single-phase): 1 hp = 8A, 1½ hp = 10A, 2 hp = 12A, 3 hp = 17A, 5 hp = 28A.",
   "ref": "Table 430.248"
  },
  {
   "id": "e14",
   "category": "equipment",
   "question": "Per Table 430.248, the full-load current of a 7½ hp, 230V, single-phase motor is:",
   "options": [
    "28A",
    "34A",
    "40A",
    "50A"
   ],
   "correct": 2,
   "explanation": "Table 430.248: 7½ hp at 230V single-phase = 40A (10 hp = 50A).",
   "ref": "Table 430.248"
  },
  {
   "id": "e15",
   "category": "equipment",
   "question": "The motor in the previous sizing pattern — 7½ hp, 230V single-phase, FLC 40A — requires branch-circuit conductors with an ampacity of at least:",
   "options": [
    "40A",
    "46A",
    "50A",
    "60A"
   ],
   "correct": 2,
   "explanation": "430.22: 40A × 125% = 50A minimum conductor ampacity (e.g., #8 copper at 75°C).",
   "ref": "430.22 / Table 430.248"
  },
  {
   "id": "e16",
   "category": "equipment",
   "question": "For most single-phase motors, the maximum dual-element (time-delay) fuse rating per Table 430.52 is ____ of full-load current.",
   "options": [
    "150%",
    "175%",
    "250%",
    "300%"
   ],
   "correct": 1,
   "explanation": "Table 430.52: dual-element fuse = 175%, non-time-delay fuse = 300%, inverse-time breaker = 250%, instantaneous-trip = 800%.",
   "ref": "Table 430.52"
  },
  {
   "id": "e17",
   "category": "equipment",
   "question": "Running overload protection for a motor with a marked service factor of 1.15 (or a temperature rise of 40°C) shall be selected to trip at not more than ____ of the motor's nameplate full-load current.",
   "options": [
    "100%",
    "115%",
    "125%",
    "140%"
   ],
   "correct": 2,
   "explanation": "430.32(A)(1): motors with SF ≥1.15 or ≤40°C rise get overloads at 125% of nameplate FLA; all other motors get 115%.",
   "ref": "430.32(A)(1)"
  },
  {
   "id": "e18",
   "category": "equipment",
   "question": "Running overload protection for a motor with a service factor of 1.0 shall be selected to trip at not more than ____ of nameplate full-load current.",
   "options": [
    "115%",
    "125%",
    "135%",
    "150%"
   ],
   "correct": 0,
   "explanation": "430.32(A)(1): 'all other motors' — SF below 1.15 and rise above 40°C — are limited to 115% of nameplate FLA.",
   "ref": "430.32(A)(1)"
  },
  {
   "id": "e19",
   "category": "equipment",
   "question": "For a permanently connected appliance rated over 300 VA (or ⅛ hp), 422.31(B) requires a disconnecting means that is:",
   "options": [
    "Located in another building",
    "Within sight of the appliance or capable of being locked in the open position",
    "The service disconnect only",
    "Not required at all"
   ],
   "correct": 1,
   "explanation": "Appliances over 300 VA need a disconnect within sight or lockable open — the rule behind water heater and air-handler disconnects.",
   "ref": "422.31(B)"
  },
  {
   "id": "e2",
   "category": "equipment",
   "question": "Table 430.248 gives a 5 hp, 230V single-phase motor an FLC of 28A. The minimum branch-circuit conductor ampacity is:",
   "options": [
    "28A",
    "32.2A",
    "35A",
    "42A"
   ],
   "correct": 2,
   "explanation": "28 × 125% = 35A minimum conductor ampacity (430.22).",
   "ref": "430.22 / Table 430.248"
  },
  {
   "id": "e20",
   "category": "equipment",
   "question": "Per 440.14, the disconnecting means for air-conditioning or refrigerating equipment shall be located:",
   "options": [
    "At the service equipment only",
    "Within sight of and readily accessible from the equipment",
    "Within 100 ft of the equipment",
    "Inside the equipment's electrical compartment"
   ],
   "correct": 1,
   "explanation": "440.14: within sight (visible, ≤50 ft) and readily accessible — the disconnect you see beside every condenser unit.",
   "ref": "440.14"
  },
  {
   "id": "e21",
   "category": "equipment",
   "question": "Per 410.16(C), a recessed luminaire with a completely enclosed light source in a clothes closet must be installed with a minimum clearance of ____ from the nearest point of the closet storage space.",
   "options": [
    "3 in.",
    "6 in.",
    "12 in.",
    "18 in."
   ],
   "correct": 1,
   "explanation": "Recessed enclosed-source luminaires and surface fluorescent/LED types get 6 in.; surface-mounted incandescent with an enclosed source requires 12 in. Bare lamps are prohibited entirely.",
   "ref": "410.16(C)"
  },
  {
   "id": "e22",
   "category": "equipment",
   "question": "Per 410.10(D), no part of a cord-connected luminaire, track lighting, pendant, or ceiling-suspended fan may be located within the zone extending ____ horizontally and ____ vertically from the top of a bathtub rim or shower stall threshold.",
   "options": [
    "2 ft / 6 ft",
    "3 ft / 8 ft",
    "4 ft / 8 ft",
    "3 ft / 10 ft"
   ],
   "correct": 1,
   "explanation": "The tub/shower zone is 3 ft out and 8 ft up — fixtures inside it must be listed for damp/wet locations as applicable, and the listed types are restricted.",
   "ref": "410.10(D)"
  },
  {
   "id": "e23",
   "category": "equipment",
   "question": "Per 404.2(C), at switch locations controlling lighting loads supplied by a grounded system, the switch enclosure must generally contain:",
   "options": [
    "A separate equipment grounding bar",
    "A grounded (neutral) conductor, so electronic lighting controls can be powered",
    "A GFCI device",
    "A surge protector"
   ],
   "correct": 1,
   "explanation": "404.2(C) requires a neutral at most lighting switch locations (with enumerated exceptions) so dimmers and smart switches don't leak current onto the EGC.",
   "ref": "404.2(C)"
  },
  {
   "id": "e24",
   "category": "equipment",
   "question": "Per 406.9(C), receptacles shall NOT be installed:",
   "options": [
    "Within 3 ft of a bathtub",
    "Within or directly over a bathtub or shower stall space",
    "On a bathroom wall with GFCI protection",
    "Within 6 ft of a sink"
   ],
   "correct": 1,
   "explanation": "Receptacles are banned inside the tub/shower space itself; face-up receptacles in countertops and fixtures inside the space are separately restricted.",
   "ref": "406.9(C)"
  },
  {
   "id": "e25",
   "category": "equipment",
   "question": "Per 430.102(A), the disconnecting means for a motor controller shall be located:",
   "options": [
    "Within sight of the controller, unless a listed exception applies",
    "Only at the service",
    "In the same room, distance unlimited",
    "On the motor nameplate circuit"
   ],
   "correct": 0,
   "explanation": "430.102 has two halves: (A) controller disconnect within sight of the controller, and (B) motor disconnect within sight of the motor and driven machine.",
   "ref": "430.102(A)"
  },
  {
   "id": "e26",
   "category": "equipment",
   "question": "A feeder supplies two motors with table FLCs of 28A and 12A. Per 430.24, the minimum feeder conductor ampacity is:",
   "options": [
    "40A",
    "47A",
    "50A",
    "56A"
   ],
   "correct": 1,
   "explanation": "125% of the largest (28 × 1.25 = 35A) plus 100% of the other (12A) = 47A.",
   "ref": "430.24"
  },
  {
   "id": "e27",
   "category": "equipment",
   "question": "A 3,000W, 240V storage-type water heater (50 gal) is a continuous load. Its minimum branch-circuit rating is:",
   "options": [
    "12.5A → 15A circuit",
    "15.6A → 20A circuit",
    "25A circuit",
    "30A circuit"
   ],
   "correct": 1,
   "explanation": "3,000 ÷ 240 = 12.5A; × 125% (422.13 continuous) = 15.6A → the next standard size is a 20A circuit.",
   "ref": "422.13"
  },
  {
   "id": "e28",
   "category": "equipment",
   "question": "Fixed electric space-heating equipment draws a total of 32A. Because the load is continuous (424.3(B)), the branch-circuit conductors and overcurrent device must be sized for at least:",
   "options": [
    "32A",
    "36A",
    "40A",
    "48A"
   ],
   "correct": 2,
   "explanation": "32A × 125% = 40A — fixed electric space heating is always treated as continuous.",
   "ref": "424.3(B)"
  },
  {
   "id": "e29",
   "category": "equipment",
   "question": "Per 400.8, flexible cords and cables shall NOT be used:",
   "options": [
    "With portable appliances",
    "As a substitute for the fixed wiring of a structure",
    "Where protected from physical damage",
    "In lengths under 6 ft"
   ],
   "correct": 1,
   "explanation": "400.8 also prohibits running cords through walls, ceilings, floors, doorways, or windows, attaching them to building surfaces, or concealing them behind walls.",
   "ref": "400.8"
  },
  {
   "id": "e3",
   "category": "equipment",
   "question": "For most single-phase motors, the maximum inverse-time circuit breaker per Table 430.52 is ____ of FLC.",
   "options": [
    "150%",
    "175%",
    "250%",
    "300%"
   ],
   "correct": 2,
   "explanation": "Table 430.52: inverse-time breaker = 250% of FLC for the motor types listed (other than some Design B exceptions).",
   "ref": "Table 430.52"
  },
  {
   "id": "e30",
   "category": "equipment",
   "question": "A motor has a table FLC of 12A. The maximum inverse-time circuit breaker permitted by Table 430.52 is:",
   "options": [
    "15A",
    "20A",
    "30A",
    "40A"
   ],
   "correct": 2,
   "explanation": "12A × 250% = 30A exactly — and Table 430.52 percentages set the maximum, not the conductor size (conductors here are sized at 125%: 15A ampacity).",
   "ref": "Table 430.52 / 430.52(C)"
  },
  {
   "id": "e4",
   "category": "equipment",
   "question": "Overload protection for a motor is sized from the:",
   "options": [
    "Table 430.250 FLC",
    "Motor nameplate full-load amperes (FLA)",
    "Breaker rating",
    "Service size"
   ],
   "correct": 1,
   "explanation": "430.6(A)(2) and 430.32: overloads are based on nameplate FLA; conductors/OCPD use table FLC.",
   "ref": "430.6(A)"
  },
  {
   "id": "e5",
   "category": "equipment",
   "question": "A motor disconnecting means must be located:",
   "options": [
    "Anywhere on the premises",
    "Within sight of the motor and driven machinery",
    "Only at the service",
    "Within 100 ft"
   ],
   "correct": 1,
   "explanation": "430.102: within sight (visible, ≤50 ft) of the motor and machinery it drives.",
   "ref": "430.102"
  },
  {
   "id": "e6",
   "category": "equipment",
   "question": "A 4,500W, 240V storage-type water heater (40 gal) is treated as a continuous load. Its minimum branch-circuit rating is:",
   "options": [
    "18.75A → 20A circuit",
    "23.4A → 25A circuit",
    "30A circuit regardless",
    "15A circuit"
   ],
   "correct": 1,
   "explanation": "422.13: storage water heaters 120 gal or less are continuous: 4,500 ÷ 240 = 18.75A × 125% = 23.4A → 25A breaker.",
   "ref": "422.13"
  },
  {
   "id": "e7",
   "category": "equipment",
   "question": "Fixed electric space-heating branch circuits size conductors and overcurrent protection at:",
   "options": [
    "100% of load",
    "110% of load",
    "125% of the total load (continuous)",
    "80% of load"
   ],
   "correct": 2,
   "explanation": "424.3(B): fixed electric space heating is a continuous load — 125% sizing.",
   "ref": "424.3(B)"
  },
  {
   "id": "e8",
   "category": "equipment",
   "question": "Which of the following is NOT permitted for a receptacle replacement where no equipment grounding conductor exists in the box?",
   "options": [
    "GFCI-type receptacle marked 'No Equipment Ground'",
    "Non-grounding-type receptacle",
    "Grounding-type receptacle bonded to a nearby water pipe via a separate wire run to any convenient point",
    "GFCI protection upstream with marked cover plates"
   ],
   "correct": 2,
   "explanation": "406.4(D) lists GFCI and non-grounding options; a lone ground wire may only connect to the points listed in 250.130(C) — not any convenient pipe.",
   "ref": "406.4(D) / 250.130(C)"
  },
  {
   "id": "e9",
   "category": "equipment",
   "question": "Tamper-resistant receptacles are required in dwelling units for:",
   "options": [
    "Only nursery rooms",
    "125V, 15A and 20A receptacles in areas specified by 210.52",
    "All receptacles including 240V dryer outlets",
    "Only kitchen countertops"
   ],
   "correct": 1,
   "explanation": "406.12: tamper-resistant required for 125V 15/20A receptacles in dwelling areas specified in 210.52.",
   "ref": "406.12"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "A continuous load is one where maximum current continues for 3 hours or more. It drives the 125% sizing rules.",
   "id": "g1",
   "options": [
    "Demand load",
    "Continuous load",
    "Calculated load",
    "Diversified load"
   ],
   "question": "Per Article 100, a load where the maximum current is expected to continue for 3 hours or more is classified as a:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "110.26(A)(3): headroom must be at least 6½ ft or the height of the equipment, whichever is greater.",
   "id": "g2",
   "options": [
    "6 ft",
    "6½ ft or the height of the equipment, whichever is greater",
    "7 ft",
    "8 ft"
   ],
   "question": "The minimum height of working space about electrical equipment (110.26) is:",
   "ref": "110.26(A)(3)"
  },
  {
   "category": "general",
   "correct": 2,
   "explanation": "110.14(C)(1)(a): terminations for circuits 100A and below use the 60°C column unless equipment is listed and marked for higher.",
   "id": "g3",
   "options": [
    "90°C",
    "75°C",
    "60°C",
    "40°C"
   ],
   "question": "For circuits rated 100A or less, conductor terminations must be based on which temperature column unless the equipment is listed otherwise?",
   "ref": "110.14(C)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "110.3(B) requires installation per instructions included in the listing or labeling.",
   "id": "g4",
   "options": [
    "Local custom",
    "Instructions included in the listing or labeling",
    "The manufacturer's sales literature only",
    "The AHJ's preference"
   ],
   "question": "Listed or labeled equipment shall be installed and used in accordance with:",
   "ref": "110.3(B)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "110.26(A)(2): width is the width of the equipment or 30 in., whichever is greater.",
   "id": "g5",
   "options": [
    "24 in.",
    "30 in. or the width of the equipment, whichever is greater",
    "36 in.",
    "42 in."
   ],
   "question": "The minimum width of working space in front of electrical equipment is:",
   "ref": "110.26(A)(2)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "90.5(A): 'shall' denotes a mandatory requirement. Informational notes are explanatory only.",
   "id": "g6",
   "options": [
    "A recommendation",
    "A mandatory requirement",
    "A future proposal",
    "An informational suggestion"
   ],
   "question": "In the NEC, the word 'shall' indicates:",
   "ref": "90.5(A)"
  },
  {
   "category": "general",
   "correct": 2,
   "explanation": "The grounded conductor (usually the neutral) is intentionally grounded and carries normal circuit current.",
   "id": "g7",
   "options": [
    "Equipment grounding conductor",
    "Grounding electrode conductor",
    "Grounded conductor",
    "Bonding jumper"
   ],
   "question": "A conductor that is intentionally grounded and normally carries current in a premises wiring system is the:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 2,
   "explanation": "'In sight from' / 'within sight' means visible and within 50 ft.",
   "id": "g8",
   "options": [
    "10 ft",
    "25 ft",
    "50 ft",
    "100 ft"
   ],
   "question": "'Within sight' as defined in Article 100 means visible and not more than how far away?",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Table 110.26(A)(1): 0–150V requires 3 ft under all three conditions.",
   "id": "g9",
   "options": [
    "2½ ft",
    "3 ft",
    "3½ ft",
    "4 ft"
   ],
   "question": "Working space depth for equipment 0–150V to ground, with exposed live parts on one side and grounded parts on the other, is at least:",
   "ref": "Table 110.26(A)(1)"
  },
  {
   "category": "general",
   "correct": 3,
   "explanation": "Chapter 9 is Tables — fill percentages, raceway dimensions, and conductor properties.",
   "id": "g10",
   "options": [
    "Chapter 4",
    "Chapter 5",
    "Chapter 8",
    "Chapter 9"
   ],
   "question": "Which chapter of the NEC contains conduit fill and conductor property tables?",
   "ref": "90.3 / Chapter 9"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "A branch circuit runs between the final overcurrent protective device and the outlet(s) it supplies.",
   "id": "g11",
   "options": [
    "The service equipment and the first overcurrent device",
    "The final overcurrent device protecting the circuit and the outlet(s)",
    "The utility transformer and the meter",
    "The panelboard and the service disconnect"
   ],
   "question": "Per Article 100, a branch circuit consists of the circuit conductors between:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 2,
   "explanation": "Feeders carry power from the service equipment (or a separately derived source) to the final branch-circuit overcurrent device.",
   "id": "g12",
   "options": [
    "The final overcurrent device and the outlets",
    "Two branch-circuit devices",
    "The service equipment (or source of a separately derived system) and the final branch-circuit overcurrent device",
    "The meter and the grounding electrode"
   ],
   "question": "Per Article 100, a feeder consists of all circuit conductors between:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Readily accessible adds speed and no obstacles/ladders to simple 'accessible' — a favorite definition trap.",
   "id": "g13",
   "options": [
    "With a portable ladder",
    "Quickly, without climbing over or removing obstacles or using portable ladders",
    "From any point in the building",
    "Only by the authority having jurisdiction"
   ],
   "question": "'Readily accessible' as defined in Article 100 means capable of being reached:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "110.9: interrupting rating must be sufficient for the voltage and the available fault current at the line terminals.",
   "id": "g14",
   "options": [
    "Equal to the normal load current",
    "Sufficient for the nominal circuit voltage and the current available at the line terminals",
    "Not less than 5,000A in all cases",
    "Determined by the equipment's horsepower rating"
   ],
   "question": "Per 110.9, equipment intended to interrupt current at fault levels shall have an interrupting rating that is:",
   "ref": "110.9"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "110.14(C)(1)(b): circuits over 100A use the 75°C column unless equipment is listed/marked for a different temperature. (100A and below default to 60°C.)",
   "id": "g15",
   "options": [
    "60°C",
    "75°C",
    "90°C",
    "40°C"
   ],
   "question": "For circuits rated over 100A, conductor terminations must be based on which temperature column unless the equipment is listed and marked otherwise?",
   "ref": "110.14(C)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Demand factor = maximum demand ÷ total connected load. It is always 1.0 or less.",
   "id": "g16",
   "options": [
    "Connected load to service size",
    "Maximum demand to the total connected load",
    "Voltage drop to circuit length",
    "Continuous load to noncontinuous load"
   ],
   "question": "The 'demand factor' of a system is the ratio of:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 2,
   "explanation": "110.26(E)(1)(a): dedicated space extends 6 ft above the equipment or to the structural ceiling, whichever is lower — and foreign piping/ducts are kept out of it.",
   "id": "g17",
   "options": [
    "The top of the equipment only",
    "3 ft above the equipment",
    "6 ft above the equipment or to the structural ceiling, whichever is lower",
    "The highest pipe or duct in the room"
   ],
   "question": "The dedicated equipment space required by 110.26(E) is equal to the width and depth of the equipment and extends from the floor to:",
   "ref": "110.26(E)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "An outlet is the point where current is taken to supply utilization equipment — receptacle outlets, lighting outlets, and power outlets are all outlets.",
   "id": "g18",
   "options": [
    "Any receptacle",
    "A point on the wiring system at which current is taken to supply utilization equipment",
    "The service disconnecting means",
    "A junction box with splices only"
   ],
   "question": "Per Article 100, an 'outlet' is:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Bonding jumpers establish electrical continuity/conductivity between metal parts — they are about connection, not carrying load current.",
   "id": "g19",
   "options": [
    "A conductor that carries normal load current to earth",
    "A reliable conductor ensuring the required electrical conductivity between metal parts required to be electrically connected",
    "Any green conductor in a raceway",
    "The conductor between the meter and the first ground rod"
   ],
   "question": "A bonding jumper is best defined as:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "90.5(C): informational notes are explanatory only and are not enforceable. Exam distractors often quote a note as if it were a rule.",
   "id": "g20",
   "options": [
    "Mandatory requirements",
    "Explanatory or informative material that is not enforceable as a requirement",
    "Requirements only when the AHJ adopts them by amendment",
    "Part of Chapter 9"
   ],
   "question": "Informational notes in the NEC are:",
   "ref": "90.5(C)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Unused knockouts and openings must be closed with protection equivalent to the enclosure wall — tape doesn't qualify.",
   "id": "g21",
   "options": [
    "Left open for ventilation",
    "Effectively closed to afford protection substantially equivalent to the wall of the equipment",
    "Covered with electrical tape",
    "Filled with foam sealant only"
   ],
   "question": "Per 110.12(A), unused openings in boxes, raceways, and enclosures shall be:",
   "ref": "110.12(A)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Article 100 defines voltage to ground by reference to the grounded point/conductor of the circuit.",
   "id": "g22",
   "options": [
    "Any two ungrounded conductors",
    "The given conductor and the point or conductor of the circuit that is grounded",
    "The two ends of the grounding electrode conductor",
    "Phase conductors measured at the transformer only"
   ],
   "question": "For a grounded system, 'voltage to ground' means the voltage between:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "At least one entrance must be provided to give access to and egress from the working space (larger equipment 6 ft wide or more has additional entrance rules).",
   "id": "g23",
   "options": [
    "No entrance if the room has a window",
    "At least one entrance of sufficient area",
    "Two entrances for all equipment regardless of size",
    "An entrance only on the left side"
   ],
   "question": "Per 110.26(C)(1), access to and egress from working space about electrical equipment requires:",
   "ref": "110.26(C)(1)"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Listing means inclusion in a list published by an organization acceptable to the AHJ (e.g., UL) that evaluates products and maintains periodic inspection.",
   "id": "g24",
   "options": [
    "The equipment manufacturer",
    "An organization acceptable to the authority having jurisdiction",
    "The local supply house",
    "The installing contractor"
   ],
   "question": "'Listed' equipment or materials are those included in a list published by:",
   "ref": "Article 100"
  },
  {
   "category": "general",
   "correct": 1,
   "explanation": "Article 100: identified means recognizable as suitable for the specific purpose described in the requirement.",
   "id": "g25",
   "options": [
    "Marked with the installer's name",
    "Recognizable as suitable for the specific purpose, function, use, environment, or application described",
    "Painted a standard color",
    "Recorded on the permit application"
   ],
   "question": "'Identified' as used in the NEC means:",
   "ref": "Article 100"
  },
  {
   "id": "gr1",
   "category": "grounding",
   "question": "A single ground rod must be supplemented by an additional electrode unless a resistance test shows not more than:",
   "options": [
    "5 ohms",
    "10 ohms",
    "25 ohms",
    "50 ohms"
   ],
   "correct": 2,
   "explanation": "250.53(A)(2): a single rod, pipe, or plate must be supplemented unless its resistance to ground is 25 Ω or less.",
   "ref": "250.53(A)(2)"
  },
  {
   "id": "gr10",
   "category": "grounding",
   "question": "A metal underground water pipe used as a grounding electrode must be supplemented because:",
   "options": [
    "It corrodes too quickly",
    "It may be replaced or repaired with nonmetallic pipe, isolating it",
    "It carries current",
    "It is too conductive"
   ],
   "correct": 1,
   "explanation": "250.53(D)(2) requires supplementation of a metal water pipe electrode because sections can be isolated by plastic repairs.",
   "ref": "250.53(D)(2)"
  },
  {
   "id": "gr11",
   "category": "grounding",
   "question": "A concrete-encased electrode (Ufer) consists of at least how much bare copper conductor or rebar encased in concrete?",
   "options": [
    "10 ft",
    "15 ft",
    "20 ft",
    "25 ft"
   ],
   "correct": 2,
   "explanation": "250.52(A)(3): at least 20 ft of rebar or bare copper, encased in at least 2 in. of concrete.",
   "ref": "250.52(A)(3)"
  },
  {
   "id": "gr12",
   "category": "grounding",
   "question": "A 20A branch circuit's copper equipment grounding conductor minimum size is:",
   "options": [
    "#14 AWG",
    "#12 AWG",
    "#10 AWG",
    "Not required"
   ],
   "correct": 1,
   "explanation": "Table 250.122: 20A → #12 copper EGC.",
   "ref": "Table 250.122"
  },
  {
   "id": "gr13",
   "category": "grounding",
   "question": "Service equipment uses 350 kcmil copper service-entrance conductors. The minimum copper grounding electrode conductor per Table 250.66 is:",
   "options": [
    "#4 AWG",
    "#2 AWG",
    "1/0 AWG",
    "2/0 AWG"
   ],
   "correct": 1,
   "explanation": "Table 250.66: over 3/0 through 350 kcmil copper service conductors require a #2 copper GEC.",
   "ref": "Table 250.66"
  },
  {
   "id": "gr14",
   "category": "grounding",
   "question": "Service equipment uses 4/0 aluminum service-entrance conductors. The minimum copper grounding electrode conductor per Table 250.66 is:",
   "options": [
    "#6 AWG",
    "#4 AWG",
    "#2 AWG",
    "1/0 AWG"
   ],
   "correct": 1,
   "explanation": "Table 250.66 pairs 4/0–250 kcmil aluminum service conductors with the same row as 2/0–3/0 copper: a #4 copper GEC.",
   "ref": "Table 250.66"
  },
  {
   "id": "gr15",
   "category": "grounding",
   "question": "The portion of a grounding electrode conductor that is the sole connection to a concrete-encased electrode is not required to be larger than:",
   "options": [
    "#8 copper",
    "#6 copper",
    "#4 copper",
    "#2 copper"
   ],
   "correct": 2,
   "explanation": "250.66(B): the GEC to a concrete-encased electrode never has to exceed #4 copper — the ceiling rule paired with #6 for rods.",
   "ref": "250.66(B)"
  },
  {
   "id": "gr16",
   "category": "grounding",
   "question": "A ground ring electrode must be buried at a depth of not less than:",
   "options": [
    "12 in.",
    "18 in.",
    "24 in.",
    "30 in."
   ],
   "correct": 3,
   "explanation": "250.52(A)(4): a ground ring is at least 20 ft of bare copper not smaller than #2 AWG, buried at least 30 in. below grade.",
   "ref": "250.52(A)(4)"
  },
  {
   "id": "gr17",
   "category": "grounding",
   "question": "A plate electrode must expose to the earth a surface area of not less than:",
   "options": [
    "1 sq ft",
    "2 sq ft",
    "4 sq ft",
    "8 sq ft"
   ],
   "correct": 1,
   "explanation": "250.52(A)(7): each plate electrode must expose at least 2 sq ft of surface to exterior soil.",
   "ref": "250.52(A)(7)"
  },
  {
   "id": "gr18",
   "category": "grounding",
   "question": "Rod electrodes of stainless steel or copper/zinc-coated steel shall have a diameter of not less than:",
   "options": [
    "½ in.",
    "⅝ in.",
    "¾ in.",
    "1 in."
   ],
   "correct": 1,
   "explanation": "250.52(A)(5): rod electrodes are at least ⅝ in. in diameter unless listed (pipe electrodes are at least ¾ in. trade size).",
   "ref": "250.52(A)(5)"
  },
  {
   "id": "gr19",
   "category": "grounding",
   "question": "A circuit protected by a 60A overcurrent device requires a copper equipment grounding conductor of at least:",
   "options": [
    "#12 AWG",
    "#10 AWG",
    "#8 AWG",
    "#6 AWG"
   ],
   "correct": 1,
   "explanation": "Table 250.122: the 30A-through-60A row requires a #10 copper EGC.",
   "ref": "Table 250.122"
  },
  {
   "id": "gr2",
   "category": "grounding",
   "question": "A grounding electrode conductor connected only to a ground rod is not required to be larger than:",
   "options": [
    "#8 copper",
    "#6 copper",
    "#4 copper",
    "#2 copper"
   ],
   "correct": 1,
   "explanation": "250.66(A): the portion of the GEC that is the sole connection to rod/pipe/plate electrodes need not exceed #6 copper.",
   "ref": "250.66(A)"
  },
  {
   "id": "gr20",
   "category": "grounding",
   "question": "A circuit protected by a 400A overcurrent device requires a copper equipment grounding conductor of at least:",
   "options": [
    "#6 AWG",
    "#4 AWG",
    "#3 AWG",
    "#2 AWG"
   ],
   "correct": 2,
   "explanation": "Table 250.122: 400A → #3 copper EGC.",
   "ref": "Table 250.122"
  },
  {
   "id": "gr21",
   "category": "grounding",
   "question": "Which of the following is recognized by 250.118 as an equipment grounding conductor?",
   "options": [
    "The sheath of Type NM cable",
    "Electrical metallic tubing (EMT) installed per the NEC",
    "A water pipe run with the circuit",
    "The neutral conductor"
   ],
   "correct": 1,
   "explanation": "250.118 lists wire-type conductors and metal raceways including EMT, rigid, and IMC as acceptable EGCs when installed as required.",
   "ref": "250.118"
  },
  {
   "id": "gr22",
   "category": "grounding",
   "question": "The main bonding jumper performs which function?",
   "options": [
    "It connects the grounding electrode to the water pipe",
    "It connects the grounded (neutral) conductor to the equipment grounding conductor and the service disconnect enclosure at the service",
    "It bonds the neutral to ground in every panelboard",
    "It replaces the grounding electrode conductor"
   ],
   "correct": 1,
   "explanation": "250.28 / 250.24: the main bonding jumper makes the neutral-to-ground connection at the service — and only at the service.",
   "ref": "250.28"
  },
  {
   "id": "gr23",
   "category": "grounding",
   "question": "Grounding electrode conductor connections that are encased in concrete or buried in the earth are:",
   "options": [
    "Prohibited",
    "Not required to be accessible",
    "Required to have an access panel",
    "Permitted only with soldered joints"
   ],
   "correct": 1,
   "explanation": "250.68(A) Exception: connections encased in concrete or buried in earth are not required to be accessible (all other electrode connections are).",
   "ref": "250.68(A)"
  },
  {
   "id": "gr24",
   "category": "grounding",
   "question": "Bonding jumpers for metal water piping systems in a building are sized in accordance with:",
   "options": [
    "Table 250.122, based on the largest breaker",
    "Table 250.102(C)(1), based on the size of the largest ungrounded service-entrance conductor",
    "A flat #6 minimum in all cases",
    "The water pipe size"
   ],
   "correct": 1,
   "explanation": "250.104(A)(1): metal water piping bonding jumpers are sized per Table 250.102(C)(1) using the service-entrance conductor size — not Table 250.122.",
   "ref": "250.104(A)"
  },
  {
   "id": "gr25",
   "category": "grounding",
   "question": "Per 250.6(A), grounding and bonding connections shall be arranged so as to:",
   "options": [
    "Carry all neutral current on the grounding path",
    "Prevent objectionable current from flowing over the grounding conductors or grounding path",
    "Bond the neutral at every enclosure",
    "Eliminate the need for a grounding electrode"
   ],
   "correct": 1,
   "explanation": "250.6 addresses objectionable current: the arrangement must prevent it, which is why downstream neutral-to-ground bonds are prohibited.",
   "ref": "250.6(A)"
  },
  {
   "id": "gr26",
   "category": "grounding",
   "question": "The grounding electrode conductor for a grounded separately derived system (e.g., a transformer) shall connect the derived system grounded conductor to the nearest available:",
   "options": [
    "Ground rod driven at the transformer pad only",
    "Metal underground water pipe or effectively grounded structural metal building frame, as specified in 250.30(A)(4)",
    "Gas piping system",
    "Any isolated ground rod, regardless of distance"
   ],
   "correct": 1,
   "explanation": "250.30(A)(4): use the nearest available point on a metal underground water pipe electrode or effectively grounded structural metal frame.",
   "ref": "250.30(A)(4)"
  },
  {
   "id": "gr27",
   "category": "grounding",
   "question": "Circuit conductors on a 30A circuit are upsized from #10 to #8 for voltage drop. Per 250.122(B), the equipment grounding conductor (originally #10) must be upsized to:",
   "options": [
    "It may remain #10",
    "#8, proportionally by circular mil area",
    "#6, two sizes larger",
    "The size of the largest service conductor"
   ],
   "correct": 1,
   "explanation": "The EGC increases in the same CM ratio as the ungrounded conductors: #10 (10,380 CM) → #8 (16,510 CM) is the same step the circuit conductors took.",
   "ref": "250.122(B)"
  },
  {
   "id": "gr28",
   "category": "grounding",
   "question": "Where circuit conductors are spliced or terminated in a box, equipment grounding conductors shall be:",
   "options": [
    "Left loose if the box is nonmetallic",
    "Connected together and bonded to the box so continuity is maintained when a device is removed",
    "Cut flush at the box entry",
    "Connected only to the device yoke"
   ],
   "correct": 1,
   "explanation": "250.148: EGCs in a box are spliced/terminated so removing a device does not interrupt grounding continuity, and metal boxes are bonded.",
   "ref": "250.148"
  },
  {
   "id": "gr29",
   "category": "grounding",
   "question": "A #6 copper grounding electrode conductor may be installed exposed without being in a raceway provided it is:",
   "options": [
    "Painted green",
    "Not exposed to physical damage",
    "At least 10 ft long",
    "Connected to two rods"
   ],
   "correct": 1,
   "explanation": "250.64(B): a #6 GEC run exposed must be securely fastened and not exposed to physical damage; GECs smaller than #6 must be in a raceway or armor.",
   "ref": "250.64(B)"
  },
  {
   "id": "gr3",
   "category": "grounding",
   "question": "Service equipment uses 2/0 copper service-entrance conductors. The minimum copper grounding electrode conductor per Table 250.66 is:",
   "options": [
    "#8 AWG",
    "#6 AWG",
    "#4 AWG",
    "#2 AWG"
   ],
   "correct": 2,
   "explanation": "Table 250.66: 2/0–3/0 copper service conductors require a #4 copper GEC.",
   "ref": "Table 250.66"
  },
  {
   "id": "gr30",
   "category": "grounding",
   "question": "Continuity of a metal underground water pipe grounding electrode shall NOT depend on:",
   "options": [
    "The bonding jumper",
    "Water meters or water filtration equipment (a bonding jumper is required around them)",
    "Listed grounding clamps",
    "The grounding electrode conductor"
   ],
   "correct": 1,
   "explanation": "250.53(D)(1): continuity must not rely on water meters/filters that could be removed — bond around them.",
   "ref": "250.53(D)(1)"
  },
  {
   "id": "gr31",
   "category": "grounding",
   "question": "A single ground rod is tested and measures 30 ohms resistance to ground. The installation must:",
   "options": [
    "Pass — anything under 50 ohms is acceptable",
    "Be supplemented (augmented) by an additional electrode",
    "Use a larger grounding electrode conductor",
    "Remove the rod and use the water pipe only"
   ],
   "correct": 1,
   "explanation": "250.53(A)(2): above 25 ohms, a single rod/pipe/plate must be augmented by an additional electrode — no re-test of the pair is required.",
   "ref": "250.53(A)(2)"
  },
  {
   "id": "gr32",
   "category": "grounding",
   "question": "Supply-side bonding jumpers (on the line side of the service disconnect) are sized in accordance with:",
   "options": [
    "Table 250.122",
    "Table 250.102(C)(1), based on the size of the ungrounded supply conductors",
    "The interrupting rating of the service equipment",
    "A flat #8 minimum"
   ],
   "correct": 1,
   "explanation": "250.102(C): supply-side bonding jumpers follow Table 250.102(C)(1) — driven by supply conductor size, unlike load-side EGCs.",
   "ref": "250.102(C)"
  },
  {
   "id": "gr33",
   "category": "grounding",
   "question": "Per 250.24(A)(1), the grounding electrode conductor connection to the grounded service conductor shall be made at any accessible point:",
   "options": [
    "Inside any subpanel",
    "From the load side of the service drop or service lateral to and including the service disconnecting means grounded conductor terminal bus",
    "Only inside the meter socket",
    "At the last receptacle on the longest circuit"
   ],
   "correct": 1,
   "explanation": "The GEC may connect anywhere accessible along that stretch — which is why the connection is often made at the service disconnect or meter enclosure.",
   "ref": "250.24(A)(1)"
  },
  {
   "id": "gr34",
   "category": "grounding",
   "question": "For circuits rated over 250 volts to ground, where conductors pass through concentric or eccentric knockouts in metal enclosures, 250.97 requires:",
   "options": [
    "No special bonding",
    "Bonding in accordance with 250.92(B) (the methods used for services)",
    "Plastic bushings only",
    "A separate ground rod at the enclosure"
   ],
   "correct": 1,
   "explanation": "250.97 extends service-type bonding to circuits over 250V to ground because knockouts can impair the fault path at those voltages.",
   "ref": "250.97"
  },
  {
   "id": "gr35",
   "category": "grounding",
   "question": "Per 250.20(B)(1), an AC system of 50 to 1000 volts must have one conductor grounded where the system can be grounded so that the maximum voltage to ground does not exceed:",
   "options": [
    "50 volts",
    "120 volts",
    "150 volts",
    "277 volts"
   ],
   "correct": 2,
   "explanation": "250.20(B)(1) is the rule that grounds 120/240V and similar systems: grounding is required when voltage to ground can be held to 150V or less.",
   "ref": "250.20(B)(1)"
  },
  {
   "id": "gr4",
   "category": "grounding",
   "question": "Multiple ground rods installed as part of a grounding electrode system shall be spaced not less than:",
   "options": [
    "4 ft apart",
    "6 ft apart",
    "8 ft apart",
    "10 ft apart"
   ],
   "correct": 1,
   "explanation": "Rod electrodes must be spaced at least 6 ft apart (250.53).",
   "ref": "250.53"
  },
  {
   "id": "gr5",
   "category": "grounding",
   "question": "Which statement is correct about the earth as a fault path?",
   "options": [
    "Earth is the primary fault-clearing path",
    "Earth shall not be considered an effective ground-fault current path",
    "Earth resistance must be under 1 ohm for breakers to trip",
    "Ground rods trip breakers through soil conduction"
   ],
   "correct": 1,
   "explanation": "250.4(A)(5): the earth is not an effective ground-fault current path; a low-impedance EGC path is required.",
   "ref": "250.4(A)(5)"
  },
  {
   "id": "gr6",
   "category": "grounding",
   "question": "A 200A circuit requires a copper equipment grounding conductor of at least:",
   "options": [
    "#8 AWG",
    "#6 AWG",
    "#4 AWG",
    "#3 AWG"
   ],
   "correct": 1,
   "explanation": "Table 250.122: a 200A overcurrent device requires a #6 copper EGC.",
   "ref": "Table 250.122"
  },
  {
   "id": "gr7",
   "category": "grounding",
   "question": "Where ungrounded conductors are increased in size for voltage drop, the equipment grounding conductor must be:",
   "options": [
    "Left at minimum size",
    "Increased proportionally by circular mil area",
    "Doubled in size",
    "Increased by one size only"
   ],
   "correct": 1,
   "explanation": "250.122(B): wire-type EGCs are increased proportionally to the circular mil increase of the ungrounded conductors.",
   "ref": "250.122(B)"
  },
  {
   "id": "gr8",
   "category": "grounding",
   "question": "All grounding electrodes present at a building or structure shall be:",
   "options": [
    "Optional — pick the best one",
    "Bonded together to form the grounding electrode system",
    "Kept isolated from each other",
    "Removed if a rod exists"
   ],
   "correct": 1,
   "explanation": "250.50 requires all electrodes present to be bonded together into one system.",
   "ref": "250.50"
  },
  {
   "id": "gr9",
   "category": "grounding",
   "question": "In a subpanel (separate from service equipment), the grounded (neutral) conductors and equipment grounding conductors must be:",
   "options": [
    "Bonded together on the same bar",
    "Kept separate — neutral bar isolated from the enclosure",
    "Bonded only if the panel is metal",
    "Connected through the main bonding jumper"
   ],
   "correct": 1,
   "explanation": "The main bonding jumper is at the service only; downstream, neutrals are isolated and grounds are bonded to the enclosure (250.24 / 250.142).",
   "ref": "250.142(B)"
  },
  {
   "id": "o1",
   "category": "osha",
   "question": "On a construction site, 120V, single-phase, 15A and 20A receptacles not part of the permanent building wiring require:",
   "options": [
    "No special protection",
    "GFCI protection or an assured equipment grounding conductor program",
    "Isolation transformers only",
    "Double-insulated receptacles only"
   ],
   "correct": 1,
   "explanation": "1926.404(b)(1)(ii)–(iii): GFCI protection, or an assured equipment grounding conductor program, is required.",
   "ref": "OSHA 1926.404(b)(1)"
  },
  {
   "id": "o10",
   "category": "osha",
   "question": "A 'competent person' under OSHA excavation standards must inspect the excavation:",
   "options": [
    "Once a week",
    "Daily and after any hazard-increasing event (e.g., rain)",
    "Only before the first entry",
    "Only when a cave-in is suspected"
   ],
   "correct": 1,
   "explanation": "1926.651(k): inspections by a competent person daily before work and as needed, including after rainstorms.",
   "ref": "OSHA 1926.651(k)"
  },
  {
   "id": "o11",
   "category": "osha",
   "question": "Employees working on a scaffold more than ____ above a lower level must be protected from falling (guardrails and/or personal fall arrest systems).",
   "options": [
    "4 ft",
    "6 ft",
    "10 ft",
    "15 ft"
   ],
   "correct": 2,
   "explanation": "1926.451(g)(1): scaffold fall protection triggers at 10 ft — higher than the 6-ft trigger for general walking/working surfaces.",
   "ref": "OSHA 1926.451(g)"
  },
  {
   "id": "o12",
   "category": "osha",
   "question": "Per 1926.502(b)(1), the top edge of a guardrail system must be ____ above the walking/working level (within ±3 in.).",
   "options": [
    "36 in.",
    "39 in.",
    "42 in.",
    "48 in."
   ],
   "correct": 2,
   "explanation": "Guardrail top rails at 42 in. nominal (39–45 in. permitted) with midrails about halfway down.",
   "ref": "OSHA 1926.502(b)"
  },
  {
   "id": "o13",
   "category": "osha",
   "question": "A personal fall arrest system must be rigged so an employee can neither free fall more than ____ nor contact any lower level.",
   "options": [
    "2 ft",
    "4 ft",
    "6 ft",
    "10 ft"
   ],
   "correct": 2,
   "explanation": "1926.502(d)(16): maximum free fall is 6 ft, and maximum arresting force on a body harness is 1,800 lb.",
   "ref": "OSHA 1926.502(d)"
  },
  {
   "id": "o14",
   "category": "osha",
   "question": "Per 1926.100, employees working where there is a possible danger of head injury from impact, falling or flying objects, or electrical shock and burns shall be protected by:",
   "options": [
    "Hard hats (protective helmets)",
    "Bump caps",
    "Safety glasses",
    "High-visibility vests"
   ],
   "correct": 0,
   "explanation": "1926.100(a): protective helmets are required wherever those head-injury hazards exist — including overhead electrical work.",
   "ref": "OSHA 1926.100"
  },
  {
   "id": "o15",
   "category": "osha",
   "question": "Per 1926.417 (lockout and tagging of circuits), when a circuit has been de-energized and work is being performed on it, the employer shall:",
   "options": [
    "Rely on a verbal warning to other crews",
    "Place tags (and locks where the disconnecting means can accept them) at all points where the circuit can be energized",
    "Remove the circuit conductors",
    "Notify OSHA before starting work"
   ],
   "correct": 1,
   "explanation": "Tags at every point where the equipment or circuits can be energized, placed by the employee who de-energized them — construction's lockout rule.",
   "ref": "OSHA 1926.417"
  },
  {
   "id": "o16",
   "category": "osha",
   "question": "Per 1926.405(a)(2), extension cords used with portable electric tools on a construction site shall be:",
   "options": [
    "Two-wire, lamp-cord type",
    "Three-wire type and designed for hard or extra-hard usage",
    "Any cord rated for indoor use",
    "Limited to 6 ft in length"
   ],
   "correct": 1,
   "explanation": "Job-site extension cords must be three-wire (grounded) and hard/extra-hard usage type — zip cord is prohibited.",
   "ref": "OSHA 1926.405(a)(2)"
  },
  {
   "id": "o17",
   "category": "osha",
   "question": "In Type C soil, the maximum allowable slope for a simple trench excavation (Appendix B to Subpart P) is:",
   "options": [
    "¾H:1V (53°)",
    "1H:1V (45°)",
    "1½H:1V (34°)",
    "2H:1V (27°)"
   ],
   "correct": 2,
   "explanation": "Type C is the least stable soil class: 1½ horizontal to 1 vertical (34°). Type A allows ¾:1 (53°), Type B 1:1 (45°).",
   "ref": "OSHA 1926 Subpart P App. B"
  },
  {
   "id": "o18",
   "category": "osha",
   "question": "Under an assured equipment grounding conductor program (1926.404(b)(1)(iii)), cord sets and equipment that are not fixed-and-in-place must be visually inspected:",
   "options": [
    "Once a month",
    "Before each day's use, before initial use, and after repairs or suspected damage",
    "Only when new",
    "At the end of the project"
   ],
   "correct": 1,
   "explanation": "The assured program substitutes documented daily visual inspections plus scheduled continuity/resistance tests for GFCIs — the paperwork is the price of the alternative.",
   "ref": "OSHA 1926.404(b)(1)(iii)"
  },
  {
   "id": "o19",
   "category": "osha",
   "question": "Per 1926.102, employees exposed to hazards such as flying particles must be provided with:",
   "options": [
    "Ordinary prescription glasses",
    "Eye protection equipment, with side protection where flying-object hazards exist",
    "A face shield only, no glasses",
    "No protection if work lasts under an hour"
   ],
   "correct": 1,
   "explanation": "1926.102(a): suitable eye protection matched to the hazard, and detachable side protectors where there is a flying-object hazard.",
   "ref": "OSHA 1926.102"
  },
  {
   "id": "o2",
   "category": "osha",
   "question": "Fall protection is required for construction employees working on surfaces with unprotected sides/edges at heights of:",
   "options": [
    "4 ft or more",
    "6 ft or more",
    "10 ft or more",
    "15 ft or more"
   ],
   "correct": 1,
   "explanation": "1926.501(b)(1): construction fall protection triggers at 6 ft (general industry's 4 ft does not apply).",
   "ref": "OSHA 1926.501"
  },
  {
   "id": "o20",
   "category": "osha",
   "question": "Per 1926.405(a)(2), lamps used for temporary illumination on a job site shall be:",
   "options": [
    "Bare bulbs where convenient",
    "Protected from accidental contact or breakage by a suitable fixture or lamp guard",
    "Hung by their cords from nails",
    "Limited to 60W"
   ],
   "correct": 1,
   "explanation": "Temporary string lights need guards over the lamps — broken bare bulbs in a work area are both a shock and fire hazard.",
   "ref": "OSHA 1926.405(a)(2)"
  },
  {
   "id": "o3",
   "category": "osha",
   "question": "A portable ladder used to access an upper landing must extend at least ____ above the landing surface.",
   "options": [
    "1 ft",
    "2 ft",
    "3 ft",
    "4 ft"
   ],
   "correct": 2,
   "explanation": "1926.1053(b)(1): side rails must extend at least 3 ft above the upper landing surface.",
   "ref": "OSHA 1926.1053(b)(1)"
  },
  {
   "id": "o4",
   "category": "osha",
   "question": "Trenches ____ or deeper require a protective system (sloping, shoring, or shielding) unless excavated entirely in stable rock.",
   "options": [
    "3 ft",
    "4 ft",
    "5 ft",
    "6 ft"
   ],
   "correct": 2,
   "explanation": "1926.652(a)(1): protective systems are required in trenches 5 ft or more in depth.",
   "ref": "OSHA 1926.652(a)"
  },
  {
   "id": "o5",
   "category": "osha",
   "question": "In trenches 4 ft or deeper, a ladder or other exit means must be located so no worker travels more than ____ laterally to reach it.",
   "options": [
    "10 ft",
    "15 ft",
    "25 ft",
    "50 ft"
   ],
   "correct": 2,
   "explanation": "1926.651(c)(2): means of egress within 25 ft of lateral travel.",
   "ref": "OSHA 1926.651(c)(2)"
  },
  {
   "id": "o6",
   "category": "osha",
   "question": "Excavated spoil material must be kept at least ____ from the edge of a trench.",
   "options": [
    "6 in.",
    "1 ft",
    "2 ft",
    "4 ft"
   ],
   "correct": 2,
   "explanation": "1926.651(j)(2): keep spoils and equipment at least 2 ft from the excavation edge.",
   "ref": "OSHA 1926.651(j)(2)"
  },
  {
   "id": "o7",
   "category": "osha",
   "question": "A non-self-supporting ladder must be set up at an angle where the base is out from the support:",
   "options": [
    "1 ft per 2 ft of height",
    "1 ft per 3 ft of height",
    "1 ft per 4 ft of height",
    "1 ft per 6 ft of height"
   ],
   "correct": 2,
   "explanation": "1926.1053(b)(5)(i): horizontal distance from top support to foot is approximately one-quarter (4:1) of the working length.",
   "ref": "OSHA 1926.1053(b)(5)"
  },
  {
   "id": "o8",
   "category": "osha",
   "question": "Which practice is prohibited by OSHA electrical safety rules (1926.416)?",
   "options": [
    "Working near live parts with the circuit de-energized and locked out",
    "Working on energized parts without guarding, insulation, or other protection",
    "Using GFCI-protected tools",
    "Inspecting cords before use"
   ],
   "correct": 1,
   "explanation": "1926.416(a)(1): no employee may work in proximity to energized parts without protection (de-energize, guard, insulate, or isolate).",
   "ref": "OSHA 1926.416(a)"
  },
  {
   "id": "o9",
   "category": "osha",
   "question": "Under OSHA temporary wiring rules, flexible cords on site must be:",
   "options": [
    "Spliced freely with tape",
    "Protected from damage; damaged or frayed cords removed from service",
    "Run under doors to keep them hidden",
    "Hung from nails for support"
   ],
   "correct": 1,
   "explanation": "1926.405: cords must be protected from accidental damage and maintained; worn/frayed cords are taken out of service.",
   "ref": "OSHA 1926.405"
  },
  {
   "id": "p1",
   "category": "protection",
   "question": "The maximum overcurrent protection for a #12 AWG copper conductor (other than motor/art-specific rules) is:",
   "options": [
    "15A",
    "20A",
    "25A",
    "30A"
   ],
   "correct": 1,
   "explanation": "240.4(D)(5): #12 copper is capped at 20A even though its 75°C table ampacity is 25A.",
   "ref": "240.4(D)"
  },
  {
   "id": "p10",
   "category": "protection",
   "question": "How many 20A small-appliance branch circuits are required for a dwelling kitchen?",
   "options": [
    "One",
    "Two or more",
    "Three",
    "One per receptacle"
   ],
   "correct": 1,
   "explanation": "210.11(C)(1) and 210.52(B): two or more 20A small-appliance branch circuits serve kitchen/dining receptacles.",
   "ref": "210.11(C)(1)"
  },
  {
   "id": "p11",
   "category": "protection",
   "question": "Dishwasher branch circuits in dwellings require GFCI protection per:",
   "options": [
    "210.8(A)(1)",
    "210.8(D)",
    "No GFCI is required for dishwashers",
    "406.4 only"
   ],
   "correct": 1,
   "explanation": "210.8(D) requires GFCI protection for outlets supplying dishwashers in dwelling units.",
   "ref": "210.8(D)"
  },
  {
   "id": "p12",
   "category": "protection",
   "question": "Standard ampere ratings in 240.6(A) include all of the following EXCEPT:",
   "options": [
    "25A",
    "35A",
    "45A",
    "55A"
   ],
   "correct": 3,
   "explanation": "240.6(A) standard ratings run 15, 20, 25, 30, 35, 40, 45, 50, 60, 70… — 55A is not a standard rating.",
   "ref": "240.6(A)"
  },
  {
   "id": "p13",
   "category": "protection",
   "question": "The maximum overcurrent protection for a #14 AWG copper conductor (other than motor/art-specific rules) is:",
   "options": [
    "15A",
    "20A",
    "25A",
    "30A"
   ],
   "correct": 0,
   "explanation": "240.4(D)(3): #14 copper is capped at 15A even though its 90°C table ampacity is 25A.",
   "ref": "240.4(D)"
  },
  {
   "id": "p14",
   "category": "protection",
   "question": "The maximum overcurrent protection for a #10 AWG copper conductor (other than motor/art-specific rules) is:",
   "options": [
    "20A",
    "25A",
    "30A",
    "35A"
   ],
   "correct": 2,
   "explanation": "240.4(D)(7): #10 copper is capped at 30A — the third of the small-conductor caps (#14→15, #12→20, #10→30).",
   "ref": "240.4(D)"
  },
  {
   "id": "p15",
   "category": "protection",
   "question": "The maximum overcurrent protection for a #12 AWG aluminum conductor is:",
   "options": [
    "10A",
    "15A",
    "20A",
    "25A"
   ],
   "correct": 1,
   "explanation": "240.4(D)(4): #12 aluminum is capped at 15A (and #10 aluminum at 25A) — aluminum caps run one step below copper at the same gauge.",
   "ref": "240.4(D)"
  },
  {
   "id": "p16",
   "category": "protection",
   "question": "Per Table 210.21(B)(2), where a receptacle is fed from a 20A branch circuit, the maximum cord-and-plug-connected load that may be plugged into it is:",
   "options": [
    "12A",
    "16A",
    "20A",
    "24A"
   ],
   "correct": 1,
   "explanation": "Table 210.21(B)(2): a receptacle on a 20A circuit is limited to a 16A maximum cord-and-plug load (the 80% rule at the receptacle).",
   "ref": "Table 210.21(B)(2)"
  },
  {
   "id": "p17",
   "category": "protection",
   "question": "Per Table 210.21(B)(3), receptacles installed on a 20A branch circuit (more than one receptacle) may have a rating of:",
   "options": [
    "15A only",
    "20A only",
    "15A or 20A",
    "30A"
   ],
   "correct": 2,
   "explanation": "A 20A multioutlet circuit accepts 15A or 20A receptacles — the common 15A duplex on a 20A kitchen circuit is legal.",
   "ref": "Table 210.21(B)(3)"
  },
  {
   "id": "p18",
   "category": "protection",
   "question": "Per 210.52(D), a receptacle outlet shall be installed within ____ of the outside edge of each bathroom basin (lavatory).",
   "options": [
    "12 in.",
    "18 in.",
    "3 ft",
    "6 ft"
   ],
   "correct": 2,
   "explanation": "210.52(D): within 3 ft of the outside edge of each basin, on a wall or partition adjacent to the basin.",
   "ref": "210.52(D)"
  },
  {
   "id": "p19",
   "category": "protection",
   "question": "A dwelling hallway requires at least one receptacle outlet when the hallway is ____ or longer, measured along the centerline.",
   "options": [
    "6 ft",
    "8 ft",
    "10 ft",
    "12 ft"
   ],
   "correct": 2,
   "explanation": "210.52(H): hallways 10 ft or more in length require at least one receptacle outlet.",
   "ref": "210.52(H)"
  },
  {
   "id": "p2",
   "category": "protection",
   "question": "In a dwelling, receptacles along a kitchen countertop must be placed so no point is more than ____ measured horizontally from a receptacle.",
   "options": [
    "12 in.",
    "18 in.",
    "24 in.",
    "48 in."
   ],
   "correct": 2,
   "explanation": "210.52(C)(1): no point along the countertop wall line more than 24 in. from a receptacle.",
   "ref": "210.52(C)(1)"
  },
  {
   "id": "p20",
   "category": "protection",
   "question": "Kitchen countertop spaces ____ or wider require a receptacle outlet per 210.52(C).",
   "options": [
    "6 in.",
    "12 in.",
    "18 in.",
    "24 in."
   ],
   "correct": 1,
   "explanation": "Any countertop space 12 in. or wider gets a receptacle, and no point may be more than 24 in. from one.",
   "ref": "210.52(C)"
  },
  {
   "id": "p21",
   "category": "protection",
   "question": "Per 210.52(E)(1), a one- or two-family dwelling must have outdoor receptacle outlets:",
   "options": [
    "One at the back only",
    "At least two that are accessible while standing at grade — one at the front and one at the back, not more than 6 ft 6 in. above grade",
    "Four, one per side",
    "Only if a garage is present"
   ],
   "correct": 1,
   "explanation": "Front and back, accessible at grade level, max height 6½ ft — a classic two-part rule the exam tests together.",
   "ref": "210.52(E)(1)"
  },
  {
   "id": "p22",
   "category": "protection",
   "question": "The 125V receptacle required for servicing heating, air-conditioning, and refrigeration equipment (210.63) must be located:",
   "options": [
    "Inside the equipment disconnect",
    "On the same level and within 25 ft of the equipment",
    "Within 50 ft, any level",
    "Only at the service panel"
   ],
   "correct": 1,
   "explanation": "210.63: a servicing receptacle on the same level, within 25 ft of the HVAC equipment (and it may not be fed from the load side of the equipment disconnect).",
   "ref": "210.63"
  },
  {
   "id": "p23",
   "category": "protection",
   "question": "A Class A ground-fault circuit interrupter is designed to trip when the ground-fault current exceeds approximately:",
   "options": [
    "5 mA",
    "30 mA",
    "100 mA",
    "1A"
   ],
   "correct": 0,
   "explanation": "Per the informational note to the Article 100 GFCI definition, Class A GFCIs trip when fault current to ground exceeds 5 mA — personnel protection. (30 mA is equipment ground-fault protection territory.)",
   "ref": "Article 100 — GFCI"
  },
  {
   "id": "p24",
   "category": "protection",
   "question": "In a commercial (non-dwelling) building, 210.8(B) requires GFCI protection for 125V, single-phase, 15A and 20A receptacles installed in:",
   "options": [
    "Private offices",
    "Bathrooms, kitchens, rooftops, and outdoors, among other listed locations",
    "Storage rooms only",
    "No commercial locations"
   ],
   "correct": 1,
   "explanation": "210.8(B) extends GFCI to non-dwelling bathrooms, kitchens, rooftops, outdoor areas, sinks within 6 ft, garages/service bays, laundry areas, and more.",
   "ref": "210.8(B)"
  },
  {
   "id": "p25",
   "category": "protection",
   "question": "Under the 25-ft feeder tap rule (240.21(B)(2)), the ampacity of the tap conductors shall not be less than ____ of the rating of the overcurrent device protecting the feeder conductors.",
   "options": [
    "One-tenth",
    "One-third",
    "One-half",
    "Equal to"
   ],
   "correct": 1,
   "explanation": "25-ft taps: ampacity ≥ ⅓ of the feeder OCPD rating, length ≤25 ft, terminated in a single breaker/fuse set that limits the load to the tap ampacity.",
   "ref": "240.21(B)(2)"
  },
  {
   "id": "p26",
   "category": "protection",
   "question": "Per 240.24(F), overcurrent devices shall not be located:",
   "options": [
    "In a garage",
    "Over the steps of a stairway",
    "In a basement",
    "Next to the service disconnect"
   ],
   "correct": 1,
   "explanation": "Working on a breaker while standing on steps is the hazard 240.24(F) eliminates — panels over stairway steps are prohibited.",
   "ref": "240.24(F)"
  },
  {
   "id": "p27",
   "category": "protection",
   "question": "Per 210.4(C), multiwire branch circuits shall supply only:",
   "options": [
    "Motor loads",
    "Line-to-neutral loads, unless an exception in 210.4(C) applies",
    "240V loads only",
    "Outdoor loads"
   ],
   "correct": 1,
   "explanation": "The shared-neutral circuit is restricted to line-to-neutral loads (with narrow exceptions, e.g., a single piece of utilization equipment).",
   "ref": "210.4(C)"
  },
  {
   "id": "p28",
   "category": "protection",
   "question": "Where a branch circuit also supplies lighting or cord-and-plug equipment, utilization equipment fastened in place on that circuit shall not exceed ____ of the branch-circuit ampere rating.",
   "options": [
    "40%",
    "50%",
    "75%",
    "80%"
   ],
   "correct": 1,
   "explanation": "210.23(A)(2): fastened-in-place equipment is capped at 50% of the circuit rating when the circuit also feeds lighting or portable loads.",
   "ref": "210.23(A)(2)"
  },
  {
   "id": "p29",
   "category": "protection",
   "question": "The required laundry branch circuit in a dwelling (210.11(C)(2)) must be rated ____ and shall have:",
   "options": [
    "15A, shared with bathrooms",
    "20A, with no other outlets",
    "20A, shared with the kitchen",
    "30A, for the dryer only"
   ],
   "correct": 1,
   "explanation": "At least one 20A laundry branch circuit, serving only laundry receptacle outlet(s) — the dryer itself is a separate 240V circuit.",
   "ref": "210.11(C)(2)"
  },
  {
   "id": "p3",
   "category": "protection",
   "question": "Dwelling wall receptacles must be installed so no point along the floor line of any usable wall space is more than ____ from a receptacle.",
   "options": [
    "4 ft",
    "6 ft",
    "8 ft",
    "12 ft"
   ],
   "correct": 1,
   "explanation": "210.52(A)(1): maximum 6 ft from a receptacle; wall spaces 2 ft or wider require one.",
   "ref": "210.52(A)"
  },
  {
   "id": "p30",
   "category": "protection",
   "question": "Per 210.70(A)(1), each habitable room and bathroom of a dwelling requires at least:",
   "options": [
    "One receptacle per wall",
    "One wall switch-controlled lighting outlet",
    "One ceiling fan-rated box",
    "Two GFCI receptacles"
   ],
   "correct": 1,
   "explanation": "210.70(A)(1): at least one wall switch-controlled lighting outlet in every habitable room and bathroom (with limited exceptions for a switched receptacle in rooms other than kitchens/bathrooms).",
   "ref": "210.70(A)(1)"
  },
  {
   "id": "p4",
   "category": "protection",
   "question": "A bathroom receptacle circuit in a dwelling must be:",
   "options": [
    "15A serving bath and bedrooms",
    "20A serving only bathroom receptacle outlets (with a listed exception for other equipment in the same bathroom)",
    "Shared with the laundry circuit",
    "GFCI protected only if within 3 ft of a sink"
   ],
   "correct": 1,
   "explanation": "210.11(C)(3): a 20A circuit supplies bathroom receptacle outlets only (with a narrow exception where it supplies a single bathroom).",
   "ref": "210.11(C)(3)"
  },
  {
   "id": "p5",
   "category": "protection",
   "question": "GFCI protection is required for dwelling receptacles in all of these locations EXCEPT:",
   "options": [
    "Garage",
    "Unfinished basement",
    "Laundry area",
    "Bedroom (as the GFCI rule itself — AFCI rules are separate)"
   ],
   "correct": 3,
   "explanation": "210.8(A) lists bathrooms, garages, outdoors, crawl spaces, basements, kitchen counters, sinks, laundry, etc. Bedrooms require AFCI per 210.12, not GFCI by 210.8.",
   "ref": "210.8(A)"
  },
  {
   "id": "p6",
   "category": "protection",
   "question": "A 16A continuous load on a branch circuit requires a minimum circuit rating of:",
   "options": [
    "16A",
    "18A",
    "20A",
    "25A"
   ],
   "correct": 2,
   "explanation": "210.19(A)(1): continuous loads size conductors/OCPD at 125%: 16 × 1.25 = 20A.",
   "ref": "210.19(A)(1)"
  },
  {
   "id": "p7",
   "category": "protection",
   "question": "Overcurrent devices (service or feeder) shall NOT be located in which space of a dwelling unit?",
   "options": [
    "Garage",
    "Basement",
    "Bathroom",
    "Laundry room"
   ],
   "correct": 2,
   "explanation": "240.24(E): in dwelling units, overcurrent devices other than supplementary protectors must not be located in bathrooms.",
   "ref": "240.24(E)"
  },
  {
   "id": "p8",
   "category": "protection",
   "question": "A multiwire branch circuit must have a means to:",
   "options": [
    "Balance the loads automatically",
    "Simultaneously disconnect all ungrounded conductors at the panel",
    "Use a shared breaker tie only outdoors",
    "Be identified at each receptacle only"
   ],
   "correct": 1,
   "explanation": "210.4(B): a device (e.g., handle-tied or multipole breaker) must simultaneously disconnect all ungrounded conductors.",
   "ref": "210.4(B)"
  },
  {
   "id": "p9",
   "category": "protection",
   "question": "AFCI protection in the 2017 NEC is required for 120V, single-phase, 15A and 20A branch circuits supplying outlets or devices in dwelling:",
   "options": [
    "Bathrooms only",
    "Garages only",
    "Kitchens, family rooms, bedrooms, living rooms, laundry areas and similar rooms",
    "Unfinished basements only"
   ],
   "correct": 2,
   "explanation": "210.12(A) (2017) expanded AFCI coverage to most living areas of a dwelling.",
   "ref": "210.12(A)"
  },
  {
   "id": "s1",
   "category": "services",
   "question": "The maximum number of service disconnecting means grouped at one location for a single service is:",
   "options": [
    "2",
    "4",
    "6",
    "8"
   ],
   "correct": 2,
   "explanation": "230.71: not more than six switches or sets of circuit breakers grouped at one location.",
   "ref": "230.71"
  },
  {
   "id": "s10",
   "category": "services",
   "question": "Four or more fastened-in-place appliances (not including ranges, dryers, AC, or space heating) on a dwelling service may be calculated at:",
   "options": [
    "100% of nameplate",
    "75% demand factor",
    "50% demand factor",
    "They are excluded"
   ],
   "correct": 1,
   "explanation": "220.53 permits a 75% demand factor for four or more such appliances.",
   "ref": "220.53"
  },
  {
   "id": "s11",
   "category": "services",
   "question": "Where heating and air conditioning loads are noncoincident, the service calculation uses:",
   "options": [
    "Both loads added together",
    "The smaller load",
    "The larger load at 100%",
    "125% of both"
   ],
   "correct": 2,
   "explanation": "220.60: noncoincident loads — only the largest is used, since they won't run simultaneously.",
   "ref": "220.60"
  },
  {
   "id": "s12",
   "category": "services",
   "question": "Service disconnecting means shall be installed:",
   "options": [
    "Anywhere in the building",
    "Nearest the point of entrance of the service conductors",
    "Only at the meter base",
    "In the attic if accessible"
   ],
   "correct": 1,
   "explanation": "230.70(A)(1): the disconnect must be in a readily accessible location nearest the point of entrance.",
   "ref": "230.70(A)(1)"
  },
  {
   "id": "s13",
   "category": "services",
   "question": "Per 230.79(D), the minimum rating of a service disconnecting means for loads other than one-family dwellings and the small loads in 230.79(A)–(B) is:",
   "options": [
    "30A",
    "40A",
    "60A",
    "100A"
   ],
   "correct": 2,
   "explanation": "230.79: one circuit = 15A, two circuits = 30A, one-family dwelling = 100A 3-wire, all other loads = 60A minimum.",
   "ref": "230.79(D)"
  },
  {
   "id": "s14",
   "category": "services",
   "question": "Open overhead service conductors must maintain a vertical clearance above a roof surface of at least:",
   "options": [
    "3 ft in all cases",
    "8 ft (with limited exceptions, e.g., 3 ft for sloped roofs under the conditions of 230.24(A))",
    "10 ft",
    "12 ft"
   ],
   "correct": 1,
   "explanation": "230.24(A): 8 ft above the roof surface, extending 3 ft horizontally from the edge — the reduced 3 ft clearance is an exception, not the rule.",
   "ref": "230.24(A)"
  },
  {
   "id": "s15",
   "category": "services",
   "question": "Service drop conductors shall not be installed within ____ of doors, porches, balconies, stairs, fire escapes, or windows that are designed to be opened.",
   "options": [
    "1 ft",
    "2 ft",
    "3 ft",
    "6 ft"
   ],
   "correct": 2,
   "explanation": "230.9(A): overhead service conductors must be kept at least 3 ft from those building features so they are not readily accessible.",
   "ref": "230.9(A)"
  },
  {
   "id": "s16",
   "category": "services",
   "question": "Receptacle outlets in other than dwelling units are calculated at not less than ____ per receptacle strap (yoke).",
   "options": [
    "100 VA",
    "120 VA",
    "180 VA",
    "200 VA"
   ],
   "correct": 2,
   "explanation": "220.14(I): each receptacle outlet counts 180 VA per strap in non-dwelling load calculations (dwelling receptacles are inside the general lighting load).",
   "ref": "220.14(I)"
  },
  {
   "id": "s17",
   "category": "services",
   "question": "Show window lighting load is calculated at not less than ____ per linear foot of show window.",
   "options": [
    "100 VA",
    "150 VA",
    "200 VA",
    "300 VA"
   ],
   "correct": 2,
   "explanation": "220.14(G): show windows are calculated at 200 VA per linear foot, measured horizontally along the window base.",
   "ref": "220.14(G)"
  },
  {
   "id": "s18",
   "category": "services",
   "question": "Per Table 220.12, the unit lighting load for an office building is:",
   "options": [
    "2 VA per sq ft",
    "3 VA per sq ft",
    "3½ VA per sq ft",
    "5 VA per sq ft"
   ],
   "correct": 2,
   "explanation": "Table 220.12: office buildings are 3½ VA/sq ft (dwellings are 3, schools 3, warehouses ¼).",
   "ref": "Table 220.12"
  },
  {
   "id": "s19",
   "category": "services",
   "question": "Five household electric clothes dryers on one feeder are subject to a demand factor per Table 220.54 of:",
   "options": [
    "100%",
    "85%",
    "75%",
    "65%"
   ],
   "correct": 1,
   "explanation": "Table 220.54: 1–4 dryers at 100%, 5 dryers at 85%, then decreasing as the count grows.",
   "ref": "Table 220.54"
  },
  {
   "id": "s2",
   "category": "services",
   "question": "The minimum size service for a one-family dwelling is:",
   "options": [
    "60A",
    "100A, 3-wire",
    "125A",
    "200A"
   ],
   "correct": 1,
   "explanation": "230.79(C): one-family dwellings require a service of at least 100A, 3-wire.",
   "ref": "230.79(C)"
  },
  {
   "id": "s20",
   "category": "services",
   "question": "Two household ranges, each rated not over 12 kW, have a combined demand load per Table 220.55, Column C of:",
   "options": [
    "8 kW",
    "11 kW",
    "14 kW",
    "16 kW"
   ],
   "correct": 1,
   "explanation": "Table 220.55 Column C: 1 range = 8 kW, 2 ranges = 11 kW, 3 = 14 kW — each additional range adds 3 kW in this range of the table.",
   "ref": "Table 220.55"
  },
  {
   "id": "s21",
   "category": "services",
   "question": "A single household range rated 16 kW has a demand load per Table 220.55 (Column C and Note 1) of:",
   "options": [
    "8 kW",
    "9.6 kW",
    "12.8 kW",
    "16 kW"
   ],
   "correct": 1,
   "explanation": "Note 1: for ranges over 12 kW, increase the Column C demand (8 kW) by 5% for each kW over 12: 4 extra kW = +20% → 8 × 1.20 = 9.6 kW.",
   "ref": "Table 220.55, Note 1"
  },
  {
   "id": "s22",
   "category": "services",
   "question": "Per 220.61, the portion of a feeder neutral (unbalanced) load for household ranges and dryers that exceeds ____ may be multiplied by a 70% demand factor.",
   "options": [
    "100A",
    "150A",
    "200A",
    "300A"
   ],
   "correct": 2,
   "explanation": "220.61(B)(2): the portion of the unbalanced load attributable to ranges/dryers in excess of 200A may be taken at 70%.",
   "ref": "220.61(B)"
  },
  {
   "id": "s23",
   "category": "services",
   "question": "Per 215.3, a feeder overcurrent device supplying continuous and noncontinuous loads shall have a rating not less than:",
   "options": [
    "100% of the total load",
    "The noncontinuous load plus 125% of the continuous load",
    "125% of the noncontinuous load plus the continuous load",
    "80% of the conductor ampacity"
   ],
   "correct": 1,
   "explanation": "215.3 mirrors 210.20(A) for feeders: noncontinuous at 100% + continuous at 125%.",
   "ref": "215.3"
  },
  {
   "id": "s24",
   "category": "services",
   "question": "When motors are included in a feeder load calculation, 220.50 requires adding ____ of the largest motor load (per 430.24).",
   "options": [
    "10%",
    "25%",
    "50%",
    "125%"
   ],
   "correct": 1,
   "explanation": "The feeder calculation takes 100% of all motor FLCs plus an extra 25% of the largest one, accounting for starting and diversity.",
   "ref": "220.50 / 430.24"
  },
  {
   "id": "s25",
   "category": "services",
   "question": "A dwelling's general load (lighting + small-appliance + laundry) totals 12,000 VA connected. After applying Table 220.42 demand factors, the calculated load is:",
   "options": [
    "12,000 VA",
    "9,000 VA",
    "6,150 VA",
    "4,200 VA"
   ],
   "correct": 2,
   "explanation": "First 3,000 VA at 100% = 3,000; remaining 9,000 VA at 35% = 3,150; total 6,150 VA.",
   "ref": "Table 220.42"
  },
  {
   "id": "s26",
   "category": "services",
   "question": "A 2,400 sq ft dwelling has two small-appliance circuits and one laundry circuit. Its general calculated load after Table 220.42 demand factors (before appliances, dryer, range, and HVAC) is:",
   "options": [
    "7,200 VA",
    "11,700 VA",
    "6,045 VA",
    "5,100 VA"
   ],
   "correct": 2,
   "explanation": "Lighting 2,400 × 3 = 7,200 VA; + 3,000 small-appliance + 1,500 laundry = 11,700 VA connected. Demand: 3,000 at 100% + 8,700 at 35% (3,045) = 6,045 VA.",
   "ref": "220.42 / 220.52"
  },
  {
   "id": "s27",
   "category": "services",
   "question": "The optional method of dwelling load calculation (220.82) may be used only where the service or feeder has an ampacity of at least:",
   "options": [
    "60A",
    "100A",
    "150A",
    "200A"
   ],
   "correct": 1,
   "explanation": "220.82(A): the optional method applies to a dwelling served by a single service/feeder rated 100A or greater, 120/240V or 120/208V.",
   "ref": "220.82(A)"
  },
  {
   "id": "s28",
   "category": "services",
   "question": "Six pieces of commercial kitchen equipment on one feeder qualify for a demand factor per Table 220.56 of:",
   "options": [
    "100%",
    "80%",
    "70%",
    "65%"
   ],
   "correct": 3,
   "explanation": "Table 220.56: 1–2 units 100%, 3 units 90%, 4 units 80%, 5 units 70%, 6 or more units 65%.",
   "ref": "Table 220.56"
  },
  {
   "id": "s29",
   "category": "services",
   "question": "Per 230.2, a building or structure is permitted a second service under which of the following conditions?",
   "options": [
    "The owner prefers separate billing for a workshop",
    "A fire pump is installed (or other conditions in 230.2(A)–(D), such as capacity over 2,000A)",
    "The building has two tenants",
    "The first service is underground"
   ],
   "correct": 1,
   "explanation": "One service is the rule; additional services are permitted only for fire pumps/emergency systems, very large capacity, different voltages/uses, or documented utility limitations.",
   "ref": "230.2"
  },
  {
   "id": "s3",
   "category": "services",
   "question": "The general lighting load for a dwelling is calculated at:",
   "options": [
    "1 VA per sq ft",
    "2 VA per sq ft",
    "3 VA per sq ft",
    "5 VA per sq ft"
   ],
   "correct": 2,
   "explanation": "Table 220.12: dwelling units are calculated at 3 VA per square foot.",
   "ref": "Table 220.12"
  },
  {
   "id": "s30",
   "category": "services",
   "question": "Per 110.24, services (other than in dwelling units) shall be legibly marked in the field with the:",
   "options": [
    "Date of installation",
    "Maximum available fault current, including the date the calculation was performed",
    "Name of the installing contractor",
    "Utility account number"
   ],
   "correct": 1,
   "explanation": "110.24(A): non-dwelling service equipment must be field-marked with the maximum available fault current and the calculation date.",
   "ref": "110.24"
  },
  {
   "id": "s31",
   "category": "services",
   "question": "Per 220.14(J), general-purpose receptacle outlets in a dwelling unit:",
   "options": [
    "Are calculated at 180 VA each",
    "Are included in the general lighting load calculation and require no additional load calculation",
    "Must be added at 1,500 VA per room",
    "Are excluded from the service entirely"
   ],
   "correct": 1,
   "explanation": "Unlike commercial work, dwelling receptacles ride inside the 3 VA/sq ft general lighting load — no per-receptacle adder.",
   "ref": "220.14(J)"
  },
  {
   "id": "s32",
   "category": "services",
   "question": "Per 230.79(B), the minimum rating of a service disconnecting means supplying two branch circuits is:",
   "options": [
    "15A",
    "30A",
    "60A",
    "100A"
   ],
   "correct": 1,
   "explanation": "230.79(A)–(B): a one-circuit service may be 15A; a two-circuit service must be at least 30A.",
   "ref": "230.79(B)"
  },
  {
   "id": "s33",
   "category": "services",
   "question": "For non-dwelling receptacle loads, Table 220.44 permits the first 10 kVA of receptacle load to be taken at 100% and the remainder at:",
   "options": [
    "35%",
    "50%",
    "65%",
    "80%"
   ],
   "correct": 1,
   "explanation": "Table 220.44: receptacle loads (other than continuous) — first 10 kVA or less at 100%, remainder at 50%.",
   "ref": "Table 220.44"
  },
  {
   "id": "s34",
   "category": "services",
   "question": "Per 230.70(B), each service disconnecting means shall be:",
   "options": [
    "Painted red",
    "Permanently marked to identify it as a service disconnecting means",
    "Locked at all times",
    "Installed only outdoors"
   ],
   "correct": 1,
   "explanation": "Every service disconnect must be permanently marked as such — critical where the six-disconnect rule puts several switches at one location.",
   "ref": "230.70(B)"
  },
  {
   "id": "s35",
   "category": "services",
   "question": "Where a service mast is used to support service-drop conductors, 230.28 requires that it be:",
   "options": [
    "Made of PVC in all cases",
    "Of adequate strength, or supported by braces or guy wires, to withstand the strain of the service drop",
    "No taller than the meter socket",
    "Bonded with a #12 conductor"
   ],
   "correct": 1,
   "explanation": "The mast is a structural support, not just a raceway — it must handle the mechanical strain imposed by the drop.",
   "ref": "230.28"
  },
  {
   "id": "s36",
   "category": "services",
   "question": "For a household electric range with a demand load of 8 kW per Table 220.55, the load on the grounded (neutral) conductor may be calculated at ____ of the ungrounded-conductor load.",
   "options": [
    "50%",
    "70%",
    "80%",
    "100%"
   ],
   "correct": 1,
   "explanation": "220.61(B)(1): the neutral load for household ranges (and dryers) may be taken at 70% of the load on the ungrounded conductors: 8 kW × 70% = 5.6 kW here.",
   "ref": "220.61(B)(1)"
  },
  {
   "id": "s37",
   "category": "services",
   "question": "Per 230.95, ground-fault protection of equipment is required for solidly grounded wye services of more than 150V to ground where the service disconnecting means is rated:",
   "options": [
    "100A or more",
    "400A or more",
    "1,000A or more",
    "Any rating in a dwelling"
   ],
   "correct": 2,
   "explanation": "230.95: GFP is required on 277/480V-class wye services (≤1,000V phase-to-phase, >150V to ground) with disconnects rated 1,000A or more.",
   "ref": "230.95"
  },
  {
   "id": "s38",
   "category": "services",
   "question": "Per Table 310.15(B)(7), the minimum copper service-entrance conductors for a 100A one-family dwelling service are:",
   "options": [
    "#6 AWG",
    "#4 AWG",
    "#2 AWG",
    "1/0 AWG"
   ],
   "correct": 1,
   "explanation": "Table 310.15(B)(7) (2017): 100A dwelling service/feeder carrying the entire dwelling load → #4 copper or #2 aluminum.",
   "ref": "Table 310.15(B)(7)"
  },
  {
   "id": "s39",
   "category": "services",
   "question": "Per Table 310.15(B)(7), the minimum copper service-entrance conductors for a 200A one-family dwelling service are:",
   "options": [
    "#2 AWG",
    "1/0 AWG",
    "2/0 AWG",
    "3/0 AWG"
   ],
   "correct": 2,
   "explanation": "Table 310.15(B)(7): 200A dwelling service → 2/0 copper or 4/0 aluminum, provided the conductors carry the entire dwelling load.",
   "ref": "Table 310.15(B)(7)"
  },
  {
   "id": "s4",
   "category": "services",
   "question": "Each small-appliance branch circuit and the laundry circuit are each calculated at:",
   "options": [
    "1,000 VA",
    "1,200 VA",
    "1,500 VA",
    "1,800 VA"
   ],
   "correct": 2,
   "explanation": "220.52(A) and (B): 1,500 VA for each small-appliance circuit and 1,500 VA for the laundry circuit.",
   "ref": "220.52"
  },
  {
   "id": "s40",
   "category": "services",
   "question": "Per Table 310.15(B)(7), the minimum aluminum service-entrance conductors for a 150A one-family dwelling service are:",
   "options": [
    "1/0 AWG",
    "2/0 AWG",
    "3/0 AWG",
    "4/0 AWG"
   ],
   "correct": 1,
   "explanation": "Table 310.15(B)(7): 150A dwelling service → #1 copper or 2/0 aluminum.",
   "ref": "Table 310.15(B)(7)"
  },
  {
   "id": "s5",
   "category": "services",
   "question": "Under Table 220.42 dwelling demand factors, the first 3,000 VA of general load is taken at ____ and the remainder (to 120,000 VA) at ____.",
   "options": [
    "100% / 25%",
    "100% / 35%",
    "90% / 35%",
    "100% / 40%"
   ],
   "correct": 1,
   "explanation": "Table 220.42: first 3,000 VA at 100%, 3,001–120,000 VA at 35%.",
   "ref": "Table 220.42"
  },
  {
   "id": "s6",
   "category": "services",
   "question": "A household electric clothes dryer is calculated at a minimum of:",
   "options": [
    "3,000 VA",
    "4,000 VA",
    "5,000 VA or nameplate rating, whichever is larger",
    "Nameplate only"
   ],
   "correct": 2,
   "explanation": "220.54: dryer load is 5,000 VA or the nameplate rating, whichever is larger.",
   "ref": "220.54"
  },
  {
   "id": "s7",
   "category": "services",
   "question": "A single 12 kW household range has a demand load per Table 220.55 of:",
   "options": [
    "12 kW",
    "10 kW",
    "9.6 kW",
    "8 kW"
   ],
   "correct": 3,
   "explanation": "Table 220.55, Column C: one range not over 12 kW has a maximum demand of 8 kW.",
   "ref": "Table 220.55"
  },
  {
   "id": "s8",
   "category": "services",
   "question": "Overhead service conductors must maintain a vertical clearance above a residential driveway of at least:",
   "options": [
    "8 ft",
    "10 ft",
    "12 ft",
    "18 ft"
   ],
   "correct": 2,
   "explanation": "230.24(B): 12 ft over residential property and driveways (18 ft applies over public streets).",
   "ref": "230.24(B)"
  },
  {
   "id": "s9",
   "category": "services",
   "question": "A 1,800 sq ft dwelling: the general lighting load is:",
   "options": [
    "3,600 VA",
    "4,500 VA",
    "5,400 VA",
    "6,000 VA"
   ],
   "correct": 2,
   "explanation": "1,800 × 3 VA = 5,400 VA before small-appliance and laundry additions.",
   "ref": "Table 220.12"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "The LLE is the limited license for projects under $25,000; larger work requires a full contractor (CE) license.",
   "id": "t1",
   "options": [
    "Under $10,000",
    "Under $25,000",
    "Under $50,000",
    "Any value, for residential only"
   ],
   "question": "The Tennessee Limited Licensed Electrician (LLE) license authorizes electrical work on projects valued at:",
   "ref": "TN Board for Licensing Contractors — LLE"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Per the Prov candidate bulletin: 40 questions, 2 hours, open book, 73% (30/40) to pass.",
   "id": "t2",
   "options": [
    "25 questions, 1 hour, closed book",
    "40 questions, 2 hours, open book, 73% passing",
    "50 questions, 3 hours, closed book",
    "100 questions, 4 hours, open book"
   ],
   "question": "The LLE exam as administered by Prov consists of:",
   "ref": "Prov Candidate Bulletin — LLE"
  },
  {
   "category": "state",
   "correct": 2,
   "explanation": "Prov's LLE list is exactly three references. NFPA 70E appeared in older PSI-era bundles but is not on Prov's LLE list.",
   "id": "t3",
   "options": [
    "NFPA 70, NEC 2017 edition",
    "Ugly's Electrical References, 2020 edition",
    "NFPA 70E (any edition) as a fourth book",
    "OSHA 29 CFR Part 1926 (Mancomm)"
   ],
   "question": "Which reference is NOT on the Prov permitted list for the LLE exam?",
   "ref": "Prov Candidate Bulletin §5.15 — LLE references"
  },
  {
   "category": "state",
   "correct": 2,
   "explanation": "Tabs and highlighting are permitted; handwritten notes are not and books are inspected at check-in.",
   "id": "t4",
   "options": [
    "Permanent tabs you installed",
    "Highlighting in the text",
    "Handwritten notes in the margins",
    "A tabbed index"
   ],
   "question": "At Prov check-in, which condition of your reference books will cause a problem?",
   "ref": "Prov Candidate Bulletin — exam rules"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Roughly 28 exempt jurisdictions license locally; the state LLE does not substitute there.",
   "id": "t5",
   "options": [
    "Putnam County",
    "Exempt jurisdictions that run their own electrical licensing (e.g., Nashville, Knoxville, Memphis)",
    "Rural unincorporated areas",
    "White County"
   ],
   "question": "The LLE is NOT accepted in:",
   "ref": "TN Board for Licensing Contractors — exempt jurisdictions"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Prov still grades the LLE on the 2017 NEC — bringing a 2023 book misaligns section numbers and tables.",
   "id": "t6",
   "options": [
    "2014",
    "2017",
    "2020",
    "2023"
   ],
   "question": "Which NEC edition does the current Prov LLE exam test?",
   "ref": "Prov Candidate Bulletin — LLE references"
  },
  {
   "category": "state",
   "correct": 2,
   "explanation": "73% of 40 = 29.2, and Prov's passing standard works out to 30 correct answers out of 40.",
   "id": "t7",
   "options": [
    "28",
    "29",
    "30",
    "32"
   ],
   "question": "To pass the LLE exam (73% of 40 questions), the minimum number of correct answers is:",
   "ref": "Prov Candidate Bulletin — scoring"
  },
  {
   "category": "state",
   "correct": 2,
   "explanation": "The LLE has no experience prerequisite and no pre-approval; you register with Prov and test.",
   "id": "t8",
   "options": [
    "Complete 4 years of apprenticeship",
    "Obtain pre-approval from the Board with proof of experience",
    "Nothing beyond registering — no experience requirement or pre-approval applies",
    "Hold a journeyman license"
   ],
   "question": "Before taking the LLE exam, an applicant must first:",
   "ref": "Prov Candidate Bulletin / TN LLE eligibility"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Prov charges $53 per attempt — budgeting for a possible retake means budgeting the fee (and study time) twice.",
   "id": "t9",
   "options": [
    "$25",
    "$53 per attempt",
    "$100",
    "$250, paid to the Board with the license application"
   ],
   "question": "The fee to take the Prov LLE exam is:",
   "ref": "Prov Candidate Bulletin — LLE fees"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Murfreesboro and Tullahoma are the closest centers for Middle Tennessee candidates east of Nashville, and Prov also offers remote proctoring.",
   "id": "t10",
   "options": [
    "Nashville and Chattanooga",
    "Murfreesboro and Tullahoma — or remote proctoring from home",
    "Knoxville and Memphis",
    "There are no Tennessee centers; testing is Georgia-only"
   ],
   "question": "For a candidate in the Cookeville/Crossville area, the nearest Prov test centers for the LLE exam are:",
   "ref": "Prov test center list"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Exactly three books. 70E was part of an older PSI-era bundle and is not on Prov's LLE list — it would not be allowed in the room.",
   "id": "t11",
   "options": [
    "NEC 2023 and Ugly's 2023",
    "NEC 2017, Ugly's Electrical References 2020, and OSHA 29 CFR 1926 — and no others",
    "NEC 2017 plus any study guide the candidate chooses",
    "NEC 2017, Ugly's 2020, OSHA 1926, and NFPA 70E"
   ],
   "question": "Which set of references is the COMPLETE approved open-book list for the Prov LLE exam?",
   "ref": "Prov Candidate Bulletin §5.15 — LLE references"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "The LLE covers projects UNDER $25,000. At or above the line, the job belongs to a CE-licensed contractor — no waiver changes that.",
   "id": "t12",
   "options": [
    "May take it — the limit is $25,000 or less",
    "May not take it on the LLE — work at or above $25,000 requires a full electrical contractor (CE) license",
    "May take it if the customer signs a waiver",
    "May take it if the work is residential"
   ],
   "question": "An LLE licensee is offered an electrical job priced at $25,000 exactly. Under the LLE project limit, the licensee:",
   "ref": "TN Board for Licensing Contractors — LLE scope"
  },
  {
   "category": "state",
   "correct": 1,
   "explanation": "Each attempt is its own registration and $53 fee, and there is still no pre-approval step — diagnose the weak categories, drill them here, and retest.",
   "id": "t13",
   "options": [
    "A free retake within 30 days",
    "To register again and pay the exam fee again — the fee is charged per attempt",
    "A one-year waiting period",
    "To re-apply for Board pre-approval"
   ],
   "question": "A candidate who fails the LLE exam and schedules a retake should expect:",
   "ref": "Prov Candidate Bulletin — fees & retakes"
  },
  {
   "category": "state",
   "correct": 2,
   "explanation": "Only the three approved references enter the room. Study guides, loose notes, and practice materials stay outside — that's why this course keys everything to the books themselves.",
   "id": "t14",
   "options": [
    "Your NEC 2017 with permanent tabs",
    "Your Ugly's 2020 with highlighted pages",
    "A binder of printed study notes and practice questions",
    "Your OSHA 1926 (Mancomm) book"
   ],
   "question": "Which item will Prov NOT allow into the LLE testing room?",
   "ref": "Prov Candidate Bulletin — exam rules"
  },
  {
   "category": "state",
   "correct": 2,
   "explanation": "120 minutes ÷ 40 questions = 3 minutes each. Bank time on fast definition questions to spend it on load-calc and lookup questions.",
   "id": "t15",
   "options": [
    "1 minute",
    "2 minutes",
    "3 minutes",
    "5 minutes"
   ],
   "question": "With 40 questions and a 2-hour time limit, the average time budget per question on the LLE exam is:",
   "ref": "Prov Candidate Bulletin — LLE format"
  },
  {
   "id": "w1",
   "category": "wiring",
   "question": "Per Table 300.5, the minimum burial depth for a PVC conduit run in a general location is:",
   "options": [
    "6 in.",
    "12 in.",
    "18 in.",
    "24 in."
   ],
   "correct": 2,
   "explanation": "Table 300.5, Column 3: nonmetallic raceways listed for direct burial require 18 in. of cover.",
   "ref": "Table 300.5"
  },
  {
   "id": "w10",
   "category": "wiring",
   "question": "Conductors must not be installed in a raceway until:",
   "options": [
    "The devices are trimmed out",
    "The raceway system is complete between pull points",
    "The insulation test is scheduled",
    "The service is energized"
   ],
   "correct": 1,
   "explanation": "300.18(A): raceways must be installed complete between boxes/pull points before conductors are installed.",
   "ref": "300.18(A)"
  },
  {
   "id": "w11",
   "category": "wiring",
   "question": "FMC (flexible metal conduit) must be secured within ____ of each box and supported at intervals not exceeding ____.",
   "options": [
    "3 ft / 10 ft",
    "12 in. / 4½ ft",
    "8 in. / 6 ft",
    "18 in. / 10 ft"
   ],
   "correct": 1,
   "explanation": "348.30(A): FMC secured within 12 in. of boxes/fittings and supported every 4½ ft.",
   "ref": "348.30(A)"
  },
  {
   "id": "w12",
   "category": "wiring",
   "question": "The minimum bending radius for Type NM cable is:",
   "options": [
    "3 times the cable diameter",
    "5 times the cable diameter",
    "7 times the cable diameter",
    "10 times the cable diameter"
   ],
   "correct": 1,
   "explanation": "334.24: radius of the inner edge of the bend not less than five times the cable diameter.",
   "ref": "334.24"
  },
  {
   "id": "w13",
   "category": "wiring",
   "question": "Underground service or feeder conductors emerging from grade must be protected by enclosures or raceways from the required burial depth to at least ____ above finished grade.",
   "options": [
    "4 ft",
    "6 ft",
    "8 ft",
    "10 ft"
   ],
   "correct": 2,
   "explanation": "300.5(D)(1): protection extends from minimum cover depth below grade to a point at least 8 ft above finished grade.",
   "ref": "300.5(D)(1)"
  },
  {
   "id": "w14",
   "category": "wiring",
   "question": "A warning ribbon for underground service conductors that are not encased in concrete must be placed at least ____ above the installation.",
   "options": [
    "6 in.",
    "12 in.",
    "18 in.",
    "24 in."
   ],
   "correct": 1,
   "explanation": "300.5(D)(3): the ribbon sits at least 12 in. above the underground conductors so an excavator hits the warning first.",
   "ref": "300.5(D)(3)"
  },
  {
   "id": "w15",
   "category": "wiring",
   "question": "Per Table 300.5, wiring installed under a building must be:",
   "options": [
    "Direct-buried cable at 12 in.",
    "In a raceway, with 0 in. of cover required",
    "Encased in 4 in. of concrete",
    "Prohibited in all cases"
   ],
   "correct": 1,
   "explanation": "Table 300.5, 'Under a building' row: raceway only, 0 in. minimum cover.",
   "ref": "Table 300.5"
  },
  {
   "id": "w16",
   "category": "wiring",
   "question": "Cables run parallel to framing members (in the side of a stud or joist) must be installed so the nearest edge of the cable is at least ____ from the nearest edge of the framing member, unless protected.",
   "options": [
    "½ in.",
    "1 in.",
    "1¼ in.",
    "2 in."
   ],
   "correct": 2,
   "explanation": "300.4(D) applies the same 1¼-in. setback to parallel runs as 300.4(A) applies to bored holes — or use a steel plate.",
   "ref": "300.4(D)"
  },
  {
   "id": "w17",
   "category": "wiring",
   "question": "Type MC cable must be supported and secured within ____ of every box and at intervals not exceeding ____.",
   "options": [
    "12 in. / 6 ft",
    "12 in. / 4½ ft",
    "3 ft / 10 ft",
    "8 in. / 4½ ft"
   ],
   "correct": 0,
   "explanation": "330.30: MC is secured within 12 in. of boxes/fittings and supported at intervals not exceeding 6 ft — one step looser than NM's 4½ ft.",
   "ref": "330.30"
  },
  {
   "id": "w18",
   "category": "wiring",
   "question": "Type AC (armored) cable must be secured within ____ of every outlet box and supported at intervals not exceeding ____.",
   "options": [
    "3 ft / 10 ft",
    "12 in. / 6 ft",
    "12 in. / 4½ ft",
    "24 in. / 6 ft"
   ],
   "correct": 2,
   "explanation": "320.30: AC cable matches the NM pattern — 12 in. from boxes, every 4½ ft.",
   "ref": "320.30"
  },
  {
   "id": "w19",
   "category": "wiring",
   "question": "Per Table 352.44, 2-in. PVC conduit must be supported at intervals not exceeding:",
   "options": [
    "3 ft",
    "5 ft",
    "6 ft",
    "8 ft"
   ],
   "correct": 1,
   "explanation": "Table 352.44: ½–1 in. PVC every 3 ft; 1¼–2 in. every 5 ft; 2½–3 in. every 6 ft; 3½–5 in. every 7 ft; 6 in. every 8 ft.",
   "ref": "Table 352.44"
  },
  {
   "id": "w2",
   "category": "wiring",
   "question": "A 120V residential branch circuit, GFCI protected, with overcurrent protection not over 20A, may be direct-buried with minimum cover of:",
   "options": [
    "6 in.",
    "12 in.",
    "18 in.",
    "24 in."
   ],
   "correct": 1,
   "explanation": "Table 300.5, Column 4 permits 12 in. for residential branch circuits 120V or less with GFCI protection and max 20A overcurrent protection.",
   "ref": "Table 300.5"
  },
  {
   "id": "w20",
   "category": "wiring",
   "question": "Expansion fittings for PVC conduit are required where the expected thermal length change is at least:",
   "options": [
    "⅛ in.",
    "¼ in.",
    "½ in.",
    "1 in."
   ],
   "correct": 1,
   "explanation": "352.44: expansion fittings are required when expected length change reaches ¼ in. or more (PVC moves a lot with temperature).",
   "ref": "352.44"
  },
  {
   "id": "w21",
   "category": "wiring",
   "question": "Per Table 310.15(B)(16), the ampacity of a #8 AWG copper conductor from the 75°C column is:",
   "options": [
    "40A",
    "50A",
    "55A",
    "65A"
   ],
   "correct": 1,
   "explanation": "#8 copper: 40A at 60°C, 50A at 75°C, 55A at 90°C — the column question determines the answer.",
   "ref": "Table 310.15(B)(16)"
  },
  {
   "id": "w22",
   "category": "wiring",
   "question": "A Type THWN conductor used in a wet location has a maximum operating temperature rating of:",
   "options": [
    "60°C",
    "75°C",
    "90°C",
    "105°C"
   ],
   "correct": 1,
   "explanation": "Table 310.104(A): THWN is rated 75°C in wet locations (THWN-2 is the 90°C wet-rated variant; plain THHN is 90°C dry locations only).",
   "ref": "Table 310.104(A)"
  },
  {
   "id": "w23",
   "category": "wiring",
   "question": "Which wiring method is permitted in an 'other space used for environmental air' (a plenum ceiling space) under 300.22(C)?",
   "options": [
    "Type NM cable",
    "Type UF cable",
    "EMT",
    "Type SE cable"
   ],
   "correct": 2,
   "explanation": "300.22(C) limits plenum spaces to metal raceways, metal-clad cable without nonmetallic sheath, and similar metal methods — NM and UF are prohibited there.",
   "ref": "300.22(C)"
  },
  {
   "id": "w24",
   "category": "wiring",
   "question": "In an unfinished basement, NM cable smaller than two #6 AWG or three #8 AWG conductors run across the bottom of joists must be:",
   "options": [
    "Stapled directly to the joist bottoms",
    "Run through bored holes in the joists or installed on running boards",
    "Encased in conduit for the entire run",
    "Prohibited"
   ],
   "correct": 1,
   "explanation": "334.15(C): smaller NM cannot be stapled to joist bottoms in unfinished basements — bore the joists or use running boards (larger cables may be secured directly).",
   "ref": "334.15(C)"
  },
  {
   "id": "w25",
   "category": "wiring",
   "question": "Per 300.11(B), a raceway shall NOT be used as a means of support for:",
   "options": [
    "Its own conductors",
    "Another raceway, cable, or nonelectrical equipment, unless the raceway is identified for that support purpose",
    "A listed conduit body",
    "Boxes attached with listed fittings"
   ],
   "correct": 1,
   "explanation": "Conduit is not a shelf: supporting other raceways/cables on it is prohibited unless the raceway is identified for the purpose.",
   "ref": "300.11(B)"
  },
  {
   "id": "w26",
   "category": "wiring",
   "question": "Per 310.10(H), conductors installed in parallel must be identical in all of the following EXCEPT:",
   "options": [
    "Length",
    "Conductor material and circular mil size",
    "Insulation type and termination method",
    "Manufacturer"
   ],
   "correct": 3,
   "explanation": "Parallel sets must match in length, material, size, insulation, and terminations so current divides evenly — the manufacturer is not a Code condition.",
   "ref": "310.10(H)"
  },
  {
   "id": "w27",
   "category": "wiring",
   "question": "Type UF cable is designed and permitted for use as:",
   "options": [
    "Service entrance cable only",
    "Underground feeder and branch-circuit cable, including direct burial",
    "Plenum wiring",
    "Wet-location overhead spans only"
   ],
   "correct": 1,
   "explanation": "Article 340: UF is the underground counterpart to NM — permitted for direct burial where NM is not.",
   "ref": "340.10"
  },
  {
   "id": "w28",
   "category": "wiring",
   "question": "Per 300.3(B), all conductors of the same circuit, plus the grounded conductor and equipment grounding conductors where used, shall be:",
   "options": [
    "Run in separate raceways for identification",
    "Contained within the same raceway, cable, trench, or cord",
    "Separated by at least 6 in. in open wiring",
    "Bonded to each raceway individually"
   ],
   "correct": 1,
   "explanation": "Keeping a circuit's conductors together cancels inductive heating and ensures the EGC travels with its circuit.",
   "ref": "300.3(B)"
  },
  {
   "id": "w29",
   "category": "wiring",
   "question": "Liquidtight flexible metal conduit (LFMC) must be securely fastened within ____ of each termination and supported at intervals not exceeding ____.",
   "options": [
    "3 ft / 10 ft",
    "12 in. / 4½ ft",
    "12 in. / 6 ft",
    "18 in. / 4½ ft"
   ],
   "correct": 1,
   "explanation": "350.30: LFMC follows the flex pattern — 12 in. from boxes/fittings, every 4½ ft (with exceptions for short whips).",
   "ref": "350.30"
  },
  {
   "id": "w3",
   "category": "wiring",
   "question": "Bored holes for cables in wood studs must be drilled so the edge of the hole is at least ____ from the nearest edge of the wood member, or the cable must be protected by a steel plate.",
   "options": [
    "¾ in.",
    "1 in.",
    "1¼ in.",
    "1½ in."
   ],
   "correct": 2,
   "explanation": "300.4(A)(1): minimum 1¼ in., otherwise a 1/16-in. thick steel plate protects the cable.",
   "ref": "300.4(A)(1)"
  },
  {
   "id": "w30",
   "category": "wiring",
   "question": "Rigid metal conduit (RMC) shall be securely fastened within ____ of each outlet box, junction box, or conduit body.",
   "options": [
    "12 in.",
    "18 in.",
    "3 ft",
    "5 ft"
   ],
   "correct": 2,
   "explanation": "344.30(A): RMC fastened within 3 ft of each box/fitting, then supported per Table 344.30(B)(2) by trade size.",
   "ref": "344.30(A)"
  },
  {
   "id": "w4",
   "category": "wiring",
   "question": "At each outlet or junction box, free conductor length must be at least ____ measured from where the conductor emerges from the raceway or cable sheath.",
   "options": [
    "3 in.",
    "6 in.",
    "8 in.",
    "12 in."
   ],
   "correct": 1,
   "explanation": "300.14: at least 6 in. of free conductor, with at least 3 in. extending outside the box opening.",
   "ref": "300.14"
  },
  {
   "id": "w5",
   "category": "wiring",
   "question": "Type NM cable must be secured within ____ of every box and at intervals not exceeding ____.",
   "options": [
    "8 in. / 4 ft",
    "12 in. / 4½ ft",
    "12 in. / 6 ft",
    "18 in. / 4½ ft"
   ],
   "correct": 1,
   "explanation": "334.30: secured within 12 in. of every cabinet/box/fitting and supported at intervals not exceeding 4½ ft.",
   "ref": "334.30"
  },
  {
   "id": "w6",
   "category": "wiring",
   "question": "The ampacity of Type NM cable conductors is taken from which column of Table 310.15(B)(16)?",
   "options": [
    "90°C",
    "75°C",
    "60°C",
    "Any column — take the highest"
   ],
   "correct": 2,
   "explanation": "334.80: NM conductor ampacity is based on the 60°C column.",
   "ref": "334.80"
  },
  {
   "id": "w7",
   "category": "wiring",
   "question": "EMT must be securely fastened within ____ of each outlet box and supported at intervals not exceeding ____.",
   "options": [
    "12 in. / 4½ ft",
    "3 ft / 10 ft",
    "3 ft / 15 ft",
    "5 ft / 10 ft"
   ],
   "correct": 1,
   "explanation": "358.30(A): EMT fastened within 3 ft of boxes and supported every 10 ft.",
   "ref": "358.30(A)"
  },
  {
   "id": "w8",
   "category": "wiring",
   "question": "The maximum total bends between pull points in a run of raceway (e.g., EMT) is the equivalent of:",
   "options": [
    "Two quarter bends (180°)",
    "Three quarter bends (270°)",
    "Four quarter bends (360°)",
    "No limit if a fish tape can pass"
   ],
   "correct": 2,
   "explanation": "358.26 (and parallel sections): not more than 360° of bends total between pull points.",
   "ref": "358.26"
  },
  {
   "id": "w9",
   "category": "wiring",
   "question": "Type NM cable is prohibited in which location?",
   "options": [
    "Inside wood-stud walls of a dwelling",
    "Wet or damp locations",
    "Above a dwelling ceiling",
    "In a single-family garage wall"
   ],
   "correct": 1,
   "explanation": "334.12(B): NM is not permitted in wet or damp locations (and several other listed locations).",
   "ref": "334.12"
  }
 ]
};
