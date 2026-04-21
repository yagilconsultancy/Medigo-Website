'use client';

import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { pxToRem } from '../../../../common';

type AppRequirementCardProps = {
  icon: ReactNode;
  title: string;
  items: string[];
  backgroundImage: string;
  borderColor: string;
  iconBackground: string;
};

export function AppRequirementCard({
  icon,
  title,
  items,
  backgroundImage,
  borderColor,
  iconBackground,
}: AppRequirementCardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        border: `0.741px solid ${borderColor}`,
        backgroundImage,
        transform: 'translateY(0)',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        px: { xs: 2.5, sm: 3, md: 5 },
        pt: { xs: 3, sm: 3.5, md: 5 },
        pb: { xs: 3, sm: 3.5, md: 3.75 },
        '&:hover, &:focus-within': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 16px 30px rgba(59, 130, 246, 0.10)',
        },
      }}
    >
      <Stack spacing={{ xs: 2.5, md: 3.5 }}>
        <Stack direction="row" spacing={{ xs: 1.5, md: 2 }} alignItems="center">
          <Box
            sx={{
              width: { xs: 48, sm: 52, md: 56 },
              height: { xs: 48, sm: 52, md: 56 },
              borderRadius: '14px',
              backgroundColor: iconBackground,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& svg': {
                  fontSize: { xs: 24, sm: 26, md: 28 },
                },
              }}
            >
              {icon}
            </Box>
          </Box>

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
        </Stack>

        <Stack spacing={{ xs: 1.5, md: 1.75 }}>
          {items.map((item) => (
            <Stack
              key={item}
              direction="row"
              spacing={1.25}
              alignItems="flex-start"
            >
              <CheckCircleOutlineIcon
                sx={{
                  color: '#17B26A',
                  fontSize: { xs: 20, md: 22 },
                  mt: '1px',
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  color: (theme) => theme.color.navText,
                  fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
