/**
 * Valid section IDs for navigation
 */
export type SectionId = 'home' | 'services' | 'about' | 'projects' | 'contact';

/**
 * Scrolls to a section on the page with smooth scrolling behavior.
 * 
 * @param id - The section ID to scroll to (must be a valid SectionId)
 * @returns void
 * 
 * @example
 * scrollToSection('home');
 * scrollToSection('contact');
 */
export function scrollToSection(id: SectionId): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

