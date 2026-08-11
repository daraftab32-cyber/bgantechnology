import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

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


    // ===============================
    // BASIC VALIDATION
    // ===============================

    if (!name || !email || !service || !message) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });

    }


    // ===============================
    // CHECK RESEND API KEY
    // ===============================

    if (!process.env.RESEND_API_KEY) {

      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });

    }


    // ===============================
    // SEND EMAIL USING RESEND API
    // ===============================

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          from: "BG Technology <onboarding@resend.dev>",

          to: [
            process.env.GMAIL_USER || "bgantechnology@gmail.com"
          ],

          reply_to: email,

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
        }),
      }
    );


    // ===============================
    // RESEND RESPONSE
    // ===============================

    const resendData = await resendResponse.json();


    if (!resendResponse.ok) {

      console.error(
        "Resend email error:",
        resendData
      );

      return res.status(500).json({
        success: false,
        message: "Unable to send enquiry.",
      });

    }


    console.log(
      "Email sent successfully:",
      resendData
    );


    // ===============================
    // SUCCESS
    // ===============================

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully!",
    });


  } catch (error) {

    console.error(
      "Contact email error:",
      error
    );

    return res.status(500).json({
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
    "Resend API key loaded:",
    !!process.env.RESEND_API_KEY
  );

  console.log(
    "Receiving email:",
    process.env.GMAIL_USER || "bgantechnology@gmail.com"
  );

});