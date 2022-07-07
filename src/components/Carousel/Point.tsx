import React, {FC} from 'react';
import {Box} from "@mui/material";

interface PointProps {
    active: boolean,
}

const Point: FC<PointProps> = ({active}) => {
    const activeBackground = active ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';

    return (
        <Box sx={{
            borderRadius: '50%',
            margin: '5px',
            padding: '6px',
            background: `${activeBackground}`
        }}>
        </Box>
    );
};

export default Point;