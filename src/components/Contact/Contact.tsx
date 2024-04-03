import './Contact.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MeWaving from '../ThreeFiberComponents/MeWaving';
import MeshPortalCard from '../ThreeFiberComponents/MeshPortalCard';
import { TextLinesTranslateYtoVisibleDelay } from '../FramerAnimation/TextAnimations';
import { useThemeContext } from '../../util/context';
import meVidDrag from '../../assets/video/me_transparent_320x569.webm';
import skybox from '../../assets/Skybox/anime_colorful_fantasy_ghibli.webp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isNight] = useThemeContext();
  const videoFormWrapperRef = useRef<HTMLDivElement>(null);
  const formWrapperRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: 'top 60%',
          // end: 'botten center',
          onEnter: () => videoRef.current?.play(),
          onLeaveBack: (self) => self.disable(),
        },
      });
      // tl.to(formWrapperRef.current, { x: 100, duration: 1, delay: 3 }).to(
      //   formWrapperRef.current,
      //   { x: 200, duration: 1, delay: 2 }
      // );

      //first: 4.5s, second 5s, thrid: 7s

      tl.to([formWrapperRef.current, videoWrapperRef.current], {
        x: 100,
        duration: 2.5,
        delay: 5,
        // 7.5sec
      })

        .to([formWrapperRef.current, videoWrapperRef.current], {
          x: 150,
          duration: 2,
          delay: 1.3,
          // 3.3sec
        })
        .to([formWrapperRef.current, videoWrapperRef.current], {
          x: 200,
          duration: 1.3,
          delay: 4.8,
          // 3.3sec
        })
        .to(videoWrapperRef.current, {
          opacity: 0,
          duration: 0.3,
          delay: 3.2,

          // duration: 0.2,
          // delay: 2,

          // onComplete: function () {
          //   videoRef.current.pause();
          // },
        })
        .to(canvasWrapperRef.current, {
          display: 'block',
        })
        .to(canvasWrapperRef.current, {
          opacity: 1,
          duration: 0.6,
        });
    },
    { dependencies: [] }
  );

  return (
    <section
      id='Kontakt'
      className='content-section contact-section contact'
      ref={contactSectionRef}
    >
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
      </div>
      <div className='contact-content-wrapper'>
        <div className='main-content contact-content'>
          <div className='demo-title'>
            <TextLinesTranslateYtoVisibleDelay
              delayBetweenLines={0}
              startDelay={0.2}
              key={isNight ? 'ContactStartH2Dark' : 'ContactStartH2Light'}
            >
              <h2>Kontakt </h2>
            </TextLinesTranslateYtoVisibleDelay>
          </div>
          <div className='contact-container'>
            <div className='video-form-wrapper' ref={videoFormWrapperRef}>
              <div className='video-wrapper' ref={videoWrapperRef}>
                <video ref={videoRef} muted>
                  {/* <source src="test02.mov" type='video/mp4; codecs="hvc1"'/> */}
                  <source src={meVidDrag} type='video/webm' />
                </video>
              </div>

              <div className='form-wrapper'>
                <form action='' className='contact-form'>
                  {/* <div>
                  <h3>Sende mir eine Nachricht</h3>
                  <hr />
                </div> */}
                  <div className='grid gap-y-1 gap-x-4 sm:grid-cols-2'>
                    <div className='input-wrapper'>
                      <input
                        type='text'
                        name='name'
                        placeholder=' '
                        // placeholder='Name'
                        className='contact-input input-name'
                        required
                      />
                      <label>Name </label>
                    </div>
                    <div className='input-wrapper'>
                      <input
                        type='email'
                        name='email'
                        placeholder=' '
                        // placeholder='E-Mail'
                        className='contact-input input-mail'
                        required
                      />
                      <label>E-mail </label>
                    </div>

                    <div className='input-wrapper sm:col-span-2 '>
                      <textarea
                        name='message'
                        // placeholder='Nachricht'
                        className='contact-input input-message'
                        required
                      />
                      <label>Nachricht </label>
                    </div>
                  </div>
                  <div className='row contact-btn-wrapper'>
                    <button type='submit'>Senden</button>
                  </div>
                </form>
              </div>

              <div className='form-wrapper-anim' ref={formWrapperRef}>
                <form action='' className='contact-form'>
                  {/* <div>
                  <h3>Sende mir eine Nachricht</h3>
                  <hr />
                </div> */}
                  <div className='grid gap-y-1 gap-x-4 sm:grid-cols-2'>
                    <div className='input-wrapper'>
                      <input
                        type='text'
                        name='name'
                        placeholder=' '
                        // placeholder='Name'
                        className='contact-input input-name'
                        required
                      />
                      <label>Name </label>
                    </div>
                    <div className='input-wrapper'>
                      <input
                        type='email'
                        name='email'
                        placeholder=' '
                        // placeholder='E-Mail'
                        className='contact-input input-mail'
                        required
                      />
                      <label>E-mail </label>
                    </div>

                    <div className='input-wrapper sm:col-span-2 '>
                      <textarea
                        name='message'
                        // placeholder='Nachricht'
                        className='contact-input input-message'
                        required
                      />
                      <label>Nachricht </label>
                    </div>
                  </div>
                  <div className='row contact-btn-wrapper'>
                    <button type='submit'>Senden</button>
                  </div>
                </form>
              </div>
              <div className='canvas-Wrapper' ref={canvasWrapperRef}>
                <Canvas
                  className='contact-canvas'
                  camera={{ position: [0, 0, 3], fov: 50 }}
                >
                  <OrbitControls enableZoom={false} enablePan={false} />

                  <MeshPortalCard texture={skybox}>
                    <MeWaving position={[0, -1, 0]} />
                  </MeshPortalCard>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
