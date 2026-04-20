'use client';

import { Box, Stack, Typography } from '@mui/material';
import { pxToRem } from '../../../../common';

type AppHowItWorksStepProps = {
  step: string;
  title: string;
  description: string;
};

export function AppHowItWorksStep({
  step,
  title,
  description,
}: AppHowItWorksStepProps) {
  const content = (
    <Stack
      alignItems="center"
      spacing={{ xs: 2.25, md: 2.5 }}
      sx={{
        textAlign: 'center',
        width: '100%',
        px: { xs: 2.5, sm: 3, md: 2.75 },
        pt: { xs: 2.5, sm: 3, md: 2.25 },
        pb: { xs: 3, sm: 3.5, md: 3 },
      }}
    >
      <Box
        sx={{
          width: { xs: 68, sm: 72, md: 80 },
          height: { xs: 68, sm: 72, md: 80 },
          borderRadius: '9999px',
          backgroundColor: (theme) => theme.color.brandBlue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          // "&:hover": {
          //   boxShadow:
          //     '0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)',
          //     backgroundColor: (theme) => theme.palette.background.default,
          //   },
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

      <Stack spacing={1.25} sx={{ maxWidth: 353 }}>
        <Typography
          component="h3"
          sx={{
            color: (theme) => theme.color.faqTitle,
            fontSize: { xs: pxToRem(18), md: pxToRem(18.645) },
            lineHeight: 1.4,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: (theme) => theme.color.faqText,
            fontSize: { xs: pxToRem(14.5), md: pxToRem(14.916) },
            lineHeight: 1.62,
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: { xs: 274, md: 274 },
        borderRadius: '22px',
        backgroundColor: 'transparent',
        border: '0.67px solid transparent',
        boxShadow: 'none',
        transition:
          'background-color 300ms ease, box-shadow 180ms ease, transform 180ms ease, border-color 180ms ease',
        '&:hover, &:focus-within': {
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 0px 2.8px 0px rgba(0,0,0,0.25)',
        },
      }}
    >
      {content}
    </Box>
  );
}
