
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageSquare,Phone } from 'lucide-react';
import './Home.css';
import myAvatar from '../assets/PasFoto.png';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "MealsToGo",
      description: "Online Delivery App",
      tech: ["Figma", "HTML5", "CSS3", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Movie Recommender",
      description: "AI Powered Movie Recommender Web ",
      tech: ["React", "HTML5", "Dataset", "CSS3", "Ai Integration"],
      github: "#",
      demo: "#"
    },
    {
      title: "Posture Guard",
      description: "Posture Correcting App using AI.",
      tech: ["React", "Ai Integration", "Dataset", "CSS3"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    "JavaScript", "React.js", "Node.js", "Python", 
    "SQL", "Git", "HTML5", "CSS3"
  ];

  return (
    <div className="portfolio-container">
    {/* Background Effects */}
<div className="background-effects">
  <div className="particles">
    {[...Array(50)].map((_, i) => (
      <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${20 + Math.random() * 20}s`
      }}></div>
    ))}
  </div>
</div>
      {/* Navigation */}
      <nav className={`navbar ${isLoaded ? 'navbar-loaded' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Portfolio</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'nav-active' : ''}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'nav-active' : ''}>
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'nav-active' : ''}>
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'nav-active' : ''}>
              Contact
            </button>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`hero-section ${isLoaded ? 'hero-loaded' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">Johannes Verrell Vittorio</span>
            </h1>
            <p className="hero-subtitle">Undergraduate on Computer Science Major. Full Stack & UI/UX Enthusiast</p>
            <p className="hero-description">
               Passionate about crafting seamless digital experiences, from user-focused design to full-stack development.
               I thrive on clean code and creating innovative, intuitive solutions.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              < myAvatar size={50}   />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
               A motivated 5th-semester Computer Science student at BINUS University with a passion for the entire product development lifecycle. I enjoy bringing ideas to life,
                from initial design to full-stack implementation, and I am eager to apply my skills in a challenging internship opportunity.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, or enjoying a good cup of coffee 
              </p>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag" style={{animationDelay: `${index * 0.1}s`}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="project-link">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-text">
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about tech, 
                feel free to reach out!
              </p>
            </div>
            <div className="contact-links">
              <a href="johannesverrel20@gmail.com" className="contact-link">
                <Mail size={24} />
                <span>johannesverrel20@gmail.com</span>
              </a>
                <a href="https://wa.me/+6282258498194" className="contact-link">
                <Phone size={24} />
                <span>+6282258498194</span>
              </a>
              <a href="https://github.com/jhnsvrll1" className="contact-link">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/johannes-verrell-vittorio/" className="contact-link">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Jhnsvrl. Built with React.js</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;