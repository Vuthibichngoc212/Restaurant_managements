import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	userName: Yup.string().required('Tài khoản không được để trống'),
	password: Yup.string().required('Mật khẩu không được để trống')
});
