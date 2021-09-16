import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

export const RatingEmpty = () => <Rating startRaiting={0}/>;
export const Rating1 = () => <Rating startRaiting={1}/>;
export const Rating2 = () => <Rating startRaiting={2}/>;
export const Rating3 = () => <Rating startRaiting={3}/>;
export const Rating4 = () => <Rating startRaiting={4}/>;
export const Rating5 = () => <Rating startRaiting={5}/>;
