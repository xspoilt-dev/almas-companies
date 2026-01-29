"use client";

import { useEffect, useState, useMemo } from "react";

// ===== CONFIGURABLE VARIABLES =====
const CONFIG = {
  // Floating orbs
  orbCount: 8,
  // Geometric shapes
  shapeCount: 15,
  // Gradient blobs
  blobCount: 5,
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

// Color palettes for light theme - increased opacity for better visibility
const orbColors = [
  'rgba(99, 102, 241, 0.25)',   // Indigo - increased from 0.15
  'rgba(139, 92, 246, 0.20)',   // Violet - increased from 0.12
  'rgba(245, 158, 11, 0.18)',   // Amber - increased from 0.10
  'rgba(59, 130, 246, 0.20)',   // Blue - increased from 0.12
  'rgba(168, 85, 247, 0.18)',   // Purple - increased from 0.10
  'rgba(236, 72, 153, 0.15)',   // Pink - increased from 0.08
];

const shapeColors = [
  'rgba(99, 102, 241, 0.15)',   // Indigo - increased from 0.08
  'rgba(139, 92, 246, 0.12)',   // Violet - increased from 0.06
  'rgba(245, 158, 11, 0.15)',   // Amber - increased from 0.08
  'rgba(59, 130, 246, 0.12)',   // Blue - increased from 0.06
];

// Generate elements deterministically
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
      opacity: 0.06 + (i % 5) * 0.025, // Increased from 0.03 + (i % 5) * 0.015
    });
  }
  return shapes;
};

const generateBlobs = (): Blob[] => {
  const blobs: Blob[] = [];
  const colorPairs = [
    ['rgba(99, 102, 241, 0.08)', 'rgba(139, 92, 246, 0.05)'],   // Decreased opacity
    ['rgba(245, 158, 11, 0.06)', 'rgba(251, 191, 36, 0.04)'],   // Decreased opacity
    ['rgba(59, 130, 246, 0.07)', 'rgba(99, 102, 241, 0.04)'],   // Decreased opacity
    ['rgba(168, 85, 247, 0.05)', 'rgba(236, 72, 153, 0.03)'],   // Decreased opacity
    ['rgba(16, 185, 129, 0.05)', 'rgba(59, 130, 246, 0.03)'],   // Decreased opacity
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
  const orbs = useMemo(() => generateOrbs(), []);
  const shapes = useMemo(() => generateShapes(), []);
  const blobs = useMemo(() => generateBlobs(), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      {/* Premium base gradient - soft cream to light indigo */}
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
          className="absolute rounded-full animate-blob blur-3xl"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color1} 0%, ${blob.color2} 50%, transparent 70%)`,
            animationDuration: `${blob.animationDuration}s`,
            animationDelay: `${blob.animationDelay}s`,
          }}
        />
      ))}

      {/* Floating orbs layer */}
      {orbs.map((orb) => (
        <div
          key={`orb-${orb.id}`}
          className="absolute rounded-full animate-float-orb blur-2xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDuration: `${orb.animationDuration}s`,
            animationDelay: `${orb.animationDelay}s`,
          }}
        />
      ))}

      {/* Geometric shapes layer */}
      {shapes.map((shape) => (
        <div
          key={`shape-${shape.id}`}
          className="absolute animate-float-shape"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
            animationDuration: `${shape.animationDuration}s`,
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

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
