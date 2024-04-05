import React from 'react';

import './Demo.scss';
import { DemoData } from '../../../shared/demoData';

export default function Demo({
  index,
  demo,
  setModal,
}: {
  index: number;
  demo: DemoData;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      onClick={() => console.log('open Demo')}
      className={`demo`}
    >
      <div>
        <h2>{demo.title}</h2>
        <p>{demo.tech}</p>
      </div>

      <p className='demo-year'>{demo.year}</p>
    </div>
  );
}
