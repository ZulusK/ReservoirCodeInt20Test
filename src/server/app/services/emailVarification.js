const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(`smpts://${process.env.EMAIL}:${process.env.EMAIL_PASSWORD}@smtp.google.com`);

module.exports = {
    sendVerification: (email, token, url) => {
        let mail = {
            from: "Meme comparator",
            to: email,
            subject: "Confirm registration",
            html: `<a href="${url}/activate/${token}">Click to confirm your email</a>`
        };

        transporter.sendMail(mail, (err, info) => console.log(err));
    }
}