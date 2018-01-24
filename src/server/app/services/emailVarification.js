const nodemailer = require('nodemailer');

//const transporter = nodemailer.createTransport(`smpts://${process.env.EMAIL}:${process.env.EMAIL_PASSWORD}@smtp.google.com`);
let auth={
    user: `${process.env.EMAIL}`,
    pass: `${process.env.EMAIL_PASSWORD}`
}
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
    auth: auth
});

console.log(auth);
module.exports = {
    sendVerification: (email, token, url) => {
        let mail = {
            from: "Meme comparator",
            to: email,
            subject: "Confirm registration",
            html: `<a href="${url}/activate/${token}">Click to confirm your email</a>`
        };
        transporter.sendMail(mail, (err, info) => console.log(err, info));
    }
}