import Link from "next/link";
import Logo from "./logo";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexWrap: "warp",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",
  position: "fixed",
  zIndex: 999,
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#f99e01",
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 15px",
  },
}));

const NavContainer = styled("nav")((theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
}));

const NavBox = styled("ul")(() => ({
  display: "flex",
  padding: 0,
  margin: 0,
}));

const NavList = styled("li")(() => ({
  listStyle: "none",
  padding: "0 25px",
  ">a": {
    lineHeight: "80px",
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#333",
    ":hover": {
      color: "#f99e01",
      transition: "0.4s",
    },
  },
}));

const activeStyle = {
  color: "#f99e01",
  textDecoration: "underline",
  textUnderlineOffset: "8px",
};

const PhoneNumContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "40px",
  ">p": {
    color: "rgba(0,0,0,0.87)",
    fontWeight: 600,
    fontSize: "24px",
    margin: 0,
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const IconBox = styled("div")(() => ({
  backgroundColor: "#f99e01",
  height: "36px",
  width: "36px",
  borderRadius: "4px",
  marginRight: "15px",
  textAlign: "center",
  lineHeight: "40px",
}));

const StyledPhoneInTalkIcon = styled(PhoneInTalkIcon)(() => ({
  backgroundColor: "#f99e01",
  color: "#fff",
  height: "36px",
  width: "24px",
}));

function MainNavigation() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo />
      </Link>
      <NavContainer>
        <NavBox>
          <NavList>
            <Link href="/" style={pathname === "/" ? activeStyle : undefined}>
              Home
            </Link>
          </NavList>
          <NavList>
            <Link
              href="/about"
              style={pathname === "/about" ? activeStyle : undefined}
            >
              About
            </Link>
          </NavList>
          <NavList>
            <Link
              href="/kitchens"
              style={pathname === "/kitchens" ? activeStyle : undefined}
            >
              Kitchens
            </Link>
          </NavList>
          <NavList>
            <Link
              href="/gallery"
              style={pathname === "/gallery" ? activeStyle : undefined}
            >
              Gallery
            </Link>
          </NavList>
          <NavList>
            <Link
              href="/contact"
              style={pathname === "/contact" ? activeStyle : undefined}
            >
              Contact Us
            </Link>
          </NavList>
        </NavBox>
        <PhoneNumContainer>
          <IconBox>
            <StyledPhoneInTalkIcon />
          </IconBox>
          <p>(08) 7001 6136</p>
        </PhoneNumContainer>
      </NavContainer>
    </HeaderContainer>
  );
}

export default MainNavigation;
