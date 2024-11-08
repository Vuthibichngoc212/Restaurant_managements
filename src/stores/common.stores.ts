/* eslint-disable @typescript-eslint/no-explicit-any */
import { commonStore } from '@/types/store.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const localStorageWrapper = {
	getItem: (name: string) => {
		const value = localStorage.getItem(name);
		return value ? JSON.parse(value) : null;
	},
	setItem: (name: string, value: any) => {
		localStorage.setItem(name, JSON.stringify(value));
	},
	removeItem: (name: string) => {
		localStorage.removeItem(name);
	}
};

const useCommonStore = create<commonStore>()(
	persist(
		(set): commonStore => ({
			isOpenSidebar: true,
			expanded: false,
			setIsOpenSidebar: (isOpenSidebar: boolean) =>
				set(() => ({
					isOpenSidebar
				})),
			clearIsOpenSidebar: () => set({ isOpenSidebar: false }),
			setExpanded: (expanded: any) =>
				set(() => ({
					expanded
				})),
			clearExpanded: () => set({ expanded: false })
		}),
		{
			name: 'common-storage',
			storage: localStorageWrapper
		}
	)
);

export default useCommonStore;
