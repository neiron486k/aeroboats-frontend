import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React, { FC, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Title from '../../../../components/Title';
import WorkInterface from '../../../../contracts/WorkInterface';
import { useGetWorksQuery } from '../../../../services/work';
import Work from './Work';
import WorkDialog from './WorkDialog';

const Works: FC = () => {
  const { data, isSuccess } = useGetWorksQuery();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedWork, setSelectedWork] = useState<WorkInterface>();
  const [open, setOpen] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSuccess && data.length < 3 ? data.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: !matchesSm,
  };

  if (matchesSm) {
    settings.slidesToShow = 1;
  }

  const handleClick = (selectedItem: WorkInterface) => {
    setSelectedWork(selectedItem);
    setOpen(true);
  };

  return (
    <Box sx={{ pt: 10, pb: 10, background: '#000' }}>
      <Container>
        <Title>Наши работы</Title>
        <Slider {...settings}>
          {isSuccess &&
            data.map((item) => {
              return <Work key={item.id} item={item} onClick={handleClick} />;
            })}
        </Slider>
      </Container>
      {selectedWork && <WorkDialog work={selectedWork} open={open} onClose={() => setOpen(false)} />}
    </Box>
  );
};

export default Works;
