import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import FooterTwo from "@layout/Footer/FooterTwo";
import OurStory from "@components/our-story/OurStory";
import OurOffice from "@components/our-office/OurOffice";
import SupportOne from "@components/support/SupportOne";
import HeroSectionTwo from "@components/hero-section/HeroSectionTwo";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";

const Hakkimizda = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar classOption="navbar-light" />
      <HeroSectionTwo />
      <OurStory />
      <FeatureImgContentTwo />
      <TestimonialTwo />
      <OurOffice />
      <SupportOne className="true" />
      <FooterTwo />
    </Layout>
  );
};

export default Hakkimizda;
