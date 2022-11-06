import { Link, Typography } from '@mui/material';
import React, { FC } from 'react';

interface EmailProps {
  value: string;
}

const Email: FC<EmailProps> = ({ value }) => {
  return (
    <Link href={`mailto: ${value}`} underline="none">
      {value}
    </Link>
  );
};

export default Email;
