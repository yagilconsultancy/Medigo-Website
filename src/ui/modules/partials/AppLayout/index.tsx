import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Centered } from '../../components';
import { AppHeader } from '../AppHeader';
import { AppFooter } from '../AppFooter';

type AppLayoutProp = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProp) {
  return (
    // <ReactLenis root>
    <Centered direction={'column'} sx={{ position: 'relative' }}>
      <AppHeader />
      <Box
        component="main"
        sx={{
          width: '100%',
          maxWidth: '1920px',
          mx: 'auto',
          background: (theme) => theme.palette.background.default,
        }}
      >
        {children}
      </Box>
      <AppFooter />
    </Centered>
    // </ReactLenis>
  );
}
