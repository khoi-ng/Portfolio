/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 meWaving.gltf --transform 
Files: meWaving.gltf [97.94KB] > C:\Users\KhoiN.DESKTOP-NF9JFIF\Desktop\React\portfolio\public\3D\meWaving-transformed.glb [1.28MB] (-1210%)
*/

import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

// @ts-ignore
const Me3DWaving = (props) => {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF(
    '3D/meWaving-transformed.glb'
  );
  const { actions, names } = useAnimations(animations, group);
  // console.log(names);

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
    return () => {
      actions[names[0]]?.fadeOut(0.5);
    };
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
        </group>

        <skinnedMesh
          name='avaturn_body'
          geometry={nodes.avaturn_body.geometry}
          material={materials.avaturn_body_material}
          skeleton={nodes.avaturn_body.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <skinnedMesh
          name='avaturn_hair_0'
          geometry={nodes.avaturn_hair_0.geometry}
          material={materials.avaturn_hair_0_material}
          skeleton={nodes.avaturn_hair_0.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <skinnedMesh
          name='avaturn_look_0'
          geometry={nodes.avaturn_look_0.geometry}
          material={materials.avaturn_look_0_material}
          skeleton={nodes.avaturn_look_0.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <skinnedMesh
          name='avaturn_shoes_0'
          geometry={nodes.avaturn_shoes_0.geometry}
          material={materials.avaturn_shoes_0_material}
          skeleton={nodes.avaturn_shoes_0.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
};

export default Me3DWaving;

useGLTF.preload('/3D/meWaving-transformed.glb');
