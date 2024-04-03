import {
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  useTexture,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

const MeshPortalCard = ({
  children,
  texture,
  ...props
}: {
  texture: string;
  children: JSX.Element | JSX.Element[];
}) => {
  const map = useTexture(texture);
  const [rotationY, setRotationY] = useState<number>(0);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    // the value will be 0 at scene initialization and grow each frame
    const a = clock.getElapsedTime();
    setRotationY(Math.sin(a) * 0.1);
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'grab' : 'auto';
    // return () => (document.body.style.cursor = 'auto');
  }, [hovered]);

  return (
    <group
      {...props}
      rotation-y={rotationY}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[1.5, 2.3, 0.1]} rotation-y={-Math.PI / 6}>
        <MeshPortalMaterial>
          <ambientLight intensity={0.5} />
          <Environment preset='sunset' />
          {children}

          <mesh position={[0, 3, 0]}>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

export default MeshPortalCard;
