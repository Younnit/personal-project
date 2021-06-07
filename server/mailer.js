const mailer = require("nodemailer");
const { Hello } = require("./templates/Hello_template");
const { Thanks } = require("./templates/Thanks_template");

const getEmailData = (to, template) => {
  let data = null;

  switch (template) {
    case "hello":
      data = {
        from: "CourtFinder <volleyballfinder@gmail.com>",
        to,
        subject: `Hey! Welcome to our Newsletter!`,
        html: Hello(),
      };
      break;

    case "thanks":
      data = {
        from: "CourtFinder <volleyballfinder@gmail.com>",
        to,
        subject: `Hey! Welcome to our Newsletter!`,
        html: Thanks(),
      };
      break;
    default:
      data;
  }
  return data;
};

const sendEmail = (to, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "volleyballfinder@gmail.com",
      pass: "Bluewizard123,",
    },
  });

  const mail = getEmailData(to, type);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email was sent successfully.");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
