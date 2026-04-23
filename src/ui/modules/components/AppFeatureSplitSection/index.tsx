'use client';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { AppButton } from '../AppButton';
import { pxToRem } from '../../../../common';

type FeatureItem = {
  icon: ReactNode;
  title: string;
  description?: string;
  iconBackground?: string;
};

type AppFeatureSplitSectionProps = {
  step?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
  buttonLabel: string;
  buttonHref: string;
  media: ReactNode;
  reverse?: boolean;
  mobileReverse?: boolean;
  backgroundColor?: string;
};

export function AppFeatureSplitSection({
  step,
  eyebrow,
  title,
  description,
  features,
  buttonLabel,
  buttonHref,
  media,
  reverse = false,
  mobileReverse = false,
  backgroundColor = '#FFFFFF',
}: AppFeatureSplitSectionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

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
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const transitionBase = {
    transition: 'opacity 500ms ease, transform 500ms ease',
    willChange: 'opacity, transform',
  } as const;

  const delayed = (delay: number) => ({
    transitionDelay: isVisible ? `${delay}ms` : '0ms',
  });

  return (
    <Box
      ref={rootRef}
      component="section"
      sx={{
        backgroundColor,
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 6, sm: 7, md: 9 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(22px)',
        transition: 'opacity 650ms ease, transform 650ms ease',
        willChange: 'opacity, transform',
      }}
    >
      <Box
        sx={{
          maxWidth: 1380,
          mx: 'auto',
        }}
      >
        <Grid
          container
          direction={{
            xs: mobileReverse ? 'column-reverse' : 'column',
            md: reverse ? 'row-reverse' : 'row',
          }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={{ xs: 2.5, md: 3 }}>
              {eyebrow ? (
                <Typography
                  component="p"
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                    ...transitionBase,
                    ...delayed(0),
                    color: (theme) => theme.color.brandBlue,
                    fontSize: pxToRem(14),
                    lineHeight: 1.5,
                    fontWeight: 700,
                    letterSpacing: '0.7px',
                    textTransform: 'uppercase',
                  }}
                >
                  {eyebrow}
                </Typography>
              ) : null}

              <Stack
                direction="row"
                spacing={1.5}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                sx={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                  ...transitionBase,
                  ...delayed(90),
                }}
              >
                {step ? (
                  <Box
                    sx={{
                      width: { xs: 32, sm: 40, md: 48 },
                      height: { xs: 32, sm: 40, md: 48 },
                      borderRadius: '9999px',
                      backgroundColor: (theme) => theme.color.brandBlue,
                      boxShadow:
                        '0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mt: { xs: 0.25, md: 0 },
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: '#FFFFFF',
                        fontSize: { xs: pxToRem(16), md: pxToRem(18) },
                        lineHeight: 1,
                        fontWeight: 700,
                      }}
                    >
                      {step}
                    </Typography>
                  </Box>
                ) : null}

                <Typography
                  component="h2"
                  sx={{
                    color: (theme) => theme.color.faqTitle,
                    fontSize: {
                      xs: pxToRem(20),
                      sm: pxToRem(28),
                      md: pxToRem(36),
                    },
                    lineHeight: 1.15,
                    fontWeight: 700,
                    maxWidth: 620,
                  }}
                >
                  {title}
                </Typography>
              </Stack>

              {description ? (
                <Typography
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                    ...transitionBase,
                    ...delayed(160),
                    color: (theme) => theme.color.faqText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(17),
                      lg: pxToRem(20),
                    },
                    lineHeight: 1.6,
                    fontWeight: 400,
                    maxWidth: 584,
                  }}
                >
                  {description}
                </Typography>
              ) : null}

              <Stack spacing={{ xs: 2, md: 3 }}>
                {features.map((feature, index) => (
                  <Stack
                    key={feature.title}
                    direction="row"
                    spacing={{ xs: 1.5, md: 2 }}
                    alignItems="flex-start"
                    sx={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(14px)',
                      ...transitionBase,
                      ...delayed(220 + index * 120),
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 36, md: 48 },
                        height: { xs: 36, md: 48 },
                        borderRadius: { xs: 1.5, md: 1.25 },
                        backgroundColor:
                          feature.iconBackground ?? 'rgba(219, 234, 254, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: (theme) => theme.color.brandBlue,
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        component="h3"
                        sx={{
                          color: (theme) => theme.color.faqTitle,
                          fontSize: { xs: pxToRem(16), md: pxToRem(18) },
                          lineHeight: 1.4,
                          fontWeight: 700,
                        }}
                      >
                        {feature.title}
                      </Typography>

                      {feature.description ? (
                        <Typography
                          sx={{
                            mt: 0.5,
                            color: (theme) => theme.color.faqText,
                            fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                            lineHeight: 1.5,
                            fontWeight: 400,
                            maxWidth: 545,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      ) : null}
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Box>
                <AppButton
                  component="a"
                  href={buttonHref}
                  variant="contained"
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                    ...transitionBase,
                    ...delayed(220 + features.length * 120 + 80),
                    minWidth: { xs: 160, md: 184 },
                    height: { xs: 48, md: 52 },
                    borderRadius: '9999px',
                    px: 3,
                    backgroundColor: (theme) => theme.color.brandBlue,
                    color: '#FFFFFF',
                    boxShadow:
                      '0px 4px 6px 0px rgba(190, 219, 255, 1), 0px 2px 4px 0px rgba(190, 219, 255, 1)',
                    fontSize: { xs: pxToRem(15), md: pxToRem(16) },
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: (theme) => theme.color.brandBlue,
                    },
                  }}
                >
                  {buttonLabel}
                </AppButton>
              </Box>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(22px)',
              ...transitionBase,
              ...delayed(150),
            }}
          >
            {media}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
