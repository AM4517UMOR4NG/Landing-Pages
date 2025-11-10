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
  
  // Cinematic light effects state
  const [lightBeam, setLightBeam] = useState(null)
  const [screenFlash, setScreenFlash] = useState(false)
  const [energyPulse, setEnergyPulse] = useState(false)
  const [portalEffect, setPortalEffect] = useState(null)
  const [lightTrails, setLightTrails] = useState([])
  const [clickExplosion, setClickExplosion] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  
  const heroRef = useRef(null)
  const magneticBtnRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Detect mobile device for performance optimization
    const isMobile = window.innerWidth <= 768
    const isLowEnd = navigator.hardwareConcurrency <= 4 || (navigator.deviceMemory && navigator.deviceMemory <= 4)
    
    // Create particles - drastically reduced on mobile/low-end devices
    const particleCount = isMobile || isLowEnd ? 10 : 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 60 + 280}, 100%, 50%)`,
    }))
    setParticles(newParticles)

    // Create crazy particles for navbar expansion - drastically reduced on mobile
    const crazyParticleCount = isMobile || isLowEnd ? 10 : 100
    const newCrazyParticles = Array.from({ length: crazyParticleCount }, (_, i) => ({
      id: `crazy-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 200,
      size: Math.random() * 5 + 2,
      speedX: (Math.random() - 0.5) * 4,
      speedY: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      opacity: Math.random() * 0.8 + 0.2,
      rotationSpeed: (Math.random() - 0.5) * 10,
      scale: Math.random() * 2 + 0.5,
    }))
    setCrazyParticles(newCrazyParticles)

    // Create space stars - drastically reduced on mobile
    const starCount = isMobile || isLowEnd ? 20 : 200
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: `star-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      twinkleSpeed: Math.random() * 3 + 1,
      brightness: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.5 ? '#ffffff' : '#ffffcc',
    }))
    setStars(newStars)

    // Create floating planets - disabled on mobile for performance
    const planetCount = isMobile || isLowEnd ? 0 : 5
    const newPlanets = Array.from({ length: planetCount }, (_, i) => ({
      id: `planet-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 20,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 360}, 50%, 40%)`,
      hasRings: Math.random() > 0.7,
    }))
    setPlanets(newPlanets)

    // Create comets - disabled on mobile for performance
    const cometCount = isMobile || isLowEnd ? 0 : 3
    const newComets = Array.from({ length: cometCount }, (_, i) => ({
      id: `comet-${i}`,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: Math.random() * 3 + 2,
      speedY: Math.random() * 2 + 1,
      size: Math.random() * 4 + 2,
      tailLength: Math.random() * 100 + 50,
      color: `hsl(${200 + Math.random() * 60}, 100%, 70%)`,
    }))
    setComets(newComets)

    const handleMouseMove = (e) => {
      // Throttle mouse move for performance
      if (isMobile) return
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Animate particles with performance optimization
    let animationFrameId
    let lastTime = 0
    let frameSkip = 0
    const targetFPS = isMobile || isLowEnd ? 30 : 60
    const frameInterval = 1000 / targetFPS
    
    const animateParticles = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        setParticles(prev => prev.map(p => ({
          ...p,
          x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
          y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
        })))
        
        // Animate crazy particles only when navbar is expanded
        if (isNavbarExpanded) {
          setCrazyParticles(prev => prev.map(p => ({
            ...p,
            x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
            y: (p.y + p.speedY) % (window.innerHeight + 200),
            rotation: (p.rotation || 0) + p.rotationSpeed,
          })))
        }

        // Animate planets - skip on mobile for performance
        if (!isMobile) {
          frameSkip++
          if (frameSkip % 2 === 0) {
            setPlanets(prev => prev.map(p => ({
              ...p,
              x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
              y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
              rotation: p.rotation + p.rotationSpeed,
            })))
          }
        }

        // Animate comets - skip on mobile for performance
        if (!isMobile) {
          setComets(prev => prev.map(p => ({
            ...p,
            x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
            y: (p.y + p.speedY + window.innerHeight) % window.innerHeight,
          })))
        }
        
        lastTime = currentTime
      }
      
      animationFrameId = requestAnimationFrame(animateParticles)
    }
    animationFrameId = requestAnimationFrame(animateParticles)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  // Cinematic light beam effect on navbar click
  const triggerCinematicLightEffect = (e, sectionName) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = rect.left + rect.width / 2
    const clickY = rect.top + rect.height / 2
    
    // Create light beam from click position
    const beam = {
      id: Date.now(),
      startX: clickX,
      startY: clickY,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
      duration: 1500,
    }
    setLightBeam(beam)
    
    // Create screen flash
    setScreenFlash(true)
    setTimeout(() => setScreenFlash(false), 300)
    
    // Create energy pulse
    setEnergyPulse(true)
    setTimeout(() => setEnergyPulse(false), 800)
    
    // Create click explosion
    const explosion = {
      id: Date.now(),
      x: clickX,
      y: clickY,
      particles: Array.from({ length: 50 }, (_, i) => ({
        id: i,
        angle: (Math.PI * 2 * i) / 50,
        speed: Math.random() * 15 + 10,
        size: Math.random() * 6 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        lifetime: 2000,
      })),
    }
    setClickExplosion(explosion)
    
    // Create portal effect at target section
    setTimeout(() => {
      const portal = {
        id: Date.now(),
        section: sectionName,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        scale: 0,
        opacity: 0,
      }
      setPortalEffect(portal)
      
      // Animate portal
      setTimeout(() => {
        setPortalEffect(prev => prev ? { ...prev, scale: 2, opacity: 1 } : null)
      }, 100)
      
      setTimeout(() => {
        setPortalEffect(prev => prev ? { ...prev, scale: 0, opacity: 0 } : null)
      }, 1500)
    }, 500)
    
    // Create light trails
    const trails = Array.from({ length: 20 }, (_, i) => ({
      id: `trail-${Date.now()}-${i}`,
      x: clickX,
      y: clickY,
      targetX: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
      targetY: window.innerHeight / 2 + (Math.random() - 0.5) * 400,
      speed: Math.random() * 8 + 4,
      size: Math.random() * 4 + 1,
      color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)`,
      delay: i * 50,
    }))
    setLightTrails(prev => [...prev, ...trails])
    
    // Clean up effects
    setTimeout(() => {
      setLightBeam(null)
      setClickExplosion(null)
      setPortalEffect(null)
      setLightTrails(prev => prev.filter(t => !t.id.startsWith(`trail-${Date.now()}`)))
    }, 3000)
    
    // Update active section
    setActiveSection(sectionName)
  }

  // Smooth scroll with light effect
  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const rect = section.getBoundingClientRect()
      const targetY = rect.top + window.scrollY
      
      // Create additional light trails during scroll
      const scrollTrails = Array.from({ length: 30 }, (_, i) => ({
        id: `scroll-${Date.now()}-${i}`,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight / 2,
        targetY: targetY,
        speed: Math.random() * 12 + 6,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 60%)`,
      }))
      setLightTrails(prev => [...prev, ...scrollTrails])
      
      // Smooth scroll
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
      
      // Clean up scroll trails
      setTimeout(() => {
        setLightTrails(prev => prev.filter(t => !t.id.startsWith(`scroll-${Date.now()}`)))
      }, 2000)
    }
  }
  const toggleNavbarExpansion = () => {
    setIsNavbarExpanded(!isNavbarExpanded)
    if (!isNavbarExpanded) {
      // Trigger root glow effect
      setRootGlow(1)
      setTimeout(() => setRootGlow(0), 1000)
      
      // Launch rocket!
      setRocketLaunched(true)
      setTimeout(() => setRocketLaunched(false), 3000)
      
      // Add explosion of crazy particles
      const explosionParticles = Array.from({ length: 50 }, (_, i) => ({
        id: `explosion-${Date.now()}-${i}`,
        x: 600 + (Math.random() - 0.5) * 200,
        y: 100 + Math.random() * 100,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 10,
        speedY: Math.random() * -5 - 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        opacity: 1,
        lifetime: 2000,
      }))
      
      setCrazyParticles(prev => [...prev, ...explosionParticles])
      
      // Add meteor shower
      const meteors = Array.from({ length: 20 }, (_, i) => ({
        id: `meteor-${Date.now()}-${i}`,
        x: Math.random() * window.innerWidth,
        y: -50,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 5,
        speedY: Math.random() * 10 + 5,
        color: `hsl(${30 + Math.random() * 30}, 100%, 60%)`,
        tailLength: Math.random() * 80 + 40,
        opacity: 1,
      }))
      
      setComets(prev => [...prev, ...meteors])
      
      // Remove explosion particles after lifetime
      setTimeout(() => {
        setCrazyParticles(prev => 
          prev.filter(p => !p.id.startsWith('explosion-'))
        )
        setComets(prev => 
          prev.filter(p => !p.id.startsWith('meteor-'))
        )
      }, 3000)
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

      {/* Navbar with Tree Root Animation */}
      <motion.nav 
        className={`navbar ${isNavbarExpanded ? 'navbar-expanded' : ''}`}
        initial={window.innerWidth <= 768 ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        onClick={(e) => {
          // Only toggle expansion on desktop, not mobile
          if (window.innerWidth > 768) {
            toggleNavbarExpansion()
          }
        }}
        style={{ cursor: window.innerWidth > 768 ? 'pointer' : 'default' }}
      >
        {/* Enhanced Tree Root Background Effect */}
        <div className="navbar-roots">
          <motion.svg 
            className="root-svg" 
            viewBox="0 0 1200 400" 
            preserveAspectRatio="none"
            animate={{
              height: isNavbarExpanded ? 400 : 100,
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Main Central Root */}
            <motion.path
              className="root-path main-root"
              d={isNavbarExpanded 
                ? "M 600 400 Q 600 350 600 300 Q 600 250 600 200 Q 600 150 600 100 Q 600 50 600 0"
                : "M 600 100 Q 600 80 600 60 Q 600 40 600 20 Q 600 10 600 0"
              }
              animate={{
                pathLength: [0, 1],
                strokeWidth: isNavbarExpanded ? [3, 5, 3] : [3, 4, 3],
              }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            
            {/* Expanded Branch Roots */}
            {isNavbarExpanded && (
              <>
                {/* Left Main Branch */}
                <motion.path
                  className="root-path branch-root"
                  d="M 600 300 Q 500 280 400 260 Q 300 240 200 220 Q 100 200 0 180"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 400 260 Q 350 250 300 240 Q 250 230 200 220 Q 150 210 100 200"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 300 240 Q 250 230 200 220 Q 150 210 100 200 Q 50 190 0 180"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                
                {/* Right Main Branch */}
                <motion.path
                  className="root-path branch-root"
                  d="M 600 300 Q 700 280 800 260 Q 900 240 1000 220 Q 1100 200 1200 180"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 800 260 Q 850 250 900 240 Q 950 230 1000 220 Q 1050 210 1100 200"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 900 240 Q 950 230 1000 220 Q 1050 210 1100 200 Q 1150 190 1200 180"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                
                {/* Crazy Zigzag Roots */}
                <motion.path
                  className="root-path crazy-root"
                  d="M 600 250 Q 550 230 500 250 Q 450 270 400 250 Q 350 230 300 250"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                />
                <motion.path
                  className="root-path crazy-root"
                  d="M 600 250 Q 650 230 700 250 Q 750 270 800 250 Q 850 230 900 250"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                />
                
                {/* Small Decorative Roots */}
                <motion.path
                  className="root-path small-root"
                  d="M 500 280 Q 480 270 460 280 Q 440 290 420 280"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                />
                <motion.path
                  className="root-path small-root"
                  d="M 700 280 Q 720 270 740 280 Q 760 290 780 280"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                />
              </>
            )}
            
            {/* Default Compact Roots */}
            {!isNavbarExpanded && (
              <>
                <motion.path
                  className="root-path branch-root"
                  d="M 600 60 Q 500 50 400 40 Q 300 30 200 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 400 40 Q 350 35 300 30 Q 250 25 200 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 600 60 Q 700 50 800 40 Q 900 30 1000 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  className="root-path branch-root"
                  d="M 800 40 Q 850 35 900 30 Q 950 25 1000 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <motion.path
                  className="root-path small-root"
                  d="M 300 30 Q 250 25 200 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                <motion.path
                  className="root-path small-root"
                  d="M 900 30 Q 950 25 1000 20"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
              </>
            )}
          </motion.svg>
          
          {/* Root Glow Effect */}
          <motion.div
            className="root-glow"
            animate={{
              opacity: rootGlow,
              scale: rootGlow ? 1.5 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              opacity: 1,
              filter: isNavbarExpanded ? 'hue-rotate(180deg) brightness(1.2)' : 'hue-rotate(0deg) brightness(1)'
            }}
            transition={{ 
              delay: 0.8, 
              type: "spring", 
              stiffness: 200,
              damping: 20,
              filter: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 3,
              filter: 'hue-rotate(360deg) brightness(1.3)',
              y: -4
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation()
              if (isNavbarExpanded) {
                setIsNavbarExpanded(false)
              }
            }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: isNavbarExpanded ? [1, 1.1, 1] : 1
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear",
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{
                rotate: 720,
                scale: 1.2,
                filter: 'drop-shadow(0 8px 20px rgba(224, 231, 255, 0.6))'
              }}
            >
              <Code2 className="logo-icon" />
            </motion.div>
            <motion.span 
              className="logo-text"
              animate={{
                textShadow: isNavbarExpanded 
                  ? '0 0 25px rgba(224, 231, 255, 0.8)'
                  : '0 0 15px rgba(255, 255, 255, 0.6)'
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Portofolio
            </motion.span>
            <motion.span
              className="logo-accent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                scale: isNavbarExpanded ? [1, 1.05, 1] : 1
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear",
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                scale: 1.1,
                filter: 'drop-shadow(0 4px 12px rgba(224, 231, 255, 0.8))'
              }}
            >
              AM45
            </motion.span>
            
            {/* Premium logo particles when expanded */}
            {isNavbarExpanded && (
              <motion.div
                className="logo-particles"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="logo-particle"
                    style={{
                      backgroundColor: `hsl(${(i * 60 + 220) % 360}, 80%, 75%)`,
                    }}
                    animate={{
                      x: [0, (i - 2.5) * 40, (i - 2.5) * 80],
                      y: [0, -30, -60],
                      opacity: [1, 0.7, 0],
                      scale: [1, 1.8, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4 + i * 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </motion.button>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile-open' : ''}`}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsNavbarExpanded(false)
                  setIsMobileMenuOpen(false)
                  
                  // Trigger cinematic light effect
                  triggerCinematicLightEffect(e, item.toLowerCase())
                  
                  // Smooth scroll to section with delay
                  setTimeout(() => {
                    smoothScrollToSection(item.toLowerCase())
                  }, 800)
                }}
                initial={{ 
                  opacity: 0, 
                  y: -40,
                  scale: 0.8,
                  rotateX: -90
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: 1.2 + i * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: isNavbarExpanded ? 1.08 : 1.05, 
                  y: isNavbarExpanded ? -6 : -3,
                  textShadow: isNavbarExpanded 
                    ? '0 0 35px rgba(224, 231, 255, 0.9), 0 0 60px rgba(199, 210, 254, 0.7)'
                    : '0 0 25px rgba(224, 231, 255, 0.8)',
                  rotateZ: isNavbarExpanded ? [0, 2, -2, 0] : 0,
                  background: isNavbarExpanded 
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isNavbarExpanded
                    ? '0 0 30px rgba(224, 231, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                    : '0 0 20px rgba(224, 231, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)'
                }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: '0 0 50px rgba(224, 231, 255, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.3)'
                }}
                className={`nav-link ${isNavbarExpanded ? 'nav-link-expanded' : ''} ${activeSection === item.toLowerCase() ? 'nav-link-active' : ''}`}
                style={{
                  color: activeSection === item.toLowerCase()
                    ? `rgba(224, 231, 255, 1)`
                    : isNavbarExpanded 
                      ? `rgba(224, 231, 255, 0.95)`
                      : 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <motion.span
                  animate={{
                    textShadow: activeSection === item.toLowerCase()
                      ? '0 0 30px rgba(224, 231, 255, 1), 0 0 60px rgba(199, 210, 254, 0.8)'
                      : isNavbarExpanded 
                        ? '0 0 25px rgba(224, 231, 255, 0.8)'
                        : 'none'
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    letterSpacing: isNavbarExpanded ? '0.1em' : '0.025em',
                    fontWeight: activeSection === item.toLowerCase() ? '700' : '500'
                  }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span
                      className="active-indicator"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.span>
                  )}
                </motion.span>
                <motion.div
                  className="nav-link-underline"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{
                    scaleX: activeSection === item.toLowerCase() ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    background: activeSection === item.toLowerCase()
                      ? 'linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb)'
                      : 'linear-gradient(135deg, #e0e7ff, #c7d2fe)'
                  }}
                />
                <motion.div
                  className="nav-link-root"
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: isNavbarExpanded ? [0, 1.2, 1] : (activeSection === item.toLowerCase() ? 1 : 0),
                    height: isNavbarExpanded ? 25 : (activeSection === item.toLowerCase() ? 20 : 0)
                  }}
                  transition={{ 
                    delay: 1.5 + i * 0.2, 
                    duration: isNavbarExpanded ? 0.8 : 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  style={{
                    background: activeSection === item.toLowerCase()
                      ? 'linear-gradient(180deg, rgba(96, 165, 250, 0.8), transparent)'
                      : isNavbarExpanded
                        ? 'linear-gradient(180deg, rgba(224, 231, 255, 0.8), transparent)'
                        : 'linear-gradient(180deg, rgba(224, 231, 255, 0.6), transparent)'
                  }}
                />
                
                {/* Premium floating particles for expanded state */}
                {isNavbarExpanded && (
                  <motion.div
                    className="nav-link-particles"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + i * 0.15, duration: 0.6, type: "spring" }}
                  >
                    {[...Array(4)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="nav-particle"
                        style={{
                          backgroundColor: `hsl(${(i * 60 + 220 + j * 25) % 360}, 80%, 75%)`,
                        }}
                        animate={{
                          y: [0, -25, -50],
                          x: [0, (j - 1.5) * 15, (j - 1.5) * 30],
                          opacity: [1, 0.7, 0],
                          scale: [1, 1.6, 0.4],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 3 + j * 0.6,
                          repeat: Infinity,
                          delay: j * 0.2,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                )}
                
                {/* Click effect particles */}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    className="click-effect-particles"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    {[...Array(6)].map((_, j) => (
                      <motion.div
                        key={j}
                        className="click-particle"
                        style={{
                          backgroundColor: `hsl(${(i * 60 + 200 + j * 20) % 360}, 100%, 60%)`,
                        }}
                        animate={{
                          x: [0, Math.cos(j * 60 * Math.PI / 180) * 40],
                          y: [0, Math.sin(j * 60 * Math.PI / 180) * 40],
                          opacity: [1, 0.5, 0],
                          scale: [1, 1.5, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: j * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.a>
            ))}
            
            {/* Premium expansion state indicator */}
            {isNavbarExpanded && (
              <motion.div
                className="expand-indicator"
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{
                  scale: 1.02,
                  y: -4
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 180],
                    scale: [1, 1.1, 1],
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.2,
                    filter: 'drop-shadow(0 8px 20px rgba(224, 231, 255, 0.8))'
                  }}
                >
                  <Rocket className="expand-icon" />
                </motion.div>
                <span>🚀 Premium Launch Complete</span>
                
                {/* Elegant space particles around indicator */}
                <div className="space-indicator-particles">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="space-particle"
                      style={{
                        backgroundColor: `hsl(${(i * 30 + 200) % 360}, 80%, 75%)`,
                      }}
                      animate={{
                        x: [0, Math.cos(i * 30 * Math.PI / 180) * 45],
                        y: [0, Math.sin(i * 30 * Math.PI / 180) * 45],
                        opacity: [1, 0.6, 1],
                        scale: [1, 0.4, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
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
            {[
              { 
                title: 'Football Ticket System', 
                desc: 'Interactive football ticketing website with Spring Boot', 
                tech: ['Spring Boot', 'JavaScript', 'MySQL'], 
                github: 'https://github.com/AM4517UMOR4NG/Football-Ticket',
                image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop'
              },
              { 
                title: 'Government Report System', 
                desc: 'Laravel-based public reports and complaints system', 
                tech: ['Laravel', 'PHP', 'Blade'], 
                github: 'https://github.com/AM4517UMOR4NG/Government-General-Report-and-Complain-System',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
              },
              { 
                title: 'HOLY BIBLE Web App', 
                desc: 'Web application for online HOLY BIBLE reading', 
                tech: ['TypeScript', 'React'], 
                github: 'https://github.com/AM4517UMOR4NG/HOLY-BIBLE',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38hppIONsI2GYUluv2xhkVV8eiWu68NxY0Q&s'
              },
              { 
                title: 'Plagiarism Checker', 
                desc: 'Web application for checking plagiarism', 
                tech: ['Python', 'Flask'], 
                github: 'https://github.com/AM4517UMOR4NG/Plagiarism-Checker',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
              },
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
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="project-image-overlay"></div>
                </motion.div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.github && (
                    <motion.a
                      href={project.github}
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
                  { icon: Mail, label: 'Email', value: 'aekmohop@gmail.com', href: 'mailto:aekmohop@gmail.com' },
                  { icon: Github, label: 'GitHub', value: 'github.com/AM4517UMOR4NG', href: 'https://github.com/AM4517UMOR4NG' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com', href: 'https://linkedin.com' },
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
