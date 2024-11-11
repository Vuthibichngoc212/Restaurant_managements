export interface ICategoryItem {
	id: number;
	name: string;
}

export interface ICategoryResponse {
	status: string;
	message: string;
	data: ICategoryItem[];
}
