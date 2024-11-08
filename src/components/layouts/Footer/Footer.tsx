/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonPagination from '@/components/common/CommonPagination/Pagination';
import useLayoutStore from '@/stores/layout';
import theme from '@/themes/theme.d';
import { Box, Typography } from '@mui/material';

const Footer = ({ isOpenSidebar }: any) => {
	const { page, pageSize, total, showPagination } = useLayoutStore();
	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			flexWrap={'nowrap'}
			sx={{
				position: 'fixed',
				bottom: 0,
				left: isOpenSidebar ? '267px' : '65px',
				right: 0,
				paddingY: 2.5,
				paddingX: 4,
				transition: 'left 0.3s'
			}}
			width={isOpenSidebar ? 'calc(100vw - 267px)' : 'calc(100vw - 65px)'}
		>
			<Typography variant="subbody1_regular" sx={{ color: theme.palette.neutral.coolGray }}>
				Copyright © 2024 Phenikaa University. All rights reserved. Interdisciplinary Project -
				Group 2, developed by 2 members
			</Typography>
			{showPagination && <CommonPagination page={page} pageSize={pageSize} total={total} />}
		</Box>
	);
};

export default Footer;
