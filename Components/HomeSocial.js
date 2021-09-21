import Image from "next/dist/client/image";
import intsaPath from "../public/assets/images/instagram.png";
import dribblePath from "../public/assets/images/dribble.png";
import behancePath from "../public/assets/images/behance.png";
import linkedinPath from "../public/assets/images/linkedin.png";
import mailPath from "../public/assets/images/mail.png";

export default function HomeSocial() {
  return (
    <div className="homeSocial">
      <h4> SOCIAL </h4>
      <ul>
        <li>
          <a herf="mailto:ESm.taha@gmail.com">
            <span> Email </span>
            <Image layout='fill' src={mailPath} alt="Email" />
          </a>
        </li>
        <li>
          <a herf="https://www.instagram.com/taha.esmattalab/">
            <span> Instagram </span>
            <Image layout='fill' src={intsaPath} alt="Instagram"/>
          </a>
        </li>
        <li>
          <a herf="https://dribbble.com/toxic-taha">
            <span> Dribble </span>
            <Image layout='fill' src={dribblePath} alt="Dribble"/>
          </a>
        </li>
        <li>
          <a herf="https://www.behance.net/tahaesm">
            <span> Behance </span>
            <Image layout='fill' src={behancePath} alt="Behance"/>
          </a>
        </li>
        <li>
          <a herf="https://www.linkedin.com/in/taha-esm-34a09a21b/">
            <span>LinkedIn </span>
            <Image layout='fill' src={linkedinPath} alt="LinkedIn"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
