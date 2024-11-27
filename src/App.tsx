import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './themes/theme.d';
import AppRoute from './routes/AppRoute';
import './styles/index.styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<AppRoute />
			<ToastContainer
				className="custom-toast-container"
				draggable
				closeOnClick
				autoClose={500}
				position="top-right"
			/>
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
