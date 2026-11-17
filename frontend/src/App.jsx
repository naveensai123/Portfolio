import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Menu, X, ExternalLink, Copy, Check, Phone } from "lucide-react";
import "@/App.css";
import "@/contact.css";

const resumeUrl = "/resume.pdf";
const portraitUrl = "/portrait.jpg";

const skills = {
  "Languages": ["Python", "Java", "TypeScript", "SQL"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "JWT", "Drizzle ORM"],
  "Data & Tools": ["PostgreSQL", "Git", "HTML"],
  "Human": ["Problem-Solving", "Communication", "Teamwork", "Adaptability"],
};

const projects = [
  { number: "01", title: "JWT Authentication Service", eyebrow: "Backend / TypeScript", summary: "A modular, security-minded auth service built around the details that make APIs dependable.", details: ["Registration, login, password update, and protected profile endpoints", "JWT middleware with robust request validation", "PostgreSQL data layer structured with Drizzle ORM"], tags: ["TypeScript", "Node.js", "Express", "PostgreSQL"], accent: "blue", repo: "https://github.com/naveensai123/jwt-authentication-service", repoLabel: "View repository" },
  { number: "02", title: "RF–DC Rectifier", eyebrow: "Final year project / ECE", summary: "Circuit thinking meets careful iteration: a CMOS rectifier concept for RF energy harvesting.", details: ["NP-type rectifier cells with an improved NN-type architecture", "Transmission gate and body sharing techniques", "EDA simulation focused on power, delay, and PDP"], tags: ["CMOS", "RF", "EDA Tools"], accent: "lime", repo: "https://github.com/naveensai123", repoLabel: "View GitHub profile" },
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Logo() {
  return <a className="logo" href="#top" data-testid="logo-home" aria-label="Naveen Sai home"><span className="logo-mark">N</span><span>naveen<span className="logo-dot">.</span>dev</span></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 0.35], [0, -160]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame;
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);

  const copyEmail = async () => {
    setCopied(true);
    try { await navigator.clipboard?.writeText("naveensai733@gmail.com"); } catch (error) { /* Feedback remains useful when browser permissions block clipboard access. */ }
    setTimeout(() => setCopied(false), 1800);
  };
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell" id="top">
    <div className="grain" aria-hidden="true" />
    <div className="scroll-progress" style={{ transform: `scaleX(${scrollYProgress})` }} />
    <header className="nav-wrap" data-testid="site-navigation">
      <nav className="nav container"><Logo /><div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        <a href="#work" onClick={closeMenu} data-testid="nav-work-link">Work</a><a href="#about" onClick={closeMenu} data-testid="nav-about-link">About</a><a href="#skills" onClick={closeMenu} data-testid="nav-skills-link">Skills</a><a href="#contact" onClick={closeMenu} data-testid="nav-contact-link">Contact</a>
      </div><a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer" data-testid="nav-resume-link">Resume <ArrowUpRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" data-testid="mobile-menu-button">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></nav>
    </header>

    <main>
      <section className="hero container" data-testid="hero-section">
        <motion.div className="hero-orb" style={{ y: orbY }} aria-hidden="true" />
        <div className="hero-copy"><motion.div className="eyebrow reveal-line" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }}>AVAILABLE FOR SOFTWARE ROLES <span className="pulse-dot" /></motion.div>
          <h1><span className="line-mask"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .22, duration: .8, ease: [0.22, 1, 0.36, 1] }}>Building the</motion.span></span><span className="line-mask accent-line"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .34, duration: .8, ease: [0.22, 1, 0.36, 1] }}>useful<span className="asterisk">✳</span></motion.span></span><span className="line-mask"><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .46, duration: .8, ease: [0.22, 1, 0.36, 1] }}>behind the screen.</motion.span></span></h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}>I’m <strong>N. Naveen Sai</strong> — an Electronics & Communication Engineering graduate turning thoughtful backend systems into software people can trust.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}><a className="button button-dark" href="#work" data-testid="hero-work-button">See my work <ArrowUpRight size={17} /></a><a className="text-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=naveensai733@gmail.com" target="_blank" rel="noreferrer" data-testid="hero-email-link">Let’s talk <span>↗</span></a></motion.div>
        </div>
        <motion.div className="hero-aside" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .8, duration: .8 }}><div className="portrait-card"><img className="portrait-image" src={portraitUrl} alt="N. Naveen Sai" data-testid="profile-portrait" /><div className="portrait-grid" /><div className="portrait-label"><span>HYDERABAD, IN</span><span>2026 / OPEN TO WORK</span></div></div><div className="aside-note"><span className="scribble">↘</span><span>code with intent,<br />ship with care.</span></div></motion.div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 05</span></div>
      </section>

      <div className="marquee" aria-label="Areas of focus" data-testid="focus-marquee"><div className="marquee-track">BACKEND DEVELOPMENT <span>✳</span> API DESIGN <span>✳</span> DATABASE SYSTEMS <span>✳</span> PROBLEM SOLVING <span>✳</span> BACKEND DEVELOPMENT <span>✳</span> API DESIGN <span>✳</span></div></div>

      <section className="intro-section container section" id="about" data-testid="about-section"><Reveal className="section-kicker">/ 01 — A LITTLE ABOUT ME</Reveal><div className="about-grid"><Reveal><h2>I like the part where an idea becomes <em>reliable.</em></h2></Reveal><Reveal delay={.15} className="about-copy"><p>As a fresher with a backend-first mindset, I care about the quiet details: a clean data layer, an API that explains itself, and systems that keep working when the happy path ends.</p><p>My background in Electronics & Communication Engineering taught me to think in systems. Now I bring that same curiosity to Python, TypeScript, Node.js, PostgreSQL, and every problem worth solving.</p><a className="arrow-link" href={resumeUrl} target="_blank" rel="noreferrer" data-testid="about-resume-link"><Download size={16} /> Download full resume</a></Reveal></div></section>

      <section className="work-section section" id="work" data-testid="work-section"><div className="container"><Reveal className="section-kicker">/ 02 — SELECTED WORK <span>02 projects</span></Reveal><div className="work-heading"><Reveal><h2>Proof of <em>practice.</em></h2></Reveal><Reveal delay={.1}><p>Projects where I learned by building — from secure user flows to circuits that harvest invisible energy.</p></Reveal></div><div className="project-list">{projects.map((project, i) => <Reveal key={project.number} delay={i * .1}><article className={`project-card ${project.accent}`} data-testid={`project-card-${i + 1}`}><div className="project-visual"><span className="project-number">{project.number}</span>{i === 0 ? <div className="code-window"><div className="window-top"><i /><i /><i /><span>auth.middleware.ts</span></div><code><b>01</b> <span>const</span> access = <strong>verifyToken</strong>(req)<br /><b>02</b> <span>if</span> (!access.valid) <em>return</em> 401<br /><b>03</b> <span>return</span> next()<br /><b>04</b> <small>// ship secure by default</small></code></div> : <div className="circuit-art"><div className="circuit-ring" /><div className="circuit-line l1" /><div className="circuit-line l2" /><span>RF → DC</span></div>}<span className="visual-label">{project.eyebrow}</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.details.map((d) => <li key={d}>{d}</li>)}</ul></div><div><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.repo} target="_blank" rel="noreferrer" data-testid={`project-${i + 1}-repo-link`}><Github size={15} /> {project.repoLabel} <ExternalLink size={13} /></a></div></div></article></Reveal>)}</div></div></section>

      <section className="skills-section section container" id="skills" data-testid="skills-section"><Reveal className="section-kicker">/ 03 — THE TOOLKIT <span>always learning</span></Reveal><div className="skills-grid"><Reveal><h2>Tools for turning<br /><em>thought into form.</em></h2><p className="skills-note">A practical stack, strengthened by a systems mindset and a willingness to go one level deeper.</p></Reveal><div className="skill-columns">{Object.entries(skills).map(([group, items], idx) => <Reveal delay={idx * .08} key={group} className="skill-group"><span className="skill-group-name">0{idx + 1} / {group}</span>{items.map((item) => <div className="skill-item" key={item}><span>{item}</span><span>↗</span></div>)}</Reveal>)}</div></div></section>

      <section className="journey-section section container" data-testid="education-section"><Reveal className="section-kicker">/ 04 — THE FOUNDATION</Reveal><div className="journey-grid"><Reveal><h2>Curious by<br /><em>nature.</em></h2></Reveal><div className="timeline"><Reveal delay={.1} className="timeline-item"><span>2022—2026</span><div><h3>B.Tech · Electronics & Communication Engineering</h3><p>Rajeev Gandhi Memorial College of Engineering · Nandyal, AP</p><strong>GPA 7.25</strong></div></Reveal><Reveal delay={.15} className="timeline-item"><span>2020—2022</span><div><h3>Higher Secondary Education · MPC</h3><p>Sri Chaitanya Junior College · Tirupati, AP</p><strong>78.3%</strong></div></Reveal><Reveal delay={.2} className="timeline-item"><span>2019—2020</span><div><h3>Secondary School Certificate · SSC</h3><p>Keshava Reddy High School · Tirupati, AP</p><strong>98%</strong></div></Reveal><Reveal delay={.25} className="timeline-item"><span>2024</span><div><h3>NPTEL · Introduction to IoT</h3><p>Indian Institute of Technology · Online</p><strong>68 / 100</strong></div></Reveal><Reveal delay={.3} className="timeline-item"><span>BEYOND CODE</span><div><h3>Telugu · English</h3><p>Languages · professional communication</p><strong>INTERESTS: Backend Development · API Design · Database Systems · Problem Solving</strong></div></Reveal></div></div></section>

      <section className="contact-section section" id="contact" data-testid="contact-section"><div className="container contact-inner"><Reveal className="section-kicker">/ 05 — LET’S CONNECT</Reveal><Reveal><h2>Have a problem<br />worth <em>building?</em></h2></Reveal><Reveal delay={.15}><p className="contact-sub">I’m looking for my first opportunity to contribute, learn fast, and make useful things with a thoughtful team.</p></Reveal><Reveal delay={.2} className="contact-actions"><a className="button button-light" href="https://mail.google.com/mail/?view=cm&fs=1&to=naveensai733@gmail.com" target="_blank" rel="noreferrer" data-testid="contact-email-button"><Mail size={17} /> Email me <ArrowUpRight size={17} /></a><button className="copy-button" onClick={copyEmail} data-testid="copy-email-button">{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "naveensai733@gmail.com"}</button></Reveal><div className="contact-links"><a href="tel:+917569124976" data-testid="phone-link"><Phone size={16} /> +91 75691 24976</a><a href="https://github.com/naveensai123" target="_blank" rel="noreferrer" data-testid="github-link"><Github size={17} /> GitHub <ExternalLink size={13} /></a><a href="https://linkedin.com/in/naveen-sai-76b9b8280" target="_blank" rel="noreferrer" data-testid="linkedin-link"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a></div></div></section>
    </main>
    <footer className="footer container"><Logo /><span data-testid="footer-location"><MapPin size={14} /> Hyderabad, India</span><span>© 2026 N. Naveen Sai</span><a href="#top" data-testid="back-to-top">Back to top ↑</a></footer>
  </div>;
}

export default App;
