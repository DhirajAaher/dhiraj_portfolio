import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if(sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#111318"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full opacity-60">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#19D9FF" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F4F1E8" />
      <AnimatedSphere />
    </Canvas>
  );
}
