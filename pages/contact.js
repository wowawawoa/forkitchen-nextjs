import PageBanner from "@/components/layout/page-banner";
import ContactPageContent from "@/components/ContactPage/contact-content";
import ContactUsPageBannerImg from "@/public/images/ContactPage/ContactUsPageBanner.jpg";
import Head from "next/head";

const bannerContent = {
  PageTitle: "Contact Us",
  PagePath: "Home - Contact Us",
  PageBannerImg: ContactUsPageBannerImg,
  PageBannerAlt: "Contact Us Page Banner",
};

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | For Kitchen</title>
      </Head>
      <PageBanner
        PageTitle={bannerContent.PageTitle}
        PagePath={bannerContent.PagePath}
        PageBannerImg={bannerContent.PageBannerImg}
        PageBannerAlt={bannerContent.PageBannerAlt}
      />
      <ContactPageContent />
    </>
  );
};

export default ContactPage;
