import { FaArrowRight, FaHeart } from 'react-icons/fa'
import heroLogo from '../assets/images/abf-hero.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__tagline">Aketesia Boafo Foundation</p>
          <h1 className="hero__title">
            Empowering Girls to<br />
            <span className="hero__title-accent">Realize Their Full Potential</span>
          </h1>
          <p className="hero__description">
            Dedicated to empowering young girls in Ghana through mentorship,
            skill-training, and holistic educational sessions. Together, we build
            a future where every girl thrives.
          </p>
          <div className="hero__actions">
            <a href="#get-involved" className="btn btn-accent">
              <FaHeart /> Support Our Mission
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="hero__image">
          <div className="hero__image-wrapper">
            <img src={heroLogo} alt="Aketesia Boafo Foundation" />
          </div>
        </div>
      </div>
    </section>
  )
}
