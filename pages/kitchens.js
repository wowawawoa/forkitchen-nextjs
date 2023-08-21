import PageBanner from "@/components/layout/page-banner";
import KitchensPageContent from "@/components/KitchensPage/kitchens-content";
import kitchensPageBannerImg from "@/public/images/KitchensPage/KitchensPageBanner.jpg";

const bannerContent = {
  PageTitle: "Kitchens",
  PagePath: "Home - kitchens",
  PageBannerImg: kitchensPageBannerImg,
  PageBannerAlt: "Kitchens Page Banner",
};

const KitchensPage = () => {
  return (
    <>
      <PageBanner
        PageTitle={bannerContent.PageTitle}
        PagePath={bannerContent.PagePath}
        PageBannerImg={bannerContent.PageBannerImg}
        PageBannerAlt={bannerContent.PageBannerAlt}
      />
      <KitchensPageContent />
    </>
  );
};

export default KitchensPage;
