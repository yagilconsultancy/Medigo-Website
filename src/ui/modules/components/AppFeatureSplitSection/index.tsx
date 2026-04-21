'use client';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
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
  return (
    <Box
      component="section"
      sx={{
        backgroundColor,
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 6, sm: 7, md: 9 },
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
                    color: (theme) => theme.color.faqText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(17),
                      md: pxToRem(20),
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
                {features.map((feature) => (
                  <Stack
                    key={feature.title}
                    direction="row"
                    spacing={{ xs: 1.5, md: 2 }}
                    alignItems="flex-start"
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

          <Grid size={{ xs: 12, md: 6 }}>{media}</Grid>
        </Grid>
      </Box>
    </Box>
  );
}
