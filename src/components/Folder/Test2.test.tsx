// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {screen, render} from '@testing-library/react';
import Test2 from './Test2';

it('CheckboxWithLabel changes the text after click', () => {
  render(<Test2 />);

  expect(screen.findAllByDisplayValue('ttt222')).toBeTruthy()
});