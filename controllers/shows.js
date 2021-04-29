const Portfolio = require("../models/portfolio");
const Service = require("../models/service");
const Wifi = require("../models/wifi");
const Security = require("../models/security");
const { cloudinary } = require("../cloudinary");
const nodemailer = require("nodemailer");

module.exports.renderLanding = (req, res) => {
  res.render("landing");
};

module.exports.rendermain = async (req, res) => {
  const ports = await Portfolio.find({});
  res.render("main", { ports });
};

module.exports.renderWlan = async (req, res) => {
  const wifi = await Wifi.findOne({});
  res.render("wlan", { wifi });
};

module.exports.renderSecurity = async (req, res) => {
  const security = await Security.findOne({});
  res.render("security", { security });
};
module.exports.renderManagedservices = async (req, res) => {
  const service = await Service.findOne({});
  res.render("services", { service });
};

module.exports.renderImpressum = (req, res) => {
  res.render("impressum");
};

module.exports.createKontakt = async (req, res, next) => {
  const output = `
    <h2>Sie haben eine neue Kontaktanfrage erhalten</h2>
    <h3>Übersicht</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Betreff: ${req.body.betreff}</li>
      <li>Email: ${req.body.email}</li>
      <li>Telefon: ${req.body.phone}</li>
    </ul>
    <h3>Nachricht</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.ILM_HOST,
    port: process.env.ILM_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ILM_MAIL, // generated ethereal user
      pass: process.env.ILM_PW, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Nodemailer Kontakt" salgueros@hotmail.de', // sender address
    to: "salgueros@hotmail.de", // list of receivers
    subject: "Neue Kontaktanfrage", // Subject line
    text: "Folgende Nachricht wurde Per Kontaktformular gesendet", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // req.flash("info", "Die Email wurde erfolgreich versendet!");
    // res.redirect("/home");
    res.send("EMAIL SENT!");
  });
};
