import './LoadingScreen.scss';
import leaf from '../../assets/leafs/leaf.webp';

const LoadingScreen = () => {
  return (
    <section className='loading-section'>
      <div className='loading-content'>
        <img src={leaf} alt='' />
        <div className='loading'>Loading...</div>
      </div>
    </section>
  );
};

export default LoadingScreen;
