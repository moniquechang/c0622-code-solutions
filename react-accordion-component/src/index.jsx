import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const accordionContent = [
  { 'Example 1 Topic': 'This is text content for topic example 1' },
  { 'Example 2 Topic': 'This is text content for topic example 2' },
  { 'Example 3 Topic': 'This is text content for topic example 3' }
];

root.render(<Accordion topics={accordionContent} />);
