import React, { useState } from "react";

const ServiceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firmaAdi, setFirmaAdi] = useState("");
  const [eTicaretSite, setETicaretSite] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      firmaAdi,
      message,
    };

    fetch("api/api", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("İstek alındı");
      if (res.status === 200) {
        console.log("İstek tamamlandı!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };
  return (
    <>
      <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
        <div className="register-wrap p-5 bg-white shadow rounded-custom">
          <h3 className="fw-medium">
            Formu doldur, en kısa zamanda sizinle iletişime geçelim.
          </h3>

          <form action="#" className="mt-4 register-form">
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Adınız"
                    aria-label="Adınız"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                  />
                </div>
              </div>
              <div className="col-sm-6 ">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-Posta Adresiniz"
                    aria-label="E-Posta Adresiniz"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Firma adınız"
                    aria-label="firma-adiniz"
                    name="firmaAdi"
                    onChange={(e) => {
                      setFirmaAdi(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-Ticaret siteniz (opsiyonel)"
                    aria-label="E-Ticaret siteniz (opsiyonel)"
                    name="eticaretSite"
                    onChange={(e) => {
                      setETicaretSite(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="input-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Mesajınız(opsiyonel)"
                    style={{ height: "120px" }}
                    name="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check fs-10">
                  Verileriniz kişisel verilerin korunumu yasasına aykırı olarak
                  kullanılmayacaktır.
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary mt-4 d-block w-100"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
