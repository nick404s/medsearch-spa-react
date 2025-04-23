import { useNavigate } from "react-router-dom";
import { HiChevronLeft, HiHome } from "react-icons/hi";
const NavigationButton = ({ route, isBack = true, text }) => {
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
          {text || "Back"}
        </button>
      </div>
    );
  }

  return (
    <div className="navigation">
      <button
        className="btn-nav"
        onClick={() => {
          navigate(route);
        }}
      >
        <HiHome />
        {text || "Home"}
      </button>
    </div>
  );
};

export default NavigationButton;
