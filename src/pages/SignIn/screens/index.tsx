/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography, Box } from '@mui/material';
import bgLogin from '@/assets/images/bg4.png';
import logo from '@/assets/icons/logoRes.png';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/schema/auth';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import PasswordTextField from '@/components/common/FormElements/PasswordTextField';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginMutation } from '@/redux/api/api.caller';
import { setUser } from '@/redux/features/dashboard.slice';
import Cookies from 'js-cookie';

const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { control, handleSubmit } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: yupResolver(loginSchema)
	});

	const [loginUser] = useLoginMutation();

	const onSubmit = async (data: any) => {
		try {
			const response = await loginUser(data).unwrap();
			if (response.data && response.data.role_type === 1) {
				dispatch(setUser(response));
				Cookies.set('Admin', JSON.stringify(response), { expires: 7 });
				toast.success('Đăng nhập thành công', {
					position: 'bottom-right',
					autoClose: 2000,
					theme: 'colored'
				});
				setTimeout(() => {
					navigate('/dashboard');
				}, 2000);
			} else {
				toast.error('Bạn không có quyền truy cập vào trang Admin', {
					theme: 'colored',
					autoClose: 2000,
					position: 'bottom-right'
				});
			}
		} catch (error) {
			toast.error('Đăng nhập thất bại. Sai email hoặc mật khẩu', {
				theme: 'colored',
				autoClose: 2000,
				position: 'bottom-right'
			});
		}
	};

	return (
		<>
			<ToastContainer />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
					minHeight: '100vh',
					backgroundImage: `url(${bgLogin})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					filter: 'none',
					pr: 10
				}}
			>
				<Box
					sx={{
						width: 400,
						padding: 4,
						borderRadius: '24px',
						boxShadow: 3,
						bgcolor: '#fff',
						opacity: 0.95
					}}
				>
					<Box mb={4} display={'flex'} flexDirection={'column'} alignItems={'center'}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								mb: '1.5rem'
							}}
						>
							<img src={logo} alt="Restaurant Logo" style={{ width: 'auto', height: '60px' }} />
						</Box>
						<Typography variant="heading1_bold" sx={{ textAlign: 'center' }}>
							Đăng nhập
						</Typography>
					</Box>

					<Box display={'flex'} flexDirection={'column'} gap={2}>
						<CustomTextField control={control} name="email" label="Email" />
						<PasswordTextField control={control} name="password" label="Mật khẩu" />
					</Box>
					<Button
						fullWidth
						variant="contained"
						color="success"
						onClick={handleSubmit(onSubmit)}
						sx={{
							mt: 2,
							textTransform: 'none',
							fontWeight: 'bold',
							bgcolor: '#4B2C20',
							'&:hover': {
								bgcolor: '#4B2C20'
							}
						}}
					>
						Đăng nhập
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default SignIn;
