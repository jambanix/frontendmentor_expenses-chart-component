
// for desktop
export const CHART_CONTAINER_HEIGHT = 400;

// Leave some room for the pop up amount to stop the bar shrinking on hover
const BUFFER = (screenSize="desktop") => screenSize === "desktop" ? 100 : 60


// Calculate the height of the bar.
// Highest amount uses full size then everything else is relative to that
export const getBarHeight = (amount, maxAmount, screensize, containerHeight=CHART_CONTAINER_HEIGHT) => {
  if (amount === maxAmount) return containerHeight - BUFFER();
  const comparisonMultiplier = (amount / maxAmount);
  return ((comparisonMultiplier * containerHeight) - BUFFER()).toFixed(0);
}