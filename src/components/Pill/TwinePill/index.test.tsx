import TwinePill from ".";
import { render } from "@testing-library/react";

describe("Twine Pill", () => {
  it("should render", () => {
    render(<TwinePill />);
  });

  describe("external link", () => {
    it("should have the correct url", () => {
      const { getByTestId } = render(<TwinePill />);
      expect(getByTestId("glimpse-external-link")).toHaveAttribute(
        "href",
        "https://web.archive.org/web/20230602054111/https://www.twine.us/",
      );
    });

    it("should open in a new tab", () => {
      const { getByTestId } = render(<TwinePill />);
      expect(getByTestId("glimpse-external-link")).toHaveAttribute(
        "target",
        "_blank",
      );
    });
  });
});
