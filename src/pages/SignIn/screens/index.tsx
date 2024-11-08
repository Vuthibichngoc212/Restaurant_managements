/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography, Box } from '@mui/material';
import bgLogin from '@/assets/images/bg-login.png';
import logo from '@/assets/icons/logoRes.png';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/schema/auth';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import PasswordTextField from '@/components/common/FormElements/PasswordTextField';

const SignIn = () => {
	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({
		defaultValues: {
			userName: '',
			password: ''
		},
		resolver: yupResolver(loginSchema)
	});

	const onSubmit = async (values: any) => {
		console.log(values);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				minHeight: '100vh',
				backgroundImage: `url(${bgLogin})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				pr: 10
			}}
		>
			<Box
				sx={{
					width: 400,
					padding: 4,
					borderRadius: '24px',
					boxShadow: 3,
					bgcolor: '#fff'
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
						<img
							src={logo}
							alt="Phenikaa University Logo"
							style={{ width: 'auto', height: '60px' }}
						/>
					</Box>
					<Typography variant="heading1_bold" sx={{ textAlign: 'center' }}>
						Đăng nhập
					</Typography>
				</Box>

				<Box display={'flex'} flexDirection={'column'} gap={2}>
					<CustomTextField control={control} name="userName" label="Tài khoản" />
					<PasswordTextField control={control} name="password" label="Mật khẩu" />
				</Box>
				<Button
					fullWidth
					variant="contained"
					color="success"
					sx={{
						mt: 2,
						textTransform: 'none',
						fontWeight: 'bold',
						bgcolor: '#4CAF50',
						'&:hover': {
							bgcolor: '#388E3C'
						}
					}}
				>
					Đăng nhập
				</Button>
			</Box>
		</Box>
	);
};

export default SignIn;
