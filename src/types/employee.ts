export interface IEmployee {
	id: number;
	name: string;
	password: string;
	email: string;
	role_type?: number;
	created_at?: string;
	updated_at?: string | null;
	deleted_at?: string | null;
}

export interface IPaging {
	page: number;
	limit: number;
	total: number;
}

export interface IEmployeeResponse {
	data: IEmployee[];
	paging: IPaging;
}
