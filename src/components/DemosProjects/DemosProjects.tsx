// import { motion } from 'framer-motion';
import './DemosProjects.scss';
import { TextLinesTranslateYtoVisibleDelay } from '../FramerAnimation/TextAnimations';
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
        <div className='main-content demo-content-wrapper'>
          <div className='demo-title'>
            <TextLinesTranslateYtoVisibleDelay
              delayBetweenLines={0}
              startDelay={0.2}
              key={isNight ? 'DemosPrH2Dark' : 'DemosPrH2Light'}
            >
              <h2>Demos/Projekte </h2>
              {/* <span>Hier findest du einige Demos</span> */}
            </TextLinesTranslateYtoVisibleDelay>
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
                return <DemoCard demo={demo} index={index} />;
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
