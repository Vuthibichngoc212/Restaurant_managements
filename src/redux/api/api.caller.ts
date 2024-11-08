/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './fetchBase';
import { IUserResponse } from '../../types/users';
import { IMenuResponse, IMenuItem } from '../../types/menu';
import { IEmployeeResponse } from '../../types/employee';
import { ITableResponse } from '../../types/table';
import { ICategoryResponse } from '../../types/category';
// import { REQUEST_HEADERS } from "../../constants/api.constant";
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
				// mode: "no-cors",
				headers: {
					'Content-Type': 'application/json'
				}
				// headers: REQUEST_HEADERS.jsonHeader(),
				// headers: {
				//   "ngrok-skip-browser-warning": "any_value",
				//   "User-Agent": "CustomUserAgentString",
				// },
			})
		}),
		getUsers: builder.query<IEmployeeResponse, void>({
			query: () => ({
				url: `/users`,
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
				method: 'PUT',
				body: users
			})
		}),
		deleteUsers: builder.mutation({
			query: (userId: string) => ({
				url: `/users/${userId}`,
				method: 'DELETE'
			})
		}),
		//
		settingUser: builder.query<IUserResponse, void>({
			query: () => ({
				url: `/web-settings`,
				method: 'GET'
			})
		}),
		getMenu: builder.query<IMenuResponse, void>({
			query: () => ({
				url: `/menus`,
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
		deleteMenu: builder.mutation<void, { menuId: number }>({
			query: ({ menuId }) => ({
				url: `/menus/${menuId}`,
				method: 'PATCH'
			})
		}),
		//
		updateMenu: builder.mutation<any, any>({
			query: (body) => ({
				url: `menu/updateItem/${body.id}`,
				method: 'PUT',
				body
			})
		}),
		filterMenu: builder.query<IMenuResponse, { category: string }>({
			query: ({ category }) => ({
				url: `/menu/${category}?page=0&limit=100`,
				method: 'GET'
			})
		}),
		getTable: builder.query<ITableResponse, void>({
			query: () => ({
				url: `/tables`,
				method: 'GET'
			})
		}),
		addTable: builder.mutation<void, { numberOfTable: number }>({
			query: ({ numberOfTable }) => ({
				url: `/tables/add?numberOfTables=${numberOfTable}`,
				method: 'POST'
			})
		}),
		updateTable: builder.mutation<any, any>({
			query: (body) => ({
				url: `tables/${body.id}`,
				method: 'PATCH',
				body
			})
		}),
		deleteTable: builder.mutation<void, { tablesId: number }>({
			query: ({ tablesId }) => ({
				url: `/menus/${tablesId}`,
				method: 'PATCH'
			})
		}),
		getCategory: builder.query<ICategoryResponse, void>({
			query: () => ({
				url: `/categories`,
				method: 'GET'
			})
		}),
		//
		getHotMenu: builder.query<IMenuResponse, void>({
			query: () => ({
				url: `/menu/all?page=0&limit=5`,
				method: 'GET'
			})
		}),
		getURLImage: builder.mutation<{ data: string }, FormData>({
			query: (formData) => ({
				url: `/menu/getUrlImage`,
				method: 'POST',
				body: formData
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
	useSettingUserQuery,
	useGetMenuQuery,
	useFilterMenuQuery,
	useGetTableQuery,
	useAddTableMutation,
	useDeleteMenuMutation,
	useAddMenuMutation,
	useGetCategoryQuery,
	useUpdateMenuMutation,
	useGetHotMenuQuery,
	useGetURLImageMutation
} = apiCaller;
