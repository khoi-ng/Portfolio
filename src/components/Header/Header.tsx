import './Header.scss';

import leaf1 from '../../assets/leafs/leaf.webp';
// import { FaRegLightbulb } from 'react-icons/fa';
// import { BsLightbulbOffFill } from 'react-icons/bs';
import { TbBulbOff, TbBulb } from 'react-icons/tb';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TextLinesTranslateYtoVisibleDelay } from '../FramerAnimation/TextAnimations';

// ------------------ Light Mode ------------------------

import parallaxForeGroundLeafs from '../../assets/day/parallaxLeafsRight.webp';
import parallaxForeGroundLeafsLogo from '../../assets/day/parallaxLeafsLeft.webp';
import parallaxCouch from '../../assets/day/parallaxCouchAndTable.webp';
import parallaxMe from '../../assets/day/parallaxMe.webp';
import parallaxFurniture from '../../assets/day/parallaxFurniture.webp';
import parallaxRoomBackground from '../../assets/day/parallaxRoom.webp';

// ------------------ Dark Mode ------------------------
import parallaxForeGroundLeafsDark from '../../assets/night/parallaxLeafsRight.webp';
import parallaxForeGroundLeafsLogoDark from '../../assets/night/parallaxLeafsLeft.webp';
import parallaxCouchDark from '../../assets/night/parallaxCouchandTable.webp';
import parallaxMeDark from '../../assets/night/parallaxMe.webp';
import parallaxFurnitureDark from '../../assets/night/parallaxFurnitare.webp';
import parallaxRoomBackgroundDark from '../../assets/night/parallaxRoomBehind.webp';
import parallaxTrash from '../../assets/night/parallaxTrash.webp';
import { useThemeContext, setThemeLocalStorage } from '../../util/context';

const Leaf = ({
  xPath,
  duration,
  repeatDelay,
  delay,
  zindex,
}: {
  xPath: number[];
  duration: number;
  repeatDelay: number;
  delay: number;
  zindex: number;
}) => {
  const variantsLeaf = {
    initial: { rotate: Math.random() * 360 },
    animate: {
      rotate: Math.random() * 360,
      x: xPath,
      y: 'calc(100vh + 50px)',
      transition: {
        ease: 'easeOut',
        duration,
        repeat: Infinity,
        delay,
        repeatDelay,
      },
    },
  };

  return (
    <motion.div
      className={`leaf z-${zindex}`}
      initial='initial'
      animate='animate'
      variants={variantsLeaf}
      style={{
        backgroundImage: `url("${leaf1}")`,
      }}
    ></motion.div>
  );
};

const Header = () => {
  const [isNight] = useThemeContext();
  return (
    <>
      <section
        id='Home'
        className='header-section'
        style={{
          background: `${
            isNight
              ? 'linear-gradient(180deg, #132c4c, #7e6140)'
              : 'linear-gradient(90deg, #434166, #E7CCA9)'
          }`,
        }}
      >
        <HeaderParallax />
      </section>
    </>
  );
};

const HeaderParallax = () => {
  const [isNight, setIsNight] = useThemeContext();

  const imgDivLampRef = useRef<HTMLDivElement>(null);
  const [lampBtnPosition, setlampBtnPosition] = useState({ x: 0, y: 0 });
  const [lampBtnSize, setlampBtnSize] = useState({ width: 0, height: 0 });
  const [lampBtnIconSize, setlampBtnIconSize] = useState(0);

  useEffect(() => {
    // all of this logic is, so that the lamp Btn follows the lamp on the Header background Image & resizes porportinally
    // https://stackoverflow.com/a/15838104/8842987
    const imgDivLamp = imgDivLampRef.current;
    const imageSize = { x: 1522, y: 744 };
    const targetPosition = { x: 990, y: 330 };
    const targetSize = { width: 120, height: 90 };
    const targetFontSize = 65;

    function updateBtnPos() {
      const lampRect = imgDivLamp?.getBoundingClientRect();
      const rectWidth = lampRect?.width;
      const rectHeight = lampRect?.height;

      if (rectWidth !== undefined && rectHeight !== undefined) {
        // Get largest dimension increase
        const xScale = rectWidth / imageSize.x;
        const yScale = rectHeight / imageSize.y;

        let scale;
        let yOffset = 0;
        let xOffset = 0;

        if (xScale > yScale) {
          // The image fits perfectly in x axis, stretched in y
          scale = xScale;
          yOffset = (rectHeight - imageSize.y * scale) / 2;
        } else {
          // The image fits perfectly in y axis, stretched in x
          scale = yScale;
          xOffset = (rectWidth - imageSize.x * scale) / 2;
        }

        const newx = targetPosition.x * scale + xOffset;
        const newy = targetPosition.y * scale + yOffset;
        const newWidth = targetSize.width * scale;
        const newHeight = targetSize.height * scale;
        // console.log(newx);

        setlampBtnPosition({ x: newx - newWidth / 2, y: newy - newHeight / 2 });
        setlampBtnSize({ width: newWidth, height: newHeight });
        setlampBtnIconSize(targetFontSize * scale);
      }
    }
    updateBtnPos();

    window.addEventListener('resize', updateBtnPos);
    return () => {
      window.removeEventListener('resize', updateBtnPos);
    };
  }, []);

  const scrollParallaxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollParallaxRef,
    offset: ['start start', 'end start'],
  });

  function YTransforms(beginP: string, EndP: string) {
    return useTransform(scrollYProgress, [0, 1], [beginP, EndP]);
  }

  // const parallaxForeGroundLeafsY = YTransforms('0%', '100%');
  // const parallaxPlantLeftY = YTransforms('0%', '30%');
  const parallaxCouchY = YTransforms('0%', '50%');
  const parallaxTextY = YTransforms('0%', '600%');
  const opacityTextY = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);
  const parallaxBookShelfY = YTransforms('0%', '40%');
  const parallaxMeY = YTransforms('0%', '25%');
  const parallaxRoomY = YTransforms('0%', '45%');
  const parallaxTrashY = YTransforms('0%', '150%');

  return (
    <div
      className='hero-container'
      style={{
        position: 'relative',
      }}
    >
      <div
        ref={scrollParallaxRef}
        className='header-parallax inset-0 z-0 grid place-content-center pointer-events-none'
      >
        <div className='svg-wrapper'>
          {/* <svg
            className='svg-section-transition'
            width='1440'
            height='292'
            viewBox='0 0 1440 292'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 195.5C71.5248 142.5 283.598 70.5 559.694 206.5C835.79 342.5 1261.6 125.5 1440 0V292H0V195.5Z'
            />
          </svg> */}

          <svg
            className='svg-section-transition'
            width='1440'
            height='146'
            viewBox='0 0 1440 146'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 142C42.5 69.0002 283.598 -63 559.694 73C835.79 209 1261.6 125.5 1440 0V145.5H0V142Z'
              fill='#110F0F'
            />
          </svg>
        </div>

        <motion.div
          className='img-div inset-0 z-7'
          style={{
            backgroundImage: `url("${
              isNight ? parallaxRoomBackgroundDark : parallaxRoomBackground
            }")`,
            y: parallaxRoomY,
          }}
        />

        <div className='img-div inset-0 z-9'>
          <motion.div
            className='lamp-div img-div inset-0 z-9'
            ref={imgDivLampRef}
            style={{
              backgroundImage: `url("${
                isNight ? parallaxFurnitureDark : parallaxFurniture
              }")`,
              y: parallaxBookShelfY,
            }}
          >
            <div
              className='lamp-btn-wrapper'
              style={{ top: lampBtnPosition.y, left: lampBtnPosition.x }}
            >
              <button
                className='lamp-btn'
                onClick={() => {
                  setIsNight((prev) => setThemeLocalStorage(!prev));
                }}
                style={{
                  width: lampBtnSize.width,
                  height: lampBtnSize.height,
                }}
              >
                <div>
                  {isNight ? (
                    <div className='lightbulbText lightbulbOffText'>
                      Turn Off
                    </div>
                  ) : (
                    <div className='lightbulbText lightbulbOnText'>Turn On</div>
                  )}
                  <div
                    style={{
                      fontSize: lampBtnIconSize,
                    }}
                  >
                    {isNight ? (
                      <TbBulbOff className='lightbulbOff' />
                    ) : (
                      <TbBulb className='lightbulb' />
                    )}
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {isNight ? (
          <motion.div
            className='img-div inset-0 z-11'
            style={{
              backgroundImage: `url("${parallaxTrash}")`,
              y: parallaxTrashY,
            }}
          />
        ) : (
          <>
            <Leaf
              xPath={[1200, 1300, 1300, 1350, 1350, 1400]}
              duration={3}
              repeatDelay={5}
              delay={0}
              zindex={19}
            />
            <Leaf
              xPath={[750, 1100]}
              duration={3}
              repeatDelay={5}
              delay={1}
              zindex={19}
            />
            <Leaf
              xPath={[200, 300, 300, 350, 350, 400]}
              duration={3}
              repeatDelay={3}
              delay={1.3}
              zindex={19}
            />
          </>
        )}

        <motion.div
          className='img-div inset-0 z-11'
          style={{
            backgroundImage: `url("${isNight ? parallaxMeDark : parallaxMe}")`,
            y: parallaxMeY,
          }}
        />
        <motion.div
          className='img-div inset-0 z-13'
          key={isNight ? parallaxCouchDark : parallaxCouch}
          initial={{
            translateY: 250,
          }}
          animate={{
            translateY: 0,
          }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url("${
              isNight ? parallaxCouchDark : parallaxCouch
            }")`,
            y: parallaxCouchY,
          }}
        />

        <motion.div
          className='img-div inset-0 z-19 foreground-leafs-right'
          key={isNight ? parallaxForeGroundLeafsDark : parallaxForeGroundLeafs}
          initial={{
            translateX: 250,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url("${
              isNight ? parallaxForeGroundLeafsDark : parallaxForeGroundLeafs
            }")`,
            // y: parallaxForeGroundLeafsY,
            position: 'fixed',
            backgroundPosition: 'right',
          }}
        />

        <motion.div
          className='img-div inset-0 z-19'
          key={
            isNight
              ? parallaxForeGroundLeafsLogoDark
              : parallaxForeGroundLeafsLogo
          }
          initial={{
            translateX: -250,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url("${
              isNight
                ? parallaxForeGroundLeafsLogoDark
                : parallaxForeGroundLeafsLogo
            }")`,
            // y: parallaxForeGroundLeafsY,
            position: 'fixed',
            backgroundPosition: 'left',
          }}
        />
        <motion.div
          // key={isNight ? 'HeaderTitleDark' : 'HeaderTitleLight'}
          className='text-Header font-bold text-4xl  absolute z-22 '
          style={{
            y: parallaxTextY,
            opacity: opacityTextY,
          }}
        >
          <TextLinesTranslateYtoVisibleDelay
            key={isNight ? 'HeaderTitleDark' : 'HeaderTitleLight'}
            delayBetweenLines={0.1}
            startDelay={0.5}
          >
            <p>Hey, ich heiße</p>
            <h2>DUY KHOI NGUYEN</h2>
            <p>Developer, Web Enthusiast</p>
          </TextLinesTranslateYtoVisibleDelay>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
