import React from 'react';

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PRODUCT = 'PRODUCT',
  COOPERATION = 'COOPERATION',
  CONTACT = 'CONTACT',
}

export interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactNode;
}