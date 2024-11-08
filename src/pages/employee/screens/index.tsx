/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCommon from '@/components/common/CommonTable/CommonTable';
import theme from '@/themes/theme.d';
import { Box, IconButton, Tooltip } from '@mui/material';
import FormModal from '../components/FormModal/FormModal';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import Edit from '@/assets/icons/edit-table.svg?react';
import Trash from '@/assets/icons/trash-table.svg?react';
import { commonStyles } from '@/styles/common.styles';

const Employees = () => {
	const operationColumns = [
		{ name: 'stt', title: 'STT', align: 'center', width: 50 },
		{ name: 'username', title: 'Tên tài khoản', align: 'left', width: 130 },
		{ name: 'fullname', title: 'Tên đầy đủ', align: 'left', width: 150 },
		{ name: 'phone', title: 'Số điện thoại', align: 'left', width: 130 },
		{ name: 'email', title: 'Email', align: 'left', width: 230 },
		{ name: 'adress', title: 'Địa chỉ', align: 'left', width: 230 },
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
								// 	setUser(row);
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
										// setUserToken(row.user_token);
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
			stt: 1,
			username: 'user1',
			fullname: 'Nguyễn Văn A Văn',
			phone: '0123456789',
			email: 'user1@example.com',
			adress: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh'
		},
		{
			stt: 2,
			username: 'user2',
			fullname: 'Trần Thị B',
			phone: '0987654321',
			email: 'user2@example.com',
			adress: '456 Đường DEF, Quận 2, TP. Hồ Chí Minh'
		},
		{
			stt: 3,
			username: 'user3',
			fullname: 'Lê Văn C',
			phone: '0912345678',
			email: 'user3@example.com',
			adress: '789 Đường GHI, Quận 3, TP. Hồ Chí Minh'
		},
		{
			stt: 4,
			username: 'user4',
			fullname: 'Phạm Thị D',
			phone: '0938765432',
			email: 'user4@example.com',
			adress: '321 Đường JKL, Quận 4, TP. Hồ Chí Minh'
		},
		{
			stt: 5,
			username: 'user5',
			fullname: 'Hoàng Văn E',
			phone: '0976543210',
			email: 'user5@example.com',
			adress: '654 Đường MNO, Quận 5, TP. Hồ Chí Minh'
		}
	];

	return (
		<Box>
			<HeaderTitle title="Quản lý nhân viên" customStyles={{ marginBottom: '24px' }} />
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
							title: 'Thêm nhân viên'
						},
						modals: {
							impactFormModal: {
								isShow: true,
								formModalComponent: (props: any) => {
									return <FormModal {...props} />;
								},

								addTitle: 'Thêm nhân viên',
								editTitle: 'Chỉnh sửa nhân viên',
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

export default Employees;
