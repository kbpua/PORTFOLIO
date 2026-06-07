import { useCallback, type MouseEvent } from 'react';
import { observedSections } from '../data/navigation';
import { useActiveSection, scrollToSection } from './useActiveSection';

export function useSectionNav() {
  const activeSection = useActiveSection(observedSections);

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      event.preventDefault();
      scrollToSection(sectionId);
      window.history.replaceState(null, '', `#${sectionId}`);
    },
    []
  );

  return { activeSection, handleNavClick };
}
