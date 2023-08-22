import { styled } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import HomePageBanner from "../../public/images/HomePage/HomePageBanner.jpg";

const BannerContainer = styled("section")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const BannerTextContainer = styled("div")(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.2)",
  padding: "40px 4.5vw 20px",
  position: "absolute",
  ">h2": {
    color: "#fff",
    fontSize: "40px",
    lineHeight: "40px",
    paddingBottom: "0.5em",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 0,
  },
  ">p": {
    color: "#fff",
    fontSize: "20px",
    padding: "0 20%",
  },
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    ">h2": {
      fontSize: "24px",
      lineHeight: "24px",
    },
    ">p": {
      fontSize: "14px",
    },
  },
}));

const ContactLinkBox = styled("div")(() => ({
  height: "50px",
  lineHeight: "50px",
  backgroundColor: "#f99e01",
  fontWeight: "bold",
  margin: "40px auto",
  width: "180px",
  ">a": {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    display: "block",
  },
}));

const BannerImg = styled("div")(() => ({
  width: "100%",
  height: "70vh",
  position: "relative",
}));

const BannerMask = styled("div")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  position: "absolute",
  opacity: 0.1,
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTextContainer>
        <h2>Custom Kitchen Design</h2>
        <p>
          Make your dream kitchen a reality with our kitchen design services
        </p>
        <ContactLinkBox>
          <Link href="/contact">Consult Now</Link>
        </ContactLinkBox>
      </BannerTextContainer>
      <BannerImg>
        <BannerMask />
        <Image
          src={HomePageBanner}
          alt="home page banner"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </BannerImg>
    </BannerContainer>
  );
};

export default Banner;
