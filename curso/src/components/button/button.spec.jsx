import userEvent from "@testing-library/user-event";
import { Button } from ".";
const { screen, render, fireEvent } = require("@testing-library/react");

describe("<Button />", () => {
  it("should render the button with text", () => {
    render(<Button text={"Load More"} />);

    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on the button click", () => {
    const fn = jest.fn();
    render(<Button text={"Load More"} method={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
