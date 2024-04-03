// -- Not in Use

import { useNavigate, useParams } from 'react-router-dom';
import { demos } from '../shared/demoData';
import NotFoundPage from './NotFoundPage';
import { DisplacementImageEffect } from '../components/ThreeFiberComponents/DisplacementImageEffect';

const DemoPage = () => {
  const params = useParams<{ demoId: string }>();
  const demoId = params.demoId;
  const navigate = useNavigate();
  if (demos[Number(demoId)]) {
    const demo = demos[Number(demoId)];
    return (
      <section className='main-content'>
        <a onClick={() => navigate('/#Projekte')}>back</a>
        <h1>Demo {demoId}</h1>
        <div style={{ viewTransitionName: `demo-${demo.id}` }}>
          <DisplacementImageEffect
            className='imgBox'
            demoData={demo}
            aspectRatio={[1.7, 1]}
          />
        </div>
      </section>
    );
  }

  return <NotFoundPage />;
};

export default DemoPage;
