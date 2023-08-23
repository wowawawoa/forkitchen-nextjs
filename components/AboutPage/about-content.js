import { styled } from "@mui/system";

const ContentContainer = styled("section")(({ theme }) => ({
  padding: "5vw 0",
  margin: "0 auto",
  width: "1260px",
  ">p": {
    margin: "0 0 1em 0",
    padding: 0,
    fontFamily: "'Mukta Vaani', sans-serif",
    fontSize: "18px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    padding: "28px 14px",
    ">p": {
      fontSize: "16px",
    },
  },
}));

const AboutPageContent = () => {
  return (
    <ContentContainer>
      <p>
        Kitchens have transformed into a great place for cooking, conversation
        and fellowship between family members. Families are spending more time
        in the kitchen than ever before, so investing more in its aesthetics and
        conveniences is justified. That is precisely why For Kitchen was
        founded.
      </p>
      <p>
        With over 5 years of experience in designing kitchens of all types and
        as a family-owned and operated business, For Kitchen offer customers a
        more personalised approach to business, along with in-depth expertise in
        the Kitchen industry.
      </p>
      <p>
        We stand for &apos;Australian owned and made kitchens&apos;. We use
        hardware from&nbsp;<strong>Blum</strong>, one of the leaders in this
        business and Australian-made board for the frames and storage. In
        Adelaide, we design and manufacture all kitchen furniture locally and
        our cabinet construction meet stringent Australian standard. That means
        you&apos;ll get high-quality kitchens and cabinetry that will endure for
        many years to come.
      </p>
      <p>
        Besides, our team of expert and certified designers can renovate or
        design a new kitchen well-within your budget and desired timeframe.
      </p>
    </ContentContainer>
  );
};

export default AboutPageContent;
