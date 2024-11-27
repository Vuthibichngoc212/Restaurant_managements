/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './fetchBase';
import { IMenuResponse, IMenuItem } from '../../types/menu';
import { IEmployeeResponse } from '../../types/employee';
import { ITableResponse } from '../../types/table';
import { ICategoryResponse } from '../../types/category';
export const apiCaller = createApi({
	reducerPath: 'apiCaller',
	refetchOnMountOrArgChange: 30,
	baseQuery: customBaseQuery(),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (users) => ({
				url: '/users/auth',
				method: 'POST',
				body: users,
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}),
		getUsers: builder.query<IEmployeeResponse, void>({
			query: () => ({
				url: `/users?page=1&limit=50`,
				method: 'GET'
			})
		}),
		createUsers: builder.mutation({
			query: (users) => ({
				url: '/users',
				method: 'POST',
				body: users
			})
		}),
		updateUsers: builder.mutation({
			query: ({ userId, ...users }) => ({
				url: `/users/${userId}`,
				method: 'PATCH',
				body: users
			})
		}),
		deleteUsers: builder.mutation({
			query: (userId: string) => ({
				url: `/users/${userId}`,
				method: 'DELETE'
			})
		}),
		//menu
		getMenu: builder.query<IMenuResponse, void>({
			query: () => ({
				url: `/menus?page=1&limit=50`,
				method: 'GET'
			})
		}),
		addMenu: builder.mutation<void, IMenuItem>({
			query: (menuItem) => ({
				url: `/menus`,
				method: 'POST',
				body: menuItem
			})
		}),
		deleteMenu: builder.mutation({
			query: (menuId: number) => ({
				url: `/menus/${menuId}`,
				method: 'DELETE'
			})
		}),
		updateMenu: builder.mutation({
			query: ({ id, ...payload }) => ({
				url: `/menus/${id}`,
				method: 'PATCH',
				body: payload
			})
		}),
		//
		getCategory: builder.query<ICategoryResponse, void>({
			query: () => ({
				url: `/categories`,
				method: 'GET'
			})
		}),
		getTable: builder.query<ITableResponse, void>({
			query: () => ({
				url: `/tables`,
				method: 'GET'
			})
		}),
		addTable: builder.mutation({
			query: (payload) => ({
				url: '/tables',
				method: 'POST',
				body: payload
			})
		}),
		deleteTable: builder.mutation<void, { tablesId: number; deleted_at: string }>({
			query: ({ tablesId, deleted_at }) => ({
				url: `/tables/${tablesId}`,
				method: 'PATCH',
				body: { deleted_at }
			})
		}),
		//order
		getOrder: builder.query<any, void>({
			query: () => ({
				url: `/employee_handle_order?page=1&limit=50`,
				method: 'GET'
			})
		}),
		//OrderTotal
		getOrderTotal: builder.query<any, void>({
			query: () => ({
				url: `/orders/total`,
				method: 'GET'
			})
		})
	})
});

export const {
	useGetUsersQuery,
	useCreateUsersMutation,
	useUpdateUsersMutation,
	useDeleteUsersMutation,
	useLoginMutation,
	useGetMenuQuery,
	useGetTableQuery,
	useAddTableMutation,
	useDeleteTableMutation,
	useDeleteMenuMutation,
	useAddMenuMutation,
	useGetCategoryQuery,
	useUpdateMenuMutation,
	useGetOrderQuery,
	useGetOrderTotalQuery
} = apiCaller;
