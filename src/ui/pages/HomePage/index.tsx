'use client';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';
import { AppLayout } from '@/ui/modules/partials';
import {
  AppButton,
  AppFeatureCard,
  AppFeatureSplitSection,
  AppHeroShowcaseSection,
  AppHowItWorksStep,
  StyledImage,
  StyledLink,
} from '../../modules/components';
import {
  AccessTimeOutlined,
  CheckCircleOutline,
  CalendarMonthOutlined,
  ChatBubbleOutlineOutlined,
  DescriptionOutlined,
  FavoriteBorderOutlined,
  GroupsOutlined,
  LocationOnOutlined,
  ShieldOutlined,
  VerifiedOutlined,
} from '@mui/icons-material';
import { ChevronRightRounded } from '@mui/icons-material';
import { pxToRem } from '../../../common';
import confirmationIcon from '../../../ui/assets/icons/confirmation.svg';
import assistanceSupportIcon from '../../../ui/assets/icons/assistance-support.svg';
import recurringIcon from '../../../ui/assets/icons/recurring.svg';
import newStandardImage from '../../../ui/assets/images/new-standard.png'
import heroImage from './ui/assets/images/hero.png';
import purposeBuiltImage from '../../../ui/assets/images/purpose-built.png';
import checkIcon from "./ui/assets/icons/check.svg";
import guardIcon from "./ui/assets/icons/guard.svg";
import individualIcon from "./ui/assets/icons/individual-icon.svg";
import medicalIcon from "./ui/assets/icons/medical-icon.svg";
import partnerIcon from "./ui/assets/icons/partner-icon.svg";
import appleIcon from "./ui/assets/icons/apple.svg";
import playstoreIcon from "./ui/assets/icons/Playstore.svg";
import overflowImage from "./ui/assets/images/overflow-image.png";
import support247Icon from '../../../ui/assets/icons/247-support.svg';
import realTimeIcon from '../../../ui/assets/icons/real-time.svg';
import coreCoordinationIcon from '../../../ui/assets/icons/core-cordination.svg';
import { ReactNode } from 'react';

type FeatureCardSection = {
  title: string;
  eyebrow?: string;
  description: string;
  columns: 3 | 4;
  cards: Array<{
    title: string;
    description: string;
    icon: typeof confirmationIcon;
  }>;
};
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

const featureCardSections: FeatureCardSection[] = [
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

const featureSections: FeatureSectionConfig[] = [
  {
    // step: '1',
    eyebrow: 'Our Fleet',
    title: 'A New Standard in Care Mobility',
    features: [
      {
        icon: <StyledImage src={checkIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: 'Built on Certified Providers',
        description:
          'All drivers undergo rigorous background checks and specialized training in patient care and mobility assistance.',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <StyledImage src={checkIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: 'Comfort-First Standards',
        description:
          'Clear protocols ensure consistent, high-quality service with dignity and respect every time.',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <StyledImage src={checkIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: 'Healthcare Coordination',
        description:
          'Seamless coordination with healthcare facilities, care teams, and family members.',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <StyledImage src={checkIcon} alt="" sx={{ width: 18, height: 18 }} />,
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
        <StyledImage
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
        icon: <StyledImage src={guardIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: '',
        description: 'Wheelchair accessible vehicles (WAV)',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <StyledImage src={guardIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: '',
        description: 'Stretcher-equipped ambulatory transport',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <StyledImage src={guardIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: '',
        description: 'Medical equipment accommodation',
        iconBackground: '#DBEAFE',
      },
      {
        icon: <StyledImage src={guardIcon} alt="" sx={{ width: 18, height: 18 }} />,
        title: '',
        description: 'Climate-controlled for patient comfort',
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
        <StyledImage
          src={purposeBuiltImage}
          alt=""
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
    ),
  }
] as const;
const featureCardSections2: FeatureCardSectionConfig[] = [
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

export const HomePage = () => {
  return (
    <AppLayout>
      <AppHeroShowcaseSection
        badgeLabel="Trusted Medical Transportation"
        titleLines={[
          'MediGo, Simplifies',
          'Non-Emergency Medical',
          'Transportation',
          'Coordination',
        ]}
        titleHighlightLineIndices={[2, 3]}
        subtitle="We provide structured, reliable non-emergency medical transportation (NEMT) solutions that goes beyond traditional rideshare services. Our certified network ensures safe, coordinated mobility for healthcare access and daily living."
        image={heroImage}
        imageAlt="Wheelchair accessible medical transport vehicle"
        primaryActionLabel="Schedule a Ride"
        primaryActionHref="/#contact"
        secondaryActionLabel="Join Network"
        secondaryActionHref="/#contact"
        topPill={{
          label: 'On-Time Rate',
          value: '98%',
          icon: <AccessTimeOutlined />,
        }}
        bottomPill={{
          label: '100% Accessible',
          value: 'Wheelchair-friendly',
          icon: <CheckCircleOutline />,
        }}
        featureChips={[
          { label: 'PHIPA Compliant' },
          { label: 'Fully Insured' },
          { label: 'Background Verified' },
        ]}
        bottomStripText="We are not a rideshare service. | We are structured Non-Emergency Medical Transportation (NEMT) infrastructure."
      />

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
                  <Grid
                    key={card.title}
                    size={{ xs: 12, sm: 6, md: section.columns === 4 ? 3 : 4 }}
                  >
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
          pt: { xs: 6, sm: 7, md: 9 },
          pb: { xs: 6, sm: 7, md: 9 },
        }}
      >
        <Box sx={{ maxWidth: 1240, mx: 'auto' }}>
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
      {featureCardSections2.map((section) => (
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
                  <Grid
                    key={card.title}
                    size={{ xs: 12, sm: 6, md: section.columns === 4 ? 3 : 4 }}
                  >
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
          backgroundColor: '#F8FAFF',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 5.5, sm: 6.5, md: 8.5 },
        }}
      >
        <Box sx={{ maxWidth: 1315, mx: 'auto' }}>
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Box>
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
                Partner
              </Typography>

              <Typography
                component="h2"
                sx={{
                  mt: 1,
                  textAlign: 'center',
                  color: (theme) => theme.color.faqTitle,
                  fontSize: {
                    xs: pxToRem(30),
                    sm: pxToRem(36),
                    md: pxToRem(42),
                  },
                  lineHeight: 1.15,
                  fontWeight: 700,
                }}
              >
                Join us Today at MediGo
              </Typography>

              <Typography
                sx={{
                  mt: { xs: 1.5, md: 2 },
                  maxWidth: 480,
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
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, md: 2.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    minHeight: { xs: 320, md: 352 },
                    borderRadius: '24px',
                    backgroundImage:
                      'linear-gradient(149.6076861067262deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)',
                    px: { xs: 3, sm: 4, md: 6 },
                    py: { xs: 4, sm: 5, md: 6 },
                    color: '#FFFFFF',
                  }}
                >
                  <Stack spacing={{ xs: 2.5, md: 3 }}>
                    <Box sx={{ width: 48, height: 48 }}>
                      <StyledImage
                        src={individualIcon}
                        alt=""
                        sx={{ width: 48, height: 48 }}
                      />
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        fontSize: {
                          xs: pxToRem(24),
                          sm: pxToRem(28),
                          md: pxToRem(30),
                        },
                        lineHeight: 1.2,
                        fontWeight: 700,
                      }}
                    >
                      For Individuals & Families
                    </Typography>

                    <Typography
                      sx={{
                        color: '#DBEAFE',
                        fontSize: {
                          xs: pxToRem(15),
                          md: pxToRem(16),
                        },
                        lineHeight: 1.5,
                        maxWidth: 420,
                      }}
                    >
                      Access reliable, comfortable transportation that respects
                      your dignity and puts your comfort first. Schedule rides
                      with confidence.
                    </Typography>

                    <Box sx={{ pt: { xs: 0.5, md: 1 } }}>
                      <AppButton
                        component={StyledLink}
                        href="/#contact"
                        variant="contained"
                        color="primary"
                        sx={{
                          minWidth: { xs: 170, md: 178 },
                          height: { xs: 44, md: 48 },
                          borderRadius: '9999px',
                          backgroundColor: '#FFFFFF',
                          color: (theme) => theme.color.brandBlue,
                          fontSize: pxToRem(16),
                          fontWeight: 700,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            border: '2px solid #FFFFFF',
                          },
                        }}
                      >
                        Book a Ride
                      </AppButton>
                    </Box>
                  </Stack>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    minHeight: { xs: 320, md: 352 },
                    borderRadius: '24px',
                    backgroundImage:
                      'linear-gradient(149.60816936477366deg, rgb(30, 41, 57) 0%, rgb(16, 24, 40) 100%)',
                    px: { xs: 3, sm: 4, md: 6 },
                    py: { xs: 4, sm: 5, md: 6 },
                    color: '#FFFFFF',
                  }}
                >
                  <Stack spacing={{ xs: 2.5, md: 3 }}>
                    <Box sx={{ width: 48, height: 48 }}>
                      <StyledImage
                        src={partnerIcon}
                        alt=""
                        sx={{ width: 48, height: 48 }}
                      />
                    </Box>

                    <Typography
                      component="h3"
                      sx={{
                        fontSize: {
                          xs: pxToRem(24),
                          sm: pxToRem(28),
                          md: pxToRem(30),
                        },
                        lineHeight: 1.2,
                        fontWeight: 700,
                      }}
                    >
                      For Partners & Providers
                    </Typography>

                    <Typography
                      sx={{
                        color: '#D1D5DC',
                        fontSize: {
                          xs: pxToRem(15),
                          md: pxToRem(16),
                        },
                        lineHeight: 1.5,
                        maxWidth: 430,
                      }}
                    >
                      Improve how transportation is coordinated within your
                      organization. Reduce administrative time, improve
                      discharge flow and gain visibility across every request.
                    </Typography>

                    <Box sx={{ pt: { xs: 0.5, md: 1 } }}>
                      <AppButton
                        component={StyledLink}
                        href="/#contact"
                        variant="contained"
                        color="primary"
                        sx={{
                          minWidth: { xs: 170, md: 173 },
                          height: { xs: 44, md: 48 },
                          borderRadius: '9999px',
                          backgroundColor: '#FFFFFF',
                          color: (theme) => theme.color.faqTitle,
                          fontSize: pxToRem(16),
                          fontWeight: 700,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            border: '2px solid #FFFFFF',
                          },
                        }}
                      >
                        Join the Network
                      </AppButton>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: { xs: 1, md: 1.5 },
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
                  minHeight: 52,
                  px: 3,
                  py: 1.25,
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
          backgroundColor: '#FFFFFF',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 4, sm: 7, md: 8.5 },
        }}
      >
        <Box sx={{ maxWidth: 1024, mx: 'auto' }}>
          <Stack spacing={{ xs: 1.5, md: 2.5 }} alignItems="center">
            <Typography
              sx={{
                color: (theme) => theme.color.brandBlue,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: {
                  xs: pxToRem(12),
                  sm: pxToRem(13),
                  md: pxToRem(14),
                },
                lineHeight: 1.5,
                fontWeight: 600,
              }}
            >
              Our Commitment
            </Typography>

            <Typography
              sx={{
                textAlign: 'center',
                color: (theme) => theme.color.faqText,
                fontSize: {
                  xs: pxToRem(15),
                  sm: pxToRem(16),
                  md: pxToRem(18),
                },
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              Trusted by Patients & Providers
            </Typography>

            <Typography
              component="h2"
              sx={{
                textAlign: 'center',
                color: (theme) => theme.color.brandBlue,
                fontSize: {
                  xs: pxToRem(32),
                  sm: pxToRem(44),
                  md: pxToRem(60),
                },
                lineHeight: 1,
                fontWeight: 700,
                maxWidth: 900,
              }}
            >
              Building the nation&apos;s most reliable medical transport network
            </Typography>

            <Box
              sx={{
                width: '100%',
                maxWidth: 332,
                mt: { xs: 3, md: 4 },
                borderRadius: '24px',
                backgroundColor: 'rgba(239, 246, 255, 0.5)',
                border: '1px solid rgba(219, 234, 254, 0.5)',
                boxShadow:
                  '0px 20px 25px -5px rgba(59, 130, 246, 0.05), 0px 8px 10px -6px rgba(59, 130, 246, 0.05)',
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 4, md: 4.5 },
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 2.5,
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(219, 234, 254, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <StyledImage
                  src={medicalIcon}
                  alt=""
                  sx={{ width: 30, height: 30 }}
                />
              </Box>

              <Typography
                component="h3"
                sx={{
                  color: (theme) => theme.color.faqTitle,
                  fontSize: {
                    xs: pxToRem(24),
                    sm: pxToRem(28),
                    md: pxToRem(36),
                  },
                  lineHeight: 1.1,
                  fontWeight: 700,
                }}
              >
                Care Centred
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: (theme) => theme.color.faqText,
                  fontSize: {
                    xs: pxToRem(15),
                    sm: pxToRem(16),
                    md: pxToRem(18),
                  },
                  lineHeight: 1.55,
                  fontWeight: 400,
                }}
              >
                Every patient is treated with dignity and respect.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage:
            'linear-gradient(159.68852709271874deg, rgb(67, 45, 215) 0%, rgb(20, 71, 230) 50%, rgb(21, 93, 252) 100%)',
          px: { xs: 2, sm: 3, md: 4, lg: "117px" },
          py: { xs: 4, md: 0 },
        }}
      >
        <Grid 
          container 
          alignItems="center" 
          spacing={{ 
            xs: 4, 
            md: 3 
            }}
            sx={{
                width: '100%',
                height: { xs: 'auto', md: "533px" },
            }}
        >
            <Grid size={{ xs: 12, md: 8 }}>
                <Stack
                spacing={{ xs: 2.5, md: 3 }}
                sx={{
                    color: '#FFFFFF',
                }}
                >
                <Typography
                    component="h2"
                    sx={{
                    fontSize: {
                        xs: pxToRem(28),
                        sm: pxToRem(36),
                        md: pxToRem(48),
                        lg: pxToRem(60),
                    },
                    lineHeight: { xs: 1.15, md: 1.25 },
                    fontWeight: 700,
                    }}
                >
                    Book a Ride in Seconds.
                </Typography>

                <Typography
                    sx={{
                    color: '#BEDBFF',
                    fontSize: {
                        xs: pxToRem(16),
                        sm: pxToRem(20),
                        md: pxToRem(26),
                    },
                    lineHeight: 1.45,
                    fontWeight: 400,
                    maxWidth: { xs: '100%', md: 686 },
                    }}
                >
                    Discover dependable and seamless mobility care today. Schedule
                    your first ride in just a few minutes and enjoy the
                    convenience!
                </Typography>

                <Box sx={{ pt: { xs: 1, md: 1.5 } }}>
                    <Typography
                    sx={{
                        color: '#FFFFFF',
                        fontSize: {
                        xs: pxToRem(15),
                        md: pxToRem(18),
                        },
                        lineHeight: 1.5,
                    }}
                    >
                    Get the App
                    </Typography>
                </Box>

                <Stack 
                  direction="row" 
                  spacing={1.5} 
                >
                    <Box
                    component="a"
                    href="#"
                    aria-label="Download on the App Store"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 1.5,
                        width: { xs: 200, sm: 209 },
                        height: { xs: 66, sm: 70 },
                        px: 1.5,
                        borderRadius: '6px',
                        backgroundColor: '#000000',
                        border: '1.742px solid #A6A6A6',
                        textDecoration: 'none',
                    }}
                    >
                    <StyledImage
                        src={appleIcon}
                        alt=""
                        sx={{ width: 35, height: 32, flexShrink: 0 }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: {
                            xs: pxToRem(12),
                            sm: pxToRem(15),
                            },
                            lineHeight: 1.1,
                            fontWeight: 500,
                        }}
                        >
                        Download on the
                        </Typography>
                        <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: {
                            xs: pxToRem(18),
                            sm: pxToRem(24),
                            },
                            lineHeight: 1,
                            fontWeight: 500,
                            letterSpacing: '-0.02em',
                        }}
                        >
                        App Store
                        </Typography>
                    </Box>
                    </Box>

                    <Box
                    component="a"
                    href="#"
                    aria-label="Get it on Google Play"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 1.5,
                        width: { xs: 200, sm: 209 },
                        height: { xs: 66, sm: 70 },
                        px: 1.5,
                        borderRadius: '6px',
                        backgroundColor: '#000000',
                        border: '1.742px solid #A6A6A6',
                        textDecoration: 'none',
                    }}
                    >
                    <StyledImage
                        src={playstoreIcon}
                        alt=""
                        sx={{ width: 36, height: 42, flexShrink: 0 }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: {
                            xs: pxToRem(12),
                            md: pxToRem(17),
                            },
                            lineHeight: 1.1,
                            fontWeight: 400,
                            textTransform: 'uppercase',
                        }}
                        >
                        GET IT ON
                        </Typography>
                        <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: {
                                xs: pxToRem(18),
                                md: pxToRem(24),
                            },
                            lineHeight: 1,
                            fontWeight: 400,
                            letterSpacing: '-0.02em',
                        }}
                        >
                        Google Play
                        </Typography>
                    </Box>
                    </Box>
                </Stack>
                </Stack>
            </Grid>

            <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                display: {
                    // xs: 'none',
                    xs: 'flex',
                },
                height: { xs: 250, md: 533 },
                alignItems: { xs: 'center', md: 'flex-end' },
                overflow: 'hidden',
                }}
            >
              <StyledImage
                src={overflowImage}
                alt=""
                sx={{
                  position: 'absolute',
                  right: { xs: 60, sm: 10, md: 20, lg: 35 },
                  top: 'auto',
                  bottom: { xs: 0, md: -28 },
                  width: { xs: 380, sm: 520, md: 882 },
                  maxWidth: 'none',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
                />
            </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
};
