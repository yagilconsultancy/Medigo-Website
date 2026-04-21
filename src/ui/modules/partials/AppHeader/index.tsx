'use client';

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Close, Menu } from '@mui/icons-material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AppButton, AppLogo, RowStack } from '../../components';
import { pxToRem } from '../../../../common';

const navItems = [
  { label: 'How It Works', href: '/how-it-works', section: 'how-it-works' },
  { label: 'Partners', href: '/partners', section: 'partners' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
];

export function AppHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const elements = navItems
      .map((item) => document.getElementById(item.section))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        const mostVisible = visible.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        setActiveSection(mostVisible.target.id);
      },
      { threshold: [0.35, 0.5, 0.65] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <AppBar
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        boxShadow: 'none',
        position: 'sticky',
        top: 0,
        maxWidth: '1920px',
        zIndex: (theme) => theme.zIndex.appBar + 1,
        mx: 'auto',
      }}
      elevation={0}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: { xs: 64, md: 64 },
          px: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '1920px',
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexShrink: 0, alignItems: 'center' }}>
            <AppLogo width={93} height={32} />
          </Box>

          <RowStack
            component="nav"
            aria-label="Primary"
            spacing={{ md: 3, lg: 4 }}
            sx={{
              flex: 1,
              justifyContent: 'center',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={Link}
                href={item.href}
                onClick={() => setActiveSection(item.section)}
                sx={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: (theme) =>
                    activeSection === item.section
                      ? theme.color.brandBlue
                      : theme.color.navText,
                  fontSize: pxToRem(16),
                  fontWeight: activeSection === item.section ? 500 : 400,
                  lineHeight: 1.5,
                  transition: 'color 180ms ease, font-weight 180ms ease',
                  '&:hover': {
                    color: (theme) => theme.color.brandBlue,
                    fontWeight: 500,
                    '&::after': {
                      transform: 'scaleX(1)',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: '-4px',
                    width: '100%',
                    height: '2px',
                    backgroundColor: (theme) => theme.color.brandBlue,
                    transform:
                      activeSection === item.section
                        ? 'scaleX(1)'
                        : 'scaleX(0)',
                    transformOrigin: 'left center',
                    transition: 'transform 220ms ease',
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </RowStack>

          <AppButton
            component={Link}
            href="/#contact"
            variant="contained"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              borderRadius: '999999px',
              px: 3,
              py: 1.25,
              minWidth: '211px',
              height: '41px',
              textTransform: 'none',
              fontSize: pxToRem(16),
              lineHeight: 1.5,
              fontWeight: 400,
              backgroundColor: (theme) => theme.color.brandBlue,
              '&:hover': {
                backgroundColor: (theme) => theme.color.brandBlue,
              },
            }}
          >
            Book a Ride
          </AppButton>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: (theme) => theme.color.black,
            }}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
        slotProps={{
          paper: {
            sx: {
              width: 'min(84vw, 340px)',
              px: 3,
              py: 3,
            },
          },
        }}
      >
        <Box
          role="presentation"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <RowStack justifyContent="space-between">
            <AppLogo width={93} height={32} />
            <IconButton
              aria-label="Close navigation menu"
              onClick={closeDrawer}
              sx={{ color: (theme) => theme.color.black }}
            >
              <Close />
            </IconButton>
          </RowStack>

          <List
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                href={item.href}
                onClick={closeDrawer}
                sx={{
                  borderRadius: 2,
                  px: 0,
                  py: 1.25,
                  justifyContent: 'center',
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      alpha(theme.color.brandBlue, 0.06),
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: pxToRem(16),
                      fontWeight: activeSection === item.section ? 500 : 400,
                      color: (theme) =>
                        activeSection === item.section
                          ? theme.color.brandBlue
                          : theme.color.black,
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ mt: 'auto' }}>
            <AppButton
              component={Link}
              href="/#contact"
              variant="contained"
              fullWidth
              onClick={closeDrawer}
              sx={{
                borderRadius: '999999px',
                py: 1.4,
                textTransform: 'none',
                fontSize: pxToRem(16),
                fontWeight: 400,
                backgroundColor: (theme) => theme.color.brandBlue,
                '&:hover': {
                  backgroundColor: (theme) => theme.color.brandBlue,
                },
              }}
            >
              Book a Ride
            </AppButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
