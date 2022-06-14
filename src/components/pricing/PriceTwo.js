import React from "react";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";

const PriceTwo = () => {
  return (
    <section
      className="pricing-section position-relative overflow-hidden bg-dark text-white pt-120"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <SectionTitle
              subtitle="Ücretlendirmeler"
              title="Tek fiyat yok, tek fiyat var!"
              description="Başka e-ticaret sağlayıcları gibi kafa karıştırıcı paketlerimiz yok. İhtiyacın olan paketi müşteri temsilcin ile kararlaştırıp istediğin modül eğer paket dışıysa sadece kullanacağın modülü satın alarak AgeSoft ekosistemine dahil olabilirsin."
              dark
              centerAlign
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="pricing-content-wrap mb--100 bg-white rounded-custom shadow-lg border d-fle z-10 position-relative">
              <div className="price-feature-col pricing-feature-info left-radius bg-primary-soft p-5">
                <ul
                  className="list-unstyled pricing-feature-list pricing-included-list mb-0"
                  data-aos="fade-left"
                >
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Content Delivery Network ( CDN)
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    İndirimli Kargo Anlaşmaları
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Kolay Sayfa Tasarım Sihirbazı
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Gelişmiş Seo Yönetim Modülü
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Gelişmiş Kampanya Yönetim Modülü
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    İçerik Yönetimi
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    İstatistik ve Raporlama
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Hediye Çeki / Puan Sistemi
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Kargo Fişi Yazdırma Modülü
                  </li>
                </ul>
              </div>
              <div
                className="price-feature-col pricing-action-info p-5"
                data-aos="fade-right"
              >
                <ul
                  className="nav nav-pills mb-4 pricing-tab-list"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Aylık
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      className=""
                    >
                      Yıllık
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <h3 className="h5">Age+ Aylık</h3>
                    <p>
                      Kullanmak istediğin paketi aylık olarak satın alabilirsin
                    </p>
                    <div className="pricing-price mt-5">
                      <h4 className="h1 fw-bold">
                        36₺ <span>/Günlük</span>
                      </h4>
                    </div>
                    <Link href="/request-demo">
                      <a className="btn btn-primary mt-3">Detaylı Bilgi</a>
                    </Link>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <h3 className="h5">Age+ Yıllık</h3>
                    <p>Paketini yıllık alıp daha düşük ücret ödeyebilirsin.</p>
                    <div className="pricing-price mt-5">
                      <h4 className="h1 fw-bold">
                        27.5₺ <span>/Günlük</span>
                      </h4>
                    </div>
                    <Link href="/request-demo">
                      <a className="btn btn-primary mt-3">Detaylı Bilgi</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5"></div>
      <div className="white-space-100 bg-white w-100"></div>
    </section>
  );
};

export default PriceTwo;
