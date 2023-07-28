import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter value={1}/>);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("count should be incremented by 1 when the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter value={0} />);
    const incrementBttn = getByRole("button", { name: "+" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBttn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("count should be decremented by 1 when the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter value={0} />);
    const decrementBttn = getByRole("button", { name: "-" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });
});