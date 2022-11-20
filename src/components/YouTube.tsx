import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Link, styled } from '@mui/material';
import React, { FC } from 'react';

interface YouTubeProps {
  url: string;
}

const YouTube: FC<YouTubeProps> = (props) => {
  const { url } = props;
  return (
    <Link href={url} target="_blank" {...props}>
      <IconButton aria-label="Youtube" size="large">
        <YouTubeIcon fontSize="inherit" />
      </IconButton>
    </Link>
  );
};

export default styled(YouTube)({});
