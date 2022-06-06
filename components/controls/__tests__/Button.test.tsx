import Button from "@components/controls/Button";
import { render } from "@testing-library/react";

describe("Button Component", () => {
  test("renders", () => {
    const { getByRole } = render(<Button>Test Button</Button>);

    const targetButton = getByRole("button", { name: "Test Button" });

    expect(targetButton).toBeInTheDocument();
  });
});
