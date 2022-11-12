import EmailIcon from '@mui/icons-material/EmailOutlined';
import { Button, Link } from '@mui/material';
import React, { FC } from 'react';

interface EmailProps {
  value: string;
}

const Email: FC<EmailProps> = ({ value }) => {
  return (
    <Link href={`mailto: ${value}`} underline="none">
      <Button size="large" startIcon={<EmailIcon />} sx={{ textTransform: 'lowercase' }}>
        {value}
      </Button>
    </Link>
  );
};

export default Email;
