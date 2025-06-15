import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home Component", () => {
  test("renders check", () => {
    render(<Home />);
    const element = screen.getByText(/I'm a web enthusiast/i);

    expect(element).toBeInTheDocument();
  });
});
