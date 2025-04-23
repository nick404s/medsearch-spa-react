import { useNavigate } from "react-router-dom";
import { HiChevronLeft, HiHome } from "react-icons/hi";
const NavigationButton = ({ route, isBack }) => {
  const navigate = useNavigate();

  if (isBack) {
    return (
      <div className="navigation">
        <button
          className="btn-nav"
          onClick={() => {
            navigate(-1);
          }}
        >
          <HiChevronLeft />
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="navigation">
      <button
        className="btn-nav"
        onClick={() => {
          navigate("/");
        }}
      >
        <HiHome />
        Home
      </button>
    </div>
  );
};

export default NavigationButton;
