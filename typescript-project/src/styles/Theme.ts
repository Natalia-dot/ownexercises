import { spacing } from "./spacing";


export const BREAKPOINTS = {
  extraSmall: 400,
  mobile: 576,
  tablet: 768,
  laptop: 1050,
  desktop: 1200,
  bigScreen: 2400,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PALETTE_COLOR_LIGHT = {
  shadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  warning: "rgba(236, 28, 0, 0.38)",
  success: "#e3fae7",
};

const PALETTE_COLOR_DARK = {
 
  warning: "#731414",
  success: "#396644",
};

export const themeLight = {
  palette: {
    background: {
      
    },
    header: {
   
    },
    enhanced: {
    },
    form: {
    },
    textColor: {
    },
    greenTextColor: {
    },
    button: {
    },
    border: {
    },
    shadow: {
      main: PALETTE_COLOR_LIGHT.shadow,
    },
    anchor: {
    }
  },
  mediaquery: {
    miniMobile: `@media (max-width: ${BREAKPOINTS.extraSmall}px)`,
    mobile: `@media (min-width: ${BREAKPOINTS.extraSmall}px) and (max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
    laptop: `@media (min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px) and (max-width: ${BREAKPOINTS.bigScreen}px) `,
    bigScreen: `@media (max-width: ${BREAKPOINTS.bigScreen}px) `,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/Poppins-Bold.ttf",
      italic: "/assets/fonts/Poppins-Italic.ttf",
      regular: "/assets/fonts/Poppins-Regular.ttf",
      semibold: "/assets/fonts/Poppins-SemiBold.ttf",
    },
  },
  spacing,
};

export const themeDark = {
  palette: {
    background: {
      
    },
    header: {
   
    },
    enhanced: {
    },
    form: {
    },
    textColor: {
    },
    greenTextColor: {
    },
    button: {
    },
    border: {
    },
    shadow: {
      main: PALETTE_COLOR_LIGHT.shadow,
    },
    anchor: {
    }
  },
  mediaquery: {
    miniMobile: `@media (max-width: ${BREAKPOINTS.extraSmall}px)`,
    mobile: `@media (min-width: ${BREAKPOINTS.extraSmall}px) and (max-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
    laptop: `@media (min-width: ${BREAKPOINTS.laptop}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px) and (max-width: ${BREAKPOINTS.bigScreen}px) `,
    bigScreen: `@media (max-width: ${BREAKPOINTS.bigScreen}px) `,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/Poppins-Bold.ttf",
      italic: "/assets/fonts/Poppins-Italic.ttf",
      regular: "/assets/fonts/Poppins-Regular.ttf",
      semibold: "/assets/fonts/Poppins-SemiBold.ttf",
    },
  },
  spacing,
};
