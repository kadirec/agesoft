import React from "react";
import { FaGifts, FaClock, FaHouseUser, FaUserFriends } from "react-icons/fa";

const CareerPromo = () => {
  return (
    <section className="career-promo ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Neden Agesoft'ta çalışmalısn</h4>
              <h2>Mükemmel çalışma ortamı</h2>
              <p>
                AgeSoft LTD., E-ticaret alanında 2014 yılından bugüne hizmet
                vermektedir. Yenilikçi bir sistemi hedefleyen Agesoft bu hedefe
                ulaşmak için daime yenilikçi ekibe ihtiyaç duyar ve parlayan
                yıldızları hakettiği gökyüzüne çıkarmak ister.
                <br />
                <br />
                Sende dünyamıza katılmak istersen hemen başvur ve ilk adımı at.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-0 p-5 bg-white rounded-custom">
              <span className="fas fa-2x text-primary">
                <FaHouseUser />
              </span>
              <div className="ms-4 mt-2">
                <h5>Aile Ortamı </h5>
                <p className="mb-0">
                  Saygı ve sevgi çerçevesinde tüm çalışma arkaşlarımız ile aile
                  gibiyiz. Kısa sürede sen de ailemize katılır ve bu güzel
                  ailenin bir parçası olursun.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-4 mt-xl-0 mt-lg-0 mt-md-0 p-5 bg-white rounded-custom">
              <span className="fas fa-2x text-primary">
                <FaClock />
              </span>
              <div className="ms-4 mt-2">
                <h5>Esnek Çalışma Saatleri</h5>
                <p className="mb-0">
                  Gerekli ve zorunlu olmadığı sürece mesai saatlerinde çalışır,
                  eve iş götürmeyiz. Haftasonları ise ailemizle ve
                  arkadaşlarımızla vakit geçirebilmek için tatildir.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-4 p-5 bg-white rounded-custom">
              <span className="fas fa-2x text-primary">
                <FaUserFriends />
              </span>
              <div className="ms-4 mt-2">
                <h5>Sektörel uzmanlık</h5>
                <p className="mb-0">
                  8+ senelik e-ticaret uzmanlığı ile kendini kısa sürede
                  geliştirebilir, piyasa ihtiyaç duyulan bir kişiye kısa sürede
                  evrilebilirsin.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="single-feature d-flex mt-4 p-5 bg-white rounded-custom">
              <span className="fas fa-2x text-primary">
                <FaGifts />
              </span>
              <div className="ms-4 mt-2">
                <h5>Kendimizi geliştirmeyi asla bırakmıyoruz</h5>
                <p className="mb-0">
                  Her zaman daha iyisi ve daha yenisi mottosuyla çalışırız.
                  Yenilikçi fikirler, workshoplar ve happy hourlar ile kendimizi
                  ödüllendirir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPromo;
