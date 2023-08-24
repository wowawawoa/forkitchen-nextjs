import PageBanner from "@/components/layout/page-banner";
import GalleryPageContent from "@/components/GalleryPage/gallery-content";
import GalleryPageBannerImg from "@/public/images/GalleryPage/GalleryPageBanner.jpg";
import Head from "next/head";

const bannerContent = {
  PageTitle: "Gallery",
  PagePath: "Home - Gallery",
  PageBannerImg: GalleryPageBannerImg,
  PageBannerAlt: "Gallery Page Banner",
};

const GalleryPage = () => {
  return (
    <>
      <Head>
        <title>Gallery | For Kitchen</title>
      </Head>
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
