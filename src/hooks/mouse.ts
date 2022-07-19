import {useEffect, useState} from "react";

export enum ScrollDirection {
    up = 'up',
    down = 'down',
}

export const useScrollDirection = (): ScrollDirection => {
    const [direction, setDirection] = useState<ScrollDirection>(ScrollDirection.up);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            setDirection(event.deltaY < 0 ? ScrollDirection.up : ScrollDirection.down);
        }

        document.addEventListener('wheel', handleWheel);

        return () => document.removeEventListener('wheel', handleWheel);
    }, []);

    return direction;
}