import PageBanner from "@/components/layout/page-banner";
import GalleryPageContent from "@/components/GalleryPage/gallery-content";
import GalleryPageBannerImg from "@/public/images/GalleryPage/GalleryPageBanner.jpg";

const bannerContent = {
  PageTitle: "Gallery",
  PagePath: "Home - Gallery",
  PageBannerImg: GalleryPageBannerImg,
  PageBannerAlt: "Gallery Page Banner",
};

const GalleryPage = () => {
  return (
    <>
      <PageBanner
        PageTitle={bannerContent.PageTitle}
        PagePath={bannerContent.PagePath}
        PageBannerImg={bannerContent.PageBannerImg}
        PageBannerAlt={bannerContent.PageBannerAlt}
      />
      <GalleryPageContent />
    </>
  );
};

export default GalleryPage;
