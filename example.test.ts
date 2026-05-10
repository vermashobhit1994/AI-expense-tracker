import { describe, expect, test } from 'vitest';

// import { render, screen } from '@/tests/react-test-utils';
import type { RenderOptions } from '@testing-library/react';
import { render,screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import '@testing-library/happy-dom/vitest';

function MyReactComponent() {
  return <div>My React Component</div>;
}

describe('MyReactComponent', () => {
  test('given no props: renders a text', () => {
    render(<MyReactComponent />);
	const aboutAnchorNode = screen.getByText();
    
  });
});