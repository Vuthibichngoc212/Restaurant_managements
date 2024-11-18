// import PageOnDevelopment from '@/components/common/PageOnDevelopment';
import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/routePath.constant';
import Dashboard from '@/pages/dashboard/screens';
import Employees from '@/pages/employee/screens';
import Menu from '@/pages/menu/screens';
import OrderMangement from '@/pages/order/screens';
import Profile from '@/pages/profile/screens';
import SignIn from '@/pages/signIn/screens';
import Table from '@/pages/table/screens';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
	{
		path: ROUTE_PATH.ROOT.INDEX,
		element: <SignIn />
	},
	{
		path: ROUTE_PATH.ADMIN.DASHBOARD,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.DASHBOARD,
				element: <Dashboard />
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
	},
	{
		path: ROUTE_PATH.ADMIN.ORDER,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.ORDER,
				element: <OrderMangement />
			}
		]
	},
	{
		path: ROUTE_PATH.ADMIN.PROFILE,
		element: <ProtectedLayout />,
		children: [
			{
				path: ROUTE_PATH.ADMIN.PROFILE,
				element: <Profile />
			}
		]
	}
];

export { routes };
