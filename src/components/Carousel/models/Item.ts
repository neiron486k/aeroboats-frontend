import React from 'react';

export default interface Item {
  id: number;
  image: string;
  title: React.ReactNode;
  text: React.ReactNode;
}
