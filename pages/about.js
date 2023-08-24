import PageBanner from "@/components/layout/page-banner";
import AboutPageContent from "@/components/AboutPage/about-content";
import AboutPageBannerImg from "@/public/images/AboutPage/AboutUsPageBanner.jpg";
import Head from "next/head";

const bannerContent = {
  PageTitle: "About Us",
  PagePath: "Home - About Us",
  PageBannerImg: AboutPageBannerImg,
  PageBannerAlt: "About Us Page Banner",
};

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | For Kitchen</title>
      </Head>
      <PageBanner
        PageTitle={bannerContent.PageTitle}
        PagePath={bannerContent.PagePath}
        PageBannerImg={bannerContent.PageBannerImg}
        PageBannerAlt={bannerContent.PageBannerAlt}
      />
      <AboutPageContent />
    </>
  );
};

export default AboutPage;
