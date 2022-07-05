import React from "react";
import Image from "next/image";
import { FaBezierCurve } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { RiNodeTree } from "react-icons/ri";
import { GrResources } from "react-icons/gr";

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10 mb-5">
            <div className="section-heading text-center">
              <h2>Nasıl AgeSoft ailesine katılabilirsin?</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={526}
                height={621}
                src="/office-img-1.jpg"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Adım 1</span>
                  <h3 className="h5 mb-2">Bizimle iletişime geç</h3>
                  <p>
                    Sana özel olarak atanan müşteri temsilcin ile projenin
                    başından sonuna kadar çalışırsın. İhtiyacın olan tüm
                    detayları size iletilecek.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Adım 2</span>
                  <h3 className="h5 mb-2">Sistemi tanıtma</h3>
                  <p>
                    İhtiyacın olan zamanlarda AgeSoft'un deneyimli ekibiyle
                    toplantı yapabilir, sistemin işleyişini dinleyebilir
                    ihtiyacın olan her an destek talep edebilirsin.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Adım 3</span>
                  <h3 className="h5 mb-2">Onay Süreci</h3>
                  <p>
                    Toplantılarda veya görüşmelerde ilettiğin şekilde düzenlenen
                    siteni sizden onay alarak aktife alırız.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <FiTruck />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Adım 4</span>
                  <h3 className="h5 mb-2">Kargolarını teslim etme</h3>
                  <p>
                    Yapman gereken tek şey kargolarını alıcıların adreslerine
                    göndermek. İşte Agesoft'lu olmak bu kadar kolay!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
