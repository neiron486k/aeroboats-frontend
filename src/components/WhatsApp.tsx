import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton, Link, styled } from '@mui/material';
import React, { FC } from 'react';

interface WhatsAppProps {
  phone: string;
}

const WhatsApp: FC<WhatsAppProps> = (props) => {
  const { phone } = props;
  return (
    <Link href={`https://api.whatsapp.com/send?phone=${phone}`} target="_blank">
      <IconButton aria-label="WhatsApp" size="large">
        <WhatsAppIcon fontSize="inherit" />
      </IconButton>
    </Link>
  );
};

export default styled(WhatsApp)({});
