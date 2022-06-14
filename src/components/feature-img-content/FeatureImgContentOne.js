import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaCheckCircle, FaFingerprint } from 'react-icons/fa';

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
                  Mutlu ve hızlı binlerce kullanıcının E-ticaret siteleri Agesoft'a emanet. Onlar kargolarını çıkarırken
                  biz altyapı için çalışıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="customer-section pt-20">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <ul className="customer-logos-grid text-center list-unstyled mb-0">
                <img
                    src="/clients/client-logo-1.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-2.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-3.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-4.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-5.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid  m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-6.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-7.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                />
                <img
                    src="/clients/client-logo-8.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                />


                <img
                    src="/clients/client-logo-8.svg"
                    width="150"
                    alt="clients logo"
                    className="img-fluid p-1 px-md-2 p-lg-3 m-auto customer-logo-gray m-auto"
                />

                <img
                    src="/clients/client-logo-8.svg"
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
            <p className="text-center mb-0 h6">Sizde 1.500+ Agesoft Kullanıcısının Yanında Yerinizi Alın, E-ticaretin
              Tadını Çıkarın </p>
            <a href="/test" className="btn btn-primary mt-4 me-3">Tüm Referanslarımız</a>
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
                <h2>Advanced Analytics, Understand Business</h2>
                <p>
                  Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas.
                </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Thought leadership
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Personal branding
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Modernized prospecting
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Better win rates
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Showcasing success
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Sales compliance
                  </li>
                </ul>
                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none"
                >
                  Know More About Us{' '}
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
                <h2>Match Everything to Brand and Style</h2>
                <p>
                  Intrinsicly pontificate reliable metrics with enabled.
                  Holisticly maintain clicks-and-mortar manufactured products
                  empower viral customer service through resource deliverables.
                </p>
                <p>
                  Customer service through resource pontificate reliable metrics
                  with enabled expedite resource maximizing information maintain
                  manufactured products.
                </p>

                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Know More About Us{' '}
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
