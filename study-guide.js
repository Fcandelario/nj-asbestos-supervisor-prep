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
function usedAcronyms(q){
  const text=q.q+" "+q.a.join(" ")+" "+q.explanation+" "+q.category;
  return Object.keys(ACRONYMS).filter(term=>new RegExp("\\b"+term+"\\b","i").test(text));
}
function questionSource(q){ return q.source; }
