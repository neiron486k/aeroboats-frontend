import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { FC } from 'react';

import WorkInterface from '../../../../contracts/WorkInterface';

interface WorkDialogProps {
  work: WorkInterface;
  open: boolean;
  onClose: () => void;
}

const WorkDialog: FC<WorkDialogProps> = ({ work, open, onClose }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={open} fullWidth maxWidth={false} onClose={onClose}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton
          aria-label="close"
          sx={{
            color: theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box
        sx={{
          width: '100%',
          height: matches ? '50vh' : '100vh',
          background: `url(${work.image}) center center / cover no-repeat`,
        }}
      />
    </Dialog>
  );
};

export default WorkDialog;
