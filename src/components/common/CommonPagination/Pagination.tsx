import { MenuItem, Pagination, Select, Stack, Typography } from '@mui/material';
interface CommonPaginationProps {
	page: number;
	total: number;
	pageSize: number;
}
const CommonPagination = ({ page, pageSize, total }: CommonPaginationProps) => {
	const totalPage = Math.ceil(total / pageSize) || 1;
	console.log(totalPage);

	return (
		<Stack direction={'row'} alignItems={'center'} gap={1}>
			<Stack direction={'row'} alignItems={'center'} gap={1}>
				<Typography variant={'body1_regular'}>Hiển thị</Typography>
				<Select
					sx={(theme) => ({
						...theme.typography.subbody1_regular,
						height: 24
					})}
					value={pageSize}
				>
					<MenuItem value={10} sx={{ '&.MuiMenuItem-root': { fontSize: '14px' } }}>
						10
					</MenuItem>
					<MenuItem value={20} sx={{ '&.MuiMenuItem-root': { fontSize: '14px' } }}>
						20
					</MenuItem>
					<MenuItem value={30} sx={{ '&.MuiMenuItem-root': { fontSize: '14px' } }}>
						30
					</MenuItem>
				</Select>
			</Stack>
			<Pagination
				count={totalPage}
				page={page}
				sx={{
					'& .MuiPaginationItem-root': {
						border: '1px solid #B9BAC0',
						borderRadius: '8px !important',
						color: '#92939E',
						fontSize: '12px'
					},
					'& .MuiPaginationItem-icon': {
						width: '20px',
						height: '20px'
					},
					'& .MuiButtonBase-root.Mui-selected': {
						color: '#141416',
						borderColor: '#141416 !important',
						backgroundColor: '#FAFAFA',
						borderRadius: '8px !important'
					},
					'& .MuiPagination-ul li:first-of-type .MuiButtonBase-root': {
						border: 'none'
					},
					'& .MuiPagination-ul li:last-child .MuiButtonBase-root': {
						border: 'none',
						color: '#141416'
					}
				}}
			/>
		</Stack>
	);
};

export default CommonPagination;
