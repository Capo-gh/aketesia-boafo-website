import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import './News.css'

const updates = [
  {
    date: 'December 2024',
    tag: 'Launch',
    title: 'Kick-Off Session: "I Am Capable"',
    excerpt:
      'We officially launched our first cohort in Winneba, welcoming 15 girls aged 13–18. The kick-off featured vision boards, icebreakers, and an inspiring guest speaker who challenged every participant to own their story.',
  },
  {
    date: 'January 2025',
    tag: 'Session',
    title: 'Leadership & Confidence — Voices Heard',
    excerpt:
      'Girls took center stage in our first debate session, discussing topical issues affecting their communities. The energy in the room was electric — every girl left standing a little taller.',
  },
  {
    date: 'Coming Soon',
    tag: 'Upcoming',
    title: 'More Updates on the Way',
    excerpt:
      'We are documenting our journey and will be sharing stories, photos, and milestones from our sessions. Stay connected to follow our girls as they grow.',
  },
]

export default function News() {
  return (
    <section id="news" className="section news">
      <div className="news__bg-shapes">
        <div className="news__shape news__shape--1" />
        <div className="news__shape news__shape--2" />
      </div>
      <div className="container">
        <div className="news__header">
          <span className="section-label">Updates</span>
          <h2 className="section-title">What We've Been Up To</h2>
          <p className="section-subtitle">
            Stories and milestones from our sessions, our girls, and our growing community.
          </p>
        </div>

        <div className="news__grid">
          {updates.map((item, i) => (
            <article className="news__card" key={i}>
              <div className="news__card-top">
                <span className={`news__tag news__tag--${item.tag.toLowerCase()}`}>
                  {item.tag}
                </span>
                <span className="news__date">
                  <FaCalendarAlt className="news__date-icon" />
                  {item.date}
                </span>
              </div>
              <h3 className="news__card-title">{item.title}</h3>
              <p className="news__card-excerpt">{item.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="news__footer">
          <p className="news__footer-text">
            Want to stay in the loop? Reach out and we'll keep you updated.
          </p>
          <a href="#contact" className="btn btn-outline">
            Get in Touch <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
