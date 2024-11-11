import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${import.meta.env.VITE_REACT_APP_URL}/${import.meta.env.VITE_REACT_APP_API_VERSION}/`;

const customBaseQuery = () => {
	const baseQuery = fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json');
			headers.set('ngrok-skip-browser-warning', 'true');
			return headers;
		}
	});

	return async (args: string | FetchArgs, api: BaseQueryApi) => {
		const response = await baseQuery(args, api, {});

		if (response.error?.status === 401) {
			console.error('Unauthorized - Redirecting to login');
		}

		return response;
	};
};

export default customBaseQuery;
