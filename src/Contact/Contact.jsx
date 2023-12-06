import React from "react";
import facebook from "./Facebook.png";
import github from "./GitHub.png";
import telegram from "./Telegram.png";
import instagram from "./Instagram.png";
import linkedIn from "./Linkedin.jpeg";
import Email from "./Email.png";
export default function ContactImgs() {
  const myEmail = "thantlinnaing0000@gmail.com";
  return (
    <>
      <div className="ImgHolder">
        <a href="https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL">
          <img
            src={facebook}
            height="50"
            width="50"
            alt="Facebook"
            className="img"
          />
        </a>
        <a href="https://instagram.com/nainglinthant?igshid=OGQ5ZDc2ODk2ZA==">
          <img
            src={instagram}
            height="50"
            width="50"
            alt="Instagram"
            className="img"
          />
        </a>
        <a href="https://t.me/Th22001">
          <img
            src={telegram}
            alt="Telegram"
            height={50}
            width={50}
            className="img"
          />
        </a>
        <a href="https://github.com/thomaslynn132">
          <img
            src={github}
            height="50"
            width="50"
            alt="GitHub"
            className="img"
          />
        </a>
        <a href="https://www.linkedin.com/in/thant-lynn-naing-788b282a1/ ">
          <img
            src={linkedIn}
            alt="linkedIn"
            height="50"
            width="50"
            className="img"
          />
        </a>
        <a href={`mailto:${myEmail}`}>
          <img src={Email} alt="Email" height="50" width="50" className="img" />
        </a>
      </div>
    </>
  );
}
