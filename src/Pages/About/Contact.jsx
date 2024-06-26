import React from "react";
import { CiFacebook, CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import "./contact.css";
import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
export default function ContactImgs() {
  const myEmail = "thantlinnaing0000@gmail.com";
  const ContactImgs = [
    {
      name: "Facebook",
      src: <CiFacebook />,
      link: "https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL",
    },
    {
      name: "GitHub",
      src: <FaGithub />,
      link: "https://github.com/thomaslynn132",
    },
    {
      name: "Telegram",
      src: <FaTelegram />,

      link: "https://t.me/Th22001",
    },
    {
      name: "Email",
      src: <CiMail />,
      link: `mailto:${myEmail}`,
    },
    {
      name: "Instagram",
      src: <FaInstagram />,
      link: "https://instagram.com/nainglinthant?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      name: "LinkedIn",
      src: <FaLinkedin />,
      link: "https://www.linkedin.com/in/thant-lynn-naing-788b282a1/",
    },
  ];
  const imgVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <section className="contact-section contact">
        <div className="portfolio-container">
          <div className="ImgHolder" style={{ padding: "5px" }}>
            {ContactImgs.map((contactImg, Index) => (
              <motion.a
                href={contactImg.link}
                key={Index}
                variants={imgVariants}
                initial="hidden"
                animate="visible">
                <span className="contactImgs"> {contactImg.src}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
