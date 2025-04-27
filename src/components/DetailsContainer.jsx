import { InfoAccordion } from ".";

const DetailsContainer = ({ medication }) => {
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
