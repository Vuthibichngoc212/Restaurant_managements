/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import theme from '@/themes/theme.d';
import TableCommon from '@/components/common/CommonTable/CommonTable';
import { useGetOrderQuery } from '@/redux/api/api.caller';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
dayjs.locale('vi');

const OrderMangement = () => {
	const { data: response, isLoading } = useGetOrderQuery();

	const getStatusButton = (status: number) => {
		switch (status) {
			case 0:
				return (
					<Typography
						variant="body2_regular"
						sx={{
							color: '#A67C52'
						}}
					>
						Bàn trống
					</Typography>
				);
			case 1:
				return (
					<Typography
						variant="body2_regular"
						sx={{
							color: '#252FD0'
						}}
					>
						Nhận đơn
					</Typography>
				);
			case 2:
				return (
					<Typography
						variant="body2_regular"
						sx={{
							color: '#f69010'
						}}
					>
						Đang chuẩn bị
					</Typography>
				);
			case 3:
				return (
					<Typography
						variant="body2_regular"
						sx={{
							color: '#229740'
						}}
					>
						Đã phục vụ
					</Typography>
				);
			default:
				return (
					<Typography variant="body2_regular" sx={{ color: '#92939E' }}>
						Không xác định
					</Typography>
				);
		}
	};

	const orderData = response?.data?.map((order: any, index: any) => ({
		...order,
		stt: index + 1,
		name: order.user?.name || 'Không có dữ liệu',
		email: order.user?.email || 'Không có dữ liệu',
		created_at: order.created_at ? dayjs(order.created_at).format('DD/MM/YYYY HH:mm:ss') : '',
		updated_at: order.updated_at ? dayjs(order.updated_at).format('DD/MM/YYYY HH:mm:ss') : ''
	}));

	const operationColumns = [
		{ name: 'stt', title: 'STT', align: 'center', width: 50 },
		{ name: 'id', title: 'Mã đơn hàng', align: 'center', width: 80 },
		{
			name: 'name',
			title: 'Tên nhân viên',
			align: 'left',
			width: 100
		},
		{ name: 'email', title: 'Email nhân viên', align: 'left', width: 100 },
		{
			name: 'table_id',
			title: 'Bàn',
			align: 'center',
			width: 50
		},
		{ name: 'total_price', title: 'Tổng tiền', align: 'center', width: 80 },
		{
			name: 'created_at',
			title: 'Thời gian tạo',
			align: 'left',
			width: 100
		},
		{
			name: 'updated_at',
			title: 'Thời gian cập nhật',
			align: 'left',
			width: 100
		},

		{
			name: 'table_status',
			title: 'Trạng thái bàn',
			align: 'center',
			width: 100,
			render: (row: any) => {
				return getStatusButton(row.table_status);
			}
		}
	];

	return (
		<Box>
			<HeaderTitle title="Quản lý đơn hàng" customStyles={{ marginBottom: '24px' }} />
			{isLoading ? (
				<Box
					sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '66vh' }}
				>
					<CircularProgress />
				</Box>
			) : (
				<Box
					sx={{
						height: '70vh',
						position: 'relative',
						background: theme.palette.background.paper,
						borderRadius: '8px',
						boxShadow: ' 0px 1px 5px 0px #0000000D',
						padding: '2.4rem'
					}}
				>
					<TableCommon
						data={orderData || []}
						columns={operationColumns}
						customTableStyles={{
							height: '90%'
						}}
					/>
				</Box>
			)}
		</Box>
	);
};

export default OrderMangement;
