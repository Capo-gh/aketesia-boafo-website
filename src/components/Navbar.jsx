import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/images/abf-icon.png'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Programs', href: '#programs' },
  { label: 'Updates', href: '#news' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="Aketesia Boafo Foundation" />
          <span className="navbar__brand">Aketesia Boafo</span>
        </a>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a
              href="#get-involved"
              className="btn btn-accent"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </a>
          </li>
        </ul>

        <a href="#get-involved" className="btn btn-accent navbar__cta-desktop">
          Donate
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && <div className="navbar__overlay" onClick={() => setMobileOpen(false)} />}
    </nav>
  )
}
