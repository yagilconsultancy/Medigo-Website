'use client';

import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
} from '@mui/icons-material';
import Link from 'next/link';
import { AppLogo, RowStack, StyledImage, StyledLink } from '../../components';
import { pxToRem } from '../../../../common';
import { FooterLink } from './ui/components';
import footerLogo from '../../../assets/icons/logo-footer.svg';
import locationIcon from './ui/assets/icons/location-footer.svg';
import mailIcon from './ui/assets/icons/mail-footer.svg';
import phoneIcon from './ui/assets/icons/phone-footer.svg';

const quickLinks = [
  { title: 'Home', href: '/' },
  { title: 'How It Works', href: '/how-it-works' },
  { title: 'Partners', href: '/partners' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

const services = [
  { title: 'Medical Transport', href: '/how-it-works' },
  { title: 'Care Assistant', href: '/how-it-works' },
  { title: 'Wellness Trips', href: '/how-it-works' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Medige/61576495407216/',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/p/DXN5uoyjWmt/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/medigo-canada',
    icon: LinkedIn,
  },
  { label: 'Email', href: 'mailto:admin@getmedigo.com', icon: MailOutline },
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
            justifyContent: 'space-between',
          }}
          columnSpacing={{ xs: 3, md: 4, lg: 5 }}
          rowSpacing={{ xs: 4, md: 0 }}
          // columns={{ xs: 12, lg: 20 }}
        >
          <Grid size={{ xs: 12, sm: 6, lg: 2.5 }}>
            <Stack spacing={2.5}>
              {/* <AppLogo width={93} height={10} /> */}
              <StyledImage
                src={footerLogo}
                alt="Medigo Footer Logo"
                width={93}
                height={10}
                sx={{
                  width: {
                    xs: '93px',
                    md: '175px',
                  },
                  height: {
                    xs: '20px',
                    md: '45px',
                  },
                }}
              />
              <Typography
                sx={{
                  color: (theme) => theme.color.footerText,
                  fontSize: { xs: pxToRem(14), sm: pxToRem(16) },
                  lineHeight: 1.5,
                  // maxWidth: 258,
                  fontWeight: 400,
                }}
              >
                Redefining care mobility through structured coordination for
                healthcare access and daily living.
              </Typography>
              <Stack spacing={'12px'}>
                <RowStack spacing={'10px'}>
                  <StyledImage
                    src={phoneIcon}
                    alt="Phone Icon"
                    sx={{
                      width: '14px',
                      height: '14px',
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#9CA3AF',
                      fontSize: { xs: pxToRem(10), sm: pxToRem(14) },
                      lineHeight: '20px',
                      fontWeight: 400,
                    }}
                  >
                    1-416-521-3116
                  </Typography>
                </RowStack>
                <RowStack spacing={'10px'}>
                  <StyledImage
                    src={mailIcon}
                    alt="Phone Icon"
                    sx={{
                      width: '14px',
                      height: '14px',
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#9CA3AF',
                      fontSize: { xs: pxToRem(10), sm: pxToRem(14) },
                      lineHeight: '20px',
                      fontWeight: 400,
                    }}
                  >
                    admin@getmedigo.com
                  </Typography>
                </RowStack>
                <RowStack spacing={'10px'}>
                  <StyledImage
                    src={locationIcon}
                    alt="Phone Icon"
                    sx={{
                      width: '14px',
                      height: '14px',
                    }}
                  />
                  <Typography
                    sx={{
                      color: '#9CA3AF',
                      fontSize: { xs: pxToRem(10), sm: pxToRem(14) },
                      lineHeight: '20px',
                      fontWeight: 400,
                    }}
                  >
                    Milton, Ontario
                  </Typography>
                </RowStack>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 6, lg: 2 }}>
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

          {/* <Grid size={{ xs: 6, sm: 6, lg: 2 }}>
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
          </Grid> */}

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
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
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.10)',
                        width: '36px',
                        height: '36px',
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
              <Stack
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '0.667px solid rgba(255, 255, 255, 0.10)',
                  padding: '19.33px 20.67px',
                }}
                spacing={'11.7px'}
              >
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.background.default,
                      fontSize: { xs: pxToRem(10), sm: pxToRem(14) },
                      fontWeight: 600,
                      lineHeight: '21px',
                    }}
                  >
                    Customer Support
                  </Typography>
                  <Typography
                    sx={{
                      color: '#9CA3AF',
                      fontSize: { xs: pxToRem(8), sm: pxToRem(13) },
                      fontWeight: 400,
                      lineHeight: '19.5px',
                    }}
                  >
                    Mon–Fri, 9 AM–5 PM ET. In an emergency, call 911.
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontSize: { xs: pxToRem(12), sm: pxToRem(18) },
                    fontWeight: 700,
                    lineHeight: '27px',
                  }}
                >
                  1-416-521-3116
                </Typography>
              </Stack>

              {/* <StyledLink
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
              </StyledLink> */}
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: (theme) => theme.color.footerBorder,
            my: '31.991px',
          }}
        />
        <Stack
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 0 }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              color: (theme) => theme.color.footerText,
              fontSize: { xs: pxToRem(13), sm: pxToRem(14), md: pxToRem(16) },
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} MediGo. All rights reserved.
          </Typography>
          <RowStack spacing={'15.3px'}>
            <FooterLink link="Privacy Policy" href="/privacy-policy" />
            <FooterLink link="Terms of Service" href="/terms-of-service" />
            {/* <FooterLink link="Accessibility" href="#/accessibility" /> */}
          </RowStack>
        </Stack>
      </Box>
    </Box>
  );
}
