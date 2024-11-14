// import useCommonStore from '@/stores/common.stores';
import { Box, Stack } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const ProtectedLayout = () => {
	const navigate = useNavigate();
	// const { isOpenSidebar } = useCommonStore();

	useEffect(() => {
		const adminCookie = Cookies.get('Admin');
		const user = adminCookie ? JSON.parse(adminCookie) : null;
		if (!user || user.data.role_type !== 1) {
			navigate('/');
		}
	}, [navigate]);

	return (
		<div>
			<Stack flexDirection={'row'} flexWrap={'nowrap'}>
				<Sidebar />
				<Box
					width={'100%'}
					sx={{
						width: '100%',
						padding: '0 0 0 24px'
					}}
				>
					<Header />
					<Box py={3} pr={3} overflow={'auto'} height={'calc(100vh - 100px'}>
						<Outlet />
					</Box>
					{/* <Box sx={{ position: 'fixed', left: isOpenSidebar ? '30rem' : '10rem', bottom: '3.2em' }}>
						<Footer isOpenSidebar={isOpenSidebar} />
					</Box> */}
				</Box>
			</Stack>
		</div>
	);
};

export default ProtectedLayout;
