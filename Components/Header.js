import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import logo from '../public/assets/images/logo.png';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link href="/" passHref>
                    <Image src={logo} alt="logo" /> 
                </Link>
            </div>
            <div className="items">
                <ul>
                <li className="home">
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li className="contact">
                        <Link href="/contact" >
                            Contact
                        </Link>
                    </li>
                    <li className="about" >
                        <Link href="/about" c>
                            About
                        </Link>
                    </li>
                    <li className="projects">
                        <Link href="/projects" >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
            
            <Script src="/assets/js/header.js" />
        </header>
    );
}