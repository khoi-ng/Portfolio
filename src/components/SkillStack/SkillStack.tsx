import './SkillStack.scss';

import {
  FaReact,
  // FaVuejs,
  FaSass,
  FaCss3,
  FaHtml5,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
// import { TbBrandNextjs } from 'react-icons/tb';
import { TbFileTypeXml } from 'react-icons/tb';

import { EmblaOptionsType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { TextLinesTranslateYtoVisibleDelay } from '../FramerAnimation/TextAnimations';
import { useThemeContext } from '../../util/context';

const SkillStack = () => {
  const icons = [
    <FaReact color='#08D9FF' />,
    // <FaVuejs color='#6FB486' />,
    // <FaDocker />,
    <IoLogoJavascript color='#FFE008' />,
    <FaCss3 color='#3D9DD7' />,
    <FaHtml5 color='#F16A31' />,
    // <TbBrandNextjs color='#080808' />,
    <FaSass color='#CF6C9C' />,
    <TbFileTypeXml color='#DAA241' />,
  ];

  const options: EmblaOptionsType = { loop: true };
  const [isNight] = useThemeContext();

  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      isPlaying: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 0.65,
      // stopOnFocusIn: true,
    }),
  ]);

  return (
    <div id='skill-stack-section' className='content-section'>
      <div className='svg-wrapper'>
        <svg
          className='svg-section-transition'
          width='1434'
          height='73'
          viewBox='0 0 1434 73'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.868163 72.5C59.2418 25.9738 305.466 -32.4217 553.694 34.2225C833.268 109.282 1280.5 49.5 1434 0.5L1434 72.5H0.868163Z'
            // fill='#2c2929'
          />
        </svg>
        {/* <svg
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
            d='M0 142.5C42.5 69.5001 283.598 -62.5001 559.694 73.4999C835.79 209.5 1261.6 126 1440 0.499878V146H0V142.5Z'
            // fill='#110F0F'
          />
        </svg> */}
      </div>

      {/* Comment in to show my skill Stack */}
      <div className='main-content-wrapper'>
        <div className='main-content about-content-wrapper'>
          <div className='stack-description title-description'>
            <TextLinesTranslateYtoVisibleDelay
              delayBetweenLines={0}
              startDelay={0.2}
              key={isNight ? 'SkillStackH2Dark' : 'SkillStackH2Light'}
            >
              <h2>Skill Stack</h2>
            </TextLinesTranslateYtoVisibleDelay>
          </div>
          <div className='stack-carousel'>
            {/* <div className='embla' ref={emblaRef}> */}
            <div
              // className='embla__container'
              className='skill-stack-container'
            >
              {icons.map((icon, index) => (
                <div
                  className='embla__slide skill-icon'
                  key={`stackitem-${index}`}
                >
                  {icon}
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStack;
