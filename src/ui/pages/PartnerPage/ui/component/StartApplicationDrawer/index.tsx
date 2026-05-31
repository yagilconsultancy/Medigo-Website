'use client';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Checkbox, Grid } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  AppButton,
  AppFullPageModal,
  AppLabel,
  FormikAppTextField,
  VisuallyHiddenInput,
} from '../../../../../modules/components';
import { pxToRem } from '../../../../../../common';
import { useFleetApplicationApi } from '../../../../../../common/hooks';
import {
  FleetPartnerApplicationDocument,
  FleetPartnerApplicationFormValues,
} from '../../../../../../common/types';
import { ReactNode, useState } from 'react';
import networkRequirementIcon from '../../assets/icons/Icon-5.svg';
import companyInformationIcon from '../../assets/icons/Icon-6.svg';
import primaryContactIcon from '../../assets/icons/Icon-8.svg';
import fleetCompositionIcon from '../../assets/icons/Icon-5.svg';
import insuranceComplianceIcon from '../../assets/icons/Icon-4.svg';
import additionalInformationIcon from '../../assets/icons/Icon-8.svg';
import uploadIcon from '../../assets/icons/Icon-9.svg';

type StartApplicationDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const initialValues: FleetPartnerApplicationFormValues = {
  companyName: '',
  registrationNumber: '',
  yearsInOperation: '',
  streetAddress: '',
  city: '',
  province: '',
  postalCode: '',
  contactName: '',
  title: '',
  emailAddress: '',
  phoneNumber: '',
  alternatePhoneNumber: '',
  totalVehicles: '',
  averageVehicleAge: '',
  wheelchairAccessibleCount: '',
  stretcherAccessibleCount: '',
  ambulatoryVehicles: '',
  insuranceProvider: '',
  policyNumber: '',
  liabilityCoverageAmount: '',
  currentServiceAreas: '',
  currentHealthcareContracts: '',
  additionalInformation: '',
  confirmAccuracy: false,
  confirmStandards: false,
  consentContact: false,
};

const wholeNumberRegex = /^\d+$/;

const wholeNumberField = (label: string) =>
  Yup.string()
    .trim()
    .matches(wholeNumberRegex, `${label} must be a valid whole number.`)
    .required(`${label} is required.`);

const validationSchema = Yup.object({
  companyName: Yup.string().trim().required('Company name is required.'),
  registrationNumber: Yup.string()
    .trim()
    .required('Registration number is required.'),
  yearsInOperation: wholeNumberField('Years in operation'),
  streetAddress: Yup.string().trim().required('Street address is required.'),
  city: Yup.string().trim().required('City is required.'),
  province: Yup.string().trim().required('Province is required.'),
  postalCode: Yup.string().trim().required('Postal code is required.'),
  contactName: Yup.string().trim().required('Contact name is required.'),
  title: Yup.string().trim().required('Title is required.'),
  emailAddress: Yup.string()
    .trim()
    .email('Please enter a valid email address.')
    .required('Email is required.'),
  phoneNumber: Yup.string().trim().required('Phone number is required.'),
  alternatePhoneNumber: Yup.string().trim(),
  totalVehicles: wholeNumberField('Total vehicles'),
  averageVehicleAge: wholeNumberField('Average vehicle age'),
  wheelchairAccessibleCount: wholeNumberField('Wheelchair accessible count'),
  stretcherAccessibleCount: wholeNumberField('Stretcher accessible count'),
  ambulatoryVehicles: wholeNumberField('Ambulatory vehicles'),
  insuranceProvider: Yup.string()
    .trim()
    .required('Insurance provider is required.'),
  policyNumber: Yup.string().trim().required('Policy number is required.'),
  liabilityCoverageAmount: Yup.string()
    .trim()
    .required('Liability coverage amount is required.'),
  currentServiceAreas: Yup.string()
    .trim()
    .required('Service areas are required.'),
  currentHealthcareContracts: Yup.string().trim(),
  additionalInformation: Yup.string().trim(),
  confirmAccuracy: Yup.boolean().oneOf(
    [true],
    'This confirmation is required.'
  ),
  confirmStandards: Yup.boolean().oneOf(
    [true],
    'This confirmation is required.'
  ),
  consentContact: Yup.boolean().oneOf([true], 'This consent is required.'),
});

const requiredDocuments = [
  'Certificate of insurance (current)',
  'Business registration documents',
  'Vehicle registration and inspection certificates',
  'Driver certifications and abstracts',
  'Safety and compliance records',
];

const sectionCardSx = {
  backgroundColor: '#FFFFFF',
  border: '0.741px solid rgba(0,0,0,0.1)',
  borderRadius: '14px',
};

const SectionHeader = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description?: string;
}) => (
  <Stack spacing={0.75} sx={{ px: { xs: 2.5, md: 3 }, pt: { xs: 2.5, md: 3 } }}>
    <Stack direction="row" spacing={0.75} alignItems="center">
      <Box sx={{ color: (theme) => theme.color.brandBlue, display: 'flex' }}>
        {icon}
      </Box>
      <Typography
        sx={{
          color: '#0A0A0A',
          fontSize: pxToRem(16),
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        {title}
      </Typography>
    </Stack>

    {description ? (
      <Typography
        sx={{
          color: '#717182',
          fontSize: pxToRem(16),
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        {description}
      </Typography>
    ) : null}
  </Stack>
);

const TextFieldLabel = ({
  children,
  required = false,
}: {
  children: ReactNode;
  required?: boolean;
}) => <AppLabel required={required}>{children}</AppLabel>;

const UploadRow = ({
  label,
  documentKey,
  fileName,
  onUpload,
}: {
  label: string;
  documentKey: string;
  fileName?: string;
  onUpload: (key: string, file?: File | null) => void;
}) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    spacing={2}
    sx={{
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      px: 1.5,
      py: 1,
      minHeight: 39,
    }}
  >
    <Typography
      component="li"
      sx={{
        color: '#364153',
        fontSize: pxToRem(14),
        lineHeight: 1.5,
        fontWeight: 400,
        pl: 2.5,
        position: 'relative',
        '&::marker': { color: '#364153' },
      }}
    >
      {label}
    </Typography>

    <Box
      component="label"
      sx={{
        flexShrink: 0,
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <Stack direction="row" spacing={0.75} alignItems="center">
        <Box
          component="img"
          src={uploadIcon.src}
          alt=""
          sx={{ width: 16, height: 16 }}
        />
        <Typography
          sx={{
            color: '#155DFC',
            fontSize: pxToRem(14),
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {fileName ?? 'Upload'}
        </Typography>
      </Stack>
      <VisuallyHiddenInput
        type="file"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onChange={(event) => {
          onUpload(documentKey, event.currentTarget.files?.[0]);
          event.currentTarget.value = '';
        }}
      />
    </Box>
  </Stack>
);

export const StartApplicationDrawer = ({
  open,
  onClose,
}: StartApplicationDrawerProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const { submitApplication, isSubmitting: isSubmittingApplication } =
    useFleetApplicationApi();

  const handleUpload = (key: string, file?: File | null) => {
    if (!file) {
      return;
    }

    setUploadedFiles((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  return (
    <AppFullPageModal
      open={open}
      onClose={onClose}
      showCloseButton={false}
      paperSx={{
        backgroundColor: '#F9FAFB',
        // px: { xs: 2, sm: 3, md: 4 },
        // pb: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          minHeight: '100%',
          px: { xs: 2, sm: 3, md: 4 },
          //   pb: { xs: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1440,
            mx: 'auto',
            pt: { xs: 2, sm: 2.5, md: 2.5 },
            // px: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={0.75}
            alignItems="center"
            onClick={onClose}
            sx={{
              cursor: 'pointer',
              color: '#64748B',
              width: 'fit-content',
              userSelect: 'none',
            }}
          >
            <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
            <Typography
              sx={{
                fontSize: pxToRem(13),
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              Back
            </Typography>
          </Stack>

          {/* <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
              }}
            >
              <HelpOutlineRoundedIcon sx={{ fontSize: 16 }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                borderRadius: '14px',
                px: 0.5,
                py: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '9999px',
                  backgroundImage:
                    'linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(91, 33, 182) 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow:
                    '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '9999px',
                    backgroundImage:
                      'linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(91, 33, 182) 100%)',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '9999px',
                  backgroundColor: '#16A34A',
                  border: '2px solid #FFFFFF',
                  ml: -1.5,
                  mt: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </Stack> */}
        </Box>

        <Box
          sx={{
            maxWidth: 986,
            mx: 'auto',
            pt: { xs: 5, sm: 6, md: 8 },
          }}
        >
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Stack
              spacing={1.5}
              alignItems="center"
              sx={{ textAlign: 'center' }}
            >
              <Typography
                component="h1"
                sx={{
                  color: '#101828',
                  fontSize: {
                    xs: pxToRem(34),
                    sm: pxToRem(40),
                    md: pxToRem(48),
                  },
                  lineHeight: 1.1,
                  fontWeight: 500,
                }}
              >
                Fleet Partner Application
              </Typography>

              <Typography
                sx={{
                  color: '#4A5565',
                  fontSize: {
                    xs: pxToRem(16),
                    sm: pxToRem(18),
                    md: pxToRem(20),
                  },
                  lineHeight: 1.4,
                  fontWeight: 400,
                  maxWidth: 823,
                }}
              >
                Join a structured network of medical transport providers
                receiving coordinated, high-quality transport requests. MediGo
                helps streamline your operations, reduce back-and-forth
                coordination, and connect you with new opportunities across
                facilities and individuals. Complete the application below to
                begin the onboarding process.
              </Typography>
            </Stack>

            <Box
              sx={{
                backgroundColor: '#EFF6FF',
                border: '0.741px solid #BEDBFF',
                borderRadius: '14px',
              }}
            >
              <SectionHeader
                icon={
                  <Box
                    component="img"
                    src={networkRequirementIcon.src}
                    alt=""
                    sx={{ width: 20, height: 20 }}
                  />
                }
                title="Network Requirements"
              />

              <Box sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 } }}>
                <Grid container spacing={1.5}>
                  {[
                    'Minimum 2 years of operation',
                    'Wheelchair/stretcher accessible vehicles',
                    'Driver certification program',
                    'Valid commercial insurance',
                    'Clean safety record',
                    'Non-emergency scope of service',
                  ].map((item) => (
                    <Grid key={item} size={{ xs: 12, sm: 6 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                      >
                        <Box
                          component="img"
                          src={networkRequirementIcon.src}
                          alt=""
                          sx={{ width: 20, height: 20, mt: '1px' }}
                        />
                        <Typography
                          sx={{
                            color: '#364153',
                            fontSize: pxToRem(14),
                            lineHeight: 1.45,
                          }}
                        >
                          {item}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                const documents: FleetPartnerApplicationDocument[] =
                  Object.entries(uploadedFiles).map(([key, file]) => ({
                    key,
                    file,
                  }));

                const success = await submitApplication({
                  ...values,
                  documents,
                });

                if (success) {
                  actions.resetForm();
                  setUploadedFiles({});
                  onClose();
                }

                actions.setSubmitting(false);
              }}
            >
              {({ isSubmitting, dirty, isValid, values, setFieldValue }) => (
                <Form>
                  <Stack spacing={3}>
                    <Box sx={sectionCardSx}>
                      <SectionHeader
                        icon={
                          <Box
                            component="img"
                            src={companyInformationIcon.src}
                            alt=""
                            sx={{ width: 20, height: 20 }}
                          />
                        }
                        title="Company Information"
                        description="Tell us about your organization"
                      />

                      <Box
                        sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 } }}
                      >
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Legal Company Name
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="companyName"
                                placeholder="ABC Transportation Inc."
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Business Registration Number
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="registrationNumber"
                                placeholder="123456789RC0001"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Years in Operation
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="yearsInOperation"
                                placeholder="5"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Street Address
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="streetAddress"
                                placeholder="123 Main Street"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 4 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>City</TextFieldLabel>
                              <FormikAppTextField
                                name="city"
                                placeholder="Toronto"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 4 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>Province</TextFieldLabel>
                              <FormikAppTextField
                                name="province"
                                placeholder="ON"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 4 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Postal Code
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="postalCode"
                                placeholder="M5V 3A8"
                                fullWidth
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>

                    <Box sx={sectionCardSx}>
                      <SectionHeader
                        icon={
                          <Box
                            component="img"
                            src={primaryContactIcon.src}
                            alt=""
                            sx={{ width: 20, height: 20 }}
                          />
                        }
                        title="Primary Contact Information"
                        description="Who should we contact regarding this application?"
                      />

                      <Box
                        sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 } }}
                      >
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Full Name
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="contactName"
                                placeholder="John Smith"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Title / Position
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="title"
                                placeholder="Fleet Manager"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Email Address
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="emailAddress"
                                placeholder="john.smith@company.com"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Phone Number
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="phoneNumber"
                                placeholder="(416) 555-0123"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel>
                                Alternate Phone Number
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="alternatePhoneNumber"
                                placeholder="(416) 555-0124"
                                fullWidth
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>

                    <Box sx={sectionCardSx}>
                      <SectionHeader
                        icon={
                          <Box
                            component="img"
                            src={fleetCompositionIcon.src}
                            alt=""
                            sx={{ width: 20, height: 20 }}
                          />
                        }
                        title="Fleet Composition"
                        description="Provide details about your vehicle fleet"
                      />

                      <Box
                        sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 } }}
                      >
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Total Number of Vehicles
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="totalVehicles"
                                placeholder="10"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Average Vehicle Age (years)
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="averageVehicleAge"
                                placeholder="3"
                                fullWidth
                              />
                            </Stack>
                          </Grid>
                        </Grid>

                        <Box
                          sx={{
                            mt: 2.5,
                            backgroundColor: '#EFF6FF',
                            border: '0.741px solid #BEDBFF',
                            borderRadius: '10px',
                            px: { xs: 2, md: 2.5 },
                            py: { xs: 2, md: 2.5 },
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#101828',
                              fontSize: pxToRem(16),
                              fontWeight: 600,
                              lineHeight: 1.5,
                              mb: 1.5,
                            }}
                          >
                            Accessible Vehicle Count
                          </Typography>

                          <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                              <Stack spacing={0.75}>
                                <TextFieldLabel required>
                                  Wheelchair Accessible
                                </TextFieldLabel>
                                <FormikAppTextField
                                  name="wheelchairAccessibleCount"
                                  placeholder="5"
                                  fullWidth
                                />
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                              <Stack spacing={0.75}>
                                <TextFieldLabel required>
                                  Stretcher Accessible
                                </TextFieldLabel>
                                <FormikAppTextField
                                  name="stretcherAccessibleCount"
                                  placeholder="3"
                                  fullWidth
                                />
                              </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                              <Stack spacing={0.75}>
                                <TextFieldLabel required>
                                  Ambulatory Vehicles
                                </TextFieldLabel>
                                <FormikAppTextField
                                  name="ambulatoryVehicles"
                                  placeholder="2"
                                  fullWidth
                                />
                              </Stack>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={sectionCardSx}>
                      <SectionHeader
                        icon={
                          <Box
                            component="img"
                            src={insuranceComplianceIcon.src}
                            alt=""
                            sx={{ width: 20, height: 20 }}
                          />
                        }
                        title="Insurance & Compliance"
                        description="Insurance and regulatory information"
                      />

                      <Box
                        sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 } }}
                      >
                        <Grid container spacing={2.5}>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Insurance Provider
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="insuranceProvider"
                                placeholder="ABC Insurance Company"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Policy Number
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="policyNumber"
                                placeholder="POL-123-456789"
                                fullWidth
                              />
                            </Stack>
                          </Grid>

                          <Grid size={{ xs: 12 }}>
                            <Stack spacing={0.75}>
                              <TextFieldLabel required>
                                Liability Coverage Amount
                              </TextFieldLabel>
                              <FormikAppTextField
                                name="liabilityCoverageAmount"
                                placeholder="$5,000,000"
                                fullWidth
                              />
                              <Typography
                                sx={{
                                  color: '#4A5565',
                                  fontSize: pxToRem(14),
                                  lineHeight: 1.5,
                                }}
                              >
                                Minimum $2,000,000 required
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>

                        <Box
                          sx={{
                            mt: 2.5,
                            backgroundColor: '#F9FAFB',
                            border: '0.741px solid #E5E7EB',
                            borderRadius: '10px',
                            px: { xs: 2, md: 2.25 },
                            py: { xs: 2, md: 2.25 },
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#101828',
                              fontSize: pxToRem(16),
                              fontWeight: 600,
                              lineHeight: 1.5,
                            }}
                          >
                            Required Documentation
                          </Typography>
                          <Typography
                            sx={{
                              mt: 0.5,
                              color: '#4A5565',
                              fontSize: pxToRem(14),
                              lineHeight: 1.45,
                            }}
                          >
                            The following documents will be required during the
                            verification process:
                          </Typography>

                          <Stack spacing={0.5} sx={{ mt: 1.5 }}>
                            {requiredDocuments.map((label) => (
                              <Stack key={label} spacing={0.75}>
                                <UploadRow
                                  label={label}
                                  documentKey={label}
                                  fileName={uploadedFiles[label]?.name}
                                  onUpload={handleUpload}
                                />
                                {uploadedFiles[label] ? (
                                  <Typography
                                    sx={{
                                      color: '#155DFC',
                                      fontSize: pxToRem(12),
                                      lineHeight: 1.4,
                                      px: 1,
                                    }}
                                  >
                                    Selected: {uploadedFiles[label].name}
                                  </Typography>
                                ) : null}
                              </Stack>
                            ))}
                          </Stack>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={sectionCardSx}>
                      <SectionHeader
                        icon={
                          <Box
                            component="img"
                            src={additionalInformationIcon.src}
                            alt=""
                            sx={{ width: 20, height: 20 }}
                          />
                        }
                        title="Additional Information"
                        description="Help us understand your business better"
                      />

                      <Box
                        sx={{ px: { xs: 2.5, md: 3 }, pb: { xs: 2.5, md: 3 } }}
                      >
                        <Stack spacing={2}>
                          <Stack spacing={0.75}>
                            <TextFieldLabel required>
                              Current Service Areas
                            </TextFieldLabel>
                            <FormikAppTextField
                              name="currentServiceAreas"
                              placeholder="List the cities, regions, or postal code areas you currently serve (e.g., Greater Toronto Area, Ottawa-Gatineau, etc.)"
                              fullWidth
                              multiline
                              minRows={3}
                            />
                          </Stack>

                          <Stack spacing={0.75}>
                            <TextFieldLabel>
                              Current Healthcare/Medical Contracts
                            </TextFieldLabel>
                            <FormikAppTextField
                              name="currentHealthcareContracts"
                              placeholder="List any existing contracts with hospitals, clinics, care facilities, or government agencies"
                              fullWidth
                              multiline
                              minRows={3}
                            />
                          </Stack>

                          <Stack spacing={0.75}>
                            <TextFieldLabel>
                              Additional Information
                            </TextFieldLabel>
                            <FormikAppTextField
                              name="additionalInformation"
                              placeholder="Any additional information you'd like to share about your fleet, services, or qualifications"
                              fullWidth
                              multiline
                              minRows={3}
                            />
                          </Stack>
                        </Stack>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        ...sectionCardSx,
                        backgroundColor: '#F9FAFB',
                        px: { xs: 2.5, md: 3 },
                        py: { xs: 2.5, md: 3 },
                      }}
                    >
                      <Stack spacing={1.5}>
                        {[
                          'I confirm that all information provided is accurate and complete. I understand that MediGo will conduct verification checks and that false information may result in application rejection or network removal.',
                          "I acknowledge that fleet partners must comply with MediGo's operational standards, certification requirements, vehicle compliance standards, and zero-tolerance safety policies.",
                          'I consent to be contacted by MediGo regarding this application and potential partnership opportunities.',
                        ].map((label, index) => {
                          const fieldName =
                            index === 0
                              ? 'confirmAccuracy'
                              : index === 1
                                ? 'confirmStandards'
                                : 'consentContact';

                          return (
                            <Stack
                              key={fieldName}
                              direction="row"
                              spacing={1.25}
                            >
                              <Checkbox
                                checked={Boolean(
                                  values[
                                    fieldName as keyof FleetPartnerApplicationFormValues
                                  ]
                                )}
                                onChange={(_, checked) =>
                                  setFieldValue(fieldName, checked)
                                }
                                sx={{
                                  p: 0,
                                  color: '#CBD5E1',
                                  '&.Mui-checked': {
                                    color: '#155DFC',
                                  },
                                }}
                              />
                              <Typography
                                sx={{
                                  color: '#364153',
                                  fontSize: pxToRem(14),
                                  lineHeight: 1.45,
                                  fontWeight: 500,
                                }}
                              >
                                {label} *
                              </Typography>
                            </Stack>
                          );
                        })}
                      </Stack>
                    </Box>

                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={1.5}
                      justifyContent="flex-end"
                      sx={{ pt: 0.5 }}
                    >
                      <AppButton
                        type="button"
                        // variant="outlined"
                        // color="primary"
                        onClick={onClose}
                        sx={{
                          //   minWidth: 120,
                          //   minHeight: 48,
                          borderRadius: '8px',
                          backgroundColor: '#FFFFFF',
                          color: '#0A0A0A',
                          borderColor: 'rgba(0,0,0,0.1)',
                          '&:hover': {
                            backgroundColor: '#FFFFFF',
                          },
                        }}
                      >
                        Cancel
                      </AppButton>

                      <AppButton
                        type="submit"
                        // variant="contained"
                        // color="primary"
                        isLoading={isSubmitting || isSubmittingApplication}
                        disabled={
                          isSubmitting ||
                          isSubmittingApplication ||
                          !(dirty && isValid)
                        }
                        sx={{
                          //   minWidth: { xs: '100%', sm: 220 },
                          //   minHeight: 48,
                          borderRadius: '8px',
                          backgroundColor: '#155DFC',
                          color: '#FFFFFF',
                          //   '&:hover': {
                          //     backgroundColor: '#155DFC',
                          //   },
                        }}
                      >
                        Submit Application
                      </AppButton>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ height: { xs: '50px', md: '70px' } }}></Box>
    </AppFullPageModal>
  );
};
