import React from "react";

export default interface Slide {
    image: string,
    leftContent: React.ReactNode
    rightContent: React.ReactNode
    centerContent: React.ReactNode
}