import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { FaCheckCircle, FaFingerprint } from "react-icons/fa";

const FeatureImgContentOne = () => {
  return (
    <>
      <section className="app-two-feature ptb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="section-heading text-center">
                <h2>Age Topluluğuna Katılanlar...</h2>
                <p>
                  Mutlu ve hızlı binlerce kullanıcının E-ticaret siteleri
                  Agesoft'a emanet. Onlar kargolarını çıkarırken biz altyapı
                  için çalışıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="customer-section pt-20">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <ul className="customer-logos-grid text-center list-unstyled mb-0">
                  <img
                    src="/clients/1.png"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/2.jpeg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/3.jpeg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/4.jpeg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/5.jpeg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/6.png"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/7.jpeg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                  />
                  <img
                    src="/clients/8.png"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                  />

                  <img
                    src="/clients/9.png"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                  />

                  <img
                    src="/clients/10.png"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container justify-content-center">
          <div className="text-center mt-5">
            <p className="text-center mb-0 h6">
              Sizde 1.500+ Agesoft Kullanıcısının Yanında Yerinizi Alın,
              E-ticaretin Tadını Çıkarın{" "}
            </p>
            <a href="/test" className="btn btn-primary mt-4 me-3">
              Tüm Referanslarımız
            </a>
          </div>
        </div>
      </section>

      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <span className="fas text-white">
                    <BsShieldCheck />
                  </span>
                </div>
                <h6>tam uyumlu</h6>
                <h2>Pazaryerleri</h2>
                <p>
                  Agesoft yönetici panelinden yapacağınız tüm işlemler
                  pazaryerlerindeki ürünlere anlık olarak yansır.
                </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Hiçbir zaman ek yazılım gerektirmez.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Tek bir panel üzerinden tüm pazaryerlerini kontrol
                    edersiniz.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Farklı pazaryerlerine farklı fiyatlar tanımlarsınız.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Tüm pazaryerlerinde tek tıkla ürünlerinizi güncellersiniz.
                  </li>
                </ul>
                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none"
                >
                  Detaylı Bilgi
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={464}
                  layout="responsive"
                  src="/screen/widget-11.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                  <span className="fal text-white">
                    <FaFingerprint />
                  </span>
                </div>
                <h2>AgeSoft: E-Ticaretteki Kaleniz!</h2>
                <p>
                  Mükemmel bir plan, başarılı bir dönüşümün anahtarıdır!
                  E-Ticarete ilk defa adım atıyorsanız veya halihazırda
                  kullandığınız altyapıdan memnun değilseniz, yapılacak olan tüm
                  iş süreçleri hakkında sizi bilgilendiriyoruz. Size eğitimler
                  veriyoruz ve başarı yolculuğunuz için kusursuz bir plan
                  oluşturuyoruz. Bu şekilde AgeSoft panelinde bilmediğiniz
                  hiçbir kısım kalmıyor.
                </p>
                <p>
                  2. aşama ise mükemmel bir kampanya yönetimi. Herhangi “harici
                  bir program”a ihtiyacınız kalmadan tüm sanal pos entegrasyonu,
                  kargo modülleri, muhasebe programı, e-fatura, pazar yerleri
                  çalışmalarınızı ve daha sayamadığımız onlarca işleminizi
                  AgeSoft ile hızlıca ve kolayca gerçekleştirebiliyorsunuz.
                </p>

                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Detaylı Bilgi
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={492}
                  layout="responsive"
                  src="/screen/widget-12.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentOne;
