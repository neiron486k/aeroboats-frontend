import NavigatePrevIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/ArrowForward';
import { Box, IconButton } from '@mui/material';
import React, { FC } from 'react';

interface ArrowProps {
  onClick: () => void;
}

interface AvatarNavigatorProps {
  prev: () => void;
  next: () => void;
}

const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} color="inherit" size="large">
      <NavigateNextIcon fontSize="inherit" />
    </IconButton>
  );
};

const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} color="inherit" size="large">
      <NavigatePrevIcon fontSize="inherit" />
    </IconButton>
  );
};

const AvatarNavigator: FC<AvatarNavigatorProps> = ({ prev, next }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 1,
        color: '#fff',
      }}
    >
      <PrevArrow onClick={prev} />
      <NextArrow onClick={next} />
    </Box>
  );
};

export default AvatarNavigator;
