import { styled } from "@mui/system";

const LogoTitle = styled("h1")(({ theme }) => ({
  color: "#000",
  fontSize: "32px",
  textTransform: "uppercase",
  fontFamily: "'Oswald', sans-serif",
  lineHeight: "1em",
  fontWeight: 500,
  margin: 0,
  [theme.breakpoints.down("lg")]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down("md")]: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: 500,
  },
}));

const Logo = () => {
  return (
    <>
      <LogoTitle>For Kitchen</LogoTitle>
    </>
  );
};

export default Logo;
