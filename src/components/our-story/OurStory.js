/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              <h4 className="h5 text-primary">Kısaca AgeSoft</h4>
              <h2>Harika bir deneyim, harika bir ekiple başlar</h2>
              <p>
                Çalıştığımız firmalarımız bilir ki, ihtiyaçları en yakın
                güncellemede sisteme dahil edilir, yardım talepleriniz gün
                içinde cevaplanır ve en önemlisi ihtiyacı olan tek yazılım
                <strong> AgeSoft Yeni Nesil E-Ticaret Sistemleridir.</strong>
              </p>
              <p className="mt-4">
                Siz de bu eşsiz deneyimi ekibimizle yaşamak istiyorsanız hemen
                bizimle iletişime geçin.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div className="story-grid-wrapper position-relative">
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                <li className="layer" data-depth="0.02">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/image-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-success">1.2M+</h3>
                  <h6 className="mb-0">Aktif Kullanıcı</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-primary">25+</h3>
                  <h6 className="mb-0">Harika Ekip Üyesi</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-dark">20M+ ₺</h3>
                  <h6 className="mb-0">Yıllık Gelir</h6>
                </div>
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-warning">8 Yıl</h3>
                  <h6 className="mb-0">Tecrübe</h6>
                </div>
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-danger">35+</h3>
                  <h6 className="mb-0">Aktif Tema</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-primary">110+</h3>
                  <h6 className="mb-0">Tamamlanan Proje</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
