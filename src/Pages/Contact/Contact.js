import { CiFacebook, CiMail } from "react-icons/ci";
import { motion, useScroll } from "framer-motion";
import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

function Contact() {
  const myEmail = "thantlinnaing0000@gmail.com";
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const ContactImgs = [
    {
      name: "Facebook",
      src: <CiFacebook size={100} />,
      link: "https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL",
    },
    {
      name: "GitHub",
      src: <FaGithub size={100} />,
      link: "https://github.com/thomaslynn132",
    },
    {
      name: "Telegram",
      src: <FaTelegram size={100} />,

      link: "https://t.me/Th22001",
    },
    {
      name: "Email",
      src: <CiMail size={100} />,
      link: `mailto:${myEmail}`,
    },
    {
      name: "Instagram",
      src: <FaInstagram size={100} />,
      link: "https://instagram.com/nainglinthant?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      name: "LinkedIn",
      src: <FaLinkedin size={100} />,
      link: "https://www.linkedin.com/in/thant-lynn-naing-788b282a1/",
    },
  ];
  return (
    <>
      <div>
        <h2>Contact Me Via</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
          transition={1}
          style={{ scaleX: scrollYProgress }}>
          {ContactImgs.map((contactImg, index) => (
            <a href={contactImg.link} key={index} rel="noopener noreferrer">
              <div className="col contact">
                <span className="contactImgs"> {contactImg.src} </span>
                <br /> <h3>{contactImg.name}</h3>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
