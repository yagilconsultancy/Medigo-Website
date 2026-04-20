'use client';

import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { pxToRem } from '../../../../common';

type ProcessAccentColor =
  | 'processBlue'
  | 'processIndigo'
  | 'processGreen'
  | 'processPurple';

type AppProcessCardProps = {
  step: string;
  title: ReactNode;
  description: ReactNode;
  bullets: ReactNode[];
  accentColor: ProcessAccentColor;
};

export function AppProcessCard({
  step,
  title,
  description,
  bullets,
  accentColor,
}: AppProcessCardProps) {
  return (
    <Box
      sx={{
        height: '100%',
        borderRadius: '16px',
        backgroundColor: (theme) => theme.palette.background.default,
        borderLeft: (theme) => `3.704px solid ${theme.color[accentColor]}`,
        boxShadow:
          '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)',
        px: { xs: 2.5, sm: 3, md: 4.5 },
        pt: { xs: 2.5, sm: 3, md: 4 },
        pb: { xs: 2.5, sm: 3, md: 4.5 },
      }}
    >
      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={{ xs: 2, sm: 2.5, md: 3 }}
      >
        <Box
          sx={{
            width: { xs: 52, sm: 58, md: 64 },
            height: { xs: 52, sm: 58, md: 64 },
            borderRadius: '16px',
            backgroundColor: (theme) => theme.color[accentColor],
            boxShadow:
              '0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography
            component="span"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: pxToRem(26), sm: pxToRem(28), md: pxToRem(30) },
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            {step}
          </Typography>
        </Box>

        <Stack spacing={{ xs: 1.5, md: 2 }} sx={{ minWidth: 0 }}>
          <Typography
            component="h3"
            sx={{
              color: (theme) => theme.color.faqTitle,
              fontSize: { xs: pxToRem(20), sm: pxToRem(22), md: pxToRem(24) },
              lineHeight: 1.33,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: (theme) => theme.color.faqText,
              fontSize: { xs: pxToRem(15), sm: pxToRem(15.5), md: pxToRem(16) },
              lineHeight: 1.62,
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>

          <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.25 }}>
            {bullets.map((bullet, index) => (
              <Typography
                key={`${step}-bullet-${index}`}
                component="li"
                sx={{
                  color: (theme) => theme.color.faqText,
                  fontSize: {
                    xs: pxToRem(13.5),
                    sm: pxToRem(14),
                    md: pxToRem(14),
                  },
                  lineHeight: 1.4,
                  fontWeight: 400,
                  '&::marker': {
                    color: (theme) => theme.color[accentColor],
                  },
                }}
              >
                {bullet}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
