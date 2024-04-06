// import { motion } from 'framer-motion';
import './DemosProjects.scss';
import { ElementsTranslateYtoVisibleStaggered } from '../FramerAnimation/InvisToVisAnimations';
import { useProjectContext, useThemeContext } from '../../util/context';
import { useState } from 'react';
import Demo from './DemoComp/Demo';
import DemoModal from './DemoModal/Modal';

// import { FaReact, FaSass, FaHtml5 } from 'react-icons/fa';
// import { BiLogoTypescript } from 'react-icons/bi';
import ViewModeToggleBtn from './ViewModeToggleBtn/ViewModeToggleBtn';
// import displacementImg from '../../assets/10.jpg';
import { demos } from '../../shared/demoData';
import DemoCard from './DemoCard/DemoCard';

const DemosProjects = () => {
  const [isNight] = useThemeContext();
  const [demoModal, setDemoModal] = useState({ active: false, index: 0 });
  const [viewMode] = useProjectContext();

  return (
    <>
      <section id='Projekte' className='content-section demo-section'>
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
        <div className='main-content demo-content-wrapper'>
          <div className='demo-title'>
            <ElementsTranslateYtoVisibleStaggered
              delayBetweenLines={0}
              key={isNight ? 'DemosPrH2Dark' : 'DemosPrH2Light'}
            >
              <h2>
                <span>Demos/Projekte </span>
              </h2>
              {/* <span>Hier findest du einige Demos</span> */}
            </ElementsTranslateYtoVisibleStaggered>
            <div className='viewToogle-wrapper'>
              <ViewModeToggleBtn />
            </div>
          </div>

          {viewMode === 'GalleryView' ? (
            <div
              className='demos-container-gallery'
              id='demos-container-gallery'
            >
              {demos.map((demo, index) => {
                return (
                  <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
                    <DemoCard
                      demo={demo}
                      index={index}
                      key={`demo-card-key-${index}`}
                    />
                  </ElementsTranslateYtoVisibleStaggered>
                );
              })}
            </div>
          ) : (
            <div className='demos-container' id='demos-container'>
              {/* list Gallery from Olivier Larose https://www.youtube.com/watch?v=XUYQoU_HA-8 */}
              {demos.map((demo, index) => {
                return (
                  <a key={`demo-line-link-${index}`}>
                    <Demo
                      index={index}
                      demo={demo}
                      setModal={setDemoModal}
                      key={`demo-line-${index}`}
                    />
                  </a>
                );
              })}
              <DemoModal
                modal={demoModal}
                demos={demos}
                parentId='demos-container'
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DemosProjects;
