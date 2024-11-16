import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Dish } from '../types';
import { Suspense } from 'react';
import {Model}  from "../components/modelado";

interface DishViewerProps {
  dish: Dish;
  zoom?: number;
}

export function DishViewer({ dish, zoom = 1 }: DishViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          {/* Temporary placeholder 3D object until we have actual models */}
          
          <Model/>
        </Stage>
      </Suspense>
      <OrbitControls 
        enablePan={false}
        minPolarAngle={Math.PI/4}
        maxPolarAngle={Math.PI/2}
      />
    </Canvas>
  );
}