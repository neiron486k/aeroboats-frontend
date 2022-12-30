import PhoneIcon from '@mui/icons-material/Phone';
import { Button, Link, styled } from '@mui/material';
import React, { FC } from 'react';

interface PhoneProps {
  value: string;
}

const Phone: FC<PhoneProps> = (props) => {
  const { value } = props;
  return (
    <Link href={`tel: ${value}`} underline="none" {...props} sx={{ color: 'inherit' }}>
      <Button size="large" startIcon={<PhoneIcon />} sx={{ color: 'inherit' }}>
        {value}
      </Button>
    </Link>
  );
};

export default styled(Phone)({});
