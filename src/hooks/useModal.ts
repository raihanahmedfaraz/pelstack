'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';

interface AnimationConfig {
  opacity: number;
  y: number;
  duration: number;
  ease: string;
}

interface UseModalConfig {
  openAnimation?: AnimationConfig;
  closeAnimation?: AnimationConfig;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
}

interface UseModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDialogElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const defaultConfig: UseModalConfig = {
  openAnimation: {
    opacity: 1,
    y: 0,
    duration: 0.3,
    ease: 'power2.out',
  },
  closeAnimation: {
    opacity: 0,
    y: -50,
    duration: 0.2,
    ease: 'power2.in',
  },
  closeOnEscape: true,
  closeOnOverlayClick: true,
};

export const useModal = (config: UseModalConfig = {}): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const mergedConfig = { ...defaultConfig, ...config };

  // Setup GSAP context and get contextSafe function
  const { contextSafe } = useGSAP(() => {
    // Register any additional GSAP plugins here if needed
  });

  // Animation functions wrapped with contextSafe
  const animateOpen = contextSafe(() => {
    if (isOpen || isAnimating.current || !modalRef.current) return;

    isAnimating.current = true;
    setIsOpen(true);
    
    // Store the currently focused element to restore later
    previousActiveElement.current = document.activeElement as HTMLElement;
    
    document.body.style.overflow = 'hidden';

    const modal = modalRef.current;
    const content = contentRef.current;

    modal.classList.remove('modal-close');
    modal.classList.add('modal-open');
    
    // Set ARIA attributes
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');

    if (content && mergedConfig.openAnimation) {
      // Set initial state for opening animation
      gsap.set(content, {
        opacity: 0,
        y: -50,
      });

      gsap.to(content, {
        ...mergedConfig.openAnimation,
        onComplete: () => {
          isAnimating.current = false;
          // Focus the modal content after animation
          if (contentRef.current) {
            const focusableElement = contentRef.current.querySelector<HTMLElement>(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            focusableElement?.focus();
          }
        },
      });
    } else {
      isAnimating.current = false;
    }
  });

  const animateClose = contextSafe(async () => {
    if (!isOpen || isAnimating.current || !modalRef.current) return;

    isAnimating.current = true;
    document.body.style.overflow = 'auto';

    const modal = modalRef.current;
    const content = contentRef.current;

    try {
      if (content && mergedConfig.closeAnimation) {
        await gsap.to(content, {
          ...mergedConfig.closeAnimation,
          onComplete: () => {
            modal.classList.remove('modal-open');
            modal.classList.add('modal-close');
            modal.removeAttribute('aria-modal');
            modal.removeAttribute('role');
            setIsOpen(false);
            isAnimating.current = false;
            
            // Restore focus to the previously focused element
            if (previousActiveElement.current) {
              previousActiveElement.current.focus();
              previousActiveElement.current = null;
            }
          },
        });
      } else {
        modal.classList.remove('modal-open');
        modal.classList.add('modal-close');
        modal.removeAttribute('aria-modal');
        modal.removeAttribute('role');
        setIsOpen(false);
        isAnimating.current = false;
        
        // Restore focus
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
          previousActiveElement.current = null;
        }
      }
    } catch (error) {
      console.error('Error closing modal:', error);
      modal.classList.remove('modal-open');
      modal.classList.add('modal-close');
      modal.removeAttribute('aria-modal');
      modal.removeAttribute('role');
      setIsOpen(false);
      isAnimating.current = false;
    }
  });

  const openModal = useCallback(() => {
    animateOpen();
  }, [animateOpen]);

  const closeModal = useCallback(() => {
    animateClose();
  }, [animateClose]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && mergedConfig.closeOnEscape) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal, mergedConfig.closeOnEscape]);

  // Handle overlay click
  useEffect(() => {
    const handleOverlayClick = (e: MouseEvent) => {
      if (
        isOpen &&
        mergedConfig.closeOnOverlayClick &&
        modalRef.current &&
        contentRef.current &&
        e.target === modalRef.current &&
        !contentRef.current.contains(e.target as Node)
      ) {
        closeModal();
      }
    };

    const modalElement = modalRef.current;
    if (isOpen && modalElement) {
      modalElement.addEventListener('click', handleOverlayClick);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('click', handleOverlayClick);
      }
    };
  }, [isOpen, closeModal, mergedConfig.closeOnOverlayClick]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    modalRef,
    contentRef,
  };
};
