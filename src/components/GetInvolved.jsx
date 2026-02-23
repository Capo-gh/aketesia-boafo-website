import { useState } from 'react'
import { FaHeart, FaUsers, FaHandHoldingUsd, FaCheckCircle } from 'react-icons/fa'
import './GetInvolved.css'

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show success - integrate with backend later
    setSubmitted(true)
  }

  return (
    <section id="get-involved" className="section get-involved">
      <div className="get-involved__bg-shapes">
        <div className="get-involved__shape get-involved__shape--1" />
        <div className="get-involved__shape get-involved__shape--2" />
        <div className="get-involved__shape get-involved__shape--3" />
      </div>
      <div className="container">
        <div className="get-involved__header">
          <span className="section-label">Get Involved</span>
          <h2 className="section-title">Join Our Mission</h2>
          <p className="section-subtitle">
            Whether you volunteer, donate, or spread the word, every action
            helps a girl in Ghana build a brighter future.
          </p>
        </div>

        <div className="get-involved__ways">
          <div className="get-involved__way-card">
            <div className="get-involved__way-icon">
              <FaHandHoldingUsd />
            </div>
            <h3>Donate</h3>
            <p>
              Your contribution funds educational materials, session supplies,
              and transportation for girls to attend our programs.
            </p>
            <a href="mailto:selbynesi@gmail.com?subject=Donation%20Inquiry%20-%20Aketesia%20Boafo%20Foundation" className="btn btn-accent">
              <FaHeart /> Donate Now
            </a>
          </div>

          <div className="get-involved__way-card">
            <div className="get-involved__way-icon get-involved__way-icon--secondary">
              <FaUsers />
            </div>
            <h3>Volunteer</h3>
            <p>
              Lend your skills as a mentor, facilitator, or coordinator.
              We welcome supporters both in Ghana and internationally.
            </p>
            <a href="#volunteer-form" className="btn btn-outline">
              Apply Below
            </a>
          </div>
        </div>

        {/* Volunteer Form */}
        <div id="volunteer-form" className="get-involved__form-section">
          <h3 className="get-involved__form-title">Volunteer Application</h3>
          <p className="get-involved__form-desc">
            Interested in making a difference? Tell us a bit about yourself and
            how you'd like to contribute.
          </p>

          {submitted ? (
            <div className="get-involved__success">
              <FaCheckCircle className="get-involved__success-icon" />
              <h4>Thank you for reaching out!</h4>
              <p>We've received your application and will be in touch soon.</p>
            </div>
          ) : (
            <form className="get-involved__form" onSubmit={handleSubmit}>
              <div className="get-involved__form-row">
                <div className="get-involved__form-group">
                  <label htmlFor="vol-name">Full Name *</label>
                  <input
                    id="vol-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="get-involved__form-group">
                  <label htmlFor="vol-email">Email Address *</label>
                  <input
                    id="vol-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="get-involved__form-group">
                <label htmlFor="vol-role">How would you like to help? *</label>
                <select
                  id="vol-role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="mentor">Mentor / Facilitator</option>
                  <option value="coordinator">Program Coordinator</option>
                  <option value="donor">Regular Donor</option>
                  <option value="partner">Organizational Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="get-involved__form-group">
                <label htmlFor="vol-message">Tell us about yourself</label>
                <textarea
                  id="vol-message"
                  name="message"
                  rows="4"
                  placeholder="Share your background, skills, and why you want to get involved..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
