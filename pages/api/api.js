export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "kariyer.ozsoygroup@gmail.com",
      pass: "123456aA!",
    },
    secure: true,
  });

  const mailData = {
    from: "demo email",
    to: "your email",
    subject: `Demo Talebi ${req.body.name}`,
    text: req.body.message + " | Gönderen " + req.body.email,
    html: `<div>${req.body.message}</div><p> ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
