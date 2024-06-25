import { CiFacebook, CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

function Contact() {
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
  return (
    <>
      <div>
        <h2>Contact Me Via</h2>
        {ContactImgs.map((contactImg, Index) => (
          <div className=" contact"> </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
