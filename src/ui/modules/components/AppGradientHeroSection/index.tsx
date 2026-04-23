'use client';

import { ChevronRightRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import { pxToRem } from '../../../../common';
import { AppButton } from '../AppButton';
import { StyledLink } from '../StyledLink';

type AppGradientHeroSectionProps = {
  badgeLabel?: string;
  titleLines: string[];
  titleHighlight?: string;
  subtitle: string;
  backgroundImage: string;
  showBlurCircles?: boolean;
  minHeight?: number;
  buttonLabel?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  buttonEndIcon?: ReactNode;
  entranceDelayMs?: number;
};

export function AppGradientHeroSection({
  badgeLabel,
  titleLines,
  titleHighlight,
  subtitle,
  backgroundImage,
  showBlurCircles = false,
  minHeight = 320,
  buttonLabel,
  buttonHref,
  buttonOnClick,
  buttonEndIcon = <ChevronRightRounded />,
  entranceDelayMs = 500,
}: AppGradientHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const timeout = window.setTimeout(() => setIsVisible(true), entranceDelayMs);
    return () => window.clearTimeout(timeout);
  }, [entranceDelayMs]);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight,
        backgroundImage,
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 8, sm: 10, md: 14 },
      }}
    >
      {showBlurCircles ? (
        <>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: 220, md: 384 },
              height: { xs: 220, md: 384 },
              borderRadius: '9999px',
              backgroundColor: '#BEDBFF',
              filter: 'blur(64px)',
              opacity: 0.2,
              right: { xs: '-80px', md: '64px' },
              top: { xs: '-30px', md: 0 },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: { xs: 220, md: 384 },
              height: { xs: 220, md: 384 },
              borderRadius: '9999px',
              backgroundColor: '#C6D2FF',
              filter: 'blur(64px)',
              opacity: 0.2,
              left: { xs: '-100px', md: 0 },
              top: { xs: '64px', md: '96px' },
            }}
          />
        </>
      ) : null}

      <Stack
        spacing={{ xs: 1.5, md: 2 }}
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1232,
          mx: 'auto',
          textAlign: 'center',
          pt: { xs: 0, md: 0 },
        }}
      >
        {badgeLabel ? (
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 600ms ease, transform 600ms ease',
              borderRadius: '9999px',
              backgroundColor: '#EFF6FF',
              border: '0.667px solid #BEDBFF',
              px: { xs: 2, md: 2.5 },
              py: { xs: 0.75, md: 0.9 },
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
          component="h2"
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 650ms ease, transform 650ms ease',
            color: (theme) => theme.color.faqTitle,
            fontSize: {
              xs: pxToRem(28),
              sm: pxToRem(36),
              md: pxToRem(48),
              lg: pxToRem(60),
            },
            lineHeight: { xs: 1.12, md: 1.05 },
            fontWeight: 700,
            maxWidth: titleLines.length > 1 ? 900 : 'none',
          }}
        >
          {titleLines.map((line, index) => (
            <Box
              key={line}
              component="span"
              sx={{
                display: 'block',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 650ms ease, transform 650ms ease',
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
              }}
            >
              {line}
              {index === titleLines.length - 1 && titleHighlight ? (
                <Box
                  component="span"
                  sx={{ color: (theme) => theme.color.brandBlue }}
                >
                  {` ${titleHighlight}`}
                </Box>
              ) : null}
            </Box>
          ))}
        </Typography>

        <Typography
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 650ms ease, transform 650ms ease',
            transitionDelay: isVisible ? `${titleLines.length * 120}ms` : '0ms',
            color: (theme) => theme.color.faqText,
            fontSize: { xs: pxToRem(16), sm: pxToRem(18), md: pxToRem(20) },
            lineHeight: 1.45,
            fontWeight: 400,
            maxWidth: 740,
          }}
        >
          {subtitle}
        </Typography>

        {buttonLabel && (buttonHref || buttonOnClick) ? (
          <Box
            sx={{
              pt: { xs: 0.5, md: 1 },
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 650ms ease, transform 650ms ease',
              transitionDelay: isVisible
                ? `${titleLines.length * 120 + 120}ms`
                : '0ms',
            }}
          >
            <AppButton
              component={buttonHref ? StyledLink : 'button'}
              href={buttonHref}
              onClick={buttonOnClick}
              endIcon={buttonEndIcon}
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#1E60FF',
                color: '#FFFFFF',
                borderRadius: '9999px',
                px: { xs: 2.5, md: 3.5 },
                py: { xs: 1.25, md: 1.5 },
                minHeight: { xs: 44, md: 58 },
                boxShadow:
                  '0px 10px 15px 0px rgba(190,219,255,0.5), 0px 4px 6px 0px rgba(190,219,255,0.5)',
                '&:hover': {
                  backgroundColor: '#155DFC !important',
                  color: '#FFFFFF',
                },
                '& .MuiButton-endIcon': {
                  ml: 0.5,
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 18,
                },
              }}
            >
              {buttonLabel}
            </AppButton>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}
