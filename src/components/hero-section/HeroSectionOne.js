/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import VideoModal from '../common/VideoModal';

const HeroSectionOne = () => {
  return (
    <section
      className="hero-section slide-padding text-white bg-dark"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center text-lg-start align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5 slide-title">
                Ek Yazılım <br/> Gerektirmeyen Tek Yazılım
              </h1>
              <p className="lead">
                Agesoft ile E-ticaret Süreçlerinizi, Pazaryerleri entegrasyonlarını,
                ERP-Muhasebe Entegrasyonlarını, Faturalama Süreçlerinizi Tek Panel İle Yönetetirsiniz.
              </p>

              <ul className="nav subscribe-feature-list d-flex justify-content-center justify-content-lg-start w-100 mt-3"
                  data-aos="fade-up" data-aos-delay="100">
                <li className="nav-item">
                  <span className="ms-0"><i className="far fa-check-circle text-primary me-2"></i>14 Gün Ücretsiz Deneyin</span>
                </li>
                <li className="nav-item">
                  <span><i className="far fa-check-circle text-primary me-2"></i>Zamandan Tasarruf Edin</span>
                </li>
                <li className="nav-item">
                  <span className="ms-0"><i className="far fa-check-circle text-primary me-2"></i>Yenileme Maliyetini Düşürün</span>
                </li>
                <li className="nav-item">
                  <span><i className="far fa-check-circle text-primary me-2"></i>Bütçeden Tasarruf Edin</span>
                </li>

              </ul>

              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo">
                  <a className="btn btn-primary me-lg-3 me-sm-3">E-ticaret Paketleri</a>
                </Link>

                <Link href="/request-demo">
                  <a className="btn outline-light">E-ticaret Paketleri</a>
                </Link>
              </div>

            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
              <img
                src="agesoft-slide.png"
                alt="Agesoft Slide"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
