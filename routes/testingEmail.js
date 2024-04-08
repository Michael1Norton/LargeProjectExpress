const nodemailer = require("nodemailer");

// Log the values of environment variables
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

// Create a transporter object using your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Define the email options
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: "anort2002@gmail.com", // Change this to your email address for testing
  subject: "Test Email from Nodemailer",
  text: "This is a test email sent using Nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
