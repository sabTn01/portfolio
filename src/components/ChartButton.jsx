import { Button } from "@material-tailwind/react";

function ChartButton({ children, size = "lg", onclick }) {
  return (
    <Button size={size} className="hover:bg-gray-600" onClick={onclick}>
      {children}
    </Button>
  );
}

export default ChartButton;
