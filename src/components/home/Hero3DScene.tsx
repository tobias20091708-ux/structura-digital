"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Rig() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.4 - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (-y * 0.25 - group.current.rotation.x) * 0.03;
  });

  return (
    <group ref={group} position={[2.6, -0.2, 0]}>
      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh scale={1.15}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.45}
            speed={2.2}
            roughness={0.15}
            metalness={0.6}
            emissive="#4c1d95"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2.2}>
        <mesh position={[1.8, 1.1, -1.4]} scale={0.4}>
          <torusGeometry args={[1, 0.35, 32, 100]} />
          <meshStandardMaterial color="#22d3ee" roughness={0.2} metalness={0.7} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.6} floatIntensity={1.8}>
        <mesh position={[-1.9, -1.2, -0.6]} scale={0.3}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#ec4899" roughness={0.25} metalness={0.6} />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-1.3, 1.5, -1.2]} scale={0.22}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#a78bfa" roughness={0.3} metalness={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={18} color="#8b5cf6" />
      <pointLight position={[-5, -3, -2]} intensity={12} color="#22d3ee" />
      <pointLight position={[0, 4, -4]} intensity={10} color="#ec4899" />

      <Stars radius={30} depth={40} count={1400} factor={2.4} saturation={0} fade speed={0.6} />
      <Sparkles count={40} scale={7} size={2.5} speed={0.4} color="#c4b5fd" opacity={0.6} />

      <Rig />
    </Canvas>
  );
}

export default Hero3DScene;
