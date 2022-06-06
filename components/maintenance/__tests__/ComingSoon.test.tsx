import ComingSoon from "@components/maintenance/ComingSoon";
import { render } from "@testing-library/react";

describe("Coming Soon Component", () => {
  it("renders the component", () => {
    const { getByRole, getByText } = render(<ComingSoon />);
    const comingSoonHeader = getByRole("heading", { name: /Coming Soon/i });
    const comingSoonParagraph = getByText(
      /I am currently working on this website. Come back soon!/i
    );

    expect(comingSoonHeader).toBeInTheDocument();
    expect(comingSoonParagraph).toBeInTheDocument();
  });
});
