import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogTitle, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';

interface OrderSuccessProps {
  onClose: () => void;
}

const OrderSuccess: FC<OrderSuccessProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Typography variant="h4" color="secondary.main" gutterBottom paragraph align="center">
        Ваш заказ оформлен.
      </Typography>
      <Typography variant="h6" align="center">
        С вами скоро свяжется наш специалист.
      </Typography>
    </Box>
  );
};

export default OrderSuccess;
