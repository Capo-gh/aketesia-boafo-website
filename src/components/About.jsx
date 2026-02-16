import { FaBookOpen, FaHandsHelping, FaGlobeAfrica, FaQuoteLeft } from 'react-icons/fa'
import './About.css'

const values = [
  {
    icon: <FaBookOpen />,
    title: 'Education First',
    desc: 'We believe formal education is the foundation for girls to achieve better life outcomes and economic security.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Community Driven',
    desc: 'We keep families together by working within the public school system as an after-school program accessible to all.',
  },
  {
    icon: <FaGlobeAfrica />,
    title: 'Rooted in Winneba',
    desc: 'Founded by someone who grew up in Winneba, our programs are designed with deep understanding of local realities.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Helper of the Lady</h2>
          <p className="section-subtitle">
            Aketesia Boafo, translated from Fante, is dedicated to building a town
            of highly skilled, influential women of substance in every walk of life.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__story">
            <div className="about__vision-box">
              <h3>Our Vision</h3>
              <p>
                A town of highly skilled, influential women of substance in every
                walk of life.
              </p>
            </div>
            <div className="about__mission-box">
              <h3>Our Mission</h3>
              <p>
                To provide young girls with the necessary resources and training to
                cultivate the essential skills and knowledge that lead to productive
                lives and realize their full potential.
              </p>
            </div>

            <div className="about__quote">
              <FaQuoteLeft className="about__quote-icon" />
              <blockquote>
                "Your legacy is every life you have ever touched."
              </blockquote>
              <cite>- Maya Angelou</cite>
            </div>
          </div>

          <div className="about__values">
            {values.map((v, i) => (
              <div className="about__value-card" key={i}>
                <div className="about__value-icon">{v.icon}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__sdgs">
          <h3 className="about__sdgs-title">Aligned with the UN Sustainable Development Goals</h3>
          <div className="about__sdg-tags">
            <span className="about__sdg-tag about__sdg-tag--4">SDG 4:Quality Education</span>
            <span className="about__sdg-tag about__sdg-tag--5">SDG 5:Gender Equality</span>
            <span className="about__sdg-tag about__sdg-tag--1">SDG 1:No Poverty</span>
            <span className="about__sdg-tag about__sdg-tag--8">SDG 8:Decent Work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
