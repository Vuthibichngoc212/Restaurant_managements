/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCommon from '@/components/common/CommonTable/CommonTable';
import theme from '@/themes/theme.d';
import { Box, IconButton, Tooltip } from '@mui/material';
import FormModal from '../components/FormModal/FormModal';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import Edit from '@/assets/icons/edit-table.svg?react';
import Trash from '@/assets/icons/trash-table.svg?react';
import { commonStyles } from '@/styles/common.styles';

const Table = () => {
	const operationColumns = [
		{
			name: 'stt',
			title: 'STT',
			align: 'center',
			width: 50,
			render: (_row: any, _column: any) => {
				return mockData.findIndex((data) => data.id === _row.id) + 1;
			}
		},
		{ name: 'id', title: 'Mã bàn', align: 'left', width: 130 },
		{ name: 'status', title: 'Trạng thái', align: 'left', width: 100 },
		{
			name: 'action',
			title: 'Thao tác',
			align: 'center',
			width: 100,
			render: (row: any) => {
				return (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '1.6rem',
							'& svg:hover': {
								cursor: 'pointer',
								'& path': {
									fill: theme.palette.primary.main
								}
							}
						}}
					>
						<Tooltip
							title="Chỉnh sửa bàn"
							arrow
							slotProps={{
								popper: {
									modifiers: [
										{
											name: 'offset',
											options: {
												offset: [0, -7]
											}
										}
									]
								}
							}}
						>
							<IconButton
								sx={commonStyles.iconButton()}
								// onClick={() => {
								// 	setIsOpenAccountModal(true);
								// }}
							>
								<Edit />
							</IconButton>
						</Tooltip>

						{!row.is_current_user && (
							<Tooltip
								title="Xoá bàn"
								arrow
								slotProps={{
									popper: {
										modifiers: [
											{
												name: 'offset',
												options: {
													offset: [0, -7]
												}
											}
										]
									}
								}}
							>
								<IconButton
									sx={commonStyles.iconButton()}
									onClick={() => {
										// setIsOpenDeleteModal(true);
									}}
								>
									<Trash />
								</IconButton>
							</Tooltip>
						)}
					</Box>
				);
			}
		}
	];

	const mockData = [
		{
			id: 'OD001',
			status: 'Đang xử lý'
		},
		{
			id: 'OD002',
			status: 'Hoàn thành'
		},
		{
			id: 'OD003',
			status: 'Đã hủy'
		},
		{
			id: 'OD004',
			status: 'Đang xử lý'
		},
		{
			id: 'OD005',
			status: 'Hoàn thành'
		},
		{
			id: 'OD006',
			status: 'Đang xử lý'
		},
		{
			id: 'OD007',
			status: 'Đã hủy'
		},
		{
			id: 'OD008',
			status: 'Hoàn thành'
		},
		{
			id: 'OD009',
			status: 'Đang xử lý'
		},
		{
			id: 'OD010',
			status: 'Hoàn thành'
		}
	];

	return (
		<Box>
			<HeaderTitle title="Quản lý bàn" customStyles={{ marginBottom: '24px' }} />
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
					data={mockData}
					columns={operationColumns}
					customTableStyles={{
						height: '90%'
					}}
					isCheckDetail={{
						isClick: false
					}}
					options={{
						addButton: {
							isShow: true,
							title: 'Thêm bàn'
						},
						modals: {
							impactFormModal: {
								isShow: true,
								formModalComponent: (props: any) => {
									return <FormModal {...props} />;
								},
								addTitle: 'Thêm bàn',
								editTitle: 'Chỉnh sửa bàn',
								cancelButtonLabel: 'Huỷ bỏ',
								EditButtonLabel: 'Cập nhật',
								AddButtonLabel: 'Lưu'
							}
						}
					}}
				/>
			</Box>
		</Box>
	);
};

export default Table;
