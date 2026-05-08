import GlimpsePill from ".";
import { render } from "@testing-library/react";

describe("Shippit Pill", () => {
  it("should render", () => {
    render(<GlimpsePill />);
  });

  describe("external link", () => {
    it("should have the correct url", () => {
      const { getByTestId } = render(<GlimpsePill />);
      expect(getByTestId("glimpse-external-link")).toHaveAttribute(
        "href",
        "https://web.archive.org/web/20231201103631/https://www.joinglimpse.com/",
      );
    });

    it("should open in a new tab", () => {
      const { getByTestId } = render(<GlimpsePill />);
      expect(getByTestId("glimpse-external-link")).toHaveAttribute(
        "target",
        "_blank",
      );
    });
  });
});
