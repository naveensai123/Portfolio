import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const configuredOrigins = process.env.CORS_ORIGINS
  ?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const corsOrigin = !configuredOrigins?.length || configuredOrigins.includes("*") ? "*" : configuredOrigins;
app.use(cors({ origin: corsOrigin }));
app.use(express.json({ limit: "20kb" }));

const COOLDOWN_MS = 45 * 1000; // same 45 second wait as the original
const lastRequest = new Map(); // ip -> time of last message

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// stops people from injecting HTML into your email
const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

app.get("/api", (req, res) => res.json({ message: "Hello World" }));

app.post("/api/contact", async (req, res) => {
  const { name = "", email = "", message = "" } = req.body || {};

  // same rules as the original: name 2-80, valid email, message 20-2000
  if (name.trim().length < 2 || name.length > 80)
    return res.status(422).json({ detail: "Name must be 2 to 80 characters." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return res.status(422).json({ detail: "Please enter a valid email." });
  if (message.trim().length < 20 || message.length > 2000)
    return res.status(422).json({ detail: "Message must be 20 to 2000 characters." });

  const ip = req.ip;
  const now = Date.now();
  if (lastRequest.has(ip) && now - lastRequest.get(ip) < COOLDOWN_MS)
    return res.status(429).json({ detail: "Please wait a moment before sending another message" });
  lastRequest.set(ip, now);

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      html: `<h2>New message from your portfolio</h2>
             <p><strong>Name:</strong> ${esc(name)}</p>
             <p><strong>Email:</strong> ${esc(email)}</p>
             <p><strong>Message:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>`,
    });
    res.json({ status: "success" });
  } catch (err) {
    console.error("Email send error:", err.message);
    res.status(500).json({ detail: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
