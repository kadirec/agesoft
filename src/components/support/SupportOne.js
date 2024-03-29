import React from "react";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

const SupportOne = ({ className }) => {
  return (
    <section
      className={`${
        className
          ? "cta-subscribe bg-dark ptb-120 position-relative overflow-hidden"
          : "cta-subscribe pt-60 pb-120"
      }`}
    >
      <div className="container">
        <div
          className={`${
            className
              ? ""
              : "bg-gradient ptb-120 px-4 position-relative overflow-hidden rounded-custom"
          }`}
        >
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <div className="section-heading">
                  <h4 className="h5 text-warning">
                    Ücretsiz denemeni aktif et!
                  </h4>
                  <h2>Hemen Yeni Nesil E-Ticarete Başla.</h2>
                  <p>
                    Agesoft Yenil Nesil E-Ticaret sistemlerini test etmen için
                    14 günlük tamamen ücretsiz deneme süresi sunuyoruz.
                  </p>
                </div>
                <div className="form-block-banner mw-60 m-auto mt-5 d-flex gap-3 justify-content-center align-center">
                  <Link href="/contact-us#contact-us-form">
                    <a className="btn btn-primary">Formunu doldur</a>
                  </Link>

                  <Link href="/contact-us">
                    <a className="btn btn-secondary">İletişime Geç</a>
                  </Link>
                </div>
                <ul className="nav justify-content-center subscribe-feature-list mt-4">
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Tamemen Ücretsiz
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Tüm Erişim
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Canlı Destek
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      İstediğin zaman iptal
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportOne;
