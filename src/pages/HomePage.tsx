// import { useState } from 'react';
import {
  Navbar,
  Header,
  About,
  ServiceOffer,
  SkillStack,
  DemosProjects,
  Contact,
  Footer,
} from '../components';
import './HomePage.scss';

import {
  ThemeContext,
  getThemeLocalStorage,
  ProjectViewContext,
  getProjectViewLocalStorage,
  ProjectViewModes,
} from '../util/context';
import { useEffect, useState } from 'react';
import { useScrollToAnchor } from '../util/scrollToPageSection';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

function HomePage() {
  const [theme, setTheme] = useState<boolean>(getThemeLocalStorage);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectView, setProjectView] = useState<ProjectViewModes>(
    getProjectViewLocalStorage
  );
  useScrollToAnchor();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <ThemeContext.Provider value={[theme, setTheme]}>
          <Navbar></Navbar>

          <Header />
          <About></About>
          <ServiceOffer></ServiceOffer>
          <ProjectViewContext.Provider value={[projectView, setProjectView]}>
            <DemosProjects></DemosProjects>
          </ProjectViewContext.Provider>
          <SkillStack></SkillStack>

          <Contact></Contact>
          <Footer></Footer>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default HomePage;
