export interface IMenuItem {
	id?: number;
	name: string;
	price: number;
	image_url: string;
	categories_id: number | null;
	discription: string;
}

export interface IMenuResponse {
	status: string;
	message: string;
	data: IMenuItem[];
}
