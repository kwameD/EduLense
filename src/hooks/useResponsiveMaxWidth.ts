import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

export function useResponsiveMaxWidth() {
  const { width } = useWindowDimensions();
  return useMemo(() => {
    if (width >= 900) return 720;   // large tablet
    if (width >= 600) return 520;   // small tablet
    return width;
  }, [width]);
}
