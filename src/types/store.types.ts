export type commonState = {
	isOpenSidebar: boolean;
	expanded: any;
};
export type commonActions = {
	setIsOpenSidebar: (isOpenSidebar: boolean) => void;
	clearIsOpenSidebar: () => void;
	setExpanded: (isOpenSidebar: boolean) => void;
	clearExpanded: () => void;
};
export type commonStore = commonState & commonActions;
