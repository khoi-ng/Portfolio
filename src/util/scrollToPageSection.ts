import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToAnchor() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') window.scrollTo(0, 0);
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [pathname, hash, key]);
}
