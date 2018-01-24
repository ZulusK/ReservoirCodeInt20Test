const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASSWORD}`
    }
});

module.exports = {
    sendVerification: (email, token, url) => {
        let mail = {
            from: "Meme comparator",
            to: email,
            subject: "Confirm registration",
            html: `<a href="${url}/${token}">Click to confirm your email</a>`
        };
        transporter.sendMail(mail, (err, info) => console.log(err));
    },
    sendNewPassword: (email, password, url) => {
        let mail = {
            from: "Meme comparator",
            to: email,
            subject: "New password",
            text: `Your new password: ${password}`
        };
        transporter.sendMail(mail, (err, info) => console.log(err));
    }
}