import { useInView, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

// https://www.youtube.com/watch?v=UVhaufz6FZc

export const StaggeredTextAnimation = ({
  text,
  once = true,
  className,
  repeatDelay,
}: {
  text: string;
  once?: boolean;
  className?: string;
  repeatDelay?: number;
}) => {
  const controls = useAnimation();

  const animation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, controls, repeatDelay]);

  return (
    <div className={`${className} overflow-hidden relative`}>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        className='flex'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        // transition={{
        //   staggerChildren: 0.1,
        // }}
      >
        {text.split('').map((char) => (
          <motion.span variants={animation}>
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export const TextLinesTranslateYtoVisibleDelay = ({
  children,
  once = true,
  className,
  repeatDelay,
  delayBetweenLines = 0.1,
  startDelay = 0.5,
  identifier,
  amount = 0.6,
}: {
  children: JSX.Element | JSX.Element[];
  once?: boolean;
  className?: string;
  repeatDelay?: number;
  delayBetweenLines?: number;
  startDelay?: number;
  identifier?: string;
  amount?: number;
}) => {
  const controls = useAnimation();

  const animation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, controls, repeatDelay]);

  return (
    <span className={`${className} overflow-hidden relative`}>
      <motion.span
        ref={ref}
        key={identifier}
        initial='hidden'
        animate={controls}
      >
        {React.Children.toArray(children).map((child, i) => (
          <motion.div
            key={`${identifier}-Div-${i}`}
            variants={animation}
            transition={{
              duration: 0.3,
              delay: startDelay + delayBetweenLines * i,
            }}
          >
            {child}
          </motion.div>
        ))}
      </motion.span>
    </span>
  );
};

export const TextLineTranslateYtoVisible = ({
  text,
  once = true,
  className,
  repeatDelay,
}: {
  text: string;
  once?: boolean;
  className?: string;
  repeatDelay?: number;
}) => {
  const controls = useAnimation();

  const animation = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, controls, repeatDelay]);

  return (
    <div className={className}>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        className='flex'
      >
        <motion.span
          variants={animation}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {text}
        </motion.span>
      </motion.div>
    </div>
  );
};
