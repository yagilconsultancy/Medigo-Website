'use client';

import { Box, type SxProps, type Theme } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';

type AppRevealOnScrollProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  threshold?: number;
  sx?: SxProps<Theme>;
};

export function AppRevealOnScroll({
  children,
  delay = 0,
  distance = 20,
  threshold = 0.15,
  sx,
}: AppRevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Box
      ref={ref}
      sx={[
        {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
          transition: 'opacity 500ms ease, transform 500ms ease',
          transitionDelay: isVisible ? `${delay}ms` : '0ms',
          willChange: 'opacity, transform',
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {children}
    </Box>
  );
}
