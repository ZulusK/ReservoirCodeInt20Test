const nodemailer = require('nodemailer');

//const transporter = nodemailer.createTransport(`smpts://${process.env.EMAIL}:${process.env.EMAIL_PASSWORD}@smtp.google.com`);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.EMAIL_PASSWORD}@smtp.google.com`,
        pass: `${process.env.EMAIL}`
    }
});

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