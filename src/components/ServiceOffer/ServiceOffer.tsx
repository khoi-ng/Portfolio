import { ElementsTranslateYtoVisibleStaggered } from '../FramerAnimation/InvisToVisAnimations';
import './ServiceOffer.scss';

// import testImg from '../../assets/test.png';

const ServiceOffer = () => {
  return (
    <section className='services-Offer content-section'>
      <div className='services-Wrapper main-content'>
        <div className='services-Header'>
          <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
            <h2>Ich biete.</h2>
          </ElementsTranslateYtoVisibleStaggered>
        </div>{' '}
        <div className='services-Offerlist'>
          <div className='service-card'>
            <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
              <div className='service-number'>01</div>
              <h3>
                <span>01</span> Entwicklung{' '}
              </h3>
            </ElementsTranslateYtoVisibleStaggered>
            <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
              <p>
                Ich programmiere deine Webseite zum Leben und bringe deine
                Besucher ein fesselndes Erlebnis.
              </p>
            </ElementsTranslateYtoVisibleStaggered>
          </div>

          <div className='service-card'>
            {' '}
            <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
              <div className='service-number'>02</div>
              <h3>
                <span>02</span> Kreativität
              </h3>
            </ElementsTranslateYtoVisibleStaggered>
            <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
              <p>
                Ich bringe neue Features in deine Webseite ein, welche diese von
                anderen herabhebt.
              </p>
            </ElementsTranslateYtoVisibleStaggered>
          </div>

          <div className='service-card'>
            <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
              <div className='service-number'>03</div>
              <h3>
                <span>03</span> Offenes Ohr
              </h3>
            </ElementsTranslateYtoVisibleStaggered>{' '}
            <ElementsTranslateYtoVisibleStaggered delayBetweenLines={0}>
              <p>
                Ideen sind Zündstoff für Innovatives. Wenn du eine Idee hast,
                lass es mich wissen.
              </p>
            </ElementsTranslateYtoVisibleStaggered>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffer;
