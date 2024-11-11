import { EMAIL_REGEX } from '@/constants/regex.constant';
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.required('Email không được để trống')
		.matches(EMAIL_REGEX, 'Email không hợp lệ'),
	password: Yup.string().required('Mật khẩu không được để trống')
});
