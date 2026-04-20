import { SxProps, Theme } from '@mui/material';
import { pxToRem } from '../../../../../../../common';
import { StyledLink } from '../../../../../components';

type FooterLinkProps = {
  href: string;
  link: string;
  blank?: boolean;
  sx?: SxProps<Theme>;
};

export function FooterLink({ link, href = '#', blank, sx }: FooterLinkProps) {
  return (
    <StyledLink
      href={href}
      target={blank ? '_blank' : undefined}
      sx={{
        color: (theme) => theme.color.footerText,
        fontFamily: (theme) => theme.typography.fontFamily,
        fontSize: pxToRem(16),
        lineHeight: 1.5,
        fontWeight: 400,
        transition: 'all .3s ease-in-out',
        '&:hover': {
          textDecoration: 'underline',
          color: (theme) => theme.palette.background.default,
        },
        ...sx,
      }}
    >
      {link}
    </StyledLink>
  );
}
