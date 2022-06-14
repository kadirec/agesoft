import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import SectionTitle from "../common/SectionTitle";
import ServiceForm from "../services/ServiceForm";

const QuickSupport = () => {
  return (
    <section className="contact-us ptb-120 position-relative overflow-hidden">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <SectionTitle
              subtitle="Hızlı iletişim"
              title="Bize ulaşın"
              description="Agesoft ayrıcalıklarından faydalanmak ve bizimle beraber e-ticaretinizi kolayca büyütmek için dilediğin zaman bizimle iletişime geçebilirsin"
            />
            <div className="row justify-content-between pb-5">
              <div
                className="col-sm-6 mb-4 mb-md-0 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                  <span className="fas fa-2x text-primary">
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>Bizi Ara!</h5>
                  <p>
                    Ekibimizi dilediğin zaman arayıp{" "}
                    <strong>"Yeni Nesil E-Ticaret" </strong>
                    hakkında bilgi alabilirsin.
                  </p>
                  <a
                    href="tel:(415)231-59687"
                    className="read-more-link text-decoration-none"
                  >
                    <span className="far me-2">
                      <FaPhoneAlt className="mb-1" />
                    </span>{" "}
                    0850 532 29 27
                  </a>
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft">
                  <span className="fas fa-2x text-danger">
                    <BiCommentDetail />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>E-Posta gönder</h5>
                  <p>
                    Ekibimiz
                    <strong> 9.00 - 18.00 </strong> arasında telefonlara cevap
                    verecektir. Eğer mesai saatleri dışında bilgi almak istersen
                    e-posta ile bize ulaşabilirsin.
                  </p>
                  <Link href="mailto:info@agesoft.com.tr">
                    <a className="read-more-link text-decoration-none">
                      <span className="far me-2">
                        <BiCommentDetail className="mb-1" />
                      </span>{" "}
                      info@agesoft.com.tr
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ServiceForm />
        </div>
      </div>
      <div
        className="bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5"
        style={{
          background:
            " url('/shape/dot-dot-wave-shape.svg')no-repeat center top",
        }}
      >
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
      </div>
    </section>
  );
};

export default QuickSupport;
