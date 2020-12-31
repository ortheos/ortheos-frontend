import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders map link", () => {
  render(<App />);
  const linkElement = screen.getByText(/map/i);
  expect(linkElement).toBeInTheDocument();
});
