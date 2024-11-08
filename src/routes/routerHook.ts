/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes as dRoutes } from '@/routes/routes';
import { sidebarRoutes } from './sidebarRoutes';

const useRouter = () => {
	const navigate = useNavigate();
	const [routes, setRoutes] = useState<any[]>([]);
	const [sidebar, setSideBar] = useState<any[]>();
	const [activeRoute, setActiveRoute] = useState<any>();
	useEffect(() => {
		setSideBar(sidebarRoutes);
		setRoutes(dRoutes);
	}, []);
	const isAllowRoute = (path: string) => {
		if (path === '') {
			return false;
		}
		return true;
	};

	return {
		routes,
		sidebar,
		isAllowRoute,
		navigate,
		activeRoute,
		setActiveRoute
	};
};

export default useRouter;
