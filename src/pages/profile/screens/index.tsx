import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import {
	Box,
	Button,
	Card,
	CircularProgress,
	Container,
	Grid,
	InputLabel,
	TextField,
	Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './ProfileInfo.styles';
import { useEffect, useState } from 'react';
import FormModal from '../components/FormModal/FormModal';
import theme from '@/themes/theme.d';
import { useGetUsersQuery } from '@/redux/api/api.caller';
import { IEmployee } from '@/types/employee';

const Profile = () => {
	const classes = useStyles();
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { data: response } = useGetUsersQuery();

	const [userData, setUserData] = useState<IEmployee | null>(null);

	useEffect(() => {
		if (response?.data) {
			const user = response.data.find((user) => user.id === 14);
			setUserData(user);
		}
	}, [response]);

	const name = userData?.name || '';
	const email = userData?.email || '';
	const password = userData?.password || '';
	const phone = '111';
	const address = 'Yên Nghĩa Hà Đông Hà Nội';

	if (!response) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '66vh' }}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Container maxWidth="xl">
			<HeaderTitle title="Trang cá nhân" />

			<Card className={classes.card}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						mb: '2.4rem'
					}}
				>
					<Typography variant="title1_bold" sx={{ color: theme.palette.primary.freshMint }}>
						Thông tin cơ bản
					</Typography>
					<Button
						variant="contained"
						size="medium"
						startIcon={<EditIcon />}
						onClick={() => setIsOpenModal(true)}
					>
						Cập nhật
					</Button>
				</Box>
				<Box>
					<Box>
						<Grid container spacing="2.4rem">
							<Grid item xs={6}>
								<Box>
									<InputLabel
										sx={{
											mb: '0.2rem',
											fontSize: '1.6rem',
											color: 'text.primary'
										}}
									>
										Họ tên
									</InputLabel>
									<TextField
										sx={{ mb: '1.6rem' }}
										size="small"
										multiline
										maxRows={3}
										fullWidth
										value={name}
										InputProps={{
											readOnly: true
										}}
									/>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box>
									<InputLabel
										sx={{
											mb: '0.2rem',
											fontSize: '1.6rem',
											color: 'text.primary'
										}}
									>
										Mật khẩu
									</InputLabel>
									<TextField
										sx={{ mb: '1.6rem' }}
										size="small"
										multiline
										maxRows={3}
										fullWidth
										value={password}
										InputProps={{
											readOnly: true
										}}
									/>
								</Box>
							</Grid>
						</Grid>
						<Grid container spacing="2.4rem">
							<Grid item xs={6}>
								<Box>
									<InputLabel
										sx={{
											mb: '0.2rem',
											fontSize: '1.6rem',
											color: 'text.primary'
										}}
									>
										Email
									</InputLabel>
									<TextField
										sx={{ mb: '1.6rem' }}
										size="small"
										multiline
										maxRows={3}
										fullWidth
										value={email}
										InputProps={{
											readOnly: true
										}}
									/>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box>
									<InputLabel
										sx={{
											mb: '0.2rem',
											fontSize: '1.6rem',
											color: 'text.primary'
										}}
									>
										Số điện thoại
									</InputLabel>
									<TextField
										sx={{ mb: '1.6rem' }}
										size="small"
										multiline
										maxRows={3}
										fullWidth
										value={phone}
										InputProps={{
											readOnly: true
										}}
									/>
								</Box>
							</Grid>
						</Grid>
						<Box>
							<InputLabel
								sx={{
									mb: '0.2rem',
									fontSize: '1.6rem',
									color: 'text.primary'
								}}
							>
								Địa chỉ
							</InputLabel>
							<TextField
								sx={{ mb: '1.6rem' }}
								size="small"
								multiline
								maxRows={3}
								fullWidth
								value={address}
								InputProps={{
									readOnly: true
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Card>

			<FormModal
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				headerTitle="Cập nhật trang cá nhân"
				cancelButtonLabel="Huỷ bỏ"
				submitButtonLabel="Cập nhật"
				selectedUser={userData}
			/>
		</Container>
	);
};

export default Profile;
