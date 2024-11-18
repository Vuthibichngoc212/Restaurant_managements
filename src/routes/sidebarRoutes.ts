/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/routePath.constant';

import overview from '@/assets/icons/overview.svg?react';
import TableBarIcon from '@/assets/icons/table.svg?react';
import PeopleIcon from '@/assets/icons/employee.svg?react';
import OrderIcon from '@/assets/icons/order-icon.svg?react';
import MenuBookIcon from '@/assets/icons/menu.svg?react';

export const sidebarRoutes = [
	{
		path: ROUTE_PATH.ADMIN.DASHBOARD,
		name: 'Tổng quan',
		label: 'Dashboard',
		icon: overview,
		children: []
	},
	{
		path: ROUTE_PATH.ADMIN.EMPLOYEE,
		name: 'employee',
		label: 'Quản lý nhân viên',
		icon: PeopleIcon,
		children: []
	},
	{
		path: ROUTE_PATH.ADMIN.MENU,
		name: 'menu',
		label: 'Quản lý thực đơn',
		icon: MenuBookIcon,
		children: []
	},
	{
		path: ROUTE_PATH.ADMIN.TABLE,
		name: 'table',
		label: 'Quản lý bàn',
		icon: TableBarIcon,
		children: []
	},
	{
		path: ROUTE_PATH.ADMIN.ORDER,
		name: 'order',
		label: 'Quản lý đơn hàng',
		icon: OrderIcon,
		children: []
	}
];
