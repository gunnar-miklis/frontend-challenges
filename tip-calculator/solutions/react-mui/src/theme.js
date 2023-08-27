import { createTheme } from '@mui/material';
import '@fontsource/space-mono/700.css';
import { styleGuide } from './styleGuide';

export const theme = createTheme( {

	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 30,
					padding: 40,
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					borderRadius: 5,
					backgroundColor: styleGuide.colors.lightCyan,
					color: styleGuide.colors.darkCyan,
				},
				input: {
					margin: 0,
					padding: 14,
					textAlign: 'right',
					fontSize: styleGuide.font.fontSize,
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: styleGuide.colors.darkGrayishCyan,
					marginBottom: 10,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 5,
					marginBottom: 10,
					backgroundColor: styleGuide.colors.darkCyan,
					padding: 10,
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					fontSize: '1rem',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: styleGuide.colors.darkCyan,
					color: styleGuide.colors.lightCyan,
				},
			},
		},
	},

	typography: {
		allVariants: {
			fontFamily: styleGuide.font.fontFamily,
			fontWeight: styleGuide.font.fontWeight,
			fontSize: styleGuide.font.fontSize,
		},
		h2: {
			padding: '50px 0 25px',
			textAlign: 'center',
			textTransform: 'uppercase',
			letterSpacing: 10,
			color: styleGuide.colors.darkGrayishCyan,
		},
		h3: {
			fontSize: '2.5rem',
			color: styleGuide.colors.main,
		},
		body1: {
			fontSize: '0.9rem',
			color: styleGuide.colors.white,
		},
		body2: {
			fontSize: '0.8rem',
			color: styleGuide.colors.grayishCyan,
		},
	},

	palette: {
		primary: {
			main: styleGuide.colors.main,
			contrastText: styleGuide.colors.lightCyan,
		},
		background: {
			default: styleGuide.colors.lightGrayishCyan,
		},
	},

} );
