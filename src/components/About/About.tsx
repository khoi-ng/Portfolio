import './About.scss';
import { ElementsTranslateYtoVisibleStaggered } from '../FramerAnimation/InvisToVisAnimations';
import { useThemeContext } from '../../util/context';
import { motion, useInView } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import useMousePosition from '../../util/useMousePostion';
import aboutMeBackground from '../../assets/me_holding_Laptop_background.webp';
import LeafAnimationTitle from '../FramerAnimation/LeafAnimationTitle';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const aboutWrapperRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const [yOffset, setYOffset] = useState(0);

  const [mouseSizeAdd, setMouseSizeAdd] = useState<number>(0);
  const size = isHovered ? 191 + mouseSizeAdd : 0;
  const intervalIDRef = useRef<NodeJS.Timeout | null>(null);

  // Keep same reference of the intervall functions to avode creating new ones on rerender
  const handleMouseDown = useCallback(() => {
    if (intervalIDRef.current === null) {
      intervalIDRef.current = setInterval(() => {
        setMouseSizeAdd((prev) => {
          if (prev < 320) {
            console.log(prev);
            return prev + 20;
          }
          return prev;
        });
      }, 255);
    }
  }, []);

  const stopMouseDown = useCallback(() => {
    if (intervalIDRef.current) {
      clearInterval(intervalIDRef.current);
      intervalIDRef.current = null;
      setMouseSizeAdd(0);
    }
  }, []);

  useEffect(() => {
    return () => stopMouseDown(); // when App is unmounted we should stop counter
  }, [stopMouseDown]);

  useEffect(() => {
    const aboutWrapper = aboutWrapperRef.current;
    if (aboutWrapper !== null) {
      const aboutWrapperRect = aboutWrapper?.getBoundingClientRect();
      setYOffset(aboutWrapperRect.y);
    }
  }, [y]);

  // const mouseAnimationVariant = {
  //   mouse: {
  //     WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
  //     WebkitMaskSize: `${size}px`,
  //     transition: { type: 'tween', ease: 'backOut', duration: 0.5 },
  //   },
  // };

  return (
    <div className='about-sections-wrapper' ref={aboutWrapperRef}>
      <motion.section
        className='content-section about-section about-section-masked'
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2 - yOffset}px`,

          WebkitMaskSize: `${size}px`,
        }}
        onMouseDown={() => {
          handleMouseDown();
        }}
        onMouseUp={() => stopMouseDown()}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.5,
          bounce: 0,
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          stopMouseDown();
        }}
      >
        <AboutContent key='masked' isMasked={true}>
          <img
            src={aboutMeBackground}
            alt=''
            className='select-none'
            draggable='false'
            onDrag={() => stopMouseDown()}
          />
        </AboutContent>
      </motion.section>
      <motion.section id='About' className='content-section about-section'>
        <AboutContent key='notMasked' />
      </motion.section>
    </div>
  );
}

const AboutContent = ({
  children,
  isMasked,
}: {
  children?: JSX.Element | JSX.Element[];
  isMasked?: boolean;
}) => {
  const [isNight] = useThemeContext();
  return (
    <motion.div className={`main-content about-content-wrapper `}>
      <div className='about-description description'>
        <ElementsTranslateYtoVisibleStaggered
          delayBetweenLines={0}
          key={isNight ? 'AboutH2Dark' : 'AboutH2Light'}
        >
          {isMasked ? (
            <h2>
              <span>Über Mich !</span>{' '}
            </h2>
          ) : (
            <LeafAnimationTitle
              amount={1}
              title='Über Mich'
              leafId='AboutLeaf'
              leafPathId='AboutLeafPath'
              delay={2.5}
            />
          )}
        </ElementsTranslateYtoVisibleStaggered>

        <div className='about-content-description-wrapper'>
          <ElementsTranslateYtoVisibleStaggered
            delayBetweenLines={0}
            startDelay={0.1}
            key={isNight ? 'AboutPara1Dark' : 'AboutPara1Light'}
          >
            <p>
              Ich heiße Khoi (er/ihm) & habe ein abgeschlossenes Studium in
              Angewandte Informatik (BSc). Nachdem Studium habe ich eine
              zeitlang als Software Engineer gearbeitet. Für mich ist nun die
              Zeit meinen beruflichen Weg als Webentwickler (Fullstack, Frontend
              oder Backend) fortzufahren.
            </p>
          </ElementsTranslateYtoVisibleStaggered>
          <ElementsTranslateYtoVisibleStaggered
            delayBetweenLines={0}
            startDelay={0.1}
            amount={0.1}
            key={isNight ? 'AboutPara2Dark' : 'AboutPara2Light'}
          >
            <p>
              Schon während des Studiums hatte ich sehr viel Spaß bei Projekten
              im Bereich Webentwicklung. So will ich liebend gerne responsiven
              oder kreativen Webseiten erstellen & auch die Nutzer-Erfahrung im
              Web verbessern.
            </p>
          </ElementsTranslateYtoVisibleStaggered>
          <ElementsTranslateYtoVisibleStaggered
            delayBetweenLines={0}
            startDelay={0.1}
            amount={0.1}
            key={isNight ? 'AboutPara3Dark' : 'AboutPara3Light'}
          >
            <p>
              Ich denke, dass Software, AI Tools oder No Code Tools in Mischung
              mit Programmer Skills den Prozess um ein vielfaches vereinfachen
              können.
            </p>
          </ElementsTranslateYtoVisibleStaggered>
        </div>
      </div>

      <div className='about-img-container about-vid about-gif'>
        {children}

        {isMasked ? (
          <>
            <AboutImage
              key={isNight ? 'aboutimgcontainerDark' : 'aboutimgcontainerLight'}
            />
          </>
        ) : (
          <>
            <div className='gray-img' />
            <AboutImage
              key={isNight ? 'aboutimgcontainerDark' : 'aboutimgcontainerLight'}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

const AboutImage = () => {
  const aboutImgRef = useRef(null);
  const inView = useInView(aboutImgRef, { amount: 0.6, once: true });

  const [mask, setMask] = useState(false);

  useEffect(() => {
    if (inView) {
      setMask(true);
    }
  }, [inView]);
  return (
    <motion.div
      className={`color-img ${mask ? 'mask-animation' : ''}`}
      id='color-about-img'
      ref={aboutImgRef}
    />
  );
};
