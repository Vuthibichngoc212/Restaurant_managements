import { create } from 'zustand';

interface StoreState {
	page: number;
	total: number;
	pageSize: number;
	showPagination: boolean;
	setPagination: ({
		page,
		pageSize,
		total
	}: {
		page: number;
		total: number;
		pageSize: number;
	}) => void;
	setIsShowPagination: (showPagination: boolean) => void;
}

const useLayoutStore = create<StoreState>((set) => ({
	showPagination: true,
	page: 1,
	total: 0,
	pageSize: 10,
	setPagination: ({ page, total, pageSize }) => set({ page, total, pageSize }),
	setIsShowPagination: (showPagination) => set({ showPagination })
}));

export default useLayoutStore;
