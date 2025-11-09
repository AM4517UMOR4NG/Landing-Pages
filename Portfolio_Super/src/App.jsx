import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Code2, Sparkles, Rocket, Star, Zap, Terminal, Layers, Brain, Database, Cloud, Palette } from 'lucide-react'
import './index.css'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState([])
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 60 + 280}, 100%, 50%)`,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
        y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
      })))
      requestAnimationFrame(animateParticles)
    }
    animateParticles()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Coder', 'Tech Innovator']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      {/* Animated Background Layers */}
      <div className="bg-layers">
        <motion.div 
          className="bg-gradient"
          animate={{
            background: [
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3), transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.3), transparent 70%)`,
              `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.3), transparent 70%)`,
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="animated-grid"></div>
        <div className="particles-bg"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="floating-orb orb-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-orb orb-2"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-orb orb-3"
          animate={{
            x: [-50, 50, -50],
            y: [0, -150, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Interactive Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cursor Glow Effect */}
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePosition.x * 4 - 200,
          y: mousePosition.y * 4 - 200,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        style={{ y: useSpring(0, { stiffness: 100, damping: 20 }) }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="logo-icon" />
            </motion.div>
            <span className="logo-text">Portfolio</span>
            <motion.span
              className="logo-accent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Super
            </motion.span>
          </motion.div>
          <div className="nav-links">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
              >
                {item}
                <motion.div
                  className="nav-link-underline"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero" ref={heroRef}>
        <motion.div
          style={{ scale, opacity }}
          className="hero-content"
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="greeting-badge"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="sparkle-icon" />
              </motion.div>
              <span>Welcome to my universe</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Your Name
              </motion.span>
            </motion.h1>

            <motion.div
              className="hero-subtitle"
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                animate={{ 
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Crafting extraordinary digital experiences with cutting-edge technologies.
              I transform ideas into reality through code, design, and innovation.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)',
                  rotate: 2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Download className="btn-icon" />
                </motion.div>
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
                  rotate: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="btn-icon" />
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { icon: Github, href: 'https://github.com', color: 'var(--purple)' },
                { icon: Linkedin, href: 'https://linkedin.com', color: 'var(--blue)' },
                { icon: Mail, href: 'mailto:contact@example.com', color: 'var(--cyan)' },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10, 
                      y: -5,
                      boxShadow: '0 10px 30px rgba(168, 85, 247, 0.5)'
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="social-icon" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="floating-card"
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 10, 0],
                rotateX: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 15,
                rotateX: -10,
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <motion.div
                  className="profile-circle"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="profile-inner">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Code2 className="profile-icon" />
                    </motion.div>
                  </div>
                </motion.div>
                <div className="stats">
                  {[
                    { number: '50+', label: 'Projects', icon: Rocket },
                    { number: '30+', label: 'Clients', icon: Star },
                    { number: '15+', label: 'Awards', icon: Zap },
                  ].map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={i}
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 1 + i * 0.2, type: "spring" }}
                        whileHover={{ scale: 1.15, y: -10, rotate: 5 }}
                      >
                        <motion.div
                          className="stat-icon"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.3 
                          }}
                        >
                          <Icon />
                        </motion.div>
                        <motion.div
                          className="stat-number"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="stat-label">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>
                <div className="tech-stack">
                  {['React', 'Node.js', 'TypeScript', 'Python'].map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        rotate: 5,
                        boxShadow: '0 10px 20px rgba(168, 85, 247, 0.4)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Code Elements */}
        {['</>', '{ }', '[]', '()', '=>'].map((code, i) => (
          <motion.div
            key={i}
            className="floating-code"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
              fontSize: `${3 + i}rem`,
            }}
          >
            {code}
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.p
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring" }}
            >
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              My journey in tech started with curiosity and has evolved into a career dedicated 
              to building exceptional digital experiences.
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring" }}
            >
              I specialize in creating scalable applications that not only function flawlessly 
              but also provide delightful user experiences. From concept to deployment, I handle 
              every aspect of the development process with attention to detail and commitment to excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <div className="skills-grid">
            {[
              { name: 'React', icon: Code2, color: 'var(--purple)' },
              { name: 'Node.js', icon: Terminal, color: 'var(--green)' },
              { name: 'TypeScript', icon: Layers, color: 'var(--blue)' },
              { name: 'Python', icon: Brain, color: 'var(--yellow)' },
              { name: 'MongoDB', icon: Database, color: 'var(--green)' },
              { name: 'PostgreSQL', icon: Database, color: 'var(--blue)' },
              { name: 'AWS', icon: Cloud, color: 'var(--orange)' },
              { name: 'Docker', icon: Cloud, color: 'var(--cyan)' },
            ].map((skill, i) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -15,
                    rotate: 5,
                    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)',
                    zIndex: 10
                  }}
                >
                  <motion.div
                    className="skill-icon"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Icon />
                  </motion.div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Showcase Section - Photo & Projects */}
      <section id="showcase" className="showcase-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Work & Journey
          </motion.h2>
          
          <div className="showcase-wrapper">
            {/* Photo Section */}
            <motion.div
              className="photo-showcase"
              initial={{ opacity: 0, x: -100, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="photo-container"
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: -10,
                }}
              >
                {/* Multiple Glow Layers */}
                <motion.div
                  className="photo-glow photo-glow-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="photo-glow photo-glow-2"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="photo-glow photo-glow-3"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                
                {/* Photo Frame */}
                <div className="photo-frame">
                  <motion.div
                    className="photo-border"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="photo-placeholder">
                    {/* Replace with your actual photo */}
                    <motion.div
                      className="photo-content"
                      animate={{
                        background: [
                          'linear-gradient(135deg, #A855F7, #EC4899)',
                          'linear-gradient(135deg, #3B82F6, #06B6D4)',
                          'linear-gradient(135deg, #A855F7, #EC4899)',
                        ],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <Code2 className="photo-icon" />
                      <p className="photo-text">Your Photo Here</p>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Badges */}
                <motion.div
                  className="floating-badge badge-1"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="badge-icon" />
                  <span>5+ Years</span>
                </motion.div>
                <motion.div
                  className="floating-badge badge-2"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <Rocket className="badge-icon" />
                  <span>50+ Projects</span>
                </motion.div>
                <motion.div
                  className="floating-badge badge-3"
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                >
                  <Zap className="badge-icon" />
                  <span>Expert</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Projects Showcase */}
            <motion.div
              className="projects-showcase"
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {[
                { 
                  title: 'E-Commerce Platform', 
                  desc: 'Full-stack e-commerce with real-time inventory management and advanced analytics', 
                  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                  gradient: 'from-purple to-pink',
                  icon: Code2
                },
                { 
                  title: 'AI Task Manager', 
                  desc: 'Intelligent task management with AI-powered prioritization and predictive scheduling', 
                  tech: ['Python', 'React', 'FastAPI', 'TensorFlow'],
                  gradient: 'from-blue to-cyan',
                  icon: Brain
                },
                { 
                  title: 'Social Media Dashboard', 
                  desc: 'Real-time social media analytics with data visualization and sentiment analysis', 
                  tech: ['Vue.js', 'D3.js', 'PostgreSQL', 'Node.js'],
                  gradient: 'from-pink to-purple',
                  icon: Database
                },
              ].map((project, i) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={i}
                    className="showcase-project-card"
                    initial={{ opacity: 0, y: 50, rotateX: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    whileHover={{ 
                      y: -30,
                      rotateY: 10,
                      rotateX: -10,
                      scale: 1.05,
                      zIndex: 10
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card Glow */}
                    <motion.div
                      className={`project-glow bg-gradient-to-r ${project.gradient}`}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Project Image */}
                    <motion.div 
                      className={`project-image-showcase bg-gradient-to-br ${project.gradient}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="project-showcase-icon" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Project Content */}
                    <div className="project-showcase-content">
                      <motion.h3
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p>{project.desc}</p>
                      <div className="project-tech-showcase">
                        {project.tech.map((tech, j) => (
                          <motion.span
                            key={j}
                            className="tech-tag-showcase"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + j * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="project-actions">
                        <motion.a
                          href="#"
                          className="project-action-btn"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="action-icon" />
                          Code
                        </motion.a>
                        <motion.a
                          href="#"
                          className="project-action-btn"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Code2 className="action-icon" />
                          Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            All Projects
          </motion.h2>
          <div className="projects-grid">
            {[
              { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce with real-time inventory', tech: ['React', 'Node.js', 'MongoDB'] },
              { title: 'AI Task Manager', desc: 'Intelligent task management with AI prioritization', tech: ['Python', 'React', 'FastAPI'] },
              { title: 'Social Media Dashboard', desc: 'Real-time analytics with data visualization', tech: ['Vue.js', 'D3.js', 'PostgreSQL'] },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
                whileHover={{ 
                  y: -30,
                  rotateY: 10,
                  rotateX: -10,
                  scale: 1.05,
                  boxShadow: '0 30px 60px rgba(168, 85, 247, 0.4)',
                  zIndex: 10
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="project-image"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="experience-timeline">
            {[
              { 
                company: 'Tech Innovations Inc.', 
                role: 'Senior Full Stack Developer', 
                period: '2022 - Present',
                description: 'Leading development of enterprise-scale applications and mentoring junior developers.',
                achievements: ['Led team of 5 developers', 'Increased performance by 40%', 'Reduced deployment time by 60%']
              },
              { 
                company: 'Digital Solutions Agency', 
                role: 'Full Stack Developer', 
                period: '2020 - 2022',
                description: 'Developed custom web applications for various clients with 100% satisfaction rate.',
                achievements: ['Delivered 20+ projects', 'Reduced load times by 50%', 'Improved engagement by 35%']
              },
              { 
                company: 'StartupHub', 
                role: 'Frontend Developer', 
                period: '2019 - 2020',
                description: 'Built responsive interfaces for early-stage startups focusing on exceptional UX.',
                achievements: ['Developed 5 MVP products', 'Improved engagement by 45%', 'Reduced bounce rate by 30%']
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <motion.div
                    className="timeline-date"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.1, type: "spring" }}
                  >
                    {exp.period}
                  </motion.div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                  <ul className="achievements">
                    {exp.achievements.map((ach, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + j * 0.1 }}
                      >
                        {ach}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="contact-wrapper">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              <motion.h3
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                I'm always excited to work on new projects!
              </motion.h3>
              <div className="contact-methods">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@example.com', href: 'mailto:contact@example.com' },
                  { icon: Github, label: 'GitHub', value: 'github.com/username', href: 'https://github.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com' },
                ].map((method, i) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={i}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <Icon className="method-icon" />
                      <div>
                        <div className="method-label">{method.label}</div>
                        <div className="method-value">{method.value}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
            <motion.form
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              onSubmit={(e) => {
                e.preventDefault()
                alert('Message sent! (This is a demo)')
              }}
            >
              <motion.input
                type="text"
                placeholder="Your Name"
                required
                whileFocus={{ scale: 1.02, borderColor: 'var(--purple)' }}
                transition={{ type: "spring" }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                required
                whileFocus={{ scale: 1.02, borderColor: 'var(--purple)' }}
                transition={{ type: "spring" }}
              />
              <motion.input
                type="text"
                placeholder="Subject"
                required
                whileFocus={{ scale: 1.02, borderColor: 'var(--purple)' }}
                transition={{ type: "spring" }}
              />
              <motion.textarea
                placeholder="Your Message"
                rows="5"
                required
                whileFocus={{ scale: 1.02, borderColor: 'var(--purple)' }}
                transition={{ type: "spring" }}
              />
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)',
                  rotate: 2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="btn-icon" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}
