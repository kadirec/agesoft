import Image from "next/image";
import React from "react";

// TODO: Add FaqSchema to the page

const FaqFour = () => {
  return (
    <section className="cyber-faq pt-120 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6">
            <div className="section-heading text-center mb-5">
              <h5 className="h6 text-primary">S.S.S.</h5>
              <h2>Sıkça sorulan sorular</h2>
              <p>
                Agesoft Yeni Nesil E-Ticaret sistemlerin hakkında sıkça sorulan
                bazı soruları ve cevaplarını bir arada topladık. Aklına takılan
                başka bir soru olursa bizimle iletişime geçmeyi unutma!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="cyber-faq-wrapper">
              <div className="accordion faq-accordion" id="accordionExample">
                <div className="accordion-item border border-2 rounded active">
                  <h5 className="accordion-header" id="faq-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                    >
                      Neden AgeSoft?
                    </button>
                  </h5>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faq-1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      AgeSoft, kullanıcıların ihtiyacı olan tüm web hizmetlerini
                      tek bir panelde toplayarak, ileri teknolojileri ve yüksek
                      pazarlama stratejilerini aynı potada eritmeyi başaran yeni
                      nesil bir e-ticaret yazılımıdır. Sitenizi doğru temeller
                      üzerine inşa eden Age Soft, satış sürecindeki tüm
                      operasyonların pratik ve en ekonomik şekilde
                      yürütülmesinde rol alır.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border border-2 rounded">
                  <h5 className="accordion-header" id="faq-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                    >
                      E-fatura elle mi düzenlenecek?
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Hayır. Sistemimizde e-fatura entegrasyonu da
                      bulunmaktadır. Müşteriniz sipariş verirken fatura
                      bilgilerini gireceği için otomatik olarak tek tuşla
                      faturanızı kesebilirsiniz.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border border-2 rounded">
                  <h5 className="accordion-header" id="faq-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                    >
                      Pazaryerleri paneli nedir?
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pazaryerleri paneli, kendi sitesi üzerinden değil de
                      sadece pazaryerleri üzerinden satış yapmak isteyen
                      müşterilerimiz için oluşturduğumuz alternatif bir
                      sistemdir. Çok sayıda online kullanıcıya sahip olan aktif
                      pazaryerlerinin neredeyse tamamıyla entegrasyonumuz
                      mevcuttur. AgeSoft Pazaryerleri Paneli ile Trendyol,
                      HepsiBurada, N11, GittiGidiyor, ÇiçekSepeti gibi
                      pazaryerlerine ürünlerinizi kolayca yükleyebilir, gelen
                      satışları takip edebilir ve faturalarınızı otomatik olarak
                      kesebilirsiniz.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border border-2 rounded">
                  <h5 className="accordion-header" id="faq-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                    >
                      İstediğim zaman sizden destek alabilir miyim?
                    </button>
                  </h5>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-4"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Hangi e-ticaret paketimize sahip olduğunuz hiç önemli
                      değil. İstediğiniz zaman zaman bizimle iletişime geçerek
                      problemlerinize çözüm bulabilirsiniz. Bu destek çağrısının
                      mesai saatleri içerisinde yapılması sizlere hızlıca
                      dönebilmemiz açısından oldukça önemli. Teknik destek
                      ekibimiz ve size özel olarak atanmış müşteri temsilcimiz
                      her zaman yanınızda olacaktır.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cyber-faq-img text-lg-center mt-5 mt-lg-0 0">
              <Image
                src="/cb_faq.jpg"
                alt="cyber security"
                className="img-fluid"
                width={562}
                height={450}
              />
            </div>
          </div>
          <div className="text-center btn btn-primary d-inline-flex mx-auto my-0 w-25 justify-content-center mt-5">
            Tümünü Gör
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqFour;
