import MedicationCard from "./MedicationCard";

const MedicationTable = ({ currentItems }) => {
  return (
    <div className="table-container">
      <div className="header-row">
        <h4>Medication</h4>
      </div>
      <div className="header-row">
        <h4>Purpose</h4>
      </div>
      <div className="header-row">
        <h4>Active Ingredient</h4>
      </div>
      <div className="header-row">
        <h4>Inactive Ingredient</h4>
      </div>
      {currentItems.map((medication) => {
        return <MedicationCard key={medication.id} medication={medication} />;
      })}
    </div>
  );
};

export default MedicationTable;
