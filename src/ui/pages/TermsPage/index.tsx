'use client';

import { Box, Paper, Stack, Typography } from '@mui/material';

import { pxToRem } from '@/common';
import { AppLayout } from '@/ui/modules/partials';

type SectionProps = {
  title: string;
  description?: string;
  bullets?: string[];
};

function Section({ title, description, bullets }: SectionProps) {
  return (
    <Stack spacing={pxToRem(10)}>
      <Typography
        sx={{
          color: '#0F172A',
          fontSize: pxToRem(16),
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          sx={{
            color: '#374151',
            fontSize: pxToRem(16),
            lineHeight: pxToRem(24),
          }}
        >
          {description}
        </Typography>
      )}

      {!!bullets?.length && (
        <Stack
          component="ul"
          spacing={pxToRem(8)}
          sx={{
            m: 0,
            pl: pxToRem(22),
            color: '#374151',
          }}
        >
          {bullets.map((bullet) => (
            <Typography
              key={bullet}
              component="li"
              sx={{
                color: '#374151',
                fontSize: pxToRem(16),
                lineHeight: pxToRem(24),
              }}
            >
              {bullet}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

const sections: SectionProps[] = [
  {
    title: '1. Acceptance of Terms',
    description:
      "By accessing, using, or booking through MediGo's website, app, or services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.",
  },
  {
    title: '2. Service Description',
    description:
      'MediGo is a technology platform that connects riders with certified, non-emergency transportation providers for scheduled medical appointments, treatments, and daily mobility needs. MediGo does not provide transportation services directly; our role is to coordinate trips between riders and providers.',
  },
  {
    title: '3. Eligibility',
    bullets: [
      'You must be at least 18 years old to use our service.',
      'You must provide accurate and complete information.',
      'You are responsible for maintaining account confidentiality.',
      'You are not permitted to use our services for unlawful purposes.',
    ],
  },
  {
    title: '4. Booking and Cancellation',
    description:
      'All ride requests must be submitted through the app, website, or approved booking channels. Ride availability depends on provider scheduling, capacity, and location.',
    bullets: [
      'Cancellations within 24 hours may incur a cancellation fee.',
      'Cancellations more than 24 hours before pickup may be eligible for a refund.',
      'No-shows or late cancellations may be charged the full service fee.',
      'Medical emergencies or unusual service interruptions may be reviewed on a case-by-case basis.',
    ],
  },
  {
    title: '5. Payment',
    bullets: [
      'Fees and charges will be communicated before service whenever possible.',
      'Payment may be required at booking, before pickup, or after completion depending on the service.',
      'Pricing may include distance, time, vehicle type, wait time, taxes, and service fees.',
      'Failed payments may result in suspension or cancellation of the service.',
      'We are not responsible for charges incurred through your payment method or account.',
    ],
  },
  {
    title: '6. User Conduct',
    bullets: [
      'Treat drivers, staff, and other users with respect.',
      'Do not engage in abusive, harassing, or threatening behavior.',
      'Do not damage vehicles, equipment, or personal property.',
      'Do not use the service for illegal, unsafe, or fraudulent activity.',
      'Do not smoke, use alcohol or drugs, or carry weapons during a ride.',
      'Follow all safety instructions and applicable traffic laws.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    description:
      'MediGo is not liable for delays, cancellations, or service disruptions outside our control. To the maximum extent permitted by law, we are not responsible for:',
    bullets: [
      'Actions or omissions of independent providers.',
      'Vehicle accidents or injuries related to provider conduct.',
      'Delays caused by traffic, weather, or route changes.',
      'Loss or damage to personal belongings.',
      'Medical outcomes or complications related to your trip.',
    ],
  },
  {
    title: '8. Account Suspension & Termination',
    description:
      'We reserve the right to suspend or terminate your account if:',
    bullets: [
      'You violate any of these Terms.',
      'You provide false, misleading, or incomplete information.',
      'You engage in abusive or unsafe behavior.',
      'You commit fraud or create unresolved payment issues.',
      'Your conduct threatens the safety or integrity of the service.',
    ],
  },
  {
    title: '9. Indemnification',
    description:
      'You agree to indemnify and hold harmless MediGo, its affiliates, officers, employees, contractors, and partners from any claims, liabilities, damages, losses, and expenses arising from your use of the service, your violation of these Terms, or your infringement of any rights.',
  },
  {
    title: '10. Governing Law',
    description:
      'These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.',
  },
  {
    title: '11. Changes to Terms',
    description:
      'We may revise these Terms at any time. If we make material changes, we will notify you by email or through our app or website. Continued use of the service after changes are posted means you accept the updated Terms.',
  },
];

export function TermsPage() {
  return (
    <AppLayout>
      <Box
        sx={{
          bgcolor: '#F8FAFC',
          minHeight: `calc(100vh - ${pxToRem(64)})`,
          px: { xs: pxToRem(16), md: pxToRem(40) },
          py: pxToRem(28),
        }}
      >
        <Box
          sx={{
            maxWidth: '1278px',
            mx: 'auto',
            px: { xs: 0, md: '114px' },
          }}
        >
          <Stack spacing={pxToRem(6)}>
            <Typography
              sx={{
                color: '#0F172A',
                fontWeight: 700,
                fontSize: {
                  xs: pxToRem(18),
                  md: pxToRem(24),
                  lg: pxToRem(30),
                },
              }}
            >
              Terms of Service
            </Typography>

            <Typography
              sx={{
                color: '#64748B',
                fontSize: pxToRem(12),
                lineHeight: pxToRem(18),
              }}
            >
              Terms governing the use of MediGo services
            </Typography>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              mt: pxToRem(18),
              borderRadius: pxToRem(14),
              border: '1px solid #E2E8F0',
              bgcolor: '#FFFFFF',
              p: pxToRem(24),
            }}
          >
            <Stack spacing={pxToRem(24)}>
              <Stack spacing={pxToRem(2)}>
                <Typography
                  sx={{
                    color: '#6B7280',
                    fontSize: pxToRem(13),
                    fontWeight: 700,
                  }}
                >
                  Effective Date:{' '}
                  <Box component="span" sx={{ fontWeight: 400 }}>
                    February 26, 2026
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: '#6B7280',
                    fontSize: pxToRem(13),
                    fontWeight: 700,
                  }}
                >
                  Last Updated:{' '}
                  <Box component="span" sx={{ fontWeight: 400 }}>
                    February 26, 2026
                  </Box>
                </Typography>
              </Stack>

              <Box
                sx={{
                  bgcolor: '#FEF2F2',
                  borderLeft: `${pxToRem(4)} solid #EF4444`,
                  borderRadius: pxToRem(16),
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  px: pxToRem(20),
                  py: pxToRem(16),
                }}
              >
                <Typography
                  sx={{
                    color: '#7F1D1D',
                    fontSize: pxToRem(14),
                    fontWeight: 700,
                    mb: pxToRem(6),
                  }}
                >
                  Non-Emergency Service Notice
                </Typography>

                <Typography
                  sx={{
                    color: '#7F1D1D',
                    fontSize: pxToRem(14),
                    lineHeight: pxToRem(21),
                  }}
                >
                  MediGo is not an emergency transportation service. If you are
                  experiencing a medical emergency, call 911 or your local
                  emergency number immediately.
                </Typography>
              </Box>

              <Stack spacing={pxToRem(18)}>
                {sections.map((section) => (
                  <Section
                    key={section.title}
                    title={section.title}
                    description={section.description}
                    bullets={section.bullets}
                  />
                ))}
              </Stack>

              <Stack spacing={pxToRem(10)}>
                <Typography
                  sx={{
                    color: '#0F172A',
                    fontSize: pxToRem(16),
                    fontWeight: 700,
                  }}
                >
                  12. Contact Information
                </Typography>

                <Box
                  sx={{
                    bgcolor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: pxToRem(16),
                    p: pxToRem(16),
                  }}
                >
                  <Stack spacing={pxToRem(8)}>
                    <Typography
                      sx={{
                        color: '#0F172A',
                        fontSize: pxToRem(14),
                        fontWeight: 700,
                      }}
                    >
                      MediGo Customer Support
                    </Typography>

                    <Typography
                      sx={{
                        color: '#475569',
                        fontSize: pxToRem(14),
                        lineHeight: pxToRem(21),
                      }}
                    >
                      Email: info@getmedigo.com
                    </Typography>

                    <Typography
                      sx={{
                        color: '#475569',
                        fontSize: pxToRem(14),
                        lineHeight: pxToRem(21),
                      }}
                    >
                      Phone: 1-416-521-3116
                    </Typography>

                    <Typography
                      sx={{
                        color: '#475569',
                        fontSize: pxToRem(14),
                        lineHeight: pxToRem(21),
                      }}
                    >
                      Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </AppLayout>
  );
}
