import logo from '../assets/images/logo.svg';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();
  return (
    <>
      <img src={logo} alt="Berry" width="100" />
      <Typography variant={'h6'} marginLeft={0.2} color={theme.palette.primary.main}>{`AI`}</Typography>
    </>
  );
};

export default Logo;
