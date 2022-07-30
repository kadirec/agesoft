import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section
      className="contact-us-form pt-60 pb-120"
      id="contact-us-form"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Hemen ekibimizle tanışın!</h2>
              <p>
                Satışlarınızı arttırmak ve sizi anlamak için çaba sarfeden
                ekibimiz daima sizin yanınızda olacak. Tek yapman gereken formu
                doldurmak.
              </p>
            </div>
            <form action="#" className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    Adınız: <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                      placeholder="Adınız"
                      aria-label="Adınız"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                    Soyadınız <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Soyadınız"
                      aria-label="Soyadınız"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="phone" className="mb-1">
                    Telefon Numaranız<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control no-arrow"
                      id="phone"
                      required
                      placeholder="Telefon Numaranız"
                      aria-label="Telefon Numaranız"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">
                    E-Posta Adresiniz<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="companyName" className="mb-1">
                    Firma Adınız<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      required
                      placeholder="Firma Adınız"
                      aria-label="Firma Adınız"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="companySite" className="mb-1">
                    E-Ticaret Siteniz
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="companySite"
                      required
                      placeholder="E-Ticaret Siteniz"
                      aria-label="E-Ticaret Siteniz"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                İletişime Geç
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={526}
                height={406}
                src="/contact-us-img-2.svg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
