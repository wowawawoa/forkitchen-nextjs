import PageBanner from "@/components/layout/page-banner";
import AboutPageContent from "@/components/AboutPage/about-content";
import AboutPageBannerImg from "@/public/images/AboutPage/AboutUsPageBanner.jpg";

const bannerContent = {
  PageTitle: "About Us",
  PagePath: "Home - About Us",
  PageBannerImg: AboutPageBannerImg,
  PageBannerAlt: "About Us Page Banner",
};

const AboutPage = () => {
  return (
    <>
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
