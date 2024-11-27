import { EMAIL_REGEX } from '@/constants/regex.constant';
import * as Yup from 'yup';

export const employeeSchema = Yup.object().shape({
	name: Yup.string().required('Họ tên không được để trống'),
	email: Yup.string()
		.required('Email không được để trống')
		.matches(EMAIL_REGEX, 'Email không hợp lệ'),
	password: Yup.string().required('Mật khẩu không được để trống')
	// phone: Yup.string().required('Số điện thoại không được để trống'),
	// address: Yup.string().required('Địa chỉ không được để trống')
});
