import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "RanRoute",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "An intelligent route optimization platform designed to generate efficient multi-stop routes under real-world constraints. Combines optimization algorithms with mapping and routing APIs to transform location data into practical, optimized travel plans.",
    technologies: ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "Supabase", "OR-Tools", "Optimization Algorithms", "Google Maps API", "Nominatim", "OpenStreetMap", "IBM Granite", "watsonx.ai"],
    demo: true,
    github: "https://github.com/MohdAbid05/IBMWildCardProject-Route-Optamization",
    githubLabel: "GitHub ↗",
  },
  {
    number: "02",
    title: "Blokus",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    description:
      "A full-featured Java implementation of the Blokus strategy game, engineered with a layered object-oriented architecture. Features rule-complete move validation, multiple AI difficulty levels with heuristic decision-making, save/load persistence, accessibility modes, and a Swing-based graphical interface backed by automated testing.",
    technologies: ["Java", "Java Swing", "JUnit", "OOP", "Layered Architecture", "AI / Heuristics", "UML"],
    demo: true,
    github: "https://github.com/MohdAbid05/blokus-software-engineering",
    githubLabel: "Project Details ↗",
  },
  {
    number: "03",
    title: "Light Field Research",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "A research-focused light-field rendering pipeline for generating and processing multi-view imagery for holographic displays. Developed tools and workflows spanning virtual camera arrays, 3D rendering, integral-image processing, quilt generation, and visualization of light-field content.",
    technologies: ["Python", "Autodesk Maya", "OctaneRender", "OpenCV", "NumPy", "FFmpeg", "Computer Graphics"],
    demo: true,
    github: "",
    disabledText: "Research Project",
  },
];

const extraProjects = [
  {
    number: "04",
    title: "AI-Powered Chess",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    description:
      "An autonomous chess environment where AI agents compete against one another through a multi-agent system. Uses Microsoft AutoGen to coordinate agent communication, tool/function calling, game-state reasoning, and turn-based interaction with an underlying chess engine.",
    technologies: ["Python", "Microsoft AutoGen", "Multi-Agent Systems", "Generative AI", "Function Calling", "Chess Engine"],
    demo: true,
    github: "https://github.com/MohdAbid05/AI_Powered_Chess_Game",
    githubLabel: "GitHub ↗",
  },
  {
    number: "05",
    title: "Guess Who",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description:
      "A database-backed guessing game inspired by Akinator, built around an interactive question-and-elimination engine that progressively narrows a set of possible characters. Integrates Python application logic with MySQL-backed persistent character data and a modular database-management layer.",
    technologies: ["Python", "MySQL", "SQL", "Database Design", "Game Logic", "Data Persistence"],
    demo: true,
    github: "https://github.com/MohdAbid05/Guess_Who",
    githubLabel: "GitHub ↗",
  },
  {
    number: "06",
    title: "Treasure Hunt",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description:
      "An interactive two-player treasure-hunting game built in Java, where players alternate searching a grid for a randomly hidden treasure. Separates core game mechanics from the Swing interface while handling randomized placement, player turns, input validation, and game-state updates.",
    technologies: ["Java", "Java Swing", "OOP", "GUI Development", "Game Logic", "Event-Driven Programming"],
    demo: true,
    github: "https://github.com/MohdAbid05/Treasure_Hunt",
    githubLabel: "GitHub ↗",
  },
];

const aboutPhotos = [
  {
    src: "/images/about/about-1.jpg",
    alt: "Abid",
  },
  {
    src: "/images/about/about-2.jpg",
    alt: "Abid",
  },
  {
    src: "/images/about/about-3.jpg",
    alt: "Abid",
  },
];

const skillCategories = [
  { id: "programming-languages", label: "Programming Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend-databases", label: "Backend & Databases" },
  { id: "ai-data-libraries", label: "AI, Data & Libraries" },
  { id: "cloud-devops-tools", label: "Cloud, DevOps & Tools" },
];

const skillItems = [
  { name: "Python", categories: "programming-languages ai-data-libraries" },
  { name: "Java", categories: "programming-languages" },
  { name: "JavaScript", categories: "programming-languages frontend" },
  { name: "C", categories: "programming-languages" },
  { name: "Go", categories: "programming-languages backend-databases" },
  { name: "Verilog", categories: "programming-languages" },
  { name: "Assembly", categories: "programming-languages" },
  { name: "HTML", categories: "frontend" },
  { name: "CSS", categories: "frontend" },
  { name: "React", categories: "frontend" },
  { name: "Java Swing", categories: "frontend" },
  { name: "MySQL", categories: "backend-databases" },
  { name: "PostgreSQL", categories: "backend-databases" },
  { name: "Oracle APEX", categories: "backend-databases" },
  { name: "TensorFlow", categories: "ai-data-libraries" },
  { name: "AutoGen", categories: "ai-data-libraries" },
  { name: "OR-Tools", categories: "ai-data-libraries" },
  { name: "JUnit", categories: "ai-data-libraries" },
  { name: "Azure", categories: "cloud-devops-tools" },
  { name: "AWS", categories: "cloud-devops-tools" },
  { name: "Docker", categories: "cloud-devops-tools" },
  { name: "Kubernetes", categories: "cloud-devops-tools" },
  { name: "Git", categories: "cloud-devops-tools" },
  { name: "GitHub", categories: "cloud-devops-tools" },
  { name: "Linux", categories: "cloud-devops-tools" },
  { name: "VS Code", categories: "cloud-devops-tools" },
  { name: "Maya", categories: "cloud-devops-tools" },
  { name: "Octane", categories: "cloud-devops-tools" },
  { name: "FFmpeg", categories: "cloud-devops-tools" },
];

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [emailCopied, setEmailCopied] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState(null);
  const [previewCategory, setPreviewCategory] = useState(null);
  const [shuffledSkills, setShuffledSkills] = useState([]);
  const [demoMessage, setDemoMessage] = useState("");

  const email = "manadeem@mun.ca";

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Could not copy email:", error);
    }
  };

  const handleDemoClick = (event, projectNumber) => {
    event.preventDefault();
    setDemoMessage(`${projectNumber}: Coming soon!`);

    window.setTimeout(() => {
      setDemoMessage("");
    }, 1600);
  };

  const showSlide = (index) => {
    setCurrentSlide((index + aboutPhotos.length) % aboutPhotos.length);
  };

  useEffect(() => {
    if (aboutPhotos.length <= 1) return undefined;

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutPhotos.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShuffledSkills([...skillItems].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("hero-particles");

    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");

    if (!ctx) return undefined;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrame = null;

    const mouse = {
      x: null,
      y: null,
    };

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(120, Math.max(55, Math.floor(width / 14)));

      particles = Array.from({ length: count }, () => {
        const isRightBias = Math.random() > 0.3;
        const isUpperBias = Math.random() > 0.45;

        return {
          x: isRightBias
            ? width * (0.52 + Math.random() * 0.48)
            : Math.random() * (width * 0.52),
          y: isUpperBias
            ? height * (0.1 + Math.random() * 0.5)
            : height * (0.35 + Math.random() * 0.65),
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          radius: Math.random() * 1.8 + 1.1,
        };
      });
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 170 && distance > 0) {
            const force = (170 - distance) / 170;

            particle.x += (dx / distance) * force * 0.42;
            particle.y += (dy / distance) * force * 0.42;
          }
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(17, 17, 17, 0.32)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.18;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(17, 17, 17, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrame = requestAnimationFrame(animate);
    };

    const hero = canvas.closest(".hero");

    hero?.addEventListener("mousemove", (event) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    hero?.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    resizeCanvas();

    if (!reducedMotion.matches) {
      animate();
    } else {
      drawParticles();
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const matchesCategory = (skill, category) =>
    skill.categories.split(" ").includes(category);

  return (
    <div className="app">
      <div
        className="cursor-glow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      <nav className="navbar">
        <a href="#home" className="logo">
          abid.
        </a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <canvas id="hero-particles" aria-hidden="true" />

        <div className="container hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            COMPUTER SCIENCE · DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            Hi, I'm <span>Abid.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            I build software, explore technology, and enjoy turning interesting
            ideas into working projects.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            <a href="#projects" className="primary-button">
              View my work ↓
            </a>

            <a
              href="https://github.com/MohdAbid05"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>

            <a
              href="/resume/Mohd-Abid-Nadeem-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Resume ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">01.</span>
            <h2>Things I've built</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <motion.article
                  key={project.number}
                  className={`project-row ${isReverse ? "reverse" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="project-text">
                    <span className="project-index">{project.number}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.demo && (
                        <button
                          type="button"
                          className="project-link demo-link"
                          onClick={(event) => handleDemoClick(event, project.number)}
                        >
                          Demo ↗
                        </button>
                      )}

                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          {project.githubLabel || "GitHub ↗"}
                        </a>
                      ) : (
                        project.disabledText && (
                          <span className="project-link-disabled">{project.disabledText}</span>
                        )
                      )}

                      {demoMessage === `${project.number}: Coming soon!` && (
                        <span className="project-demo-message">Coming soon!</span>
                      )}
                    </div>
                  </div>

                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </motion.article>
              );
            })}

            <div className={`hidden-projects ${showAllProjects ? "visible" : ""}`} id="hiddenProjects">
              {extraProjects.map((project, index) => {
                const isReverse = index % 2 !== 0;

                return (
                  <motion.article
                    key={project.number}
                    className={`project-row ${isReverse ? "reverse" : ""}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="project-text">
                      <span className="project-index">{project.number}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="project-tech">
                        {project.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <div className="project-links">
                        {project.demo && (
                          <button
                            type="button"
                            className="project-link demo-link"
                            onClick={(event) => handleDemoClick(event, project.number)}
                          >
                            Demo ↗
                          </button>
                        )}

                        {project.github ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            {project.githubLabel || "GitHub ↗"}
                          </a>
                        ) : (
                          project.disabledText && (
                            <span className="project-link-disabled">{project.disabledText}</span>
                          )
                        )}

                        {demoMessage === `${project.number}: Coming soon!` && (
                          <span className="project-demo-message">Coming soon!</span>
                        )}
                      </div>
                    </div>

                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {demoMessage && <div className="demo-message">{demoMessage}</div>}

          <div className="view-all-wrap">
            <button
              id="viewAllProjects"
              className={`view-all-projects ${showAllProjects ? "active" : ""}`}
              type="button"
              aria-expanded={showAllProjects}
              aria-controls="hiddenProjects"
              onClick={() => setShowAllProjects((prev) => !prev)}
            >
              <span>{showAllProjects ? "Show Less " : "View All Projects "}</span>
              <span className="view-all-arrow">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-number">02.</span>
            <h2>Skills</h2>
          </div>

          <div className="skill-categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                data-category={category.id}
                className={
                  activeSkillCategory === category.id || previewCategory === category.id
                    ? "active"
                    : ""
                }
                onMouseEnter={() => !activeSkillCategory && setPreviewCategory(category.id)}
                onMouseLeave={() => !activeSkillCategory && setPreviewCategory(null)}
                onClick={() => {
                  setActiveSkillCategory((prev) =>
                    prev === category.id ? null : category.id
                  );
                  setPreviewCategory(null);
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div
            className={`skills-cloud ${
              previewCategory || activeSkillCategory ? "previewing" : ""
            } ${activeSkillCategory ? "filtered" : ""}`}
            id="skillsCloud"
          >
            {shuffledSkills.map((skill) => {
              const highlighted =
                (!activeSkillCategory && previewCategory && matchesCategory(skill, previewCategory)) ||
                (activeSkillCategory && matchesCategory(skill, activeSkillCategory));
              const filteredOut = !!activeSkillCategory && !matchesCategory(skill, activeSkillCategory);

              return (
                <span
                  key={skill.name}
                  className={`skill-bubble ${highlighted ? "highlighted" : ""} ${
                    filteredOut ? "filtered-out" : ""
                  }`}
                  data-category={skill.categories}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-heading">
            <span className="section-number">03.</span>
            <h2>About</h2>
          </div>

          <div className="about-layout">
            <div className="about-text">
              <p>
                I’m a Computer Science and Mathematics student at Memorial
                University, focused on software engineering, optimization,
                graphics, and building systems that are both practical and
                genuinely useful.
              </p>

              <p>
                I enjoy turning technical problems into clear, human-centered
                experiences, whether that means building data-driven software,
                exploring visual computing, or creating tools that feel intuitive
                to use.
              </p>

              <div className="about-meta">
                <span>St. John's, NL</span>
                <span>CS + Math</span>
                <span>Open to Co-op</span>
              </div>
            </div>

            <div className="about-slideshow">
              <div className="about-photo-frame">
                {aboutPhotos.map((photo, index) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    className={`about-slide ${
                      index === currentSlide ? "active" : ""
                    }`}
                  />
                ))}
              </div>

              <div className="slide-controls">
                <button
                  id="previousSlide"
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => showSlide(currentSlide - 1)}
                >
                  ←
                </button>

                <div className="slide-dots" id="slideDots">
                  {aboutPhotos.map((photo, index) => (
                    <button
                      key={`${photo.src}-${index}`}
                      type="button"
                      className={`slide-dot ${
                        index === currentSlide ? "active" : ""
                      }`}
                      aria-label={`View photo ${index + 1}`}
                      onClick={() => showSlide(index)}
                    />
                  ))}
                </div>

                <button
                  id="nextSlide"
                  type="button"
                  aria-label="Next photo"
                  onClick={() => showSlide(currentSlide + 1)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="connect-section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="connect-content">
            <h2>
              Let's <span>connect.</span>
            </h2>

            <p>Feel free to reach out or follow my work.</p>

            <div className="connect-links">
              <button
                type="button"
                className="connect-link social-button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
              >
                <MdEmail />
              </button>

              <a
                href="https://www.linkedin.com/in/mohdabid05/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="connect-link"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/MohdAbid05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="connect-link"
              >
                <FaGithub />
              </a>
            </div>

            <div className={`copy-message ${emailCopied ? "copy-message-visible" : ""}`}>
              Copied!
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}