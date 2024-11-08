/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import theme from '@/themes/theme.d';

interface Props {
	title: string;
	customStyles?: Record<any, any>;
	variant?: any;
}

const HeaderTitle = ({ title, customStyles, variant = 'heading2_semibold' }: Props) => {
	return (
		<Box
			sx={{
				'& .MuiTypography-root': {
					color: theme.palette.primary.royalBlue
				},
				...customStyles
			}}
		>
			<Typography variant={variant}>{title}</Typography>
		</Box>
	);
};

export default HeaderTitle;
