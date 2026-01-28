"use client";

import { useEffect, useState, useMemo } from "react";

// ===== CONFIGURABLE VARIABLES =====
const CONFIG = {
  squareCount: 20,          // Number of squares (reduced for better performance)
  minSize: 30,              // Minimum square size (px)
  maxSize: 100,             // Maximum square size (px)
  minOpacity: 0.08,         // Minimum opacity (subtler)
  maxOpacity: 0.18,         // Maximum opacity (subtler)
};

interface Square {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
  rotation: number;
}

// Generate squares outside component to avoid hydration mismatch
const generateInitialSquares = (): Square[] => {
  const squares: Square[] = [];
  for (let i = 0; i < CONFIG.squareCount; i++) {
    squares.push({
      id: i,
      x: (i * 37) % 100, // Deterministic positioning
      y: (i * 53) % 100,
      size: CONFIG.minSize + ((i * 17) % (CONFIG.maxSize - CONFIG.minSize)),
      opacity: CONFIG.minOpacity + ((i * 7) % 100) / 100 * (CONFIG.maxOpacity - CONFIG.minOpacity),
      animationDuration: 20 + (i % 5) * 8,
      animationDelay: -(i * 2),
      rotation: (i * 45) % 360,
    });
  }
  return squares;
};

export default function FloatingSquares() {
  const [mounted, setMounted] = useState(false);
  const squares = useMemo(() => generateInitialSquares(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return empty div during SSR to prevent hydration mismatch
  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, transparent 50%, rgba(212, 175, 55, 0.05) 100%)'
        }}
      />
      
      {squares.map((square) => (
        <div
          key={square.id}
          className="absolute animate-float-square"
          style={{
            left: `${square.x}%`,
            top: `${square.y}%`,
            width: square.size,
            height: square.size,
            opacity: square.opacity,
            transform: `rotate(${square.rotation}deg)`,
            animationDuration: `${square.animationDuration}s`,
            animationDelay: `${square.animationDelay}s`,
          }}
        >
          <div 
            className="w-full h-full rounded-2xl"
            style={{
              border: '1.5px solid rgba(99, 102, 241, 0.25)',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.08)',
            }}
          />
        </div>
      ))}
    </div>
  );
}
