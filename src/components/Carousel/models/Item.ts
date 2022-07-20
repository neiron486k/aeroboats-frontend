import React from 'react';

export default interface Item {
  id: number;
  image: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  centerContent: React.ReactNode;
}
