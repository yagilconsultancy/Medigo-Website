import { StyledImage } from '../StyledImage';
import { StyledLink } from '../StyledLink';
import logo from '../../../assets/icons/app-logo.svg';

type AppLogoProps = {
  width?: number;
  height?: number;
};

export function AppLogo({ width = 200, height = 50 }: AppLogoProps = {}) {
  return (
    <StyledLink href="/">
      <StyledImage
        src={logo}
        alt="logo"
        width={width}
        height={height}
        sx={{
          width: '135px',
          height: '74px',
        }}
      />
    </StyledLink>
  );
}
