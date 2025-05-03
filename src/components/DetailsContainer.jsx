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

  const renderedWarnings = warnings[0].split(".").map((warning, index) => {
    return <p key={index}> {`${warning}.`}</p>;
  });

  return (
    <div className="container condition">
      <h4 className="title">
        Medication: <span className="result"> {openfda.brand_name}</span>
      </h4>
      <InfoAccordion title="Usages">
        <p> {indications_and_usage.join(". ")} </p>
        <p> {when_using} </p>
        <p> {pregnancy_or_breast_feeding[0]} </p>
        <p> {ask_doctor_or_pharmacist} </p>
        <p> {questions[0]} </p>
      </InfoAccordion>
      <InfoAccordion title="Warnings">
        {/* <p> {renderedWarnings} </p> */}
        {renderedWarnings}
      </InfoAccordion>
    </div>
  );
};

export default DetailsContainer;
