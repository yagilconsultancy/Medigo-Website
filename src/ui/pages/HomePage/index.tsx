'use client';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import {
  AccessTimeOutlined,
  CalendarMonthOutlined,
  ChatBubbleOutlineOutlined,
  DescriptionOutlined,
  FavoriteBorderOutlined,
  GroupsOutlined,
  LocationOnOutlined,
  ShieldOutlined,
  VerifiedOutlined,
} from '@mui/icons-material';
import { ReactNode } from 'react';
import { AppLayout } from '@/ui/modules/partials';
import {
  AppAccordion,
  AppButton,
  AppCtaBanner,
  AppCoreValuesSection,
  AppFeatureCard,
  AppGradientHeroSection,
  AppFeatureSplitSection,
  AppHowItWorksStep,
  AppProcessCard,
  AppRequirementCard,
  StyledImage,
  StyledLink,
} from '../../modules/components';
import { pxToRem } from '../../../common';
import { ChevronRightRounded } from '@mui/icons-material';
import confirmationIcon from '../../../ui/assets/icons/confirmation.svg';
import communityIcon from '../../../ui/assets/icons/community.svg';
import coreCoordinationIcon from '../../../ui/assets/icons/core-cordination.svg';
import assistanceSupportIcon from '../../../ui/assets/icons/assistance-support.svg';
import recurringIcon from '../../../ui/assets/icons/recurring.svg';
import support247Icon from '../../../ui/assets/icons/247-support.svg';
import realTimeIcon from '../../../ui/assets/icons/real-time.svg';
import structuredCoordinationIcon from '../../../ui/assets/icons/structured-coordination.svg';
import systemIntegrationIcon from '../../../ui/assets/icons/system-integration.svg';
import newStandardImage from '../../../ui/assets/images/new-standard.png';
import purposeBuiltImage from '../../../ui/assets/images/purpose-built.png';
import transportRequestImage from '../../../ui/assets/images/transport-request.png';
import trackTimeImage from '../../../ui/assets/images/track-time.png';
import certifiedNetworkImage1 from '../../../ui/assets/images/certified-network1.png';
import certifiedNetworkImage2 from '../../../ui/assets/images/certified-network2.png';

const faqItems = [
  {
    id: 'what-is-medigo',
    title: 'What is MediGO?',
    description:
      'MediGO is a platform that helps individuals and families arrange safe, comfortable, non-emergency medical transportation (NEMT). We coordinate with certified providers for appointments, treatments, and non-emergency medical needs with dignity and respect.',
  },
  {
    id: 'request-transport',
    title: 'How do I request transportation?',
    description:
      'You can submit a request by providing your pickup location, destination, schedule, and any specific mobility or assistance needs. Our team will coordinate a suitable, trained driver to ensure a smooth, comfortable journey.',
  },
  {
    id: 'transport-types',
    title: 'What types of transportation are available?',
    description:
      'We offer wheelchair-accessible vehicles, ambulatory transport, and specialized vehicles for stretcher transport. All vehicles are equipped for comfort, safety, and dignity.',
  },
  {
    id: 'emergency-service',
    title: 'Is this an emergency service?',
    description:
      'No. MediGO provides non-emergency medical transportation only. For emergencies, please call 911. We focus on scheduled medical appointments, treatments, and wellness trips that require professional, caring transport.',
  },
];

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
      'Medigo connects facilities, individuals, and providers through one coordinated platform for a seamless experience.',
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

const ctaBanners = [
  {
    title: 'Ready to Get Started?',
    description:
      'Discover dependable and seamless mobility care today. Schedule your first ride in just a few minutes and enjoy the convenience!',
    primaryActionLabel: 'Book a Ride',
    secondaryActionLabel: 'Schedule Ride',
  },
  {
    title: 'Ready to Join Our Non-Emergency Transport Network?',
    description:
      "Take the first step toward growing your NEMT business with MediGo's certified partner network.",
    primaryActionLabel: 'Apply to Become a Partner',
    secondaryActionLabel: 'Schedule a Consultation',
  },
  {
    title: 'MediGo is redefining care mobility',
    description:
      'Join us in building a more accessible, reliable, and patient-centered future for healthcare transportation.',
    primaryActionLabel: 'Apply to Become a Partner',
    secondaryActionLabel: 'Schedule a Consultation',
  },
] as const;

type IntroHeroSectionConfig = {
  badgeLabel?: string;
  titleLines: string[];
  titleHighlight?: string;
  subtitle: string;
  backgroundImage: string;
  showBlurCircles: boolean;
  minHeight: number;
  buttonLabel?: string;
  buttonHref?: string;
};

const introHeroSections: IntroHeroSectionConfig[] = [
  {
    badgeLabel: 'Trusted Medical Transportation',
    titleLines: ['How MediGo Works'],
    subtitle:
      'A structured, compassionate approach to requesting, coordinating and managing medical transportation with dignity and care.',
    backgroundImage:
      'linear-gradient(164.43895708244355deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)',
    showBlurCircles: false,
    minHeight: 420,
  },
  {
    badgeLabel: 'Partner Opportunity',
    titleLines: ['Grow Your Non-Emergency Transportation Business', 'with'],
    titleHighlight: 'MediGo',
    subtitle:
      'Partner with MediGo by providing your fleet and drivers. We handle all coordination, dispatch, and ride management—you focus on excellent service delivery.',
    backgroundImage:
      'linear-gradient(155.09639942066423deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)',
    showBlurCircles: true,
    minHeight: 540,
    buttonLabel: 'Start Your Application',
    buttonHref: '/#contact',
  },
  {
    titleLines: ['The Future of', 'Non-Emergency Medical', 'Transportation'],
    subtitle:
      'Strengthening access to care through structured NEMT coordination',
    backgroundImage:
      'linear-gradient(161.11291006444958deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(238, 242, 255) 100%)',
    showBlurCircles: true,
    minHeight: 420,
  },
  {
    titleLines: ['Contact MediGo'],
    subtitle: 'Request a ride or demo to learn more about our services',
    backgroundImage:
      'linear-gradient(167.77463701693404deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)',
    showBlurCircles: false,
    minHeight: 320,
  },
];

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
      'HIPAA compliance and patient privacy',
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

type FeatureCardSectionConfig = {
  eyebrow?: string;
  title: string;
  description: string;
  columns: 3 | 4;
  cards: Array<{
    title: string;
    description: string;
    icon: typeof confirmationIcon;
  }>;
};

const featureCardSections: FeatureCardSectionConfig[] = [
  {
    title: 'Care Mobility Solutions',
    description:
      'Structured coordination for healthcare access and daily living',
    columns: 3,
    cards: [
      {
        title: 'Coordination Solutions',
        description:
          'Supports a range of medical transportation and mobility needs through structured coordination, reliable scheduled transportation for appointments, treatments and care transitions.',
        icon: confirmationIcon,
      },
      {
        title: 'Assisted Mobility Support',
        description:
          'Specialized support for seniors and individuals requiring gentle assistance with mobility, transitions, and personal care during transport.',
        icon: assistanceSupportIcon,
      },
      {
        title: 'Recurring Transportation Programs',
        description:
          'Ongoing coordination for dialysis, therapy and regular appointments.',
        icon: recurringIcon,
      },
    ],
  },
  {
    eyebrow: 'FEATURES',
    title: 'Everything You Need',
    description:
      'Premium features designed for patients, caregivers, and healthcare providers',
    columns: 4,
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
];

type FeatureSectionConfig = {
  title: string;
  step?: string;
  eyebrow?: string;
  description?: string;
  features: Array<{
    icon: ReactNode;
    title: string;
    description?: string;
    iconBackground?: string;
  }>;
  buttonLabel: string;
  buttonHref: string;
  reverse?: boolean;
  mobileReverse?: boolean;
  backgroundColor: string;
  media: ReactNode;
};

const featureSections: FeatureSectionConfig[] = [
  {
    // step: '1',
    eyebrow: 'Our Fleet',
    title: 'A New Standard in Care Mobility',
    features: [
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Built on Certified Providers',
        description:
          'All drivers undergo rigorous background checks and specialized training in patient care and mobility assistance.',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Comfort-First Standards',
        description:
          'Clear protocols ensure consistent, high-quality service with dignity and respect every time.',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Healthcare Coordination',
        description:
          'Seamless coordination with healthcare facilities, care teams, and family members.',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Safety-First Policies',
        description:
          'Comprehensive safety measures protect passengers and providers with real-time monitoring.',
        iconBackground: '#DBEAFE',
      },
    ],
    buttonLabel: 'Become a Partner',
    buttonHref: '/#contact',
    reverse: false,
    mobileReverse: false,
    backgroundColor: '#FFFFFF',
    media: (
      <Box
        sx={{
          width: '100%',
          maxWidth: 584,
          mx: 'auto',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
        }}
      >
        <Image
          src={newStandardImage}
          alt=""
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
    ),
  },
  {
    // step: '2',
    eyebrow: 'Our Fleet',
    title: 'Purpose-Built for Medical Transportation',
    description:
      'Every vehicle in our network is purpose-equipped for medical transport — with wheelchair ramps, stretcher capacity, and medical-grade safety standards. Our drivers are specially trained in patient care and mobility assistance.',
    features: [
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Wheelchair accessible vehicles (WAV)',
        description: '',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Stretcher-equipped ambulatory transport',
        description: '',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Medical equipment accommodation',
        description: '',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <VerifiedOutlined sx={{ fontSize: 18 }} />,
        title: 'Climate-controlled for patient comfort',
        description: '',
        iconBackground: '#DBEAFE',
      },
    ],
    buttonLabel: 'Become a Partner',
    buttonHref: '/#contact',
    reverse: true,
    mobileReverse: false,
    backgroundColor: '#F8FAFF',
    media: (
      <Box
        sx={{
          width: '100%',
          maxWidth: 584,
          mx: 'auto',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
        }}
      >
        <Image
          src={purposeBuiltImage}
          alt=""
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
    ),
  },
  {
    step: '1',
    title: 'Submit a Transport Request',
    description:
      'Schedule your ride through our easy-to-use platform designed with simplicity and accessibility in mind.',
    features: [
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
    ],
    buttonLabel: 'Become a Partner',
    buttonHref: '/#contact',
    reverse: false,
    mobileReverse: false,
    backgroundColor: '#FFFFFF',
    media: (
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
            <Typography
              sx={{
                color: (theme) => theme.color.brandBlue,
                fontSize: { xs: pxToRem(22), md: pxToRem(30) },
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
                fontSize: { xs: pxToRem(10), md: pxToRem(14) },
                lineHeight: 1.4,
                textAlign: 'center',
              }}
            >
              Support Available
            </Typography>
          </Stack>
        </Box>
      </Box>
    ),
  },
  {
    step: '2',
    eyebrow: 'Our Fleet',
    title: 'Certified Provider Network',
    description:
      'Requests are matched with qualified, compassionate transportation providers based on availability, service type, and location.',
    features: [
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
    ],
    buttonLabel: 'Become a Partner',
    buttonHref: '/#contact',
    reverse: true,
    mobileReverse: true,
    backgroundColor: '#FFFFFF',
    media: (
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
    ),
  },
  {
    step: '3',
    title: 'Track & Coordinate in Real-Time',
    description:
      'Stay informed and connected from booking to arrival with real-time updates and communication.',
    features: [
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
    ],
    buttonLabel: 'Become a Partner',
    buttonHref: '/#contact',
    reverse: false,
    mobileReverse: false,
    backgroundColor: '#F9FAFB',
    media: (
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
              <Typography
                sx={{
                  color: (theme) => theme.color.faqTitle,
                  fontSize: { xs: pxToRem(12), md: pxToRem(14) },
                  lineHeight: 1.3,
                  fontWeight: 700,
                }}
              >
                Real-Time Updates
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.color.faqText,
                  fontSize: { xs: pxToRem(10), md: pxToRem(12) },
                  lineHeight: 1.3,
                }}
              >
                Stay informed
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    ),
  },
] as const;

export const HomePage = () => {
  return (
    <AppLayout>
      {introHeroSections.map((hero) => (
        <AppGradientHeroSection
          key={hero.titleLines.join('-')}
          badgeLabel={hero.badgeLabel}
          titleLines={[...hero.titleLines]}
          titleHighlight={hero.titleHighlight}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
          showBlurCircles={hero.showBlurCircles}
          minHeight={hero.minHeight}
          buttonLabel={hero.buttonLabel}
          buttonHref={hero.buttonHref}
        />
      ))}

      <Box
        component="section"
        sx={{
          backgroundColor: (theme) => theme.color.faqSectionBackground,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 5, sm: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: 895,
            mx: 'auto',
          }}
        >
          <Stack spacing={{ xs: 3, md: 6 }}>
            <Typography
              component="h2"
              sx={{
                textAlign: 'center',
                color: (theme) => theme.color.faqTitle,
                fontSize: { xs: pxToRem(28), sm: pxToRem(32), md: pxToRem(36) },
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              Frequently Asked Questions
            </Typography>

            <Stack spacing={{ xs: 2, md: 3 }}>
              {faqItems.map((item) => (
                <AppAccordion
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  defaultExpanded
                  showExpandIcon={false}
                >
                  {item.description}
                </AppAccordion>
              ))}
            </Stack>
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
          backgroundColor: (theme) => theme.color.faqSectionBackground,
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 6, sm: 7, md: 9 },
          pb: { xs: 6, sm: 7, md: 9 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1392,
            mx: 'auto',
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
                    xs: pxToRem(30),
                    sm: pxToRem(34),
                    md: pxToRem(36),
                  },
                  lineHeight: 1.12,
                  fontWeight: 700,
                }}
              >
                How MediGo Works
              </Typography>

              <Typography
                sx={{
                  mt: { xs: 1.5, md: 2 },
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
                Simple, secure, and structured care mobility in three easy steps
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 2.5, md: 4.5 }} alignItems="stretch">
              {howItWorksSteps.map((step) => (
                <Grid key={step.step} size={{ xs: 12, md: 4 }}>
                  <AppHowItWorksStep
                    step={step.step}
                    title={step.title}
                    description={step.description}
                  />
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: { xs: 0.5, md: 1 },
              }}
            >
              <AppButton
                component={StyledLink}
                href="/#contact"
                endIcon={<ChevronRightRounded />}
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: (theme) => theme.color.brandBlue,
                  borderRadius: '58px',
                  px: { xs: 2.5, md: 3.2 },
                  py: { xs: 1.25, md: 1.35 },
                  minHeight: { xs: 44, md: 52 },
                  '&:hover': {
                    backgroundColor: '#FFFFFF !important',
                    color: (theme) => theme.color.brandBlue,
                    transform: 'translateY(-1px)',
                  },
                  '& .MuiButton-endIcon': {
                    ml: 0.5,
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },
                }}
              >
                Learn More
              </AppButton>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 6, sm: 7, md: 9 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1276,
            mx: 'auto',
          }}
        >
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

            <Grid container spacing={{ xs: 2.5, md: 2.5 }} alignItems="stretch">
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

      {featureCardSections.map((section) => (
        <Box
          key={section.title}
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
                {section.eyebrow ? (
                  <Typography
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
                    {section.eyebrow}
                  </Typography>
                ) : null}

                <Typography
                  component="h2"
                  sx={{
                    mt: section.eyebrow ? 1 : 0,
                    textAlign: 'center',
                    color: (theme) => theme.color.faqTitle,
                    fontSize: {
                      xs: pxToRem(28),
                      sm: pxToRem(section.columns === 4 ? 34 : 32),
                      md: pxToRem(section.columns === 4 ? 42 : 36),
                    },
                    lineHeight: 1.15,
                    fontWeight: 700,
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    maxWidth: section.columns === 4 ? 480 : 760,
                    mx: 'auto',
                    textAlign: 'center',
                    color: (theme) => theme.color.faqText,
                    fontSize: {
                      xs: pxToRem(15),
                      sm: pxToRem(16),
                      md: pxToRem(section.columns === 4 ? 18 : 20),
                    },
                    lineHeight: 1.5,
                    fontWeight: 400,
                  }}
                >
                  {section.description}
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 2, md: 2.5 }}>
                {section.cards.map((card) => (
                  <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <AppFeatureCard
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Box>
      ))}

      <Box
        component="section"
        sx={{
          backgroundColor: (theme) => theme.color.faqSectionBackground,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 5, sm: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1240,
            mx: 'auto',
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
                Four simple steps to becoming a certified MediGO partner company
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

      <Stack spacing={0}>
        {featureSections.map((section) => (
          <AppFeatureSplitSection
            key={section.title}
            step={section.step}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            features={[...section.features]}
            buttonLabel={section.buttonLabel}
            buttonHref={section.buttonHref}
            media={section.media}
            reverse={section.reverse}
            mobileReverse={section.mobileReverse}
            backgroundColor={section.backgroundColor}
          />
        ))}

        {ctaBanners.map((banner) => (
          <AppCtaBanner
            key={banner.title}
            title={banner.title}
            description={banner.description}
            primaryActionLabel={banner.primaryActionLabel}
            secondaryActionLabel={banner.secondaryActionLabel}
            primaryActionHref="/#contact"
            secondaryActionHref="/#contact"
          />
        ))}
      </Stack>
    </AppLayout>
  );
};
