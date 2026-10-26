import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin,
  Mail, Menu, X, Moon, Sun, Download, Sparkles, Code2, BrainCircuit,
  Users, Zap, MapPin, Send, ExternalLink, CheckCircle2, Phone,
  GraduationCap, Briefcase, Award, Calendar, Building2, BadgeCheck, BookOpen, Eye, FileText
} from "lucide-react";
import { skills, projects, experiences, education, certificates, personalInfo } from "./data.js";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
      transition={reduce ? { duration: 0 } : { delay }}
    >
      {children}
    </motion.div>
  );
}

function Nav({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Education", "education"],
    ["Certificates", "certificates"],
    ["Contact", "contact"]
  ];

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      links.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="nav-wrap"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <nav className="nav shell">
        <button className="brand" onClick={() => go("home")} aria-label="Go to home">
          P<span>K</span><i>.</i>
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => (
            <button
              key={id}
              className={active === id ? "nav-link active" : "nav-link"}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="nav-cta" onClick={() => go("contact")}>
            Let's talk <ArrowUpRight size={15} />
          </button>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="mobile-menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

function OrbitalPortrait() {
  return (
    <div className="hero-art" aria-label="Abstract developer illustration">
      <div className="art-glow glow-one" />
      <div className="art-glow glow-two" />
      <div className="planet planet-large" />
      <div className="planet planet-small" />
      <div className="orbit orbit-one"><span /></div>
      <div className="orbit orbit-two"><span /></div>
      <div className="orbit orbit-three" />
      <div className="portrait-frame">
        <div className="portrait-top">
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="portrait-label">CREATIVE MODE / ON</span>
        </div>
        <div className="portrait-figure">
          <div className="figure-halo" />
          <div className="figure-head">
            <div className="hair" />
            <div className="glasses"><i /><i /></div>
          </div>
          <div className="figure-neck" />
          <div className="figure-body">
            <div className="hood" />
            <div className="jacket-line" />
          </div>
        </div>
        <div className="portrait-code">
          <Code2 size={16} />
          <span>build<br />.imagine()<br />.repeat()</span>
        </div>
      </div>
      <motion.div
        className="float-chip chip-ai"
        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit size={15} /> AI / ML
      </motion.div>
      <motion.div
        className="float-chip chip-web"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code2 size={15} /> Web Development
      </motion.div>
      <motion.div
        className="float-chip chip-solve"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={15} /> Problem solving
      </motion.div>
      <div className="art-caption">BUILD / LEARN / REPEAT<span>✳</span></div>
      <div className="art-index">FIG. 001 — DIGITAL THINKER</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section shell">
      <div className="hero-grid" />
      <div className="hero-copy">
        <motion.div
          className="status-pill"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <span className="status-dot" /> CSE (AI & ML) STUDENT <span className="pill-divider">/</span> DEVELOPER
        </motion.div>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          HELLO, WORLD. I'M
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.45 } } }}
        >
          <motion.span variants={fadeUp}>Pranjal</motion.span>
          <motion.span className="name-line" variants={fadeUp}>
            <em>Kumar</em><b className="period">.</b>
          </motion.span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.6 }}
        >
          I build digital experiences that <span>move ideas forward.</span>
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.02, duration: 0.7 }}
        >
          B.Tech Computer Science and Engineering (AI & ML) student with hands-on project experience in Python, C++, React.js, JavaScript, and FastAPI. Strong foundation in DSA, OOP, and software development, seeking an entry-level Software Developer role.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
        >
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowRight size={17} />
          </a>
          <a className="button button-secondary" href="/Pranjal-Kumar-Resume.pdf" download>
            <Download size={16} /> Download resume
          </a>
        </motion.div>
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a href="https://github.com/Pranjal-tech83" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/pranjal-tech83" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:pranjal838303@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <span className="social-note">OPEN TO ENTRY-LEVEL OPPORTUNITIES</span>
        </motion.div>
      </div>
      <Reveal className="hero-visual-wrap" delay={0.25}>
        <OrbitalPortrait />
      </Reveal>
      <a className="scroll-cue" href="#about">
        <span className="scroll-line" />
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </a>
      <div className="hero-side-note">DESIGN WITH INTENTION <span>✳</span> CODE WITH CURIOSITY</div>
    </section>
  );
}

function SectionHeading({ index, kicker, title, accent, description, side }) {
  return (
    <div className={`section-heading ${side ? "heading-split" : ""}`}>
      <div>
        <p className="section-kicker"><span>{index}</span> / {kicker}</p>
        <h2>{title} <em>{accent}</em></h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

function About() {
  const highlights = [
    { icon: <BrainCircuit />, title: "Problem solver", text: "Break it down. Think it through.", color: "orange" },
    { icon: <Sparkles />, title: "Quick learner", text: "Curiosity into capability.", color: "purple" },
    { icon: <Users />, title: "Team player", text: "Better work, built together.", color: "mint" },
    { icon: <Zap />, title: "Always curious", text: "One more thing to explore.", color: "blue" }
  ];
  return (
    <section id="about" className="section shell about-section">
      <Reveal>
        <SectionHeading
          index="01"
          kicker="A LITTLE ABOUT ME"
          title="More than"
          accent="a title."
          description="A curious mind, a practical approach, and a growing toolkit for turning ideas into real things."
        />
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-story">
          <div className="about-visual">
            <div className="visual-grid" />
            <div className="visual-sun" />
            <div className="visual-mountain mountain-back" />
            <div className="visual-mountain mountain-front" />
            <div className="visual-slogan">STAY CURIOUS.<br /><em>BUILD OFTEN.</em></div>
            <div className="visual-coordinate">28°27' N / 77°02' E</div>
          </div>
          <div className="about-text">
            <p>I'm a B.Tech Computer Science and Engineering (AI & ML) student with hands-on project experience in <strong>Python, C++, React.js, JavaScript, and FastAPI.</strong></p>
            <p>Developed <strong>SupportPilot</strong>, an AI-powered ticket management system featuring ticket classification, prioritization, dashboard analytics, and REST API integration. With a strong foundation in <strong>Data Structures and Algorithms (DSA)</strong> and <strong>Object-Oriented Programming (OOP)</strong>, I am actively seeking an entry-level Software Developer role.</p>
          </div>
        </Reveal>
        <div className="about-details">
          <Reveal className="education-card">
            <div className="card-overline"><span className="mint-dot" /> CURRENTLY PURSUING · CGPA 7.7</div>
            <h3>B.Tech CSE <span>(AI & ML)</span></h3>
            <p>Dronacharya College of Engineering, Gurugram</p>
            <p>Gurugram University · Expected 2028</p>
            <div className="education-line">
              <span>01</span>
              <div>
                <b>Diploma in Electrical Engineering</b>
                <small>Government Polytechnic Manesar · HSBTE · 2024</small>
              </div>
              <strong>70%</strong>
            </div>
            <div className="education-line">
              <span>02</span>
              <div>
                <b>Class X · CBSE</b>
                <small>Secondary Education · 2021</small>
              </div>
              <strong>80%</strong>
            </div>
            <a href="#education" className="card-sublink">
              View complete academic background <ArrowRight size={13} />
            </a>
          </Reveal>
          <div className="highlight-grid">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <motion.div
                  className={`highlight-card ${item.color}`}
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <span className="highlight-number">0{i + 1}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Reveal>
        <div className="quote-bar">
          <span>“</span>
          <p>Stay curious. Keep building. Let the work speak.</p>
          <span>”</span>
          <small>— PERSONAL PHILOSOPHY</small>
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Programming", "Core CS", "Web Tech", "Backend & DB", "Tools"];
  const visible = filter === "All" ? skills : skills.filter(s => s.group === filter);
  return (
    <section id="skills" className="section shell skills-section">
      <Reveal>
        <SectionHeading
          index="04"
          kicker="MY TOOLKIT"
          title="Curiosity, meet"
          accent="capability."
          description="A growing set of tools and technologies I use to learn, experiment, and build."
        />
      </Reveal>
      <div className="skill-toolbar">
        <div className="filter-pills" role="group" aria-label="Filter skills">
          {filters.map(f => (
            <button
              key={f}
              className={filter === f ? "filter-pill selected" : "filter-pill"}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="skill-count"><b>{String(visible.length).padStart(2, "0")}</b> SKILLS SHOWN</span>
      </div>
      <motion.div className="skills-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((skill, i) => (
            <motion.article
              className={`skill-card ${skill.color}`}
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.28, delay: i * 0.025 }}
              whileHover={{ y: -7, rotateX: 3 }}
            >
              <div className="skill-card-top">
                <span className="skill-group">{skill.group}</span>
                <ArrowUpRight size={15} />
              </div>
              <div className="skill-mark">{skill.mark}</div>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
              <div className="skill-bottom-line" />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="skills-footnote">
        <span className="status-dot" /> ALWAYS LEARNING, ALWAYS ITERATING <span className="footnote-line" />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section shell experience-section">
      <Reveal>
        <SectionHeading
          index="02"
          kicker="WORK & EXPERIENCE"
          title="Hands-on"
          accent="practice."
          description="Software development internship, REST API integration, and hands-on AI feature implementation."
        />
      </Reveal>
      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <Reveal key={exp.role + exp.company} delay={i * 0.08}>
            <motion.article
              className={`experience-card ${exp.color}`}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <div className="experience-card-head">
                <div className="experience-meta-title">
                  <div className="experience-badge-row">
                    <span className={`experience-type-pill ${exp.color}`}>{exp.type}</span>
                    <span className="experience-highlight-tag">{exp.highlight}</span>
                  </div>
                  <h3>{exp.role}</h3>
                  <div className="experience-company-row">
                    <b>{exp.company}</b>
                    <span className="bullet-sep">·</span>
                    <span><MapPin size={12} /> {exp.location}</span>
                  </div>
                </div>
                <div className="experience-period-tag">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>
                    <span className="experience-bullet">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="experience-skills-row">
                <span className="experience-tech-label">SKILLS & TOOLS:</span>
                {exp.skills.map((skill) => (
                  <span className="experience-skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ type, image, title }) {
  if (image) {
    return (
      <div className="preview preview-image-frame">
        <div
          className="project-img-backdrop"
          style={{ backgroundImage: `url(${image})` }}
        />
        <img
          src={image}
          alt={title || "Project screenshot"}
          className="project-thumb-img"
          loading="lazy"
        />
        <div className="project-img-overlay">
          <span className="project-zoom-cue">
            <Eye size={13} /> View Preview
          </span>
        </div>
      </div>
    );
  }
  if (type === "game") {
    return (
      <div className="preview preview-game">
        <div className="game-board">
          {["×", "", "○", "", "×", "", "○", "", "×"].map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
        <div className="preview-label">MINIMAX / TERMINAL</div>
      </div>
    );
  }
  if (type === "password") {
    return (
      <div className="preview preview-password">
        <div className="terminal-head">
          <i /><i /><i />
          <span>secure-gen.exe</span>
        </div>
        <div className="terminal-copy">
          <small>GENERATE A PASSWORD</small>
          <b>••••••••••••••</b>
          <div className="strength"><i /></div>
          <span>Strength: <em>Strong</em></span>
          <div className="terminal-button">GENERATE ↗</div>
        </div>
      </div>
    );
  }
  if (type === "visitor") {
    return (
      <div className="preview preview-dashboard">
        <div className="mock-sidebar">
          <b>V.</b>
          <i /><i /><i /><i />
        </div>
        <div className="mock-main">
          <div className="mock-top">
            <span>Visitors overview</span>
            <b>＋ New entry</b>
          </div>
          <div className="mock-stats"><i /><i /><i /></div>
          <div className="mock-table">
            <span /><span /><span /><span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="preview preview-support">
      <div className="mock-sidebar">
        <b>S.</b>
        <i /><i /><i /><i /><i />
      </div>
      <div className="mock-main">
        <div className="mock-top">
          <span>Good morning, team</span>
          <b>＋ Create ticket</b>
        </div>
        <div className="mock-stats"><i /><i /><i /></div>
        <div className="mock-ticket"><div /><span /><span /><em /></div>
        <div className="mock-ticket"><div /><span /><span /><em /></div>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filters = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const visible = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section shell projects-section">
      <Reveal>
        <SectionHeading
          index="03"
          kicker="SELECTED WORK"
          title="Ideas made"
          accent="tangible."
          description="Projects reflecting hands-on development in Python, C++, React.js, FastAPI, and MySQL."
          side
        />
      </Reveal>
      <div className="project-toolbar">
        <span className="project-label">
          <span className="status-dot" /> FEATURED PROJECTS <b>({String(visible.length).padStart(2, "0")})</b>
        </span>
        <div className="filter-pills">
          {filters.map(f => (
            <button
              key={f}
              className={filter === f ? "filter-pill selected" : "filter-pill"}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.article
              className="project-card"
              key={project.number}
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <button
                className="project-preview-button"
                onClick={() => setSelected(project)}
                aria-label={`Quick view ${project.title}`}
              >
                <ProjectVisual type={project.visual} image={project.image} title={project.title} />
                <span className="preview-open"><ArrowUpRight size={19} /></span>
              </button>
              <div className="project-card-content">
                <div className="project-meta">
                  <span className={`category-tag tag-${project.visual}`}>{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <h3 style={{ marginBottom: project.subtitle ? 2 : 7 }}>{project.title}</h3>
                {project.subtitle && (
                  <p style={{ font: "9px 'DM Mono', monospace", color: "var(--orange)", margin: "0 0 8px" }}>
                    {project.subtitle}
                  </p>
                )}
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button onClick={() => setSelected(project)}>
                    Quick view <ArrowRight size={15} />
                  </button>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-live-btn">
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub <Github size={14} />
                    </a>
                  ) : (
                    <span className="link-unset">
                      Add repo URL <Github size={14} />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="project-note">
        Project links are configurable in <code>src/data.js</code>. Add your real demo and repository URLs before publishing.
      </p>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close modal"
              >
                <X />
              </button>
              <div className="modal-visual">
                <ProjectVisual type={selected.visual} image={selected.image} title={selected.title} />
              </div>
              <p className="section-kicker">{selected.number} / PROJECT QUICK VIEW</p>
              <h3 id="modal-title">{selected.title}</h3>
              <p>{selected.description}</p>
              <div className="tag-row">
                {selected.tags.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p className="modal-note">{selected.note}</p>
              <div className="modal-actions">
                {selected.link && (
                  <a className="button button-primary" href={selected.link} target="_blank" rel="noreferrer">
                    Live demo <ExternalLink size={15} />
                  </a>
                )}
                {selected.github && (
                  <a className="button button-secondary" href={selected.github} target="_blank" rel="noreferrer">
                    Source code <Github size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Education() {
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <section id="education" className="section shell education-section">
      <Reveal>
        <SectionHeading
          index="05"
          kicker="ACADEMIC BACKGROUND"
          title="Knowledge &"
          accent="foundations."
          description="Formal degrees, diploma training, and official academic records shaping my technical foundations."
        />
      </Reveal>
      <div className="education-grid-full">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.06}>
            <motion.article
              className={`education-full-card ${edu.color}`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              {/* Document Image Thumbnail */}
              {edu.image && (
                <button
                  type="button"
                  className="edu-img-thumb-btn"
                  onClick={() => setSelectedEdu(edu)}
                  aria-label={`View ${edu.degree} document`}
                >
                  <div className="edu-img-frame">
                    <div
                      className="edu-img-backdrop"
                      style={{ backgroundImage: `url(${edu.image})` }}
                    />
                    <img
                      src={edu.image}
                      alt={`${edu.degree} document`}
                      className="edu-thumb-img"
                      loading="lazy"
                    />
                    <div className="edu-img-overlay">
                      <span className="edu-zoom-cue">
                        <Eye size={13} /> View Full Image
                      </span>
                    </div>
                  </div>
                </button>
              )}

              <div className="education-card-top-bar">
                <span className="education-badge">{edu.badge}</span>
                <span className="education-score-pill">
                  {edu.status === "Currently Pursuing" && <span className="status-dot" />}
                  {edu.score}
                </span>
              </div>

              <h3>{edu.degree}</h3>
              <p className="education-inst-name">{edu.institution}</p>
              <p className="education-inst-univ">{edu.university}</p>

              <div className="education-time-row">
                <span>
                  <Calendar size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  {edu.period}
                </span>
                <span>
                  <MapPin size={11} style={{ verticalAlign: "-1px", marginRight: 4 }} />
                  {edu.location}
                </span>
              </div>

              <p className="education-desc">{edu.description}</p>

              <div className="education-coursework-wrap">
                <p className="education-coursework-title">Key Coursework & Focus</p>
                <div className="education-coursework-chips">
                  {edu.coursework.map(course => (
                    <span key={course}>{course}</span>
                  ))}
                </div>
              </div>

              {edu.image && (
                <div className="edu-footer">
                  <button
                    type="button"
                    className="edu-action-btn"
                    onClick={() => setSelectedEdu(edu)}
                  >
                    View Document <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </motion.article>
          </Reveal>
        ))}
      </div>

      {/* Education Document Lightbox Modal */}
      <AnimatePresence>
        {selectedEdu && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEdu(null)}
          >
            <motion.div
              className="project-modal cert-modal"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="edu-modal-title"
            >
              <button
                className="modal-close"
                onClick={() => setSelectedEdu(null)}
                aria-label="Close modal"
              >
                <X />
              </button>

              <div className="cert-modal-header">
                <div className="cert-modal-icon">
                  {selectedEdu.badge.includes("Undergraduate") ? (
                    <GraduationCap size={24} />
                  ) : selectedEdu.badge.includes("Diploma") ? (
                    <BookOpen size={24} />
                  ) : (
                    <Building2 size={24} />
                  )}
                </div>
                <div>
                  <span className={`cert-category-badge ${selectedEdu.color}`}>
                    {selectedEdu.badge}
                  </span>
                  <p className="cert-modal-issuer">{selectedEdu.score} · {selectedEdu.period}</p>
                </div>
              </div>

              <h3 id="edu-modal-title">{selectedEdu.degree}</h3>
              <p style={{ margin: "2px 0 10px", fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                {selectedEdu.institution} · {selectedEdu.university}
              </p>
              <p>{selectedEdu.description}</p>

              {/* Full Document Image */}
              {selectedEdu.image && (
                <div className="cert-modal-lightbox">
                  <img
                    src={selectedEdu.image}
                    alt={`${selectedEdu.degree} Document`}
                    className="cert-modal-full-img"
                  />
                </div>
              )}

              <p className="education-coursework-title">Key Coursework & Highlights</p>
              <div className="tag-row" style={{ marginBottom: 20 }}>
                {selectedEdu.coursework.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="modal-actions">
                {selectedEdu.image && (
                  <a
                    className="button button-primary"
                    href={selectedEdu.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Full Image <ExternalLink size={15} />
                  </a>
                )}
                <button
                  className="button button-secondary"
                  onClick={() => setSelectedEdu(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Certificates() {
  const [filter, setFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const categories = ["All", "IBM", "Deloitte", "NPTEL", "Infosys"];
  const visible = filter === "All"
    ? certificates
    : certificates.filter(c => c.issuer.toLowerCase().includes(filter.toLowerCase()) || c.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="certificates" className="section shell certificates-section">
      <Reveal>
        <SectionHeading
          index="06"
          kicker="CREDENTIALS & CERTIFICATIONS"
          title="Verified"
          accent="skills."
          description="Recognized specializations, industrial simulations, and technical credentials with official certificates."
          side
        />
      </Reveal>
      <div className="cert-toolbar">
        <span className="cert-counter">
          <span className="status-dot" /> VERIFIED CERTIFICATES <b>({String(visible.length).padStart(2, "0")})</b>
        </span>
        <div className="filter-pills" role="group" aria-label="Filter certificates">
          {categories.map(c => (
            <button
              key={c}
              className={filter === c ? "filter-pill selected" : "filter-pill"}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.div className="certificates-grid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((cert, i) => (
            <motion.article
              className={`cert-card ${cert.color}`}
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
            >
              {/* Photo of Certificate */}
              {cert.image && (
                <button
                  type="button"
                  className="cert-img-thumb-btn"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={`View photo of ${cert.title}`}
                >
                  <div className="cert-img-frame">
                    <div
                      className="cert-img-backdrop"
                      style={{ backgroundImage: `url(${cert.image})` }}
                    />
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate Photo`}
                      className="cert-thumb-img"
                      loading="lazy"
                    />
                    <div className="cert-img-overlay">
                      <span className="cert-zoom-cue">
                        <Eye size={13} /> View Photo
                      </span>
                    </div>
                  </div>
                </button>
              )}

              <div className="cert-card-top">
                <span className={`cert-category-badge ${cert.color}`}>{cert.category}</span>
                <span className="cert-date">{cert.date}</span>
              </div>

              <h3>{cert.title}</h3>
              <p className="cert-issuer">
                <BadgeCheck size={14} className="cert-check-icon" />
                {cert.issuer}
                {cert.grade && <span className="cert-grade-tag">{cert.grade}</span>}
              </p>
              <p className="cert-desc">{cert.description}</p>

              <div className="cert-skills-row">
                {cert.skills.map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              <div className="cert-footer">
                <span className="cert-id" title={cert.credentialId}>
                  ID: {cert.credentialId.slice(0, 15)}...
                </span>
                <button
                  className="cert-action-btn"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={`Quick view ${cert.title}`}
                >
                  View Photo <ArrowRight size={13} />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="project-modal cert-modal"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              <button
                className="modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <X />
              </button>

              <div className="cert-modal-header">
                <div className="cert-modal-icon">
                  <Award size={26} />
                </div>
                <div>
                  <span className={`cert-category-badge ${selectedCert.color}`}>
                    {selectedCert.category}
                  </span>
                  <p className="cert-modal-issuer">{selectedCert.issuer} · {selectedCert.date}</p>
                </div>
              </div>

              <h3 id="cert-modal-title">{selectedCert.title}</h3>
              <p>{selectedCert.description}</p>

              {/* High-Resolution Certificate Photo */}
              {selectedCert.image && (
                <div className="cert-modal-lightbox">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                    className="cert-modal-full-img"
                  />
                </div>
              )}

              <div className="cert-modal-details">
                <div className="cert-detail-item">
                  <small>CREDENTIAL ID</small>
                  <b>{selectedCert.credentialId}</b>
                </div>
                <div className="cert-detail-item">
                  <small>ISSUING ORG</small>
                  <b>{selectedCert.issuer.split("/")[0].trim()}</b>
                </div>
                <div className="cert-detail-item">
                  <small>VERIFICATION</small>
                  <b className="verified-status"><CheckCircle2 size={13} /> Verified</b>
                </div>
              </div>

              <p className="education-coursework-title">Skills & Competencies</p>
              <div className="tag-row" style={{ marginBottom: 20 }}>
                {selectedCert.skills.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="modal-actions">
                {selectedCert.image && (
                  <a
                    className="button button-primary"
                    href={selectedCert.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Full Image <ExternalLink size={15} />
                  </a>
                )}
                {selectedCert.pdfUrl && (
                  <a
                    className="button button-secondary"
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Original PDF <FileText size={15} />
                  </a>
                )}
                {selectedCert.credentialUrl && (
                  <a
                    className="button button-secondary"
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify Online <ArrowUpRight size={15} />
                  </a>
                )}
                <button
                  className="button button-secondary"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please complete your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Looks good! This frontend demo does not send messages yet. Connect a form service to enable delivery.");
  };

  return (
    <section id="contact" className="section shell contact-section">
      <Reveal>
        <SectionHeading
          index="07"
          kicker="YOUR TURN"
          title="Have an idea?"
          accent="Let's talk."
          description="Have an idea, project, internship opportunity, or question? Feel free to reach out."
        />
      </Reveal>
      <div className="contact-panel">
        <div className="contact-copy">
          <span className="contact-orbit"><Send size={29} /></span>
          <p className="section-kicker">OPEN TO OPPORTUNITIES</p>
          <h3>Let's build<br /><em>something meaningful.</em></h3>
          <p className="contact-description">
            Have a project idea, collaboration opportunity, or just want to talk about technology? I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href="tel:8383035749">
              <span><Phone size={16} /></span>
              <div>
                <small>PHONE</small>
                <b>+91 8383035749</b>
              </div>
              <ArrowUpRight />
            </a>
            <a href="mailto:pranjal838303@gmail.com">
              <span><Mail size={16} /></span>
              <div>
                <small>EMAIL</small>
                <b>pranjal838303@gmail.com</b>
              </div>
              <ArrowUpRight />
            </a>
            <a href="https://www.linkedin.com/in/pranjal-tech83" target="_blank" rel="noreferrer">
              <span><Linkedin size={16} /></span>
              <div>
                <small>LINKEDIN</small>
                <b>linkedin.com/in/pranjal-tech83</b>
              </div>
              <ArrowUpRight />
            </a>
            <a href="https://github.com/Pranjal-tech83" target="_blank" rel="noreferrer">
              <span><Github size={16} /></span>
              <div>
                <small>GITHUB</small>
                <b>github.com/Pranjal-tech83</b>
              </div>
              <ArrowUpRight />
            </a>
            <div className="contact-location">
              <span><MapPin size={16} /></span>
              <div>
                <small>LOCATION</small>
                <b>India</b>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-heading">
            <span>01 — SAY HELLO</span>
            <span className="form-status"><i /> FORM PREVIEW</span>
          </div>
          <div className="form-row">
            <label>
              Your name
              <input name="name" value={form.name} onChange={update} placeholder="Jane Smith" autoComplete="name" />
            </label>
            <label>
              Your email
              <input name="email" value={form.email} onChange={update} placeholder="jane@example.com" autoComplete="email" />
            </label>
          </div>
          <label>
            Subject <span className="optional">(optional)</span>
            <input name="subject" value={form.subject} onChange={update} placeholder="What would you like to build?" />
          </label>
          <label>
            Your message
            <textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about your idea..." rows="5" />
          </label>
          <button className="button button-primary submit-button" type="submit">
            Check message <ArrowRight size={17} />
          </button>
          {status && (
            <p className="form-feedback" role="status">
              <CheckCircle2 size={16} />{status}
            </p>
          )}
          <p className="form-disclaimer">Frontend demo only — no message is sent or stored.</p>
        </form>
      </div>
      <footer className="footer">
        <a className="brand" href="#home">P<span>K</span><i>.</i></a>
        <span>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
        <small>© {new Date().getFullYear()} PRANJAL KUMAR</small>
      </footer>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="noise-overlay" />
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
