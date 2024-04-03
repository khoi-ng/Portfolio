import placeHolderImage from '../../src/assets/demosImg/ben-white-7BiMECHFgFY-unsplash.webp';
import placeHolderImage2 from '../../src/assets/demosImg/jc-gellidon-TPZNooS1Meg-unsplash.webp';
import placeHolderImage3 from '../../src/assets/demosImg/tide_trasher_x-MPuoF1Vz9pk-unsplash.webp';
import placeHolderImage4 from '../../src/assets/demosImg/force-majeure-00tlC0Clfrs-unsplash.webp';
import placeHolderImage5 from '../../src/assets/demosImg/maksim-larin-1vy2QcZd5FU-unsplash.webp';
import placeHolderImage6 from '../../src/assets/demosImg/domino-164_6wVEHfI-unsplash.webp';

export interface DemoData {
  id: number;
  title: string;
  tech: string;
  year: string;
  src: string;
  src2: string;
  color: string;
}

export const demos = [
  {
    id: 0,
    title: 'Test Title',
    tech: 'React, Sass, Html, Typescript',
    // tech: (
    //   <>
    //     <FaReact />
    //     <FaSass />
    //     <FaHtml5 />
    //     <BiLogoTypescript />
    //   </>
    // ),
    year: '2024',
    src: placeHolderImage,
    src2: placeHolderImage2,
    color: '#000000',
  },
  {
    id: 1,
    title: 'Test Title',
    tech: 'JS, Sass, Html',
    year: '2024',
    src: placeHolderImage3,
    src2: placeHolderImage4,
    color: '#8C8C8C',
  },
  {
    id: 2,
    title: 'Test Title',
    // tech: (
    //   <>
    //     <FaReact />
    //     <FaSass />
    //     <FaHtml5 />
    //     <BiLogoTypescript />
    //   </>
    // ),
    tech: 'React, Sass, Html, Typescript',
    year: '2024',
    src: placeHolderImage5,
    src2: placeHolderImage6,
    color: '#EFE8D3',
  },
];
