import { Form, useNavigation } from "react-router-dom";
import Style from "../styles/LandingPage.style";
import main from "../assets/images/main_image.svg";
import { SearchBar, Loading } from "../components";

const Landing = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <Style>
      <div className="container page">
        <p className="secondary-text">
          Find the most comprehensive medication info!
        </p>
        <Form className="form" action="all-medications">
          {isPageLoading ? <Loading /> : <SearchBar />}
        </Form>
        <img
          src={main}
          alt="medication navigator main"
          className="img main-img"
        />
      </div>
    </Style>
  );
};

export default Landing;
