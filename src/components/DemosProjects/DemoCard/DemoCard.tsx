import { useState } from 'react';
import { DisplacementImageEffect } from '../../ThreeFiberComponents/DisplacementImageEffect';
import { FaGithub } from 'react-icons/fa';
import './DemoCard.scss';
import { DemoData } from '../../../shared/demoData';
import { GoProject } from 'react-icons/go';

const DemoCard = ({ index, demo }: { index: number; demo: DemoData }) => {
  const [hoveredProject, setHoveredProject] = useState(false);

  return (
    <div className='demo-card-wrapper' key={`demo-card-wrapper-${index}`}>
      {' '}
      <div
        className='demo-card'
        key={`demo-card-${index}`}
        onMouseEnter={() => setHoveredProject(true)}
        onMouseLeave={() => setHoveredProject(false)}
      >
        <DisplacementImageEffect
          className='imgBox'
          key={`imgBox-${index}`}
          demoData={demo}
          aspectRatio={[2, 1]}
          isHovered={hoveredProject}
        />
        <div className='democard-overlay'>
          <div className='democard-overlay-content'>
            <a href={demo.projectLink ? demo.projectLink : ''} className='mr-2'>
              <GoProject />
            </a>
            <a href={demo.githubUrl ? demo.githubUrl : ''}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className='demo-card-data'>
        <span className='demo-card-description'>{demo.tech}</span>

        <h2 className='demo-card-title'>
          <a href={demo.projectLink ? demo.projectLink : ''}>{demo.title}</a>
        </h2>

        {/* <span className='demo-card-year'>{demo.year}</span> */}
      </div>
    </div>
  );
};

export default DemoCard;
