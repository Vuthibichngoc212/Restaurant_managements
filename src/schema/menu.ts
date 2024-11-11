import * as Yup from 'yup';

export const menuSchema = Yup.object().shape({
	name: Yup.string().required('Tên thực đơn không được để trống'),
	price: Yup.number().required('Giá tiền không được để trống'),
	categories_id: Yup.number().required('Danh mục không được để trống'),
	image_url: Yup.string().required('Hình ảnh không được để trống'),
	discription: Yup.string().required('Mô tả không được để trống')
});
