// Original practice items based on public sources; not actual state-exam questions.
// Stable IDs preserve mistake-review links when wording changes.
const QUESTIONS = [
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which statement best describes asbestos?",
    "a": [
      "A synthetic plastic fiber",
      "A naturally occurring group of fibrous minerals",
      "A type of fiberglass insulation",
      "A chemical added to concrete"
    ],
    "correct": 1,
    "explanation": "Asbestos is a naturally occurring group of fibrous silicate minerals.",
    "id": "nj-001",
    "legacyId": "General Topics Related to Asbestos|Which statement best describes asbestos?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Fiberglass and synthetic plastic fibers are not the naturally occurring asbestos mineral group."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Friable asbestos-containing material is material that, when dry:",
    "a": [
      "Cannot release fibers",
      "Can be crumbled, pulverized, or reduced to powder by hand pressure",
      "Contains less than 1% asbestos",
      "Has been painted"
    ],
    "correct": 1,
    "explanation": "Friability is based on whether dry material can be crumbled, pulverized, or reduced to powder by hand pressure.",
    "id": "nj-002",
    "legacyId": "General Topics Related to Asbestos|Friable asbestos-containing material is material that, when dry:",
    "kind": "Recall",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.141",
    "sourceLabel": "EPA §61.141 — friable material",
    "rationale": "Friability is a dry hand-pressure property. Percentage, paint, and claims of zero fiber release do not define it."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which is one of the major commercial asbestos fiber types?",
    "a": [
      "Chrysotile",
      "Silicone",
      "Graphite",
      "Cellulose"
    ],
    "correct": 0,
    "explanation": "Chrysotile is a major commercial asbestos type.",
    "id": "nj-003",
    "legacyId": "General Topics Related to Asbestos|Which is one of the major commercial asbestos fiber types?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Silicone, graphite, and cellulose are not commercial asbestos mineral types."
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
      "Inflammation of the bronchial airways",
      "Cancer of the pleural lining",
      "Fluid accumulation around the lungs"
    ],
    "correct": 0,
    "explanation": "Asbestosis is a chronic fibrotic disease of the lungs caused by asbestos exposure.",
    "id": "nj-005",
    "legacyId": "Health and Medical Considerations|Asbestosis primarily involves:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Pleural cancer, airway inflammation, and pleural fluid are different conditions from lung-tissue fibrosis."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Mesothelioma is most strongly associated with cancer of the:",
    "a": [
      "Membranes lining the chest or abdominal cavities",
      "Air sacs within the lung tissue",
      "Lining of the large airways",
      "Lymph nodes in the chest"
    ],
    "correct": 0,
    "explanation": "Mesothelioma affects mesothelial linings, commonly the pleura and peritoneum.",
    "id": "nj-006",
    "legacyId": "Health and Medical Considerations|Mesothelioma is most strongly associated with cancer of the:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "The key is the mesothelial lining, rather than the lung air sacs, airways, or lymph nodes."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Smoking combined with occupational asbestos exposure:",
    "a": [
      "Raises mesothelioma risk by the same mechanism as lung cancer",
      "Can greatly increase lung-cancer risk",
      "Affects lung-cancer risk independently, without a combined effect",
      "Makes smoking the only relevant lung-cancer risk"
    ],
    "correct": 1,
    "explanation": "Smoking and asbestos exposure have a strong combined effect on lung-cancer risk.",
    "id": "nj-007",
    "legacyId": "Health and Medical Considerations|Smoking combined with occupational asbestos exposure:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Do not transfer the smoking interaction for lung cancer to mesothelioma, or dismiss the asbestos contribution."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Asbestos-related diseases commonly have:",
    "a": [
      "A long latency period",
      "Symptoms that reliably appear during the exposure shift",
      "Symptoms that must appear before medical surveillance applies",
      "A short enough latency to judge exposure by how the worker feels"
    ],
    "correct": 0,
    "explanation": "Many asbestos diseases develop years or decades after exposure.",
    "id": "nj-008",
    "legacyId": "Health and Medical Considerations|Asbestos-related diseases commonly have:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Immediate symptoms are not required for disease to develop later or for preventive requirements to apply."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Under OSHA’s construction asbestos rule, which exposure condition can trigger medical surveillance when it occurs on a combined total of 30 or more days per year?",
    "a": [
      "The PEL or excursion limit",
      "A bulk-material asbestos percentage alone",
      "The respirator fit factor alone",
      "The enclosure pressure differential alone"
    ],
    "correct": 0,
    "explanation": "Exposure at or above an applicable permissible exposure limit is a medical-surveillance trigger at 30 or more days per year. The Class I/II/III work-duration trigger is a separate basis for coverage.",
    "id": "nj-009",
    "legacyId": "Health and Medical Considerations|Under the OSHA construction asbestos standard, medical surveillance requirements can be triggered by employees engaged in certain asbestos work or exposure at/above:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Bulk asbestos percentage describes the material. A fit factor describes respirator fit, and enclosure pressure describes a control. None measures the employee’s airborne exposure against a limit."
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
      "The asbestos percentage in a bulk sample alone",
      "Expected airborne exposure and the protection required",
      "The assigned work class without considering exposure",
      "The protection used on the contractor's previous project"
    ],
    "correct": 1,
    "explanation": "Respirator selection must provide adequate protection for the anticipated exposure and task.",
    "id": "nj-011",
    "legacyId": "Personal Protective and Other Equipment|A respirator should be selected primarily according to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(h)(3)",
    "sourceLabel": "OSHA §1926.1101(h)(3) — respirator selection",
    "rationale": "Material percentage, work class, and prior equipment use cannot alone establish the required protection against expected exposure."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A tight-fitting respirator generally requires:",
    "a": [
      "A fit test",
      "A user seal check instead of a fit test",
      "A fit test only when leakage is reported",
      "A fit test with any facepiece of the same nominal size"
    ],
    "correct": 0,
    "explanation": "Tight-fitting respirators require fit testing and a proper face-to-facepiece seal.",
    "id": "nj-012",
    "legacyId": "Personal Protective and Other Equipment|A tight-fitting respirator generally requires:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "rationale": "A seal check is required at donning but is not a fit test. Fit testing must use the facepiece actually assigned."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Facial hair that crosses the sealing surface of a tight-fitting respirator:",
    "a": [
      "Is acceptable if the annual fit test was passed before the hair grew",
      "Is acceptable after tightening the straps",
      "Can interfere with the seal and is not permitted",
      "Is acceptable whenever measured exposure is below the PEL"
    ],
    "correct": 2,
    "explanation": "Nothing may interfere with the seal of a tight-fitting respirator.",
    "id": "nj-013",
    "legacyId": "Personal Protective and Other Equipment|Facial hair that crosses the sealing surface of a tight-fitting respirator:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "Past fit testing, strap adjustment, or a below-PEL result does not permit hair across the sealing surface."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "The main purpose of negative-air equipment in a containment is to:",
    "a": [
      "Provide a substitute for adequately wet removal",
      "Maintain airflow/pressure control and filter exhausted air",
      "Maintain positive pressure to push contaminants away from workers",
      "Establish final clearance without air sampling"
    ],
    "correct": 1,
    "explanation": "Negative-air systems help maintain pressure differential and exhaust air through HEPA filtration.",
    "id": "nj-014",
    "legacyId": "Personal Protective and Other Equipment|The main purpose of negative-air equipment in a containment is to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Negative air controls airflow and filtration. It does not replace wet methods or establish final clearance, and positive pressure can push contaminated air outward."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A basic method for reducing airborne fiber release while disturbing ACM is:",
    "a": [
      "Dry sweeping",
      "Wet methods",
      "Compressed air",
      "High-speed sanding"
    ],
    "correct": 1,
    "explanation": "Wet methods are a fundamental engineering/work-practice control for minimizing fiber release.",
    "id": "nj-015",
    "legacyId": "Work Practices, Procedures, and Disposal|A basic method for reducing airborne fiber release while disturbing ACM is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Dry sweeping, compressed air without capture, and high-speed sanding can increase airborne release rather than suppress it."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Asbestos debris should generally be cleaned using:",
    "a": [
      "A standard shop vacuum with a disposable paper bag",
      "Dry sweeping followed by a wet wipe",
      "HEPA vacuuming and wet cleaning",
      "Compressed air followed by local vacuuming"
    ],
    "correct": 2,
    "explanation": "HEPA vacuuming and wet cleaning are standard asbestos cleanup methods; dry sweeping and compressed air are generally prohibited.",
    "id": "nj-016",
    "legacyId": "Work Practices, Procedures, and Disposal|Asbestos debris should generally be cleaned using:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "An ordinary paper-bag vacuum is not a HEPA vacuum. Following dry sweeping or uncontrolled blowing with cleanup does not undo the initial release."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Before asbestos abatement begins, the supervisor should ensure the regulated/work area is:",
    "a": [
      "Posted only after the first exposure result exceeds the PEL",
      "Properly established, controlled, and posted",
      "Open to trained occupants without checking authorization",
      "Marked by barriers without entrance warning signs"
    ],
    "correct": 1,
    "explanation": "Access control, warning signs and proper work-area preparation are core asbestos controls.",
    "id": "nj-017",
    "legacyId": "Work Practices, Procedures, and Disposal|Before asbestos abatement begins, the supervisor should ensure the regulated/work area is:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(e)",
    "sourceLabel": "OSHA §1926.1101(e) — regulated areas",
    "rationale": "Set up access control and signs before work; do not wait for an above-limit result or substitute training alone for authorization."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Asbestos waste leaving the regulated area should be:",
    "a": [
      "Handled to prevent release of fibers and properly contained/labeled",
      "Double-bagged without labeling if the bags are transparent",
      "Labeled only when the waste reaches the disposal site",
      "Dried before packaging to reduce bag weight"
    ],
    "correct": 0,
    "explanation": "ACM waste must be handled, packaged, labeled and transported in a manner that prevents fiber release and meets applicable requirements.",
    "id": "nj-018",
    "legacyId": "Work Practices, Procedures, and Disposal|Asbestos waste leaving the regulated area should be:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "A transparent bag does not replace labeling. Labeling only at disposal and deliberately drying waste do not provide the required handling controls."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why are critical barriers installed during many containment setups?",
    "a": [
      "Create a substitute for decontamination facilities",
      "To isolate openings and help prevent fiber migration",
      "Provide a substitute for negative-air filtration",
      "Allow unfiltered exhaust through building openings"
    ],
    "correct": 1,
    "explanation": "Critical barriers seal openings and help isolate the asbestos work area.",
    "id": "nj-019",
    "legacyId": "Work Practices, Procedures, and Disposal|Why are critical barriers installed during many containment setups?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Sealing pathways complements filtration and decontamination. It does not replace either or authorize unfiltered exhaust."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which practice is generally prohibited for asbestos cleanup?",
    "a": [
      "HEPA vacuuming",
      "Wet wiping",
      "Dry sweeping",
      "Careful waste bagging"
    ],
    "correct": 2,
    "explanation": "Dry sweeping can re-aerosolize asbestos fibers and is prohibited.",
    "id": "nj-020",
    "legacyId": "Work Practices, Procedures, and Disposal|Which practice is generally prohibited for asbestos cleanup?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Wet wiping, HEPA vacuuming, and careful bagging suppress or contain contamination; dry sweeping can re-suspend it."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When a glove bag is used for appropriate asbestos work, it should be:",
    "a": [
      "Reused if the previous job produced no visible dust",
      "Used according to applicable OSHA procedures and kept intact",
      "Filled before its integrity is checked",
      "Used as a substitute for required respiratory protection"
    ],
    "correct": 1,
    "explanation": "Glove-bag operations have specific work-practice requirements; integrity and controlled procedures are essential.",
    "id": "nj-021",
    "legacyId": "Work Practices, Procedures, and Disposal|When a glove bag is used for appropriate asbestos work, it should be:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "A glove bag is not an automatic exemption from respirators or other controls. Follow the applicable procedures for inspection, use, and disposal."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A decontamination system is intended primarily to:",
    "a": [
      "Prevent asbestos contamination from being carried out of the regulated area",
      "Demonstrate that airborne exposure is below the PEL",
      "Provide the final waste-disposal location",
      "Replace the need to contain contaminated clothing"
    ],
    "correct": 0,
    "explanation": "Decontamination procedures limit migration of asbestos contamination to clean areas.",
    "id": "nj-022",
    "legacyId": "Work Practices, Procedures, and Disposal|A decontamination system is intended primarily to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Decontamination interrupts transfer from dirty to clean areas. It is neither an exposure assessment nor a waste-storage substitute."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "The preferred condition for ACM during removal is generally:",
    "a": [
      "Adequately wet, unless a specific exception applies",
      "Wetted only after the material reaches the floor",
      "Dry if workers wear full-face respirators",
      "Wetted only if visible dust develops"
    ],
    "correct": 0,
    "explanation": "Adequately wet methods are a primary fiber-control requirement, subject to specific regulatory exceptions.",
    "id": "nj-023",
    "legacyId": "Work Practices, Procedures, and Disposal|The preferred condition for ACM during removal is generally:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Waiting until debris is on the floor or dust becomes visible misses control during disturbance. Respirator choice alone does not waive wet methods."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "After gross removal, final cleaning should focus on:",
    "a": [
      "Obtaining clearance samples before removing remaining residue",
      "Removing visible residue and contamination using approved cleaning methods",
      "Removing large pieces while leaving fine residue for air filtration",
      "Dismantling barriers so outside air can dilute contamination"
    ],
    "correct": 1,
    "explanation": "Thorough cleaning is required before the work area can progress toward clearance/reoccupancy procedures.",
    "id": "nj-024",
    "legacyId": "Work Practices, Procedures, and Disposal|After gross removal, final cleaning should focus on:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Remaining visible residue must be addressed with approved cleaning. Air sampling, dilution, or filtration alone does not remove that residue."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which is the best reason to maintain containment integrity throughout abatement?",
    "a": [
      "To prevent fiber migration outside the controlled area",
      "Allow work to proceed without personal exposure monitoring",
      "Make worker decontamination unnecessary",
      "Establish a negative exposure assessment by inspection alone"
    ],
    "correct": 0,
    "explanation": "Containment integrity is essential for preventing contamination of adjacent areas.",
    "id": "nj-025",
    "legacyId": "Work Practices, Procedures, and Disposal|Which is the best reason to maintain containment integrity throughout abatement?",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Intact containment helps control migration; it does not itself establish a negative exposure assessment or replace monitoring and decontamination."
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
      "Fiber exposure and respirator fit, leaving electrical hazards to the owner",
      "Only hazards documented on the previous project",
      "Only hazards reported after workers enter containment"
    ],
    "correct": 0,
    "explanation": "Asbestos projects can involve numerous conventional construction and occupational hazards.",
    "id": "nj-027",
    "legacyId": "Additional Safety Hazards|Besides asbestos exposure, a supervisor should evaluate hazards such as:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Asbestos precautions do not address every construction hazard. Evaluate the actual site before entry rather than relying only on reports or a previous project."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Water used for wet methods can create an increased risk of:",
    "a": [
      "Electrical shock around energized equipment",
      "Oxygen enrichment in the enclosure",
      "Carbon monoxide generation from the water",
      "An increase in airborne asbestos caused by all wet methods"
    ],
    "correct": 0,
    "explanation": "Wet methods can create electrical hazards; electrical safety must be incorporated into planning.",
    "id": "nj-028",
    "legacyId": "Additional Safety Hazards|Water used for wet methods can create an increased risk of:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Water and energized equipment can create a shock path. The alternatives do not describe the direct conventional hazard introduced here."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Wearing protective clothing and respirators can contribute to:",
    "a": [
      "Heat stress",
      "Reduced need for scheduled rest breaks",
      "Lower physical workload at the same work rate",
      "Reliable prevention of dehydration"
    ],
    "correct": 0,
    "explanation": "PPE can increase heat load and physical stress.",
    "id": "nj-029",
    "legacyId": "Additional Safety Hazards|Wearing protective clothing and respirators can contribute to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Protective equipment can add workload and impede heat loss; it does not automatically reduce fatigue, dehydration, or rest requirements."
  },
  {
    "category": "Testing Methodologies",
    "q": "Personal air samples used to assess worker exposure are collected in the worker's:",
    "a": [
      "Breathing zone",
      "Nearest fixed area-sampling station",
      "Clean side of the decontamination unit",
      "Exhaust outlet of the negative-air machine"
    ],
    "correct": 0,
    "explanation": "Exposure monitoring uses breathing-zone samples representative of employee exposure.",
    "id": "nj-030",
    "legacyId": "Testing Methodologies|Personal air samples used to assess worker exposure are collected in the worker's:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "A stationary area sample or exhaust sample does not measure the employee’s breathing-zone exposure."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA asbestos PEL is expressed as an 8-hour:",
    "a": [
      "Time-weighted average",
      "Arithmetic average of any available readings, regardless of duration",
      "Maximum instantaneous fiber concentration",
      "Average bulk-material asbestos percentage"
    ],
    "correct": 0,
    "explanation": "The PEL is an 8-hour time-weighted average airborne concentration.",
    "id": "nj-031",
    "legacyId": "Testing Methodologies|The OSHA asbestos PEL is expressed as an 8-hour:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "A TWA accounts for concentration and time; it is not an unweighted mean, instantaneous peak, or bulk percentage."
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
      "Worker breathing-zone exposure limits",
      "Individual worker medical evaluations",
      "Accreditation of respirator fit-test providers"
    ],
    "correct": 0,
    "explanation": "The asbestos NESHAP is an EPA air-pollution regulation governing specified demolition/renovation activities and asbestos emissions.",
    "id": "nj-036",
    "legacyId": "Regulations|EPA NESHAP asbestos requirements are primarily associated with:",
    "kind": "Recall",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.145",
    "sourceLabel": "EPA §61.145 — demolition and renovation",
    "rationale": "NESHAP addresses emissions from covered activities. Worker exposure limits and medical evaluations are OSHA topics."
  },
  {
    "category": "Regulations",
    "q": "AHERA is particularly associated with asbestos management in:",
    "a": [
      "Schools",
      "All privately owned single-family homes",
      "All industrial process equipment",
      "All commercial vehicles containing friction products"
    ],
    "correct": 0,
    "explanation": "AHERA established asbestos requirements for public and nonprofit private elementary and secondary schools.",
    "id": "nj-037",
    "legacyId": "Regulations|AHERA is particularly associated with asbestos management in:",
    "kind": "Recall",
    "source": "https://www.epa.gov/asbestos/asbestos-and-school-buildings",
    "sourceLabel": "EPA — AHERA and school buildings",
    "rationale": "AHERA’s school provisions apply to public and nonprofit private elementary and secondary schools, not every home, vehicle, or industrial process."
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
      "Work under an expired employer license while their own permit is valid",
      "Authorize another worker to use the supervisor's permit",
      "Replace the employer's license with the supervisor permit"
    ],
    "correct": 0,
    "explanation": "NJ regulations state that a permitted supervisor may perform worker duties without possessing a separate worker permit.",
    "id": "nj-039",
    "legacyId": "Regulations|A person who receives a New Jersey asbestos supervisor permit may:",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "N.J.A.C. 12:120-5.4 — examination and supervisor permits",
    "rationale": "Authority to perform worker duties does not replace an employer license, authorize shared permits, or waive other requirements."
  },
  {
    "category": "Regulations",
    "q": "Which agency issues New Jersey asbestos worker/supervisor permits after required training/examination requirements are met?",
    "a": [
      "NJ Department of Labor and Workforce Development",
      "NJ Department of Health",
      "NJ Department of Environmental Protection",
      "NJ Department of Community Affairs"
    ],
    "correct": 0,
    "explanation": "NJ LWD administers the asbestos licensing and worker/supervisor permit program, while NJDOH oversees training and the state examination.",
    "id": "nj-040",
    "legacyId": "Regulations|Which agency issues New Jersey asbestos worker/supervisor permits after required training/examination requirements are met?",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "NJDOH oversees training and examination; NJ LWD issues these individual permits. DEP and DCA have different responsibilities."
  },
  {
    "category": "Legal Considerations",
    "q": "A supervisor's project records are important because they can:",
    "a": [
      "Document compliance, decisions, monitoring and work practices",
      "Substitute for required exposure measurements",
      "Establish compliance without documenting actual site conditions",
      "Replace required notifications to agencies"
    ],
    "correct": 0,
    "explanation": "Accurate documentation is a key component of regulatory compliance and project accountability.",
    "id": "nj-041",
    "legacyId": "Legal Considerations|A supervisor's project records are important because they can:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(n)",
    "sourceLabel": "OSHA §1926.1101(n) — records",
    "rationale": "Records document what happened. They cannot substitute for measurements, notices, or controls that were never performed."
  },
  {
    "category": "Legal Considerations",
    "q": "Knowingly falsifying asbestos records can:",
    "a": [
      "Create serious regulatory and legal consequences",
      "Be acceptable when the final clearance result is satisfactory",
      "Be resolved solely by replacing the original with an unsigned copy",
      "Be permitted when the owner requests the change"
    ],
    "correct": 0,
    "explanation": "Required records must be accurate; falsification can result in enforcement and other legal consequences.",
    "id": "nj-042",
    "legacyId": "Legal Considerations|Knowingly falsifying asbestos records can:",
    "kind": "Recall",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "A satisfactory clearance result, an unsigned replacement, or an owner request does not make falsified history accurate."
  },
  {
    "category": "Legal Considerations",
    "q": "The best response when project conditions differ materially from the approved work plan is to:",
    "a": [
      "Continue under the original plan until the next scheduled inspection",
      "Stop/evaluate as appropriate and address the change under applicable requirements",
      "Let each worker choose a method before reassessing exposures",
      "Record the change only after completing the affected work"
    ],
    "correct": 1,
    "explanation": "Supervisors should ensure changed conditions are evaluated and handled under applicable plans, specifications and regulatory requirements.",
    "id": "nj-043",
    "legacyId": "Legal Considerations|The best response when project conditions differ materially from the approved work plan is to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Reassess changed conditions before proceeding as appropriate. Waiting until completion or delegating improvised methods leaves the change unevaluated."
  },
  {
    "category": "Legal Considerations",
    "q": "An asbestos supervisor should treat required records as:",
    "a": [
      "Part of the project's compliance documentation",
      "Records whose retention ends automatically at final clearance",
      "Documents controlled solely by the building owner",
      "Informal notes that need not reflect actual work conditions"
    ],
    "correct": 0,
    "explanation": "Required records form part of the compliance record and should be maintained as required.",
    "id": "nj-044",
    "legacyId": "Legal Considerations|An asbestos supervisor should treat required records as:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(n)",
    "sourceLabel": "OSHA §1926.1101(n) — records",
    "rationale": "Required records have applicable retention and access requirements; they are not informal notes that automatically expire at clearance."
  },
  {
    "category": "Supervisory",
    "q": "A supervisor/competent person's role includes:",
    "a": [
      "Identifying hazards and ensuring required controls are implemented",
      "Accepting the owner's assessment without checking site conditions",
      "Delegating hazard correction without authority to stop affected work",
      "Inspecting only when a regulator requests it"
    ],
    "correct": 0,
    "explanation": "The competent person/supervisor has active responsibilities for hazard recognition, controls, inspections and compliance.",
    "id": "nj-045",
    "legacyId": "Supervisory|A supervisor/competent person's role includes:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Hazard recognition must be paired with correction authority. Owner assurances and regulator-requested inspections alone are not active supervision."
  },
  {
    "category": "Supervisory",
    "q": "If containment is damaged during active abatement, the supervisor's priority is to:",
    "a": [
      "Increase respirator protection while continuing the affected removal",
      "Control the situation and restore required containment/protection",
      "Wait for the next scheduled air-monitoring result",
      "Complete the remaining removal before repairing the barrier"
    ],
    "correct": 1,
    "explanation": "Loss of containment can permit fiber migration and requires prompt corrective action.",
    "id": "nj-046",
    "legacyId": "Supervisory|If containment is damaged during active abatement, the supervisor's priority is to:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "A respirator upgrade does not repair containment. Continuing removal while waiting for sampling or completion can spread contamination."
  },
  {
    "category": "Supervisory",
    "q": "Before assigning a worker to asbestos duties, the supervisor should verify:",
    "a": [
      "Required training, protection and project procedures are in place",
      "A current permit, with no need to check task-specific protection",
      "Prior construction experience in place of asbestos training",
      "A fit-test record without checking the assigned facepiece"
    ],
    "correct": 0,
    "explanation": "Supervisors must ensure personnel are properly trained and protected and understand applicable procedures.",
    "id": "nj-047",
    "legacyId": "Supervisory|Before assigning a worker to asbestos duties, the supervisor should verify:",
    "kind": "Recall",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Credentials, training, and protection are related but distinct. A permit, general experience, or an unrelated fit-test record alone is not sufficient."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Under OSHA's construction asbestos rule, ACM contains asbestos in what amount?",
    "a": [
      "More than 1%",
      "At least 1%, including exactly 1%",
      "More than 0.1%",
      "More than 5%"
    ],
    "correct": 0,
    "explanation": "OSHA defines asbestos-containing material as material containing more than one percent asbestos.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-048",
    "legacyId": "General Topics Related to Asbestos|Under OSHA's construction asbestos rule, ACM contains asbestos in what amount?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "The definition says more than 1%, not at least 1%. This definition does not mean all work on material below that percentage is unregulated."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which material is generally presumed asbestos-containing in a building constructed no later than 1980?",
    "a": [
      "Thermal system insulation",
      "All gypsum wallboard regardless of its history",
      "All fiberglass insulation",
      "All painted metal ductwork"
    ],
    "correct": 0,
    "explanation": "OSHA presumes thermal system insulation in buildings constructed no later than 1980 to be asbestos-containing unless rebutted.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-049",
    "legacyId": "General Topics Related to Asbestos|Which material is generally presumed asbestos-containing in a building constructed no later than 1980?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "The presumption concerns specified older materials, not every building component from that era."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "What does TSI mean in the asbestos construction standard?",
    "a": [
      "Thermal system insulation",
      "Thermal surfacing installation",
      "Total suspended insulation",
      "Time-sampled inhalation"
    ],
    "correct": 0,
    "explanation": "TSI means thermal system insulation applied to pipes, fittings, boilers, breeching, tanks, ducts, or other components to prevent heat loss or gain.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-050",
    "legacyId": "General Topics Related to Asbestos|What does TSI mean in the asbestos construction standard?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "TSI refers to insulation used to control heat transfer, not a sampling or exposure metric."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which task is Class I asbestos work under OSHA?",
    "a": [
      "Removing surfacing ACM",
      "Removing asbestos floor tile",
      "Repairing insulation while incidentally disturbing ACM",
      "Cleaning dust without disturbing ACM"
    ],
    "correct": 0,
    "explanation": "Class I covers removal of thermal system insulation or surfacing ACM and PACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-051",
    "legacyId": "General Topics Related to Asbestos|Which task is Class I asbestos work under OSHA?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Surfacing and TSI removal are Class I. Other ACM removal is generally Class II; maintenance disturbance and custodial contact are separate classes."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Which task is typically Class II asbestos work?",
    "a": [
      "Removing asbestos floor tile",
      "Removing sprayed-on surfacing ACM",
      "Removing thermal system insulation",
      "Maintenance that incidentally disturbs pipe insulation"
    ],
    "correct": 0,
    "explanation": "Class II removal involves ACM other than thermal system insulation or surfacing material.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-052",
    "legacyId": "General Topics Related to Asbestos|Which task is typically Class II asbestos work?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Floor tile is other ACM removal. Removing TSI or surfacing is Class I, while maintenance disturbance is Class III."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Class III asbestos work is best described as:",
    "a": [
      "Repair and maintenance that disturb ACM or PACM",
      "Removal of TSI or surfacing ACM",
      "Removal of ACM other than TSI or surfacing material",
      "Custodial contact without disturbance of ACM"
    ],
    "correct": 0,
    "explanation": "Class III is repair and maintenance work where ACM or PACM is likely to be disturbed.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-053",
    "legacyId": "General Topics Related to Asbestos|Class III asbestos work is best described as:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "Classify the activity as well as the material: repair/maintenance disturbance differs from removal and nondisturbing custodial contact."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "An aggressive method of disturbing ACM includes:",
    "a": [
      "Grinding that disintegrates intact material",
      "Removing floor tile intact with hand tools",
      "Wetting insulation before controlled removal",
      "HEPA vacuuming settled dust without disturbing ACM"
    ],
    "correct": 0,
    "explanation": "OSHA defines aggressive methods as sanding, abrading, grinding, or other methods that break, crumble, or disintegrate intact ACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-054",
    "legacyId": "General Topics Related to Asbestos|An aggressive method of disturbing ACM includes:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Grinding that breaks material apart is aggressive. The other choices preserve intact material or clean settled contamination without that disturbance."
  },
  {
    "category": "General Topics Related to Asbestos",
    "q": "Amended water is water with:",
    "a": [
      "A surfactant to improve penetration",
      "A disinfectant to neutralize asbestos fibers",
      "A sealant that encapsulates the entire surface",
      "A solvent to dissolve asbestos minerals"
    ],
    "correct": 0,
    "explanation": "A wetting agent helps water penetrate ACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(b)",
    "id": "nj-055",
    "legacyId": "General Topics Related to Asbestos|Amended water is water with:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(b) — definitions",
    "rationale": "A surfactant improves wetting and penetration. It does not chemically neutralize or dissolve asbestos."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Which asbestos-related disease is a fibrotic lung disease rather than a cancer?",
    "a": [
      "Asbestosis",
      "Mesothelioma",
      "Bronchogenic carcinoma",
      "Pleural mesothelioma"
    ],
    "correct": 0,
    "explanation": "Asbestosis is lung fibrosis associated with asbestos exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-056",
    "legacyId": "Health and Medical Considerations|Which asbestos-related disease is a fibrotic lung disease rather than a cancer?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "The alternatives are cancers; asbestosis is fibrosis of lung tissue."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "The primary route of occupational asbestos exposure during abatement is:",
    "a": [
      "Inhalation of airborne fibers",
      "Absorption through intact skin",
      "Ingestion as the only occupational route",
      "Direct contact with hair as the principal route"
    ],
    "correct": 0,
    "explanation": "Inhalation of airborne asbestos fibers is the main occupational exposure route.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-057",
    "legacyId": "Health and Medical Considerations|The primary route of occupational asbestos exposure during abatement is:",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "The key occupational pathway is breathing airborne fibers. Skin contact, hair contamination, or ingestion alone does not describe that primary route."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Why is a worker's lack of symptoms a poor basis for judging asbestos exposure?",
    "a": [
      "Disease can have a long latency",
      "Symptoms occur only above the excursion limit",
      "A normal examination proves that no exposure occurred",
      "A fit test can determine whether disease has developed"
    ],
    "correct": 0,
    "explanation": "Asbestos-related diseases may take many years to develop.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-058",
    "legacyId": "Health and Medical Considerations|Why is a worker's lack of symptoms a poor basis for judging asbestos exposure?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Feeling healthy or having a normal examination cannot establish an absence of exposure. A respirator fit test is not a disease test."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Under OSHA’s construction asbestos standard, what combined annual duration of Class I, II, or III work triggers medical surveillance, after applying the day-counting exception?",
    "a": [
      "30 or more counted days per year",
      "10 counted days per year",
      "30 consecutive days per year",
      "60 counted days per year"
    ],
    "correct": 0,
    "explanation": "The trigger is a combined total of 30 or more counted days per year, across the covered work classes. The days do not have to be consecutive. A day of Class II/III work on intact material lasting one hour or less, including cleanup, does not count if the required work practices are fully followed.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-059",
    "legacyId": "Health and Medical Considerations|Under OSHA's construction rule, medical surveillance is required for a worker engaged in Class I, II, or III work for at least:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Ten days and 60 days are not this threshold. “30 consecutive days” incorrectly adds a consecutive-day condition. Required negative-pressure respirator medical clearance applies before assignment; the 30-day rule is not permission to delay it."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "OSHA medical surveillance for covered asbestos employees must be provided:",
    "a": [
      "At no cost to the employee",
      "After the employee pays, with reimbursement only for abnormal results",
      "Only when the employee reports respiratory symptoms",
      "Only if exposure exceeded the excursion limit"
    ],
    "correct": 0,
    "explanation": "The employer must provide required medical examinations without cost to the employee.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-060",
    "legacyId": "Health and Medical Considerations|OSHA medical surveillance for covered asbestos employees must be provided:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Required surveillance is not conditioned on an abnormal result, symptoms, or exceeding only the excursion limit."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Which statement about asbestos health-effect training is correct?",
    "a": [
      "Health effects of asbestos exposure",
      "The airborne limit without explaining health effects",
      "The worker's symptoms as the main measure of exposure",
      "Respirator selection in place of health-effect information"
    ],
    "correct": 0,
    "explanation": "Training must address asbestos health effects. It also covers the combined effect of smoking and asbestos exposure on lung-cancer risk.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)",
    "id": "nj-061",
    "legacyId": "Health and Medical Considerations|What health topic should asbestos training address?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9) — training",
    "rationale": "Training only on a limit or on equipment leaves out required health information. Symptoms cannot serve as a reliable exposure measure because diseases may have long latency."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "When should a supervisor treat airborne asbestos exposure as a hazard?",
    "a": [
      "Even when fibers cannot be seen",
      "Only after a worker develops breathing symptoms",
      "Only when the eight-hour PEL and excursion limit are both exceeded",
      "Only when dust is visible under ordinary lighting"
    ],
    "correct": 0,
    "explanation": "Airborne asbestos fibers can be too small to see; visibility does not establish safe exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppH",
    "id": "nj-062",
    "legacyId": "Health and Medical Considerations|When should a supervisor treat airborne asbestos exposure as a hazard?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix H — health hazards",
    "rationale": "Fibers may be airborne without being visible. Symptoms and simultaneous exceedance of both limits are not prerequisites for recognizing a hazard."
  },
  {
    "category": "Health and Medical Considerations",
    "q": "Why does OSHA require a medical determination for a worker assigned to wear a negative-pressure respirator?",
    "a": [
      "To ensure the worker is physically able to perform the work and use the equipment",
      "To establish the facepiece's fit factor",
      "To measure the employee's current airborne exposure",
      "To replace the required respiratory protection program"
    ],
    "correct": 0,
    "explanation": "A physician-supervised determination addresses the worker's physical ability to use a negative-pressure respirator safely.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(m)",
    "id": "nj-063",
    "legacyId": "Health and Medical Considerations|Why does OSHA require a medical determination for a worker assigned to wear a negative-pressure respirator?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(m) — medical surveillance",
    "rationale": "Medical ability and facepiece fit are different evaluations. Neither a fit factor nor an exposure result substitutes for the medical determination."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Before an employee wears a required respirator, the employer must provide:",
    "a": [
      "A medical evaluation",
      "A fit test as a substitute for medical evaluation",
      "A medical evaluation only after symptoms develop",
      "A medical evaluation after the first 30 days of respirator use"
    ],
    "correct": 0,
    "explanation": "The respiratory protection standard requires medical evaluation before use.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(e)",
    "id": "nj-064",
    "legacyId": "Personal Protective and Other Equipment|Before an employee wears a required respirator, the employer must provide:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(e) — medical evaluation",
    "rationale": "The medical evaluation precedes required respirator use and fit testing. The asbestos 30-day surveillance trigger does not create a respirator grace period."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A tight-fitting respirator fit test must be performed:",
    "a": [
      "Before initial use and at least annually",
      "Before initial use and every two years thereafter",
      "Only when the respirator brand changes",
      "Annually, but not before initial use"
    ],
    "correct": 0,
    "explanation": "OSHA requires fit testing before initial use, when the facepiece changes, and at least annually.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "id": "nj-065",
    "legacyId": "Personal Protective and Other Equipment|A tight-fitting respirator fit test must be performed:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "rationale": "A two-year interval is too long, annual testing does not excuse initial testing, and changes are not the only trigger."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Which condition invalidates a tight-fitting respirator seal?",
    "a": [
      "Facial hair between sealing surface and face",
      "A seal check completed at each donning",
      "Fit testing with the same make, model, style, and size",
      "Adjustment of straps according to the manufacturer"
    ],
    "correct": 0,
    "explanation": "Facial hair between the sealing surface and face is prohibited.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-066",
    "legacyId": "Personal Protective and Other Equipment|Which condition invalidates a tight-fitting respirator seal?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "Correct testing and seal-check procedures support protection. Hair crossing the sealing surface directly compromises the sealing interface."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A user seal check is performed:",
    "a": [
      "Each time a tight-fitting respirator is put on",
      "Only when receiving a new facepiece",
      "Once at the start of each year",
      "Only when a fit test is due"
    ],
    "correct": 0,
    "explanation": "Each donning requires a user seal check.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-067",
    "legacyId": "Personal Protective and Other Equipment|A user seal check is performed:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "The timing is every donning, not annually, only for new equipment, or only when fit testing is due."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Can a user seal check replace a fit test?",
    "a": [
      "No, both have different purposes",
      "Yes, if the worker has worn the same facepiece for a year",
      "Yes, if exposure is below the PEL",
      "Yes, when the supervisor observes the seal check"
    ],
    "correct": 0,
    "explanation": "A seal check is not a substitute for formal fit testing.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(g)",
    "id": "nj-068",
    "legacyId": "Personal Protective and Other Equipment|Can a user seal check replace a fit test?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(g) — respirator use",
    "rationale": "A seal check checks the fit at that donning. It cannot replace the prescribed fit-test procedure."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "Which feature is essential to an asbestos HEPA vacuum?",
    "a": [
      "A HEPA filtration system",
      "A paper bag labeled for construction dust",
      "A high-airflow motor without rated filtration",
      "An exhaust directed toward an open window"
    ],
    "correct": 0,
    "explanation": "A HEPA vacuum is used to capture asbestos dust without releasing it through the exhaust.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-069",
    "legacyId": "Personal Protective and Other Equipment|Which feature is essential to an asbestos HEPA vacuum?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "High airflow, a paper dust bag, and exhaust location do not establish HEPA filtration."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "A respirator cartridge or filter should be changed according to:",
    "a": [
      "The employer's respiratory protection program and manufacturer guidance",
      "A fixed calendar interval regardless of condition or instructions",
      "The visible amount of dust on the outside of the facepiece alone",
      "The date of the employee's last fit test alone"
    ],
    "correct": 0,
    "explanation": "Selection and maintenance must follow the written program and relevant manufacturer instructions.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(h)",
    "id": "nj-070",
    "legacyId": "Personal Protective and Other Equipment|A respirator cartridge or filter should be changed according to:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(h) — maintenance",
    "rationale": "A fit-test date, external dust appearance, or arbitrary interval cannot replace the program and relevant manufacturer maintenance criteria."
  },
  {
    "category": "Personal Protective and Other Equipment",
    "q": "What must the employer provide for required respiratory protection?",
    "a": [
      "A written respiratory protection program",
      "A generic manufacturer brochure without site-specific procedures",
      "An oral procedure that is not documented",
      "A fit-test certificate as the entire program"
    ],
    "correct": 0,
    "explanation": "OSHA requires a written, worksite-specific respiratory protection program.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(c)",
    "id": "nj-071",
    "legacyId": "Personal Protective and Other Equipment|What must the employer provide for required respiratory protection?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.134(c) — written program",
    "rationale": "A brochure, oral instructions, or a fit-test record alone is not a written worksite-specific respiratory protection program."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the first control for fiber release during most ACM removal?",
    "a": [
      "Wet the material adequately",
      "Increase respiratory protection instead of wetting",
      "Wait for visible dust before applying water",
      "Dry-remove material and wet the debris afterward"
    ],
    "correct": 0,
    "explanation": "Wet methods are a primary engineering and work-practice control.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-072",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the first control for fiber release during most ACM removal?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Control fibers during disturbance. Respirator upgrades and wetting only after visible dust or removal do not replace adequately wet methods."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What must a regulated area have at each entrance?",
    "a": [
      "Warning signs",
      "An exposure report without an asbestos warning sign",
      "A general construction notice without the required asbestos warning",
      "A sign posted only inside the equipment room"
    ],
    "correct": 0,
    "explanation": "OSHA requires signs at entrances to regulated areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(7)",
    "id": "nj-073",
    "legacyId": "Work Practices, Procedures, and Disposal|What must a regulated area have at each entrance?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(7) — signs",
    "rationale": "The rule calls for asbestos warning signs at entrances; a general notice or a sign only inside does not meet that purpose."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Who may enter a regulated area during asbestos work?",
    "a": [
      "Authorized persons",
      "Any trained person, whether or not authorized",
      "Any building employee wearing disposable coveralls",
      "Any visitor whose exposure would last less than 15 minutes"
    ],
    "correct": 0,
    "explanation": "Access is restricted to authorized persons.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(e)",
    "id": "nj-074",
    "legacyId": "Work Practices, Procedures, and Disposal|Who may enter a regulated area during asbestos work?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(e) — regulated areas",
    "rationale": "Training and clothing alone do not establish authorization; neither does a brief planned visit."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is prohibited in asbestos regulated areas?",
    "a": [
      "Eating, drinking, smoking, or chewing",
      "HEPA vacuuming of contaminated debris",
      "Use of appropriate protective clothing",
      "Authorized entry under required protection"
    ],
    "correct": 0,
    "explanation": "OSHA prohibits eating, drinking, smoking, chewing tobacco or gum, and applying cosmetics in regulated areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(e)",
    "id": "nj-075",
    "legacyId": "Work Practices, Procedures, and Disposal|What is prohibited in asbestos regulated areas?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(e) — regulated areas",
    "rationale": "The other choices are protective work practices, not the personal activities prohibited in the regulated area."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "In the standard three-stage Class I decontamination sequence, where is contaminated protective clothing removed before showering?",
    "a": [
      "In the equipment room",
      "In the clean room before entering the shower",
      "In a public changing area after leaving containment",
      "At a laundry station outside containment before bagging"
    ],
    "correct": 0,
    "explanation": "Decontamination facilities are intended to prevent contamination leaving the regulated area.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-076",
    "legacyId": "Work Practices, Procedures, and Disposal|Where should protective clothing contaminated with asbestos be removed?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "The clean room and public changing areas are not places to release contamination from clothing; use the designated contaminated transition."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "How should asbestos waste be stored and transported?",
    "a": [
      "In sealed, labeled, impermeable containers",
      "In labeled containers that allow dust to escape",
      "In sealed containers without required labels",
      "In open containers until the end of transportation"
    ],
    "correct": 0,
    "explanation": "OSHA requires asbestos waste and contaminated clothing to be placed in sealed, labeled, impermeable containers.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-077",
    "legacyId": "Work Practices, Procedures, and Disposal|How should asbestos waste be stored and transported?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Containment must prevent leakage and include required labels. A labeled but leaking container or an unlabeled sealed container is incomplete."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Which cleaning technique is allowed for asbestos-contaminated surfaces?",
    "a": [
      "HEPA vacuuming",
      "Dry sweeping followed by HEPA vacuuming",
      "Compressed air without dust-cloud capture",
      "An ordinary shop vacuum fitted with a paper bag"
    ],
    "correct": 0,
    "explanation": "HEPA vacuuming is an accepted cleanup method.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-078",
    "legacyId": "Work Practices, Procedures, and Disposal|Which cleaning technique is allowed for asbestos-contaminated surfaces?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "An ordinary shop vacuum is not equivalent to HEPA filtration. Dry sweeping or uncontrolled compressed air can re-suspend fibers."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When may compressed air be used to remove asbestos dust?",
    "a": [
      "Only with an enclosed ventilation system that captures the dust",
      "When all nearby workers wear respirators",
      "When the task lasts less than 15 minutes",
      "When air monitoring from the previous shift was below the PEL"
    ],
    "correct": 0,
    "explanation": "OSHA generally prohibits compressed-air cleaning unless used with ventilation that captures the dust cloud.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-079",
    "legacyId": "Work Practices, Procedures, and Disposal|When may compressed air be used to remove asbestos dust?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Respirators, short duration, and an earlier low sample result do not replace capture of the dust cloud."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why must workers use decontamination procedures when leaving Class I regulated areas?",
    "a": [
      "To avoid carrying asbestos into clean areas",
      "To replace exposure assessment for short visits",
      "To establish final clearance for the work area",
      "To eliminate the need to contain contaminated clothing"
    ],
    "correct": 0,
    "explanation": "Decontamination limits transfer of asbestos contamination.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-080",
    "legacyId": "Work Practices, Procedures, and Disposal|Why must workers use decontamination procedures when leaving Class I regulated areas?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Decontamination prevents carryout on people and equipment. It does not establish clearance or waive exposure assessment or clothing containment."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "For Class I work, the competent person must inspect the worksite:",
    "a": [
      "At least once during each work shift",
      "Once at the start of the entire project",
      "Once per calendar week",
      "Only after an exposure result exceeds the PEL"
    ],
    "correct": 0,
    "explanation": "For Class I jobs, the competent person must inspect at least once during each work shift and at any time an employee requests an inspection.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-081",
    "legacyId": "Work Practices, Procedures, and Disposal|For Class I work, the competent person must inspect the worksite:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "An initial inspection, weekly schedule, or waiting for an above-limit result does not meet the Class I inspection schedule."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "If a negative-pressure enclosure loses pressure during removal, what should the supervisor do?",
    "a": [
      "Stop and restore the enclosure controls",
      "Continue removal while waiting for the next sample result",
      "Open a barrier flap to equalize pressure",
      "Compensate only by upgrading respirators"
    ],
    "correct": 0,
    "explanation": "A failure of enclosure pressure calls for corrective action before continuing uncontrolled work.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-082",
    "legacyId": "Work Practices, Procedures, and Disposal|If a negative-pressure enclosure loses pressure during removal, what should the supervisor do?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Address failed enclosure controls before continuing affected removal. Opening barriers or relying solely on respirators does not restore containment."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "When asbestos-containing floor tile is removed as Class II work, OSHA generally requires it to be:",
    "a": [
      "Removed intact where feasible",
      "Broken into small pieces before wetting",
      "Sanded to remove the surface coating",
      "Dry-scraped to separate the backing"
    ],
    "correct": 0,
    "explanation": "Class II floor tile methods emphasize intact removal and prohibit aggressive techniques.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(i)",
    "id": "nj-083",
    "legacyId": "Work Practices, Procedures, and Disposal|When asbestos-containing floor tile is removed as Class II work, OSHA generally requires it to be:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(8)(i) — flooring",
    "rationale": "Deliberately breaking, sanding, or dry-scraping is not intact removal where feasible."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the purpose of a glove bag for eligible small TSI jobs?",
    "a": [
      "To isolate the disturbance and contain released fibers",
      "To exempt the operation from competent-person supervision",
      "To replace required respirators for all small jobs",
      "To allow repeated use without integrity checks"
    ],
    "correct": 0,
    "explanation": "A glove bag provides local containment for appropriate work when used under required procedures.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-084",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the purpose of a glove bag for eligible small TSI jobs?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "A glove bag locally contains the operation. It does not automatically waive supervision, respirator use, or integrity checks."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What should happen to a glove bag before it is removed from the work area?",
    "a": [
      "The contained material and bag must be handled without releasing fibers",
      "Opened before collapsing so the air escapes into the room",
      "Moved into the clean room for emptying",
      "Saved with loose waste inside for reuse"
    ],
    "correct": 0,
    "explanation": "Glove-bag waste handling must prevent fiber release.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-085",
    "legacyId": "Work Practices, Procedures, and Disposal|What should happen to a glove bag before it is removed from the work area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Keep waste and released fibers contained through collapse and removal. Venting into the room or opening the bag on the clean side defeats containment."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "How does OSHA's construction asbestos rule treat dry sweeping of ACM dust and debris?",
    "a": [
      "It is prohibited",
      "Allowed when all workers wear respirators",
      "Allowed after the waste dries",
      "Allowed below the PEL without other conditions"
    ],
    "correct": 0,
    "explanation": "OSHA prohibits dry sweeping, shoveling, and other dry cleanup of dust and debris containing ACM or PACM.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(1)",
    "id": "nj-086",
    "legacyId": "Work Practices, Procedures, and Disposal|How does OSHA's construction asbestos rule treat dry sweeping of ACM dust and debris?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g)(1)–(3) — work controls",
    "rationale": "Respirators, low measured exposure, or dried waste do not authorize dry sweeping of ACM dust and debris."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What is the main purpose of a critical barrier?",
    "a": [
      "Seal openings between the work area and adjacent spaces",
      "Provide replacement air through unsealed building openings",
      "Replace required air-cleaning equipment",
      "Replace the worker decontamination route"
    ],
    "correct": 0,
    "explanation": "Critical barriers help isolate the regulated work area.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-087",
    "legacyId": "Work Practices, Procedures, and Disposal|What is the main purpose of a critical barrier?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "A critical barrier closes migration pathways. It is not replacement air, air-cleaning equipment, or a decontamination system."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "Why should removed ACM be bagged promptly?",
    "a": [
      "To minimize opportunities for fiber release and migration",
      "To permit removal without adequately wet methods",
      "To eliminate the need for waste labels",
      "To allow contaminated bags to pass through clean areas"
    ],
    "correct": 0,
    "explanation": "Prompt containment reduces the chance of release while waste is handled.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-088",
    "legacyId": "Work Practices, Procedures, and Disposal|Why should removed ACM be bagged promptly?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Prompt packaging reduces handling-related release. It does not waive wet methods, labels, or clean handling of the container exterior."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA asbestos PEL is measured as:",
    "a": [
      "An eight-hour time-weighted average",
      "A 30-minute average",
      "An instantaneous ceiling",
      "An average over the calendar year"
    ],
    "correct": 0,
    "explanation": "The permissible exposure limit is an eight-hour TWA.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "id": "nj-089",
    "legacyId": "Testing Methodologies|The OSHA asbestos PEL is measured as:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "Thirty minutes is the excursion-limit period; an instantaneous reading or annual average is not the eight-hour TWA."
  },
  {
    "category": "Testing Methodologies",
    "q": "The OSHA excursion limit is averaged over:",
    "a": [
      "30 minutes",
      "15 minutes",
      "60 minutes",
      "Eight hours"
    ],
    "correct": 0,
    "explanation": "The excursion limit is a 30-minute average.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(c)",
    "id": "nj-090",
    "legacyId": "Testing Methodologies|The OSHA excursion limit is averaged over:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(c) — exposure limits",
    "rationale": "Do not substitute the eight-hour PEL period or a different short-term sampling duration."
  },
  {
    "category": "Testing Methodologies",
    "q": "What should an employer do after exposure monitoring shows a worker above the PEL?",
    "a": [
      "Notify the affected worker of the result and corrective action",
      "Report only the numerical result without corrective action",
      "Wait for the next annual training to disclose the result",
      "Notify only the supervisor because workers wore respirators"
    ],
    "correct": 0,
    "explanation": "OSHA requires notice to affected employees and identification of corrective action when levels exceed a limit.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-091",
    "legacyId": "Testing Methodologies|What should an employer do after exposure monitoring shows a worker above the PEL?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Affected employees must receive the result and the corrective action when a limit is exceeded; informing only the supervisor is insufficient."
  },
  {
    "category": "Testing Methodologies",
    "q": "Where is a representative personal air sample collected?",
    "a": [
      "Near the worker's breathing zone",
      "At a fixed station by the containment entrance",
      "At the negative-air exhaust outlet",
      "In the clean room during worker breaks"
    ],
    "correct": 0,
    "explanation": "Personal exposure sampling reflects air in the worker's breathing zone.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-092",
    "legacyId": "Testing Methodologies|Where is a representative personal air sample collected?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Exposure monitoring must represent what the employee breathes, not just conditions at an entrance, exhaust, or clean room."
  },
  {
    "category": "Testing Methodologies",
    "q": "What does a negative exposure assessment support?",
    "a": [
      "A documented conclusion that expected exposures will be below both limits",
      "A conclusion that no asbestos is present in the material",
      "A permanent exemption covering every future removal method",
      "A conclusion that only the eight-hour PEL will be met"
    ],
    "correct": 0,
    "explanation": "OSHA defines a negative exposure assessment for a specific operation based on evidence exposures will remain below the PEL and excursion limit.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-093",
    "legacyId": "Testing Methodologies|What does a negative exposure assessment support?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "An assessment addresses the specific operation and both limits; it does not establish asbestos-free material or a permanent project-wide exemption."
  },
  {
    "category": "Testing Methodologies",
    "q": "Who is responsible for ensuring that required employee exposure monitoring is performed under OSHA’s construction asbestos standard?",
    "a": [
      "The employer",
      "The building owner in place of the employer in every case",
      "The waste transporter in place of the employer",
      "The employee individually, without employer responsibility"
    ],
    "correct": 0,
    "explanation": "The employer must ensure that required monitoring is performed. This assigns responsibility; it does not require the employer personally to operate the sampling equipment.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-094",
    "legacyId": "Testing Methodologies|Who must perform exposure monitoring under OSHA's construction asbestos rule?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Hiring a sampling consultant or working for a building owner does not transfer the employer’s duty to ensure representative monitoring."
  },
  {
    "category": "Testing Methodologies",
    "q": "Why do results from one task not automatically establish exposure for a different task?",
    "a": [
      "Conditions and disturbance methods may differ",
      "All monitoring from previous projects is automatically invalid",
      "Only building age determines whether results transfer",
      "The same respirator makes any earlier sample representative"
    ],
    "correct": 0,
    "explanation": "Exposure assessments must represent the operation and conditions.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(f)",
    "id": "nj-095",
    "legacyId": "Testing Methodologies|Why do results from one task not automatically establish exposure for a different task?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(f) — exposure assessment and monitoring",
    "rationale": "Earlier evidence can be useful only if representative. Neither building age nor the same respirator makes a different method’s exposure equivalent."
  },
  {
    "category": "Testing Methodologies",
    "q": "What does PCM count in a standard airborne asbestos analysis?",
    "a": [
      "Fibers meeting specified counting criteria",
      "The asbestos percentage by weight in bulk material",
      "The mineral identity of every counted fiber",
      "Only fibers proven individually to be asbestos"
    ],
    "correct": 0,
    "explanation": "Phase-contrast microscopy counts fibers using specified criteria; it does not identify mineral type by itself.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101AppA",
    "id": "nj-096",
    "legacyId": "Testing Methodologies|What does PCM count in a standard airborne asbestos analysis?",
    "kind": "Recall",
    "sourceLabel": "OSHA Appendix A — reference counting method",
    "rationale": "PCM counts fibers meeting the method’s criteria; it cannot identify each fiber’s mineral type or report bulk percent by weight."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "What conventional hazard can wet asbestos removal increase?",
    "a": [
      "Electrical shock",
      "Oxygen enrichment caused by misting",
      "Carbon monoxide generated by water",
      "Higher ultraviolet exposure from wet surfaces"
    ],
    "correct": 0,
    "explanation": "Water near electrical equipment requires electrical hazard controls.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-097",
    "legacyId": "Additional Safety Hazards|What conventional hazard can wet asbestos removal increase?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Wetting near energized systems can create a shock hazard. Misting does not inherently create oxygen enrichment, carbon monoxide, or UV exposure."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Why might an asbestos worker need a heat-stress plan?",
    "a": [
      "Protective clothing and respirators can increase heat burden",
      "Wet methods remove the need for heat precautions",
      "Passing a respirator medical evaluation rules out heat illness",
      "A HEPA filter protects against body-heat buildup"
    ],
    "correct": 0,
    "explanation": "The physical burden of PPE can contribute to heat stress.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-098",
    "legacyId": "Additional Safety Hazards|Why might an asbestos worker need a heat-stress plan?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "PPE can increase heat burden. Wet methods, medical clearance, and HEPA filters do not rule out heat illness."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "Before working above a ceiling, a supervisor should evaluate:",
    "a": [
      "Fall and structural hazards",
      "Only airborne asbestos because the ceiling is inside containment",
      "Only the worker's asbestos permit",
      "Only the most recent air-monitoring result"
    ],
    "correct": 0,
    "explanation": "Asbestos work can expose workers to falls and structural hazards.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-099",
    "legacyId": "Additional Safety Hazards|Before working above a ceiling, a supervisor should evaluate:",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "Work above ceilings can involve unstable surfaces and falls. An asbestos permit or air sample does not evaluate structural safety."
  },
  {
    "category": "Additional Safety Hazards",
    "q": "What should a supervisor assess before assigning work in a confined space?",
    "a": [
      "Entry hazards and applicable confined-space requirements",
      "Whether asbestos exposure is below the PEL, as the sole entry criterion",
      "Whether a worker's asbestos training replaces an entry evaluation",
      "Whether a HEPA respirator removes all atmospheric hazards"
    ],
    "correct": 0,
    "explanation": "Confined-space conditions can present atmospheric and rescue hazards beyond asbestos.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(k)(9)(viii)",
    "id": "nj-100",
    "legacyId": "Additional Safety Hazards|What should a supervisor assess before assigning work in a confined space?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(k)(9)(viii) — training topics, including other hazards",
    "rationale": "A confined space can present hazards that asbestos air samples and particulate respirators do not address, including atmospheric and rescue concerns."
  },
  {
    "category": "Regulations",
    "q": "Which NJ agency issues asbestos worker and supervisor permits?",
    "a": [
      "Department of Labor and Workforce Development",
      "Department of Health",
      "Department of Environmental Protection",
      "Department of Community Affairs"
    ],
    "correct": 0,
    "explanation": "NJ LWD issues performance permits.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-101",
    "legacyId": "Regulations|Which NJ agency issues asbestos worker and supervisor permits?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "NJDOH certifies training and approves the examination; the individual permits come from NJ LWD."
  },
  {
    "category": "Regulations",
    "q": "Which NJ agency certifies asbestos training courses and approves the examination?",
    "a": [
      "Department of Health",
      "Department of Labor and Workforce Development",
      "Department of Environmental Protection",
      "Department of Community Affairs"
    ],
    "correct": 0,
    "explanation": "NJDOH oversees course certification and the approved examination.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-102",
    "legacyId": "Regulations|Which NJ agency certifies asbestos training courses and approves the examination?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "This asks about training and examination oversight, which is distinct from LWD’s permit issuance."
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
      "At the employer's office only",
      "With the building owner's project files only",
      "In the waste transporter's vehicle only"
    ],
    "correct": 0,
    "explanation": "The permit must be carried and available for inspection.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-104",
    "legacyId": "Regulations|Under NJ law, a permitted asbestos employee must keep the permit:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "Keeping a permit only in an office, owner file, or vehicle does not meet the requirement to carry it and make it available."
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
      "Only a copy of the final air-clearance report",
      "Only the building owner's renovation permit",
      "Only a general construction safety sign"
    ],
    "correct": 0,
    "explanation": "The Act requires a readily visible licensed-for-asbestos-work sign.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-106",
    "legacyId": "Regulations|A licensed NJ asbestos employer must post at the site:",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "The required licensing sign is distinct from a building permit, general safety sign, or final clearance report."
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
      "Only the contractor's private consultant",
      "Only the property owner's representative",
      "Only the employee who holds the permit"
    ],
    "correct": 0,
    "explanation": "Required credentials must be available for inspection by authorized representatives.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-110",
    "legacyId": "Legal Considerations|Who may inspect asbestos licenses and permits under the NJ Act?",
    "kind": "Recall",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "State enforcement authority is not limited to the contractor’s consultant, the owner’s representative, or the permit holder."
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
      "The building owner regardless of asbestos qualifications",
      "Any worker with a current worker permit",
      "The air-sampling technician regardless of training or authority"
    ],
    "correct": 0,
    "explanation": "Class I work must be supervised by a competent person.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-116",
    "legacyId": "Supervisory|Who supervises Class I asbestos work under OSHA?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "The title “owner,” “worker,” or “sampling technician” alone does not establish the required competent-person qualifications and authority."
  },
  {
    "category": "Supervisory",
    "q": "Before starting removal, what should a supervisor confirm?",
    "a": [
      "Controls, worker training, PPE, and regulated area are ready",
      "Training certificates alone, with controls checked after work starts",
      "PPE alone, with the regulated area established later",
      "The work schedule alone, using the prior project's controls"
    ],
    "correct": 0,
    "explanation": "Supervision includes ensuring required controls and worker protections are in place.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-117",
    "legacyId": "Supervisory|Before starting removal, what should a supervisor confirm?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Check the complete work setup before removal. Training or PPE alone does not establish that the area and controls are ready."
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
      "A visual finding that the flooring is in good condition",
      "An eight-hour air sample below the PEL",
      "A determination based solely on the building's current use"
    ],
    "correct": 0,
    "explanation": "For flooring installed no later than 1980, OSHA requires the employer to assume it contains asbestos unless an industrial hygienist determines it is asbestos-free using recognized analytical techniques.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(i)(I)",
    "id": "nj-120",
    "legacyId": "General Topics Related to Asbestos|A contractor finds resilient flooring in a building constructed in 1978. Before treating it as non-asbestos, what is required?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g)(8)(i)(I) — older flooring",
    "rationale": "Good condition, a below-limit air sample, and building use do not establish the material’s asbestos content. The flooring provision is separate from the PACM definition for older TSI and surfacing material."
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
      "The supervisor who conducts fit testing",
      "The employer's safety manager without a clinical license",
      "The worker based on a successful seal check"
    ],
    "correct": 0,
    "explanation": "The respiratory protection standard assigns the medical evaluation to a physician or other licensed health care professional.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(e)",
    "id": "nj-123",
    "legacyId": "Health and Medical Considerations|Who determines whether an employee is medically able to use a respirator?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1910.134(e) — medical evaluation",
    "rationale": "A supervisor, unlicensed safety manager, or worker cannot replace the designated physician or other licensed health care professional’s evaluation."
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
      "Yes, if the replacement is the same nominal size",
      "Yes, for any facepiece made by the same manufacturer",
      "Yes, if a user seal check is satisfactory"
    ],
    "correct": 0,
    "explanation": "Fit testing is specific to the same make, model, style, and size of respirator that the employee will use.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134#1910.134(f)",
    "id": "nj-125",
    "legacyId": "Personal Protective and Other Equipment|A worker passes a fit test with one make, model, style, and size of tight-fitting respirator. May the worker switch to a different facepiece without another fit test?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1910.134(f) — fit testing",
    "rationale": "The fit test applies to make, model, style, and size together. Nominal size, brand, or a seal check alone is insufficient."
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
      "An N95 filter",
      "An organic-vapor cartridge without particulate filtration",
      "An R95 filter"
    ],
    "correct": 0,
    "explanation": "OSHA requires high-efficiency filters for powered and non-powered air-purifying respirators used for asbestos exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(h)(3)",
    "id": "nj-127",
    "legacyId": "Personal Protective and Other Equipment|What filter efficiency does OSHA require for powered and non-powered air-purifying respirators used for asbestos?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(h)(3) — respirator selection",
    "rationale": "N95 and R95 filters are not HEPA filters. An organic-vapor cartridge alone does not provide the specified particulate filtration."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "A power cutting machine is used on asbestos-containing roofing. Unless the competent person determines that misting substantially decreases worker safety, what does OSHA require?",
    "a": [
      "Continuous misting during use",
      "Misting only when visible dust appears",
      "Dry cutting whenever the work is outdoors",
      "Replacing blade misting with respirators in every case"
    ],
    "correct": 0,
    "explanation": "The cutting machine must be continuously misted during use. Dust-collection requirements also depend on the roof surface and operation; misting and dust collection are not simply interchangeable choices.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)(8)(ii)",
    "id": "nj-128",
    "legacyId": "Work Practices, Procedures, and Disposal|A crew plans to remove asbestos-containing roofing material using a power cutter. Which control is required for the cutting machine?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g)(8)(ii) — roofing",
    "rationale": "Outdoor work and respirator use do not automatically waive misting. Waiting until dust is visible does not meet continuous misting during use."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "For Class I removal exceeding 25 linear or 10 square feet of TSI or surfacing ACM, which answer describes OSHA’s additional control-method requirement?",
    "a": [
      "Use a specified Class I control method or a compliant alternative method",
      "A positive-pressure enclosure",
      "A negative exposure assessment with no additional work controls",
      "A regulated-area sign as the only enclosure control"
    ],
    "correct": 0,
    "explanation": "The employer must use a method specified in §1926.1101(g)(5), or meet the alternative-method conditions in (g)(6). A negative-pressure enclosure is one permitted approach; it is not the only option.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-129",
    "legacyId": "Work Practices, Procedures, and Disposal|During Class I work involving more than 25 linear or 10 square feet of TSI or surfacing material, which setup is generally required unless an allowed alternative is used?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "Positive pressure, a sign alone, or an exposure assessment without the required controls is not a substitute for an authorized control method."
  },
  {
    "category": "Work Practices, Procedures, and Disposal",
    "q": "What should be done with impermeable dropcloths used beneath certain Class II removal operations?",
    "a": [
      "Keep them in place until they are cleaned with a HEPA vacuum or otherwise disposed of properly",
      "Fold them dirty and reuse them on the next project",
      "Remove them before cleaning to speed up waste transfer",
      "Dry sweep them before carrying them through clean areas"
    ],
    "correct": 0,
    "explanation": "Dropcloths used to capture asbestos debris must be cleaned with a HEPA vacuum or disposed of in a manner that prevents fiber release.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(l)",
    "id": "nj-130",
    "legacyId": "Work Practices, Procedures, and Disposal|What should be done with impermeable dropcloths used beneath certain Class II removal operations?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(l) — housekeeping",
    "rationale": "Moving or reusing contaminated dropcloths without controlled cleaning or disposal can spread fibers. Dry sweeping is not the required cleaning approach."
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
      "To establish that bulk material is non-asbestos",
      "To substitute for personal exposure monitoring",
      "To provide a substitute for decontamination"
    ],
    "correct": 0,
    "explanation": "Isolating ventilation pathways helps keep asbestos fibers from migrating to other building areas.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(g)",
    "id": "nj-133",
    "legacyId": "Work Practices, Procedures, and Disposal|Why should HVAC openings in or serving an asbestos work area be isolated when required by the work plan?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(g) — work practices",
    "rationale": "HVAC isolation addresses a migration pathway. It does not determine material content or replace exposure monitoring and worker decontamination."
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
      "Rest the worker inside the hot containment until the shift ends",
      "Wait for a high body-temperature reading before seeking help",
      "Treat it only as dehydration and send the worker home alone"
    ],
    "correct": 0,
    "explanation": "Altered mental status during heat exposure can signal a medical emergency. Obtain emergency help, move the worker out of the heat safely, and begin appropriate cooling. Sweating does not rule out heat stroke.",
    "source": "https://www.osha.gov/heat-exposure/illness-first-aid",
    "id": "nj-137",
    "legacyId": "Additional Safety Hazards|A worker in full protective clothing becomes confused, unsteady, and stops sweating in a hot containment. What should the supervisor do?",
    "kind": "Scenario",
    "sourceLabel": "OSHA — heat illness and first aid",
    "rationale": "Do not delay emergency action for the end of a shift, a temperature measurement, or an assumption that drinking water alone will resolve the problem."
  },
  {
    "category": "Regulations",
    "q": "Under the asbestos NESHAP, who must thoroughly inspect an affected facility for asbestos before a demolition or renovation begins?",
    "a": [
      "The owner or operator of the demolition or renovation activity",
      "The waste transporter, regardless of the owner/operator's actions",
      "Only the employees who will remove the material",
      "Only the laboratory that receives submitted samples"
    ],
    "correct": 0,
    "explanation": "The asbestos NESHAP requires the owner or operator to thoroughly inspect the affected facility or affected part of the facility before regulated demolition or renovation.",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-61/subpart-M/section-61.145",
    "id": "nj-138",
    "legacyId": "Regulations|Under the asbestos NESHAP, who must thoroughly inspect an affected facility for asbestos before a demolition or renovation begins?",
    "kind": "Scenario",
    "sourceLabel": "EPA §61.145 — demolition and renovation",
    "rationale": "The owner/operator has the inspection obligation; subcontracting parts of the job does not make it solely a transporter, worker, or laboratory duty."
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
      "A person holding only worker accreditation",
      "A person holding only building-inspector accreditation",
      "A supervisor whose accreditation automatically covers design"
    ],
    "correct": 0,
    "explanation": "EPA's accreditation framework establishes a distinct project-designer discipline for designing asbestos response actions.",
    "source": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-763/subpart-E/appendix-Appendix%20C%20to%20Subpart%20E%20of%20Part%20763",
    "id": "nj-140",
    "legacyId": "Regulations|Who is an accredited asbestos project designer under the federal model accreditation framework?",
    "kind": "Scenario",
    "sourceLabel": "EPA Model Accreditation Plan — project designers",
    "rationale": "Worker, inspector, and supervisor accreditation do not automatically confer the separate project-designer accreditation."
  },
  {
    "category": "Legal Considerations",
    "q": "A supervisor discovers that a required NJ worker permit has expired during an active project. What is the proper response?",
    "a": [
      "Remove the employee from regulated asbestos work until valid authorization is restored",
      "Allow work while a renewal application is being prepared",
      "Allow work under the supervisor's permit",
      "Rely on the employee's training certificate instead of a current permit"
    ],
    "correct": 0,
    "explanation": "Personnel performing covered asbestos work must hold current required permits; falsifying or sharing credentials is not an acceptable substitute.",
    "source": "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml",
    "id": "nj-141",
    "legacyId": "Legal Considerations|A supervisor discovers that a required NJ worker permit has expired during an active project. What is the proper response?",
    "kind": "Scenario",
    "sourceLabel": "NJ Asbestos Control and Licensing Act and N.J.A.C. 12:120",
    "rationale": "A pending application, someone else’s permit, or a training certificate is not a substitute for a valid required permit."
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
      "Continue removal while arranging an end-of-shift cleanup",
      "Wait for final clearance samples to locate the source",
      "Ask workers to wear stronger respirators while leaving the breach open"
    ],
    "correct": 0,
    "explanation": "The competent person must act promptly to identify and correct asbestos hazards and prevent further migration or exposure.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-143",
    "legacyId": "Supervisory|A worker reports visible debris outside containment. What should the competent person do first?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Secure and evaluate the suspected migration promptly. End-of-shift cleanup, later clearance, or stronger respirators alone leaves the breach unresolved."
  },
  {
    "category": "Supervisory",
    "q": "A subcontractor proposes a faster removal method that is not covered by the exposure assessment or work plan. What should the supervisor do?",
    "a": [
      "Pause the change and evaluate the method, exposure, and required controls before authorizing it",
      "Approve it because the subcontractor used it on another building",
      "Try it for one shift before evaluating exposure",
      "Accept a worker's seal check as proof that the new method is safe"
    ],
    "correct": 0,
    "explanation": "Changed methods can change exposures and required controls; the competent person must evaluate the conditions before work proceeds.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(o)",
    "id": "nj-144",
    "legacyId": "Supervisory|A subcontractor proposes a faster removal method that is not covered by the exposure assessment or work plan. What should the supervisor do?",
    "kind": "Scenario",
    "sourceLabel": "OSHA §1926.1101(o) — competent person",
    "rationale": "Past use elsewhere, a trial shift, or a seal check is not an assessment of the proposed operation’s exposure and controls."
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
      "In the clean room before entering the shower",
      "In the shower after carrying contaminated clothing through it",
      "At the clean exit after showering"
    ],
    "correct": 0,
    "explanation": "The equipment room is the contaminated change area used for removing and containing work clothing and equipment.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-147",
    "legacyId": "Work Practices, Procedures, and Disposal|Where should a worker remove contaminated disposable protective clothing when exiting a Class I regulated area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Removing contaminated clothing on the clean side spreads contamination; use the equipment room before entering the shower."
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
      "In the equipment room beside contaminated coveralls",
      "In the shower room on the contaminated side",
      "At the work-area entrance inside containment"
    ],
    "correct": 0,
    "explanation": "The clean room is equipped for changing into and out of street clothing and must remain free of asbestos contamination.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-149",
    "legacyId": "Work Practices, Procedures, and Disposal|Where are employees' street clothes and uncontaminated personal items kept in a three-stage decontamination facility?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "Street clothes belong on the clean side; equipment and work-area locations are contaminated transitions."
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
      "At any convenient location if workers wear respirators",
      "Only on the clean side, without a controlled connection",
      "At the project entrance regardless of the work area's location"
    ],
    "correct": 0,
    "explanation": "The standard arrangement is adjacent and connected to the regulated area, with an equipment room, shower, and clean room in series. OSHA also specifies procedures for cases where an adjacent shower is not feasible.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101#1926.1101(j)",
    "id": "nj-151",
    "legacyId": "Work Practices, Procedures, and Disposal|How must a required Class I personnel decontamination area be located in relation to the regulated area?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1926.1101(j) — hygiene facilities and practices",
    "rationale": "A convenient location without a controlled route does not meet the standard arrangement. The non-adjacent-shower provisions require additional procedures; they are not an unrestricted location choice."
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
      "One for every 15 employees of each sex",
      "One for every 20 employees of each sex",
      "One per project regardless of crew size"
    ],
    "correct": 0,
    "explanation": "OSHA's sanitation rule generally requires one shower for each 10 employees of each sex, or numerical fraction thereof, who must shower during the same shift.",
    "source": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.141",
    "id": "nj-153",
    "legacyId": "Work Practices, Procedures, and Disposal|Under OSHA sanitation requirements, what shower capacity is generally required when employees must shower during the same shift?",
    "kind": "Recall",
    "sourceLabel": "OSHA §1910.141(d)(3), incorporated by §1926.1101(j)(1)(i)(B)",
    "rationale": "The ratio is one per ten employees of each sex or fraction thereof who must shower during the shift, not one per project."
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
