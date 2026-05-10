import { describe, expect, test } from 'vitest';


/* eslint-disable import/export */
import type { RenderOptions } from '@testing-library/react';
import { render,screen } from '@testing-library/react';
import type { ReactElement } from 'react';

function MyReactComponent() {
  return <div>My React Component</div>;
}

describe('MyReactComponent', () => {
  test('given no props: renders a text', () => {
    render(<MyReactComponent />);
	expect(screen.getByText('My React Component')).toBeInTheDocument();
    
  });
  
   test('given a passing test: passes', () => {
    expect(1).toStrictEqual(1);
  });
});