import { Avatar, Box, Paper, Typography } from '@mui/material';
import { useGetMenuQuery } from '@/redux/api/api.caller';

const TopMenu = () => {
	const { data: menus } = useGetMenuQuery();
	const menuData = menus?.data?.slice(0, 5);

	return (
		<Box>
			<Paper
				sx={{
					borderRadius: '8px',
					boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
					padding: '14px',
					mb: '12px'
				}}
			>
				<Typography variant="title1_bold">Top các món ăn</Typography>
			</Paper>
			<Box>
				{menuData?.map((item, index) => (
					<Paper
						key={index}
						sx={{
							display: 'flex',
							alignItems: 'center',
							padding: '16px',
							borderRadius: '8px',
							boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
							marginBottom: '12px'
						}}
					>
						<Avatar
							src={item.image_url}
							alt={item.name}
							variant="rounded"
							sx={{ width: 48, height: 48, marginRight: '16px' }}
						/>
						<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
							<Typography variant="body1_bold" sx={{ marginBottom: '4px' }}>
								{item.name}
							</Typography>
							<Typography variant="subbody1_medium">{`$${item.price}`}</Typography>
						</Box>
					</Paper>
				))}
			</Box>
		</Box>
	);
};

export default TopMenu;
