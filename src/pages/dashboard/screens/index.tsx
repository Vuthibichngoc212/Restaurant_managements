import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupIcon from '@mui/icons-material/Group';
import accountIcon from '@/assets/icons/accountCard.png';
import { useStyles } from './Dashboard.styles';
import StatisticsOrder from '../components/StatisticsOrder/StatisticsOrder';
import StatisticsRevenue from '../components/StatisticsRevenue/StatisticsRevenue';
import TopMenu from '../components/Topmenu/TopMenu';

const Dashboard = () => {
	const classes = useStyles();

	const data = [
		{
			title: 'Tổng doanh thu trong ngày',
			count: 15,
			icon: <DevicesIcon sx={{ color: '#0000ff' }} />,
			backgroundColor: '#E0E7FF'
		},
		{
			title: 'Tổng số lượng nhân viên',
			count: 8,
			icon: (
				<Box
					component="img"
					src={accountIcon}
					alt="account icon"
					sx={{
						width: '36px',
						height: '36px',
						borderRadius: '50%'
					}}
				/>
			),
			backgroundColor: '#E6F4EA'
		},
		{
			title: 'Tổng số đơn hàng trong ngày',
			count: 12,
			icon: <GroupIcon sx={{ color: '#ff0000' }} />,
			backgroundColor: '#FFEAEA'
		}
	];

	return (
		<Box>
			<Grid container spacing={2}>
				{data.map((item, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={index}
						sx={{ '&.MuiGrid-item': { paddingLeft: '24px' } }}
					>
						<Card>
							<CardContent className={classes.cardContentRoot}>
								<Box className={classes.boxContent}>
									<Box className={classes.icon}>
										<Box sx={{ backgroundColor: item.backgroundColor }}>{item.icon}</Box>
									</Box>

									<Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
										<Typography variant="body2_medium">{item.title}</Typography>
										<Typography variant="title1_bold">{item.count}</Typography>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			{/* <Box>
				<Grid container spacing={2}>
					<Grid item md={7}>
						<StatisticsOrder />
					</Grid>
				</Grid>
			</Box> */}
			<Box mt={3}>
				<Grid container spacing={2}>
					<Grid item md={4.5}>
						<StatisticsRevenue />
					</Grid>
					<Grid item md={4.5}>
						<StatisticsOrder />
					</Grid>
					<Grid item md={3}>
						<TopMenu />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Dashboard;
