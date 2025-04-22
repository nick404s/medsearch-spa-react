import { useRouteError } from "react-router-dom";
import { NavigationButton } from "../components";
import Style from "../styles/Error.style";
const Error = () => {
  const error = useRouteError();

  // console.log("----- error\n: ", error);

  if (error.status === 404) {
    return (
      <Style>
        <div>
          <h3>404 Not Found</h3>
          {error.response ? (
            <p>Sorry, {error.response.data.detail}</p>
          ) : (
            <p>Sorry, the page you are looking for does not exist.</p>
          )}
          <NavigationButton />
        </div>
      </Style>
    );
  }

  return (
    <Style>
      <div>
        <h3>Error. Something went wrong...</h3>
        {/* diplay the actual error */}
        <p>{error.message}</p>
      </div>
      <NavigationButton />
    </Style>
  );
};

export default Error;
