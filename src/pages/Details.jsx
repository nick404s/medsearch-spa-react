import { Navigate, useLocation, useNavigation } from "react-router-dom";
import { NavigationButton, DetailsContainer, Loading } from "../components";
import Style from "../styles/Details.style";

const Details = () => {
  const location = useLocation();
  const routeToReturn = location.state?.routeToReturn || "/";
  const medication = location.state?.medication || null;

  if (!medication) {
    return <Navigate to={routeToReturn} />;
  }

  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <Style>
      <div className="page">
        <div className="nav-container">
          <NavigationButton isBack={true} />
          <NavigationButton isBack={false} />
        </div>
        {isPageLoading ? (
          <Loading />
        ) : (
          <div className="details">
            <DetailsContainer medication={medication} />
          </div>
        )}
      </div>
    </Style>
  );
};

export default Details;
