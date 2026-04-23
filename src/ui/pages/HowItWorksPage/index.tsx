'use client';

import Image from 'next/image';
import {
  AccessTimeOutlined,
  ChatBubbleOutlineOutlined,
  CalendarMonthOutlined,
  GroupsOutlined,
  LocationOnOutlined,
  ShieldOutlined,
  VerifiedOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { Box, Stack } from '@mui/material';
import { AppLayout } from '@/ui/modules/partials';
import {
  AppCtaBanner,
  AppFeatureCard,
  AppFeatureSplitSection,
  AppGradientHeroSection,
  AppRevealOnScroll,
  StyledImage,
} from '../../modules/components';
import { pxToRem } from '../../../common';
import confirmationIcon from '../../../ui/assets/icons/confirmation.svg';
import coreCoordinationIcon from '../../../ui/assets/icons/core-cordination.svg';
import assistanceSupportIcon from '../../../ui/assets/icons/assistance-support.svg';
import recurringIcon from '../../../ui/assets/icons/recurring.svg';
import support247Icon from '../../../ui/assets/icons/247-support.svg';
import realTimeIcon from '../../../ui/assets/icons/real-time.svg';
import transportRequestImage from '../../../ui/assets/images/transport-request.png';
import trackTimeImage from '../../../ui/assets/images/track-time.png';
import certifiedNetworkImage1 from '../../../ui/assets/images/certified-network1.png';
import certifiedNetworkImage2 from '../../../ui/assets/images/certified-network2.png';

const howItWorksSteps = [
  {
    step: '1',
    title: 'Submit a Transport Request',
    description:
      'Enter your pickup details, destination, schedule and any mobility or assistance needs through a structured request',
  },
  {
    step: '2',
    title: 'Certified Network',
    description:
      'Requests are matched with qualified transportation providers based on availability, service type and location',
  },
  {
    step: '3',
    title: 'Track and Coordinate in Real Time',
    description:
      'Receive updates and maintain visibility from request to completion',
  },
] as const;

const featureCardSections = [
  {
    eyebrow: 'FEATURES',
    title: 'Everything You Need',
    description:
      'Premium features designed for patients, caregivers, and healthcare providers',
    cards: [
      {
        title: 'Recurring Rides',
        description:
          'Set up regular schedules for ongoing treatments, therapy sessions, or daily activities.',
        icon: confirmationIcon,
      },
      {
        title: 'Care Coordination',
        description:
          'We work directly with healthcare facilities to ensure seamless appointment continuity.',
        icon: coreCoordinationIcon,
      },
      {
        title: '24/7 Support',
        description:
          'Our customer service team is available around the clock to assist with any needs.',
        icon: support247Icon,
      },
      {
        title: 'Real-Time Updates',
        description:
          'Track your ride and communicate with your driver every step of the journey.',
        icon: realTimeIcon,
      },
    ],
  },
] as const;

export function HowItWorksPage() {
  const router = useRouter();

  return (
    <AppLayout>
      <AppRevealOnScroll>
        <AppGradientHeroSection
          badgeLabel="Trusted Medical Transportation"
          titleLines={['How MediGo Works']}
          subtitle="A structured, compassionate approach to requesting, coordinating and managing medical transportation with dignity and care."
          backgroundImage="linear-gradient(164.43895708244355deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)"
          showBlurCircles={false}
          minHeight={420}
        />
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={40}>
        <AppFeatureSplitSection
          step="1"
          title={howItWorksSteps[0].title}
          description="Schedule your ride through our easy-to-use platform designed with simplicity and accessibility in mind."
          features={[
            {
              icon: <CalendarMonthOutlined sx={{ fontSize: 18 }} />,
              title: 'Choose Your Date & Time',
              description:
                'Schedule rides in advance or request same-day service when available, with flexible timing to meet your needs.',
              iconBackground: '#DBEAFE',
            },
            {
              icon: <LocationOnOutlined sx={{ fontSize: 18 }} />,
              title: 'Specify Locations',
              description:
                'Enter pickup and destination addresses with any special instructions for easy access or parking.',
              iconBackground: '#DBEAFE',
            },
            {
              icon: <GroupsOutlined sx={{ fontSize: 18 }} />,
              title: 'Share Your Needs',
              description:
                'Let us know about mobility requirements, medical equipment, or assistance needed to ensure your comfort and safety.',
              iconBackground: '#DBEAFE',
            },
          ]}
          buttonLabel="Become a Partner"
          buttonHref="/#contact"
          buttonOnClick={() => router.push('/partners')}
          backgroundColor="#FFFFFF"
          media={
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 584,
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                }}
              >
                <Image
                  src={transportRequestImage}
                  alt=""
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 12, md: -24 },
                  bottom: { xs: -22, md: -18 },
                  width: { xs: 130, md: 158 },
                  height: { xs: 72, md: 109 },
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '0.741px solid #F3F4F6',
                  boxShadow:
                    '0px 20px 25px 0px rgba(0,0,0,0.1), 0px 8px 10px 0px rgba(0,0,0,0.1)',
                  px: { xs: 1.25, md: 3 },
                  pt: { xs: 1.25, md: 3 },
                  pb: 0.5,
                }}
              >
                <Stack spacing={0.25} sx={{ height: '100%' }}>
                  <Box
                    sx={{
                      color: (theme) => theme.color.brandBlue,
                      fontSize: { xs: pxToRem(22), md: pxToRem(30) },
                      lineHeight: 1,
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    24/7
                  </Box>
                  <Box
                    sx={{
                      color: (theme) => theme.color.faqText,
                      fontSize: { xs: pxToRem(10), md: pxToRem(14) },
                      lineHeight: 1.4,
                      textAlign: 'center',
                    }}
                  >
                    Support Available
                  </Box>
                </Stack>
              </Box>
            </Box>
          }
        />
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={80}>
        <AppFeatureSplitSection
          step="2"
          eyebrow="Our Fleet"
          title="Certified Provider Network"
          description="Requests are matched with qualified, compassionate transportation providers based on availability, service type, and location."
          features={[
            {
              icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
              title: 'Background Verified',
              description:
                'Comprehensive background checks and credential verification for your peace of mind.',
              iconBackground: '#DCFCE7',
            },
            {
              icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
              title: 'Specially Trained',
              description:
                'Certified in patient care, mobility assistance, and safety protocols to provide compassionate service.',
              iconBackground: '#DCFCE7',
            },
            {
              icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
              title: 'Equipped Vehicles',
              description:
                'Vehicles meet strict accessibility and medical equipment standards for safe, comfortable transport.',
              iconBackground: '#DCFCE7',
            },
          ]}
          buttonLabel="Become a Partner"
          buttonHref="/#contact"
          buttonOnClick={() => router.push('/partners')}
          reverse
          mobileReverse
          backgroundColor="#FFFFFF"
          media={
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 584,
                mx: 'auto',
                minHeight: { xs: 320, md: 501 },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 0, md: 0 },
                  top: { xs: 0, md: 0 },
                  width: { xs: '58%', md: 220 },
                  height: { xs: 165, md: 219 },
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0px 18px 25px rgba(0,0,0,0.12)',
                }}
              >
                <Image
                  src={certifiedNetworkImage1}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '34%', md: 154 },
                  top: { xs: 112, md: 113 },
                  width: { xs: '66%', md: 243 },
                  height: { xs: 176, md: 242 },
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0px 18px 25px rgba(0,0,0,0.12)',
                }}
              >
                <Image
                  src={certifiedNetworkImage2}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Box>
          }
        />
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={120}>
        <AppFeatureSplitSection
          step="3"
          title={howItWorksSteps[2].title}
          description="Stay informed and connected from booking to arrival with real-time updates and communication."
          features={[
            {
              icon: <AccessTimeOutlined sx={{ fontSize: 18 }} />,
              title: 'On-Time Arrival',
              description:
                'Scheduled pickups with buffer time to ensure you arrive at appointments punctually and stress-free.',
              iconBackground: '#DBEAFE',
            },
            {
              icon: <ChatBubbleOutlineOutlined sx={{ fontSize: 18 }} />,
              title: 'Live Communication',
              description:
                'Track your ride and communicate directly with your driver for updates and coordination.',
              iconBackground: '#DBEAFE',
            },
            {
              icon: <ShieldOutlined sx={{ fontSize: 18 }} />,
              title: 'Safe Door-to-Door Service',
              description:
                'Compassionate assistance from pickup to drop-off, ensuring your safety and comfort throughout the journey.',
              iconBackground: '#DBEAFE',
            },
          ]}
          buttonLabel="Become a Partner"
          buttonHref="/#contact"
          buttonOnClick={() => router.push('/partners')}
          backgroundColor="#F9FAFB"
          media={
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 584,
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                }}
              >
                <Image
                  src={trackTimeImage}
                  alt=""
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  right: { xs: 12, md: -12 },
                  top: { xs: 12, md: -14 },
                  width: { xs: 150, md: 160 },
                  height: { xs: 58, md: 64 },
                  borderRadius: '14px',
                  backgroundColor: '#FFFFFF',
                  border: '0.741px solid #F3F4F6',
                  boxShadow:
                    '0px 20px 25px 0px rgba(0,0,0,0.1), 0px 8px 10px 0px rgba(0,0,0,0.1)',
                  px: 1.5,
                  py: 1.5,
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '9999px',
                      backgroundColor: '#DBEAFE',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: (theme) => theme.color.brandBlue,
                    }}
                  >
                    <ChatBubbleOutlineOutlined sx={{ fontSize: 18 }} />
                  </Box>

                  <Box>
                    <Box
                      sx={{
                        color: (theme) => theme.color.faqTitle,
                        fontSize: { xs: pxToRem(12), md: pxToRem(14) },
                        lineHeight: 1.3,
                        fontWeight: 700,
                      }}
                    >
                      Real-Time Updates
                    </Box>
                    <Box
                      sx={{
                        color: (theme) => theme.color.faqText,
                        fontSize: { xs: pxToRem(10), md: pxToRem(12) },
                        lineHeight: 1.3,
                      }}
                    >
                      Stay informed
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>
          }
        />
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={160}>
        <Box
          component="section"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 5.5, sm: 6.5, md: 9 },
          }}
        >
          <Box
            sx={{
              maxWidth: 1280,
              mx: 'auto',
            }}
          >
            <Stack spacing={{ xs: 3, md: 6 }}>
              <Box>
                <Box
                  sx={{
                    textAlign: 'center',
                    color: (theme) => theme.color.brandBlue,
                    fontSize: {
                      xs: pxToRem(12),
                      sm: pxToRem(13),
                      md: pxToRem(14),
                    },
                    lineHeight: 1.5,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  FEATURES
                </Box>

                <Box
                  component="h2"
                  sx={{
                    mt: 1,
                    textAlign: 'center',
                    color: (theme) => theme.color.faqTitle,
                    fontSize: {
                      xs: pxToRem(28),
                      sm: pxToRem(32),
                      md: pxToRem(42),
                    },
                    lineHeight: 1.15,
                    fontWeight: 700,
                  }}
                >
                  Everything You Need
                </Box>

                <Box
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    maxWidth: 760,
                    mx: 'auto',
                    textAlign: 'center',
                    color: (theme) => theme.color.faqText,
                    fontSize: {
                      xs: pxToRem(15),
                      sm: pxToRem(16),
                      md: pxToRem(18),
                    },
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  Premium features designed for patients, caregivers, and
                  healthcare providers
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    md: 'repeat(4, minmax(0, 1fr))',
                  },
                  gap: { xs: 2, md: 2.5 },
                }}
              >
                {featureCardSections[0].cards.map((card) => (
                  <AppFeatureCard
                    key={card.title}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </Box>
            </Stack>
          </Box>
        </Box>
      </AppRevealOnScroll>

      <AppRevealOnScroll delay={200}>
        <AppCtaBanner
          title="Ready to Get Started?"
          description="Discover dependable and seamless mobility care today. Schedule your first ride in just a few minutes and enjoy the convenience!"
          primaryActionLabel="Book a Ride"
          secondaryActionLabel="Schedule Ride"
          primaryActionHref="/#contact"
          secondaryActionHref="/#contact"
        />
      </AppRevealOnScroll>
    </AppLayout>
  );
}
