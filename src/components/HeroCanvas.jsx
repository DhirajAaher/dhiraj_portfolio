import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function Particles({ count = 120 }) {
  const mesh = useRef();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz  = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sz[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.018;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.009;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial color="#e9e2cf" size={0.045} transparent opacity={0.22} sizeAttenuation />
    </points>
  );
}

function GlowOrb() {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.05;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.04;
      mesh.current.scale.set(s, s, s);
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.3}>
      <mesh ref={mesh} position={[3, -0.5, -2]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#00e5ff"
          transparent
          opacity={0.06}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      {/* wireframe shell */}
      <mesh position={[3, -0.5, -2]}>
        <sphereGeometry args={[2.0, 16, 16]} />
        <meshStandardMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00e5ff" />
      <pointLight position={[-8, -3, 2]} intensity={0.3} color="#e9e2cf" />
      <Particles count={130} />
      <GlowOrb />
    </Canvas>
  );
}
