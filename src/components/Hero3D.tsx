import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// A placeholder premium 3D subject. 
// In a real scenario, you can replace this with useGLTF() to load your own 3D scanned model.
const Subject = ({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // 360 degrees = Math.PI * 2
      // We map the scroll progress (0 to 1) directly to rotation
      const targetRotation = scrollProgress.current * Math.PI * 2;
      
      // Smoothly interpolate current rotation to target rotation for butter-smooth feel
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        0.1 // Adjust for smoothness vs responsiveness
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* A refined, modern abstract representation of a "creative developer" */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 2, 0]} castShadow>
          <torusKnotGeometry args={[1, 0.3, 256, 64]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.9} 
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%', // Gives a long scroll distance for the 360 rotation
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Subject scrollProgress={scrollProgress} />
          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        </Canvas>
      </div>

      {/* Typography Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between p-8 md:p-16 pointer-events-none">
        
        {/* Top Text */}
        <div className="mt-20 md:mt-10 flex justify-between items-start w-full">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-editorial font-medium leading-tight text-foreground">
              Software<br />Developer.
            </h1>
          </div>
          <div className="hidden md:block max-w-xs text-right">
            <p className="text-sm font-medium tracking-wide uppercase mb-2">Available for Work</p>
            <p className="text-sm text-gray-500">Building intelligent applications that people remember.</p>
          </div>
        </div>

        {/* Center alignment for the 3D subject is handled by Canvas */}

        {/* Bottom Text & CTAs */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full mb-8">
          <div className="max-w-sm mb-8 md:mb-0">
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Full-stack Java developer focused on modern web architecture, robust backend systems, and AI integrations.
            </p>
            <div className="mt-6 flex gap-4 pointer-events-auto">
              <a href="#work" className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
                View My Work
              </a>
              <a href="https://drive.google.com/file/d/1lpFwOl28MRxNNOtOqEw8WPgSLfVHVQu0/view?usp=sharing" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 text-foreground text-sm font-semibold rounded-full hover:border-foreground transition-colors">
                Resume
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 indicator-text">
              Scroll to Explore
            </p>
            <div className="w-[1px] h-16 bg-gray-300 overflow-hidden indicator-line relative">
                <div className="w-full h-full bg-foreground animate-scroll-down absolute top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero3D;
