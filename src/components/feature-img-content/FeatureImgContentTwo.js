import React from "react";
import Image from "next/image";
import {
  FaBezierCurve,
  FaCheckCircle,
  FaCog,
  FaFingerprint,
} from "react-icons/fa";

const FeatureImgContentTwo = ({ bgWhite }) => {
  return (
    <section
      className={`feature-section-two ptb-120 ${
        bgWhite ? "bg-white" : "bg-light"
      } `}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading">
              <h4 className="h5 text-primary">Our Values</h4>
              <h2>Tüm Bilgiler Tek Bir Panelde!</h2>
              <p>
                Entegrasyonlar, ürünler, pazaryerleri ve siten hakkında bilmek
                veya düzenlemek isteyeceğin her şey tek AgeSoft Panelinde!
              </p>
              <ul className="list-unstyled mt-5">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-primary rounded me-4">
                    <span className="fas text-white">
                      <FaBezierCurve className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Entegrasyonlar</h3>
                    <p>
                      Trendyol, HepsiBurada, Amazon, N11 gibi Türkiye'nin en
                      büyük pazaryerlerine tam entegreyiz. AgeSoft Yönetim
                      Paneline yüklediğin veya güncellediğin tüm ürünler gerekli
                      kurumlarını tamamladığında pazaryerlerinde sergilenmeye
                      başlar. Aldığın siparişler ise anında AgeSoft yönetim
                      panelinde yer alır.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-danger rounded me-4">
                    <span className="fas text-white">
                      <FaFingerprint className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Unique &amp; Minimal Design</h3>
                    <p>
                      Dramatically administrate progressive metrics without
                      error-free globally simplify standardized engineer
                      efficient strategic.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-dark rounded me-4">
                    <span className="fas text-white">
                      <FaCog className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Ürünler</h3>
                    <p>
                     Olabildiğince basit bir şekilde ürünlerini yönetebilir, varyant ekleyebilir
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
              <ul className="img-overlay-list list-unstyled position-absolute">
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Create a Free Account</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Install Our Tracking Pixel</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Start Tracking your Website</h6>
                </li>
              </ul>
              <Image
                width={493}
                height={662}
                src="/feature-img3.jpg"
                alt="feature image"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentTwo;
