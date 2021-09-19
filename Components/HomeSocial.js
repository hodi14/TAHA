import Image from "next/dist/client/image";

export default function HomeSocial() {
  return (
    <div className="homeSocial">
      <h4> SOCIAL </h4>
      <ul>
        <li>
          <a herf="mailto:ESm.taha@gmail.com">
            <span> Email </span>
            <Image layout='fill' src="/../public/assets/images/mail.png" alt="Email" />
          </a>
        </li>
        <li>
          <a herf="https://www.instagram.com/taha.esmattalab/">
            <span> Instagram </span>
            <Image layout='fill' src="/../public/assets/images/instagram.png" alt="Instagram"/>
          </a>
        </li>
        <li>
          <a herf="https://dribbble.com/toxic-taha">
            <span> Dribble </span>
            <Image layout='fill' src="/../public/assets/images/dribble.png" alt="Dribble"/>
          </a>
        </li>
        <li>
          <a herf="https://www.behance.net/tahaesm">
            <span> Behance </span>
            <Image layout='fill' src="/../public/assets/images/behance.png" alt="Behance"/>
          </a>
        </li>
        <li>
          <a herf="https://www.linkedin.com/in/taha-esm-34a09a21b/">
            <span>LinkedIn </span>
            <Image layout='fill' src="/../public/assets/images/linkedin.png" alt="LinkedIn"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
