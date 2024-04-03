import { useState } from 'react';
import { SidebarButton, Sidebar } from './Sidebar/Sidebar';
import './Navbar.scss';

const Navbar = () => {
  const navItems: string[] = ['Home', 'About', 'Projekte', 'Kontakt'];

  const [openSidebar, setOpenSidebar] = useState(false);

  // const [currentActive, setCurrentActive] = useState<string>('');

  // const scrollToElement = (
  //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  //   id: string
  // ) => {
  //   event.preventDefault();
  //   // setCurrentActive(id);
  //   const element = document.getElementById(id);
  //   element?.scrollIntoView({ behavior: 'smooth' });
  // };

  // if section is full on page set Nav active
  // useEffect(() => {
  //   const sections = document.querySelectorAll('section');

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       if (entry.isIntersecting) {
  //         setCurrentActive(entry.target.id);
  //         console.log('entry', entry.target);
  //       }
  //     },
  //     {
  //       threshold: [1],
  //     }
  //   );
  //   sections.forEach((section) => observer.observe(section));

  //   return () => {
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // });

  return (
    <nav className='navbar flex  w-full '>
      <div className='navbar-logo flex justify-start items-center w-full font-bold text-xl '>
        <a className='logo bg-black' href='#'>
          DUY KHOI NGUYEN
        </a>
      </div>
      <ul className='navbar-items list-none flex gap-14 font-bold'>
        {navItems.map((navlink) => (
          <li key={`link-${navlink}`}>
            <a
              className={
                // navlink === currentActive ? 'nav-Link active' :
                'nav-Link'
              }
              href={`#${navlink}`}
              // onClick={(e) => scrollToElement(e, navlink)}
            >
              {navlink}
            </a>
            <div className='link-hover-deco' />
          </li>
        ))}
      </ul>

      <SidebarButton setOpenSidebar={setOpenSidebar} open={openSidebar} />
      {openSidebar ? (
        <Sidebar open={openSidebar} items={navItems}></Sidebar>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
