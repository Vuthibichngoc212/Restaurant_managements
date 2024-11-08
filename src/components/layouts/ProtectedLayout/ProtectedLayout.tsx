import useCommonStore from '@/stores/common.stores';
import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ProtectedLayout = () => {
	const { isOpenSidebar } = useCommonStore();
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
					<Box p={3} overflow={'auto'} height={'calc(100vh - 100px'}>
						<Outlet />
					</Box>
					<Box sx={{ position: 'fixed', left: isOpenSidebar ? '30rem' : '10rem', bottom: '3.2em' }}>
						<Footer isOpenSidebar={isOpenSidebar} />
					</Box>
				</Box>
			</Stack>
		</div>
	);
};

export default ProtectedLayout;
