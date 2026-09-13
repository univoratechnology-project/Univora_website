import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedLogo from "./components/AnimatedLogo";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Headphones,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  "Home",
  "Services",
  "About",
  "Technologies",
  "Portfolio",
  "Careers",
  "Contact",
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern, responsive and high-performance web applications tailored to your business.",
    tone: "blue",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile App Development",
    text: "Native & cross-platform mobile apps designed for better user engagement.",
    tone: "purple",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Scalable cloud infrastructure, deployment and migration services.",
    tone: "green",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Beautiful and intuitive interfaces that create great user experiences.",
    tone: "pink",
  },
  {
    icon: ShieldCheck,
    title: "IT Consulting",
    text: "Strategic technology consulting to accelerate your business growth.",
    tone: "orange",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    text: "Reliable support to keep your systems running smoothly.",
    tone: "cyan",
  },
];

const technologies = [
  ["React", "react"],
  ["Node.js", "node"],
  ["Express", "express"],
  ["MongoDB", "mongo"],
  ["PostgreSQL", "postgres"],
  ["AWS", "aws"],
  ["Docker", "docker"],
  ["Git", "git"],
];

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "CEO, TechVita Solutions",
    text: "Univora delivered our project on time with exceptional quality. Their team is professional, responsive, and truly understands our needs.",
  },
  {
    name: "Priya Nair",
    role: "Product Manager, BrightEdge",
    text: "Great experience working with Univora! They turned our idea into a scalable platform and provided excellent support throughout the journey.",
  },
  {
    name: "Arjun Menon",
    role: "Founder, NextGen Solutions",
    text: "Their technical expertise and commitment to quality are outstanding. We highly recommend Univora for reliable IT solutions.",
  },
];

const posts = [
  {
    date: "Sep 10, 2025",
    title: "Top 5 Web Development Trends in 2025",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "Sep 5, 2025",
    title: "Why Cloud is the Future for Businesses",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "Aug 29, 2025",
    title: "How to Choose the Right Tech Partner",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "Aug 20, 2025",
    title: "The Power of UI/UX in Modern Applications",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="orb orb-four" />
      <div className="grid-glow" />
      <div className="stars">
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 67) % 100}%`,
              animationDelay: `${(i % 9) * 0.45}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const go = (item) => {
    const id = item.toLowerCase();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("Home");
          }}
        >
          <span className="brand-mark">
            <span />
            <i />
          </span>
          <span>Univora</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                key={item}
                className={activeSection === id ? "active" : ""}
                onClick={() => go(item)}
              >
                {item}
              </button>
            );
          })}
        </nav>

        <button className="nav-cta" onClick={() => go("Contact")}>
          Get Started
          <ArrowRight size={15} />
        </button>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const globeY = useTransform(scrollY, [0, 700], [0, 90]);
  const glowY = useTransform(scrollY, [0, 700], [0, -80]);

  return (
    <section id="home" className="hero">
      <motion.div className="hero-glow" style={{ y: glowY }} />
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="eyebrow">
            <span /> BUILDING TOMORROW TOGETHER
          </div>
          <h1>
            Innovative Software
            <br />
            Solutions for a
            <br />
            <span className="gradient-text">Smarter Future</span>
          </h1>
          <p>
            Univora is a technology-driven software company focused on creating
            scalable, intelligent, and user-centric digital solutions. We
            transform ideas into powerful products that help businesses
            innovate, grow, and succeed in a rapidly evolving digital world.
          </p>
          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started <ArrowRight size={17} />
            </button>
            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play size={14} fill="currentColor" /> Watch Our Story
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          style={{ y: globeY }}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
        >
          <div className="planet">
            <div className="planet-core">
              <Globe2 size={245} strokeWidth={0.55} />
              <div className="planet-lines" />
            </div>
            <div className="ring ring-one" />
            <div className="ring ring-two" />
          </div>
          <div className="spark spark-a">✦</div>
          <div className="spark spark-b">✦</div>
          <div className="mini-planet" />
        </motion.div>

        <motion.div
          className="hero-features"
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ delay: 0.35 }}
        >
          {[
            [Code2, "Custom Software", "Development"],
            [MonitorSmartphone, "Web & Mobile", "Applications"],
            [Cloud, "Cloud & DevOps", "Solutions"],
            [Users, "IT Consulting", "& Support"],
          ].map(([Icon, a, b]) => (
            <div className="hero-feature" key={a}>
              <Icon size={26} />
              <span>
                {a}
                <small>{b}</small>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section id="services">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div>
          <div className="eyebrow dark">OUR SERVICES</div>
          <h2>What We Do</h2>
          <p>
            We offer a wide range of IT services to help you build, grow and
            scale your business in the digital world.
          </p>
        </div>
        <button className="text-link">
          View All Services <ArrowRight size={15} />
        </button>
      </motion.div>

      <div className="service-grid">
        {services.map(({ icon: Icon, title, text, tone }, i) => (
          <motion.article
            className="service-card"
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            transition={{ delay: i * 0.07 }}
          >
            <div className={`service-icon ${tone}`}>
              <Icon size={23} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="card-arrow">
              <ArrowUpRight size={17} />
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" className="about-section">
      <div className="about-grid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <div className="eyebrow dark">ABOUT UNIVORA</div>
          <h2>
            We Build Digital
            <br />
            Experiences That <span className="gradient-text">Matter</span>
          </h2>
          <p>
            At Univora, we are a team of passionate developers, designers and
            problem solvers. With a focus on innovation and quality, we create
            digital solutions that help businesses stay ahead in a fast-changing
            world.
          </p>
          <button className="primary-btn">
            Learn More <ArrowRight size={16} />
          </button>

          <div className="stats compact">
            <div>
              <strong>50+</strong>
              <span>Happy Clients</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Years of Experience</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>Team Members</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-photo-wrap"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
            alt="Univora team collaborating"
          />
          <div className="mission-card">
            <div className="mission-icon">
              <Rocket size={21} />
            </div>
            <div>
              <b>Our Mission</b>
              <span>
                To empower businesses with technology-driven solutions.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Technologies() {
  const icons = {
    react: Sparkles,
    node: Server,
    express: Zap,
    mongo: Database,
    postgres: Database,
    aws: Cloud,
    docker: Layers3,
    git: GitBranch,
  };
  return (
    <Section id="technologies" className="tech-section">
      <motion.div
        className="section-head center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div>
          <div className="eyebrow dark">TECHNOLOGIES</div>
          <h2>Our Tech Stack</h2>
          <p>
            We work with modern technologies to build scalable and future-ready
            solutions.
          </p>
        </div>
      </motion.div>

      <div className="tech-grid">
        {technologies.map(([name, key], i) => {
          const Icon = icons[key];
          return (
            <motion.div
              className="tech-card"
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {Icon && <Icon size={31} />}
              <span>{name}</span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Impact() {
  return (
    <Section id="impact" className="impact-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div className="eyebrow dark">OUR IMPACT</div>
        <h2>Numbers That Speak</h2>
        <p className="impact-copy">
          Our journey is driven by the trust of our clients and the dedication
          of our team.
        </p>
      </motion.div>
      <div className="impact-grid">
        {[
          ["50+", "Happy Clients", Users],
          ["100+", "Projects Delivered", CheckCircle2],
          ["5+", "Years of Experience", Rocket],
          ["12+", "Team Members", Users],
        ].map(([n, label, Icon], i) => (
          <motion.div
            className="impact-stat"
            key={label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="impact-icon">
              <Icon size={18} />
            </div>
            <strong>{n}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    ["01", "Discover", "Understand your needs and goals"],
    ["02", "Plan", "Design the strategy and roadmap"],
    ["03", "Build", "Develop and test the solution"],
    ["04", "Launch", "Deploy and support your product"],
  ];
  return (
    <Section id="process" className="process-section">
      <motion.div
        className="section-head center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div>
          <div className="eyebrow dark">HOW WE WORK</div>
          <h2>Our Process</h2>
          <p>
            We follow a simple and transparent process to ensure your idea
            becomes a successful product.
          </p>
        </div>
      </motion.div>
      <div className="process-grid">
        {steps.map(([num, title, text], i) => (
          <React.Fragment key={num}>
            <motion.div
              className="process-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`step-number step-${i}`}>{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
            {i < 3 && (
              <div className="process-arrow">
                <ArrowRight size={17} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () =>
    setActive((active - 1 + testimonials.length) % testimonials.length);
  return (
    <Section id="testimonials" className="testimonial-section">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div>
          <div className="eyebrow dark">TESTIMONIALS</div>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="slider-controls">
          <button onClick={prev}>
            <ChevronLeft />
          </button>
          <span>
            {active + 1} / {testimonials.length}
          </span>
          <button onClick={next}>
            <ChevronRight />
          </button>
        </div>
      </motion.div>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <motion.article
            className={`testimonial ${i === active ? "selected" : ""}`}
            key={t.name}
            animate={{ opacity: i === active ? 1 : 0.72 }}
            whileHover={{ y: -5 }}
          >
            <span className="quote">“</span>
            <p>{t.text}</p>
            <div className="person">
              <div className="avatar">
                {t.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>
              <div>
                <b>{t.name}</b>
                <span>{t.role}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Blog() {
  return (
    <Section id="portfolio" className="blog-section">
      <motion.div
        className="section-head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div>
          <div className="eyebrow dark">BLOG</div>
          <h2>Latest from Our Blog</h2>
        </div>
        <button className="text-link">
          View All Posts <ArrowRight size={15} />
        </button>
      </motion.div>
      <div className="blog-grid">
        {posts.map((post, i) => (
          <motion.article
            className="blog-card"
            key={post.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            transition={{ delay: i * 0.08 }}
          >
            <div className="blog-image">
              <img src={post.image} alt="" />
              <span>{post.date}</span>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <button>
                Read More <ArrowRight size={13} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <motion.div
        className="contact-box"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div>
          <div className="eyebrow">LET'S BUILD TOGETHER</div>
          <h2>
            Have an idea?
            <br />
            <span className="gradient-text">Let's make it real.</span>
          </h2>
          <p>
            Tell us what you're building and we'll help you turn the idea into a
            digital product.
          </p>
        </div>
        <button className="primary-btn light">
          Start a Conversation <ArrowRight size={17} />
        </button>
      </motion.div>
    </Section>
  );
}
function Careers() {
  return <></>;
}
function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark">
              <span />
              <i />
            </span>
            <span>Univora</span>
          </a>
          <p>Ideas • Technology • Impact</p>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </div>
        <div className="socials">
          <a href="#contact">in</a>
          <a href="#contact">X</a>
          <a href="#contact">◎</a>
          <a href="#contact">▶</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Univora. All rights reserved.</span>
        <span>Chennai, India &nbsp; | &nbsp; hello@univora.com</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Impact />
        <Process />
        <Technologies />
        <Testimonials />
        <Blog />
        <Contact />
        <Careers />
      </main>
      <Footer />
      <a className="floating-chat" href="#contact" aria-label="Contact Univora">
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
