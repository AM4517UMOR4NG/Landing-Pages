import React, { useEffect, useState } from 'react'

export default function CursorTrail() {
  const [trail, setTrail] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }]
        return newTrail.slice(-20) // Keep only last 20 positions
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="absolute w-6 h-6 rounded-full bg-neon-purple opacity-50 blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute rounded-full bg-gradient-to-r from-neon-purple to-neon-pink"
          style={{
            left: point.x - (index * 0.5),
            top: point.y - (index * 0.5),
            width: `${20 - index}px`,
            height: `${20 - index}px`,
            opacity: (20 - index) / 40,
            filter: `blur(${index * 0.5}px)`,
            transition: 'all 0.3s ease-out'
          }}
        />
      ))}
    </div>
  )
}
