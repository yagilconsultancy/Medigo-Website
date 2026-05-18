'use client';

import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { AppLayout } from '@/ui/modules/partials';
import {
  AppCoreValuesSection,
  AppGradientHeroSection,
  AppCtaBanner,
  AppRevealOnScroll,
  StyledImage,
} from '@/ui/modules/components';
import { pxToRem } from '../../../common';
import communityIcon from '../../assets/icons/community.svg';
import platformImage from './ui/assets/images/platform.png';
import structuredCoordinationIcon from '../../assets/icons/structured-coordination.svg';
import systemIntegrationIcon from '../../assets/icons/system-integration.svg';

const coreValueItems = [
  {
    icon: <FavoriteBorderOutlined sx={{ fontSize: { xs: 24, md: 32 } }} />,
    title: 'Access to Care',
    description: 'Reliable mobility that supports healthcare access',
    iconBackground: '#DBEAFE',
  },
  {
    icon: (
      <StyledImage src={systemIntegrationIcon} alt="" width={32} height={32} />
    ),
    title: 'System Integration',
    description:
      'MediGo connects facilities, individuals, and providers through one coordinated platform for a seamless experience.',
    iconBackground: '#E0E7FF',
  },
  {
    icon: <StyledImage src={communityIcon} alt="" width={32} height={32} />,
    title: 'Community Partnership',
    description:
      'We collaborate with healthcare providers, facilities, and care teams to create seamless mobility solutions.',
    iconBackground: '#DCFCE7',
  },
  {
    icon: (
      <StyledImage
        src={structuredCoordinationIcon}
        alt=""
        width={32}
        height={32}
      />
    ),
    title: 'Structured Coordination',
    description:
      'Unlike traditional rideshare, we operate as coordinated infrastructure with defined protocols and standards.',
    iconBackground: '#F3E8FF',
  },
] as const;

export const AboutPage = () => {
  return (
    <AppLayout>
      <AppGradientHeroSection
        titleLines={[
          'The Future of',
          'Non-Emergency Medical',
          'Transportation',
        ]}
        subtitle="Strengthening access to care through structured NEMT coordination"
        backgroundImage="linear-gradient(161.11291006444958deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)"
        showBlurCircles
        minHeight={320}
      />

      <Box
        component="section"
        sx={{
          backgroundColor: '#FFFFFF',
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 8, sm: 9, md: 12 },
          pb: { xs: 8, sm: 9, md: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1180,
            mx: 'auto',
          }}
        >
          <Stack
            spacing={{
              xs: 2,
              md: 4,
            }}
            sx={{
              width: '100%',
            }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography
              sx={{
                color: (theme) => theme.color.navText,
                fontSize: {
                  xs: pxToRem(16),
                  sm: pxToRem(18),
                  md: pxToRem(20),
                },
                lineHeight: 1.63,
                fontWeight: 400,
                maxWidth: 925,
              }}
            >
              MediGo was founded on the belief that access to reliable,
              non-emergency medical transportation should never be a barrier to
              healthcare. We recognized that traditional rideshare services,
              while convenient for everyday use, often fall short when it comes
              to the specific needs of medical transportation.
            </Typography>

            <Box
              sx={{
                borderLeft: '3.704px solid #4F7EC9',
                borderTopRightRadius: '16px',
                borderBottomRightRadius: '16px',
                background: 'linear-gradient(90deg, #EFF6FF 0%, #EEF2FF 100%)',
                boxShadow:
                  '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)',
                px: { xs: 3, sm: 4, md: 5.5 },
                py: { xs: 3.5, sm: 4, md: 5 },
                maxWidth: 925,
              }}
            >
              <Stack spacing={{ xs: 1.5, md: 2.5 }} width={'100%'}>
                <Typography
                  sx={{
                    color: (theme) => theme.color.faqTitle,
                    fontSize: {
                      xs: pxToRem(18),
                      sm: pxToRem(20),
                      md: pxToRem(24),
                    },
                    lineHeight: 1.33,
                    fontWeight: 700,
                  }}
                >
                  We are not simply moving people.
                </Typography>

                <Typography
                  sx={{
                    color: (theme) => theme.color.faqTitle,
                    fontSize: {
                      xs: pxToRem(18),
                      sm: pxToRem(20),
                      md: pxToRem(24),
                    },
                    lineHeight: 1.33,
                    fontWeight: 700,
                  }}
                >
                  We are strengthening access to care through NEMT
                  infrastructure.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>

      <AppCoreValuesSection
        title="Our Core Values"
        subtitle="The principles that guide every decision we make and every service we provide"
        items={[...coreValueItems]}
      />

      <Box
        component="section"
        sx={{
          backgroundColor: '#FFFFFF',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 8, sm: 9, md: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1360,
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.05fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            <Stack spacing={{ xs: 2.5, md: 3 }}>
              <Typography
                component="h2"
                sx={{
                  color: (theme) => theme.color.faqTitle,
                  fontSize: {
                    xs: pxToRem(32),
                    sm: pxToRem(40),
                    md: pxToRem(48),
                  },
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                Our Platform
              </Typography>

              <Stack spacing={{ xs: 2.5, md: 3 }}>
                <Typography
                  sx={{
                    color: (theme) => theme.color.navText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(17),
                      md: pxToRem(18),
                    },
                    lineHeight: 1.63,
                    fontWeight: 400,
                    maxWidth: 563,
                  }}
                >
                  MediGo is a centralized coordination platform that connects
                  healthcare facilities, individuals, and certified
                  transportation providers. It enables structured transport
                  requests, real-time coordination, and full visibility from
                  booking to completion.
                </Typography>

                <Typography
                  sx={{
                    color: (theme) => theme.color.navText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(17),
                      md: pxToRem(18),
                    },
                    lineHeight: 1.63,
                    fontWeight: 400,
                    maxWidth: 546,
                  }}
                >
                  We&apos;ve built our network from the ground up with
                  healthcare-specific requirements in mind. From
                  wheelchair-accessible vehicles to trained drivers who
                  understand patient care protocols, every aspect of our service
                  is designed to support medical transportation needs.
                </Typography>

                <Typography
                  sx={{
                    color: (theme) => theme.color.navText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(17),
                      md: pxToRem(18),
                    },
                    lineHeight: 1.63,
                    fontWeight: 400,
                    maxWidth: 577,
                  }}
                >
                  Our structured approach means consistent service standards,
                  predictable scheduling, and coordinated care transitions. We
                  integrate with healthcare systems to ensure appointments are
                  met, treatments are not delayed, and patients maintain their
                  independence through reliable mobility access.
                </Typography>

                <Typography
                  sx={{
                    color: (theme) => theme.color.navText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(17),
                      md: pxToRem(18),
                    },
                    lineHeight: 1.63,
                    fontWeight: 400,
                    maxWidth: 581,
                  }}
                >
                  Whether it&apos;s recurring dialysis treatments, post-surgery
                  follow-ups, or daily therapy sessions, MediGo provides the
                  transportation infrastructure that healthcare delivery depends
                  on.
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 584,
                mx: 'auto',
                pt: { xs: 3, md: 0 },
              }}
            >
              <Box
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                  backgroundColor: 'transparent',
                }}
              >
                <StyledImage
                  src={platformImage}
                  alt=""
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 12, md: -24 },
                  bottom: { xs: -18, md: -18 },
                  width: { xs: 120, sm: 128, md: 133 },
                  minHeight: { xs: 92, md: 110 },
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '0.741px solid #F3F4F6',
                  boxShadow: '0px 25px 50px 0px rgba(0,0,0,0.25)',
                  px: { xs: 2, md: 2.5 },
                  pt: { xs: 2, md: 3 },
                  pb: { xs: 1.5, md: 0.5 },
                }}
              >
                <Stack spacing={0.25} alignItems="center">
                  <Typography
                    sx={{
                      color: (theme) => theme.color.brandBlue,
                      fontSize: { xs: pxToRem(24), md: pxToRem(30) },
                      lineHeight: 1,
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    24/7
                  </Typography>

                  <Typography
                    sx={{
                      color: (theme) => theme.color.faqText,
                      fontSize: { xs: pxToRem(12), md: pxToRem(14) },
                      lineHeight: 1.4,
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    Coordination
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <AppRevealOnScroll>
        <AppCtaBanner
          title="MediGo is redefining care mobility"
          description="Join us in building a more accessible, reliable, and patient-centered future for healthcare transportation."
          primaryActionLabel="Apply to Become a Partner"
          secondaryActionLabel="Schedule a Consultation"
          primaryActionHref="/partners"
          secondaryActionHref="/contact"
        />
      </AppRevealOnScroll>
    </AppLayout>
  );
};
