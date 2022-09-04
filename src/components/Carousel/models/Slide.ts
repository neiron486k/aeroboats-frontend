import React from 'react';

export default interface Slide {
  id: number;
  cover: string;
  title: React.ReactNode;
  description: React.ReactNode;
}
