'use client';

import { Box, Stack, Typography } from '@mui/material';
import { ImageProps } from 'next/image';
import { StyledImage } from '../StyledImage';
import { pxToRem } from '../../../../common';

type AppFeatureCardProps = {
  icon: ImageProps['src'];
  title: string;
  description: string;
  iconAlt?: string;
};

export function AppFeatureCard({
  icon,
  title,
  description,
  iconAlt = '',
}: AppFeatureCardProps) {
  return (
    <Box
      sx={{
        height: '100%',
        borderRadius: '16px',
        backgroundColor: (theme) => theme.palette.background.default,
        width: '100%',
        border: '0.75px solid #F3F4F6',
        boxShadow: 'none',
        transform: 'translateY(0)',
        transition:
          'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
        px: { xs: 2.5, sm: 3, md: 3.75 },
        py: { xs: 2.5, sm: 3, md: 3.75 },
        '&:hover, &:focus-within': {
          backgroundColor: 'rgba(21,93,252,0.05)',
          borderColor: (theme) => theme.color.brandBlue,
          boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.25)',
          transform: 'translateY(-4px)',
          '& .app-feature-card-icon-wrap': {
            backgroundColor: (theme) => theme.color.brandBlue,
          },
          '& .app-feature-card-icon': {
            filter: 'brightness(0) invert(1)',
          },
          '& .app-feature-card-title': {
            color: (theme) => theme.color.brandBlue,
          },
        },
      }}
    >
      <Stack spacing={{ xs: 1.75, md: 2.25 }}>
        <Box
          className="app-feature-card-icon-wrap"
          sx={{
            width: { xs: 52, sm: 54, md: 54 },
            height: { xs: 52, sm: 54, md: 54 },
            borderRadius: '15.691px',
            backgroundColor: '#EFF6FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: 'none',
            transition:
              'background-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
          }}
        >
          <StyledImage
            className="app-feature-card-icon"
            src={icon}
            alt={iconAlt}
            width={25}
            height={25}
            sx={{
              width: { xs: '22px', sm: '24px', md: '25px' },
              height: { xs: '22px', sm: '24px', md: '25px' },
              filter: 'none',
              transition: 'filter 180ms ease',
            }}
          />
        </Box>

        <Stack spacing={1} sx={{ minWidth: 0 }}>
          <Typography
            className="app-feature-card-title"
            component="h3"
            sx={{
              color: (theme) => theme.color.faqTitle,
              fontSize: {
                xs: pxToRem(18),
                sm: pxToRem(19),
                md: pxToRem(20),
              },
              lineHeight: 1.5,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: (theme) => theme.color.faqText,
              fontSize: {
                xs: pxToRem(14),
                sm: pxToRem(15),
                md: pxToRem(15.75),
              },
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
