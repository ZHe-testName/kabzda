import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const AccordionTestComponent = () => <Accordion title='Test Title' itemsNum={5}/>;