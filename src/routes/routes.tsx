// import PageOnDevelopment from '@/components/common/PageOnDevelopment';
import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/routePath.constant';
import Employees from '@/pages/employee/screens';
import { Home } from '@/pages/Home';
import Menu from '@/pages/menu/screens';
import SignIn from '@/pages/SignIn/screens';
import Table from '@/pages/table/screens';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
	{
		path: ROUTE_PATH.ROOT.INDEX,
		element: <SignIn />
	},
	{
		// path: ROUTE_PATH.ROOT.INDEX,
		path: ROUTE_PATH.ADMIN.DASHBOARD,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.DASHBOARD,
				element: <Home />
			}
		]
	},
	{
		path: ROUTE_PATH.ADMIN.EMPLOYEE,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.EMPLOYEE,
				element: <Employees />
			}
		]
	},
	{
		path: ROUTE_PATH.ADMIN.MENU,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.MENU,
				element: <Menu />
			}
		]
	},
	{
		path: ROUTE_PATH.ADMIN.TABLE,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.TABLE,
				element: <Table />
			}
		]
	}
];

export { routes };
