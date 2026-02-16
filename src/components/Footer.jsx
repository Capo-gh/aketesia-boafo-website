import { FaInstagram, FaFacebookF, FaTiktok, FaHeart } from 'react-icons/fa'
import logo from '../assets/images/abf-icon.png'
import './Footer.css'

const socials = [
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/aketesia_boafo',
  },
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
    href: null, // placeholder -link when account is created
  },
  {
    icon: <FaTiktok />,
    label: 'TikTok',
    href: null, // placeholder -link when account is created
  },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="Aketesia Boafo Foundation" />
              <span>Aketesia Boafo Foundation</span>
            </div>
            <p className="footer__tagline">
              Helper of the Lady. Empowering young girls in Winneba, Ghana
              through mentorship, skill-training, and holistic education.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h4>Follow Us</h4>
            <div className="footer__social-icons">
              {socials.map((s, i) => (
                s.href ? (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ) : (
                  <span
                    key={i}
                    className="footer__social-link footer__social-link--disabled"
                    title={`${s.label} -coming soon`}
                    aria-label={`${s.label} -coming soon`}
                  >
                    {s.icon}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Aketesia Boafo Foundation. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with <FaHeart className="footer__heart" /> for the girls of Winneba
          </p>
        </div>
      </div>
    </footer>
  )
}
