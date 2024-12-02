import { render, screen } from "@testing-library/react";
import TotalInfo from "./TotalInfo";

describe("<TotalINfo />", () => {
  it("render component", () => {
    const mockInfoRoute = ["A"];
    const mockTotal = 100;
    render(<TotalInfo route={mockInfoRoute} totalCost={mockTotal} />);
    expect(screen.getByText(mockTotal)).toBeInTheDocument();
  });

  it("render firstChild and last child", () => {
    const mockInfoRoute = ["A", "B"];
    const mockTotal = 100;
    render(<TotalInfo route={mockInfoRoute} totalCost={mockTotal} />);

    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  });
});
