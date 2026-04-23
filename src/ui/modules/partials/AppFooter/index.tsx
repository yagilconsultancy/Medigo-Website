'use client';

import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Facebook, Twitter, LinkedIn, MailOutline } from '@mui/icons-material';
import Link from 'next/link';
import { AppLogo, RowStack, StyledLink } from '../../components';
import { pxToRem } from '../../../../common';
import { FooterLink } from './ui/components';

const quickLinks = [
  { title: 'Home', href: '/' },
  { title: 'How It Works', href: '/#how-it-works' },
  { title: 'Partners', href: '/#partners' },
  { title: 'About', href: '/#about' },
  { title: 'Contact', href: '/#contact' },
];

const services = [
  { title: 'Medical Transport', href: '/services#medical-transport' },
  { title: 'Care Assistant', href: '/services#care-assistant' },
  { title: 'Wellness Trips', href: '/services#wellness-trips' },
];

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'LinkedIn', href: '#', icon: LinkedIn },
  { label: 'Email', href: 'mailto:info@getmedigo.com', icon: MailOutline },
];

export function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.color.footerBackground,
        color: (theme) => theme.color.footerText,
        px: { xs: 2, sm: 3, md: 4 },
        pt: '47.998px',
        width: '100%',
        maxWidth: '1920px',
        pb: { xs: 4, md: 4.5 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
        }}
      >
        <Grid
          container
          sx={{
            alignItems: 'start',
          }}
          columnSpacing={{ xs: 3, md: 4, lg: 5 }}
          rowSpacing={{ xs: 4, md: 0 }}
          columns={{ xs: 12, lg: 20 }}
        >
          <Grid size={{ xs: 12, sm: 6, lg: 7 }}>
            <Stack spacing={2.5}>
              <AppLogo width={93} height={10} />
              <Typography
                sx={{
                  color: (theme) => theme.color.footerText,
                  fontSize: { xs: pxToRem(14), sm: pxToRem(16) },
                  lineHeight: 1.5,
                  maxWidth: 258,
                  fontWeight: 400,
                }}
              >
                Redefining care mobility through structured coordination for
                healthcare access and daily living.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 6, lg: 4 }}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.background.default,
                  fontSize: { xs: pxToRem(16), sm: pxToRem(18) },
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {quickLinks.map((item) => (
                  <FooterLink
                    key={item.title}
                    link={item.title}
                    href={item.href}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 6, lg: 4 }}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.background.default,
                  fontSize: { xs: pxToRem(15), sm: pxToRem(16) },
                  fontWeight: 700,
                  lineHeight: 1.5,
                }}
              >
                Services
              </Typography>
              <Stack spacing={1}>
                {services.map((item) => (
                  <FooterLink
                    key={item.title}
                    link={item.title}
                    href={item.href}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.background.default,
                  fontSize: { xs: pxToRem(16), sm: pxToRem(18) },
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                Connect
              </Typography>

              <RowStack spacing={2} sx={{ flexWrap: 'wrap' }}>
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <IconButton
                      key={item.label}
                      component={Link}
                      href={item.href}
                      aria-label={item.label}
                      sx={{
                        color: (theme) => theme.color.footerText,
                        borderRadius: 0,
                        width: 20,
                        height: 20,
                        p: 0,
                        '&:hover': {
                          color: (theme) => theme.palette.background.default,
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    </IconButton>
                  );
                })}
              </RowStack>

              <StyledLink
                href="mailto:info@getmedigo.com"
                sx={{
                  color: (theme) => theme.color.footerText,
                  fontSize: { xs: pxToRem(13), sm: pxToRem(14) },
                  lineHeight: 1.5,
                  '&:hover': {
                    textDecoration: 'underline',
                    color: (theme) => theme.palette.background.default,
                  },
                }}
              >
                info@getmedigo.com
              </StyledLink>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: (theme) => theme.color.footerBorder,
            my: '31.991px',
          }}
        />

        <Typography
          sx={{
            textAlign: 'center',
            color: (theme) => theme.color.footerText,
            fontSize: { xs: pxToRem(13), sm: pxToRem(14), md: pxToRem(16) },
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          © {new Date().getFullYear()} MediGO. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
