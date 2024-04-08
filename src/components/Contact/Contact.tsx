import './Contact.scss';
import { ElementsTranslateYtoVisibleStaggered } from '../FramerAnimation/InvisToVisAnimations';
import { useThemeContext } from '../../util/context';
import LeafAnimationTitle from '../FramerAnimation/LeafAnimationTitle';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isNight] = useThemeContext();

  return (
    <section id='Kontakt' className='content-section contact-section contact'>
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
          />
        </svg>
      </div>
      <div className='contact-content-wrapper'>
        <div className='main-content contact-content'>
          <div className='demo-title'>
            <ElementsTranslateYtoVisibleStaggered
              delayBetweenLines={0}
              key={isNight ? 'ContactStartH2Dark' : 'ContactStartH2Light'}
            >
              <LeafAnimationTitle
                amount={1}
                title='Kontakt'
                leafId='KontaktLeaf'
                leafPathId='KontaktLeafPath'
              />
            </ElementsTranslateYtoVisibleStaggered>
          </div>

          <div className='contact-content-wrapper'>
            <div className='contact-content flex'>
              <div className='mail-img-div'>
                <div className='gray-contact-img' />
                <ContactImage
                  key={
                    isNight
                      ? 'contactimgcontainerDark'
                      : 'contactimgcontainerLight'
                  }
                />
              </div>

              <ElementsTranslateYtoVisibleStaggered
                delayBetweenLines={0}
                key={isNight ? 'contact-contentDark' : 'contact-contentLight'}
              >
                <p>Interesse geweckt ?</p>
                <p>
                  Dann schreibe mir doch eine Nachricht an{' '}
                  <a href='mailto:KhoiNG123@t-online.de'>
                    KhoiNG123@t-online.de
                  </a>
                </p>
              </ElementsTranslateYtoVisibleStaggered>
            </div>
          </div>
        </div>
      </div>

      <div className='svg-wrapper-bottom'>
        <svg
          className='svg-section-transition-bottom'
          width='1460'
          height='61'
          viewBox='0 0 1460 61'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1460 60H0.5V2C73 81.5 1460 49.5 1468 2V60Z' />
        </svg>
      </div>
    </section>
  );
};

const ContactImage = () => {
  const aboutImgRef = useRef(null);
  const inView = useInView(aboutImgRef, { amount: 0.6, once: true });

  const [mask, setMask] = useState(false);

  useEffect(() => {
    if (inView) {
      setMask(true);
    }
  }, [inView]);
  return (
    <motion.div
      className={`color-contact-img ${mask ? 'mask-animation' : ''}`}
      id='color-contact-img'
      ref={aboutImgRef}
    />
  );
};

export default Contact;
