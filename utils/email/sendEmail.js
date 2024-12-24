const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");


// using SMTP
const sendEmail = async (email, subject, payload, template) => {
    try {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const source = fs.readFileSync(path.join(__dirname, template), "utf8");
        const compiledTemplate = handlebars.compile(source);
        const options = {
                from: process.env.FROM_EMAIL,
                to: email,
                subject: subject,
                html: compiledTemplate(payload),
        };

        // Send email
        transporter.sendMail(options, (error, info) => {
            if (error) {
                console.error('Error sending email:', error); // Log the error
                return error;
            } else {
                console.log('Email sent:', info); // Log email sending info
                return res.status(200).json({
                    success: true,
                });
            }
        });
        return true;
    } catch (error) {
        console.error("Email sending failed:", error);
        return false;
    }
};
module.exports = sendEmail;