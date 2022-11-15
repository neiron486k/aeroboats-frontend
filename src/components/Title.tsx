import { styled } from '@mui/material';

const Title = styled('div')(({ theme }) => ({
  color: 'white',
  paddingBottom: theme.spacing(6),
  width: '100%',
  textAlign: 'center',
  fontSize: '2rem',
  position: 'relative',
}));

export default Title;
