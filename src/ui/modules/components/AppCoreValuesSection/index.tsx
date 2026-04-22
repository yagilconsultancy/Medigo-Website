'use client';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { pxToRem } from '../../../../common';

type CoreValueCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  iconBackground: string;
};

function CoreValueCard({
  icon,
  title,
  description,
  iconBackground,
}: CoreValueCardProps) {
  return (
    <Box
      sx={{
        height: '100%',
        minHeight: { xs: 'auto', md: 213 },
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        border: '0.741px solid #F3F4F6',
        boxShadow:
          '0px 1px 3px 0px rgba(0,0,0,0.10), 0px 1px 2px 0px rgba(0,0,0,0.10)',
        px: { xs: 2.25, sm: 2.75, md: 5 },
        py: { xs: 2.5, sm: 3, md: 5 },
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 1.75, md: 3 }}
        alignItems="flex-start"
      >
        <Box
          sx={{
            width: { xs: 48, sm: 52, md: 64 },
            height: { xs: 48, sm: 52, md: 64 },
            borderRadius: '16px',
            backgroundColor: iconBackground,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            '& svg': {
              width: { xs: 24, sm: 26, md: 32 },
              height: { xs: 24, sm: 26, md: 32 },
              display: 'block',
            },
          }}
        >
          {icon}
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            component="h3"
            sx={{
              color: (theme) => theme.color.faqTitle,
              fontSize: { xs: pxToRem(18), sm: pxToRem(20), md: pxToRem(24) },
              lineHeight: 1.33,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: { xs: 1, md: 1.25 },
              color: (theme) => theme.color.faqText,
              fontSize: { xs: pxToRem(14), sm: pxToRem(15), md: pxToRem(18) },
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

type AppCoreValuesSectionProps = {
  title: string;
  subtitle: string;
  items: CoreValueCardProps[];
  backgroundColor?: string;
};

export function AppCoreValuesSection({
  title,
  subtitle,
  items,
  backgroundColor = '#F9FAFB',
}: AppCoreValuesSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor,
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 6, sm: 7, md: 9 },
      }}
    >
      <Stack spacing={{ xs: 3, md: 6 }}>
        <Box>
          <Typography
            component="h2"
            sx={{
              textAlign: 'center',
              color: (theme) => theme.color.faqTitle,
              fontSize: {
                xs: pxToRem(28),
                sm: pxToRem(32),
                md: pxToRem(36),
              },
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: { xs: 1.5, md: 2 },
              textAlign: 'center',
              color: (theme) => theme.color.faqText,
              fontSize: {
                xs: pxToRem(15),
                sm: pxToRem(16),
                md: pxToRem(20),
              },
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 2.5 }} alignItems="stretch">
          {items.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <CoreValueCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                iconBackground={item.iconBackground}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
