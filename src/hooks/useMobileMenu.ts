'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseMobileMenuReturn {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  activeSubmenu: string | null;
  toggleSubmenu: (menuId: string) => void;
  closeAllSubmenus: () => void;
}

/**
 * Custom hook for managing mobile menu state and animations
 * Handles sidebar open/close state, submenu toggles, and body scroll lock
 */
export const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Open mobile menu
  const openMenu = useCallback(() => {
    setIsOpen(true);
    // Store scroll position
    const scrollY = window.scrollY;
    // Prevent body scroll when menu is open (desktop and tablet only)
    if (window.innerWidth >= 768) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    }
  }, []);

  // Close mobile menu
  const closeMenu = useCallback(() => {
    const scrollY = document.body.style.top;
    setIsOpen(false);
    // Restore body scroll when menu is closed
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('width');
    document.body.style.removeProperty('top');
    // Restore scroll position
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    // Close all submenus when main menu closes
    setActiveSubmenu(null);
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, closeMenu, openMenu]);

  // Toggle submenu
  const toggleSubmenu = useCallback((menuId: string) => {
    setActiveSubmenu((current) => (current === menuId ? null : menuId));
  }, []);

  // Close all submenus
  const closeAllSubmenus = useCallback(() => {
    setActiveSubmenu(null);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeMenu]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('width');
      document.body.style.removeProperty('top');
    };
  }, []);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    activeSubmenu,
    toggleSubmenu,
    closeAllSubmenus,
  };
};
