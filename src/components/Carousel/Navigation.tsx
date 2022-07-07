import React, {FC} from 'react';
import {Box} from "@mui/material";
import Point from "./Point";

interface NavigationProps {
    count: number,
    changePosition: (position: number) => void
    currentPosition: number
}

const Navigation: FC<NavigationProps> = ({count, changePosition, currentPosition}) => {
    const items: Array<number> = [];

    for (let i = 0; i < count; i++) {
        items.push(i);
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            width: '100%'
        }}
        >
            {items.map(item => (
                <div key={item} onClick={() => changePosition(item)}>
                    <Point
                        active={currentPosition === item}
                    />
                </div>
            ))}
        </Box>
    );
};

export default Navigation;