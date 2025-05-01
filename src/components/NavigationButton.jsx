import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
const NavigationButton = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <button
        className="btn-nav"
        onClick={() => {
          navigate("/");
        }}
      >
        <HiChevronLeft />
        Back
      </button>
    </div>
  );
};

export default NavigationButton;
