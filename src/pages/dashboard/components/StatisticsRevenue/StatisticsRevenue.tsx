import { Box, Card, Typography } from '@mui/material';
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

const revenueData = [
	{ tháng: '1', doanhThu: 4000 },
	{ tháng: '2', doanhThu: 3000 },
	{ tháng: '3', doanhThu: 2000 },
	{ tháng: '4', doanhThu: 2780 },
	{ tháng: '5', doanhThu: 1890 },
	{ tháng: '6', doanhThu: 2390 },
	{ tháng: '7', doanhThu: 3490 },
	{ tháng: '8', doanhThu: 4300 },
	{ tháng: '9', doanhThu: 4400 },
	{ tháng: '10', doanhThu: 3200 },
	{ tháng: '11', doanhThu: 2100 },
	{ tháng: '12', doanhThu: 5000 }
];

const StatisticsRevenue = () => {
	return (
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
	);
};

export default StatisticsRevenue;
