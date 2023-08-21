import { styled } from "@mui/system";
import Image from "next/image";

const BannerContainer = styled("section")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const BannerTextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  position: "absolute",
  gap: "10px",
  ">h2": {
    color: "#fff",
    fontSize: "24px",
    lineHeight: "24px",
    textTransform: "capitalize",
    margin: 0,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "'Oswald', sans-serif",
  },
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    ">h2": {
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
}));

const PageLocationBox = styled("div")(() => ({
  ">p": {
    color: "#fff",
    lineHeight: "1.5em",
    padding: 0,
    margin: 0,
    fontSize: "16px",
  },
}));

const BannerImg = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "relative",
}));

const BannerMask = styled("div")(() => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  position: "absolute",
  opacity: 0.2,
}));

const PageBanner = ({ PageTitle, PagePath, PageBannerImg, PageBannerAlt }) => {
  return (
    <BannerContainer>
      <BannerTextContainer>
        <h2>{PageTitle}</h2>
        <PageLocationBox>
          <p>{PagePath}</p>
        </PageLocationBox>
      </BannerTextContainer>
      <BannerImg>
        <BannerMask />
        <Image
          src={PageBannerImg}
          alt={`${PageBannerAlt}`}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "72px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </BannerImg>
    </BannerContainer>
  );
};

export default PageBanner;
