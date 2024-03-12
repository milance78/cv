import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const MockedApp = () => <BrowserRouter>
  <App />
</BrowserRouter>

test('component App should be rendered', () => {
  render(<MockedApp />);
});
