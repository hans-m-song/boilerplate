import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';

import {App} from './App';

describe('App', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.queryByText(/hello world/i)).toBeInTheDocument();
  });
});
