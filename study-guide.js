const ACRONYMS={
  ACM:["Asbestos-containing material","Material with more than 1% asbestos under the cited OSHA and NJ definitions."],
  ACBM:["Asbestos-containing building material","A building material that contains asbestos; NJ rules often use this term."],
  PACM:["Presumed asbestos-containing material","Certain older thermal insulation and surfacing materials are presumed to contain asbestos until properly rebutted."],
  TSI:["Thermal system insulation","Insulation on pipes, boilers, ducts, and similar systems to limit heat gain or loss."],
  PPE:["Personal protective equipment","Equipment such as protective clothing and respirators used alongside engineering controls."],
  PEL:["Permissible exposure limit","OSHA's eight-hour asbestos limit is 0.1 fiber per cubic centimeter."],
  EL:["Excursion limit","OSHA's 30-minute asbestos limit is 1.0 fiber per cubic centimeter."],
  TWA:["Time-weighted average","An exposure average over a defined period, usually eight hours for the asbestos PEL."],
  HEPA:["High-efficiency particulate air","Filtration rated to capture at least 99.97% of 0.3-micrometer particles."],
  PCM:["Phase-contrast microscopy","A fiber-counting air-analysis method that cannot identify asbestos mineral type by itself."],
  AHERA:["Asbestos Hazard Emergency Response Act","Federal school asbestos management law administered under EPA rules."],
  NESHAP:["National Emission Standards for Hazardous Air Pollutants","EPA air-emission rules that include asbestos demolition, renovation, and waste requirements."],
  RACM:["Regulated asbestos-containing material","Material subject to the asbestos NESHAP definition and work-practice rules."],
  EPA:["Environmental Protection Agency","Federal agency responsible for asbestos NESHAP and school asbestos rules."],
  OSHA:["Occupational Safety and Health Administration","Federal agency responsible for workplace asbestos exposure standards."],
  NJDOH:["New Jersey Department of Health","Certifies asbestos training and oversees the recognized exam process."],
  NJ:["New Jersey","The state whose supervisor permit and licensing rules are being studied."],
  LWD:["New Jersey Department of Labor and Workforce Development","State agency that issues asbestos employer licenses and worker or supervisor permits."],
  CIH:["Certified industrial hygienist","A professional credential relevant to some exposure and assessment decisions."]
};
const STUDY_GUIDES=[
  [/\b(?:Class I|Class II|Class III|Class IV)\b/i,"OSHA groups asbestos construction work by what the worker does and which material is disturbed. Class I is removal of thermal system insulation or surfacing material. Class II is removal of other ACM, such as flooring. Class III covers repair and maintenance disturbance; Class IV covers certain custodial and maintenance contact. The class changes which controls and training apply."],
  [/\b(?:PEL|excursion limit|TWA|exposure monitoring|air sample|breathing zone|negative exposure assessment)\b/i,"The eight-hour permissible exposure limit and the 30-minute excursion limit answer different questions: one measures a full-shift average, the other a shorter high-exposure period. Representative personal samples are taken in the worker's breathing zone. A negative exposure assessment must be supported by evidence for the particular operation; it is not a blanket declaration that an entire building is safe."],
  [/\b(?:respirator|fit test|seal check|cartridge|facial hair)\b/i,"Respirators are one layer of protection within a written program. The employer must select an appropriate respirator, medically evaluate the user, fit-test tight-fitting facepieces, train users, and maintain the equipment. A user seal check happens at each donning; it never replaces a formal fit test."],
  [/\b(?:medical surveillance|asbestosis|mesothelioma|lung.cancer|latency|smoking)\b/i,"Asbestos diseases often develop only after a long latency, so a worker may feel well even after meaningful exposure. Asbestosis is lung scarring; mesothelioma is a cancer of body-cavity linings. Smoking and asbestos exposure together greatly increase lung-cancer risk. Medical surveillance supports detection and evaluation, but it does not replace exposure prevention."],
  [/\b(?:wet|HEPA|dry sweep|compressed air|clean|decontamination|glove bag|barrier|containment|negative.pressure|waste)\b/i,"A supervisor should think of fiber control as a chain: isolate the work area, keep the material adequately wet where required, use approved removal techniques, clean with HEPA vacuuming and wet methods, then contain and label the waste. Breaks in that chain can spread fibers into clean areas. The exact method depends on work class, material, and applicable site rules."],
  [/\b(?:NESHAP|EPA|demolition|renovation|RACM)\b/i,"EPA's asbestos NESHAP controls emissions from covered demolition and renovation. A facility must be thoroughly inspected before work, and regulated asbestos-containing material can trigger notice, removal, wetting, and waste-handling rules. OSHA's worker-exposure rules and NJ's licensing rules can apply at the same project; satisfying one does not automatically satisfy the others."],
  [/\b(?:permit|license|NJDOH|LWD|New Jersey|notification|reciprocity)\b/i,"New Jersey separates training and exam oversight from permission to perform work. NJDOH certifies approved training and recognizes the examination; NJ LWD issues employer licenses and individual worker or supervisor permits. Verify the specific permit, employer license, and notice requirements for the planned work before starting."],
  [/\b(?:record|falsif|backdate|complaint|inspect|legal)\b/i,"Asbestos project records make decisions and compliance traceable: who worked, what controls were used, what monitoring showed, and what changed. Record the actual facts and dates. NJ's asbestos law gives enforcement officials inspection powers and protects employees who report violations."],
  [/\b(?:competent person|supervisor|work plan|containment is damaged|conditions change)\b/i,"A competent person is expected to identify existing and predictable asbestos hazards and have authority to correct them promptly. Supervision is active throughout the job: inspect the area, verify worker protection, respond to damaged controls, and reassess work when conditions change."],
  [/\b(?:electrical|fall|heat stress|confined space)\b/i,"Asbestos controls can interact with ordinary construction hazards. Wet work can worsen electrical risk, protective clothing can increase heat burden, and ceiling or confined-space work can add fall or atmospheric hazards. A supervisor needs a plan for these hazards before assigning the task."]
];
const CATEGORY_GUIDES={
  "General Topics Related to Asbestos":"Distinguish the mineral, the building material, and the way the material behaves when disturbed. Friability and work method affect how readily fibers can become airborne. A material's appearance alone cannot reliably establish asbestos content.",
  "Health and Medical Considerations":"Preventing inhalation remains the main goal because asbestos-related illness can take years or decades to appear. Medical monitoring and symptom awareness are important, but a worker who feels healthy may still need full exposure controls.",
  "Personal Protective and Other Equipment":"Choose equipment for the expected hazard and use it as part of a complete protection program. A respirator must fit and be maintained; protective clothing and decontamination prevent fibers from leaving the regulated area.",
  "Work Practices, Procedures, and Disposal":"Plan the work area before disturbance, use methods that suppress fibers, maintain containment, and package waste securely. Controls should remain effective through final cleaning and transfer of waste.",
  "Testing Methodologies":"Air samples help determine worker exposure and whether controls are effective. Read the sampling period, location, and method before comparing a result with a regulatory limit.",
  "Additional Safety Hazards":"An asbestos job is also a construction job. Evaluate electrical, fall, confined-space, and heat hazards alongside fiber exposure.",
  "Regulations":"OSHA, EPA, NJDOH, and NJ LWD govern different parts of an asbestos job. Identify the work activity and facility before deciding which requirements apply.",
  "Legal Considerations":"Accurate credentials, notices, and records are part of compliance. Document the actual work and respond promptly when conditions differ from the plan.",
  "Supervisory":"The supervisor must confirm that controls and personnel are ready, inspect the job, and correct hazards as conditions change."
};
function studyGuide(q){
  const text=q.q+" "+q.a.join(" ")+" "+q.explanation;
  return STUDY_GUIDES.find(([pattern])=>pattern.test(text))?.[1]||CATEGORY_GUIDES[q.category];
}
function usedAcronyms(q){
  const text=q.q+" "+q.a.join(" ")+" "+q.explanation+" "+q.category;
  return Object.keys(ACRONYMS).filter(term=>new RegExp("\\b"+term+"\\b","i").test(text));
}
function questionSource(q){
  if(q.source)return q.source;
  const text=q.q+" "+q.explanation;
  if(/\b(?:NESHAP|EPA|demolition|renovation)\b/i.test(text))return "https://www.epa.gov/asbestos/overview-asbestos-national-emission-standards-hazardous-air-pollutants-neshap";
  if(/\bAHERA\b/i.test(text))return "https://www.epa.gov/asbestos/asbestos-and-school-buildings";
  if(/\b(?:New Jersey|NJ|NJDOH|LWD|permit|license)\b/i.test(text))return "https://www.nj.gov/labor/safetyandhealth/resources-support/laws-regulations/asbestosact.shtml";
  return "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1101";
}
