import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import {
	Box,
	Button,
	Card,
	Container,
	Grid,
	InputLabel,
	TextField,
	Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './ProfileInfo.styles';
import { useState } from 'react';
import FormModal from '../components/FormModal/FormModal';
import theme from '@/themes/theme.d';

const Profile = () => {
	const classes = useStyles();
	const [isOpenModal, setIsOpenModal] = useState(false);

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
			/>
		</Container>
	);
};

export default Profile;
