import React from "react";
import facebook from "./Facebook.png";
import github from "./GitHub.png";
import telegram from "./Telegram.png";
import instagram from "./Instagram.png";
import linkedIn from "./Linkedin.jpeg";
import Email from "./Email.png";
export default function ContactImgs() {
  return (
    <>
      <div className="ImgHolder">
        <a href="https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL">
          <img src={facebook} height="20" width="20" alt="Facebook" />
        </a>
        <a href="https://instagram.com/nainglinthant?igshid=OGQ5ZDc2ODk2ZA==">
          <img src={instagram} height="20" width="20" alt="Instagram" />
        </a>
        <a href="https://t.me/Th22001">
          <img src={telegram} alt="Telegram" height={20} width={20} />
        </a>
        <a href="https://github.com/thomaslynn132">
          <img src={github} height="20" width="20" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/thant-lynn-naing-788b282a1/ ">
          <img src={linkedIn} alt="linkedIn" height="20" width="20" />
        </a>
        <a href="thantlinnaing0000@gmail.com">
          <img src={Email} alt="Email" height="20" width="20" />
        </a>
      </div>
    </>
  );
}
