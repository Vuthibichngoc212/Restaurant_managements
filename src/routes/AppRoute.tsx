import { Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { routes } from './routes';

const AppRoutes = () => {
	return useRoutes(routes);
};

const AppRoute = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<AppRoutes />
			</Suspense>
		</Router>
	);
};

export default AppRoute;
