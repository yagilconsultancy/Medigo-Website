'use client';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import { ReactNode, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  CheckCircleOutline,
  ChevronRightRounded,
  VerifiedOutlined,
} from '@mui/icons-material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { pxToRem } from '../../../../common';
import { AppButton } from '../AppButton';
import { StyledLink } from '../StyledLink';

gsap.registerPlugin(ScrollTrigger);

type HeroPillProps = {
  label: string;
  value: string;
  icon: ReactNode;
};

type HeroChipProps = {
  label: string;
};

export type AppHeroShowcaseSectionProps = {
  badgeLabel?: string;
  titleLines: string[];
  titleHighlight?: string;
  titleHighlightLineIndices?: number[];
  subtitle: string;
  image: StaticImageData | string;
  imageAlt?: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  topPill?: HeroPillProps;
  bottomPill?: HeroPillProps;
  featureChips: HeroChipProps[];
  bottomStripText: string;
  enableEntranceAnimation?: boolean;
  enableParallax?: boolean;
  enablePin?: boolean;
};

function StatPill({ label, value, icon }: HeroPillProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '0.667px solid #F3F4F6',
        boxShadow:
          '0px 20px 25px 0px rgba(0,0,0,0.10), 0px 8px 10px 0px rgba(0,0,0,0.10)',
        px: { xs: 1.5, md: 2 },
        py: { xs: 1.25, md: 1.5 },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '14px',
          backgroundColor: '#EFF6FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: (theme) => theme.color.brandBlue,
          '& svg': {
            fontSize: 18,
          },
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            color: (theme) => theme.color.faqText,
            fontSize: { xs: pxToRem(12), md: pxToRem(13) },
            lineHeight: 1.5,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.color.faqTitle,
            fontSize: { xs: pxToRem(18), md: pxToRem(20) },
            lineHeight: 1.35,
            fontWeight: 700,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function FeatureChip({ label }: HeroChipProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <VerifiedOutlined
        sx={{
          color: (theme) => theme.color.brandBlue,
          fontSize: 15,
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          color: (theme) => theme.color.faqText,
          fontSize: { xs: pxToRem(12), md: pxToRem(13) },
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}

export function AppHeroShowcaseSection({
  badgeLabel,
  titleLines,
  titleHighlight,
  titleHighlightLineIndices = [],
  subtitle,
  image,
  imageAlt = '',
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  topPill,
  bottomPill,
  featureChips,
  bottomStripText,
  enableEntranceAnimation = true,
  enableParallax = false,
  enablePin = false,
}: AppHeroShowcaseSectionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const topPillRef = useRef<HTMLDivElement | null>(null);
  const bottomPillRef = useRef<HTMLDivElement | null>(null);
  const tickerTrackRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const tweens: gsap.core.Tween[] = [];
    const triggers: ScrollTrigger[] = [];

    if (root && reducedMotion) {
      const visibleTargets = root.querySelectorAll<HTMLElement>(
        '[data-hero-entrance], [data-hero-title-line], [data-hero-image="true"], [data-hero-top-pill="true"], [data-hero-bottom-pill="true"]'
      );
      gsap.set(visibleTargets, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
      });
      return () => undefined;
    }

    if (topPillRef.current) {
      tweens.push(
        gsap.to(topPillRef.current, {
          y: -8,
          duration: 2.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      );
    }

    if (bottomPillRef.current) {
      tweens.push(
        gsap.to(bottomPillRef.current, {
          y: 8,
          duration: 3.2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      );
    }

    if (enableEntranceAnimation && root && !reducedMotion) {
      const revealTargets = root.querySelectorAll<HTMLElement>(
        '[data-hero-entrance]'
      );
      const titleLines = root.querySelectorAll<HTMLElement>(
        '[data-hero-title-line]'
      );
      const image = root.querySelector<HTMLElement>('[data-hero-image="true"]');
      const topPill = root.querySelector<HTMLElement>(
        '[data-hero-top-pill="true"]'
      );
      const bottomPill = root.querySelector<HTMLElement>(
        '[data-hero-bottom-pill="true"]'
      );

      gsap.set(revealTargets, { autoAlpha: 0, y: 24 });
      if (image) {
        gsap.set(image, { autoAlpha: 0, x: 32, scale: 0.985 });
      }
      if (topPill) {
        gsap.set(topPill, { autoAlpha: 0, y: 16, scale: 0.98 });
      }
      if (bottomPill) {
        gsap.set(bottomPill, { autoAlpha: 0, y: 16, scale: 0.98 });
      }

      const tl = gsap.timeline({ delay: 0.5 });
      tl.to('[data-hero-entrance="badge"]', {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
        .to(
          titleLines,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.15'
        )
        .to(
          '[data-hero-entrance="subtitle"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .to(
          '[data-hero-entrance="actions"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.08,
          },
          '-=0.18'
        )
        .to(
          '[data-hero-entrance="chips"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
            stagger: 0.06,
          },
          '-=0.08'
        )
        .to(
          image,
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.9'
        )
        .to(
          topPill,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .to(
          bottomPill,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'power3.out',
          },
          '-=0.65'
        );

      if (enableParallax && image) {
        triggers.push(
          ScrollTrigger.create({
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(image, { y: self.progress * 24 });
            },
          })
        );
      }

      if (enablePin && window.matchMedia('(min-width: 900px)').matches) {
        triggers.push(
          ScrollTrigger.create({
            trigger: root,
            start: 'top top',
            end: '+=180%',
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          })
        );
      }
    }

    if (tickerTrackRef.current) {
      tweens.push(
        gsap.fromTo(
          tickerTrackRef.current,
          {
            xPercent: 100,
          },
          {
            xPercent: -100,
            duration: 16,
            ease: 'none',
            repeat: -1,
            force3D: true,
          }
        )
      );
    }

    return () => {
      tweens.forEach((tween) => tween.kill());
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [enableEntranceAnimation, enableParallax, enablePin]);

  return (
    <Box
      ref={rootRef}
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'linear-gradient(148.54147356003992deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)',
        pt: { xs: 4, sm: 5, md: 8 },
        pb: { xs: 4, sm: 5, md: 8 },
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 4, sm: 5, md: 8 },
        }}
      >
        <Grid container spacing={{ xs: 3.5, md: 4.5 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6.2 }}>
            <Stack spacing={{ xs: 1.5, md: 2.25 }}>
              {badgeLabel ? (
                <Box
                  data-hero-entrance="badge"
                  sx={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    borderRadius: '9999px',
                    backgroundColor: '#EFF6FF',
                    border: '0.667px solid #BEDBFF',
                    px: { xs: 1.5, md: 2 },
                    py: { xs: 0.5, md: 0.75 },
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.color.brandBlue,
                      fontSize: { xs: pxToRem(12), md: pxToRem(13) },
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    {badgeLabel}
                  </Typography>
                </Box>
              ) : null}

              <Typography
                component="h1"
                sx={{
                  color: (theme) => theme.color.faqTitle,
                  fontSize: {
                    xs: pxToRem(32),
                    sm: pxToRem(40),
                    md: pxToRem(48),
                    lg: pxToRem(60),
                  },
                  lineHeight: { xs: 1.15, md: 1.05 },
                  fontWeight: 700,
                  maxWidth: 744,
                }}
              >
                {titleLines.map((line, index) => (
                  <Box
                    key={`${line}-${index}`}
                    data-hero-title-line
                    component="span"
                    sx={{
                      opacity: 0,
                      transform: 'translateY(24px)',
                      display: 'block',
                      color:
                        titleHighlightLineIndices.includes(index) ||
                        (index === titleLines.length - 1 && titleHighlight)
                          ? (theme) => theme.color.brandBlue
                          : 'inherit',
                    }}
                  >
                    {line}
                    {index === titleLines.length - 1 && titleHighlight
                      ? ` ${titleHighlight}`
                      : null}
                  </Box>
                ))}
              </Typography>

              <Typography
                data-hero-entrance="subtitle"
                sx={{
                  opacity: 0,
                  transform: 'translateY(24px)',
                  color: (theme) => theme.color.faqText,
                  fontSize: {
                    xs: pxToRem(16),
                    sm: pxToRem(18),
                    md: pxToRem(20),
                  },
                  lineHeight: 1.63,
                  fontWeight: 400,
                  maxWidth: 655,
                }}
              >
                {subtitle}
              </Typography>

              <Stack
                data-hero-entrance="actions"
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, md: 2 }}
                sx={{
                  pt: { xs: 0.5, md: 1 },
                  opacity: 0,
                  transform: 'translateY(24px)',
                }}
              >
                <AppButton
                  component={StyledLink}
                  href={primaryActionHref}
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#155DFC',
                    color: '#FFFFFF',
                    borderRadius: '9999px',
                    minHeight: { xs: 44, md: 59 },
                    minWidth: { xs: '100%', sm: 188, md: 198 },
                    px: { xs: 2.5, md: 3.2 },
                    boxShadow:
                      '0px 10px 15px 0px rgba(190,219,255,0.5), 0px 4px 6px 0px rgba(190,219,255,0.5)',
                    '&:hover': {
                      border: '1.481px solid #155DFC',
                      backgroundColor: '#FFFFFF',
                      color: '#155DFC',
                    },
                  }}
                >
                  {primaryActionLabel}
                </AppButton>

                <AppButton
                  component={StyledLink}
                  href={secondaryActionHref}
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '9999px',
                    minHeight: { xs: 44, md: 59 },
                    minWidth: { xs: '100%', sm: 150, md: 163 },
                    px: { xs: 2.5, md: 3.2 },
                    borderColor: '#155DFC',
                    color: (theme) => theme.color.brandBlue,
                    boxShadow: 'none',
                    border: '1.481px solid #155DFC',
                    '&:hover': {
                      backgroundColor: '#155DFC',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  {secondaryActionLabel}
                </AppButton>
              </Stack>

              <Stack
                data-hero-entrance="chips"
                direction="row"
                spacing={{ xs: 1.5, md: 2.5 }}
                flexWrap="wrap"
                sx={{
                  pt: { xs: 0.5, md: 0.75 },
                  opacity: 0,
                  transform: 'translateY(24px)',
                }}
              >
                {featureChips.map((chip) => (
                  <FeatureChip key={chip.label} label={chip.label} />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5.8 }}>
            <Box
              data-hero-image="true"
              sx={{
                position: 'relative',
                maxWidth: 592,
                mx: { xs: 'auto', md: 0 },
                minHeight: { xs: 360, sm: 430, md: 500 },
                opacity: 0,
                transform: 'translateX(32px) scale(0.985)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 360, sm: 430, md: 500 },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                }}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 592px"
                  priority
                />
              </Box>

              {topPill ? (
                <Box
                  ref={topPillRef}
                  data-hero-top-pill="true"
                  sx={{
                    position: 'absolute',
                    right: { xs: 12, md: -10 },
                    top: { xs: 12, md: -20 },
                    zIndex: 2,
                    opacity: 0,
                    transform: 'translateY(16px) scale(0.98)',
                  }}
                >
                  <StatPill
                    label={topPill.label}
                    value={topPill.value}
                    icon={topPill.icon}
                  />
                </Box>
              ) : null}

              {bottomPill ? (
                <Box
                  ref={bottomPillRef}
                  data-hero-bottom-pill="true"
                  sx={{
                    position: 'absolute',
                    left: { xs: 12, md: -24 },
                    bottom: { xs: 12, md: -18 },
                    zIndex: 2,
                    opacity: 0,
                    transform: 'translateY(16px) scale(0.98)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1.5,
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFF',
                      border: '0.741px solid #F3F4F6',
                      boxShadow:
                        '0px 20px 25px 0px rgba(0,0,0,0.10), 0px 8px 10px 0px rgba(0,0,0,0.10)',
                      px: { xs: 1.5, md: 3 },
                      py: { xs: 1.25, md: 1.5 },
                      minWidth: { xs: 180, md: 232 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        borderRadius: '9999px',
                        backgroundColor: '#DCFCE7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#22C55E',
                        '& svg': {
                          fontSize: { xs: 22, md: 24 },
                        },
                      }}
                    >
                      {bottomPill.icon}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: (theme) => theme.color.faqTitle,
                          fontSize: { xs: pxToRem(13), md: pxToRem(16) },
                          lineHeight: 1.5,
                          fontWeight: 700,
                        }}
                      >
                        {bottomPill.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: (theme) => theme.color.faqText,
                          fontSize: { xs: pxToRem(11), md: pxToRem(14) },
                          lineHeight: 1.4,
                        }}
                      >
                        {bottomPill.value}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          borderTop: '0.741px solid #E5E7EB',
          borderBottom: '0.741px solid #E5E7EB',
          overflow: 'hidden',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2.5, md: 3 },
        }}
      >
        <Box
          sx={{
            maxWidth: '1000px',
            mx: 'auto',
            overflow: 'hidden',
          }}
        >
          <Typography
            ref={tickerTrackRef}
            component="span"
            sx={{
              display: 'inline-block',
              color: (theme) => theme.color.faqTitle,
              fontSize: {
                xs: pxToRem(14),
                sm: pxToRem(16),
                md: pxToRem(18),
              },
              lineHeight: 1.5,
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {bottomStripText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
