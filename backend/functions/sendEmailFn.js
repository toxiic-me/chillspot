const nodemailer = require('nodemailer');

const sendEmailFn = async ({ email, subject, msg }) => {
    return new Promise(async (resolve, reject) => {
        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "hanish870807@gmail.com",
                pass: "bilaqrayxjlqdytg"
            }
        });

        let options = {
            from: "Batchmate👻",
            to: email,
            subject: subject,
            html: msg
        };

        mailTransporter.sendMail(options, (err) => {
            if (err) {
                console.log(`Failed to send message to ${email}.`);
                reject(err);
            } else {
                console.log(`Message sent successfully to ${email}.`);
                resolve(true);
            }
        });
    });

}

module.exports = sendEmailFn;