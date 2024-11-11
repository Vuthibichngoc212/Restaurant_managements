export interface ITableItem {
	id: number;
	status: string;
}

export interface IPaging {
	page: number;
	limit: number;
	total: number;
}

export interface ITableResponse {
	data: ITableItem[];
	paging: IPaging;
}
