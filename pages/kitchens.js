import PageBanner from "@/components/layout/page-banner";
import KitchensPageContent from "@/components/KitchensPage/kitchens-content";
import kitchensPageBannerImg from "@/public/images/KitchensPage/KitchensPageBanner.jpg";
import Head from "next/head";

const bannerContent = {
  PageTitle: "Kitchens",
  PagePath: "Home - kitchens",
  PageBannerImg: kitchensPageBannerImg,
  PageBannerAlt: "Kitchens Page Banner",
};

const KitchensPage = () => {
  return (
    <>
      <Head>
        <title>Kitchens | For Kitchen</title>
      </Head>
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
