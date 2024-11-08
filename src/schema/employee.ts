import * as Yup from 'yup';

export const employeeSchema = Yup.object().shape({
	username: Yup.string().required('Tên tài khoản không được để trống'),
	fullname: Yup.string().required('Tên đầy đủ không được để trống'),
	email: Yup.string().required('Email không được để trống'),
	phoneNumber: Yup.string().required('Số điện thoại không được để trống'),
	address: Yup.string().required('Địa chỉ không được để trống')
});
