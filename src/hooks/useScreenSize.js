import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useScreenSize() {
  const mobile = useMediaQuery({ maxWidth: 550 });
  const [isMobileSize, setIsMobileSize] = useState(mobile);

  useEffect(() => {
    setIsMobileSize(mobile);
  }, [mobile]);
  return { isMobileSize };
}
