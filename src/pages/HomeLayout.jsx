import { Outlet } from "react-router-dom";
import NavbarStyle from "../styles/NavBar.style";
import { Footer, Logo } from "../components";
import FooterStyle from "../styles/Footer.style";

const HomeLayout = () => {
  return (
    <>
      <NavbarStyle>
        <Logo />
      </NavbarStyle>
      <main>
        <Outlet />
      </main>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  );
};

export default HomeLayout;
