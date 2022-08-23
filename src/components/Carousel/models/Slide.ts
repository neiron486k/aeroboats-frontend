import React from 'react';

export default interface Slide {
  id: number;
  thumbnail: string;
  title: React.ReactNode;
  description: React.ReactNode;
}
