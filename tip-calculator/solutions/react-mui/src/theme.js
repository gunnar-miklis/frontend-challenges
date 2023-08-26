import { createTheme } from '@mui/material';
import '@fontsource/space-mono/700.css';

export const theme = createTheme( {
	components: {
		MuiFilledInput: {
			styleOverrides: {
				root: {
					borderRadius: 7,
					position: 'relative',
					width: 'auto',
					margin: '5px 0px',
					marginBottom: 10,
					backgroundColor: 'hsl(189, 41%, 97%)',
					color: 'hsl(183, 100%, 15%)',
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					marginTop: 10,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 7,
					marginBottom: 10,
					backgroundColor: 'hsl(183, 100%, 15%)',
				},
			},
		},
	},
	typography: {
		allVariants: {
			fontFamily: [ 'Space Mono', 'sans-serif' ].join( ',' ),
			fontSize: 24,
			fontWeight: 700,
			textTransform: 'none',
			color: 'hsl(186, 14%, 43%)',
		},
	},
	palette: {
		background: {
			default: 'hsl(185, 41%, 84%)',
		},
		primary: {
			main: 'hsl(172, 67%, 45%)',
			contrastText: 'hsl(189, 41%, 97%)',
		},
		mainAccent: 'hsl(172, 67%, 45%)',
		darkCyan: 'hsl(183, 100%, 15%)',
		darkGrayishCyan: 'hsl(186, 14%, 43%)',
		grayishCyan: 'hsl(184, 14%, 56%)',
		lightGrayishCyan: 'hsl(185, 41%, 84%)',
		lightCyan: 'hsl(189, 41%, 97%)',
		whiteText: 'hsl(0, 0%, 100%)',
	},
} );
