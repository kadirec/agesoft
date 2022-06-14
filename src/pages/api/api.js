export default async (req, res) => {
  require("dotenv").config();
  const nodemailer = require("nodemailer");

  async function mail() {
    console.log("enter async function");
    const transporter = nodemailer.createTransport({
      name: "smtp.gmail.com",
      port: 587,
      host: "smtp.google.com",
      auth: {
        user: "kariyer.ozsoygroup@gmail.com",
        pass: "123456aA!",
      },
      secure: true,
    });
    let mail = await transporter.sendMail({
      from: "demo email",
      to: "your email",
      subject: `Demo Talebi ${req.body.name}`,
      text: req.body.message + " | Gönderen " + req.body.email,
      html: `<div>${req.body.message}</div><p> ${req.body.email}</p>`,
    });
  }

  try {
    console.log("sending mail");
    await mail();
    res.status(200);
    console.log("mail should be sent");
  } catch (error) {
    console.log(error);
    console.log("error sending mail");
    res.status(404);
  } finally {
    res.end();
  }
};
