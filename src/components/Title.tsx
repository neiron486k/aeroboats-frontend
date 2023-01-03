import { styled, useMediaQuery } from '@mui/material';

const Title = styled('div')(({ theme }) => {
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return {
    color: 'white',
    paddingBottom: theme.spacing(matches ? 4 : 6),
    width: '100%',
    textAlign: 'center',
    fontSize: matches ? '1.5rem' : '2rem',
    position: 'relative',
  };
});

export default Title;
