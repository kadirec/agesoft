import Layout from "@layout/Layout";
import FaqFour from "@components/faq/FaqFour";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import PriceTwo from "@components/pricing/PriceTwo";
import FeatureOne from "@components/features/FeatureOne";
import QuickSupport from "@components/support/QuickSupport";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import Promo from "@components/promo/Promo";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";

export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionOne />
      <FeatureOne />
      <FeatureImgContentOne />
      <Promo />
      <TestimonialOne darkBg />
      <WorkProcessOne />
      <PriceTwo header="true" />
      <FaqFour />
      <IntegrationOne />
      <QuickSupport />
      <Footer footerGradient />
    </Layout>
  );
}
