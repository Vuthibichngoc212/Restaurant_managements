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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	datasets: [
		{
			label: 'Đơn hàng tối đa',
			data: Array(12).fill(200),
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderWidth: 1,
			barThickness: 20,
			categoryPercentage: 0.8, // Điều chỉnh độ rộng của nhóm cột
			barPercentage: 0.8 // Điều chỉnh độ rộng của cột trong nhóm
		},
		{
			label: 'Số lượng đơn hàng thực tế',
			data: [50, 120, 80, 140, 160, 180, 90, 75, 130, 95, 150, 170],
			backgroundColor: 'rgba(255, 99, 132, 1)',
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
				<Typography variant="title1_bold">Biểu đồ thống kê tổng số lượng đơn hàng</Typography>
				<Box sx={{ height: '90%' }}>
					<Bar data={data} options={options} />
				</Box>
			</Paper>
		</Box>
	);
};

export default StatisticsOrder;
