import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
const NavigationButton = ({ route }) => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      {/* <Link to={".."} preventScrollReset> */}
      <button
        className="btn-nav"
        onClick={() => {
          navigate(route);
        }}
      >
        <HiChevronLeft /> Back
      </button>
      {/* </Link> */}
    </div>
  );
};

export default NavigationButton;
