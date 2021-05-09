export const screenBreakpoints = {
  desktop: 1024,
  mobileL: 834,
  mobileS: 768
}

export const onDevice = {
  desktop: `@media only screen and (min-width: ${screenBreakpoints.desktop}px)`,
  mobileL: `@media only screen and (max-width: ${screenBreakpoints.desktop}px)`,
  mobileS: `@media only screen and (max-width: ${screenBreakpoints.mobileL}px)`,
}
