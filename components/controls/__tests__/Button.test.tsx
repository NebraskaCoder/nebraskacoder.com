import Button from "@components/controls/Button";
import { render, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  test("renders", () => {
    const { getByRole } = render(<Button>Test Button</Button>);

    const targetButton = getByRole("button", { name: "Test Button" });

    expect(targetButton).toBeInTheDocument();
  });

  test("handles click event", () => {
    const mockClickfn = jest.fn();
    const { getByRole } = render(
      <Button onClick={mockClickfn}>Test Button</Button>
    );

    const targetButton = getByRole("button", { name: "Test Button" });

    fireEvent.click(targetButton);

    expect(mockClickfn).toBeCalledTimes(1);
  });
});
