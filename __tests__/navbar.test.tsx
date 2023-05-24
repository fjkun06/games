import Navbar, { NavbarProps } from "@/stories/Navbar";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
// import {describe, expect, test} from '@jest/globals';
test('renders MyComponent with correct prop', () => {
  const props: NavbarProps = {
    isOpen: true,
    handleClick: () => null
  };
  const { getByText } = render(<Navbar {...props} />);
  const element = getByText(/Hello, John/i);
  expect(element).toBeInTheDocument();
});

describe('MyComponent', () => {
  test('renders the component', () => {
    render(<Navbar handleClick={()=> 'void'} />);
    const componentText = screen.getByText('Hello, World!');
    // expect(componentText).toBeInTheDocument();
  });
});