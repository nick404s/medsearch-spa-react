import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
const NavigationButton = ({ route }) => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <button
        className="btn-nav"
        onClick={() => {
          navigate(-1);
        }}
      >
        <HiChevronLeft /> Back
      </button>
    </div>
  );
};

export default NavigationButton;
