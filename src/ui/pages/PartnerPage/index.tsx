'use client';

import Image from 'next/image';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import {
  DescriptionOutlined,
  GroupsOutlined,
  ShieldOutlined,
  VerifiedOutlined,
} from '@mui/icons-material';
import { AppLayout } from '@/ui/modules/partials';
import {
  AppGradientHeroSection,
  AppCtaBanner,
  AppProcessCard,
  AppRequirementCard,
  AppRevealOnScroll,
  StyledImage,
} from '../../modules/components';
import { pxToRem } from '../../../common';
import whyPartnerImage from './ui/assets/images/why-partner.png';
import { StartApplicationDrawer } from './ui/component';
const averageOnboardingTimeIcon =
  'https://www.figma.com/api/mcp/asset/bbb11b97-0023-4b3c-94a9-9fdd3c041e8d';

const partnerRequirementCards = [
  {
    title: 'Company Requirements',
    items: [
      'Established non- emergency transport company',
      'Valid business license and all affiliations',
      'Active proof of general liability insurance',
      'Clean safety record and compliance history',
    ],
    icon: <DescriptionOutlined />,
    backgroundImage:
      'linear-gradient(152.96323995337735deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)',
    borderColor: '#DBEAFE',
    iconBackground: '#155DFC',
  },
  {
    title: 'Fleet Requirements',
    items: [
      'Accessible commercial vehicles (cars, vans)',
      'Up to date and regularly serviced vehicles',
      'Wheelchair accessibility and safety features',
      'Proper signage and professional appearance',
    ],
    icon: <ShieldOutlined />,
    backgroundImage:
      'linear-gradient(152.96323995337735deg, rgb(238, 242, 255) 0%, rgb(255, 255, 255) 100%)',
    borderColor: '#E0E7FF',
    iconBackground: '#4F39F6',
  },
  {
    title: 'Driver Requirements',
    items: [
      'CPR/First Aid certified personnel',
      'Background checked and cleared drivers',
      'Professional appearance and demeanor',
      'Proven track record in patient care',
    ],
    icon: <GroupsOutlined />,
    backgroundImage:
      'linear-gradient(152.89101789013057deg, rgb(240, 253, 244) 0%, rgb(255, 255, 255) 100%)',
    borderColor: '#DCFCE7',
    iconBackground: '#00A63E',
  },
  {
    title: 'Compliance & Safety',
    items: [
      'PHIPA compliance and patient privacy',
      'Adherence to all state/local regulations',
      'Safety protocols and emergency procedures',
      'Quality assurance and ongoing training',
    ],
    icon: <VerifiedOutlined />,
    backgroundImage:
      'linear-gradient(152.89101789013057deg, rgb(250, 245, 255) 0%, rgb(255, 255, 255) 100%)',
    borderColor: '#F3E8FF',
    iconBackground: '#9810FA',
  },
] as const;

const processItems = [
  {
    step: '1',
    title: 'Submit Partnership Application',
    description:
      "Complete our partnership application with required documentation. We'll schedule a consultation to discuss your business goals and answer questions.",
    bullets: [
      'Business licenses and certificates',
      'Insurance documentation',
      'Fleet information',
    ],
    accentColor: 'processBlue',
  },
  {
    step: '2',
    title: 'Verification & Compliance Review',
    description:
      'Our team conducts thorough verification of credentials, licenses, and safety records to ensure quality standards and compliance.',
    bullets: [
      'Background verification',
      'Safety record review',
      'Compliance documentation',
    ],
    accentColor: 'processIndigo',
  },
  {
    step: '3',
    title: 'Network Integration & Training',
    description:
      'Comprehensive onboarding, standards, dispatch system, and best practices for exceptional service.',
    bullets: [
      'Platform orientation',
      'Service standards training',
      'System integration setup',
    ],
    accentColor: 'processGreen',
  },
  {
    step: '4',
    title: 'MediGo Dispatches to Your Fleet',
    description:
      'Once approved, MediGo assigns rides directly to your available drivers and vehicles. You simply fulfill the service—no dispatching or coordination needed on your end.',
    bullets: [
      'MediGo handles all dispatch',
      'Ride assignments sent to your fleet',
      '24/7 operational support',
    ],
    accentColor: 'processPurple',
  },
] as const;

export const PartnerPage = () => {
  const [isApplicationDrawerOpen, setIsApplicationDrawerOpen] = useState(false);

  return (
    <AppLayout>
      <AppRevealOnScroll>
        <AppGradientHeroSection
          badgeLabel="Partner Opportunity"
          titleLines={[
            'Grow Your Non-Emergency Transportation Business',
            'with',
          ]}
          titleHighlight="MediGo"
          subtitle="Partner with MediGo by providing your fleet and drivers. We handle all coordination, dispatch, and ride management—you focus on excellent service delivery."
          backgroundImage="linear-gradient(155.09639942066423deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)"
          showBlurCircles
          minHeight={540}
          buttonLabel="Start Your Application"
          buttonOnClick={() => setIsApplicationDrawerOpen(true)}
        />
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={80}>
        <Box
          component="section"
          sx={{
            backgroundColor: '#F9FAFB',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 6, sm: 7, md: 9 },
          }}
        >
          <Box sx={{ maxWidth: 1360, mx: 'auto' }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={{ xs: 2.25, md: 2.5 }}>
                  <Typography
                    component="h2"
                    sx={{
                      color: (theme) => theme.color.faqTitle,
                      fontSize: {
                        xs: pxToRem(28),
                        sm: pxToRem(32),
                        md: pxToRem(36),
                      },
                      lineHeight: 1.12,
                      fontWeight: 700,
                    }}
                  >
                    Why Partner with MediGo?
                  </Typography>

                  <Typography
                    sx={{
                      color: (theme) => theme.color.faqText,
                      fontSize: {
                        xs: pxToRem(16),
                        sm: pxToRem(18),
                        md: pxToRem(20),
                      },
                      lineHeight: 1.62,
                      fontWeight: 400,
                      maxWidth: 580,
                    }}
                  >
                    Join a professional network of NEMT companies providing
                    specialized non-emergency medical mobility services.
                  </Typography>

                  <Typography
                    sx={{
                      color: (theme) => theme.color.faqText,
                      fontSize: {
                        xs: pxToRem(14),
                        sm: pxToRem(15),
                        md: pxToRem(16),
                      },
                      lineHeight: 1.7,
                      fontWeight: 400,
                      maxWidth: 580,
                    }}
                  >
                    MediGo partners are exclusively non-emergency medical
                    transport service providers with wheelchair-accessible vans,
                    stretcher-equipped vehicles, and specialized care mobility
                    infrastructure. We coordinate with established NEMT
                    companies that meet our rigorous standards for medical
                    transportation.
                  </Typography>

                  <Box
                    sx={{
                      borderLeft: '3.704px solid #155DFC',
                      borderTopRightRadius: '10px',
                      borderBottomRightRadius: '10px',
                      backgroundColor: '#EFF6FF',
                      px: { xs: 2.5, sm: 3, md: 3.5 },
                      py: { xs: 2.5, sm: 3, md: 3.5 },
                      maxWidth: 584,
                    }}
                  >
                    <Stack spacing={1.1}>
                      <Typography
                        sx={{
                          color: (theme) => theme.color.navText,
                          fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                          lineHeight: 1.5,
                          fontWeight: 600,
                        }}
                      >
                        Partner Success Story
                      </Typography>

                      <Typography
                        component="blockquote"
                        sx={{
                          m: 0,
                          color: (theme) => theme.color.faqText,
                          fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                          lineHeight: 1.6,
                          fontStyle: 'italic',
                          fontWeight: 400,
                          maxWidth: 446,
                        }}
                      >
                        “Joining MediGo increased our monthly bookings by 240%
                        while maintaining the quality standards we’re proud of.”
                      </Typography>

                      <Typography
                        sx={{
                          color: (theme) => theme.color.footerText,
                          fontSize: { xs: pxToRem(12), md: pxToRem(14) },
                          lineHeight: 1.4,
                          fontWeight: 400,
                        }}
                      >
                        — TransCare Solutions, Partner since 2025
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 641,
                    mx: 'auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                  }}
                >
                  <StyledImage
                    src={whyPartnerImage}
                    alt=""
                    sx={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={120}>
        <Box
          component="section"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 6, sm: 7, md: 9 },
          }}
        >
          <Box sx={{ maxWidth: 1380, mx: 'auto' }}>
            <Stack spacing={{ xs: 3.5, md: 6 }}>
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
                    lineHeight: 1.1,
                    fontWeight: 700,
                  }}
                >
                  Partner Requirements
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
                  Our certification process ensures the highest standards of
                  non-emergency transport service
                </Typography>
              </Box>

              <Grid
                container
                spacing={{ xs: 2.5, md: 2.5 }}
                alignItems="stretch"
              >
                {partnerRequirementCards.map((card) => (
                  <Grid key={card.title} size={{ xs: 12, md: 6 }}>
                    <AppRequirementCard
                      icon={card.icon}
                      title={card.title}
                      items={[...card.items]}
                      backgroundImage={card.backgroundImage}
                      borderColor={card.borderColor}
                      iconBackground={card.iconBackground}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Box>
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={160}>
        <Box
          component="section"
          sx={{
            backgroundColor: (theme) => theme.color.faqSectionBackground,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 5, sm: 6, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: 1380, mx: 'auto' }}>
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
                    lineHeight: 1.1,
                    fontWeight: 700,
                  }}
                >
                  Partnership Process
                </Typography>

                <Typography
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    textAlign: 'center',
                    color: (theme) => theme.color.faqText,
                    fontSize: {
                      xs: pxToRem(16),
                      sm: pxToRem(18),
                      md: pxToRem(20),
                    },
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  Four simple steps to becoming a certified MediGo partner
                  company
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 2.5, md: 4 }}>
                {processItems.map((item) => (
                  <Grid key={item.step} size={{ xs: 12, sm: 6 }}>
                    <AppProcessCard
                      step={item.step}
                      title={item.title}
                      description={item.description}
                      bullets={[...item.bullets]}
                      accentColor={item.accentColor}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Box>
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={200}>
        <Box
          component="section"
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            pt: { xs: 5, sm: 6, md: 8 },
          }}
        >
          <Box
            sx={{
              borderRadius: '16px',
              backgroundColor: 'rgba(190,219,255,0.21)',
              boxShadow:
                '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)',
              px: { xs: 3, sm: 4, md: 4 },
              py: { xs: 5, sm: 6, md: 8 },
            }}
          >
            <Stack
              spacing={{ xs: 2, md: 2.5 }}
              alignItems="center"
              sx={{ textAlign: 'center' }}
            >
              <Box
                component="img"
                src={averageOnboardingTimeIcon}
                alt=""
                sx={{
                  width: { xs: 28, md: 32 },
                  height: { xs: 28, md: 32 },
                }}
              />

              <Typography
                component="h2"
                sx={{
                  color: (theme) => theme.color.faqTitle,
                  fontSize: {
                    xs: pxToRem(20),
                    sm: pxToRem(22),
                    md: pxToRem(24),
                  },
                  lineHeight: 1.33,
                  fontWeight: 700,
                }}
              >
                Average Onboarding Time
              </Typography>

              <Typography
                sx={{
                  color: (theme) => theme.color.brandBlue,
                  fontSize: {
                    xs: pxToRem(34),
                    sm: pxToRem(40),
                    md: pxToRem(48),
                  },
                  lineHeight: 1.08,
                  fontWeight: 700,
                }}
              >
                7-14 Days
              </Typography>

              <Typography
                sx={{
                  color: (theme) => theme.color.faqText,
                  fontSize: { xs: pxToRem(14), md: pxToRem(16) },
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                From application submission to first ride request
              </Typography>
            </Stack>
          </Box>
        </Box>
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={240}>
        <AppCtaBanner
          title="Ready to Join Our Non-Emergency Transport Network?"
          description="Take the first step toward growing your NEMT business with MediGo's certified partner network."
          primaryActionLabel="Apply to Become a Partner"
          secondaryActionLabel="Schedule a Consultation"
          primaryActionHref="/partners"
          secondaryActionHref="/contact"
        />
      </AppRevealOnScroll>

      <StartApplicationDrawer
        open={isApplicationDrawerOpen}
        onClose={() => setIsApplicationDrawerOpen(false)}
      />
    </AppLayout>
  );
};
