import EmailIcon from '@mui/icons-material/EmailOutlined';
import { Button, Link, styled } from '@mui/material';
import React, { FC } from 'react';

interface EmailProps {
  value: string;
}

const Email: FC<EmailProps> = (props) => {
  const { value } = props;
  return (
    <Link href={`mailto: ${value}`} underline="none" {...props}>
      <Button size="large" startIcon={<EmailIcon />} sx={{ textTransform: 'lowercase' }}>
        {value}
      </Button>
    </Link>
  );
};

export default styled(Email)({});
