import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import { RiStackLine } from 'react-icons/ri';
import { BsCodeSlash, BsShieldCheck } from 'react-icons/bs';

const FeatureOne = () => {
  return (
    <>
      <section className="feature-promo ptb-30 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10">
              <SectionTitle
                title="Öne Çıkan Özellikler"
                description="Agesoft E-ticaret sistemlerinin, öne çıkan özellikleri ve kullanım avantajlarına göz atın. E-ticaret yapmak hiç bu kadar keyifli olmamıştı."
                centerAlign
              />
            </div>
          </div>


          <div className="row">


            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5> Yeni Nesil E-ticaret Yazılımı</h5>
                  <p>
                    Progressively reinvent models and niche revolutionary
                    benefits for integrated niches.{' '}
                  </p>
                </div>

                <div className="action-btns mt-auto">
                  <Link href="/request-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      {' '}
                      Hemen Görüntüle
                    </a>
                  </Link>
                </div>

                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    src="/cta-img-1.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>

              </div>
            </div>


            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>Pazaryerleri Entegrasyonu</h5>
                  <p>
                    Progressively reinvent models and niche revolutionary
                    benefits for integrated niches.{' '}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-for-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      Hemen Görüntüle
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    layout="responsive"
                    src="/cta-img-2.png"
                    alt="cta img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>


            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>Hızlı ve SEO Dostu</h5>
                  <p>
                    Progressively reinvent models and niche revolutionary
                    benefits for integrated niches.{' '}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-for-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      Hemen Görüntüle
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                      width={223}
                      height={223}
                      layout="responsive"
                      src="/cta-img-2.png"
                      alt="cta img"
                      className="img-fluid"
                  />
                </div>
              </div>
            </div>


            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>7/24 Kesintisiz Destek</h5>
                  <p>
                    Progressively reinvent models and niche revolutionary
                    benefits for integrated niches.{' '}
                  </p>
                </div>

                <div className="action-btns mt-auto">
                  <Link href="/request-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      {' '}
                      Hemen Görüntüle
                    </a>
                  </Link>
                </div>

                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                      width={223}
                      height={223}
                      src="/cta-img-1.png"
                      alt="cta"
                      className="img-fluid"
                  />
                </div>

              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
