'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import { Box, MenuItem, Stack, Typography } from '@mui/material';
import { AppLayout } from '@/ui/modules/partials';
import {
  AppButton,
  AppAccordion,
  AppGradientHeroSection,
  AppRevealOnScroll,
  AppLabel,
  FormikAppTextField,
  StyledImage,
  AppCtaBanner,
} from '@/ui/modules/components';
import { pxToRem } from '../../../common';
import phoneIcon from './ui/assets/icons/phone.svg';
import emailIcon from './ui/assets/icons/location.svg';
import officeIcon from './ui/assets/icons/mail.svg';
import sendIcon from './ui/assets/icons/send.svg';

type ContactFormValues = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  serviceType: string;
  message: string;
};

const initialValues: ContactFormValues = {
  fullName: '',
  emailAddress: '',
  phoneNumber: '',
  serviceType: '',
  message: '',
};

const validationSchema = Yup.object({
  fullName: Yup.string().trim().required('Full name is required.'),
  emailAddress: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Email is required.'),
  phoneNumber: Yup.string().trim(),
  serviceType: Yup.string().trim().required('Service type is required.'),
  message: Yup.string().trim().required('Message is required.'),
});

const serviceTypeOptions = [
  'Transportation Request',
  'Partnership Inquiry',
  'Platform Access',
  'General Support',
];

const faqItems = [
  {
    id: 'what-is-medigo',
    title: 'What is MediGo?',
    description:
      'MediGo is a platform that helps individuals and families arrange safe, comfortable, non-emergency medical transportation (NEMT). We coordinate with certified providers for appointments, treatments, and non-emergency medical needs with dignity and respect.',
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
      'No. MediGo provides non-emergency medical transportation only. For emergencies, please call 911. We focus on scheduled medical appointments, treatments, and wellness trips that require professional, caring transport.',
  },
] as const;

export const ContactPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<string>(faqItems[0].id);

  return (
    <AppLayout>
      <AppGradientHeroSection
        titleLines={['Contact MediGo']}
        subtitle="Request a ride or demo to learn more about our services"
        backgroundImage="linear-gradient(167.77463701693404deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)"
        showBlurCircles={false}
        minHeight={320}
      />

      <AppRevealOnScroll delay={80}>
        <Box
          component="section"
          sx={{
            backgroundColor: '#FFFFFF',
            px: { xs: 2, sm: 3, md: 4 },
            pt: { xs: 8, sm: 10, md: 12 },
            pb: { xs: 8, sm: 10, md: 12 },
          }}
        >
          <Box
            sx={{
              maxWidth: 1360,
              mx: 'auto',
            }}
          >
            <Grid container spacing={{ xs: 5, md: 6 }} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={{ xs: 3, md: 4 }}>
                  <Box>
                    <Typography
                      component="h2"
                      sx={{
                        color: (theme) => theme.color.faqTitle,
                        fontSize: {
                          xs: pxToRem(24),
                          md: pxToRem(24),
                        },
                        lineHeight: 1.33,
                        fontWeight: 700,
                      }}
                    >
                      Contact Information
                    </Typography>
                  </Box>

                  <Stack spacing={3}>
                    {[
                      {
                        icon: phoneIcon,
                        title: 'Phone',
                        value: '1-800-MEDI-GO1',
                        note: 'Mon-Fri 8am-8pm EST',
                      },
                      {
                        icon: emailIcon,
                        title: 'Email',
                        value: 'info@getmedigo.com',
                        note: '24-48 hour response time',
                      },
                      {
                        icon: officeIcon,
                        title: 'Office',
                        value:
                          '123 Healthcare Drive\nSuite 400\nMilton, MA 02101',
                        note: '',
                      },
                    ].map((item) => (
                      <Stack
                        key={item.title}
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '9999px',
                            backgroundColor: '#DBEAFE',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <StyledImage
                            src={item.icon}
                            alt=""
                            width={24}
                            height={24}
                          />
                        </Box>

                        <Stack spacing={0.25} sx={{ pt: 0.25 }}>
                          <Typography
                            sx={{
                              color: (theme) => theme.color.faqTitle,
                              fontSize: pxToRem(18),
                              lineHeight: 1.5,
                              fontWeight: 600,
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: (theme) => theme.color.faqText,
                              fontSize: pxToRem(16),
                              lineHeight: 1.5,
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {item.value}
                          </Typography>

                          {item.note ? (
                            <Typography
                              sx={{
                                color: (theme) => theme.color.footerText,
                                fontSize: pxToRem(14),
                                lineHeight: 1.4,
                              }}
                            >
                              {item.note}
                            </Typography>
                          ) : null}
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>

                  <Box
                    sx={{
                      borderRadius: '14px',
                      backgroundColor: '#EFF6FF',
                      px: 3,
                      py: 3,
                    }}
                  >
                    <Stack spacing={1.25}>
                      <Typography
                        sx={{
                          color: (theme) => theme.color.faqTitle,
                          fontSize: pxToRem(18),
                          lineHeight: 1.5,
                          fontWeight: 700,
                        }}
                      >
                        Important Notice
                      </Typography>

                      <Typography
                        sx={{
                          color: (theme) => theme.color.navText,
                          fontSize: pxToRem(16),
                          lineHeight: 1.5,
                          maxWidth: 300,
                        }}
                      >
                        MediGo provides non-emergency medical transportation
                        (NEMT) only.
                      </Typography>

                      <Typography
                        sx={{
                          color: '#FF0000',
                          fontSize: pxToRem(14),
                          lineHeight: 1.4,
                          fontWeight: 700,
                          maxWidth: 267,
                        }}
                      >
                        For medical emergencies, please call 911 immediately.
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Box
                  sx={{
                    border: '0.814px solid #E5E7EB',
                    borderRadius: '15.392px',
                    backgroundColor: '#FFFFFF',
                    px: { xs: 2.5, sm: 3.5, md: 4.5 },
                    pt: { xs: 3.5, md: 4.5 },
                    pb: { xs: 2.5, md: 1.5 },
                  }}
                >
                  <Stack spacing={{ xs: 3, md: 3.5 }}>
                    <Typography
                      component="h2"
                      sx={{
                        color: (theme) => theme.color.faqTitle,
                        fontSize: {
                          xs: pxToRem(24),
                          sm: pxToRem(26),
                          md: pxToRem(26),
                        },
                        lineHeight: 1.33,
                        fontWeight: 700,
                      }}
                    >
                      Send Us a Message
                    </Typography>

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={async (values, actions) => {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 900)
                        );
                        actions.resetForm();
                        actions.setSubmitting(false);
                      }}
                    >
                      {({ isSubmitting, dirty, isValid }) => (
                        <Box component={Form}>
                          <Grid container spacing={{ xs: 2.5, md: 2.5 }}>
                            <Grid size={{ xs: 12, md: 6 }}>
                              <Stack spacing={1}>
                                <AppLabel required>Full Name</AppLabel>
                                <FormikAppTextField
                                  name="fullName"
                                  placeholder="John Doe"
                                  fullWidth
                                />
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                              <Stack spacing={1}>
                                <AppLabel required>Email Address</AppLabel>
                                <FormikAppTextField
                                  name="emailAddress"
                                  placeholder="john@example.com"
                                  fullWidth
                                />
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                              <Stack spacing={1}>
                                <AppLabel>Phone Number</AppLabel>
                                <FormikAppTextField
                                  name="phoneNumber"
                                  placeholder="(555) 123-4567"
                                  fullWidth
                                />
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                              <Stack spacing={1}>
                                <AppLabel required>Service Type</AppLabel>
                                <FormikAppTextField
                                  name="serviceType"
                                  placeholder="Select an option"
                                  fullWidth
                                  select
                                  SelectProps={{
                                    displayEmpty: true,
                                    renderValue: (selected) =>
                                      typeof selected === 'string' &&
                                      selected.length > 0
                                        ? selected
                                        : 'Select an option',
                                  }}
                                >
                                  <MenuItem disabled value="">
                                    Select an option
                                  </MenuItem>
                                  {serviceTypeOptions.map((option) => (
                                    <MenuItem key={option} value={option}>
                                      {option}
                                    </MenuItem>
                                  ))}
                                </FormikAppTextField>
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                              <Stack spacing={1}>
                                <AppLabel required>Message</AppLabel>
                                <FormikAppTextField
                                  name="message"
                                  placeholder="Tell us how we can assist — whether it’s transportation, partnership inquiries, or platform access"
                                  fullWidth
                                  multiline
                                  minRows={7}
                                />
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                              <AppButton
                                type="submit"
                                variant="contained"
                                color="primary"
                                isLoading={isSubmitting}
                                disabled={isSubmitting || !(dirty && isValid)}
                                endIcon={
                                  <StyledImage
                                    src={sendIcon}
                                    alt=""
                                    width={22}
                                    height={22}
                                  />
                                }
                                sx={{
                                  width: '100%',
                                  minHeight: { xs: 52, md: 62 },
                                  borderRadius: '9999px',
                                  backgroundColor: '#155DFC',
                                  color: '#FFFFFF',
                                  fontSize: {
                                    xs: pxToRem(16),
                                    md: pxToRem(18),
                                  },
                                  fontWeight: 600,
                                  '&:hover': {
                                    backgroundColor: '#155DFC',
                                  },
                                }}
                              >
                                Send Message
                              </AppButton>
                            </Grid>

                            <Grid size={{ xs: 12 }}>
                              <Typography
                                sx={{
                                  textAlign: 'center',
                                  color: (theme) => theme.color.footerText,
                                  fontSize: pxToRem(14),
                                  lineHeight: 1.5,
                                }}
                              >
                                * Required fields. We typically respond within
                                24 hours.
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      )}
                    </Formik>
                  </Stack>
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
            backgroundColor: '#F9FAFB',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 8, sm: 10, md: 12 },
          }}
        >
          <Box
            sx={{
              maxWidth: 1280,
              mx: 'auto',
            }}
          >
            <Stack spacing={{ xs: 3, md: 6 }}>
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
                Frequently Asked Questions
              </Typography>

              <Stack spacing={{ xs: 2, md: 3 }}>
                {faqItems.map((item) => (
                  <AppAccordion
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    expanded={expandedFaq === item.id}
                    onChange={(_, isExpanded) => {
                      setExpandedFaq(isExpanded ? item.id : '');
                    }}
                  >
                    {item.description}
                  </AppAccordion>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </AppRevealOnScroll>
      <AppRevealOnScroll>
        <AppCtaBanner
        title="MediGo is redefining care mobility"
        description="Join us in building a more accessible, reliable, and patient-centered future for healthcare transportation."
        primaryActionLabel="Apply to Become a Partner"
        secondaryActionLabel="Schedule a Consultation"
        primaryActionHref="/#contact"
        secondaryActionHref="/#contact"
        />
    </AppRevealOnScroll>
    </AppLayout>
  );
};
