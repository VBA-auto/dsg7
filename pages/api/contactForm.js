// pages/api/contactForm.js
import nodemailer from "nodemailer";

const ContactForm = async (req, res) => {
  try {
    const { email, phone, name, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "mail.dsg7.fr",
      port: 465,
      secure: true, // Use true for 465
      auth: {
        user: "contact@dsg7.fr",
        pass: "Boulangerie008//",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "contact@dsg7.fr",
      subject: "New Contact Form Submission",
      text: `
Un utilisateur à rempli le formulaire de contact sur le site contact@dsg7.fr :\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nNom et prénom: ${name}\n\nMessage: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to Send Email" });
  }
};
export default ContactForm;
