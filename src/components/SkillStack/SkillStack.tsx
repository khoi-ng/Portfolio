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

// import { EmblaOptionsType } from 'embla-carousel';
// import AutoScroll from 'embla-carousel-auto-scroll';
// import useEmblaCarousel from 'embla-carousel-react';
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

  // const options: EmblaOptionsType = { loop: true };
  const [isNight] = useThemeContext();

  // const [emblaRef] = useEmblaCarousel(options, [
  //   AutoScroll({
  //     playOnInit: true,
  //     isPlaying: true,
  //     stopOnInteraction: false,
  //     stopOnMouseEnter: true,
  //     speed: 0.65,
  //     // stopOnFocusIn: true,
  //   }),
  // ]);

  return (
    <div id='skill-stack-section' className='content-section'>
      {/* Comment in to show my skill Stack */}
      <div className='main-content-wrapper'>
        <div className='main-content about-content-wrapper'>
          <div className='stack-description title-description'>
            <TextLinesTranslateYtoVisibleDelay
              delayBetweenLines={0}
              startDelay={0.2}
              key={isNight ? 'SkillStackH2Dark' : 'SkillStackH2Light'}
            >
              <h2>
                <span>Skill Stack</span>
              </h2>
            </TextLinesTranslateYtoVisibleDelay>
          </div>
          <div className='px-5'>
            <p>Technologien, die ich verwende um Webseiten zu erstellen.</p>
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
