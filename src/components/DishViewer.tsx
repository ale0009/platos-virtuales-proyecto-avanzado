import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { Dish } from '../types';
import {Model}  from "../components/Model";

interface DishViewerProps {
  dish: Dish;
}
export function DishViewer({ dish}: DishViewerProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Model modelPath={dish.modelPath}/>
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