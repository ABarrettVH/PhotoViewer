import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders the title- React Photo Viewer', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeVisible();
});