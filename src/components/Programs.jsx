import {
  FaStar,
  FaCrown,
  FaPray,
  FaPiggyBank,
  FaLaptop,
  FaBriefcase,
  FaHeartbeat,
  FaGraduationCap,
  FaPalette,
  FaSpa,
  FaHandHoldingHeart,
  FaClipboardCheck,
} from 'react-icons/fa'
import './Programs.css'

const calendar = [
  { month: 'December', theme: 'Kick-off: "I Am Capable"', icon: <FaStar />, color: '#4A708B', activities: 'Vision boards, icebreakers, guest speaker for inspiration' },
  { month: 'January', theme: 'Leadership & Confidence', icon: <FaCrown />, color: '#84A98C', activities: 'Debate on a topical issue' },
  { month: 'February', theme: 'Rights and Religion', icon: <FaPray />, color: '#A48E9D', activities: 'Faith-based discussion on rights and roles as girls' },
  { month: 'March', theme: 'Financial Literacy', icon: <FaPiggyBank />, color: '#4A708B', activities: 'Savings and budgeting session' },
  { month: 'April', theme: 'Digital Skills', icon: <FaLaptop />, color: '#84A98C', activities: 'Basic ICT skills, leveraging digital tools, safe internet use' },
  { month: 'May', theme: 'Career Exploration', icon: <FaBriefcase />, color: '#A48E9D', activities: 'Discussion on school courses and career outcomes' },
  { month: 'June', theme: 'Health & Hygiene', icon: <FaHeartbeat />, color: '#4A708B', activities: 'Menstrual hygiene, mental health, nutrition' },
  { month: 'July', theme: 'Education Support', icon: <FaGraduationCap />, color: '#84A98C', activities: 'Tutoring, SHS/Uni prep, scholarship exploration' },
  { month: 'August', theme: 'Creative Art', icon: <FaPalette />, color: '#A48E9D', activities: 'Sewing, beading, painting, music, and more. Demystifying creativity' },
  { month: 'September', theme: 'Self-awareness & Care', icon: <FaSpa />, color: '#4A708B', activities: 'Journaling, mindfulness, conversation circles' },
  { month: 'October', theme: 'Community Service', icon: <FaHandHoldingHeart />, color: '#84A98C', activities: 'Group project: identify a cause and deliver an outreach program' },
  { month: 'November', theme: 'Review Month', icon: <FaClipboardCheck />, color: '#A48E9D', activities: 'Focus group on activities and plan the next year' },
]

export default function Programs() {
  return (
    <section id="programs" className="section programs">
      <div className="container">
        <div className="programs__header">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">12 Months of Growth</h2>
          <p className="section-subtitle">
            Each month brings a new theme designed to build skills, confidence,
            and community among our girls through after-school sessions.
          </p>
        </div>

        <div className="programs__approach">
          <div className="programs__approach-card">
            <h3>Our Approach</h3>
            <p>
              We foster a nurturing and inclusive environment where all adolescent
              girls, including pregnant and young mothers, can stay in school and
              thrive. We provide an integrated package of academic support, sexuality
              and life-skills education, vocational training, leadership development,
              and mentorship tailored to their realities.
            </p>
          </div>
        </div>

        <div className="programs__grid">
          {calendar.map((item, i) => (
            <div className="programs__card" key={i}>
              <div
                className="programs__card-icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>
              <div className="programs__card-month">{item.month}</div>
              <h4 className="programs__card-theme">{item.theme}</h4>
              <p className="programs__card-activities">{item.activities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
