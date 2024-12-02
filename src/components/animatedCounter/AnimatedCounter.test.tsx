// AnimatedCounter.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedCounter from './AnimatedCounter';

describe('AnimatedCounter Component', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern'); 
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('debe renderizar el número inicial', () => {
    render(<AnimatedCounter number={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });


});