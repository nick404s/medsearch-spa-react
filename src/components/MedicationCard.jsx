import { useState } from "react";
import { DetailsModal } from ".";

const MedicationCard = ({ medication }) => {
  const [selectedMedication, setSelectedMedication] = useState(null);

  const {
    openfda = [],
    purpose = [],
    active_ingredient = [],
    inactive_ingredient = [],
  } = medication;
  const { brand_name = [] } = openfda;

  return (
    <>
      <div className="medication-row">
        <button
          onClick={() => setSelectedMedication(medication)}
          className="btn-link"
        >
          {brand_name}
        </button>
      </div>
      <div className="medication-row">{purpose}</div>
      <div className="medication-row">{active_ingredient}</div>
      <div className="medication-row">{inactive_ingredient}</div>
      <DetailsModal
        medication={selectedMedication}
        onClose={() => setSelectedMedication(null)}
      />
    </>
  );
};

export default MedicationCard;
