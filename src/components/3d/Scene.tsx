"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { FloatingTech } from "./FloatingTech";

interface SceneProps {
  children?: React.ReactNode;
}

export function Scene({ children }: SceneProps) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Pointer events are disabled on the canvas wrapper, but we want the 3D objects to be interactive. 
            However, for the Hero section layout, we typically place the Canvas behind the DOM and enable pointer-events only on the meshes.
            A cleaner approach is to use pointer-events-auto just on the Canvas container itself, or rely on R3F's event manager.
            We will set the wrapper to pointer-events-none and override it on the canvas in the CSS if needed, 
            but for now let's just make the whole canvas pointer-events-auto since it's the background. */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Subtle particle background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {children}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
