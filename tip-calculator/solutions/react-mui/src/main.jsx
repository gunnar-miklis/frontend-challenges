import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme.js';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<React.StrictMode>
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</CssBaseline>
	</React.StrictMode>,
);
