'use client';

import * as THREE from 'three';
import React, { useEffect } from 'react';
import { a, type SpringValue } from '@react-spring/three';
import { useGLTF, Environment } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

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

type Logo3DProps = {
  scale: SpringValue<number>;
  position: SpringValue<number[]>;
  rotation: SpringValue<number[]>;
};

function Logo3D({ scale, position, rotation }: Logo3DProps) {
  const model = useGLTF('/jwlee.gltf') as GLTFResult;

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
    <mesh>
      <Environment preset="sunset" />
      {/* @ts-ignore */}
      <a.primitive position={position} rotation={rotation} object={model.scene} scale={scale} />
    </mesh>
  );
}

useGLTF.preload('/jwlee.gltf');

export default Logo3D;
