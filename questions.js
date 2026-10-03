// Original practice items based on public sources; not actual state-exam questions.
// Stable IDs preserve mistake-review links when wording changes.
const QUESTIONS = [
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which statement best describes asbestos?",
    "a": [
      "A group of manufactured mineral fibers used in insulation",
      "A naturally occurring group of fibrous minerals",
      "A naturally occurring group of nonfibrous silicate minerals",
      "A group of fibrous minerals defined by their ability to dissolve in water"
    ],
    "correct": 1,
    "explanation": "Asbestos is a naturally occurring group of fibrous silicate minerals.",
    "id": "nj-001",
    "legacyId": "General Topics Related to Asbestos|Which statement best describes asbestos?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Asbestos is naturally occurring and fibrous. Manufactured fibers, nonfibrous minerals, and a definition based on water solubility do not describe this mineral group."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Friable asbestos-containing material is material that, when dry:",
    "a": [
      "Releases fibers whenever it is painted",
      "Can be crumbled, pulverized, or reduced to powder by hand pressure",
      "Can be reduced to powder only with power tools",
      "Contains any detectable amount of asbestos"
    ],
    "correct": 1,
    "explanation": "Friability is based on whether dry material can be crumbled, pulverized, or reduced to powder by hand pressure.",
    "id": "nj-002",
    "legacyId": "General Topics Related to Asbestos|Friable asbestos-containing material is material that, when dry:",
    "kind": "Recall",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.141",
    "sourceLabel": "EPA §61.141 — friable material",
    "rationale": "Friability is determined by dry hand pressure. Painting, detectable asbestos content, or needing power tools does not meet that definition."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which asbestos mineral is in the serpentine group?",
    "a": [
      "Chrysotile",
      "Tremolite",
      "Actinolite",
      "Anthophyllite"
    ],
    "correct": 0,
    "explanation": "Chrysotile is the serpentine asbestos mineral; the other listed types are amphiboles.",
    "id": "nj-003",
    "legacyId": "General Topics Related to Asbestos|Which is one of the major commercial asbestos fiber types?",
    "kind": "Recall",
    "source": "https://www.atsdr.cdc.gov/asbestos/about/index.html",
    "sourceLabel": "CDC/ATSDR — asbestos mineral classes",
    "rationale": "Tremolite, actinolite, and anthophyllite belong to the amphibole group; chrysotile belongs to the serpentine group."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "PACM is an abbreviation for:",
    "a": [
      "Protected asbestos control material",
      "Presumed asbestos-containing material",
      "Permitted asbestos cleanup method",
      "Personal asbestos containment mask"
    ],
    "correct": 1,
    "explanation": "PACM means presumed asbestos-containing material.",
    "id": "nj-004",
    "legacyId": "General Topics Related to Asbestos|PACM is an abbreviation for:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "PACM expresses a presumption about material, not a permit, cleanup method, or respirator."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Asbestosis primarily involves:",
    "a": [
      "Scarring (fibrosis) of lung tissue",
      "A malignant tumor of the pleura",
      "Scarring of the skin after fiber contact",
      "A cancer of the lung tissue"
    ],
    "correct": 0,
    "explanation": "Asbestosis is a chronic fibrotic disease of the lungs caused by asbestos exposure.",
    "id": "nj-005",
    "legacyId": "Health and Medical Considerations|Asbestosis primarily involves:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Asbestosis is fibrosis of lung tissue. Lung cancer and pleural cancer are malignant diseases, and skin scarring is not asbestosis."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Mesothelioma is most strongly associated with cancer of the:",
    "a": [
      "Membranes lining the chest or abdominal cavities",
      "Air passages inside the lungs",
      "Lymph nodes of the chest",
      "Bones of the rib cage"
    ],
    "correct": 0,
    "explanation": "Mesothelioma affects mesothelial linings, commonly the pleura and peritoneum.",
    "id": "nj-006",
    "legacyId": "Health and Medical Considerations|Mesothelioma is most strongly associated with cancer of the:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Mesothelioma affects the mesothelial linings. Airways, lymph nodes, and rib bones are not the lining identified by this diagnosis."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Smoking combined with occupational asbestos exposure:",
    "a": [
      "Increases mesothelioma risk but has no effect on lung-cancer risk",
      "Can greatly increase lung-cancer risk",
      "Reduces the number of asbestos fibers inhaled",
      "Makes asbestos exposure safe below the PEL"
    ],
    "correct": 1,
    "explanation": "Smoking and asbestos exposure have a strong combined effect on lung-cancer risk.",
    "id": "nj-007",
    "legacyId": "Health and Medical Considerations|Smoking combined with occupational asbestos exposure:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "The combined lung-cancer risk does not mean smoking reduces inhalation or makes exposure safe. Do not substitute a claim about mesothelioma for the lung-cancer interaction."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Asbestos-related diseases commonly have:",
    "a": [
      "A long latency period",
      "Symptoms that reliably appear during the same work shift",
      "A latency period of exactly one year",
      "No latency after high-level exposure"
    ],
    "correct": 0,
    "explanation": "Many asbestos diseases develop years or decades after exposure.",
    "id": "nj-008",
    "legacyId": "Health and Medical Considerations|Asbestos-related diseases commonly have:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Symptoms need not develop during the shift or within exactly one year. High exposure does not make immediate symptoms a reliable indicator."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Under OSHA’s construction asbestos rule, which exposure condition can trigger medical surveillance when it occurs on a combined total of 30 or more days per year?",
    "a": [
      "The PEL or excursion limit",
      "Only the 30-minute excursion limit",
      "Only the 8-hour PEL, never the excursion limit",
      "Only the final clearance level"
    ],
    "correct": 0,
    "explanation": "Exposure at or above an applicable permissible exposure limit is a medical-surveillance trigger at 30 or more days per year. The Class I/II/III work-duration trigger is a separate basis for coverage.",
    "id": "nj-009",
    "legacyId": "Health and Medical Considerations|Under the OSHA construction asbestos standard, medical surveillance requirements can be triggered by employees engaged in certain asbestos work or exposure at/above:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "The surveillance exposure trigger is not restricted to just one of the two exposure limits. A final clearance result is not the employee exposure criterion in this question."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "HEPA filters used for asbestos work are designed to remove at least:",
    "a": [
      "95% of 0.3-micrometer particles",
      "99% of 0.3-micrometer particles",
      "99.97% of 0.3-micron particles",
      "99.97% of 3-micrometer particles"
    ],
    "correct": 2,
    "explanation": "The standard HEPA benchmark is at least 99.97% efficiency for 0.3-micrometer particles.",
    "id": "nj-010",
    "legacyId": "Personal Protective and Other Equipment|HEPA filters used for asbestos work are designed to remove at least:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "The HEPA benchmark combines both a percentage and a particle size. A 95% or 99% rating is lower; 3 micrometers is the wrong benchmark size."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A respirator should be selected primarily according to:",
    "a": [
      "The asbestos percentage in the bulk material alone",
      "Expected airborne exposure and the protection required",
      "The most recent clearance sample from another project",
      "Whether the facepiece is disposable or reusable"
    ],
    "correct": 1,
    "explanation": "Respirator selection must provide adequate protection for the anticipated exposure and task.",
    "id": "nj-011",
    "legacyId": "Personal Protective and Other Equipment|A respirator should be selected primarily according to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(h)(3)",
    "sourceLabel": "OSHA §1926.1101(h)(3) — respirator selection",
    "rationale": "Bulk asbestos percentage, another project's clearance result, and whether a facepiece is reusable do not alone establish adequate protection for expected exposure."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A tight-fitting respirator generally requires:",
    "a": [
      "A fit test",
      "A user seal check in place of formal fit testing",
      "Fit testing only after the first year of use",
      "A fit test only if an air sample exceeds the PEL"
    ],
    "correct": 0,
    "explanation": "Tight-fitting respirators require fit testing and a proper face-to-facepiece seal.",
    "id": "nj-012",
    "legacyId": "Personal Protective and Other Equipment|A tight-fitting respirator generally requires:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "rationale": "A seal check is not a formal fit test. Waiting for a year or for an above-limit sample misses the initial fit-testing requirement."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Facial hair that crosses the sealing surface of a tight-fitting respirator:",
    "a": [
      "Is allowed after a successful annual fit test",
      "Is allowed when a powered respirator has a tight-fitting facepiece",
      "Can interfere with the seal and is not permitted",
      "Can be offset by tightening the straps"
    ],
    "correct": 2,
    "explanation": "Nothing may interfere with the seal of a tight-fitting respirator.",
    "id": "nj-013",
    "legacyId": "Personal Protective and Other Equipment|Facial hair that crosses the sealing surface of a tight-fitting respirator:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "A past fit test and tightened straps do not excuse hair across the seal. A powered respirator with a tight-fitting facepiece still requires an effective seal."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "The main purpose of negative-air equipment in a containment is to:",
    "a": [
      "Replace respiratory protection through general dilution",
      "Maintain airflow/pressure control and filter exhausted air",
      "Maintain positive pressure to keep outdoor air out",
      "Exhaust unfiltered air to reduce worker heat stress"
    ],
    "correct": 1,
    "explanation": "Negative-air systems help maintain pressure differential and exhaust air through HEPA filtration.",
    "id": "nj-014",
    "legacyId": "Personal Protective and Other Equipment|The main purpose of negative-air equipment in a containment is to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Negative-air equipment filters exhausted air and controls airflow. It does not replace required respirators, create a positive-pressure containment, or permit unfiltered exhaust."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A basic method for reducing airborne fiber release while disturbing ACM is:",
    "a": [
      "Dry removal followed by wet cleanup",
      "Wet methods",
      "General ventilation without local controls",
      "Wet cleaning only after the material has been removed"
    ],
    "correct": 1,
    "explanation": "Wet methods are a fundamental engineering/work-practice control for minimizing fiber release.",
    "id": "nj-015",
    "legacyId": "Work Practices, Procedures, and Disposal|A basic method for reducing airborne fiber release while disturbing ACM is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Control fibers during disturbance. Wetting only afterward or relying solely on general ventilation does not provide that source control."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Asbestos debris should generally be cleaned using:",
    "a": [
      "Dry sweeping followed by HEPA vacuuming",
      "A standard vacuum followed by wet wiping",
      "HEPA vacuuming and wet cleaning",
      "Wet wiping followed by compressed-air cleaning"
    ],
    "correct": 2,
    "explanation": "HEPA vacuuming and wet cleaning are standard asbestos cleanup methods; dry sweeping and compressed air are generally prohibited.",
    "id": "nj-016",
    "legacyId": "Work Practices, Procedures, and Disposal|Asbestos debris should generally be cleaned using:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Ordinary vacuums, dry sweeping, and uncontrolled compressed air can spread contamination. Following an unsuitable method with another cleaning step does not undo the release."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Before asbestos abatement begins, the supervisor should ensure the regulated/work area is:",
    "a": [
      "Posted but left open while waste is loaded",
      "Properly established, controlled, and posted",
      "Separated from adjacent areas only after removal begins",
      "Established only if personal samples exceed the PEL"
    ],
    "correct": 1,
    "explanation": "Access control, warning signs and proper work-area preparation are core asbestos controls.",
    "id": "nj-017",
    "legacyId": "Work Practices, Procedures, and Disposal|Before asbestos abatement begins, the supervisor should ensure the regulated/work area is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(e)",
    "sourceLabel": "OSHA §1926.1101(e) — regulated areas",
    "rationale": "Control access and establish the area before disturbance. Posting alone, delayed separation, or waiting for an above-limit result is insufficient."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Asbestos waste leaving the regulated area should be:",
    "a": [
      "Handled to prevent release of fibers and properly contained/labeled",
      "Bagged only after it reaches the waste vehicle",
      "Allowed to dry before sealing so the bags weigh less",
      "Contained but left unlabeled if the landfill has been notified"
    ],
    "correct": 0,
    "explanation": "ACM waste must be handled, packaged, labeled and transported in a manner that prevents fiber release and meets applicable requirements.",
    "id": "nj-018",
    "legacyId": "Work Practices, Procedures, and Disposal|Asbestos waste leaving the regulated area should be:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Contain waste before transport through clean areas and apply required labels. Drying waste or notifying a landfill does not waive packaging or labeling."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why are critical barriers installed during many containment setups?",
    "a": [
      "To replace the need for negative pressure on every Class I project",
      "To isolate openings and help prevent fiber migration",
      "To filter air passing through open doorways",
      "To prevent employees from using the decontamination unit"
    ],
    "correct": 1,
    "explanation": "Critical barriers seal openings and help isolate the asbestos work area.",
    "id": "nj-019",
    "legacyId": "Work Practices, Procedures, and Disposal|Why are critical barriers installed during many containment setups?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "A critical barrier seals an opening; it does not filter air through an open doorway, replace every required pressure control, or block the required decontamination route."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which practice is generally prohibited for asbestos cleanup?",
    "a": [
      "Wet wiping",
      "HEPA vacuuming",
      "Dry sweeping",
      "Sealed waste handling"
    ],
    "correct": 2,
    "explanation": "Dry sweeping can re-aerosolize asbestos fibers and is prohibited.",
    "id": "nj-020",
    "legacyId": "Work Practices, Procedures, and Disposal|Which practice is generally prohibited for asbestos cleanup?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Wet wiping, HEPA vacuuming, and sealed waste handling control contamination. Dry sweeping can re-suspend fibers."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When a glove bag is used for appropriate asbestos work, it should be:",
    "a": [
      "Used for any amount of ACM without assessing the task",
      "Used according to applicable OSHA procedures and kept intact",
      "Used as a substitute for exposure assessment",
      "Opened inside containment as soon as removal ends"
    ],
    "correct": 1,
    "explanation": "Glove-bag operations have specific work-practice requirements; integrity and controlled procedures are essential.",
    "id": "nj-021",
    "legacyId": "Work Practices, Procedures, and Disposal|When a glove bag is used for appropriate asbestos work, it should be:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "A glove bag has task-specific limits and procedures. It cannot cover every amount of ACM, replace exposure assessment, or be opened before released fibers and waste are controlled."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A decontamination system is intended primarily to:",
    "a": [
      "Prevent asbestos contamination from being carried out of the regulated area",
      "Replace wet cleaning at the end of a shift",
      "Separate waste from non-asbestos construction debris",
      "Measure the pressure differential in containment"
    ],
    "correct": 0,
    "explanation": "Decontamination procedures limit migration of asbestos contamination to clean areas.",
    "id": "nj-022",
    "legacyId": "Work Practices, Procedures, and Disposal|A decontamination system is intended primarily to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Decontamination limits carryout on people and equipment. It does not replace cleanup, sort construction debris, or measure enclosure pressure."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "The preferred condition for ACM during removal is generally:",
    "a": [
      "Adequately wet, unless a specific exception applies",
      "Dry unless visible dust appears",
      "Wetted only after it has been bagged",
      "Wet on the surface but deliberately kept dry inside"
    ],
    "correct": 0,
    "explanation": "Adequately wet methods are a primary fiber-control requirement, subject to specific regulatory exceptions.",
    "id": "nj-023",
    "legacyId": "Work Practices, Procedures, and Disposal|The preferred condition for ACM during removal is generally:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Adequate wetting must control release during removal. Visible dust is not the trigger for starting, and wetting only after bagging or only the surface may not adequately wet the material."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "After gross removal, final cleaning should focus on:",
    "a": [
      "Taking clearance samples before removing visible residue",
      "Removing visible residue and contamination using approved cleaning methods",
      "Dry wiping because wet methods are only for removal",
      "Shutting off negative air before cleaning ends"
    ],
    "correct": 1,
    "explanation": "Thorough cleaning is required before the work area can progress toward clearance/reoccupancy procedures.",
    "id": "nj-024",
    "legacyId": "Work Practices, Procedures, and Disposal|After gross removal, final cleaning should focus on:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Remove residue with approved methods before clearance. Early sampling, dry wiping, or shutting off needed controls does not complete final cleaning."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which is the best reason to maintain containment integrity throughout abatement?",
    "a": [
      "To prevent fiber migration outside the controlled area",
      "To replace personal exposure monitoring",
      "To avoid the need for worker decontamination",
      "To permit dry removal inside the sealed area"
    ],
    "correct": 0,
    "explanation": "Containment integrity is essential for preventing contamination of adjacent areas.",
    "id": "nj-025",
    "legacyId": "Work Practices, Procedures, and Disposal|Which is the best reason to maintain containment integrity throughout abatement?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Containment limits migration. It does not replace personal monitoring, worker decontamination, or required wet methods."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "New Jersey asbestos-abatement employers generally must submit written notification of intent at least:",
    "a": [
      "24 hours before work",
      "3 calendar days before work",
      "10 calendar days before work",
      "30 calendar days before work"
    ],
    "correct": 2,
    "explanation": "NJ LWD states that employers planning asbestos work must submit written notification at least 10 calendar days before beginning work.",
    "id": "nj-026",
    "legacyId": "Work Practices, Procedures, and Disposal|New Jersey asbestos-abatement employers generally must submit written notification of intent at least:",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-7.2 — notification",
    "rationale": "This question asks about the NJ calendar-day notice rule. Do not substitute a federal working-day deadline or assume an emergency exception without authorization."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Besides asbestos exposure, a supervisor should evaluate hazards such as:",
    "a": [
      "Electrical hazards, falls, heat stress and confined spaces",
      "Only hazards listed on the asbestos survey",
      "Electrical and fall hazards only after removal starts",
      "Heat stress only when outdoor temperature exceeds 90°F"
    ],
    "correct": 0,
    "explanation": "Asbestos projects can involve numerous conventional construction and occupational hazards.",
    "id": "nj-027",
    "legacyId": "Additional Safety Hazards|Besides asbestos exposure, a supervisor should evaluate hazards such as:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Evaluate actual site hazards before work. An asbestos survey is not a complete construction hazard assessment, and heat risk is not limited to a single outdoor temperature threshold."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Water used for wet methods can create an increased risk of:",
    "a": [
      "Electrical shock around energized equipment",
      "Falling pressure in respirator cartridges",
      "Failure of asbestos bulk sample analysis",
      "Electrical shock only after final clearance"
    ],
    "correct": 0,
    "explanation": "Wet methods can create electrical hazards; electrical safety must be incorporated into planning.",
    "id": "nj-028",
    "legacyId": "Additional Safety Hazards|Water used for wet methods can create an increased risk of:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Water near energized equipment can create a shock path during work. Filter pressure and bulk-sample analysis do not describe that electrical hazard, and it is not limited to final clearance."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Wearing protective clothing and respirators can contribute to:",
    "a": [
      "Heat stress",
      "A lower need for rest breaks regardless of temperature",
      "Elimination of dehydration risk",
      "A reduction in physical workload"
    ],
    "correct": 0,
    "explanation": "PPE can increase heat load and physical stress.",
    "id": "nj-029",
    "legacyId": "Additional Safety Hazards|Wearing protective clothing and respirators can contribute to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "PPE can impede heat loss and add physical burden. It does not eliminate dehydration or automatically reduce workload and rest needs."
  },
  {
    "category": "Testing Methodologies",
    "q": "Personal air samples used to assess worker exposure are collected in the worker's:",
    "a": [
      "Breathing zone",
      "Work area at a fixed wall location",
      "Equipment room after the shift",
      "Waste load-out area during bagging"
    ],
    "correct": 0,
    "explanation": "Exposure monitoring uses breathing-zone samples representative of employee exposure.",
    "id": "nj-030",
    "legacyId": "Testing Methodologies|Personal air samples used to assess worker exposure are collected in the worker's:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Personal sampling must represent the employee's breathing zone. Fixed area locations or samples taken elsewhere after the shift are not automatically representative."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA asbestos PEL is expressed as an 8-hour:",
    "a": [
      "Time-weighted average",
      "Ceiling concentration that may never be exceeded",
      "Average of final clearance samples",
      "Short-term excursion measurement"
    ],
    "correct": 0,
    "explanation": "The PEL is an 8-hour time-weighted average airborne concentration.",
    "id": "nj-031",
    "legacyId": "Testing Methodologies|The OSHA asbestos PEL is expressed as an 8-hour:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "An eight-hour TWA accounts for concentration and time. It is not an instantaneous ceiling, a clearance average, or the separate short-term excursion measurement."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA asbestos excursion limit is evaluated over:",
    "a": [
      "5 minutes",
      "15 minutes",
      "30 minutes",
      "8 hours"
    ],
    "correct": 2,
    "explanation": "The asbestos excursion limit is based on a 30-minute sampling period.",
    "id": "nj-032",
    "legacyId": "Testing Methodologies|The OSHA asbestos excursion limit is evaluated over:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "Thirty minutes is the excursion-limit averaging period; eight hours belongs to the TWA PEL."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA construction asbestos PEL is:",
    "a": [
      "0.1 fiber per cubic centimeter as an 8-hour TWA",
      "1.0 f/cc as an 8-hour TWA",
      "10 f/cc as an 8-hour TWA",
      "Zero fibers under all circumstances"
    ],
    "correct": 0,
    "explanation": "29 CFR 1926.1101 sets the asbestos PEL at 0.1 f/cc as an 8-hour TWA.",
    "id": "nj-033",
    "legacyId": "Testing Methodologies|The OSHA construction asbestos PEL is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "Keep concentration and averaging time paired: 0.1 f/cc over eight hours differs from the 1.0 f/cc, 30-minute excursion limit."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA asbestos excursion limit is:",
    "a": [
      "0.1 f/cc over 30 minutes",
      "1.0 f/cc over 30 minutes",
      "5.0 f/cc over 8 hours",
      "10 f/cc over 15 minutes"
    ],
    "correct": 1,
    "explanation": "The OSHA asbestos excursion limit is 1.0 f/cc averaged over 30 minutes.",
    "id": "nj-034",
    "legacyId": "Testing Methodologies|The OSHA asbestos excursion limit is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "The excursion limit uses 1.0 f/cc over 30 minutes. The eight-hour limit is 0.1 f/cc."
  },
  {
    "category": "Regulations",
    "q": "The OSHA construction asbestos standard is:",
    "a": [
      "29 CFR 1926.1101",
      "29 CFR 1910.1200 only",
      "40 CFR Part 61 only",
      "42 CFR Part 84 only"
    ],
    "correct": 0,
    "explanation": "29 CFR 1926.1101 is OSHA's asbestos standard for construction.",
    "id": "nj-035",
    "legacyId": "Regulations|The OSHA construction asbestos standard is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101",
    "sourceLabel": "OSHA 29 CFR 1926.1101 — asbestos in construction",
    "rationale": "The other references concern different subjects; they are not OSHA’s asbestos construction standard."
  },
  {
    "category": "Regulations",
    "q": "EPA NESHAP asbestos requirements are primarily associated with:",
    "a": [
      "Air-pollution controls for demolition/renovation involving regulated asbestos",
      "Employee respirator medical evaluations",
      "School management plans under AHERA",
      "State worker permit applications"
    ],
    "correct": 0,
    "explanation": "The asbestos NESHAP is an EPA air-pollution regulation governing specified demolition/renovation activities and asbestos emissions.",
    "id": "nj-036",
    "legacyId": "Regulations|EPA NESHAP asbestos requirements are primarily associated with:",
    "kind": "Recall",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.145",
    "sourceLabel": "EPA §61.145 — demolition and renovation",
    "rationale": "NESHAP addresses emissions from covered activities. Respirator medical evaluations, AHERA school management plans, and state permit applications have different regulatory purposes."
  },
  {
    "category": "Regulations",
    "q": "AHERA is particularly associated with asbestos management in:",
    "a": [
      "Schools",
      "All private homes before sale",
      "Only federally owned office buildings",
      "All commercial renovations covered by NESHAP"
    ],
    "correct": 0,
    "explanation": "AHERA established asbestos requirements for public and nonprofit private elementary and secondary schools.",
    "id": "nj-037",
    "legacyId": "Regulations|AHERA is particularly associated with asbestos management in:",
    "kind": "Recall",
    "source": "https://www.epa.gov/asbestos/asbestos-and-school-buildings",
    "sourceLabel": "EPA — AHERA and school buildings",
    "rationale": "AHERA's school requirements cover public and nonprofit private elementary and secondary schools. They do not automatically govern every home sale, federal office, or NESHAP renovation."
  },
  {
    "category": "Regulations",
    "q": "In New Jersey, an asbestos supervisor permit applicant must pass the approved state examination with at least:",
    "a": [
      "60%",
      "65%",
      "70%",
      "90%"
    ],
    "correct": 2,
    "explanation": "New Jersey requires a score of at least 70% on the supervisor examination.",
    "id": "nj-038",
    "legacyId": "Regulations|In New Jersey, an asbestos supervisor permit applicant must pass the approved state examination with at least:",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-5.4 — examination and supervisor permits",
    "rationale": "The NJ permit-exam passing threshold is 70%; a higher practice target is a study choice, not a different legal threshold."
  },
  {
    "category": "Regulations",
    "q": "A person who receives a New Jersey asbestos supervisor permit may:",
    "a": [
      "Perform worker duties without a separate worker permit",
      "Issue a worker permit to a trainee",
      "Transfer the supervisor permit to another employee",
      "Perform worker duties only after obtaining a second worker permit"
    ],
    "correct": 0,
    "explanation": "NJ regulations state that a permitted supervisor may perform worker duties without possessing a separate worker permit.",
    "id": "nj-039",
    "legacyId": "Regulations|A person who receives a New Jersey asbestos supervisor permit may:",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-5.4 — examination and supervisor permits",
    "rationale": "The supervisor permit includes authority to perform worker duties without a second worker permit. It does not authorize issuing permits or transferring a personal permit."
  },
  {
    "category": "Regulations",
    "q": "Which agency issues New Jersey asbestos worker/supervisor permits after required training/examination requirements are met?",
    "a": [
      "NJ Department of Labor and Workforce Development",
      "NJ Department of Health",
      "US Environmental Protection Agency",
      "NJ Department of Community Affairs"
    ],
    "correct": 0,
    "explanation": "NJ LWD administers the asbestos licensing and worker/supervisor permit program, while NJDOH oversees training and the state examination.",
    "id": "nj-040",
    "legacyId": "Regulations|Which agency issues New Jersey asbestos worker/supervisor permits after required training/examination requirements are met?",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "NJ LWD issues these individual permits. NJDOH oversees training and the examination, while EPA and NJ DCA have different responsibilities."
  },
  {
    "category": "Legal Considerations",
    "q": "A supervisor's project records are important because they can:",
    "a": [
      "Document compliance, decisions, monitoring and work practices",
      "Substitute for employee exposure monitoring",
      "Prove that all ACM was removed without inspection",
      "Replace the required employer license"
    ],
    "correct": 0,
    "explanation": "Accurate documentation is a key component of regulatory compliance and project accountability.",
    "id": "nj-041",
    "legacyId": "Legal Considerations|A supervisor's project records are important because they can:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(n)",
    "sourceLabel": "OSHA §1926.1101(n) — records",
    "rationale": "Records document compliance decisions and work. They cannot replace monitoring, establish complete removal without inspection, or replace an employer license."
  },
  {
    "category": "Legal Considerations",
    "q": "Knowingly falsifying asbestos records can:",
    "a": [
      "Create serious regulatory and legal consequences",
      "Be corrected by changing the date without an audit trail",
      "Be acceptable if no worker was over the PEL",
      "Be treated as a minor clerical error in every case"
    ],
    "correct": 0,
    "explanation": "Required records must be accurate; falsification can result in enforcement and other legal consequences.",
    "id": "nj-042",
    "legacyId": "Legal Considerations|Knowingly falsifying asbestos records can:",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "A low exposure result does not excuse falsification. Silently changing a date does not provide an accurate correction trail, and falsification is not automatically a minor clerical error."
  },
  {
    "category": "Legal Considerations",
    "q": "The best response when project conditions differ materially from the approved work plan is to:",
    "a": [
      "Proceed under the original exposure assessment without review",
      "Stop/evaluate as appropriate and address the change under applicable requirements",
      "Use the planned controls even if the task has changed",
      "Document the change only after final clearance"
    ],
    "correct": 1,
    "explanation": "Supervisors should ensure changed conditions are evaluated and handled under applicable plans, specifications and regulatory requirements.",
    "id": "nj-043",
    "legacyId": "Legal Considerations|The best response when project conditions differ materially from the approved work plan is to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Evaluate changed conditions and applicable requirements before proceeding as appropriate. The original assessment or planned controls may no longer fit; documentation only after clearance is too late to guide the work."
  },
  {
    "category": "Legal Considerations",
    "q": "An asbestos supervisor should treat required records as:",
    "a": [
      "Part of the project's compliance documentation",
      "Documents kept only when air samples exceed the PEL",
      "Documents retained only until final clearance",
      "Documents that can be reconstructed from memory later"
    ],
    "correct": 0,
    "explanation": "Required records form part of the compliance record and should be maintained as required.",
    "id": "nj-044",
    "legacyId": "Legal Considerations|An asbestos supervisor should treat required records as:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(n)",
    "sourceLabel": "OSHA §1926.1101(n) — records",
    "rationale": "Required records are compliance documents with applicable retention requirements. They are not needed only after exceedances, do not automatically expire at clearance, and should not depend on later recollection."
  },
  {
    "category": "Supervisory",
    "q": "A supervisor/competent person's role includes:",
    "a": [
      "Identifying hazards and ensuring required controls are implemented",
      "Conducting air analysis in place of an accredited laboratory",
      "Relying entirely on the prior shift's site inspection",
      "Issuing state asbestos permits at the worksite"
    ],
    "correct": 0,
    "explanation": "The competent person/supervisor has active responsibilities for hazard recognition, controls, inspections and compliance.",
    "id": "nj-045",
    "legacyId": "Supervisory|A supervisor/competent person's role includes:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Competent-person duties center on hazard recognition and effective controls. That role does not itself confer laboratory qualifications or state permit-issuing authority, and a prior shift's inspection does not replace ongoing supervision."
  },
  {
    "category": "Supervisory",
    "q": "If containment is damaged during active abatement, the supervisor's priority is to:",
    "a": [
      "Continue until the next scheduled inspection",
      "Control the situation and restore required containment/protection",
      "Increase production to finish the current section",
      "Take a clearance sample before repairing the breach"
    ],
    "correct": 1,
    "explanation": "Loss of containment can permit fiber migration and requires prompt corrective action.",
    "id": "nj-046",
    "legacyId": "Supervisory|If containment is damaged during active abatement, the supervisor's priority is to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Address the damaged containment promptly. Waiting for another inspection, increasing production, or sampling before repair leaves the control failure unresolved."
  },
  {
    "category": "Supervisory",
    "q": "Before assigning a worker to asbestos duties, the supervisor should verify:",
    "a": [
      "Required training, protection and project procedures are in place",
      "That annual refresher training alone replaces all required authorization",
      "That an experienced worker can start before receiving the required permit",
      "That the employee owns a respirator, regardless of fit test or program"
    ],
    "correct": 0,
    "explanation": "Supervisors must ensure personnel are properly trained and protected and understand applicable procedures.",
    "id": "nj-047",
    "legacyId": "Supervisory|Before assigning a worker to asbestos duties, the supervisor should verify:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Verify the complete set of task requirements. Refresher training, experience, and ownership of a respirator do not replace required permits, fit testing, and program protections."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Under OSHA's construction asbestos rule, ACM contains asbestos in what amount?",
    "a": [
      "More than 1%",
      "At least 1%, including exactly 1%",
      "At least 0.1%",
      "More than 10%"
    ],
    "correct": 0,
    "explanation": "OSHA defines asbestos-containing material as material containing more than one percent asbestos.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-048",
    "legacyId": "General Topics Related to Asbestos|Under OSHA's construction asbestos rule, ACM contains asbestos in what amount?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "The definition is more than 1%, excluding exactly 1%. The other numerical thresholds are not this ACM definition; this does not mean every activity involving lower percentages is unregulated."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which material is generally presumed asbestos-containing in a building constructed no later than 1980?",
    "a": [
      "Thermal system insulation",
      "New pipe insulation installed after 1980",
      "Uncoated metal ductwork from 1975",
      "New fiberglass insulation installed during a recent renovation"
    ],
    "correct": 0,
    "explanation": "OSHA presumes thermal system insulation in buildings constructed no later than 1980 to be asbestos-containing unless rebutted.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-049",
    "legacyId": "General Topics Related to Asbestos|Which material is generally presumed asbestos-containing in a building constructed no later than 1980?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "The presumption applies to specified older materials such as TSI. New insulation and uncoated metal ductwork are not the older TSI identified in this question."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "What does TSI mean in the asbestos construction standard?",
    "a": [
      "Thermal system insulation",
      "Thermal surface insulation",
      "Temporary system isolation",
      "Tightly sealed insulation"
    ],
    "correct": 0,
    "explanation": "TSI means thermal system insulation applied to pipes, fittings, boilers, breeching, tanks, ducts, or other components to prevent heat loss or gain.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-050",
    "legacyId": "General Topics Related to Asbestos|What does TSI mean in the asbestos construction standard?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "TSI identifies thermal system insulation, not a temporary isolation procedure or a description of how tightly material is sealed."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which task is Class I asbestos work under OSHA?",
    "a": [
      "Removing surfacing ACM",
      "Removing asbestos-containing floor tile",
      "Removing asbestos-containing roofing shingles",
      "Disturbing a gasket during repair without removing TSI"
    ],
    "correct": 0,
    "explanation": "Class I covers removal of thermal system insulation or surfacing ACM and PACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-051",
    "legacyId": "General Topics Related to Asbestos|Which task is Class I asbestos work under OSHA?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Surfacing removal is Class I. Floor tile and roofing removal are other ACM removal, while incidental repair disturbance is a different activity."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which task is typically Class II asbestos work?",
    "a": [
      "Removing asbestos floor tile",
      "Removing pipe insulation containing asbestos",
      "Repairing an asbestos gasket without removing it",
      "Removing sprayed fireproofing containing asbestos"
    ],
    "correct": 0,
    "explanation": "Class II removal involves ACM other than thermal system insulation or surfacing material.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-052",
    "legacyId": "General Topics Related to Asbestos|Which task is typically Class II asbestos work?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Floor tile is other ACM removal, generally Class II. Pipe insulation and sprayed fireproofing removal are Class I; repair disturbance is Class III."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Class III asbestos work is best described as:",
    "a": [
      "Repair and maintenance that disturb ACM or PACM",
      "Removal of resilient flooring in a whole room",
      "Removal of sprayed fireproofing",
      "Custodial cleaning without disturbing ACM"
    ],
    "correct": 0,
    "explanation": "Class III is repair and maintenance work where ACM or PACM is likely to be disturbed.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-053",
    "legacyId": "General Topics Related to Asbestos|Class III asbestos work is best described as:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Class III is repair and maintenance disturbance. Whole-room flooring removal and sprayed-fireproofing removal are removal activities; nondisturbing custodial contact is a different class."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "An aggressive method of disturbing ACM includes:",
    "a": [
      "Grinding that disintegrates intact material",
      "Carefully removing intact floor tile by hand",
      "HEPA vacuuming settled debris",
      "Wetting a pipe wrap before controlled removal"
    ],
    "correct": 0,
    "explanation": "OSHA defines aggressive methods as sanding, abrading, grinding, or other methods that break, crumble, or disintegrate intact ACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-054",
    "legacyId": "General Topics Related to Asbestos|An aggressive method of disturbing ACM includes:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Grinding that disintegrates material is aggressive. Intact hand removal, HEPA vacuuming, and wetting do not describe that destructive action."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Amended water is water with:",
    "a": [
      "A surfactant to improve penetration",
      "A disinfectant intended to neutralize asbestos",
      "An encapsulant that hardens the ACM",
      "A chemical that dissolves asbestos fibers"
    ],
    "correct": 0,
    "explanation": "A wetting agent helps water penetrate ACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-055",
    "legacyId": "General Topics Related to Asbestos|Amended water is water with:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "A surfactant improves water penetration. Disinfectants do not neutralize asbestos, and amended water is not an encapsulant or a chemical fiber-dissolving treatment."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Which asbestos-related disease is a fibrotic lung disease rather than a cancer?",
    "a": [
      "Asbestosis",
      "Pleural mesothelioma",
      "Lung carcinoma",
      "Peritoneal mesothelioma"
    ],
    "correct": 0,
    "explanation": "Asbestosis is lung fibrosis associated with asbestos exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-056",
    "legacyId": "Health and Medical Considerations|Which asbestos-related disease is a fibrotic lung disease rather than a cancer?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Pleural and peritoneal mesothelioma and lung carcinoma are cancers. Asbestosis is lung fibrosis."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "The primary route of occupational asbestos exposure during abatement is:",
    "a": [
      "Inhalation of airborne fibers",
      "Absorption through intact skin during wet removal",
      "Ingestion of fibers on contaminated hands as the main route",
      "Exposure to asbestos vapor released by heat"
    ],
    "correct": 0,
    "explanation": "Inhalation of airborne asbestos fibers is the main occupational exposure route.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-057",
    "legacyId": "Health and Medical Considerations|The primary route of occupational asbestos exposure during abatement is:",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Breathing airborne fibers is the principal occupational route. Skin absorption and ingestion do not replace that route, and asbestos is not an exposure vapor generated by ordinary abatement heat."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Why is a worker's lack of symptoms a poor basis for judging asbestos exposure?",
    "a": [
      "Disease can have a long latency",
      "Air sampling is only valid after symptoms appear",
      "Asbestos disease always develops within one month",
      "A normal fit test establishes that no exposure occurred"
    ],
    "correct": 0,
    "explanation": "Asbestos-related diseases may take many years to develop.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-058",
    "legacyId": "Health and Medical Considerations|Why is a worker's lack of symptoms a poor basis for judging asbestos exposure?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Disease may develop long after exposure. Air sampling does not depend on symptoms, disease is not guaranteed within one month, and a fit test cannot prove absence of exposure."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Under OSHA’s construction asbestos standard, what combined annual duration of Class I, II, or III work triggers medical surveillance, after applying the day-counting exception?",
    "a": [
      "30 or more counted days per year",
      "10 days per year",
      "20 days per year",
      "60 days per year"
    ],
    "correct": 0,
    "explanation": "The trigger is a combined total of 30 or more counted days per year, across the covered work classes. The days do not have to be consecutive. A day of Class II/III work on intact material lasting one hour or less, including cleanup, does not count if the required work practices are fully followed.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-059",
    "legacyId": "Health and Medical Considerations|Under OSHA's construction rule, medical surveillance is required for a worker engaged in Class I, II, or III work for at least:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Ten, 20, and 60 days are not this threshold. Count qualifying days across the covered classes; they need not be consecutive. Medical clearance for required negative-pressure respirator use is a separate requirement that applies before assignment."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "OSHA medical surveillance for covered asbestos employees must be provided:",
    "a": [
      "At no cost to the employee",
      "Only if exposure exceeds the PEL in a single shift",
      "At the employee's expense after a fit test",
      "Only after the project reaches final clearance"
    ],
    "correct": 0,
    "explanation": "The employer must provide required medical examinations without cost to the employee.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-060",
    "legacyId": "Health and Medical Considerations|OSHA medical surveillance for covered asbestos employees must be provided:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Covered employees receive required surveillance without cost. It is not deferred until clearance or conditioned solely on a single-shift exceedance, and a fit test does not shift the cost to the employee."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Which statement about asbestos health-effect training is correct?",
    "a": [
      "Health effects of asbestos exposure",
      "Only diseases that appear during a project",
      "Only the risk of skin contact with asbestos",
      "Only respiratory effects that are immediately reversible"
    ],
    "correct": 0,
    "explanation": "Training must address asbestos health effects. It also covers the combined effect of smoking and asbestos exposure on lung-cancer risk.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)",
    "id": "nj-061",
    "legacyId": "Health and Medical Considerations|What health topic should asbestos training address?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9) — training",
    "rationale": "Training includes health effects with long latency and potentially serious consequences. It is not limited to immediate, reversible disease or skin contact."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "When should a supervisor treat airborne asbestos exposure as a hazard?",
    "a": [
      "Even when fibers cannot be seen",
      "Only after visible dust appears",
      "Only if the bulk material exceeds 10% asbestos",
      "Only if the worker develops symptoms"
    ],
    "correct": 0,
    "explanation": "Airborne asbestos fibers can be too small to see; visibility does not establish safe exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-062",
    "legacyId": "Health and Medical Considerations|When should a supervisor treat airborne asbestos exposure as a hazard?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Airborne fibers may be invisible. A 10% bulk threshold, visible dust, or worker symptoms is not a prerequisite for recognizing the hazard."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Why does OSHA require a medical determination for a worker assigned to wear a negative-pressure respirator?",
    "a": [
      "To ensure the worker is physically able to perform the work and use the equipment",
      "To replace the user seal check",
      "To determine the air sample duration",
      "To establish the building's ACM percentage"
    ],
    "correct": 0,
    "explanation": "A physician-supervised determination addresses the worker's physical ability to use a negative-pressure respirator safely.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-063",
    "legacyId": "Health and Medical Considerations|Why does OSHA require a medical determination for a worker assigned to wear a negative-pressure respirator?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Medical evaluation addresses ability to use the equipment and do the work. Seal checks, sample duration, and bulk asbestos percentage answer different questions."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Before an employee wears a required respirator, the employer must provide:",
    "a": [
      "A medical evaluation",
      "A fit test only, regardless of medical status",
      "A user seal check performed by the supervisor instead of evaluation",
      "An air sample above the PEL before evaluation"
    ],
    "correct": 0,
    "explanation": "The respiratory protection standard requires medical evaluation before use.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(e)",
    "id": "nj-064",
    "legacyId": "Personal Protective and Other Equipment|Before an employee wears a required respirator, the employer must provide:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(e) — medical evaluation",
    "rationale": "A fit test or seal check does not replace medical evaluation. The employer does not wait for an above-limit air sample before providing evaluation for required respirator use."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A tight-fitting respirator fit test must be performed:",
    "a": [
      "Before initial use and at least annually",
      "Only when the employee changes employers",
      "Only when the cartridge type changes",
      "Before initial use and every two years"
    ],
    "correct": 0,
    "explanation": "OSHA requires fit testing before initial use, when the facepiece changes, and at least annually.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "id": "nj-065",
    "legacyId": "Personal Protective and Other Equipment|A tight-fitting respirator fit test must be performed:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "rationale": "Fit testing occurs before initial use and at least annually, with other triggers such as facepiece changes. Employer changes or cartridge changes alone do not define the schedule, and two years is too long."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Which condition invalidates a tight-fitting respirator seal?",
    "a": [
      "Facial hair between sealing surface and face",
      "A current medical evaluation",
      "A fit-tested facepiece",
      "A properly adjusted head strap"
    ],
    "correct": 0,
    "explanation": "Facial hair between the sealing surface and face is prohibited.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-066",
    "legacyId": "Personal Protective and Other Equipment|Which condition invalidates a tight-fitting respirator seal?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "Hair crossing the sealing surface can compromise the seal. Medical clearance, a fit-tested facepiece, and properly adjusted straps support protection rather than invalidate it."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A user seal check is performed:",
    "a": [
      "Each time a tight-fitting respirator is put on",
      "At the start of each work shift regardless of how many times it is donned",
      "During the annual fit test only",
      "Only if leakage is noticed after entering containment"
    ],
    "correct": 0,
    "explanation": "Each donning requires a user seal check.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-067",
    "legacyId": "Personal Protective and Other Equipment|A user seal check is performed:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "The requirement is each donning, not once per shift or once per year. Do not wait to discover leakage after entering the work area."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Can a user seal check replace a fit test?",
    "a": [
      "No, both have different purposes",
      "Yes, when the same model was used previously",
      "Yes, if the worker has an annual medical evaluation",
      "Yes, if the project uses wet methods"
    ],
    "correct": 0,
    "explanation": "A seal check is not a substitute for formal fit testing.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-068",
    "legacyId": "Personal Protective and Other Equipment|Can a user seal check replace a fit test?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "Past use of the model, medical evaluation, and wet methods do not substitute for fit testing. A seal check and a fit test have different functions."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Which feature is essential to an asbestos HEPA vacuum?",
    "a": [
      "A HEPA filtration system",
      "A standard shop vacuum with two paper bags",
      "A vacuum fitted with an ordinary furnace filter",
      "A wet/dry vacuum with no exhaust filtration"
    ],
    "correct": 0,
    "explanation": "A HEPA vacuum is used to capture asbestos dust without releasing it through the exhaust.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-069",
    "legacyId": "Personal Protective and Other Equipment|Which feature is essential to an asbestos HEPA vacuum?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Extra paper bags, ordinary furnace filters, and unfiltered wet/dry vacuums do not establish HEPA filtration."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A respirator cartridge or filter should be changed according to:",
    "a": [
      "The employer's respiratory protection program and manufacturer guidance",
      "A fixed 30-day schedule for all filters",
      "Only when visible asbestos appears on the filter",
      "The result of the final clearance sample"
    ],
    "correct": 0,
    "explanation": "Selection and maintenance must follow the written program and relevant manufacturer instructions.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(h)",
    "id": "nj-070",
    "legacyId": "Personal Protective and Other Equipment|A respirator cartridge or filter should be changed according to:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(h) — maintenance",
    "rationale": "There is no single 30-day rule for every filter. Visible asbestos and final-clearance results are not substitutes for program and manufacturer replacement criteria."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "What must the employer provide for required respiratory protection?",
    "a": [
      "A written respiratory protection program",
      "Only an annual fit-test card",
      "Only a box of HEPA filters",
      "Only a verbal instruction to check the seal"
    ],
    "correct": 0,
    "explanation": "OSHA requires a written, worksite-specific respiratory protection program.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(c)",
    "id": "nj-071",
    "legacyId": "Personal Protective and Other Equipment|What must the employer provide for required respiratory protection?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(c) — written program",
    "rationale": "A fit-test card, a supply of filters, or verbal seal-check instructions is only part of protection. The employer must provide the written worksite-specific program."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the first control for fiber release during most ACM removal?",
    "a": [
      "Wet the material adequately",
      "Rely on the respirator alone",
      "Apply water after dry removal is finished",
      "Use the negative-air machine as a substitute for wetting"
    ],
    "correct": 0,
    "explanation": "Wet methods are a primary engineering and work-practice control.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-072",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the first control for fiber release during most ACM removal?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Wet adequately during disturbance. Respirators, wetting afterward, and negative-air equipment do not automatically replace required wet methods."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What must a regulated area have at each entrance?",
    "a": [
      "Warning signs",
      "A negative exposure assessment posted in place of signs",
      "A personal air sample pump running at all times",
      "A shower at each doorway regardless of the work class"
    ],
    "correct": 0,
    "explanation": "OSHA requires signs at entrances to regulated areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(7)",
    "id": "nj-073",
    "legacyId": "Work Practices, Procedures, and Disposal|What must a regulated area have at each entrance?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(7) — signs",
    "rationale": "The entrance needs warning signs. A posted assessment, running sample pump, or a shower is not a substitute for those signs."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Who may enter a regulated area during asbestos work?",
    "a": [
      "Authorized persons",
      "Any trained employee of the building owner",
      "Anyone wearing a dust mask",
      "Any worker with a valid permit regardless of assignment or authorization"
    ],
    "correct": 0,
    "explanation": "Access is restricted to authorized persons.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(e)",
    "id": "nj-074",
    "legacyId": "Work Practices, Procedures, and Disposal|Who may enter a regulated area during asbestos work?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(e) — regulated areas",
    "rationale": "Training, a mask, or a permit alone does not establish authorization to enter. Access is restricted to authorized persons under applicable protective requirements."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is prohibited in asbestos regulated areas?",
    "a": [
      "Eating, drinking, smoking, or chewing",
      "Using HEPA vacuums",
      "Wearing protective clothing",
      "Conducting personal air sampling"
    ],
    "correct": 0,
    "explanation": "OSHA prohibits eating, drinking, smoking, chewing tobacco or gum, and applying cosmetics in regulated areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(e)",
    "id": "nj-075",
    "legacyId": "Work Practices, Procedures, and Disposal|What is prohibited in asbestos regulated areas?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(e) — regulated areas",
    "rationale": "HEPA vacuuming, protective clothing, and personal sampling are protective work activities. Eating, drinking, smoking, and chewing are prohibited personal activities."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "In the standard three-stage Class I decontamination sequence, where is contaminated protective clothing removed before showering?",
    "a": [
      "In the equipment room",
      "In the clean room after showering",
      "In the public corridor outside containment",
      "At the waste staging area after the shift"
    ],
    "correct": 0,
    "explanation": "Decontamination facilities are intended to prevent contamination leaving the regulated area.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-076",
    "legacyId": "Work Practices, Procedures, and Disposal|Where should protective clothing contaminated with asbestos be removed?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Remove contaminated clothing in the equipment room before showering. The clean room, public corridor, and waste staging area are not substitutes for that personnel exit sequence."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "How should asbestos waste be stored and transported?",
    "a": [
      "In sealed, labeled, impermeable containers",
      "In labeled but unsealed containers",
      "In sealed containers without labels",
      "In ordinary bags if the waste is kept wet"
    ],
    "correct": 0,
    "explanation": "OSHA requires asbestos waste and contaminated clothing to be placed in sealed, labeled, impermeable containers.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-077",
    "legacyId": "Work Practices, Procedures, and Disposal|How should asbestos waste be stored and transported?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Containers must prevent leakage and carry required labels. Wet waste does not make an ordinary bag adequate, and labeling alone does not close a container."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which cleaning technique is allowed for asbestos-contaminated surfaces?",
    "a": [
      "HEPA vacuuming",
      "Dry sweeping followed by wet wiping",
      "Compressed air with no capture system",
      "A standard shop vacuum with a fine-dust bag"
    ],
    "correct": 0,
    "explanation": "HEPA vacuuming is an accepted cleanup method.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-078",
    "legacyId": "Work Practices, Procedures, and Disposal|Which cleaning technique is allowed for asbestos-contaminated surfaces?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "A fine-dust bag is not proof of HEPA filtration. Dry sweeping and compressed air without capture can re-suspend contamination."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When may compressed air be used to remove asbestos dust?",
    "a": [
      "Only with an enclosed ventilation system that captures the dust",
      "When a HEPA vacuum has already been used",
      "When the asbestos is still adequately wet",
      "When the worker is wearing an approved respirator"
    ],
    "correct": 0,
    "explanation": "OSHA generally prohibits compressed-air cleaning unless used with ventilation that captures the dust cloud.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-079",
    "legacyId": "Work Practices, Procedures, and Disposal|When may compressed air be used to remove asbestos dust?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "The exception depends on capturing the dust cloud with the specified ventilation. Prior HEPA vacuuming, wet material, or a respirator alone does not authorize uncontrolled compressed air."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why must workers use decontamination procedures when leaving Class I regulated areas?",
    "a": [
      "To avoid carrying asbestos into clean areas",
      "To establish that airborne fiber levels are below the PEL",
      "To eliminate the need for protective clothing inside containment",
      "To permit removal of waste without sealed containers"
    ],
    "correct": 0,
    "explanation": "Decontamination limits transfer of asbestos contamination.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-080",
    "legacyId": "Work Practices, Procedures, and Disposal|Why must workers use decontamination procedures when leaving Class I regulated areas?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Decontamination limits carryout. It does not prove a below-limit airborne concentration or waive protective clothing and sealed waste handling."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "For Class I work, the competent person must inspect the worksite:",
    "a": [
      "At least once during each work shift",
      "Once at setup and again only at final clearance",
      "Once a week while removal continues",
      "Only after a monitoring result exceeds the PEL"
    ],
    "correct": 0,
    "explanation": "For Class I jobs, the competent person must inspect at least once during each work shift and at any time an employee requests an inspection.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-081",
    "legacyId": "Work Practices, Procedures, and Disposal|For Class I work, the competent person must inspect the worksite:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "At least one inspection per shift is required for Class I, and employee requests also trigger inspections. Setup/final-only, weekly, or exceedance-only inspections miss that schedule."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "If a negative-pressure enclosure loses pressure during removal, what should the supervisor do?",
    "a": [
      "Stop and restore the enclosure controls",
      "Continue while the HEPA units are running, even if pressure is lost",
      "Open a door to increase general ventilation",
      "Wait for the next routine inspection before correcting it"
    ],
    "correct": 0,
    "explanation": "A failure of enclosure pressure calls for corrective action before continuing uncontrolled work.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-082",
    "legacyId": "Work Practices, Procedures, and Disposal|If a negative-pressure enclosure loses pressure during removal, what should the supervisor do?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Running HEPA units alone does not establish that required enclosure pressure is maintained. Opening a door or postponing correction does not restore the failed control."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When asbestos-containing floor tile is removed as Class II work, OSHA generally requires it to be:",
    "a": [
      "Removed intact where feasible",
      "Cut into smaller pieces first to fit waste bags",
      "Dry sanded to loosen adhesive",
      "Broken along each seam to speed removal"
    ],
    "correct": 0,
    "explanation": "Class II floor tile methods emphasize intact removal and prohibit aggressive techniques.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(i)",
    "id": "nj-083",
    "legacyId": "Work Practices, Procedures, and Disposal|When asbestos-containing floor tile is removed as Class II work, OSHA generally requires it to be:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(8)(i) — flooring",
    "rationale": "Preserve intact tile where feasible. Cutting to fit bags, dry sanding, and intentional breaking do not follow that objective."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the purpose of a glove bag for eligible small TSI jobs?",
    "a": [
      "To isolate the disturbance and contain released fibers",
      "Replace the regulated area designation",
      "Eliminate all need for respirator selection",
      "Permit removal without waste containment"
    ],
    "correct": 0,
    "explanation": "A glove bag provides local containment for appropriate work when used under required procedures.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-084",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the purpose of a glove bag for eligible small TSI jobs?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "A glove bag contains the local disturbance. It does not automatically replace regulated-area requirements, respirator selection, or waste containment."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What should happen to a glove bag before it is removed from the work area?",
    "a": [
      "The contained material and bag must be handled without releasing fibers",
      "Open it for a visual check of remaining material",
      "Deflate it directly into the work area",
      "Move it to the clean room before sealing it"
    ],
    "correct": 0,
    "explanation": "Glove-bag waste handling must prevent fiber release.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-085",
    "legacyId": "Work Practices, Procedures, and Disposal|What should happen to a glove bag before it is removed from the work area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Control the contents and air through handling and removal. Opening the bag, venting it into the room, or moving it to the clean side before sealing can release fibers."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "How does OSHA's construction asbestos rule treat dry sweeping of ACM dust and debris?",
    "a": [
      "It is prohibited",
      "Allowed when material is nonfriable",
      "Allowed with a respirator after gross removal",
      "Allowed when done before HEPA vacuuming"
    ],
    "correct": 0,
    "explanation": "OSHA prohibits dry sweeping, shoveling, and other dry cleanup of dust and debris containing ACM or PACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-086",
    "legacyId": "Work Practices, Procedures, and Disposal|How does OSHA's construction asbestos rule treat dry sweeping of ACM dust and debris?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Nonfriability, wearing a respirator, or planning HEPA vacuuming afterward does not authorize dry sweeping of ACM dust and debris."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the main purpose of a critical barrier?",
    "a": [
      "Seal openings between the work area and adjacent spaces",
      "Maintain a positive-pressure work area",
      "Replace the decontamination chamber",
      "Provide a location for clearance air samples"
    ],
    "correct": 0,
    "explanation": "Critical barriers help isolate the regulated work area.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-087",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the main purpose of a critical barrier?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Critical barriers seal migration pathways. They do not create positive pressure, replace the decontamination chamber, or primarily serve as sampling locations."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why should removed ACM be bagged promptly?",
    "a": [
      "To minimize opportunities for fiber release and migration",
      "To replace disposal labels",
      "To satisfy the employee fit-test requirement",
      "To make the negative-air machine unnecessary"
    ],
    "correct": 0,
    "explanation": "Prompt containment reduces the chance of release while waste is handled.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-088",
    "legacyId": "Work Practices, Procedures, and Disposal|Why should removed ACM be bagged promptly?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Prompt bagging reduces opportunities for release. It does not replace labels, fit testing, or required negative-air controls."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA asbestos PEL is measured as:",
    "a": [
      "An eight-hour time-weighted average",
      "The highest 30-minute average during the shift",
      "A ceiling value measured at any instant",
      "A final clearance result from inside containment"
    ],
    "correct": 0,
    "explanation": "The permissible exposure limit is an eight-hour TWA.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "id": "nj-089",
    "legacyId": "Testing Methodologies|The OSHA asbestos PEL is measured as:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "The PEL uses an eight-hour TWA. The 30-minute excursion limit, an instantaneous ceiling, and final-clearance results are different measures."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA excursion limit is averaged over:",
    "a": [
      "30 minutes",
      "15 minutes",
      "60 minutes",
      "8 hours"
    ],
    "correct": 0,
    "explanation": "The excursion limit is a 30-minute average.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "id": "nj-090",
    "legacyId": "Testing Methodologies|The OSHA excursion limit is averaged over:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "The excursion averaging period is 30 minutes, not 15, 60, or the eight hours used for the TWA PEL."
  },
  {
    "category": "Testing Methodologies",
    "q": "What should an employer do after exposure monitoring shows a worker above the PEL?",
    "a": [
      "Notify the affected worker of the result and corrective action",
      "Notify only the building owner",
      "Wait until the final project report to notify the worker",
      "Rely on the respirator and make no corrective assessment"
    ],
    "correct": 0,
    "explanation": "OSHA requires notice to affected employees and identification of corrective action when levels exceed a limit.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-091",
    "legacyId": "Testing Methodologies|What should an employer do after exposure monitoring shows a worker above the PEL?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Inform the affected employee of the result and corrective action. Owner-only notice, delay until the final report, and relying solely on a respirator are insufficient."
  },
  {
    "category": "Testing Methodologies",
    "q": "Where is a representative personal air sample collected?",
    "a": [
      "Near the worker's breathing zone",
      "At a fixed point near the negative-air exhaust",
      "At the clean side of the decontamination unit",
      "At a fixed point in the work area away from the worker"
    ],
    "correct": 0,
    "explanation": "Personal exposure sampling reflects air in the worker's breathing zone.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-092",
    "legacyId": "Testing Methodologies|Where is a representative personal air sample collected?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Sample representative breathing-zone exposure. An exhaust, clean-side station, or distant area sampler does not automatically represent what the worker breathes."
  },
  {
    "category": "Testing Methodologies",
    "q": "What does a negative exposure assessment support?",
    "a": [
      "A documented conclusion that expected exposures will be below both limits",
      "A decision that the material is not ACM",
      "A waiver of all exposure controls",
      "A clearance determination for reoccupancy"
    ],
    "correct": 0,
    "explanation": "OSHA defines a negative exposure assessment for a specific operation based on evidence exposures will remain below the PEL and excursion limit.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-093",
    "legacyId": "Testing Methodologies|What does a negative exposure assessment support?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "A negative exposure assessment concerns expected exposure for the operation. It does not establish non-ACM, waive all controls, or certify reoccupancy clearance."
  },
  {
    "category": "Testing Methodologies",
    "q": "Who is responsible for ensuring that required employee exposure monitoring is performed under OSHA’s construction asbestos standard?",
    "a": [
      "The employer",
      "The building owner, regardless of who employs the workers",
      "The licensed abatement supervisor personally, rather than the employer",
      "The air-monitoring laboratory, which alone decides whether monitoring is required"
    ],
    "correct": 0,
    "explanation": "The employer must ensure that required monitoring is performed. This assigns responsibility; it does not require the employer personally to operate the sampling equipment.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-094",
    "legacyId": "Testing Methodologies|Who must perform exposure monitoring under OSHA's construction asbestos rule?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "The employer is responsible for ensuring required monitoring occurs. Qualified personnel may perform it, but that does not transfer the duty solely to the owner, supervisor, or laboratory."
  },
  {
    "category": "Testing Methodologies",
    "q": "Why do results from one task not automatically establish exposure for a different task?",
    "a": [
      "Conditions and disturbance methods may differ",
      "The same material always gives the same exposure",
      "A bulk sample replaces air monitoring for every task",
      "A negative exposure assessment covers all future methods"
    ],
    "correct": 0,
    "explanation": "Exposure assessments must represent the operation and conditions.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-095",
    "legacyId": "Testing Methodologies|Why do results from one task not automatically establish exposure for a different task?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Exposure depends on conditions and methods as well as material. Bulk samples do not replace task-specific air assessment, and a negative exposure assessment is not a blanket exemption for future methods."
  },
  {
    "category": "Testing Methodologies",
    "q": "What does PCM count in a standard airborne asbestos analysis?",
    "a": [
      "Fibers meeting specified counting criteria",
      "Only fibers chemically identified as asbestos",
      "All particles regardless of size or shape",
      "The mass of asbestos collected on the filter"
    ],
    "correct": 0,
    "explanation": "Phase-contrast microscopy counts fibers using specified criteria; it does not identify mineral type by itself.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppA",
    "id": "nj-096",
    "legacyId": "Testing Methodologies|What does PCM count in a standard airborne asbestos analysis?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix A — reference counting method",
    "rationale": "PCM applies fiber-counting criteria. It neither chemically identifies each fiber as asbestos, counts every particle, nor weighs the asbestos collected."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "What conventional hazard can wet asbestos removal increase?",
    "a": [
      "Electrical shock",
      "Respirator filter efficiency falling below its rating",
      "Asbestos changing into a soluble chemical",
      "Radiation from wetted insulation"
    ],
    "correct": 0,
    "explanation": "Water near electrical equipment requires electrical hazard controls.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-097",
    "legacyId": "Additional Safety Hazards|What conventional hazard can wet asbestos removal increase?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Water near energized equipment can create an electrical hazard. It does not inherently create radiation or dissolve asbestos, and reduced filter efficiency is not the conventional hazard asked here."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Why might an asbestos worker need a heat-stress plan?",
    "a": [
      "Protective clothing and respirators can increase heat burden",
      "HEPA filtration increases core body temperature directly",
      "Wet methods always eliminate the need for breaks",
      "A respirator prevents dehydration"
    ],
    "correct": 0,
    "explanation": "The physical burden of PPE can contribute to heat stress.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-098",
    "legacyId": "Additional Safety Hazards|Why might an asbestos worker need a heat-stress plan?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "PPE can increase heat burden and impede cooling. HEPA filtration does not directly heat the body, wet methods do not eliminate breaks, and a respirator does not prevent dehydration."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Before working above a ceiling, a supervisor should evaluate:",
    "a": [
      "Fall and structural hazards",
      "Only the asbestos content of ceiling tiles",
      "Only the negative-air machine capacity",
      "Only whether clearance sampling will be aggressive"
    ],
    "correct": 0,
    "explanation": "Asbestos work can expose workers to falls and structural hazards.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-099",
    "legacyId": "Additional Safety Hazards|Before working above a ceiling, a supervisor should evaluate:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Ceiling work requires attention to falls and structural safety. Bulk content, air-machine capacity, and clearance method do not evaluate whether the work surface or access is safe."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "What should a supervisor assess before assigning work in a confined space?",
    "a": [
      "Entry hazards and applicable confined-space requirements",
      "Only the asbestos percentage in the material",
      "Only whether negative air is available",
      "Only the planned clearance method"
    ],
    "correct": 0,
    "explanation": "Confined-space conditions can present atmospheric and rescue hazards beyond asbestos.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-100",
    "legacyId": "Additional Safety Hazards|What should a supervisor assess before assigning work in a confined space?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Evaluate the space's entry, atmospheric, and rescue hazards and applicable requirements. Asbestos percentage, negative air, and a planned clearance method alone are not an entry assessment."
  },
  {
    "category": "Regulations",
    "q": "Which NJ agency issues asbestos worker and supervisor permits?",
    "a": [
      "Department of Labor and Workforce Development",
      "Department of Health",
      "Department of Community Affairs",
      "Department of Environmental Protection"
    ],
    "correct": 0,
    "explanation": "NJ LWD issues performance permits.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-101",
    "legacyId": "Regulations|Which NJ agency issues asbestos worker and supervisor permits?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "NJ LWD issues worker and supervisor permits. Health, Community Affairs, and Environmental Protection have different asbestos responsibilities."
  },
  {
    "category": "Regulations",
    "q": "Which NJ agency certifies asbestos training courses and approves the examination?",
    "a": [
      "Department of Health",
      "Department of Labor and Workforce Development",
      "Department of Community Affairs",
      "Department of Environmental Protection"
    ],
    "correct": 0,
    "explanation": "NJDOH oversees course certification and the approved examination.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-102",
    "legacyId": "Regulations|Which NJ agency certifies asbestos training courses and approves the examination?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "NJDOH oversees training-course certification and the approved examination. Permit issuance by LWD is a distinct role."
  },
  {
    "category": "Regulations",
    "q": "Under NJ's Asbestos Control and Licensing Act, an employer license is:",
    "a": [
      "Nontransferable",
      "Transferable when both companies use the same supervisor",
      "Transferable with the building owner's consent",
      "Transferable for a single project without state action"
    ],
    "correct": 0,
    "explanation": "The statute describes the employer license as nontransferable.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-103",
    "legacyId": "Regulations|Under NJ's Asbestos Control and Licensing Act, an employer license is:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Sharing a supervisor, obtaining owner consent, or limiting the duration does not make an employer license transferable."
  },
  {
    "category": "Regulations",
    "q": "Under NJ law, a permitted asbestos employee must keep the permit:",
    "a": [
      "On their person and available for inspection",
      "At the employer office and available by phone",
      "In the supervisor's vehicle throughout the project",
      "With the building owner until final clearance"
    ],
    "correct": 0,
    "explanation": "The permit must be carried and available for inspection.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-104",
    "legacyId": "Regulations|Under NJ law, a permitted asbestos employee must keep the permit:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "The permit must be carried and available for inspection. An office phone contact, vehicle copy, or owner-held record does not meet that requirement."
  },
  {
    "category": "Regulations",
    "q": "How long are NJ asbestos employer licenses and worker/supervisor permits generally valid?",
    "a": [
      "12 months",
      "Six months",
      "Two years",
      "Three years"
    ],
    "correct": 0,
    "explanation": "The Act provides a 12-month validity period.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-105",
    "legacyId": "Regulations|How long are NJ asbestos employer licenses and worker/supervisor permits generally valid?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "The general validity period is 12 months; six months, two years, and three years are not this period."
  },
  {
    "category": "Regulations",
    "q": "A licensed NJ asbestos employer must post at the site:",
    "a": [
      "A sign stating licensed by New Jersey for asbestos work",
      "A copy of every employee's medical record",
      "A copy of the final clearance report before work starts",
      "A notice stating the company is EPA accredited"
    ],
    "correct": 0,
    "explanation": "The Act requires a readily visible licensed-for-asbestos-work sign.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-106",
    "legacyId": "Regulations|A licensed NJ asbestos employer must post at the site:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "The licensing sign is distinct from medical records, a final-clearance report, or a claim of EPA accreditation. Medical information is not the required public sign."
  },
  {
    "category": "Regulations",
    "q": "What must a contractor generally verify before assigning asbestos work in NJ?",
    "a": [
      "Required employer license and personnel permits",
      "An employer license without individual personnel permits",
      "Individual permits without the required employer license",
      "Training certificates as substitutes for all current permits"
    ],
    "correct": 0,
    "explanation": "New Jersey's licensing and permitting requirements apply before covered work.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-107",
    "legacyId": "Regulations|What must a contractor generally verify before assigning asbestos work in NJ?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Employer licensing and individual permits serve separate requirements. Training certificates do not substitute for every current authorization."
  },
  {
    "category": "Legal Considerations",
    "q": "Knowingly submitting false information on an NJ asbestos permit application can lead to:",
    "a": [
      "Criminal penalties",
      "Automatic approval if training was completed",
      "Only a requirement to pay the renewal fee",
      "No enforcement if the employer accepts responsibility"
    ],
    "correct": 0,
    "explanation": "The Act identifies knowingly false or misleading application information as a violation with criminal consequences.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-108",
    "legacyId": "Legal Considerations|Knowingly submitting false information on an NJ asbestos permit application can lead to:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Completed training, payment, or employer acceptance does not excuse knowingly false information on a required application."
  },
  {
    "category": "Legal Considerations",
    "q": "Can an NJ asbestos employer license simply be loaned to another company?",
    "a": [
      "No; it is nontransferable",
      "Yes, if both companies share a supervisor",
      "Yes, if the owner agrees in writing",
      "Yes, for a job lasting less than one day"
    ],
    "correct": 0,
    "explanation": "Employer licenses are nontransferable.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-109",
    "legacyId": "Legal Considerations|Can an NJ asbestos employer license simply be loaned to another company?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Neither shared supervision, owner consent, nor a short project authorizes lending a nontransferable license."
  },
  {
    "category": "Legal Considerations",
    "q": "Who may inspect asbestos licenses and permits under the NJ Act?",
    "a": [
      "Authorized state enforcement representatives",
      "Only the contracting building owner",
      "Only the project air-monitoring firm",
      "Only a federal OSHA compliance officer"
    ],
    "correct": 0,
    "explanation": "Required credentials must be available for inspection by authorized representatives.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-110",
    "legacyId": "Legal Considerations|Who may inspect asbestos licenses and permits under the NJ Act?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Authorized state representatives have inspection authority under the NJ Act. It is not limited to the owner, private monitoring firm, or federal OSHA alone."
  },
  {
    "category": "Legal Considerations",
    "q": "An employee who reports an asbestos violation to NJ enforcement agencies is protected against:",
    "a": [
      "Employer discrimination or sanctions for the complaint",
      "All discipline unrelated to the complaint",
      "All future training requirements",
      "The obligation to follow lawful job procedures"
    ],
    "correct": 0,
    "explanation": "The Act prohibits discrimination or sanctions against an employee who complains or cooperates with enforcement.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-111",
    "legacyId": "Legal Considerations|An employee who reports an asbestos violation to NJ enforcement agencies is protected against:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Protection addresses retaliation for the complaint; it is not immunity from unrelated lawful obligations."
  },
  {
    "category": "Legal Considerations",
    "q": "A person who believes the NJ Asbestos Control and Licensing Act was violated may:",
    "a": [
      "File a citizen complaint with the responsible commissioner",
      "Wait until the next permit renewal to raise the issue",
      "Submit it only through the employer with no outside complaint",
      "Report it only after proving a worker has become ill"
    ],
    "correct": 0,
    "explanation": "The Act provides a citizen complaint process.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-112",
    "legacyId": "Legal Considerations|A person who believes the NJ Asbestos Control and Licensing Act was violated may:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "A complaint does not have to wait for renewal, employer permission, or proof that disease has already developed."
  },
  {
    "category": "Legal Considerations",
    "q": "Why should a supervisor preserve air-monitoring and work records accurately?",
    "a": [
      "They document required compliance and may be reviewed in enforcement",
      "To substitute the records for required worker protection",
      "To avoid recording unexpected site conditions",
      "To replace required regulatory notifications"
    ],
    "correct": 0,
    "explanation": "Accurate records support compliance and inspection.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(n)",
    "id": "nj-113",
    "legacyId": "Legal Considerations|Why should a supervisor preserve air-monitoring and work records accurately?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(n) — records",
    "rationale": "Accurate records support compliance review; they do not replace protection or notices, and unexpected conditions should not be omitted."
  },
  {
    "category": "Legal Considerations",
    "q": "What is a sound response to a request to backdate an asbestos work record?",
    "a": [
      "Refuse and record the actual date",
      "Use the requested date if the work was eventually completed",
      "Replace the original without retaining a correction trail",
      "Have a coworker sign the earlier date"
    ],
    "correct": 0,
    "explanation": "Required compliance records should reflect the actual work and dates.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-114",
    "legacyId": "Legal Considerations|What is a sound response to a request to backdate an asbestos work record?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Record the actual facts and dates. A different signature, later completion, or silently replacing the original does not justify backdating."
  },
  {
    "category": "Supervisory",
    "q": "A competent person under OSHA must have authority to:",
    "a": [
      "Promptly correct asbestos hazards",
      "Identify hazards but wait for the owner to authorize every correction",
      "Transfer all correction authority to individual workers",
      "Certify compliance without inspecting conditions"
    ],
    "correct": 0,
    "explanation": "A competent person can identify hazards and has authority to take prompt corrective measures.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-115",
    "legacyId": "Supervisory|A competent person under OSHA must have authority to:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "The role requires authority to act promptly, not merely identify a hazard and wait for someone else to permit every correction."
  },
  {
    "category": "Supervisory",
    "q": "Who supervises Class I asbestos work under OSHA?",
    "a": [
      "A designated competent person",
      "The project designer who wrote the specifications",
      "The building owner or facility manager",
      "The air-sampling technician who takes clearance samples"
    ],
    "correct": 0,
    "explanation": "Class I work must be supervised by a competent person.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-116",
    "legacyId": "Supervisory|Who supervises Class I asbestos work under OSHA?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "The work must be supervised by a qualified designated competent person. Being a designer, owner, or sampling technician alone does not establish that designation and authority."
  },
  {
    "category": "Supervisory",
    "q": "Before starting removal, what should a supervisor confirm?",
    "a": [
      "Controls, worker training, PPE, and regulated area are ready",
      "That a previous crew's exposure assessment automatically covers any new method",
      "That a permit alone substitutes for preparing the regulated area",
      "That clearance sampling can replace pre-job controls"
    ],
    "correct": 0,
    "explanation": "Supervision includes ensuring required controls and worker protections are in place.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-117",
    "legacyId": "Supervisory|Before starting removal, what should a supervisor confirm?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Confirm protections and preparation before removal. A previous assessment may not cover a new method, and neither a permit nor later clearance replaces pre-job controls."
  },
  {
    "category": "Supervisory",
    "q": "If a worker's respirator seal cannot be maintained, the supervisor should:",
    "a": [
      "Keep the worker out of work requiring that respirator until corrected",
      "Continue work using a seal check in place of a sound seal",
      "Keep working while the next fit test is scheduled",
      "Permit short entries because the worker passed last year's test"
    ],
    "correct": 0,
    "explanation": "Required respiratory protection must function properly before exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-118",
    "legacyId": "Supervisory|If a worker's respirator seal cannot be maintained, the supervisor should:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "The seal must function for the assigned use. Short entries, an older fit test, or a pending appointment do not correct a failed seal."
  },
  {
    "category": "Supervisory",
    "q": "When conditions change from the exposure assessment, the supervisor should:",
    "a": [
      "Reevaluate exposure and controls",
      "Use the old assessment as long as the building is unchanged",
      "Rely solely on respirator use to make the old results representative",
      "Wait until final clearance to assess the new method"
    ],
    "correct": 0,
    "explanation": "Assessments must represent actual operations and conditions.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-119",
    "legacyId": "Supervisory|When conditions change from the exposure assessment, the supervisor should:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "An assessment must represent actual conditions and methods. The same building or respirator does not guarantee comparable exposure."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Resilient flooring installed in 1978 will be removed. What is needed before treating that flooring as non-asbestos under OSHA’s flooring provision?",
    "a": [
      "An industrial hygienist’s asbestos-free determination using recognized analytical techniques",
      "An intact appearance and no visible dust",
      "One prior air sample below the PEL",
      "The owner's statement that no asbestos was used"
    ],
    "correct": 0,
    "explanation": "For flooring installed no later than 1980, OSHA requires the employer to assume it contains asbestos unless an industrial hygienist determines it is asbestos-free using recognized analytical techniques.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(i)(I)",
    "id": "nj-120",
    "legacyId": "General Topics Related to Asbestos|A contractor finds resilient flooring in a building constructed in 1978. Before treating it as non-asbestos, what is required?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g)(8)(i)(I) — older flooring",
    "rationale": "Appearance and a below-limit air sample do not establish the flooring's material content. An owner's assurance does not replace the required analytical determination."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which description best matches friable asbestos-containing material?",
    "a": [
      "Material that can be crumbled, pulverized, or reduced to powder by hand pressure when dry",
      "Material that releases dust only when cut by powered tools",
      "Any ACM containing more than 5% asbestos",
      "Any material that has exposed, unpainted edges"
    ],
    "correct": 0,
    "explanation": "Friability describes whether dry material can be crumbled, pulverized, or reduced to powder by hand pressure.",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.141",
    "id": "nj-121",
    "legacyId": "General Topics Related to Asbestos|Which description best matches friable asbestos-containing material?",
    "kind": "Scenario",
    "sourceLabel": "EPA §61.141 — friable material",
    "rationale": "Friability is based on dry hand pressure, not a percentage above 5%, exposed edges, or whether powered cutting releases dust."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "An employee performs Class III work on 35 separate days this year. Each day involves more than one hour of the operation, including cleanup; exposures stay below both limits. Does the work-duration trigger apply?",
    "a": [
      "Yes; the 30-counted-day work-duration trigger applies",
      "No surveillance because every result is below the PEL",
      "No surveillance unless 30 days are consecutive",
      "No surveillance because Class III is excluded"
    ],
    "correct": 0,
    "explanation": "Yes. These are 35 counted Class III work days. The work-duration trigger can apply even with exposures below both limits.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-122",
    "legacyId": "Health and Medical Considerations|An employee performs Class III asbestos work on 35 days during the year, with exposures below the PEL each day. Which statement is correct?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "The days need not be consecutive. Class III is included, and the stated duration means the one-hour-or-less exclusion cannot remove these days."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Who determines whether an employee is medically able to use a respirator?",
    "a": [
      "A physician or other licensed health care professional",
      "The supervisor after reviewing the fit-test results",
      "The respirator program administrator after a user seal check",
      "The worker based only on the absence of symptoms"
    ],
    "correct": 0,
    "explanation": "The respiratory protection standard assigns the medical evaluation to a physician or other licensed health care professional.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(e)",
    "id": "nj-123",
    "legacyId": "Health and Medical Considerations|Who determines whether an employee is medically able to use a respirator?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1910.134(e) — medical evaluation",
    "rationale": "A physician or other licensed health care professional performs the medical evaluation. Fit tests, seal checks, and absence of symptoms do not authorize a supervisor, administrator, or worker to replace that clinical determination."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Why must asbestos exposure records and medical-surveillance records be kept separately and accurately?",
    "a": [
      "They document different aspects of exposure and worker health and have different retention requirements",
      "They may use a single retention period ending at project completion",
      "Exposure data can replace medical records when below the PEL",
      "Medical records need not be retained if the worker has no symptoms"
    ],
    "correct": 0,
    "explanation": "Under §1926.1101(n), employee exposure measurement records are kept for at least 30 years; medical-surveillance records are kept for employment plus 30 years, subject to §1910.1020. Medical confidentiality and access rules also apply.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(n)",
    "id": "nj-124",
    "legacyId": "Health and Medical Considerations|Why must asbestos exposure records and medical-surveillance records be kept separately and accurately?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(n) — records",
    "rationale": "A completed project or a healthy employee does not cancel these retention requirements. Exposure data cannot replace the medical record."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A worker passes a fit test with one make, model, style, and size of tight-fitting respirator. May the worker switch to a different facepiece without another fit test?",
    "a": [
      "No; the employee must be fit tested with the facepiece that will be used",
      "Yes, if the new facepiece is the same size",
      "Yes, if both facepieces use the same filter",
      "Yes, if the worker passes a user seal check"
    ],
    "correct": 0,
    "explanation": "Fit testing is specific to the same make, model, style, and size of respirator that the employee will use.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "id": "nj-125",
    "legacyId": "Personal Protective and Other Equipment|A worker passes a fit test with one make, model, style, and size of tight-fitting respirator. May the worker switch to a different facepiece without another fit test?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "rationale": "The test must match the make, model, style, and size used. Same size, matching filters, and a successful seal check do not alone establish a valid fit test for a different facepiece."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "During asbestos work, a worker detects leakage around a tight-fitting facepiece. What should happen first?",
    "a": [
      "Leave the respirator-use area and correct the problem",
      "Tighten the straps and finish the current removal task",
      "Upgrade the filter while remaining in the contaminated area",
      "Wait for an exposure sample before leaving"
    ],
    "correct": 0,
    "explanation": "A worker must leave the respirator-use area when leakage is detected and may return only after the respirator problem is corrected.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-126",
    "legacyId": "Personal Protective and Other Equipment|During asbestos work, a worker detects leakage around a tight-fitting facepiece. What should happen first?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "Leave the respirator-use area before resolving leakage; finishing a task or waiting for a sample prolongs potential exposure."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "What filter efficiency does OSHA require for powered and non-powered air-purifying respirators used for asbestos?",
    "a": [
      "HEPA filtration",
      "An N95 filter for all exposure levels",
      "An organic-vapor cartridge without a particulate filter",
      "A standard dust filter whenever the material is wet"
    ],
    "correct": 0,
    "explanation": "OSHA requires high-efficiency filters for powered and non-powered air-purifying respirators used for asbestos exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(h)(3)",
    "id": "nj-127",
    "legacyId": "Personal Protective and Other Equipment|What filter efficiency does OSHA require for powered and non-powered air-purifying respirators used for asbestos?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(h)(3) — respirator selection",
    "rationale": "N95, an organic-vapor cartridge alone, and an ordinary dust filter are not the specified HEPA filtration. Wet material does not waive the applicable filter requirement."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A power cutting machine is used on asbestos-containing roofing. Unless the competent person determines that misting substantially decreases worker safety, what does OSHA require?",
    "a": [
      "Continuous misting during use",
      "A respirator for the operator as the only dust control",
      "A negative-air unit at the far end of the roof as the only control",
      "A visual dust check instead of a cutting control"
    ],
    "correct": 0,
    "explanation": "The cutting machine must be continuously misted during use. Dust-collection requirements also depend on the roof surface and operation; misting and dust collection are not simply interchangeable choices.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(ii)",
    "id": "nj-128",
    "legacyId": "Work Practices, Procedures, and Disposal|A crew plans to remove asbestos-containing roofing material using a power cutter. Which control is required for the cutting machine?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g)(8)(ii) — roofing",
    "rationale": "An operator's respirator, a distant negative-air unit, and a visual dust check do not replace required continuous misting of the cutter. The competent-person safety exception and additional dust-handling rules still matter."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "For Class I removal exceeding 25 linear or 10 square feet of TSI or surfacing ACM, which answer describes OSHA’s additional control-method requirement?",
    "a": [
      "Use a specified Class I control method or a compliant alternative method",
      "Critical barriers alone as the complete control for every operation",
      "A respirator program in place of a work-area control",
      "A positive-pressure enclosure with filtered supply air"
    ],
    "correct": 0,
    "explanation": "The employer must use a method specified in §1926.1101(g)(5), or meet the alternative-method conditions in (g)(6). A negative-pressure enclosure is one permitted approach; it is not the only option.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-129",
    "legacyId": "Work Practices, Procedures, and Disposal|During Class I work involving more than 25 linear or 10 square feet of TSI or surfacing material, which setup is generally required unless an allowed alternative is used?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Use a specified Class I method or meet the alternative-method conditions. Critical barriers alone for every operation, a respirator program alone, and positive pressure do not establish compliant work-area controls."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What should be done with impermeable dropcloths used beneath certain Class II removal operations?",
    "a": [
      "Keep them in place until they are cleaned with a HEPA vacuum or otherwise disposed of properly",
      "Fold and store them without cleaning until final clearance",
      "Dry brush them before folding for reuse",
      "Remove them before cleaning the surrounding work area"
    ],
    "correct": 0,
    "explanation": "Dropcloths used to capture asbestos debris must be cleaned with a HEPA vacuum or disposed of in a manner that prevents fiber release.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-130",
    "legacyId": "Work Practices, Procedures, and Disposal|What should be done with impermeable dropcloths used beneath certain Class II removal operations?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Do not fold and store contaminated dropcloths without controlled cleaning or disposal. Dry brushing can release fibers, and premature removal can spread remaining contamination."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A supervisor wants employees to take contaminated protective clothing home for washing. Is that acceptable?",
    "a": [
      "No; the employer must ensure laundering is performed without releasing asbestos and inform the launderer of the hazard",
      "Yes, if the employee launders them separately from family clothes",
      "Yes, if they are sealed in a bag for the journey home",
      "Yes, if the employee has no respiratory symptoms"
    ],
    "correct": 0,
    "explanation": "Contaminated work clothing may not be taken home for ordinary laundering; the employer must control handling and communicate the asbestos hazard to whoever launders it.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(i)(2)",
    "id": "nj-131",
    "legacyId": "Work Practices, Procedures, and Disposal|A supervisor wants employees to take contaminated protective clothing home for washing. Is that acceptable?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(i)(2) — contaminated clothing",
    "rationale": "Separate home loads, sealed transport, or absence of symptoms do not make ordinary take-home laundering an acceptable contamination-control system."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When a waste bag's exterior becomes contaminated inside the regulated area, what is the best action before it leaves containment?",
    "a": [
      "Clean it or place it into a clean impermeable second container",
      "Apply a second label without addressing surface contamination",
      "Carry it outside first, then clean it in an occupied area",
      "Dry-brush the exterior before transport"
    ],
    "correct": 0,
    "explanation": "Waste containers must be handled so their exteriors do not spread contamination; cleaning or controlled double-container handling prevents fiber migration.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-132",
    "legacyId": "Work Practices, Procedures, and Disposal|When a waste bag's exterior becomes contaminated inside the regulated area, what is the best action before it leaves containment?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "A label does not remove exterior contamination. Clean or contain it before passing through clean areas; do not dry-brush it into the air."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why should HVAC openings in or serving an asbestos work area be isolated when required by the work plan?",
    "a": [
      "To prevent fibers from entering the ventilation system and spreading",
      "To replace the need for critical barriers at openings",
      "To make the work area positively pressurized",
      "To eliminate personal exposure monitoring"
    ],
    "correct": 0,
    "explanation": "Isolating ventilation pathways helps keep asbestos fibers from migrating to other building areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-133",
    "legacyId": "Work Practices, Procedures, and Disposal|Why should HVAC openings in or serving an asbestos work area be isolated when required by the work plan?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Isolation blocks a ventilation pathway for migration. It does not automatically replace other critical barriers or personal monitoring, and positive pressure is not the goal."
  },
  {
    "category": "Testing Methodologies",
    "q": "Before or at the start of an asbestos operation, what must the employer ensure regarding the initial exposure assessment?",
    "a": [
      "A competent person performs an assessment of the operation",
      "A low visual dust level during a brief trial",
      "A plan to use supplied-air respirators",
      "A clearance sample from an unrelated completed project"
    ],
    "correct": 0,
    "explanation": "A competent person must perform an initial exposure assessment before or at the start of the operation. A valid negative exposure assessment is evidence used under the rule; it is not permission to skip assessing the operation.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-134",
    "legacyId": "Testing Methodologies|Initial exposure monitoring may be omitted only when the employer has made what kind of determination for the operation?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Visual dust checks, planned respirator use, and unrelated clearance results do not replace the required competent-person exposure assessment."
  },
  {
    "category": "Testing Methodologies",
    "q": "If employee exposure may reasonably exceed the excursion limit during a short high-dust task, which sampling approach is most relevant?",
    "a": [
      "A 30-minute breathing-zone sample representing the highest expected exposure",
      "An eight-hour stationary sample outside containment",
      "A bulk sample from the highest-asbestos material",
      "A 15-minute area sample in the clean room"
    ],
    "correct": 0,
    "explanation": "The excursion limit is evaluated with a 30-minute employee breathing-zone sample representing the employee's highest expected exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-135",
    "legacyId": "Testing Methodologies|If employee exposure may reasonably exceed the excursion limit during a short high-dust task, which sampling approach is most relevant?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "The short-term limit requires the relevant duration and representative personal exposure. Area samples, bulk analysis, and temperature readings do not provide that result."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Wet removal is planned near energized wiring. What is the supervisor's best approach?",
    "a": [
      "Have the electrical hazard evaluated and de-energize or protect the system as required before wet work",
      "Rely only on the worker's respiratory protection",
      "Leave circuits energized because wet methods are mandatory",
      "Begin wet work and evaluate wiring only if a fault occurs"
    ],
    "correct": 0,
    "explanation": "Wet methods can increase shock risk, so electrical hazards must be controlled as part of pre-job planning.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-136",
    "legacyId": "Additional Safety Hazards|Wet removal is planned near energized wiring. What is the supervisor's best approach?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Respiratory protection does not control electrical shock. Evaluate the electrical system before introducing water rather than waiting for a fault."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "A worker in protective clothing becomes confused and unsteady in hot containment. What is the supervisor’s best response?",
    "a": [
      "Treat it as a medical emergency, remove the worker from heat, and obtain emergency help",
      "Have the worker rest in the equipment room without further assessment",
      "Wait for the next scheduled break to reassess",
      "Offer water and return the worker to removal once sweating resumes"
    ],
    "correct": 0,
    "explanation": "Altered mental status during heat exposure can signal a medical emergency. Obtain emergency help, move the worker out of the heat safely, and begin appropriate cooling. Sweating does not rule out heat stroke.",
    "source": "https://www.osha.gov/heat-exposure/illness-first-aid",
    "id": "nj-137",
    "legacyId": "Additional Safety Hazards|A worker in full protective clothing becomes confused, unsteady, and stops sweating in a hot containment. What should the supervisor do?",
    "kind": "Scenario",
    "sourceLabel": "OSHA — heat illness and first aid",
    "rationale": "Confusion and unsteadiness in heat require emergency action. Waiting for a break, resting without assessment, or sending the worker back after water or sweating resumes can delay essential treatment."
  },
  {
    "category": "Regulations",
    "q": "Under the asbestos NESHAP, who must thoroughly inspect an affected facility for asbestos before a demolition or renovation begins?",
    "a": [
      "The owner or operator of the demolition or renovation activity",
      "The asbestos waste transporter",
      "The employees performing the removal",
      "The laboratory that will analyze clearance samples"
    ],
    "correct": 0,
    "explanation": "The asbestos NESHAP requires the owner or operator to thoroughly inspect the affected facility or affected part of the facility before regulated demolition or renovation.",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.145",
    "id": "nj-138",
    "legacyId": "Regulations|Under the asbestos NESHAP, who must thoroughly inspect an affected facility for asbestos before a demolition or renovation begins?",
    "kind": "Scenario",
    "sourceLabel": "EPA §61.145 — demolition and renovation",
    "rationale": "The owner or operator has the inspection responsibility. The transporter, removal employees, or clearance laboratory do not assume that duty simply by taking part in the project."
  },
  {
    "category": "Regulations",
    "q": "For a facility demolition in which no asbestos is found, does the federal asbestos NESHAP notification requirement automatically disappear?",
    "a": [
      "No; qualifying demolitions generally still require notification",
      "Yes, because negative inspection results exempt all demolitions",
      "Yes, if exposure will remain below the OSHA PEL",
      "Yes, if the owner notifies workers instead"
    ],
    "correct": 0,
    "explanation": "NESHAP demolition notification generally applies even when no asbestos is present, subject to the regulation's scope and limited exceptions.",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.145",
    "id": "nj-139",
    "legacyId": "Regulations|For a facility demolition in which no asbestos is found, does the federal asbestos NESHAP notification requirement automatically disappear?",
    "kind": "Scenario",
    "sourceLabel": "EPA §61.145 — demolition and renovation",
    "rationale": "A negative asbestos inspection does not by itself exempt a covered demolition from notification. OSHA exposure limits and worker notices answer different questions."
  },
  {
    "category": "Regulations",
    "q": "Who is an accredited asbestos project designer under the federal model accreditation framework?",
    "a": [
      "A person trained and accredited to design response actions for schools or public and commercial buildings",
      "An accredited worker who signs the daily log",
      "A licensed waste hauler who selects the landfill",
      "An inspector who collects one bulk sample"
    ],
    "correct": 0,
    "explanation": "EPA's accreditation framework establishes a distinct project-designer discipline for designing asbestos response actions.",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-763/subpart-E/appendix-Appendix%20C%20to%20Subpart%20E%20of%20Part%20763",
    "id": "nj-140",
    "legacyId": "Regulations|Who is an accredited asbestos project designer under the federal model accreditation framework?",
    "kind": "Scenario",
    "sourceLabel": "EPA Model Accreditation Plan — project designers",
    "rationale": "Project design is a distinct accreditation discipline. A worker, waste hauler, or inspector does not gain design accreditation merely by performing those roles."
  },
  {
    "category": "Legal Considerations",
    "q": "A supervisor discovers that a required NJ worker permit has expired during an active project. What is the proper response?",
    "a": [
      "Remove the employee from regulated asbestos work until valid authorization is restored",
      "Keep the worker in containment while a renewal application is pending",
      "Allow the worker to finish the shift under the supervisor's permit",
      "Record the expired permit and continue if training remains current"
    ],
    "correct": 0,
    "explanation": "Personnel performing covered asbestos work must hold current required permits; falsifying or sharing credentials is not an acceptable substitute.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-141",
    "legacyId": "Legal Considerations|A supervisor discovers that a required NJ worker permit has expired during an active project. What is the proper response?",
    "kind": "Scenario",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "A renewal application, a supervisor's permit, or current training is not a substitute for the required valid individual permit."
  },
  {
    "category": "Legal Considerations",
    "q": "Why should a supervisor document a containment failure and the corrective actions taken?",
    "a": [
      "To create an accurate compliance record and show how the hazard was controlled",
      "To establish that no exposure could have occurred",
      "To replace any required corrective measures",
      "To avoid reevaluating the exposure assessment"
    ],
    "correct": 0,
    "explanation": "Accurate contemporaneous records support regulatory compliance, exposure evaluation, and accountability for corrective action.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-142",
    "legacyId": "Legal Considerations|Why should a supervisor document a containment failure and the corrective actions taken?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Documentation records the failure and response. It does not prove zero exposure or replace corrective work, notifications, or reassessment."
  },
  {
    "category": "Supervisory",
    "q": "A worker reports visible debris outside containment. What should the competent person do first?",
    "a": [
      "Stop or restrict affected work, secure the area, and evaluate and correct the breach",
      "Wait for final clearance before inspecting the area",
      "Increase negative air inside without examining the opening",
      "Have the worker clean it during the next shift"
    ],
    "correct": 0,
    "explanation": "The competent person must act promptly to identify and correct asbestos hazards and prevent further migration or exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-143",
    "legacyId": "Supervisory|A worker reports visible debris outside containment. What should the competent person do first?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Secure, evaluate, and correct the suspected breach promptly. Later clearance, increasing airflow without inspecting the breach, and postponing cleanup do not resolve the immediate concern."
  },
  {
    "category": "Supervisory",
    "q": "A subcontractor proposes a faster removal method that is not covered by the exposure assessment or work plan. What should the supervisor do?",
    "a": [
      "Pause the change and evaluate the method, exposure, and required controls before authorizing it",
      "Use the prior assessment if the same ACM is involved",
      "Try the new method for one shift before revising controls",
      "Accept the method if a respirator is worn"
    ],
    "correct": 0,
    "explanation": "Changed methods can change exposures and required controls; the competent person must evaluate the conditions before work proceeds.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-144",
    "legacyId": "Supervisory|A subcontractor proposes a faster removal method that is not covered by the exposure assessment or work plan. What should the supervisor do?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "A changed method can change exposure and controls. The same material, a one-shift trial, or wearing a respirator does not establish that the proposed method is covered by the existing assessment."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the correct order of a three-stage personnel decontamination facility when traveling from the clean side toward the asbestos work area?",
    "a": [
      "Clean room, shower, equipment room, work area",
      "Equipment room, clean room, shower, work area",
      "Shower, equipment room, clean room, work area",
      "Clean room, equipment room, shower, work area"
    ],
    "correct": 0,
    "explanation": "The clean room is on the uncontaminated side, the shower separates the clean and contaminated rooms, and the equipment room connects toward the regulated work area.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-145",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the correct order of a three-stage personnel decontamination facility when traveling from the clean side toward the asbestos work area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "The shower separates the clean room from the equipment room; follow the direction given in the question."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When leaving an asbestos work area through a three-stage personnel decontamination facility, what is the correct sequence?",
    "a": [
      "Equipment room, shower, clean room",
      "Clean room, shower, equipment room",
      "Shower, clean room, equipment room",
      "Equipment room, clean room, shower"
    ],
    "correct": 0,
    "explanation": "A worker exits the regulated area into the equipment room, passes through the shower, and then enters the clean room.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-146",
    "legacyId": "Work Practices, Procedures, and Disposal|When leaving an asbestos work area through a three-stage personnel decontamination facility, what is the correct sequence?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Leaving reverses the entry direction: contaminated equipment room first, shower second, clean room last."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Where should a worker remove contaminated disposable protective clothing when exiting a Class I regulated area?",
    "a": [
      "In the equipment room",
      "In the shower after removing the respirator",
      "In the clean room before changing into street clothes",
      "In the waste load-out area after bagging debris"
    ],
    "correct": 0,
    "explanation": "The equipment room is the contaminated change area used for removing and containing work clothing and equipment.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-147",
    "legacyId": "Work Practices, Procedures, and Disposal|Where should a worker remove contaminated disposable protective clothing when exiting a Class I regulated area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "The equipment room is the contaminated change area before showering. The clean room and waste route are not substitutes, and contaminated clothing is not carried into the shower for removal after taking off the respirator."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What should a worker generally do with a required respirator while passing from the equipment room into the shower?",
    "a": [
      "Keep it on until it has been washed and the worker is in the shower",
      "Remove it in the equipment room before entering the shower",
      "Remove it at the shower entrance before washing it",
      "Keep it unwashed and place it in the clean room"
    ],
    "correct": 0,
    "explanation": "OSHA's Class I decontamination procedure keeps the respirator on while the employee enters the shower and requires the employee to wash it before removal.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-148",
    "legacyId": "Work Practices, Procedures, and Disposal|What should a worker generally do with a required respirator while passing from the equipment room into the shower?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "OSHA’s sequence retains the respirator into the shower and requires washing it before removal."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Where are employees' street clothes and uncontaminated personal items kept in a three-stage decontamination facility?",
    "a": [
      "In the clean room",
      "In the equipment room in a closed locker",
      "In the shower room beyond the contaminated side",
      "Inside containment beneath a protective dropcloth"
    ],
    "correct": 0,
    "explanation": "The clean room is equipped for changing into and out of street clothing and must remain free of asbestos contamination.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-149",
    "legacyId": "Work Practices, Procedures, and Disposal|Where are employees' street clothes and uncontaminated personal items kept in a three-stage decontamination facility?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Street clothes belong on the clean side. A locker in the contaminated equipment room, a shower location, or a dropcloth inside containment does not make the area clean."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why is the shower positioned between the equipment room and the clean room?",
    "a": [
      "To prevent employees from reaching the clean side without washing off contamination",
      "To let workers choose whether to pass through the shower",
      "To make the clean room a suitable waste-storage area",
      "To allow contaminated equipment to bypass cleaning"
    ],
    "correct": 0,
    "explanation": "The arrangement forces personnel to pass through the shower between the contaminated and clean sides of the facility.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-150",
    "legacyId": "Work Practices, Procedures, and Disposal|Why is the shower positioned between the equipment room and the clean room?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "The arrangement provides a mandatory transition through cleaning; it is not a bypass or waste-storage route."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "For Class I work requiring the full three-stage decontamination area, what is OSHA’s standard location arrangement?",
    "a": [
      "Adjacent and connected to it",
      "Nearby but across an occupied corridor",
      "At the same facility with no direct connection",
      "Inside the waste truck loading area"
    ],
    "correct": 0,
    "explanation": "The standard arrangement is adjacent and connected to the regulated area, with an equipment room, shower, and clean room in series. OSHA also specifies procedures for cases where an adjacent shower is not feasible.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-151",
    "legacyId": "Work Practices, Procedures, and Disposal|How must a required Class I personnel decontamination area be located in relation to the regulated area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "The standard full-unit arrangement is adjacent and connected. A public corridor, general proximity, or waste-loading area does not meet that arrangement; any allowed non-adjacent-shower procedure has additional conditions."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Does OSHA assign one universal minimum floor dimension, such as 3 feet by 3 feet, to every decontamination chamber?",
    "a": [
      "No; the required arrangement and facilities must be adequate, but OSHA does not give every chamber one universal fixed-foot dimension",
      "Yes; every chamber must be exactly 3 feet by 3 feet",
      "Yes; every chamber must be at least 4 feet by 4 feet",
      "Yes; the same minimum dimension applies regardless of other rules"
    ],
    "correct": 0,
    "explanation": "OSHA specifies the required rooms, connection, equipment, and procedures, while a fixed dimension may instead come from a state rule, contract specification, or site plan.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-152",
    "legacyId": "Work Practices, Procedures, and Disposal|Does OSHA assign one universal minimum floor dimension, such as 3 feet by 3 feet, to every decontamination chamber?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "A fixed chamber size should not be invented from the OSHA arrangement rule. Other applicable state requirements, specifications, and site plans still need to be checked."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Under OSHA sanitation requirements, what shower capacity is generally required when employees must shower during the same shift?",
    "a": [
      "At least one shower for each 10 employees of each sex, or numerical fraction thereof",
      "At least one shower for every 10 employees total, regardless of sex",
      "At least one shower for every 20 employees of each sex",
      "Exactly one shower per work area regardless of crew size"
    ],
    "correct": 0,
    "explanation": "OSHA's sanitation rule generally requires one shower for each 10 employees of each sex, or numerical fraction thereof, who must shower during the same shift.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.141",
    "id": "nj-153",
    "legacyId": "Work Practices, Procedures, and Disposal|Under OSHA sanitation requirements, what shower capacity is generally required when employees must shower during the same shift?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.141(d)(3), incorporated by §1926.1101(j)(1)(i)(B)",
    "rationale": "Count one shower per ten employees of each sex, or fraction thereof, who must shower during the shift. Do not combine all sexes into one count, use a twenty-person ratio, or assume one shower always suffices."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which shower provisions are required by OSHA sanitation rules?",
    "a": [
      "Hot and cold or tepid running water, soap or another cleansing agent, and individual towels",
      "Cold running water, soap, and shared towels",
      "Tepid water without cleansing agents",
      "Cleansing wipes as a substitute for required running-water showers"
    ],
    "correct": 0,
    "explanation": "Required showers must provide hot and cold water feeding a common discharge line or tepid running water, cleansing agents, and individual towels.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.141",
    "id": "nj-154",
    "legacyId": "Work Practices, Procedures, and Disposal|Which shower provisions are required by OSHA sanitation rules?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.141(d)(3), incorporated by §1926.1101(j)(1)(i)(B)",
    "rationale": "Cold water alone, missing cleansing agents, and shared towels do not meet the stated shower provisions."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What construction principle is most important at the transition between the decontamination facility and the regulated area?",
    "a": [
      "Personnel must follow a controlled path that maintains separation between contaminated and clean areas",
      "The clean room should act as an overflow equipment room",
      "The shower should be bypassed when workers make short exits",
      "All connecting openings should remain propped open"
    ],
    "correct": 0,
    "explanation": "The facility must maintain a controlled clean-to-contaminated transition and prevent asbestos contamination from migrating to clean areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-155",
    "legacyId": "Work Practices, Procedures, and Disposal|What construction principle is most important at the transition between the decontamination facility and the regulated area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Using the clean room for dirty equipment, bypassing the shower, or propping every opening defeats separation of the clean and contaminated sides."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Before tools or reusable equipment leave the regulated area, what must occur?",
    "a": [
      "They must be cleaned or appropriately contained so asbestos contamination is not carried outside",
      "A visual check alone, regardless of surface contamination",
      "A dry brushing before transfer into clean areas",
      "A label stating that cleaning will occur at the next project"
    ],
    "correct": 0,
    "explanation": "Equipment and surfaces must be cleaned with methods such as HEPA vacuuming or wet wiping, or contained when cleaning is not feasible, to prevent fiber release and migration.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-156",
    "legacyId": "Work Practices, Procedures, and Disposal|Before tools or reusable equipment leave the regulated area, what must occur?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "A material type, label, or visual check alone does not remove surface contamination. Dry brushing can re-suspend fibers."
  },
  {
    "id": "nj-157",
    "category": "Health and Medical Considerations",
    "q": "A worker performs Class I work on 18 days and Class III work on 14 other days in the same year. All days count. Has the work-duration trigger for medical surveillance been met?",
    "a": [
      "Yes; the combined total is 32 days",
      "No; each work class must reach 30 days",
      "No; only Class I days count",
      "No; the days must occur consecutively"
    ],
    "correct": 0,
    "explanation": "The covered days add together across Classes I, II, and III. Here, 18 + 14 = 32 counted days.",
    "rationale": "There is no separate 30-day minimum for each class and no consecutive-day condition.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)(1)(i)(A)",
    "sourceLabel": "OSHA §1926.1101(m)(1)(i)(A)",
    "kind": "Scenario"
  },
  {
    "id": "nj-158",
    "category": "Health and Medical Considerations",
    "q": "An employee has 29 counted Class I days. On another day, Class II work on intact material takes 45 minutes including cleanup, with full compliance with required work practices. Exposures remain below both limits. Does that extra day bring the work-duration count to 30?",
    "a": [
      "Yes; any asbestos work counts as a full day",
      "No; this Class II day falls within the counting exception",
      "Yes; the exception applies only to Class III",
      "No; Class II work never counts"
    ],
    "correct": 1,
    "explanation": "The qualifying short-duration Class II day is excluded. The counted total remains 29 for this duration trigger.",
    "rationale": "Class II ordinarily can count. The exclusion depends on intact material, total time of one hour or less including cleanup, and full work-practice compliance. Other medical requirements may still apply.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)(1)(i)(A)",
    "sourceLabel": "OSHA §1926.1101(m)(1)(i)(A)",
    "kind": "Scenario"
  },
  {
    "id": "nj-159",
    "category": "Health and Medical Considerations",
    "q": "An intact-material Class III operation takes 50 minutes, followed by 20 minutes of cleanup. Does the one-hour-or-less day-counting exception apply?",
    "a": [
      "Yes; only disturbance time is counted",
      "Yes; all intact-material work is excluded",
      "No; the operation including cleanup takes 70 minutes",
      "No; Class III never qualifies for an exception"
    ],
    "correct": 2,
    "explanation": "Count the entire operation, including cleanup: 50 + 20 = 70 minutes. This exceeds the exception’s one-hour duration.",
    "rationale": "The exception is not based solely on disturbance time, and intact material alone does not establish eligibility.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)(1)(i)(A)",
    "sourceLabel": "OSHA §1926.1101(m)(1)(i)(A)",
    "kind": "Scenario"
  },
  {
    "id": "nj-160",
    "category": "Health and Medical Considerations",
    "q": "A new worker will use a required negative-pressure respirator on the first day of asbestos work. May the employer wait until 30 counted work days to obtain the required medical determination?",
    "a": [
      "Yes; the annual surveillance trigger controls every medical requirement",
      "Yes; if the worker performs a successful seal check",
      "Yes; if exposure is below the excursion limit",
      "No; required medical clearance must precede assignment/use"
    ],
    "correct": 3,
    "explanation": "The medical requirements for required respirator use apply before assignment/use. The annual work-duration trigger does not postpone that clearance.",
    "rationale": "A seal check assesses the seal, and an exposure result assesses airborne concentration; neither determines medical ability to use the respirator.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "sourceLabel": "OSHA §1926.1101(m)(1)(i)(B), (m)(2)(i)(A)",
    "kind": "Scenario"
  },
  {
    "id": "nj-161",
    "category": "Testing Methodologies",
    "q": "A worker’s exposure averages 0.16 f/cc for four hours and 0.02 f/cc for four hours. What is the eight-hour TWA?",
    "a": [
      "0.18 f/cc",
      "0.09 f/cc",
      "0.07 f/cc",
      "0.16 f/cc"
    ],
    "correct": 1,
    "explanation": "The TWA is [(0.16 × 4) + (0.02 × 4)] ÷ 8 = 0.09 f/cc. This is below the 0.1 f/cc eight-hour limit.",
    "rationale": "Adding concentrations gives 0.18 but omits averaging. The lower block does not subtract exposure; the highest block alone is not the full-shift TWA. This result does not establish compliance with the separate excursion limit.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "kind": "Scenario"
  },
  {
    "id": "nj-162",
    "category": "Testing Methodologies",
    "q": "Representative monitoring shows an eight-hour TWA of 0.08 f/cc and a highest-exposure 30-minute result of 1.2 f/cc. Which conclusion follows?",
    "a": [
      "Both limits are met because the TWA is below 0.1",
      "Only the eight-hour limit is exceeded",
      "The excursion limit is exceeded despite the below-limit TWA",
      "Both limits are exceeded"
    ],
    "correct": 2,
    "explanation": "Compare each measurement with its own limit: 0.08 is below the 0.1 eight-hour limit; 1.2 exceeds the 1.0 thirty-minute limit.",
    "rationale": "A low full-shift average does not cancel a short-duration exceedance, and the 30-minute limit cannot be used to judge the eight-hour result.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "kind": "Scenario"
  },
  {
    "id": "nj-163",
    "category": "Testing Methodologies",
    "q": "A supervisor proposes using an air sample at the clean-room doorway to represent a worker removing ACM inside containment. What is the main problem?",
    "a": [
      "The location may not represent the worker’s breathing-zone exposure",
      "Any air sample is invalid during wet work",
      "Personal samples measure bulk asbestos content",
      "Doorway samples always exceed personal exposure"
    ],
    "correct": 0,
    "explanation": "Employee exposure measurements must represent the employee’s breathing-zone exposure during the operation. A clean-room area sample answers a different question.",
    "rationale": "Area sampling is not inherently invalid, but it cannot automatically stand in for a representative personal sample.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)(1)",
    "sourceLabel": "OSHA §1926.1101(f)(1) — representative monitoring",
    "kind": "Scenario"
  },
  {
    "id": "nj-164",
    "category": "Personal Protective and Other Equipment",
    "q": "An employee was fit tested in March. In June the employer supplies a different size of the same respirator model. What is required before use?",
    "a": [
      "Wait until next March for the annual test",
      "Perform a seal check only",
      "Fit test with the new size before use",
      "Use the old test if the brand is unchanged"
    ],
    "correct": 2,
    "explanation": "A different facepiece size requires fit testing with the facepiece to be used, even when the annual anniversary has not arrived.",
    "rationale": "Annual testing is a minimum recurring interval, not permission to change size without testing. A seal check does not replace a fit test.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "kind": "Scenario"
  },
  {
    "id": "nj-165",
    "category": "Personal Protective and Other Equipment",
    "q": "An employee has medical clearance and a current fit test for the assigned tight-fitting respirator. What must they still do each time they put it on?",
    "a": [
      "Repeat the full annual fit test",
      "Perform a user seal check",
      "Obtain another medical examination",
      "Replace the facepiece"
    ],
    "correct": 1,
    "explanation": "A user seal check is required at each donning. Medical clearance and fit testing serve different purposes.",
    "rationale": "Neither a new medical exam, a new facepiece, nor the entire fit-test procedure is automatically required at each donning.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)(1)(iii)",
    "sourceLabel": "OSHA §1910.134(g)(1)(iii) — seal checks",
    "kind": "Scenario"
  },
  {
    "id": "nj-166",
    "category": "Work Practices, Procedures, and Disposal",
    "q": "An authorized worker exits Class I containment through a three-stage decontamination unit. Where does the worker remove contaminated protective clothing before showering?",
    "a": [
      "Clean room",
      "Equipment room",
      "Outside the building",
      "Clean side of the shower exit"
    ],
    "correct": 1,
    "explanation": "The equipment room receives the worker from the regulated area and is where contaminated protective clothing is removed.",
    "rationale": "Moving contaminated clothing to the clean room or beyond the controlled route can carry contamination outward.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)(1)(ii)",
    "sourceLabel": "OSHA §1926.1101(j)(1)(ii) — exit procedures",
    "kind": "Scenario"
  },
  {
    "id": "nj-167",
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A crew removing asbestos floor tile proposes sanding the backing because intact removal is slow. Which response follows OSHA’s flooring requirements?",
    "a": [
      "Permit sanding if the crew wears respirators",
      "Permit sanding only below the eight-hour PEL",
      "Do not sand the flooring or its backing",
      "Permit sanding when cleanup uses a HEPA vacuum"
    ],
    "correct": 2,
    "explanation": "The flooring requirements prohibit sanding flooring or its backing. Respirators and cleanup do not waive that prohibition.",
    "rationale": "The proposed alternatives treat other protections as exceptions to a prohibited method; they are not.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(i)",
    "sourceLabel": "OSHA §1926.1101(g)(8)(i) — flooring",
    "kind": "Scenario"
  },
  {
    "id": "nj-168",
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A Class I worksite was inspected at the start of the shift. Later, an employee requests another inspection. What should happen?",
    "a": [
      "Wait until the next shift because one inspection is sufficient",
      "Inspect only if the employee provides an air sample",
      "The competent person inspects in response to the request",
      "Refer the request only to the building owner"
    ],
    "correct": 2,
    "explanation": "Class I inspections occur at least once each work shift and at any time an employee requests one.",
    "rationale": "Once per shift is a minimum, not a cap. The employee does not need to prove an exceedance to request an inspection.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)(3)",
    "sourceLabel": "OSHA §1926.1101(o)(3) — inspections",
    "kind": "Scenario"
  },
  {
    "id": "nj-169",
    "category": "General Topics Related to Asbestos",
    "q": "A crew removes asbestos pipe insulation, while another removes asbestos floor tile. How are those removal activities classified?",
    "a": [
      "Pipe insulation: Class II; floor tile: Class I",
      "Both: Class III because hand tools are used",
      "Pipe insulation: Class I; floor tile: Class II",
      "Both: Class IV if the material is wet"
    ],
    "correct": 2,
    "explanation": "Pipe insulation is thermal system insulation, whose removal is Class I. Floor tile removal is other ACM removal, Class II.",
    "rationale": "Hand tools and wetting are methods, not substitutes for classifying the material and work activity.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "sourceLabel": "OSHA §1926.1101(b) — work classes",
    "kind": "Scenario"
  },
  {
    "id": "nj-170",
    "category": "Regulations",
    "q": "An NJ contractor has a current employer asbestos license. A new employee has completed training but has not obtained the required individual permit. May the employer license substitute for the employee permit?",
    "a": [
      "Yes; one company license covers all personnel",
      "Yes; if a permitted supervisor is present",
      "No; the required individual permit is separate",
      "Yes; during the employee’s first 30 days"
    ],
    "correct": 2,
    "explanation": "Employer licensing and individual worker/supervisor permits are separate requirements for covered NJ work.",
    "rationale": "Training and supervision do not turn an employer license into an individual permit. This is not a 30-day medical-surveillance issue.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-3 and 12:120-5 — licenses and permits",
    "kind": "Scenario"
  },
  {
    "id": "nj-171",
    "category": "Regulations",
    "q": "A covered NJ asbestos job will finish later than the completion date in its original notification. What does the notification rule require?",
    "a": [
      "No action if the start date was correct",
      "An amended written notification",
      "Only a note in the final invoice",
      "Only a verbal notice to the crew"
    ],
    "correct": 1,
    "explanation": "An extension beyond the notified completion date is a specified reason for an amended written notification.",
    "rationale": "A project invoice or crew briefing does not amend the agency notification.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-7.2(c) — amended notifications",
    "kind": "Scenario"
  },
  {
    "id": "nj-172",
    "category": "Legal Considerations",
    "q": "An owner requests immediate asbestos work and calls it an emergency. Under NJ’s notice-waiver procedure, is the owner’s request alone enough to waive the 10-calendar-day notice?",
    "a": [
      "Yes; an owner can declare the waiver",
      "Yes; if the contractor records the request",
      "No; the appropriate Commissioner must authorize the emergency waiver",
      "Yes; if the crew has current permits"
    ],
    "correct": 2,
    "explanation": "NJ’s emergency procedure requires supporting information and authorization by the Commissioner before work proceeds under the waived notice period.",
    "rationale": "The owner’s request, contractor documentation, and current permits do not themselves grant a waiver.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-7.2(d) — emergency waiver",
    "kind": "Scenario"
  },
  {
    "id": "nj-173",
    "category": "Legal Considerations",
    "q": "A manager asks a supervisor to change a recorded inspection date to a day when no inspection occurred. Which response best preserves an accurate record?",
    "a": [
      "Change the date if the later inspection found no problems",
      "Keep the actual date and document any legitimate correction transparently",
      "Replace the record with an unsigned version",
      "Have another worker sign the earlier date"
    ],
    "correct": 1,
    "explanation": "Records should describe the inspection that actually occurred. A later satisfactory inspection does not make an earlier invented date accurate.",
    "rationale": "Changing the signer, deleting the original, or relying on later results does not correct a false historical claim.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "NJ Asbestos Control and Licensing Act — compliance and enforcement",
    "kind": "Scenario"
  },
  {
    "id": "nj-174",
    "category": "Supervisory",
    "q": "A crew changes from intact hand removal to a method that breaks the material. The prior exposure assessment covered only intact removal. What should the competent person do before approving the change?",
    "a": [
      "Carry over the old assessment because the material is unchanged",
      "Evaluate the changed operation, exposure, and required controls",
      "Approve the change if no dust is visible during the first minute",
      "Wait for final clearance to evaluate the change"
    ],
    "correct": 1,
    "explanation": "Changing the disturbance method can change exposure. The assessment and controls must represent the operation actually performed.",
    "rationale": "The same material, a brief visual check, or later clearance does not establish that the earlier assessment represents the new method.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment",
    "kind": "Scenario"
  },
  {
    "id": "nj-175",
    "category": "Additional Safety Hazards",
    "q": "Wet asbestos removal is planned beside electrical equipment. The crew has respirators and protective coveralls. What is still needed before work starts?",
    "a": [
      "An evaluation and control of electrical hazards",
      "Only a higher respirator protection factor",
      "Only additional asbestos air sampling",
      "No additional action if the material is kept wet"
    ],
    "correct": 0,
    "explanation": "Asbestos PPE does not establish electrical safety. Evaluate the electrical hazards and arrange appropriate de-energization or protection before wet work.",
    "rationale": "Respirator upgrades and fiber measurements do not control current through a wet work area.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — other job hazards",
    "kind": "Scenario"
  }
];
