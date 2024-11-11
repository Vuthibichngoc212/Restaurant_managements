import { Avatar, Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupIcon from '@mui/icons-material/Group';
import accountIcon from '@/assets/icons/accountCard.png';
import { useStyles } from './Dashboard.styles';
import { useGetMenuQuery } from '@/redux/api/api.caller';

const Dashboard = () => {
	const classes = useStyles();

	const { data: menus, isLoading } = useGetMenuQuery();
	const menuData = menus?.data?.slice(0, 5);

	const data = [
		{
			title: 'Tổng doanh thu',
			count: 15,
			icon: <DevicesIcon sx={{ color: '#0000ff' }} />,
			backgroundColor: '#E0E7FF'
		},
		{
			title: 'Tổng số nhân viên',
			count: 8,
			icon: (
				<Box
					component="img"
					src={accountIcon}
					alt="account icon"
					sx={{
						width: '36px', // Kích thước của hình ảnh, điều chỉnh tùy ý
						height: '36px',
						borderRadius: '50%' // Nếu muốn ảnh tròn
					}}
				/>
			),
			backgroundColor: '#E6F4EA'
		},
		{
			title: 'Tổng số đơn hàng',
			count: 12,
			icon: <GroupIcon sx={{ color: '#ff0000' }} />,
			backgroundColor: '#FFEAEA'
		}
	];

	const revenueData = [
		{ tháng: 'Tháng 1', doanhThu: 4000 },
		{ tháng: 'Tháng 2', doanhThu: 3000 },
		{ tháng: 'Tháng 3', doanhThu: 2000 },
		{ tháng: 'Tháng 4', doanhThu: 2780 },
		{ tháng: 'Tháng 5', doanhThu: 1890 },
		{ tháng: 'Tháng 6', doanhThu: 2390 },
		{ tháng: 'Tháng 7', doanhThu: 3490 },
		{ tháng: 'Tháng 8', doanhThu: 4300 },
		{ tháng: 'Tháng 9', doanhThu: 4400 },
		{ tháng: 'Tháng 10', doanhThu: 3200 },
		{ tháng: 'Tháng 11', doanhThu: 2100 },
		{ tháng: 'Tháng 12', doanhThu: 5000 }
	];

	return (
		<Box>
			{' '}
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
			<Box mt={3}>
				<Grid container spacing={2}>
					<Grid item md={7}>
						<Card sx={{ padding: '3.2rem 2.4rem', height: '51.7rem' }}>
							<Box
								sx={{
									mb: '3.2rem',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}
							>
								<Typography variant="title1_bold">Biểu đồ thống kê doanh thu</Typography>
							</Box>
							<ResponsiveContainer width="100%" height="85%">
								<LineChart data={revenueData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis
										dataKey="tháng"
										label={{ value: 'Tháng', position: 'insideBottomRight', offset: -5 }}
									/>
									<YAxis label={{ value: 'Doanh thu (VND)', angle: -90, position: 'insideLeft' }} />
									<Tooltip formatter={(value) => `${value} VND`} />
									<Legend formatter={() => 'Doanh thu'} />
									<Line type="monotone" dataKey="doanhThu" stroke="#8884d8" activeDot={{ r: 8 }} />
								</LineChart>
							</ResponsiveContainer>
						</Card>
					</Grid>

					<Grid item md={5}>
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
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Dashboard;
