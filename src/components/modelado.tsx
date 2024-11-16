import { useGLTF } from '@react-three/drei';

export function Model(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF('../../public/resorses/modelados 3d/pizza.glb');
  return <primitive object={scene} {...props} />;
}
