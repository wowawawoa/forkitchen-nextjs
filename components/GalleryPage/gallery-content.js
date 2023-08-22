import { styled } from "@mui/system";
import Image from "next/image";
import GalleryPageImg01 from "../../public/Images/GalleryPage/GalleryPageImg01.jpeg";
import GalleryPageImg02 from "../../public/Images/GalleryPage/GalleryPageImg02.jpeg";
import GalleryPageImg03 from "../../public/Images/GalleryPage/GalleryPageImg03.jpg";
import GalleryPageImg04 from "../../public/Images/GalleryPage/GalleryPageImg04.jpeg";
import GalleryPageImg05 from "../../public/Images/GalleryPage/GalleryPageImg05.jpg";
import GalleryPageImg06 from "../../public/Images/GalleryPage/GalleryPageImg06.jpg";
import GalleryPageImg07 from "../../public/Images/GalleryPage/GalleryPageImg07.jpg";
import GalleryPageImg08 from "../../public/Images/GalleryPage/GalleryPageImg08.jpeg";
import GalleryPageImg09 from "../../public/Images/GalleryPage/GalleryPageImg09.jpg";
import GalleryPageImg10 from "../../public/Images/GalleryPage/GalleryPageImg10.jpg";
import GalleryPageImg11 from "../../public/Images/GalleryPage/GalleryPageImg11.jpg";
import GalleryPageImg12 from "../../public/Images/GalleryPage/GalleryPageImg12.jpg";

const ContentContainer = styled("div")(({ theme }) => ({
  padding: "5vw 0",
  margin: "0 auto",
  width: "1260px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    padding: "20px 10px",
  },
}));

const GalleryList = styled("ul")(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  margin: 0,
  padding: 0,
}));

const GalleryListItem = styled("li")(({ theme }) => ({
  width: "32%",
  margin: "0 0 40px",
  cursor: "pointer",
  listStyle: "none",
  ">img": {
    width: "100%",
    height: "300px",
    display: "block",
    objectFit: "cover",
  },
  [theme.breakpoints.down("lg")]: {
    width: "49%",
    margin: "0 0 10px",
    ">img": {
      height: "30vw",
    },
  },
}));

const galleryImgs = [
  { id: 1, img: GalleryPageImg01 },
  { id: 2, img: GalleryPageImg02 },
  { id: 3, img: GalleryPageImg03 },
  { id: 4, img: GalleryPageImg04 },
  { id: 5, img: GalleryPageImg05 },
  { id: 6, img: GalleryPageImg06 },
  { id: 7, img: GalleryPageImg07 },
  { id: 8, img: GalleryPageImg08 },
  { id: 9, img: GalleryPageImg09 },
  { id: 10, img: GalleryPageImg10 },
  { id: 11, img: GalleryPageImg11 },
  { id: 12, img: GalleryPageImg12 },
];

const GalleryPageContent = () => {
  return (
    <ContentContainer>
      <GalleryList>
        {galleryImgs.map((galleryImg) => (
          <GalleryListItem key={galleryImg.id}>
            <Image
              src={galleryImg.img}
              alt="kitchen display"
              style={{
                objectFit: "cover",
                display: "block",
              }}
            />
          </GalleryListItem>
        ))}
      </GalleryList>
    </ContentContainer>
  );
};

export default GalleryPageContent;
