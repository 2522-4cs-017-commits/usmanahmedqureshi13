import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Ye body parsing ke liye lazmi hai

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Aapka 16-digit App Password
  },
});

// Test route check karne ke liye ke server chal raha hai
app.get("/", (req, res) => {
  res.send("Backend is up and running! ✅");
});

// Main Email Route
app.post("/send-email", async (req, res) => {
  console.log("Postman Data:", req.body); // Ye terminal mein check karein

  const { name, email, message } = req.body;

  // Agar koi field missing hogi toh hi 400 error aayega
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please fill all fields" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));