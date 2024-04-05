import { shaderMaterial, useTexture } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import displacementImage from '../../assets/displacement/11.jpg';
import * as easing from 'maath/easing';
import { DemoData } from '../../shared/demoData';

const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: null,
    tex2: null,
    disp: null,
  },
  /*glsl*/ ` varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
  /*glsl*/ ` 
      varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;

      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
        vec4 _texture = texture2D(tex, distortedPosition);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        gl_FragColor = finalTexture;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
      
  `
);

extend({ ImageFadeMaterial });

function ImageWithEffect({
  src,
  src2,
  aspectRatio,
  isHovered = null,
}: {
  src: string;
  src2: string;
  aspectRatio: number[];
  isHovered?: boolean | null;
}) {
  const ref = useRef<any>();

  const [widthRatio, heightRatio] = aspectRatio;
  const [texture1, texture2, dispTexture] = useTexture([
    src,
    src2,
    displacementImage,
  ]);
  const [hovered, setHover] = useState(false);

  // set hover state from custom parent/ or from here
  const hoverCondition = isHovered !== null ? isHovered : hovered;

  useFrame((_state, delta) => {
    easing.damp(ref.current, 'dispFactor', hoverCondition ? 1 : 0, 0.19, delta);
    // ref.current.dispFactor = THREE.MathUtils.lerp(
    //   ref.current.dispFactor,
    //   hovered ? 1 : 0,
    //   0.075
    // );
  });

  return (
    <mesh
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <planeGeometry args={[widthRatio, heightRatio]} />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  );
}

export const DisplacementImageEffect = ({
  className,
  demoData,
  aspectRatio,
  isHovered = null,
}: {
  className?: string;
  demoData: DemoData;
  aspectRatio: number[];
  isHovered?: boolean | null;
}) => {
  return (
    <Canvas className={className} camera={{ position: [0, 0, 1], fov: 52 }}>
      <ImageWithEffect
        src={demoData.src}
        src2={demoData.src2}
        aspectRatio={aspectRatio}
        isHovered={isHovered}
      />
    </Canvas>
  );
};
