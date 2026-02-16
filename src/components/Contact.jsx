import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'selbynesi@gmail.com',
    href: 'mailto:selbynesi@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+1 (438) 470-6358',
    href: 'tel:+14384706358',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Winneba, Ghana',
    href: null,
  },
  {
    icon: <FaLinkedin />,
    label: 'Founder LinkedIn',
    value: 'Joyce Selby',
    href: 'https://www.linkedin.com/in/joyce-selby/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have questions or want to learn more about how you can support our
            work? We'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          {contactInfo.map((item, i) => (
            <div className="contact__card" key={i}>
              <div className="contact__card-icon">{item.icon}</div>
              <div>
                <span className="contact__card-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact__card-value"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact__card-value">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
