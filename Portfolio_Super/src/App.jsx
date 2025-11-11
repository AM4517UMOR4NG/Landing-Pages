import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Code2, Sparkles, Rocket, Star, Zap, Terminal, Layers, Brain, Database, Cloud, Palette, Menu, X } from 'lucide-react'
import './index.css'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState([])
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 })
  const [typingText, setTypingText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [crazyParticles, setCrazyParticles] = useState([])
  const [rootGlow, setRootGlow] = useState(0)
  const [stars, setStars] = useState([])
  const [planets, setPlanets] = useState([])
  const [rocketLaunched, setRocketLaunched] = useState(false)
  const [comets, setComets] = useState([])
  
  // Cinematic light effects state - simplified for performance
  const [lightBeam, setLightBeam] = useState(null)
  const [screenFlash, setScreenFlash] = useState(false)
  const [energyPulse, setEnergyPulse] = useState(false)
  const [portalEffect, setPortalEffect] = useState(null)
  const [lightTrails, setLightTrails] = useState([])
  const [clickExplosion, setClickExplosion] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [githubRepos, setGithubRepos] = useState([])
  const [glowingLink, setGlowingLink] = useState(null)
  const [loadingRepos, setLoadingRepos] = useState(true)
  const [explosionParticles, setExplosionParticles] = useState([])
  
  const heroRef = useRef(null)
  const magneticBtnRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Detect mobile device for performance optimization
    const isMobile = window.innerWidth <= 768
    const isLowEnd = navigator.hardwareConcurrency <= 4 || (navigator.deviceMemory && navigator.deviceMemory <= 4)
    
    // Skip all animations on mobile for maximum performance
    if (isMobile) {
      // No particles on mobile
      setParticles([])
      setCrazyParticles([])
      setStars([])
      setPlanets([])
      setComets([])
      
      // Simple handlers without animations
      const handleMouseMove = () => {} // Disabled on mobile
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
    
    // Desktop animations (highly reduced for performance)
    const particleCount = isLowEnd ? 5 : 10 // Reduced from 10-15 to 5-10
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5, // Reduced speed
      speedY: (Math.random() - 0.5) * 0.5, // Reduced speed
      color: `hsl(${Math.random() * 60 + 280}, 100%, 50%)`,
    }))
    setParticles(newParticles)

    // Minimal crazy particles - Only when navbar is expanded
    if (!isLowEnd && !isMobile) {
      const crazyParticleCount = 5 // Reduced from 10-20 to 5
      const newCrazyParticles = Array.from({ length: crazyParticleCount }, (_, i) => ({
        id: `crazy-${i}`,
        x: Math.random() * window.innerWidth,
        y: Math.random() * 200,
        size: Math.random() * 3 + 1, // Smaller size
        speedX: (Math.random() - 0.5) * 1.5, // Reduced speed
        speedY: Math.random() * 1 + 0.5, // Reduced speed
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        opacity: Math.random() * 0.5 + 0.2,
        rotationSpeed: (Math.random() - 0.5) * 4, // Reduced rotation
        scale: Math.random() * 1 + 0.5,
      }))
      setCrazyParticles(newCrazyParticles)
    } else {
      setCrazyParticles([])
    }

    // Minimal stars
    const starCount = isLowEnd ? 15 : 25 // Reduced from 30-50 to 15-25
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: `star-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.5, // Smaller size
      twinkleSpeed: Math.random() * 2 + 1,
      brightness: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#ffffff' : '#ffffcc',
    }))
    setStars(newStars)

    // Minimal planets - Only on desktop
    if (!isMobile && !isLowEnd) {
      const planetCount = 1 // Only 1 planet max
      const newPlanets = Array.from({ length: planetCount }, (_, i) => ({
        id: `planet-${i}`,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10, // Smaller size
        speedX: (Math.random() - 0.5) * 0.15, // Slower speed
        speedY: (Math.random() - 0.5) * 0.1, // Slower speed
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5, // Slower rotation
        color: `hsl(${Math.random() * 360}, 50%, 40%)`,
        hasRings: false,
      }))
      setPlanets(newPlanets)
    } else {
      setPlanets([])
    }

    // No comets for better performance
    setComets([]) // Completely disabled comets

    const handleMouseMove = (e) => {
      // Throttle mouse position updates more aggressively
      if (Date.now() - (window.lastMouseUpdate || 0) < 100) return // Increased from 50ms to 100ms
      window.lastMouseUpdate = Date.now()
      
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Optimize animation loop with lower FPS
    let animationFrameId
    let lastTime = 0
    const targetFPS = isLowEnd ? 15 : 24 // Much lower FPS for better performance
    const frameInterval = 1000 / targetFPS
    
    const animateParticles = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        // Only animate if navbar is not expanded to save resources
        if (!isNavbarExpanded) {
          setParticles(prev => prev.map(p => ({
            ...p,
            x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
            y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
          })))
        }
        
        // Animate crazy particles only when navbar is expanded
        if (isNavbarExpanded) {
          setCrazyParticles(prev => prev.map(p => ({
            ...p,
            x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
            y: (p.y + p.speedY) % (window.innerHeight + 200),
            rotation: (p.rotation || 0) + p.rotationSpeed,
          })))
        }

        // Animate planets less frequently
        if (currentTime % 2 === 0) {
          setPlanets(prev => prev.map(p => ({
            ...p,
            x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
            y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
            rotation: p.rotation + p.rotationSpeed,
          })))
        }

        // Comets disabled for performance
        
        lastTime = currentTime
      }
      
      animationFrameId = requestAnimationFrame(animateParticles)
    }
    animationFrameId = requestAnimationFrame(animateParticles)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isNavbarExpanded])

  // Cinematic light beam effect on navbar click (simplified for performance)
  const triggerCinematicLightEffect = (e, sectionName) => {
    // Skip cinematic effects on mobile for performance
    if (window.innerWidth <= 768) {
      setActiveSection(sectionName)
      return
    }
    
    const clickX = e.clientX
    const clickY = e.clientY
    
    // Only create minimal light effect with required fields
    const beam = {
      startX: clickX,
      startY: clickY,
      endX: window.innerWidth / 2,
      endY: 80,
      color: '#a855f7',
      duration: 800,
    }
    setLightBeam(beam)
    
    // Simple click explosion effect (reduced)
    const explosion = {
      x: clickX,
      y: clickY,
      particles: Array.from({ length: 10 }, (_, i) => ({ // Greatly reduced from 20-50
        id: i,
        angle: (Math.PI * 2 * i) / 10,
        speed: Math.random() * 5 + 3, // Reduced speed
        size: Math.random() * 3 + 1, // Smaller particles
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        lifetime: 1000, // Shorter lifetime
      })),
    }
    setClickExplosion(explosion)
    
    // Skip most cinematic effects for performance
    
    // Clean up effects quickly
    setTimeout(() => {
      setLightBeam(null)
      setClickExplosion(null)
    }, 800) // Much shorter duration
    
    // Update active section
    setActiveSection(sectionName)
  }

  // Smooth scroll with light effect (simplified on mobile)
  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const rect = section.getBoundingClientRect()
      const targetY = rect.top + window.scrollY
      
      // Skip light trails on mobile for performance
      if (window.innerWidth > 768) {
        // Reduced light trails during scroll
        const scrollTrails = Array.from({ length: 10 }, (_, i) => ({ // Reduced from 30
          id: `scroll-${Date.now()}-${i}`,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight / 2,
          targetY: targetY,
          speed: Math.random() * 8 + 4, // Reduced from 12+6
          size: Math.random() * 2 + 1, // Reduced from 3+1
          color: `hsl(${Math.random() * 60 + 180}, 100%, 60%)`,
        }))
        setLightTrails(prev => [...prev, ...scrollTrails])
        
        // Clean up scroll trails faster
        setTimeout(() => {
          setLightTrails(prev => prev.filter(t => !t.id.startsWith(`scroll-${Date.now()}`)))
        }, 1500) // Reduced from 2000
      }
      
      // Smooth scroll
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }
  }
  const toggleNavbarExpansion = () => {
    setIsNavbarExpanded(!isNavbarExpanded)
    if (!isNavbarExpanded) {
      // Skip effects on mobile
      if (window.innerWidth <= 768) return
      
      // Trigger root glow effect
      setRootGlow(1)
      setTimeout(() => setRootGlow(0), 800) // Reduced from 1000
      
      // Launch rocket - optional
      setRocketLaunched(true)
      setTimeout(() => setRocketLaunched(false), 2000) // Reduced from 3000
      
      // Reduced explosion particles
      const explosionParticles = Array.from({ length: 20 }, (_, i) => ({ // Reduced from 50
        id: `explosion-${Date.now()}-${i}`,
        x: 600 + (Math.random() - 0.5) * 150, // Reduced range
        y: 100 + Math.random() * 80,
        size: Math.random() * 6 + 3, // Reduced from 8+4
        speedX: (Math.random() - 0.5) * 6, // Reduced from 10
        speedY: Math.random() * -4 - 1, // Reduced from -5-2
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        opacity: 1,
        lifetime: 1500, // Reduced from 2000
      }))
      
      setCrazyParticles(prev => [...prev, ...explosionParticles])
      
      // Reduced meteor shower
      const meteors = Array.from({ length: 8 }, (_, i) => ({ // Reduced from 20
        id: `meteor-${Date.now()}-${i}`,
        x: Math.random() * window.innerWidth,
        y: -50,
        size: Math.random() * 4 + 2, // Reduced from 6+2
        speedX: (Math.random() - 0.5) * 3, // Reduced from 5
        speedY: Math.random() * 8 + 4, // Reduced from 10+5
        color: `hsl(${30 + Math.random() * 30}, 100%, 60%)`,
        tailLength: Math.random() * 50 + 30, // Reduced from 80+40
        opacity: 1,
      }))
      
      setComets(prev => [...prev, ...meteors])
      
      // Remove explosion particles faster
      setTimeout(() => {
        setCrazyParticles(prev => 
          prev.filter(p => !p.id.startsWith('explosion-'))
        )
        setComets(prev => 
          prev.filter(p => !p.id.startsWith('meteor-'))
        )
      }, 2000) // Reduced from 3000
    }
  }

  const roles = ['Full Stack Developer', 'Backend Developer', 'Web Developer', 'Software Engineer']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Magnetic Button Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (magneticBtnRef.current) {
        const rect = magneticBtnRef.current.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        const distance = Math.sqrt(x * x + y * y)
        const maxDistance = 100
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          setMagneticPosition({
            x: x * force * 0.3,
            y: y * force * 0.3
          })
        } else {
          setMagneticPosition({ x: 0, y: 0 })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Typing Effect
  useEffect(() => {
    const fullText = "Passionate full-stack developer specializing in Spring Boot, Laravel, and modern web technologies. Building scalable applications and transforming ideas into digital solutions."
    let currentIndex = 0
    setIsTyping(true)
    setTypingText('')

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypingText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/AM4517UMOR4NG/repos?per_page=100&sort=updated', {
          headers: { 'Accept': 'application/vnd.github+json, application/vnd.github.mercy-preview+json' },
          signal: controller.signal
        })
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        const mapped = data
          .filter(r => !r.private && !r.fork && !r.archived)
          .map(r => ({
            id: r.id,
            name: r.name,
            full_name: r.full_name,
            description: r.description || 'No description provided',
            html_url: r.html_url,
            homepage: r.homepage,
            topics: r.topics || [],
            language: r.language,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            updated_at: r.updated_at,
            image: `https://opengraph.githubassets.com/1/${r.full_name}`
          }))
        setGithubRepos(mapped)
      } catch (e) {
        setGithubRepos([])
      } finally {
        setLoadingRepos(false)
      }
    }
    fetchRepos()
    return () => controller.abort()
  }, [])

  return (
    <div className="app">
      {/* Space Background Layer */}
      <div className="space-background">
        {/* Twinkling Stars */}
        <div className="stars-container">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="star"
              style={{
                left: star.x,
                top: star.y,
                width: star.size,
                height: star.size,
                backgroundColor: star.color,
                opacity: star.brightness,
              }}
              animate={{
                opacity: [star.brightness, star.brightness * 1.5, star.brightness],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.twinkleSpeed,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating Planets */}
        <div className="planets-container">
          {planets.map((planet) => (
            <motion.div
              key={planet.id}
              className="planet"
              style={{
                left: planet.x,
                top: planet.y,
                width: planet.size,
                height: planet.size,
                backgroundColor: planet.color,
                transform: `rotate(${planet.rotation}deg)`,
              }}
              animate={{
                rotate: planet.rotation + 360,
              }}
              transition={{
                duration: 20 / Math.abs(planet.rotationSpeed || 1),
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Planet Rings */}
              {planet.hasRings && (
                <motion.div
                  className="planet-ring"
                  style={{
                    width: planet.size * 1.5,
                    height: planet.size * 0.3,
                    backgroundColor: 'transparent',
                    border: `2px solid ${planet.color}`,
                    opacity: 0.6,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Comets and Meteors */}
        <div className="comets-container">
          {comets.map((comet) => (
            <motion.div
              key={comet.id}
              className="comet"
              style={{
                left: comet.x,
                top: comet.y,
                width: comet.size,
                height: comet.size,
                backgroundColor: comet.color,
                boxShadow: `0 0 ${comet.size * 2}px ${comet.color}`,
              }}
            >
              {/* Comet Tail */}
              <motion.div
                className="comet-tail"
                style={{
                  width: comet.tailLength,
                  height: comet.size / 2,
                  background: `linear-gradient(to left, transparent, ${comet.color})`,
                  right: comet.size,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Rocket Launch */}
        {rocketLaunched && (
          <motion.div
            className="rocket-launch"
            initial={{ 
              x: window.innerWidth / 2 - 20,
              y: window.innerHeight - 100,
              rotate: -45
            }}
            animate={{
              y: -200,
              x: window.innerWidth / 2 + Math.random() * 200 - 100,
              rotate: -45 + Math.random() * 30 - 15,
            }}
            transition={{
              duration: 3,
              ease: "easeOut"
            }}
          >
            <Rocket className="rocket-icon" />
            {/* Rocket Exhaust */}
            <motion.div
              className="rocket-exhaust"
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Cinematic Light Effects Layer */}
      <div className="cinematic-effects-layer">
        {/* Screen Flash Effect */}
        {screenFlash && (
          <motion.div
            className="screen-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}

        {/* Energy Pulse Effect */}
        {energyPulse && (
          <motion.div
            className="energy-pulse"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 3, 6],
              opacity: [1, 0.5, 0]
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut"
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}

        {/* Light Beam Effect */}
        {lightBeam && (
          <motion.svg
            className="light-beam-svg"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 9999
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: lightBeam.duration / 1000,
              ease: "easeInOut"
            }}
          >
            <defs>
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={lightBeam.color} stopOpacity="0" />
                <stop offset="50%" stopColor={lightBeam.color} stopOpacity="1" />
                <stop offset="100%" stopColor={lightBeam.color} stopOpacity="0" />
              </linearGradient>
              <filter id="beamGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d={`M ${lightBeam.startX} ${lightBeam.startY} Q ${(lightBeam.startX + lightBeam.endX) / 2} ${(lightBeam.startY + lightBeam.endY) / 2 - 100} ${lightBeam.endX} ${lightBeam.endY}`}
              stroke="url(#beamGradient)"
              strokeWidth="8"
              fill="none"
              filter="url(#beamGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{ 
                duration: lightBeam.duration / 2000,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d={`M ${lightBeam.startX} ${lightBeam.startY} Q ${(lightBeam.startX + lightBeam.endX) / 2} ${(lightBeam.startY + lightBeam.endY) / 2 - 100} ${lightBeam.endX} ${lightBeam.endY}`}
              stroke={lightBeam.color}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: [0, 1], opacity: [1, 0.5, 0] }}
              transition={{ 
                duration: lightBeam.duration / 2000,
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        )}

        {/* Click Explosion Effect */}
        {clickExplosion && (
          <div className="click-explosion">
            {clickExplosion.particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="explosion-particle"
                style={{
                  left: clickExplosion.x,
                  top: clickExplosion.y,
                  backgroundColor: particle.color,
                  width: particle.size,
                  height: particle.size,
                }}
                initial={{ 
                  scale: 0,
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                animate={{
                  scale: [0, 2, 0.5],
                  opacity: [1, 1, 0],
                  x: Math.cos(particle.angle) * particle.speed * 20,
                  y: Math.sin(particle.angle) * particle.speed * 20,
                }}
                transition={{
                  duration: particle.lifetime / 1000,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Portal Effect */}
        {portalEffect && (
          <motion.div
            className="portal-effect"
            style={{
              left: portalEffect.x,
              top: portalEffect.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              scale: portalEffect.scale,
              opacity: portalEffect.opacity,
              rotate: 0
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <div className="portal-ring" />
            <div className="portal-ring portal-ring-2" />
            <div className="portal-ring portal-ring-3" />
            <div className="portal-core" />
          </motion.div>
        )}

        {/* Light Trails */}
        {lightTrails.map((trail) => (
          <motion.div
            key={trail.id}
            className="light-trail"
            style={{
              left: trail.x,
              top: trail.y,
              width: trail.size,
              height: trail.size,
              backgroundColor: trail.color,
              boxShadow: `0 0 ${trail.size * 2}px ${trail.color}`,
            }}
            initial={{ 
              scale: 0,
              opacity: 1,
              x: 0,
              y: 0
            }}
            animate={{
              scale: [0, 1.5, 0.5],
              opacity: [1, 0.8, 0],
              x: trail.targetX - trail.x,
              y: trail.targetY - trail.y,
            }}
            transition={{
              duration: trail.speed / 10,
              delay: trail.delay / 1000,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

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

      {/* Crazy Particles Layer - Only visible when navbar is expanded */}
      {isNavbarExpanded && (
        <div className="crazy-particles-container">
          {crazyParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="crazy-particle"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                transform: `rotate(${particle.rotation || 0}deg) scale(${particle.scale})`,
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              }}
              animate={{
                scale: [particle.scale, particle.scale * 1.5, particle.scale],
                rotate: [0, 360, 720],
                opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* New Lightweight Navbar */}
      <header className="new-navbar" role="banner">
        <div className="new-nav-inner">
          <div className="new-nav-content">
            <a href="#home" className="new-brand" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="new-brand-logo">AM</span>
              <span className="new-brand-text">Portfolio</span>
            </a>
            <nav className="new-links" aria-label="Primary">
              {['Home','About','Skills','Projects','Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`new-link ${activeSection === item.toLowerCase() ? 'active' : ''} ${glowingLink === item.toLowerCase() ? 'rocket-glow' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    setActiveSection(item.toLowerCase())
                    setGlowingLink(item.toLowerCase())
                    
                    // Create explosion particles
                    const particles = []
                    for (let i = 0; i < 6; i++) {
                      particles.push({
                        id: `${item.toLowerCase()}-${Date.now()}-${i}`,
                        angle: (i * 60) * Math.PI / 180,
                        velocity: 150 + Math.random() * 100
                      })
                    }
                    setExplosionParticles(particles)
                    
                    smoothScrollToSection(item.toLowerCase())
                    setTimeout(() => {
                      setGlowingLink(null)
                      setExplosionParticles([])
                    }, 8000)
                  }}
                >
                  {item}
                  {glowingLink === item.toLowerCase() && explosionParticles.map((particle, index) => (
                    <span
                      key={particle.id}
                      className="explosion-particle"
                      style={{
                        '--angle': particle.angle,
                        '--velocity': particle.velocity
                      }}
                    />
                  ))}
                </a>
              ))}
            </nav>
            <div className="new-actions">
              <a className="new-gh" href="https://github.com/AM4517UMOR4NG" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
              <button
                className="new-mobile-btn"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
              <img
                className="new-avatar"
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Profile"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className={`new-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {['Home','About','Skills','Projects','Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`new-mobile-link ${glowingLink === item.toLowerCase() ? 'rocket-glow' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                setIsMobileMenuOpen(false)
                setActiveSection(item.toLowerCase())
                setGlowingLink(item.toLowerCase())
                
                // Create explosion particles
                const particles = []
                for (let i = 0; i < 6; i++) {
                  particles.push({
                    id: `${item.toLowerCase()}-${Date.now()}-${i}`,
                    angle: (i * 60) * Math.PI / 180,
                    velocity: 150 + Math.random() * 100
                  })
                }
                setExplosionParticles(particles)
                
                smoothScrollToSection(item.toLowerCase())
                setTimeout(() => {
                  setGlowingLink(null)
                  setExplosionParticles([])
                }, 8000)
              }}
            >
              {item}
              {glowingLink === item.toLowerCase() && explosionParticles.map((particle, index) => (
                <span
                  key={particle.id}
                  className="explosion-particle"
                  style={{
                    '--angle': particle.angle,
                    '--velocity': particle.velocity
                  }}
                />
              ))}
            </a>
          ))}
        </div>
      </header>

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
                Alogo Situmorang
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
              {typingText}
              {isTyping && (
                <motion.span
                  className="typing-cursor"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                ref={magneticBtnRef}
                href="#contact"
                className="btn btn-primary magnetic-btn"
                animate={{
                  x: magneticPosition.x,
                  y: magneticPosition.y,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <motion.div
                  className="btn-glow"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <Download className="btn-icon" />
                Download CV
                <motion.span
                  className="ripple-effect"
                  initial={{ scale: 0, opacity: 1 }}
                  whileTap={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
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
                { icon: Github, href: 'https://github.com/AM4517UMOR4NG', color: 'var(--purple)' },
                { icon: Linkedin, href: 'https://linkedin.com', color: 'var(--blue)' },
                { icon: Mail, href: 'mailto:aekmohop@gmail.com', color: 'var(--cyan)' },
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
                {/* Professional Role Banners */}
                <div className="role-banners">
                  {[
                    { 
                      title: 'Student', 
                      description: 'Always Learning & Growing',
                      icon: '24',
                      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    },
                    { 
                      title: 'Software Engineer', 
                      description: 'Building Amazing Solutions',
                      icon: '07',
                      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    },
                    { 
                      title: 'Full Stack Developer', 
                      description: 'End-to-End Development',
                      icon: '12',
                      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                    },
                  ].map((role, i) => (
                    <motion.div
                      key={i}
                      className="role-banner"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      style={{ background: role.gradient }}
                    >
                      <motion.div 
                        className="role-icon"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: i * 0.5 
                        }}
                      >
                        {role.icon}
                      </motion.div>
                      <div className="role-content">
                        <h3 className="role-title">{role.title}</h3>
                        <p className="role-description">{role.description}</p>
                      </div>
                      <motion.div 
                        className="role-shine"
                        animate={{
                          x: [-100, 400],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.8,
                          repeatDelay: 2
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="tech-stack">
                  {['Spring Boot', 'Laravel', 'TypeScript', 'Python'].map((tech, i) => (
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
              I'm a passionate full-stack developer specializing in Spring Boot, Laravel, and modern web technologies. 
              My journey in tech started with curiosity and has evolved into building scalable applications 
              that solve real-world problems.
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring" }}
            >
              I have experience building interactive web applications, government systems, and various web tools 
              using technologies like JavaScript, TypeScript, Python, PHP, and databases like MySQL and PostgreSQL. 
              I'm always excited to work on new projects and learn new technologies.
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
              { name: 'JavaScript', icon: Code2, color: 'var(--yellow)' },
              { name: 'Spring Boot', icon: Terminal, color: 'var(--green)' },
              { name: 'Laravel', icon: Layers, color: 'var(--pink)' },
              { name: 'TypeScript', icon: Code2, color: 'var(--blue)' },
              { name: 'Python', icon: Brain, color: 'var(--cyan)' },
              { name: 'PHP', icon: Code2, color: 'var(--purple)' },
              { name: 'MySQL', icon: Database, color: 'var(--blue)' },
              { name: 'PostgreSQL', icon: Database, color: 'var(--green)' },
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
                    <motion.div 
                      initial={{ filter: 'blur(0px) brightness(1)' }}
                      animate={{ 
                        filter: [
                          'blur(0px) brightness(1)', 
                          'blur(2px) brightness(1.15)', 
                          'blur(0.5px) brightness(0.98)',
                          'blur(0px) brightness(1)' 
                        ],
                        boxShadow: [
                          '0 0 0px 0px #EC4899',
                          '0 0 32px 12px #A855F7',
                          '0 0 54px 24px #3B82F6',
                          '0 0 0px 0px #EC4899'
                        ],
                        borderRadius: [
                          '38% 62% 57% 43% / 47% 53% 47% 53%',
                          '68% 32% 77% 23% / 27% 82% 18% 73%',
                          '38% 62% 57% 43% / 47% 53% 47% 53%'
                        ],
                        rotate: [0, 2, -2, 0],
                        scale: [1,1.08,0.96,1],
                        x: [0,-8,8,0], y: [0,5,-5,0],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="photo-img-glitch"
                    >
                      <img src="/Portofolio.jpg" alt="My Photo" className="photo-img-crazy" />
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
                  title: 'Football Ticket System', 
                  desc: 'Interactive website for football ticketing using Spring Boot with many provided features', 
                  tech: ['Spring Boot', 'JavaScript', 'MySQL'],
                  gradient: 'from-purple to-pink',
                  icon: Rocket,
                  github: 'https://github.com/AM4517UMOR4NG/Football-Ticket',
                  image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop'
                },
                { 
                  title: 'Government Report System', 
                  desc: 'Laravel-based public reports and complaints system with role-based dashboards, file attachments, and workflow management', 
                  tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
                  gradient: 'from-blue to-cyan',
                  icon: Database,
                  github: 'https://github.com/AM4517UMOR4NG/Government-General-Report-and-Complain-System',
                  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
                },
                { 
                  title: 'HOLY BIBLE Web App', 
                  desc: 'Web application for providing online book of HOLY BIBLE with modern interface', 
                  tech: ['TypeScript', 'React', 'Web App'],
                  gradient: 'from-pink to-purple',
                  icon: Code2,
                  github: 'https://github.com/AM4517UMOR4NG/HOLY-BIBLE',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38hppIONsI2GYUluv2xhkVV8eiWu68NxY0Q&s'
                },
                { 
                  title: 'Plagiarism Checker', 
                  desc: 'Web application for checking plagiarism with advanced algorithms', 
                  tech: ['Python', 'Flask', 'AI'],
                  gradient: 'from-yellow to-orange',
                  icon: Brain,
                  github: 'https://github.com/AM4517UMOR4NG/Plagiarism-Checker',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
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
                      className="project-image-showcase"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="project-image-showcase-overlay"></div>
                      <motion.div
                        className="project-icon-container"
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
                          href={project.github || 'https://github.com/AM4517UMOR4NG'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-btn"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="action-icon" />
                          View Code
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
            {loadingRepos ? (
              <div className="project-card">
                <div className="project-content">
                  <h3>Loading...</h3>
                  <p>Fetching repositories from GitHub</p>
                </div>
              </div>
            ) : (
              githubRepos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, type: "spring" }}
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
                    style={{
                      backgroundImage: `url(${repo.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="project-image-overlay"></div>
                  </motion.div>
                  <div className="project-content">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <div className="project-tech">
                      {((repo.topics && repo.topics.length ? repo.topics.slice(0, 5) : []).concat(repo.language ? [repo.language] : [])).map((tag, j) => (
                        <span key={`${repo.id}-tag-${j}`} className="tech-tag">{tag}</span>
                      ))}
                      <span className="tech-tag">⭐ {repo.stargazers_count}</span>
                      <span className="tech-tag">Forks {repo.forks_count}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {repo.html_url && (
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-github-link"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="github-link-icon" />
                          View on GitHub
                        </motion.a>
                      )}
                      {repo.homepage && (
                        <motion.a
                          href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-github-link"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
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

      {/* Space Command Center Section */}
      <section id="contact" className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            🚀 Space Command Center
          </motion.h2>
          <div className="command-center">
            <motion.div
              className="command-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              <div className="panel-header">
                <div className="panel-title">
                  <Terminal className="panel-icon" />
                  Mission Control
                </div>
                <div className="status-indicators">
                  <div className="indicator active"></div>
                  <div className="indicator active"></div>
                  <div className="indicator"></div>
                </div>
              </div>
              
              <div className="stats-grid">
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(168, 85, 247, 0.3)', '0 0 40px rgba(168, 85, 247, 0.6)', '0 0 20px rgba(168, 85, 247, 0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="stat-icon">
                    <Github />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{githubRepos.length}</div>
                    <div className="stat-label">Active Repos</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.6)', '0 0 20px rgba(59, 130, 246, 0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="stat-icon">
                    <Zap />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{githubRepos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)}</div>
                    <div className="stat-label">Total Stars</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(34, 197, 94, 0.3)', '0 0 40px rgba(34, 197, 94, 0.6)', '0 0 20px rgba(34, 197, 94, 0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <div className="stat-icon">
                    <Code2 />
                  </div>
                  <div className="stat-info">
                    <div className="stat-value">{githubRepos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0)}</div>
                    <div className="stat-label">Code Forks</div>
                  </div>
                </motion.div>
              </div>

              <div className="quick-actions">
                <motion.a
                  href="https://github.com/AM4517UMOR4NG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn primary"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="btn-icon" />
                  View GitHub
                </motion.a>
                
                <motion.a
                  href="mailto:aekmohop@gmail.com"
                  className="action-btn secondary"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="btn-icon" />
                  Send Signal
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn tertiary"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="btn-icon" />
                  Connect
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="terminal-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-btn close"></div>
                  <div className="terminal-btn minimize"></div>
                  <div className="terminal-btn maximize"></div>
                </div>
                <div className="terminal-title">Space Terminal v2.0</div>
              </div>
              
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">Initializing quantum connection...</span>
                </div>
                <div className="terminal-line success">
                  <span className="prompt">$</span>
                  <span className="command">✓ Link established with Earth station</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">Scanning for available projects...</span>
                </div>
                <div className="terminal-line success">
                  <span className="prompt">$</span>
                  <span className="command">✓ Found {githubRepos.length} active repositories</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">Calculating trajectory to next project...</span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="cursor">_</span>
                </div>
              </div>
              
              <div className="terminal-input">
                <input 
                  type="text" 
                  placeholder="Enter command..."
                  className="terminal-field"
                  onFocus={(e) => {
                    e.target.placeholder = "Try: 'launch', 'scan', 'connect'..."
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Enter command..."
                  }}
                />
                <motion.button 
                  className="terminal-send"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Rocket />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
