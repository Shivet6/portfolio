import {
  ArrowRight, Download, FolderOpen, Code2, CalendarDays, ExternalLink,
  Github, FileText, Briefcase, Mail, Phone, MapPin, Linkedin, Settings,
  GraduationCap, Award, Star, Layout, Server, Wrench,
} from "lucide-react";

const NAV = ["Home", "Projects", "Experience", "Resume", "Contact"];

const STATS = [
  { icon: FolderOpen, value: "3", label: "Projects Completed" },
  { icon: Code2, value: "8+", label: "Technologies" },
  { icon: CalendarDays, value: "1+", label: "Years Learning" },
];

const PROJECTS = [
  { n: "01", title: "Weather App", img: "/images/weather.jpg",
    desc: "A clean weather app that shows live conditions for any city using a public weather API.",
    tags: ["HTML", "CSS", "JavaScript", "API"], live: "https://whether-web-2-0-frontend.vercel.app/", code: "https://github.com/Shivet6/whether_web_2.0" },
  { n: "02", title: "AgriLink", img: "/images/agrilink.jpg",
    desc: "A platform to connect farmers with buyers and resources for better farming.",
    tags: ["Next.js", "React", "Apps Script"], live: "https://agri-link-swart.vercel.app/", code: "https://github.com/Shivet6/AgriLink" },
  { n: "03", title: "To-Do App", img: "/images/todo.jpg",
    desc: "A simple to-do app to add and manage your daily tasks, one at a time.",
    tags: ["JavaScript", "Node.js", "Express", "MySQL"], live: "https://to-do-list-byte-forge15.vercel.app/", code: "https://github.com/Shivet6/to-do-list" },
];

const SKILLS = [
  { icon: Layout, title: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"] },
  { icon: Server, title: "Backend", items: ["Node.js", "API"] },
  { icon: Code2, title: "Languages", items: ["C++", "Python", "Java", "C"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Claude", "ChatGPT"] },
];

const RESUME_ITEMS = [
  { icon: GraduationCap, label: "Education", text: [
    "B.Tech in CSE (AI & ML), R.D. Engineering College (AKTU): 2028",
    "Intermediate (XII): 2024",
    "High School (X): 2022"] },
  { icon: Settings, label: "Technical Skills", href: "#skills" },
  { icon: Award, label: "Certifications", text: [
    "JavaScript Certification, freeCodeCamp",
    "Responsive Web Design Certification, freeCodeCamp"] },
  { icon: Star, label: "Achievements", text: [
    "Recognized as a Facilitator for leading a team of 10 volunteers at ISKCON (NGO), Modi Nagar."] },
];

const EXPERIENCE = [
  { date: "Apr – Jun 2026", role: "Web Developer Intern, Pinaki Consultant",
    text: "Built responsive, cross-browser web pages and connected front-end to back-end for apps used by 20+ users." },
  { date: "2024 – Present", role: "Assistant Area Leader, ISKCON (NGO)",
    text: "Built front-end features for the NGO website and app, and led a team of 10 volunteers." },
  { date: "2024 – 2028", role: "B.Tech in CSE (AI & ML), R.D. Engineering College",
    text: "Studying computer science with a focus on AI, ML and web development." },
];

function SectionHead({ icon: Icon, title, link, href }) {
  return (
    <div className="section-head">
      <span className="icon-box"><Icon size={22} /></span>
      <h2>{title}</h2>
      {link && <a href={href} target="_blank" rel="noreferrer" className="link-sm">{link} <ArrowRight size={14} /></a>}
    </div>
  );
}

export default function App() {

  return (
    <div className="app">
      <div className="container">
        {/* NAVBAR */}
        <nav className="card navbar">
          <ul>
            {NAV.map((item, i) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={i === 0 ? "active" : ""}>{item}</a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <span className="badge"><i className="dot" /> Available for opportunities</span>
          </div>
        </nav>

        {/* HERO */}
        <header id="home" className="card hero">
          <div className="hero-grid">
            <div className="hero-text">
              <p className="hello">HELLO, I'M</p>
              <h1>Vineet <span className="grad">Sharma</span></h1>
              <p className="role">
                Frontend Developer <span className="bar" /> <i className="dot" /> <small>Open to Work</small>
              </p>
              <p className="muted">
                I build modern, fast and user-friendly web applications with clean code and thoughtful design.
              </p>
              <div className="btn-row">
                <a href="#projects" className="btn primary">View Projects <ArrowRight size={16} /></a>
                <a href="/resume.pdf" download="Vineet_Sharma_Resume.pdf" className="btn outline"><Download size={18} /> Download Resume</a>
              </div>
            </div>

            <pre className="code-window">
              <span className="dots"><i /><i /><i /></span>
{`const developer = {
  name: 'Vineet Sharma',
  skills: ['HTML', 'CSS',
    'JavaScript', 'React'],
};`}
            </pre>

            <div className="hero-art">
              <div className="layer l3" /><div className="layer l2" />
              <div className="layer l1"><Code2 size={56} color="#fff" /></div>
              <div className="tagline">Build<br />Learn<br />Grow<span /></div>
            </div>
          </div>

          <div className="stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div className="stat" key={label}>
                <Icon size={38} strokeWidth={1.4} />
                <div><strong>{value}</strong><span>{label}</span></div>
              </div>
            ))}
          </div>
        </header>

        {/* PROJECTS */}
        <section id="projects" className="card">
          <SectionHead icon={FolderOpen} title="My Projects" link="View All Projects" href="https://github.com/Shivet6?tab=repositories" />
          <div className="projects">
            {PROJECTS.map((p) => (
              <article className="project" key={p.n}>
                <h3>
                  <span className="num">{p.n}</span><span className="bar" />
                  {p.title} <ExternalLink size={14} />
                </h3>
                <div className="project-body">
                  <a className="thumb" href={p.live} target="_blank" rel="noreferrer">
                    <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
                  </a>
                  <div className="project-info">
                    <p>{p.desc}</p>
                    <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                  </div>
                </div>
                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={13} /> Live Demo <ArrowRight size={12} /></a>
                  <a href={p.code} target="_blank" rel="noreferrer"><Github size={14} /> Source Code</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOTTOM 4 COLUMNS */}
        <section className="four">
          <div className="card col" id="skills">
            <SectionHead icon={Settings} title="Technical Skills" />
            {SKILLS.map(({ icon: Icon, title, items }) => (
              <div className="skill-group" key={title}>
                <h4><Icon size={22} /> {title}</h4>
                <div className="tags">{items.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>

          <div className="card col" id="resume">
            <SectionHead icon={FileText} title="Resume" />
            <div className="resume-box">
              <FileText size={44} strokeWidth={1.4} color="#2f5bea" />
              <p>Download my complete resume with education, skills, experience and more.</p>
            </div>
            <a href="/resume.pdf" download="Vineet_Sharma_Resume.pdf" className="btn primary block"><Download size={16} /> Download PDF</a>
            <ul className="resume-links">
              {RESUME_ITEMS.map(({ icon: Icon, label, href, text }) => (
                <li key={label}>
                  {href ? (
                    <a href={href}><Icon size={22} /> {label}</a>
                  ) : (
                    <details>
                      <summary><Icon size={22} /> {label}</summary>
                      {text.map((t) => <p key={t}>{t}</p>)}
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="card col" id="experience">
            <SectionHead icon={Briefcase} title="Experience" />
            <ol className="timeline">
              {EXPERIENCE.map((e) => (
                <li key={e.date}>
                  <h5>{e.date}</h5>
                  <strong>{e.role}</strong>
                  <p>{e.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="card col" id="contact">
            <SectionHead icon={Mail} title="Contact" />
            <strong>Let's work together!</strong>
            <p className="muted sm">Feel free to reach out for collaborations, freelance work or just a friendly hello.</p>
            <ul className="contact-list">
              <li><Mail size={18} /> <a href="mailto:vineetsha10@gmail.com">vineetsha10@gmail.com</a></li>
              <li><Phone size={18} /> <a href="tel:+919958128951">+91 99581 28951</a></li>
              <li><MapPin size={18} /> Modi Nagar, India</li>
              <li><Linkedin size={18} /> <a href="https://www.linkedin.com/in/vineet-sharma987" target="_blank" rel="noreferrer">linkedin.com/in/vineet-sharma987</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
