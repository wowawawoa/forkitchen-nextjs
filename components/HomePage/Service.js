import { styled } from "@mui/system";
import Image from "next/image";
import ServiceImg01 from "../../public/Images/HomePage/ServiceImg01.jpg";
import ServiceImg02 from "../../public/Images/HomePage/ServiceImg02.jpg";
import ServiceImg03 from "../../public/Images/HomePage/ServiceImg03.jpg";

const ServiceContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  margin: "56px auto",
  width: "1260px",
  ">h2": {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "32px",
    textTransform: "uppercase",
    padding: "0 0 16px 0",
    margin: 0,
    fontWeight: 500,
    lineHeight: "32px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    margin: "28px auto 0",
    ">h2": {
      fontSize: "24px",
      lineHeight: "24px",
      padding: 0,
    },
  },
}));

const ServiceList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: 0,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ListItem = styled("li")(({ theme }) => ({
  listStyle: "none",
  width: "32%",
  margin: "0 0 20px",
  backgroundColor: "#f5f5f5",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ListTextContent = styled("div")(({ theme }) => ({
  padding: "0 20px 20px",
  ">h3": {
    fontSize: "22px",
    fontWeight: "600",
    color: "#000",
    padding: "10px 0 15px",
    fontFamily: "'Mukta Vaani', sans-serif",
    lineHeight: "1.5em",
    margin: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      padding: "10px 0",
    },
  },
  ">p": {
    padding: 0,
    margin: 0,
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.5em",
    fontFamily: "'Mukta Vaani', sans-serif",
  },
}));

const Service = () => {
  return (
    <ServiceContainer>
      <h2>Service</h2>
      <ServiceList>
        <ListItem>
          <Image
            src={ServiceImg01}
            alt="service"
            style={{ objectFit: "cover", width: "100%", height: "270px" }}
          />
          <ListTextContent>
            <h3>Ready Made Kitchens</h3>
            <p>
              For Kitchen manufactures readymade kitchen cabinets using diverse
              materials, finishes, as well as, colours and styles to offer great
              convenience and are budget-friendly. If you want to build new
              kitchen cabinets but don&apos;t want to go through the trouble and
              expense of having them custom made, then ready-made kitchen
              cabinets may be an easy and viable solution for you. Besides,
              installing readymade kitchen cabinets is a lot quicker, saving you
              valuable time.
            </p>
          </ListTextContent>
        </ListItem>
        <ListItem>
          <Image
            src={ServiceImg02}
            alt="service"
            style={{ objectFit: "cover", width: "100%", height: "270px" }}
          />
          <ListTextContent>
            <h3>Kitchen Renovation</h3>
            <p>
              With over 5 years of rock-solid experience, For Kitchen is your
              local custom kitchen renovation specialist, providing the ultimate
              in kitchen renovations in Adelaide and nearby areas. You can
              expect beautiful design, seamless build quality, and professional
              installation for your custom-made kitchen renovation.
            </p>
          </ListTextContent>
        </ListItem>
        <ListItem>
          <Image
            src={ServiceImg03}
            alt="service"
            style={{ objectFit: "cover", width: "100%", height: "270px" }}
          />
          <ListTextContent>
            <h3>Kitchen Design</h3>
            <p>
              Before commencing any work, we&apos;ll give you a 3D kitchen
              design, so you can look for yourself how your new or renovated
              kitchen will look once the work is completed. That means
              you&apos;ll know in advance how your dream kitchen will look and
              get peace of mind concerning your decisions. Besides, we are aware
              and will make sure your newly built or renovated kitchen adheres
              to the standard dimensions for Australian kitchen design
              guaranteeing optimum ergonomics.
            </p>
          </ListTextContent>
        </ListItem>
      </ServiceList>
    </ServiceContainer>
  );
};

export default Service;
