import { useNavigate } from "react-router-dom";
import { HiChevronLeft, HiHome } from "react-icons/hi";
const NavigationButton = ({ isBack }) => {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <button
        className="btn-nav"
        onClick={() => {
          navigate("/");
        }}
      >
        {isBack ? (
          <>
            <HiChevronLeft />
            Back
          </>
        ) : (
          <>
            <HiHome />
            Home
          </>
        )}
      </button>
    </div>
  );
};

export default NavigationButton;
