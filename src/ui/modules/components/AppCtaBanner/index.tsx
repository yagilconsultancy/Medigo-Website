'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { AppButton } from '../AppButton';
import phoneTrack from '../../../../ui/assets/images/phone-track.png';
import { pxToRem } from '../../../../common';
import { StyledImage } from '../StyledImage';

type AppCtaBannerProps = {
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionHref: string;
};

export function AppCtaBanner({
  title,
  description,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionHref,
  secondaryActionHref,
}: AppCtaBannerProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'linear-gradient(159.68852709271874deg, rgb(67, 45, 215) 0%, rgb(20, 71, 230) 50%, rgb(21, 93, 252) 100%)',
        px: { xs: 3, sm: 4, md: 6, lg: 8 },
        py: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1240,
          mx: 'auto',
        }}
      >
        <Grid container alignItems="center" spacing={{ xs: 4, md: 2 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack
              spacing={{ xs: 2.5, md: 3 }}
              sx={{
                maxWidth: 700,
                color: '#FFFFFF',
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: pxToRem(24),
                    sm: pxToRem(32),
                    md: pxToRem(53),
                  },
                  lineHeight: { xs: 1.15, md: 1.25 },
                  fontWeight: 700,
                  maxWidth: { xs: '100%', md: '90%' },
                }}
              >
                {title}
              </Typography>

              <Typography
                sx={{
                  color: '#BEDBFF',
                  fontSize: {
                    xs: pxToRem(14),
                    sm: pxToRem(18),
                    md: pxToRem(26),
                  },
                  lineHeight: 1.5,
                  fontWeight: 400,
                  maxWidth: { xs: '100%', md: 686 },
                }}
              >
                {description}
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 2 }}
                sx={{ pt: { xs: 1, md: 2 } }}
              >
                <AppButton
                  component={Link}
                  href={primaryActionHref}
                  variant="contained"
                  sx={{
                    minWidth: { xs: '100%', sm: 210, md: 281 },
                    height: { xs: 52, sm: 60, md: 64 },
                    borderRadius: '9999px',
                    px: 3,
                    backgroundColor: '#FFFFFF',
                    color: (theme) => theme.color.brandBlue,
                    fontSize: { xs: pxToRem(16), md: pxToRem(18) },
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#F8FAFF',
                    },
                  }}
                >
                  {primaryActionLabel}
                </AppButton>

                <AppButton
                  component={Link}
                  href={secondaryActionHref}
                  variant="contained"
                  sx={{
                    minWidth: { xs: '100%', sm: 210, md: 265 },
                    height: { xs: 52, sm: 60, md: 66 },
                    borderRadius: '9999px',
                    px: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    border: '0.764px solid rgba(255, 255, 255, 0.4)',
                    fontSize: { xs: pxToRem(16), md: pxToRem(18) },
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    },
                  }}
                >
                  {secondaryActionLabel}
                </AppButton>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              display: {
                xs: 'none',
                md: 'flex',
              },
              // minHeight: { xs: 280, sm: 360, md: 600 },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '235px',
                  sm: '280px',
                  md: '369px',
                },
                transform: {
                  xs: 'rotate(18deg)',
                  sm: 'rotate(24deg)',
                  md: 'rotate(2.82deg)',
                },
                filter:
                  'drop-shadow(19.676px 4.63px 25.695px rgba(0,0,0,0.25)) drop-shadow(0px 6.708px 6.708px rgba(0,0,0,0.25))',
              }}
            >
              <StyledImage
                src={phoneTrack}
                alt=""
                sx={{
                  width: '100%',
                  height: {
                    xs: 'auto',
                    md: '560px',
                  },
                  // display: 'block',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
