import { Link } from "react-router-dom";
import { useAllMedicationsContext } from "../pages/AllMedications";

const MedicationCard = ({ medication }) => {
  const {
    openfda = [],
    purpose = [],
    active_ingredient = [],
    inactive_ingredient = [],
  } = medication;
  const { brand_name = [] } = openfda;

  const { searchBy, searchTerm } = useAllMedicationsContext();
  const routeToReturn = `${window.location.pathname}?searchBy=${searchBy}&searchTerm=${searchTerm}`;

  return (
    <>
      <div className="medication-row">
        <button className="btn-link">
          <Link
            to={`/details/medication/${brand_name}`}
            state={{ medication, routeToReturn, searchBy }}
            className="btn-link"
          >
            {brand_name}
          </Link>
        </button>
      </div>
      <div className="medication-row">{purpose}</div>
      <div className="medication-row">{active_ingredient}</div>
      <div className="medication-row">{inactive_ingredient}</div>
    </>
  );
};

export default MedicationCard;
