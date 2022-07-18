import React from "react";

export default interface Item {
    image: string,
    leftContent: React.ReactNode
    rightContent: React.ReactNode
    centerContent: React.ReactNode
}