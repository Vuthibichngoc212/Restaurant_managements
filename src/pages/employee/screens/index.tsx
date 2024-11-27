/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCommon from '@/components/common/CommonTable/CommonTable';
import theme from '@/themes/theme.d';
import { Box, Button, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import Edit from '@/assets/icons/edit-table.svg?react';
import Trash from '@/assets/icons/trash-table.svg?react';
import { commonStyles } from '@/styles/common.styles';
import { useState } from 'react';
import Add from '@mui/icons-material/Add';
import { useDeleteUsersMutation, useGetUsersQuery } from '@/redux/api/api.caller';
import FormModal from '../components/FormModal/FormModal';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import { toast } from 'react-toastify';

const Employees = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedUser, setSelectedUser] = useState<any>(null);
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

	const { data: response, isLoading, refetch } = useGetUsersQuery();
	const [deleteUsers] = useDeleteUsersMutation();

	const userData = response?.data?.map((user, index) => ({
		...user,
		stt: index + 1
	}));

	const handleAddClick = () => {
		setSelectedUser(null);
		setIsOpenModal(true);
	};
	const handleEditClick = (user: any) => {
		setSelectedUser(user);
		setIsOpenModal(true);
	};

	const handleDeleteClick = (user: any) => {
		setSelectedUser(user);
		setIsOpenModalDelete(true);
	};

	const closeDeleteModal = () => {
		setIsOpenModalDelete(false);
	};

	const handleDeleteConfirm = async () => {
		if (!selectedUser) return;
		try {
			if (selectedUser) {
				await deleteUsers(selectedUser.id).unwrap();
				toast.success('Xóa nhân viên thành công');
				refetch();
			}
			closeDeleteModal();
		} catch (error) {
			toast.error('Xóa nhân viên thất bại');
		}
	};

	const operationColumns = [
		{
			name: 'stt',
			title: 'STT',
			align: 'center',
			width: 50
		},
		{ name: 'name', title: 'Họ tên', align: 'left', width: 150 },
		{ name: 'email', title: 'Email', align: 'left', width: 230 },
		{ name: 'password', title: 'Mật khẩu', align: 'left', width: 130 },
		{ name: 'phone', title: 'Số điện thoại', align: 'left', width: 150 },
		{ name: 'address', title: 'Địa chỉ', align: 'left', width: 200 },
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
							title="Chỉnh sửa nhân viên"
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
							<IconButton sx={commonStyles.iconButton()} onClick={() => handleEditClick(row)}>
								<Edit />
							</IconButton>
						</Tooltip>

						<Tooltip
							title="Xoá nhân viên"
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
									handleDeleteClick(row);
								}}
							>
								<Trash />
							</IconButton>
						</Tooltip>
					</Box>
				);
			}
		}
	];

	return (
		<Box>
			<HeaderTitle title="Quản lý nhân viên" customStyles={{ marginBottom: '24px' }} />
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
					<Box
						sx={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'flex-end',
							mb: '1.6rem'
						}}
					>
						<Button
							variant="contained"
							size="medium"
							sx={{
								'&.MuiButtonBase-root.MuiButton-root': { height: '4.6rem' }
							}}
							startIcon={<Add />}
							onClick={handleAddClick}
						>
							Thêm tài khoản
						</Button>
					</Box>
					<TableCommon
						data={userData || []}
						columns={operationColumns}
						customTableStyles={{
							height: '90%'
						}}
					/>
					<FormModal
						isOpenModal={isOpenModal}
						setIsOpenModal={setIsOpenModal}
						headerTitle={selectedUser ? 'Chỉnh sửa nhân viên' : 'Thêm nhân viên'}
						cancelButtonLabel="Huỷ bỏ"
						submitButtonLabel={selectedUser ? 'Cập nhật' : 'Lưu'}
						selectedUser={selectedUser}
					/>

					<DeletePopUp
						onConfirm={handleDeleteConfirm}
						open={isOpenModalDelete}
						onClose={closeDeleteModal}
						title={'Xoá nhân viên'}
						content={
							<Typography sx={{ color: theme.palette.neutral.black, fontSize: '1.6rem' }}>
								Bạn có chắc chắn muốn xoá nhân viên {''}
								<Typography variant="body1_regular" component="span" sx={{ color: '#000' }}>
									{selectedUser?.name} {''}
								</Typography>
								không?
							</Typography>
						}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Employees;
