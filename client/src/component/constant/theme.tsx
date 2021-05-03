export const screenBreakpoints = {
  desktop: 1024,
}

export const onDevice = {
  desktop: `@media only screen and (min-width: ${screenBreakpoints.desktop}px)`,
  mobile: `@media only screen and (max-width: ${screenBreakpoints.desktop}px)`,
}
