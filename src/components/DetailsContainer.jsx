import { InfoAccordion } from ".";

const DetailsContainer = ({ medication }) => {
  /**
   * {
    "spl_product_data_elements": [
        "WALGREEN Multi Symptom Flu Relief Combo Pack Acetaminophen, Dextromethorphan HBr, and Acetaminophen, Chlorpheniramine maleate, Dextromethorphan HBr WALGREEN Flu Relief Max Strength Daytime Acetaminophen, Dextromethorphan HBr ACETAMINOPHEN ACETAMINOPHEN DEXTROMETHORPHAN HYDROBROMIDE DEXTROMETHORPHAN ANHYDROUS CITRIC ACID CARAMEL MALTODEXTRIN POTASSIUM CHLORIDE SILICON DIOXIDE SUCRALOSE SUCROSE to off white, yellow, beige, and brown color Lemon WALGREEN Flu Relief Max Strength Nighttime Acetaminophen, Chlorpheniramine maleate, Dextromethorphan HBr ACETAMINOPHEN ACETAMINOPHEN CHLORPHENIRAMINE MALEATE CHLORPHENIRAMINE DEXTROMETHORPHAN HYDROBROMIDE DEXTROMETHORPHAN ANHYDROUS CITRIC ACID CARAMEL MALTODEXTRIN POTASSIUM CHLORIDE SILICON DIOXIDE SUCRALOSE SUCROSE white to off-white, yellow, beige, and brown color lemon"
    ],
    "spl_unclassified_section": [
        "Flu Relief Max Strength** Daytime Powder",
        "Other information ▪ each packet contains : potassium 6 mg ▪ store at room temperature. Protect from excessive heat and moisture.",
        "Flu Relief Max Strength** Nighttime Powder",
        "Drug Facts",
        "Other information • each packet contains : potassium 6 mg • store at room temperature. Protect from excessive heat and moisture."
    ],
    "active_ingredient": [
        "Active ingredients (in each packet) Acetaminophen 1000 mg Dextromethorphan HBr 30 mg",
        "Active ingredients (in each packet) Acetaminophen 1000 mg Chlorpheniramine maleate 4 mg Dextromethorphan HBr 30 mg"
    ],
    "purpose": [
        "Purposes Pain reliever/Fever reducer Cough suppressant",
        "Purposes Pain reliever/Fever reducer Antihistamine Cough suppressant"
    ],
    "indications_and_usage": [
        "Uses ▪ temporarily relieves these symptoms due to a common cold or flu: ▪ headache ▪ minor aches and pains ▪ cough due to minor throat and bronchial irritation ▪ minor sore throat pain ▪ temporarily reduces fever",
        "Uses ▪ temporarily relieves these symptoms due to a common cold or flu: ▪ headache ▪ minor aches and pains ▪ cough due to minor throat and bronchial irritation ▪ minor sore throat pain ▪ runny nose ▪ temporarily reduces fever"
    ],
    "warnings": [
        "Warnings Liver warning: This product contains acetaminophen. Severe liver damage may occur if you take ▪ more than 4,000 mg of acetaminophen in 24 hours ▪ with other drugs containing acetaminophen ▪ 3 or more alcoholic drinks every day while using this product Allergy alert: Acetaminophen may cause severe skin reactions. Symptoms may include: ▪ skin reddening ▪ blisters ▪ rash If a skin reaction occurs, stop use and seek medical help right away. Sore throat warning: If sore throat is severe, persists for more than 2 days, is accompanied or followed by fever, headache, rash, nausea, or vomiting consult a doctor promptly. Do not use ▪ in a child under 12 years of age ▪ if you are allergic to acetaminophen ▪ with any other drug containing acetaminophen (prescription or nonprescription). If you are not sure whether a drug contains acetaminophen, ask a doctor or pharmacist. ▪ if you are now taking a prescription monoamine oxidase inhibitor (MAOI) (certain drugs for depression, psychiatric, or emotional conditions, or Parkinson’s disease), or for 2 weeks after stopping the MAOI drug. If you do not know if your prescription drug contains an MAOI, ask a doctor or pharmacist before taking this product. Ask a doctor before use if you have ▪ liver disease ▪ a breathing problem such as emphysema or chronic bronchitis ▪ cough that occurs with too much phlegm (mucus) ▪ cough that lasts or is chronic such as occurs with smoking, asthma, or emphysema Ask a doctor or pharmacist before use if you are ▪ taking the blood thinning drug warfarin When using this product ▪ do not exceed recommended dosage. Stop use and ask a doctor if ▪ pain or cough gets worse or lasts more than 7 days ▪ fever gets worse or lasts more than 3 days ▪ redness or swelling is present ▪ new symptoms occur ▪ cough comes back or occurs with rash or headache that lasts. These could be signs of a serious condition. If pregnant or breast-feeding, ask a health professional before use. Keep out of reach of children. In case of overdose, get medical help or contact a Poison Control Center right away. Prompt medical attention is critical for adults as well as for children even if you do not notice any signs or symptoms.",
        "Warnings Liver warning: This product contains acetaminophen. Severe liver damage may occur if you take ▪ more than 4,000 mg of acetaminophen in 24 hours ▪ with other drugs containing acetaminophen ▪ 3 or more alcoholic drinks every day while using this product Allergy alert: Acetaminophen may cause severe skin reactions. Symptoms may include: ▪ skin reddening ▪ blisters ▪ rash If a skin reaction occurs, stop use and seek medical help right away. Sore throat warning: If sore throat is severe, persists for more than 2 days, is accompanied or followed by fever, headache, rash, nausea, or vomiting consult a doctor promptly. Do not use ▪ in a child under 12 years of age ▪ if you are allergic to acetaminophen ▪ with any other drug containing acetaminophen (prescription or nonprescription). If you are not sure whether a drug contains acetaminophen, ask a doctor or pharmacist. ▪ if you are now taking a prescription monoamine oxidase inhibitor (MAOI) (certain drugs for depression, psychiatric, or emotional conditions, or Parkinson’s disease), or for 2 weeks after stopping the MAOI drug. If you do not know if your prescription drug contains a MAO, ask a doctor or pharmacist before taking this product. Ask a doctor before use if you have ▪ liver disease ▪ glaucoma ▪ trouble urinating due to an enlarged prostate gland ▪ a breathing problem such as emphysema or chronic bronchitis ▪ cough that occurs with too much phlegm (mucus) ▪ cough that lasts or is chronic such as occurs with smoking, asthma, or emphysema Ask a doctor or pharmacist before use if you are ▪ taking the blood thinning drug warfarin ▪ taking sedatives or tranquilizers When using this product ▪ avoid alcoholic drinks ▪ marked drowsiness may occur ▪ alcohol, sedatives, and tranquilizers may increase drowsiness ▪ be careful when driving a motor vehicle or operating machinery ▪ excitability may occur, especially in children Stop use and ask a doctor if ▪ pain or cough gets worse or lasts more than 7 days ▪ fever gets worse or lasts more than 3 days ▪ redness or swelling is present ▪ new symptoms occur ▪ cough comes back or occurs with rash or headache that lasts. These could be signs of a serious condition. If pregnant or breast-feeding, ask a health professional before use. Keep out of reach of children. In case of overdose, get medical help or contact a Poison Control Center right away. Prompt medical attention is critical for adults as well as for children even if you do not notice any signs or symptoms."
    ],
    "do_not_use": [
        "Do not use ▪ in a child under 12 years of age ▪ if you are allergic to acetaminophen ▪ with any other drug containing acetaminophen (prescription or nonprescription). If you are not sure whether a drug contains acetaminophen, ask a doctor or pharmacist. ▪ if you are now taking a prescription monoamine oxidase inhibitor (MAOI) (certain drugs for depression, psychiatric, or emotional conditions, or Parkinson’s disease), or for 2 weeks after stopping the MAOI drug. If you do not know if your prescription drug contains an MAOI, ask a doctor or pharmacist before taking this product.",
        "Do not use ▪ in a child under 12 years of age ▪ if you are allergic to acetaminophen ▪ with any other drug containing acetaminophen (prescription or nonprescription). If you are not sure whether a drug contains acetaminophen, ask a doctor or pharmacist. ▪ if you are now taking a prescription monoamine oxidase inhibitor (MAOI) (certain drugs for depression, psychiatric, or emotional conditions, or Parkinson’s disease), or for 2 weeks after stopping the MAOI drug. If you do not know if your prescription drug contains a MAO, ask a doctor or pharmacist before taking this product."
    ],
    "ask_doctor": [
        "Ask a doctor before use if you have ▪ liver disease ▪ a breathing problem such as emphysema or chronic bronchitis ▪ cough that occurs with too much phlegm (mucus) ▪ cough that lasts or is chronic such as occurs with smoking, asthma, or emphysema",
        "Ask a doctor before use if you have ▪ liver disease ▪ glaucoma ▪ trouble urinating due to an enlarged prostate gland ▪ a breathing problem such as emphysema or chronic bronchitis ▪ cough that occurs with too much phlegm (mucus) ▪ cough that lasts or is chronic such as occurs with smoking, asthma, or emphysema"
    ],
    "ask_doctor_or_pharmacist": [
        "Ask a doctor or pharmacist before use if you are ▪ taking the blood thinning drug warfarin",
        "Ask a doctor or pharmacist before use if you are ▪ taking the blood thinning drug warfarin ▪ taking sedatives or tranquilizers"
    ],
    "when_using": [
        "When using this product ▪ do not exceed recommended dosage.",
        "When using this product ▪ avoid alcoholic drinks ▪ marked drowsiness may occur ▪ alcohol, sedatives, and tranquilizers may increase drowsiness ▪ be careful when driving a motor vehicle or operating machinery ▪ excitability may occur, especially in children"
    ],
    "stop_use": [
        "Stop use and ask a doctor if ▪ pain or cough gets worse or lasts more than 7 days ▪ fever gets worse or lasts more than 3 days ▪ redness or swelling is present ▪ new symptoms occur ▪ cough comes back or occurs with rash or headache that lasts. These could be signs of a serious condition.",
        "Stop use and ask a doctor if ▪ pain or cough gets worse or lasts more than 7 days ▪ fever gets worse or lasts more than 3 days ▪ redness or swelling is present ▪ new symptoms occur ▪ cough comes back or occurs with rash or headache that lasts. These could be signs of a serious condition."
    ],
    "pregnancy_or_breast_feeding": [
        "If pregnant or breast-feeding, ask a health professional before use.",
        "If pregnant or breast-feeding, ask a health professional before use."
    ],
    "keep_out_of_reach_of_children": [
        "Keep out of reach of children. In case of overdose, get medical help or contact a Poison Control Center right away. Prompt medical attention is critical for adults as well as for children even if you do not notice any signs or symptoms.",
        "Keep out of reach of children. In case of overdose, get medical help or contact a Poison Control Center right away. Prompt medical attention is critical for adults as well as for children even if you do not notice any signs or symptoms."
    ],
    "dosage_and_administration": [
        "Directions ▪ do not use more than directed ▪ take every 6 hours, while symptoms persist. Do not take more than 3 packets in 24 hours unless directed by a doctor. Age Dose adults and children 12 years of age and over one packet children under 12 years of age do not use ▪ dissolve contents of one packet into 8 oz. hot water; sip while hot. Consume the entire drink within 10-15 minutes. ▪ if using a microwave, add contents of one packet to 8 oz. of cool water; stir briskly before and after heating. Do not overheat.",
        "Directions ▪ do not use more than directed ▪ take every 6 hours, while symptoms persist. Do not take more than 3 packets in 24 hours unless directed by a doctor. Age Dose adults and children 12 years of age and over one packet children under 12 years of age do not use ▪ dissolve contents of one packet into 8 oz. hot water; sip while hot. Consume entire drink within 10-15 minutes. ▪ if using a microwave, add contents of one packet to 8 oz. of cool water; stir briskly before and after heating. Do not overheat"
    ],
    "dosage_and_administration_table": [
        "<table width=\"98.88%\"><col width=\"65%\"/><col width=\"34%\"/><tbody><tr><td valign=\"top\" styleCode=\"Rrule Botrule Lrule Toprule \"><list listType=\"ordered\"><item><caption> </caption>Age</item></list></td><td valign=\"top\" styleCode=\"Rrule Botrule Lrule Toprule \"><list listType=\"ordered\"><item><caption> </caption>Dose</item></list></td></tr><tr><td valign=\"top\" styleCode=\"Rrule Lrule Botrule \"><list listType=\"ordered\"><item><caption> </caption>adults and children 12 years of age and over</item></list></td><td valign=\"top\" styleCode=\"Rrule Lrule Botrule \"><list listType=\"ordered\"><item><caption> </caption>one packet</item></list></td></tr><tr><td valign=\"top\" styleCode=\"Rrule Botrule Lrule \"><list listType=\"ordered\"><item><caption> </caption>children under 12 years of age</item></list></td><td valign=\"top\" styleCode=\"Rrule Botrule Lrule \"><list listType=\"ordered\"><item><caption> </caption>do not use</item></list></td></tr></tbody></table>",
        "<table width=\"98.7%\"><col width=\"51%\"/><col width=\"48%\"/><tbody><tr><td valign=\"top\" styleCode=\"Rrule Botrule Lrule Toprule \"><list listType=\"ordered\"><item><caption> </caption>Age</item></list></td><td valign=\"top\" styleCode=\"Rrule Botrule Lrule Toprule \"><list listType=\"ordered\"><item><caption> </caption>Dose</item></list></td></tr><tr><td valign=\"top\" styleCode=\"Rrule Lrule Botrule \"><list listType=\"ordered\"><item><caption> </caption>adults and children 12 years of age and over</item></list></td><td valign=\"top\" styleCode=\"Rrule Lrule Botrule \"><list listType=\"ordered\"><item><caption> </caption>one packet</item></list></td></tr><tr><td valign=\"top\" styleCode=\"Rrule Botrule Lrule \"><list listType=\"ordered\"><item><caption> </caption>children under 12 years of age</item></list></td><td valign=\"top\" styleCode=\"Rrule Botrule Lrule \"><list listType=\"ordered\"><item><caption> </caption>do not use</item></list></td></tr></tbody></table>"
    ],
    "inactive_ingredient": [
        "Inactive ingredients anhydrous citric acid, caramel, flavor, maltodextrin, potassium chloride, silica, sucralose, sucrose.",
        "Inactive ingredients anhydrous citric acid, caramel, flavor, maltodextrin, potassium chloride, silica, sucralose, sucrose."
    ],
    "questions": [
        "Questions or comments? 1-866-467-2748",
        "Questions or comments? 1-866-467-2748"
    ],
    "other_safety_information": [
        "Other Safety Information READ ALL WARNINGS AND DIRECTIONS ON CARTON BEFORE USE. KEEP CARTON FOR REFERENCE. DO NOT DISCARD. DO NOT TAKE BOTH PRODUCTS AT THE SAME TIME. DO NOT TAKE MORE THAN 3 DOSES IN TOTAL IN ANY 24 HOUR PERIOD. DO NOT TAKE A DOSE OF THE NIGHTTIME PRODUCT SOONER THAN 4 HOURS AFTER THE LAST DOSE OF THE DAYTIME PRODUCT UNLESS DIRECTED BY A DOCTOR. TAMPER-EVIDENT: DO NOT USE INNER SEALED PACKET IF TORN OR BROKEN. Distributed by:"
    ],
    "package_label_principal_display_panel": [
        "Principal Display Panel *Compare to the active ingredients in Theraflu Multi-Symptom Flu Relief Max Strength** Daytime & Nighttime. NDC 0363-5590-12 FLU RELIEF MAX STRENGTH** 6 x DAYTIME Acetaminophen Pain Reliever/Fever Reducer Dextromethorphan HBr Cough Suppressant 6 x NIGHTTIME Acetaminophen Pain Reliever/Fever Reducer Chlorpheniramine Maleate Antihistamine Dextromethorphan HBr Cough Suppressant Hot liquid therapy that relieves: • Fever • Body ache • Headache • Sore throat pain • Cough • Runny nose (Nighttime only) Free from synthetic dyes 6 DAYTIME PACKETS 6 NIGHTTIME PACKETS 12 TOTAL PACKETS Honey Lemon Natural & Artificial Flavored WAG Flu Relief DayTime and NightTime Powder 12ct"
    ],
    "set_id": "b7b1d604-921d-4ae7-93de-dcf690d421b4",
    "id": "b7b1d604-921d-4ae7-93de-dcf690d421b4",
    "effective_time": "20250321",
    "version": "1",
    "openfda": {
        "application_number": [
            "M012"
        ],
        "brand_name": [
            "WALGREEN Multi Symptom Flu Relief Combo Pack"
        ],
        "generic_name": [
            "ACETAMINOPHEN, DEXTROMETHORPHAN HBR, AND ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HBR"
        ],
        "manufacturer_name": [
            "WALGREENS CO."
        ],
        "product_ndc": [
            "0363-5590"
        ],
        "product_type": [
            "HUMAN OTC DRUG"
        ],
        "spl_id": [
            "b7b1d604-921d-4ae7-93de-dcf690d421b4"
        ],
        "spl_set_id": [
            "b7b1d604-921d-4ae7-93de-dcf690d421b4"
        ],
        "package_ndc": [
            "0363-5590-12",
            "0363-5390-06",
            "0363-5490-06"
        ],
        "is_original_packager": [
            true
        ]
    }
}
   */
  const {
    openfda = [],
    keep_out_of_reach_of_children = [],
    do_not_use = [],
    warnings = [],
    when_using = [],
    pregnancy_or_breast_feeding = [],
    ask_doctor_or_pharmacist = [],
    indications_and_usage = [],
    questions = [],
  } = medication;

  return (
    <div className="container condition">
      <h3 className="title">Medication: {openfda.brand_name}</h3>
      <InfoAccordion title="Usages">
        <p> {indications_and_usage.join(". ")} </p>
        <p> {when_using} </p>
        <p> {pregnancy_or_breast_feeding[0]} </p>
        <p> {ask_doctor_or_pharmacist} </p>
        <p> {questions[0]} </p>
      </InfoAccordion>
      <InfoAccordion title="Warnings">
        <p> {warnings[0]} </p>
      </InfoAccordion>
    </div>
  );
};

export default DetailsContainer;
