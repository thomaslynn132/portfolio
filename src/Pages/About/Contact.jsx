import React from "react";
import {
  Facebook,
  GitHub,
  Telegram,
  Email,
  Linkedin,
  Instagram,
} from "../../Assets/imageExport";
export default function ContactImgs() {
  const myEmail = "thantlinnaing0000@gmail.com";
  const ContactImgs = [
    {
      name: "Facebook",
      src: Facebook,
      link: "https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL",
    },
    {
      name: "GitHub",
      src: GitHub,
      link: "https://github.com/thomaslynn132",
    },
    {
      name: "Telegram",
      src: Telegram,
      link: "https://t.me/Th22001",
    },
    {
      name: "Email",
      src: Email,
      link: `mailto:${myEmail}`,
    },
    {
      name: "Instagram",
      src: Instagram,
      link: "https://instagram.com/nainglinthant?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      name: "LinkedIn",
      src: Linkedin,
      link: "https://www.linkedin.com/in/thant-lynn-naing-788b282a1/",
    },
  ];

  return (
    <>
      <section className="contact-section contact">
        <div className="portfolio-container">
          <h1>Contact Me</h1>

          <h3>You can contact me via:</h3>
          <div className="ImgHolder">
            {ContactImgs.map((contactImg, Index) => (
              <a href={contactImg.link} key={Index}>
                <img
                  src={contactImg.src}
                  height="50"
                  width="50"
                  alt={contactImg.name}
                  className="img fadedIn"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
