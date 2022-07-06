import React, {FC} from 'react';
import {Box, Container} from "@mui/material";

const Carousel: FC = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                background: 'url(https://picsum.photos/1280/1024)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
        }}
        >
            <Box sx={{paddingTop: '64px'}}>
                <Container>
                    slider here
                </Container>
            </Box>
        </Box>
    );
};

export default Carousel;