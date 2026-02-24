"use client";

import { useEffect, useState, useMemo } from "react";

// ===== PERFORMANCE OPTIMIZED CONFIGURATION =====
const CONFIG = {
  orbCount: 2,
  shapeCount: 4,
  blobCount: 2,
};

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDuration: number;
  animationDelay: number;
}

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'square' | 'circle' | 'triangle';
  rotation: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

interface Blob {
  id: number;
  x: number;
  y: number;
  size: number;
  color1: string;
  color2: string;
  animationDuration: number;
  animationDelay: number;
}

const orbColors = [
  'rgba(99, 102, 241, 0.25)',
  'rgba(139, 92, 246, 0.20)',
  'rgba(245, 158, 11, 0.18)',
  'rgba(59, 130, 246, 0.20)',
  'rgba(168, 85, 247, 0.18)',
  'rgba(236, 72, 153, 0.15)',
];

const shapeColors = [
  'rgba(99, 102, 241, 0.15)',
  'rgba(139, 92, 246, 0.12)',
  'rgba(245, 158, 11, 0.15)',
  'rgba(59, 130, 246, 0.12)',
];

const generateOrbs = (): Orb[] => {
  const orbs: Orb[] = [];
  for (let i = 0; i < CONFIG.orbCount; i++) {
    orbs.push({
      id: i,
      x: (i * 31 + 10) % 90,
      y: (i * 47 + 5) % 85,
      size: 200 + (i * 67) % 300,
      color: orbColors[i % orbColors.length],
      animationDuration: 25 + (i % 4) * 10,
      animationDelay: -(i * 5),
    });
  }
  return orbs;
};

const generateShapes = (): Shape[] => {
  const shapes: Shape[] = [];
  const types: ('square' | 'circle' | 'triangle')[] = ['square', 'circle', 'triangle'];
  for (let i = 0; i < CONFIG.shapeCount; i++) {
    shapes.push({
      id: i,
      x: (i * 29 + 5) % 95,
      y: (i * 41 + 3) % 92,
      size: 20 + (i * 13) % 60,
      type: types[i % 3],
      rotation: (i * 30) % 360,
      animationDuration: 30 + (i % 6) * 8,
      animationDelay: -(i * 3),
      opacity: 0.06 + (i % 5) * 0.025,
    });
  }
  return shapes;
};

const generateBlobs = (): Blob[] => {
  const blobs: Blob[] = [];
  const colorPairs = [
    ['rgba(99, 102, 241, 0.08)', 'rgba(139, 92, 246, 0.05)'],
    ['rgba(245, 158, 11, 0.06)', 'rgba(251, 191, 36, 0.04)'],
    ['rgba(59, 130, 246, 0.07)', 'rgba(99, 102, 241, 0.04)'],
    ['rgba(168, 85, 247, 0.05)', 'rgba(236, 72, 153, 0.03)'],
    ['rgba(16, 185, 129, 0.05)', 'rgba(59, 130, 246, 0.03)'],
  ];
  for (let i = 0; i < CONFIG.blobCount; i++) {
    blobs.push({
      id: i,
      x: (i * 43 + 10) % 80,
      y: (i * 37 + 15) % 75,
      size: 400 + (i * 89) % 400,
      color1: colorPairs[i % colorPairs.length][0],
      color2: colorPairs[i % colorPairs.length][1],
      animationDuration: 35 + (i % 3) * 15,
      animationDelay: -(i * 7),
    });
  }
  return blobs;
};

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const orbs = useMemo(() => generateOrbs(), []);
  const shapes = useMemo(() => generateShapes(), []);
  const blobs = useMemo(() => generateBlobs(), []);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 
        (typeof navigator !== 'undefined' && /Mobi|Android|iPhone/i.test(navigator.userAgent)));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />;
  }

  // ===== MOBILE: Static gradient only — zero animations, zero blur =====
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{ zIndex: 0 }} 
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 15%, #fff7ed 30%, #fdf4ff 50%, #eef2ff 70%, #f0f9ff 85%, #f0fdfa 100%)',
          }}
        />
        {/* Soft vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(248, 250, 252, 0.5) 100%)',
          }}
        />
      </div>
    );
  }

  // ===== DESKTOP: Full effects (without SVG noise texture) =====
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0 }} 
      aria-hidden="true"
    >
      {/* Premium base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 15%, #fff7ed 30%, #fdf4ff 50%, #eef2ff 70%, #f0f9ff 85%, #f0fdfa 100%)',
        }}
      />

      {/* Secondary animated gradient layer */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 10% 20%, rgba(251, 191, 36, 0.20) 0%, transparent 50%), radial-gradient(ellipse 80% 100% at 90% 80%, rgba(99, 102, 241, 0.18) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 50% 50%, rgba(167, 139, 250, 0.12) 0%, transparent 50%)',
        }}
      />

      {/* Warm accent glow - top left */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full animate-blob blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(245, 158, 11, 0.08) 40%, transparent 70%)',
          animationDuration: '30s',
        }}
      />

      {/* Cool accent glow - bottom right */}
      <div 
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full animate-blob blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.06) 40%, transparent 70%)',
          animationDuration: '35s',
          animationDelay: '-10s',
        }}
      />

      {/* Center subtle glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full animate-pulse-soft blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(254, 243, 199, 0.20) 0%, rgba(252, 231, 243, 0.10) 40%, transparent 70%)',
        }}
      />

      {/* Gradient blobs layer */}
      {blobs.map((blob) => (
        <div
          key={`blob-${blob.id}`}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color1} 0%, ${blob.color2} 50%, transparent 70%)`,
            animation: `blob ${blob.animationDuration}s ease-in-out infinite`,
            animationDelay: `${blob.animationDelay}s`,
          }}
        />
      ))}

      {/* Floating orbs layer */}
      {orbs.map((orb) => (
        <div
          key={`orb-${orb.id}`}
          className="absolute rounded-full blur-2xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animation: `float-orb ${orb.animationDuration}s ease-in-out infinite`,
            animationDelay: `${orb.animationDelay}s`,
          }}
        />
      ))}

      {/* Geometric shapes layer */}
      {shapes.map((shape) => (
        <div
          key={`shape-${shape.id}`}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
            animation: `float-shape ${shape.animationDuration}s ease-in-out infinite`,
            animationDelay: `${shape.animationDelay}s`,
          }}
        >
          {shape.type === 'square' && (
            <div 
              className="w-full h-full rounded-lg border-2"
              style={{
                borderColor: shapeColors[shape.id % shapeColors.length],
                background: `linear-gradient(135deg, ${shapeColors[shape.id % shapeColors.length]} 0%, transparent 100%)`,
              }}
            />
          )}
          {shape.type === 'circle' && (
            <div 
              className="w-full h-full rounded-full border-2"
              style={{
                borderColor: shapeColors[shape.id % shapeColors.length],
                background: `radial-gradient(circle, ${shapeColors[shape.id % shapeColors.length]} 0%, transparent 70%)`,
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon 
                points="50,10 90,90 10,90" 
                fill={shapeColors[shape.id % shapeColors.length]}
                stroke={shapeColors[shape.id % shapeColors.length]}
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
      ))}

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(248, 250, 252, 0.5) 100%)',
        }}
      />
    </div>
  );
}
