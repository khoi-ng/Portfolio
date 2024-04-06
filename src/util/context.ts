import React, { createContext, useContext } from 'react';

// --------------- ThemeViewMode ----------------------------------------------------------------

//  context for  Lightmode=false or darkmode=true
export const ThemeContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function getThemeLocalStorage(): boolean {
  const localStorageKey = import.meta.env.VITE_MODE;
  if (localStorageKey !== undefined) {
    const keyValue: string | null = localStorage.getItem(localStorageKey);
    if (keyValue !== null && keyValue?.trim() === 'false') {
      // if this doesnt work it will always return false
      return false;
    }
  }
  setThemeLocalStorage(true);
  return true;
}

export function setThemeLocalStorage(newMode: boolean) {
  const localStorageKey = import.meta.env.VITE_MODE;
  if (localStorageKey !== undefined) {
    localStorage.setItem(localStorageKey, JSON.stringify(newMode));
  }
  return newMode;
}

export function useThemeContext(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const modeState = useContext(ThemeContext);
  if (modeState === undefined) {
    throw new Error('useThemeContext must be used with a ThemeContext');
  }
  return modeState;
}

// --------------- Demo/Project ViewMode ----------------------------------------------------------------

export type ProjectViewModes = 'GalleryView' | 'ListView';

export const ProjectViewContext = createContext<
  | [ProjectViewModes, React.Dispatch<React.SetStateAction<ProjectViewModes>>]
  | undefined
>(undefined);

export function getProjectViewLocalStorage(): ProjectViewModes {
  const localStorageKey = import.meta.env.VITE_PROJECT_VIEW;
  if (localStorageKey !== undefined) {
    const keyValue: string | null = localStorage.getItem(localStorageKey);
    if (keyValue !== null && keyValue?.trim() === '"ListView"') {
      // console.log(keyValue?.trim());
      return 'ListView';
    }
  }
  setProjectViewStorage('GalleryView');
  return 'GalleryView';
}

export function setProjectViewStorage(
  newMode: ProjectViewModes
): ProjectViewModes {
  const localStorageKey = import.meta.env.VITE_PROJECT_VIEW;
  if (localStorageKey !== undefined) {
    localStorage.setItem(localStorageKey, JSON.stringify(newMode));
  }
  return newMode;
}

export function useProjectContext(): [
  ProjectViewModes,
  React.Dispatch<React.SetStateAction<ProjectViewModes>>
] {
  const modeState = useContext(ProjectViewContext);
  if (modeState === undefined) {
    throw new Error('useProjectContext must be used with a ProjectViewContext');
  }
  return modeState;
}
