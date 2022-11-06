import { Link, SxProps, styled } from '@mui/material';
import React from 'react';

interface PhoneProps {
  value: string;
  sx?: SxProps;
}

export default styled((props: PhoneProps) => {
  return (
    <Link href={`tel: ${props.value}`} underline="none" {...props}>
      {props.value}
    </Link>
  );
})();
