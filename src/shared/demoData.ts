import clothesProj from '../../src/assets/demosImg/clothes_Proj.png';

export interface DemoData {
  id: number;
  title: string;
  tech: string;
  year: string;
  src: string;
  src2: string;
  color: string;
  githubUrl?: string;
  projectLink?: string;
}

export const demos = [
  {
    id: 0,
    title: 'Demo Clothes Shop',
    tech: 'NEXT.JS, Tailwind, Sass, Html, Typescript, Prisma, Postgress, Figma',
    // tech: (
    //   <>
    //     <FaReact />
    //     <FaSass />
    //     <FaHtml5 />
    //     <BiLogoTypescript />
    //   </>
    // ),
    year: '2024',
    src: clothesProj,
    src2: clothesProj,
    color: '#000000',
    projectLink: 'https://clothes-shop-rosy.vercel.app/',
    githubUrl: 'https://github.com/khoi-ng/clothes-shop',
  },
];
