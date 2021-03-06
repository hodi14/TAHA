import Image from "next/dist/client/image";
import intsaPath from "../public/assets/images/instagram.png";
import dribblePath from "../public/assets/images/dribble.png";
import behancePath from "../public/assets/images/behance.png";
import linkedinPath from "../public/assets/images/linkedin.png";

export default function ContactSocial() {
  return (
    <div className="contactSocial">
      <div className="content">
        <div className="mail">
          <h4>DROP ME A LINE:</h4>
          <a href="mailto:esm.taha@gamil.com">ESM.TAHA@GMAIL.COM</a>
        </div>
        <div className="others">
          <h4>CONTACT</h4>
          <ul>
            <li>
              <a herf="https://www.instagram.com/taha.esmattalab/">
                <Image
                  layout="fill"
                  src={intsaPath}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a herf="https://dribbble.com/toxic-taha">
                <Image
                  layout="fill"
                  src={dribblePath}
                  alt="Dribble"
                />
              </a>
            </li>
            <li>
              <a herf="https://www.behance.net/tahaesm">
                <Image
                  layout="fill"
                  src={behancePath}
                  alt="Behance"
                />
              </a>
            </li>
            <li>
              <a herf="https://www.linkedin.com/in/taha-esm-34a09a21b/">
                <Image
                  layout="fill"
                  src={linkedinPath}
                  alt="LinkedIn"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
