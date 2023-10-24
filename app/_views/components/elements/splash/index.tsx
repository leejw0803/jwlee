'use client';

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Canvas, useFrame } from '@react-three/fiber';
import { type Group, type Object3DEventMap } from 'three';
import { useSpring, animated, a } from '@react-spring/three';

type GLTFResult = GLTF & {
  nodes: {
    Text_1: THREE.Mesh;
    Cube: THREE.Mesh;
    Path_5: THREE.Mesh;
    Path_4: THREE.Mesh;
    Path_3: THREE.Mesh;
  };
  materials: {};
};

function SplashModel() {
  const [hover, setHover] = useState<number>(0);
  const model = useGLTF('/jwlee.gltf') as GLTFResult;

  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      position: [0, -1, -1],
      rotation: [0.6, -0.6, 0],
      config: (key) => {
        switch (key) {
          case 'scale':
            return {
              mass: 4,
              friction: 20,
            };
          case 'rotation':
            return {
              mass: 4,
              friction: 20,
            };
          default:
            return {};
        }
      },
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

  const handleFocus = () => {
    setHover((hover) => Number(!hover));
  };

  const handleBlur = () => {
    setHover((hover) => Number(!hover));
  };

  useEffect(() => {
    //@ts-ignore
    model.nodes.Text_1.material.color.set(0x851aff);
    //@ts-ignore
    model.nodes.Cube.material.color.set(0x851aff);
    //@ts-ignore
    model.nodes.Path_5.material.color.set(0x851aff);
    //@ts-ignore
    model.nodes.Path_4.material.color.set(0x851aff);
    //@ts-ignore
    model.nodes.Path_3.material.color.set(0x851aff);
  });

  return (
    <mesh
    // onPointerOver={handleFocus}
    // onPointerDown={handleFocus}
    // onPointerEnter={handleFocus}
    // onPointerLeave={handleBlur}
    // onPointerCancel={handleBlur}
    // onPointerUp={handleBlur}
    // onPointerMissed={handleBlur}
    // onPointerOut={handleBlur}
    >
      <Environment preset="sunset" />
      {/* @ts-ignore */}
      <a.primitive
        onPointerEnter={handlePointerEnter}
        position={springs.position}
        rotation={springs.rotation}
        object={model.scene}
        scale={springs.scale}
        onClick={() => setHover(Number(!hover))}
      />
    </mesh>
  );
}

useGLTF.preload('/jwlee.gltf');

function SplashScreen() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <Canvas className=" w-full min-h-full" onCreated={(canvas) => canvas.setSize(350, 350)}>
        <SplashModel />
      </Canvas>
    </div>
  );
}

export { SplashModel, SplashScreen };
