'use client';

import { useRouter } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';

import Logo3D from '@/_views/components/elements/logo3d';

function Onboarding() {
  const router = useRouter();
  const [{ scale, position, rotation }, api] = useSpring(
    () => ({
      scale: 1,
      position: [0, -1, -1],
      rotation: [0.6, -0.6, 0],
      config: () => ({
        mass: 4,
        friction: 20,
      }),
    }),
    []
  );

  const handlePointerEnter = () => {
    api.start({
      scale: 1.2,
      rotation: [0, 360 / (180 / Math.PI), 0],
      position: [0.4, 0, 0],
    });
  };

  const handlePointerOut = () => {
    api.start({
      scale: 1,
      position: [0, -1, -1],
      rotation: [0.6, -0.6, 0],
    });
  };

  const handleClick = () => {
    router.push('/intro');
  };

  return (
    <div
      className="flex justify-center items-center w-screen min-h-screen"
      onPointerEnter={handlePointerEnter}
      onPointerOver={handlePointerEnter}
      onPointerLeave={handlePointerOut}
      onPointerCancel={handlePointerOut}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <Canvas className=" w-full min-h-full" onCreated={(canvas) => canvas.setSize(350, 350)}>
        <Logo3D scale={scale} position={position} rotation={rotation} />
      </Canvas>
    </div>
  );
}

export default Onboarding;
