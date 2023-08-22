import MainNavigation from "./main-navigation";
import { styled } from "@mui/system";
import Footer from "./footer";

const MainContent = styled("main")(({ theme }) => ({
  paddingTop: "80px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "50px",
  },
}));

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <MainContent>{props.children}</MainContent>
      <Footer />
    </>
  );
}

export default Layout;
