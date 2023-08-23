import { styled } from "@mui/system";
import { List, ListItem, ListItemIcon } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";
import KitchensPageImg01 from "../../public/images/KitchensPage/KitchensPageImg01.jpg";
import KitchensPageImg02 from "../../public/images/KitchensPage/KitchensPageImg02.jpg";
import KitchensPageImg03 from "../../public/images/KitchensPage/KitchensPageImg03.jpg";
import KitchensPageImg04 from "../../public/images/KitchensPage/KitchensPageImg04.jpg";
import KitchensPageImg05 from "../../public/images/KitchensPage/KitchensPageImg05.jpg";
import KitchensPageImg06 from "../../public/images/KitchensPage/KitchensPageImg06.jpg";

const ContentContainer = styled("section")(({ theme }) => ({
  padding: "5vw 0",
  margin: "0 auto",
  width: "1260px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    padding: "28px 14px",
    ">p": {
      fontSize: "16px",
    },
  },
}));

const InfoTextContainer = styled("div")(({ theme }) => ({
  ">p": {
    margin: "0 0 1em",
    fontFamily: "'Mukta Vaani', sans-serif",
    lineHeight: "1.5em",
    fontSize: "18px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
    },
  },
}));

const DetailedInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const DetailedInfoListContainer = styled("div")(({ theme }) => ({
  ">h2": {
    color: "#000",
    fontSize: "22px",
    padding: "1em 0 10px",
    fontFamily: "'Oswald', sans-serif",
    lineHeight: "24px",
    fontWeight: 500,
    margin: 0,
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px",
    },
  },
  ">h3": {
    color: "#000",
    fontSize: "20px",
    padding: "0 0 10px",
    lineHeight: "22px",
    margin: 0,
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 500,
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
  },
  ">h4": {
    margin: 0,
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 500,
  },
  ">p": {
    margin: "0 0 16px 0",
    fontFamily: "'Mukta Vaani', sans-serif",
    fontSize: "18px",
    lineHeight: "1.5em",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    ">h2": {
      fontSize: "18px",
    },
    ">h3": {
      fontSize: "16px",
    },
  },
}));

const DetailedInfoList = styled(List)(() => ({
  padding: "10px",
}));

const KDetailedInfoListItem = styled(ListItem)(({ theme }) => ({
  padding: "0 0 10px 0",
  ">p": {
    margin: 0,
    fontFamily: "'Mukta Vaani', sans-serif",
    fontSize: "18px",
    lineHeight: "1.5em",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px",
    },
  },
}));

const StyledListIcon = styled(ListItemIcon)(() => ({
  color: "#f99e01",
  minWidth: "24px",
  ">svg": {
    fontSize: "16px",
  },
  marginBottom: "auto",
  paddingTop: "4px",
}));

const RightImgBox = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "0 0 20px 40px",
  ">img": {
    marginLeft: "auto",
  },
  [theme.breakpoints.down("lg")]: {
    margin: "0 auto",
    padding: "0 0 20px 0",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
    padding: "0 0 20px 0",
    ">img": {
      width: "100%",
      height: "100%",
    },
  },
}));

const LeftImgBox = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "0 40px 20px 0",
  [theme.breakpoints.down("lg")]: {
    margin: "0 auto 10px",
    padding: 0,
  },
  [theme.breakpoints.down("sm")]: {
    ">img": {
      width: "100%",
      height: "100%",
    },
  },
}));

const kitchenLayoutsItems = [
  {
    id: 1,
    info: "<strong>L-Shaped Kitchens</strong> are ideal for medium to large space and you can also include a dining table into the scheme.",
  },
  {
    id: 2,
    info: "<strong>U-Shaped Kitchens</strong> are best for bigger families or where multiple cooks will be working simultaneously in the same place.",
  },
  {
    id: 3,
    info: "<strong>Straight-Line Kitchens</strong> are better for compact spaces like small or open-plan apartments.",
  },
  {
    id: 4,
    info: "<strong>Island Kitchen Layout</strong> can be designed with integrated sinks and/or hotplates or as a hub to entertain family members or guests.",
  },
  {
    id: 5,
    info: "<strong>Galley Kitchens</strong> are the most practical layouts especially for compact homes in terms of functionality, design, and meal preparation.",
  },
  {
    id: 6,
    info: "<strong>Peninsula Kitchen Layout</strong> is an efficient solution for smaller kitchens requiring more storage, workspace, or seating.",
  },
];

const KitchenStylesItems = [
  {
    id: 1,
    info: "<strong>Black kitchens</strong> are a visual treat and maintaining them is effortless.",
  },
  {
    id: 2,
    info: "<strong>Hampton kitchens</strong> are classic yet casual radiating a comfortable and graceful feel.",
  },
  {
    id: 3,
    info: "<strong>French provincial kitchens</strong> are eternal favorites as they add tenderness and personality to space.",
  },
  {
    id: 4,
    info: "<strong>Shaker style kitchens</strong> are timeless and very popular. Even better, a shaker kitchen works in just about any kitchen design.",
  },
  {
    id: 5,
    info: "<strong>Country kitchens</strong> are gentle and inviting where family and friends love to linger.",
  },
  {
    id: 6,
    info: "<strong>Classic kitchens</strong> combine simplicity and function ensuring lasting appeal.",
  },
  {
    id: 7,
    info: "<strong>Modern or contemporary kitchens</strong> are designed for practicality and efficiency; they are stylish, sleek, and streamlined.",
  },
  {
    id: 8,
    info: "<strong>White kitchens</strong> make the room feel spacious as it seamlessly optimizes your home's natural light.",
  },
  {
    id: 9,
    info: "<strong>Handleless kitchens</strong> are characterized by handleless drawers and cabinets. Opening and closing have become easier with modern hinges and runners.",
  },
  {
    id: 10,
    info: "<strong>Outdoor kitchens</strong> can completely alter your home's backyard into a relaxing and luxurious year-round living space.",
  },
  {
    id: 11,
    info: "<strong>Industrial-style kitchens</strong> are built using stainless steel and reclaimed wood surfaces; they use ventilation units and filament light bulbs and have exposed brick walls.",
  },
];

const cabinetTypesItems = [
  {
    id: 1,
    info: "<strong>Stock Cabinets:</strong> Stock cabinets come in various standard sizes; usually timber constructions with melamine shell over it. They are a readily available and affordable option.",
  },
  {
    id: 2,
    info: "<strong>Semi-Custom Cabinets:</strong> Semi-custom cabinets are constructed from a standard range but can be modified to suit the kitchen layout.",
  },
  {
    id: 3,
    info: "<strong>Custom Cabinets:</strong> For Kitchen can build custom cabinets to fit your kitchen; you can select from an array of materials for cabinet shell.",
  },
];

const cabinetMaterialsItems = [
  {
    id: 1,
    info: "<strong>Low-Pressure Laminate</strong> is easy to clean and available in diverse patterns and colors. Some examples are Laminex and Wilson-Art.",
  },
  {
    id: 2,
    info: "<strong>High-Pressure Laminate</strong> comes in a wide variety of patterns, colours, and finishes including gloss, satin and metallic. Some examples are particleboard or MDF (Medium Density Fibreboard).",
  },
  {
    id: 3,
    info: "<strong>Polyurethane Painted</strong> often comes with layers worked into the surface.",
  },
  {
    id: 4,
    info: "<strong>Solid Timber</strong> can be used as a structural or shell material, typically clear coated to get a natural finish.",
  },
  {
    id: 5,
    info: "<strong>Timber Veneers</strong> are effortless to clean and create a graceful look.",
  },
  {
    id: 6,
    info: "<strong>Vinyl Film</strong> is vacuum-sealed and is a newer option.",
  },
];

const cabinetryFitOutItems = [
  {
    id: 1,
    info: "<strong>Shelving:</strong> Use open shelving for handy access for frequently used items; a walk-in island bench or a walk-in pantry preferably on lockable wheels for easy movement.",
  },
  {
    id: 2,
    info: "<strong>Cabinet Corner:</strong> A cabinet corner unfolds a distinctive problem for access that's normally resolved by installing a bi-fold door. A revolving 'lazy Susan' in a corner cabinet can enhance access.",
  },
  {
    id: 3,
    info: "<strong>Drawers:</strong> Installing pull-out drawers with good quality, easy-glide runners inside cupboards is a great way to store things effortlessly.",
  },
];

const sinksAndTapsItems = [
  {
    id: 1,
    info: "<strong>Drop-In Sinks</strong> is placed into the created hole wherein self-rimming edges rest on top of the benchtop.",
  },
  {
    id: 2,
    info: "<strong>Under-Mounted Sinks</strong> are installed beneath the benchtop; they have a sleek, edgeless finish.",
  },
  {
    id: 3,
    info: "<strong>Integral Sinks</strong> are produced from the same benchtop material, providing a flawless look of a smooth shift from the sink to the surface.",
  },
];

const KitchensPageContent = () => {
  return (
    <ContentContainer>
      <InfoTextContainer>
        <p>
          For Kitchen are experts when it comes to building custom kitchens. We
          can specially design and build to meet your unique needs. Custom made
          kitchen is designed as per your needs and requirements, precisely the
          way you want it to be, which will be distinctive to you.
        </p>
        <p>
          At For Kitchen, our expert kitchen designers will work with you and
          provide valuable inputs for creating custom kitchens that are highly
          functional, inspiring, and unique. The custom kitchen will become the
          centerpiece of your living space and add great value to your home.
        </p>
        <p>
          An outdoor kitchen is enjoyable as you&apos;re able to breathe some
          fresh air and see greenery all around. Well, we design and build
          beautiful custom outdoor kitchens too! Nonetheless, if you&apos;re
          looking for a readymade kitchen then we also have them in standard
          sizes.
        </p>
      </InfoTextContainer>
      <DetailedInfoContainer>
        <DetailedInfoListContainer>
          <h2>Kitchen Layouts for Customization</h2>
          <DetailedInfoList>
            {kitchenLayoutsItems.map((kitchenLayoutsItem) => (
              <KDetailedInfoListItem key={kitchenLayoutsItem.id}>
                <StyledListIcon>
                  <CheckIcon />
                </StyledListIcon>
                <p
                  dangerouslySetInnerHTML={{ __html: kitchenLayoutsItem.info }}
                ></p>
              </KDetailedInfoListItem>
            ))}
          </DetailedInfoList>
        </DetailedInfoListContainer>
        <RightImgBox>
          <Image
            src={KitchensPageImg01}
            alt="kitchen display"
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </RightImgBox>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <DetailedInfoListContainer>
          <h2>Kitchen Types in Adelaide</h2>
          <p>
            As Adelaide&aposs prominent kitchen designers for constructing all
            types of kitchens, we specialize in designing readymade and custom
            kitchens, ideal for new build or kitchen renovation.
          </p>
        </DetailedInfoListContainer>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <LeftImgBox>
          <Image
            src={KitchensPageImg02}
            alt="kitchen display"
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </LeftImgBox>
        <DetailedInfoListContainer>
          <h2>Select Custom Kitchen Style in Adelaide</h2>
          <p>
            With our vast experience, For Kitchen can help build the modern,
            country-style, or French provincial kitchen of your dreams.
          </p>
          <p>Let&apos;s quickly glance at the various kitchen styles:</p>
          <h3>Kitchen Styles</h3>
          <DetailedInfoList>
            {KitchenStylesItems.map((KitchenStylesItem) => (
              <KDetailedInfoListItem key={KitchenStylesItem.id}>
                <StyledListIcon>
                  <CheckIcon />
                </StyledListIcon>
                <p
                  dangerouslySetInnerHTML={{ __html: KitchenStylesItem.info }}
                ></p>
              </KDetailedInfoListItem>
            ))}
          </DetailedInfoList>
        </DetailedInfoListContainer>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <DetailedInfoListContainer>
          <h2>Create Your Own Kitchen Design Layout</h2>
          <h3>Choose Kitchen Shape</h3>
          <p>
            The widely used kitchen layout shapes are L-shaped, U-shaped,
            C-shaped, J-shaped, and galley style. Depending on the available
            space in your kitchen, you can choose the most fitting kitchen shape
            for optimal functionality and aesthetics. Regardless of the kitchen
            shape or layout you choose, you need to be sure that you&apos;ll be
            happy with your selected style for many years.
          </p>
        </DetailedInfoListContainer>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <DetailedInfoListContainer>
          <h3>Designing & Building Custom Cabinetry</h3>
          <h4>Cabinet Types</h4>
          <DetailedInfoList>
            {cabinetTypesItems.map((cabinetTypesItem) => (
              <KDetailedInfoListItem key={cabinetTypesItem.id}>
                <StyledListIcon>
                  <CheckIcon />
                </StyledListIcon>
                <p
                  dangerouslySetInnerHTML={{ __html: cabinetTypesItem.info }}
                ></p>
              </KDetailedInfoListItem>
            ))}
          </DetailedInfoList>
          <h4>Cabinet Materials</h4>
          <DetailedInfoList>
            {cabinetMaterialsItems.map((cabinetMaterialsItem) => (
              <KDetailedInfoListItem key={cabinetMaterialsItem.id}>
                <StyledListIcon>
                  <CheckIcon />
                </StyledListIcon>
                <p
                  dangerouslySetInnerHTML={{
                    __html: cabinetMaterialsItem.info,
                  }}
                ></p>
              </KDetailedInfoListItem>
            ))}
          </DetailedInfoList>
        </DetailedInfoListContainer>
        <RightImgBox>
          <Image
            src={KitchensPageImg03}
            alt="kitchen display"
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </RightImgBox>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <DetailedInfoListContainer>
          <h4>Cabinet Fit-Out</h4>
          <DetailedInfoList>
            {cabinetryFitOutItems.map((cabinetryFitOutItem) => (
              <KDetailedInfoListItem key={cabinetryFitOutItem.id}>
                <StyledListIcon>
                  <CheckIcon />
                </StyledListIcon>
                <p
                  dangerouslySetInnerHTML={{ __html: cabinetryFitOutItem.info }}
                ></p>
              </KDetailedInfoListItem>
            ))}
          </DetailedInfoList>
        </DetailedInfoListContainer>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <LeftImgBox>
          <Image
            src={KitchensPageImg04}
            alt="kitchen display"
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </LeftImgBox>
        <DetailedInfoListContainer>
          <h3>Kitchen Benchtop Selection</h3>
          <h4>Laminate Benchtops</h4>
          <p>
            The laminate benchtop is for the budget conscious and they are
            available in a variety of colours, designs, and styles offering
            complete value for your money. They are easy to maintain, durable,
            very affordable, and give a feel of the stylish stone benchtop.
          </p>
          <h4>Stone Benchtops</h4>
          <p>
            Stone stone benchtop come in diverse material choices including
            marble, granite, and engineered stone. You can choose the stone
            benchtop depending on your preferences and budget. Stone benchtops
            are tough, long-lasting and easy to maintain, and provides a plush
            look. Besides, they render a natural feel and can become a statement
            piece in your kitchen.
          </p>
          <p>
            Readymade benchtops are available in standards sizes; however, you
            can get custom benchtops made as per your unique requirements.
          </p>
        </DetailedInfoListContainer>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <DetailedInfoListContainer>
          <h3>Kitchen Splashbacks Selection</h3>
          <p>
            Kitchen splashbacks come in a wide range of material selections
            including:
          </p>
          <h4>Glass Splashback:</h4>
          <p>
            Glass is easy to clean and available in diverse prints and colour
            shades. Mirror glass opens up space by bouncing light and
            reflections around the room.
          </p>
          <h4>Acrylic Splashback:</h4>
          <p>Acrylic looks like glass but is a more cost-effective option.</p>
          <h4>Tile Splashback:</h4>
          <p>
            Tiles are available in a huge range of designs, patterns, colour
            shades, and material choices. In the past, tiles were widely used
            material and they are now seeing a big comeback.
          </p>
          <h4>Stone Splashback:</h4>
          <p>
            Stone creates a permanent, graceful, and rich look in the kitchen.
            If you select a stone for your splashback, it is advisable to
            install both your benchtop and splashback at the same time, so both
            can be made from the same batch of stone and avoid any colour
            differences.
          </p>
          <h4>Stainless Steel Splashback:</h4>
          <p>
            Stainless Steel provides an industrial feel to a kitchen, it&apos;s
            durable and hygienic.
          </p>
          <h4>Pressed Metal Splashback:</h4>
          <p>
            Pressed Metal is made out of an aluminium alloy that won&apos;t
            corrode, and are appropriate to be installed behind cooktops.
          </p>
        </DetailedInfoListContainer>
        <RightImgBox>
          <Image
            src={KitchensPageImg05}
            alt="kitchen display"
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </RightImgBox>
      </DetailedInfoContainer>
      <DetailedInfoContainer>
        <LeftImgBox>
          <Image
            src={KitchensPageImg06}
            alt="kitchen display"
            style={{
              objectFit: "cover",
              display: "block",
            }}
          />
        </LeftImgBox>
        <DetailedInfoListContainer>
          <h3>Kitchen Appliances</h3>
          <p>
            At For Kitchen, we can optimise your kitchen space by arranging your
            kitchen appliances including your cooktop, microwave, refrigerator,
            or any other kitchen appliances. Everything will be in perfect order
            and you&apos;ll get a neat and spacious kitchen.
          </p>
          <h3>Selecting Sinks & Taps</h3>
          <p>
            Depending on the type of benchtop installed and available space, the
            material of the sink and its configuration (i.e. one or two bowls)
            are selected. Sinks can be installed on the benchtop using three
            different methods:
          </p>
          <DetailedInfoList>
            {sinksAndTapsItems.map((sinksAndTapsItem) => (
              <KDetailedInfoListItem key={sinksAndTapsItem.id}>
                <StyledListIcon>
                  <CheckIcon />
                </StyledListIcon>
                <p
                  dangerouslySetInnerHTML={{ __html: sinksAndTapsItem.info }}
                ></p>
              </KDetailedInfoListItem>
            ))}
          </DetailedInfoList>
        </DetailedInfoListContainer>
      </DetailedInfoContainer>
    </ContentContainer>
  );
};

export default KitchensPageContent;
