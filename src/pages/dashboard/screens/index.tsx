import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import totalOrderIcon from '@/assets/icons/totalOrder-icon.png';
import accountIcon from '@/assets/icons/accountCard.png';
import totalRevenueIcon from '@/assets/icons/totalRevenueIcon.png';
import { useStyles } from './Dashboard.styles';
import StatisticsOrder from '../components/StatisticsOrder/StatisticsOrder';
import StatisticsRevenue from '../components/StatisticsRevenue/StatisticsRevenue';
import TopMenu from '../components/Topmenu/TopMenu';
import { useGetOrderTotalQuery, useGetUsersQuery } from '@/redux/api/api.caller';

const Dashboard = () => {
	const classes = useStyles();

	const { data: totals } = useGetOrderTotalQuery();
	const { data: employees } = useGetUsersQuery();
	const totalEmployees = employees?.data.length;

	if (!totals) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '66vh' }}>
				<CircularProgress />
			</Box>
		);
	}

	const data = [
		{
			title: 'Tổng doanh thu trong ngày',
			count: totals.totalRevenueByDay,
			icon: (
				<Box
					component="img"
					src={totalRevenueIcon}
					alt="account icon"
					sx={{
						width: '36px',
						height: '36px',
						borderRadius: '50%'
					}}
				/>
			),
			backgroundColor: '#4E8D7C'
		},
		{
			title: 'Tổng số lượng nhân viên',
			count: totalEmployees,
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
			backgroundColor: '#FFF1EA'
		},
		{
			title: 'Tổng số đơn hàng trong ngày',
			count: totals.totalOrderByDay,
			icon: (
				<Box
					component="img"
					src={totalOrderIcon}
					alt="account icon"
					sx={{
						width: '36px',
						height: '36px',
						borderRadius: '50%'
					}}
				/>
			),
			backgroundColor: '#8C6A4F'
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

			<Box mt={4}>
				<Grid container spacing={2}>
					<Grid item md={4.5}>
						<StatisticsRevenue />
					</Grid>
					<Grid item md={5}>
						<StatisticsOrder />
					</Grid>
					<Grid item md={2.5}>
						<TopMenu />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Dashboard;
