import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme.d';
import AppRoute from './routes/AppRoute';
import './styles/index.styles.css';

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<AppRoute />
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
