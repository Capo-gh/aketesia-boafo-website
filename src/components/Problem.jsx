import { FaExclamationTriangle, FaSchool, FaChild, FaBan } from 'react-icons/fa'
import './Problem.css'

const stats = [
  {
    icon: <FaChild />,
    number: '1 in 5',
    label: 'girls aged 15-19 in Ghana have begun childbearing',
  },
  {
    icon: <FaSchool />,
    number: '102,000+',
    label: 'female school dropouts reported in Ghana in 2020 alone',
  },
  {
    icon: <FaBan />,
    number: '1 in 3',
    label: 'girls who drop out do not return to school due to teenage pregnancy',
  },
  {
    icon: <FaExclamationTriangle />,
    number: '192,500',
    label: 'total school dropouts reported by the Ghana Education Service in 2020',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section problem">
      <div className="container">
        <div className="problem__header">
          <span className="section-label">The Challenge</span>
          <h2 className="section-title">Why This Work Matters</h2>
          <p className="section-subtitle">
            Adolescent pregnancy remains a deep-rooted challenge across Ghana,
            trapping girls in cycles of poverty and limiting their potential.
          </p>
        </div>

        <div className="problem__stats">
          {stats.map((s, i) => (
            <div className="problem__stat-card" key={i}>
              <div className="problem__stat-icon">{s.icon}</div>
              <div className="problem__stat-number">{s.number}</div>
              <p className="problem__stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="problem__detail">
          <div className="problem__detail-content">
            <h3>A Cycle That Must Be Broken</h3>
            <p>
              Multiple studies have interconnected factors such as poverty, early child
              marriages, inadequate reproductive health education, and limited access to
              contraceptives driving the high rates of teenage pregnancy. The consequences
              are far-reaching. Girls either drop out of school, perform poorly
              academically, or are limited in advancing their skills.
            </p>
            <p>
              Stigma, financial barriers, and lack of care services are among the reasons
              girls do not return to school after childbirth. With the burden of low
              educational attainment and raising families, the vicious cycle of poverty is
              reinforced, ultimately limiting the meaningful participation of girls in
              community and national development.
            </p>
          </div>
          <div className="problem__detail-highlight">
            <div className="problem__highlight-card">
              <span className="problem__highlight-label">Our Response</span>
              <p>
                Aketesia Boafo confronts these barriers head-on through after-school
                mentorship, comprehensive education, and skill-building, keeping girls
                in school and on the path to brighter futures.
              </p>
              <a href="#programs" className="btn btn-primary">See Our Programs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
