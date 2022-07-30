import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import SupportOne from "@components/support/SupportOne";
import CareerPromo from "@components/career/CareerPromo";
import CareerFeature from "@components/career/CareerFeature";

const Career = () => {
  return (
    <Layout title="Career" desc="This is career page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="İnsan Kaynakları"
        desc="AgeSoft Yeni Nesil E-Ticaret sistemleri gün geçtikçe büyüyen, dinamik ve işini tutkuyla yapan insanların bir arada bulunduğu bir şirkettir. Müşteri isteklerine karşılık verebilmek ve kendimizi devamlı geliştirebilmek için devamlı işe alımlar yapmaktayız. İlgi gösterdiğin bir iş ilanı olursa başvurmayı unutma!"
      />
      <CareerFeature />
      <CareerPromo />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Career;
