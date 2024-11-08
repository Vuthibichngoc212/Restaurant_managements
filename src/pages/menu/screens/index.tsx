import TableCommon from '@/components/common/CommonTable/CommonTable';
import theme from '@/themes/theme.d';
import { Box, IconButton, Tooltip } from '@mui/material';
import FormModal from '../components/FormModal/FormModal';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import Edit from '@/assets/icons/edit-table.svg?react';
import Trash from '@/assets/icons/trash-table.svg?react';
import { commonStyles } from '@/styles/common.styles';

const Menu = () => {
	const operationColumns = [
		{ name: 'stt', title: 'STT', align: 'center', width: 50 },
		{ name: 'name', title: 'Tên món ăn', align: 'left', width: 230 },
		{ name: 'price', title: 'Giá', align: 'left', width: 100 },
		{ name: 'category', title: 'Phân loại', align: 'left', width: 130 },
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
			name: 'Phở Bò',
			price: '50,000 VND',
			category: 'Món nước'
		},
		{
			stt: 2,
			name: 'Cơm Tấm',
			price: '40,000 VND',
			category: 'Món cơm'
		},
		{
			stt: 3,
			name: 'Bánh Mì Thịt',
			price: '20,000 VND',
			category: 'Bánh mì'
		},
		{
			stt: 4,
			name: 'Bún Chả',
			price: '45,000 VND',
			category: 'Món nước'
		},
		{
			stt: 5,
			name: 'Gỏi Cuốn',
			price: '30,000 VND',
			category: 'Món khai vị'
		},
		{
			stt: 6,
			name: 'Mì Xào Bò',
			price: '55,000 VND',
			category: 'Món xào'
		},
		{
			stt: 7,
			name: 'Bánh Xèo',
			price: '35,000 VND',
			category: 'Món chiên'
		},
		{
			stt: 8,
			name: 'Lẩu Thái',
			price: '200,000 VND',
			category: 'Món lẩu'
		},
		{
			stt: 9,
			name: 'Chả Giò',
			price: '25,000 VND',
			category: 'Món khai vị'
		},
		{
			stt: 10,
			name: 'Canh Chua Cá',
			price: '60,000 VND',
			category: 'Món canh'
		}
	];

	return (
		<Box>
			<HeaderTitle title="Quản lý thực đơn" customStyles={{ marginBottom: '24px' }} />
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
							title: 'Thêm thực đơn'
						},
						modals: {
							impactFormModal: {
								isShow: true,
								formModalComponent: (props: any) => {
									return <FormModal {...props} />;
								},
								addTitle: 'Thêm thực đơn',
								editTitle: 'Chỉnh sửa thực đơn',
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

export default Menu;
