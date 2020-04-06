import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

test('renders without crashing', () => {
  const page = rt1.render(<App/>)
  expect(page).toBeVisible
})

test('renders learn react link', () => {
  const { getByText } = render(<Display />);
  const displayElement = getByText(/home/i);
  expect(displayElement).toBeInTheDocument();
});

test('renders display component', () => {
  const { getByText } = render (<Dashboard />);
  const dashboardElement = getByText(/ball/i);
  expect(dashboardElement).toBeInTheDocument();
});


