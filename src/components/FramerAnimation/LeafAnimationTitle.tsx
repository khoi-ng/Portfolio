import leaf from '../../../src/assets/leafs/leaf.webp';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './LeafAnimationTitle.scss';

const LeafAnimationTitle = ({
  amount,
  title,
  leafId,
  leafPathId,
  delay = 0.5,
}: {
  amount: number;
  title: string;
  leafId: string;
  leafPathId: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once: true });
  useGSAP(() => {
    if (isInView) {
      gsap.registerPlugin(MotionPathPlugin);
      gsap.registerPlugin();

      gsap.to(`#${leafId}`, {
        delay: delay,
        duration: 3,
        repeat: 0,
        // repeatDelay: 3,
        yoyo: false,
        ease: 'power1.inOut',
        motionPath: {
          path: `#${leafPathId}`,
          align: `#${leafPathId}`,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      });
    }
  }, [isInView]);

  return (
    <h2 ref={ref}>
      <span>
        {title}
        <div className='svg-wrapper-leaf'>
          <svg
            width='450'
            height='100%'
            viewBox='0 0 450 293'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            // preserveAspectRatio='none'
          >
            <path
              id={leafPathId}
              d='M-5 39.498C37.8333 20.498 133.6 -0.301998 174 68.498C214.4 137.298 244 181.502 296 153.5C348 125.498 410.381 106.5 422.5 153.5C434.619 200.5 409 245 373.5 263.5'
              // stroke='black'
              // stroke-width='.13'
            />

            <image id={leafId} href={leaf} height='40' width='40' />
          </svg>
        </div>
      </span>
    </h2>
  );
};

export default LeafAnimationTitle;
