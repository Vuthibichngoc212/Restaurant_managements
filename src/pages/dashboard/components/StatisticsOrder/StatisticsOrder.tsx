/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend
} from 'chart.js';
import theme from '@/themes/theme.d';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	datasets: [
		{
			label: 'Đơn hàng tối đa',
			data: Array(12).fill(200),
			backgroundColor: 'rgba(206, 178, 150, 0.2)',
			// backgroundColor: 'rgba(220, 220, 220, 0.5)',
			// backgroundColor: 'rgba(144, 202, 249, 0.3)',
			// backgroundColor: '#F6F2ED',
			borderWidth: 1,
			barThickness: 20,
			categoryPercentage: 0.8,
			barPercentage: 0.8
		},
		{
			label: 'Số lượng đơn hàng thực tế',
			data: [50, 120, 80, 140, 160, 180, 90, 75, 130, 95, 150, 170],
			backgroundColor: '#4E8D7C',
			borderWidth: 1,
			barThickness: 20,
			categoryPercentage: 0.8,
			barPercentage: 0.8
		}
	]
};

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false
		},
		tooltip: {
			filter: (tooltipItem: any) => tooltipItem.datasetIndex === 1,
			callbacks: {
				label: (context: any) => {
					const label = context.dataset.label || '';
					const value = context.raw;
					return `${label}: ${value.toLocaleString('vi-VN')} đơn hàng`;
				}
			}
		}
	},
	scales: {
		x: {
			stacked: true,
			grid: {
				display: false
			},
			title: {
				display: true,
				text: 'Tháng'
			}
		},
		y: {
			stacked: false,
			beginAtZero: true,
			ticks: {
				callback: (value: any) => `${value}`
			},
			title: {
				display: true,
				text: 'Số lượng đơn hàng'
			},
			grid: {
				color: 'rgba(0, 0, 0, 0.1)',
				lineWidth: 0.5
			}
		}
	}
};

const StatisticsOrder = () => {
	return (
		<Box>
			<Paper
				sx={{
					borderRadius: '16px',
					boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
					padding: '14px',
					mb: '12px',
					height: '400px'
				}}
			>
				<Typography variant="title1_bold" sx={{ color: theme.palette.primary.espressoBrown }}>
					Biểu đồ thống kê tổng số lượng đơn hàng
				</Typography>
				<Box sx={{ height: '90%' }}>
					<Bar data={data} options={options} />
				</Box>
			</Paper>
		</Box>
	);
};

export default StatisticsOrder;
