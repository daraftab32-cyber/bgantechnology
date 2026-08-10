import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// HOME
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "BG Technology Backend is running 🚀",
  });
});


// ===============================
// CONTACT / SEND ENQUIRY
// ===============================

app.post("/api/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      service,
      message,
    } = req.body;


    // BASIC VALIDATION

    if (!name || !email || !service || !message) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });

    }


    // ===============================
    // GMAIL SMTP
    // ===============================

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });


    // ===============================
    // SEND EMAIL
    // ===============================

    await transporter.sendMail({

      from: `"BG Technology Website" <${process.env.GMAIL_USER}>`,

      to: process.env.GMAIL_USER,

      replyTo: email,

      subject: `New Project Enquiry - ${name}`,

      text: `
New Project Enquiry
===================

Name:
${name}

Email:
${email}

Phone:
${phone || "Not provided"}

Service:
${service}

Message:
${message}

===================
Sent from BG Technology website.
      `,
    });


    // ===============================
    // SUCCESS
    // ===============================

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully!",
    });


  } catch (error) {

    console.error(
      "Contact email error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Unable to send enquiry.",
    });

  }

});


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `BG Technology server running on port ${PORT}`
  );

  console.log(
    "Gmail account:",
    process.env.GMAIL_USER
  );

  console.log(
    "App password loaded:",
    !!process.env.GMAIL_APP_PASSWORD
  );

});