import type { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';
import { createTheme } from '@mui/material';

interface ICustomPalette extends SimplePaletteColorOptions {
    main: string;
    contrastText: string;
}

/**
 * MUI custom variant settings
 */
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ['bottom-bar']: true;
    highlight: true;
    primary: true;
    active: true;
    inactive: true;
  }

  interface ButtonPropsColorOverrides {
    highlight: true;
  }
}

declare module '@mui/material/styles' {
    interface Palette {
        highlight: ICustomPalette;
    }

    interface PaletteOptions {
        highlight: ICustomPalette;
    }

    // interface TypographyVariants {
    // }

    // // allow configuration using `createTheme`
    // interface TypographyVariantsOptions {
    // }

    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        laptop: false;
        desktop: false;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    //   interface TypographyPropsVariantOverrides {
    //   }
}

/**
 * custom palette
 */

interface ICustomPaletteOptions extends PaletteOptions {
    primary: SimplePaletteColorOptions;
}

const palette: ICustomPaletteOptions = {
    primary: {
        main: '#1C5CF6',
        light: '#1C5CF6',
        contrastText: '#fff',
    },
    secondary: {
        main: '#556cd6',
    },
    error: {
        main: '#ff6c77',
    },
    warning: {
        main: '#666',
        light: '#666',
        dark: '#666',
        contrastText: '#666',
    },
    info: {
        main: '#556cd6',
    },
    success: {
        main: '#556cd6',
    },
    text: {
        primary: '#161616',
        secondary: '#262626',
        disabled: '#C0C0C0',
    },
    mode: 'light',
    background: {
        default: '#fff',
        paper: '#ffffff',
    },
    highlight: {
        main: '#CCFF00',
        contrastText: '#000000',
    },
    //   mode?: PaletteMode;
    //   tonalOffset?: PaletteTonalOffset;
    //   contrastThreshold?: number;
    //   common?: Partial<CommonColors>;
    //   grey?: ColorPartial;
    //   text?: Partial<TypeText>;
    //   divider?: string;
    //   action?: Partial<TypeAction>;
    //   background?: Partial<TypeBackground>;
};

/**
 * custom typography
 */
// https://mui.com/material-ui/customization/typography/

const fontFamily = ['Pretendard', 'sans-serif'];

const typography = {
    fontFamily: fontFamily.join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,

    /** variants */
    h1: {
        fontWeight: 300,
        fontSize: '2.5rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    h2: {
        fontWeight: 300,
        fontSize: '2.0rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    h3: {
        fontWeight: 300,
        fontSize: '1.5rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    h4: {
        fontWeight: 300,
        fontSize: '1.2rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    // h5: {},
    // h6: {},
    subtitle1: {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    subtitle2: {
        fontWeight: 300,
        fontSize: '1.1rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },

    body1: {
        fontWeight: 300,
        fontSize: '1.0rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    body2: {
        fontWeight: 300,
        fontSize: '0.85rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    // button: {},
    caption: {
        fontWeight: 300,
        fontSize: '0.75rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },
    overline: {
        fontWeight: 300,
        fontSize: '0.9rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
    },

    /** custom variants */
    appBarMenu: {
        fontSize: '1.2rem',
        fontWeight: 400,
        lineHeight: 1.167,
        letterSpacing: '0.00735em',
        color: '#333',
    },
};

const theme = createTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 400,
                md: 720,
                mobile: 0,
                tablet: 720,
            },
        },
        palette,
        typography,
        //   shadows?: Shadows;
        //   transitions?: TransitionsOptions;
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        // Map the new variant to render a <h1> by default
                        // appBarMenu: 'h3',
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        margin: 0,
                        padding: 0,
                    },
                },
            },
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'bottom-bar' },
                        style: {
                            position: 'fixed',
                            left: 0,
                            bottom: 0,
                            borderRadius: 0,
                            py: 2,
                            px: 3,
                            width: '100%',
                        },
                    },
                    {
                        props: { color: 'primary' },
                        style: ({ theme }) => ({
                            borderRadius: `${(10 / theme.typography.fontSize)}rem`,
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            fontSize: '1rem',
                            fontWeight: 600,
                            padding: `1rem ${24/ theme.typography.fontSize}rem`,
                            ['&:hover']: {
                                backgroundColor: theme.palette.primary.main,
                            },
                        }),
                    },
                    {
                        props: { color: 'highlight' },
                        style: {
                            backgroundColor: palette.highlight.main,
                            color: palette.highlight.contrastText,
                            ['&:hover']: {
                                backgroundColor: palette.highlight.main,
                            },
                        },
                    },
                    {
                        props: { disabled: true },
                        style: {
                            ['&:hover']: {
                                backgroundColor: '#D9D9D9',
                            },
                            backgroundColor: '#D9D9D9',
                            color: '#fff',
                            ['&.Mui-disabled']: {
                                color: '#fff',
                            },
                        },
                    },
                    {
                        props: { variant: 'active', color: 'primary' },
                        style: {
                            ['&:hover']: {
                                backgroundColor: 'rgba(28, 92, 246, 0.10)',
                            },
                            backgroundColor: 'rgba(28, 92, 246, 0.10)',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: palette.primary.main,
                            color: palette.primary.main,
                        },
                    },
                    {
                        props: { variant: 'inactive', color: 'primary' },
                        style: {
                            ['&:hover']: {
                                backgroundColor: '#fff',
                            },
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: '#C0C0C0',
                            color: '#B9B9B9',
                        },
                    },

                ],
                styleOverrides: {
                    // root: ({ ownerState, theme }) => {
                    root: () => {
                        return {
                            // ...(ownerState.variant === 'active' && {
                            //     backgroundColor: 'rgba(28, 92, 246, 0.10)',
                            //     borderWidth: 1,
                            //     borderStyle: 'solid',
                            //     borderColor: theme.palette.primary.main,
                            //     color: theme.palette.primary.main,
                            // }),
                            // ...(ownerState.variant === 'inactive' && {
                            //     backgroundColor: '#fff',
                            //     borderWidth: 1,
                            //     borderStyle: 'solid',
                            //     borderColor: '#C0C0C0',
                            //     color: '#B9B9B9',
                            // }),
                        };
                    },
                },
            },
        },
    },
);
export { theme };
