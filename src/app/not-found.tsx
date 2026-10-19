'use client';

import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';
import { AppLayout } from '@/ui/modules/partials';

const bookingUrl =
  process.env['NEXT_PUBLIC_WEB_BOOING_URL'] || 'https://web.getmedigo.com';

export default function NotFound() {
  return (
    <AppLayout>
      <Box
        component="section"
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: { xs: 8, md: 12 },
        }}
      >
        <Stack spacing={2.5} alignItems="center" sx={{ maxWidth: 560, textAlign: 'center' }}>
          <Typography
            component="p"
            sx={{ fontWeight: 700, color: '#E10600', letterSpacing: '0.08em' }}
          >
            404
          </Typography>
          <Typography component="h1" sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 700, color: '#0A1E3F' }}>
            This road doesn&apos;t go anywhere
          </Typography>
          <Typography sx={{ color: '#4B5563', fontSize: { xs: 16, md: 18 }, lineHeight: 1.6 }}>
            The page you are looking for has moved or no longer exists. Here are
            some places to go instead.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}>
            <Button component={Link} href="/" variant="contained" sx={{ borderRadius: '9999px', px: 3, textTransform: 'none', fontWeight: 600 }}>
              Go to home
            </Button>
            <Button component="a" href={bookingUrl} variant="outlined" sx={{ borderRadius: '9999px', px: 3, textTransform: 'none', fontWeight: 600 }}>
              Book a ride
            </Button>
            <Button component={Link} href="/contact" variant="text" sx={{ borderRadius: '9999px', px: 3, textTransform: 'none', fontWeight: 600 }}>
              Contact us
            </Button>
          </Stack>
        </Stack>
      </Box>
    </AppLayout>
  );
}
