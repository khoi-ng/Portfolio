import { motion } from 'framer-motion';
import gsap from 'gsap';
import './Modal.scss';
import { useEffect, useRef } from 'react';
import { DemoData } from '../../../shared/demoData';

const scaleAnimation = {
  initial: {
    scale: 0,
    // filter: 'hue-rotate(100deg) contrast(5)',
    x: '-50%',
    y: '-50%',
  },
  enter: {
    scale: 1,
    // filter: 'hue-rotate(0deg) contrast(1)',
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    // filter: 'hue-rotate(100deg) contrast(5)',
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({
  modal,
  demos,
  parentId,
}: {
  modal: {
    active: boolean;
    index: number;
  };
  demos: DemoData[];
  parentId: string;
}) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const imageWidth = 300;

  useEffect(() => {
    //Move Container
    let xMoveContainer: gsap.QuickToFunc = gsap.quickTo(
      modalContainer.current,
      'left',
      {
        duration: 0.8,
        ease: 'power3',
      }
    );

    let yMoveContainer: gsap.QuickToFunc = gsap.quickTo(
      modalContainer.current,
      'top',
      {
        duration: 0.8,
        ease: 'power3',
      }
    );

    //Move cursor
    let xMoveCursor: gsap.QuickToFunc = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });

    let yMoveCursor: gsap.QuickToFunc = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    const parentContainer = document.getElementById(parentId);
    // const modalContainerWidthCenter = modalContainer.current.clientWidth / 2;
    // const modalContainerHeightCenter = modalContainer.current.clientHeight / 2;
    // const cursorWidthCenter = cursor.current.clientWidth / 2;
    // const cursorHeightCenter = cursor.current.clientHeight / 2;

    const handlemousemove = (e: MouseEvent) => {
      const parentRect = parentContainer?.getBoundingClientRect();
      if (parentRect) {
        const node = e.target as HTMLElement;
        const rect = node?.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - parentRect.y;

        xMoveContainer(x);

        yMoveContainer(y);

        xMoveCursor(x);

        yMoveCursor(y);
      }
    };

    parentContainer?.addEventListener('mousemove', (e) => {
      handlemousemove(e);
    });

    return () => {
      parentContainer?.removeEventListener('mousemove', handlemousemove);
    };
  }, [parentId, index]);
  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        className={'modalContainer'}
      >
        <div style={{ top: index * -100 + '%' }} className={'modalSlider'}>
          {demos.map((demo, index) => {
            const { src, color } = demo;
            return (
              <div
                className={'modal'}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img
                  src={`${src}`}
                  width={imageWidth}
                  // height={0}
                  alt='image'
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={'cursor'}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      >
        {' '}
        View
      </motion.div>
    </>
  );
}
