import { useState } from 'react';
import { DisplacementImageEffect } from '../../ThreeFiberComponents/DisplacementImageEffect';
import { FaGithub } from 'react-icons/fa';
import './DemoCard.scss';
import { DemoData } from '../../../shared/demoData';

const DemoCard = ({ index, demo }: { index: number; demo: DemoData }) => {
  const [hoveredProject, setHoveredProject] = useState(false);

  return (
    <div className='demo-card-wrapper' key={`demo-card-wrapper-${index}`}>
      {' '}
      <a
        className='demo-card'
        key={`demo-card-${index}`}
        onMouseEnter={() => setHoveredProject(true)}
        onMouseLeave={() => setHoveredProject(false)}
      >
        <DisplacementImageEffect
          className='imgBox'
          key={`imgBox-${index}`}
          demoData={demo}
          aspectRatio={[1.7, 1]}
          isHovered={hoveredProject}
        />
        <div className='democard-overlay'>
          <div className='democard-overlay-content'>
            <a href=''>
              <FaGithub />
            </a>
          </div>
        </div>
      </a>
      <div className='demo-card-data'>
        <span className='demo-card-description'>{demo.tech}</span>

        <h2 className='demo-card-title'>
          {' '}
          <a>{demo.title}</a>
        </h2>

        {/* <span className='demo-card-year'>{demo.year}</span> */}
      </div>
    </div>
  );
};

export default DemoCard;
