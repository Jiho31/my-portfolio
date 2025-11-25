import "@testing-library/jest-dom";
import { getByTitle, render, screen } from "@testing-library/react";
import { ImageSlider } from "@/components/Projects";

describe("slider", () => {
  it("should render left button", () => {
    // ImageSlider
    const { getByTitle } = render(<ImageSlider />);
    const leftButton = getByTitle("leftButton");
    expect(leftButton).toBeVisible();
  });
  // it("should disable left button when it reaches first element", () => {
  //   // ImageSlider
  //   const { getByTitle } = render(<ImageSlider />);
  //   const leftButton = getByTitle("rightButton");
  //   expect(leftButton).not.toBeDisabled();
  // });
});
