'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { ReactNode } from 'react';
import { pxToRem } from '../../../../common';

type AppAccordionProps = {
  id: string;
  title: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  showExpandIcon?: boolean;
};

export function AppAccordion({
  id,
  title,
  children,
  defaultExpanded = false,
  showExpandIcon = false,
}: AppAccordionProps) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disableGutters
      elevation={0}
      square
      sx={{
        borderRadius: '14px',
        boxShadow:
          '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.1)',
        border: '1px solid rgba(17, 24, 39, 0.04)',
        overflow: 'hidden',
        backgroundColor: (theme) => theme.palette.background.default,
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={
          showExpandIcon ? (
            <ExpandMore sx={{ color: (theme) => theme.color.lightGrey }} />
          ) : undefined
        }
        sx={{
          px: { xs: 2.5, sm: 3, md: 4 },
          pt: { xs: 2.5, md: '31.991px' },
          pb: 0,
          minHeight: 'auto',
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
          '&.Mui-expanded': {
            minHeight: 'auto',
          },
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: (theme) => theme.color.faqTitle,
            fontSize: { xs: pxToRem(18), sm: pxToRem(19), md: pxToRem(20) },
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: { xs: 2.5, sm: 3, md: 4 },
          pb: { xs: 2.5, sm: 3, md: 4 },
          pt: { xs: 1.5, md: '11.991px' },
        }}
      >
        <Box
          sx={{
            color: (theme) => theme.color.faqText,
            fontSize: { xs: pxToRem(14), sm: pxToRem(15), md: pxToRem(16) },
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          {children}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
