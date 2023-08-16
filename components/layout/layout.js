import MainNavigation from "./main-navigation";
import { styled } from "@mui/system";

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
    </>
  );
}

export default Layout;
