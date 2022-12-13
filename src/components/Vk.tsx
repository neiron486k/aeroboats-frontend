import { IconButton, Link, styled } from '@mui/material';
import React, { FC } from 'react';

import VkIcon from '../assets/landing/icons/vk.svg';

interface VkProps {
  url: string;
}

const Vk: FC<VkProps> = (props) => {
  const { url } = props;
  return (
    <Link href={url} target="_blank" {...props}>
      <IconButton aria-label="Youtube" size="large" sx={{ p: (theme) => theme.spacing(1.5) }}>
        <img src={VkIcon} alt="vk" width={28} />
      </IconButton>
    </Link>
  );
};

export default styled(Vk)({});
