import useWindowSize from "./useWindowSize.js";

const MOBILE_BREAKPOINT = 768;

// Simple mobile detection by screen size
export const useMobileDetection = () => {
	const windowSize = useWindowSize();
	return windowSize.width <= MOBILE_BREAKPOINT;
};
