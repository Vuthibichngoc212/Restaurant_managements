import { Box, Typography } from '@mui/material';
import onDevelopment from '@/assets/images/noData.svg';
const PageOnDevelopment = () => {
	return (
		<Box
			width={'100%'}
			height={'70vh'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'cente'}
			flexDirection={'column'}
		>
			<Box display={'flex'} justifyContent={'center'} alignItems={'cente'}>
				<img src={onDevelopment} width={325} alt="On Development" />
			</Box>

			<Typography variant="heading1_medium" color={'neutral.slateGray'} textAlign="center">
				Tính năng đang phát triển!
			</Typography>
		</Box>
	);
};

export default PageOnDevelopment;
