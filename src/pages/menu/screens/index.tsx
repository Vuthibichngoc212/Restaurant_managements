/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCommon from '@/components/common/CommonTable/CommonTable';
import theme from '@/themes/theme.d';
import { Box, Button, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material';
import FormModal from '../components/FormModal/FormModal';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import Edit from '@/assets/icons/edit-table.svg?react';
import Trash from '@/assets/icons/trash-table.svg?react';
import { commonStyles } from '@/styles/common.styles';
import Add from '@mui/icons-material/Add';
import { useState } from 'react';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import {
	useDeleteMenuMutation,
	useGetCategoryQuery,
	useGetMenuQuery
} from '@/redux/api/api.caller';
import { toast } from 'react-toastify';

const Menu = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isEdit, setIsEdit] = useState<any>(null);
	const [deleteModal, setDeleteModal] = useState(false);

	const [deleteMenu] = useDeleteMenuMutation();
	const { data: categories } = useGetCategoryQuery();
	const categoryMap = categories?.data?.reduce((acc: any, category: any) => {
		acc[category.id] = category.name;
		return acc;
	}, {});

	const { data: menus, isLoading, refetch } = useGetMenuQuery();
	const menuData = menus?.data?.map((menu, index) => ({
		...menu,
		stt: index + 1
	}));

	const handleClickAdd = () => {
		setIsOpenModal(true);
		setIsEdit(null);
	};
	const handleEditClick = (item: any) => {
		setIsEdit(item);
		setIsOpenModal(true);
	};

	const handleDeleteModal = (item: any) => {
		setIsEdit(item);
		setDeleteModal(true);
	};
	const closeDeleteModal = () => {
		setDeleteModal(false);
	};

	const handleDeleteConfirm = async () => {
		if (!isEdit) return;
		try {
			if (isEdit) {
				await deleteMenu(isEdit.id).unwrap();
				toast.success('Xóa thực đơn thành công', {
					position: 'bottom-right',
					autoClose: 1000,
					theme: 'colored'
				});
				refetch();
			}
			closeDeleteModal();
		} catch (error) {
			toast.error('Xóa thực đơn thất bại', {
				theme: 'colored',
				autoClose: 1000,
				position: 'bottom-right'
			});
		}
	};

	const operationColumns = [
		{ name: 'stt', title: 'STT', align: 'center', width: 50 },
		{
			name: 'image_url',
			title: 'Hình ảnh',
			align: 'center',
			width: 100,
			render: (row: any) => {
				return (
					<Box
						component="img"
						src={row.image_url}
						alt="menu"
						sx={{
							width: '130px',
							height: '84px',
							mr: 2,
							objectFit: 'cover',
							borderRadius: '16px',
							border: '1px solid #E0E0E0'
						}}
					></Box>
				);
			}
		},
		{ name: 'name', title: 'Tên món ăn', align: 'left', width: 180 },
		{ name: 'price', title: 'Giá', align: 'left', width: 100 },
		{
			name: 'categories_id',
			title: 'Phân loại',
			align: 'left',
			width: 100,
			render: (row: any) => {
				return (
					<Typography variant="body2_regular">
						{categoryMap?.[row.categories_id] || 'Không có dữ liệu'}
					</Typography>
				);
			}
		},
		{
			name: 'discription',
			title: 'Mô tả',
			align: 'left',
			width: 150,
			render: (row: any) => {
				return (
					<Tooltip
						title={
							<Typography sx={{ fontSize: '12px', color: '#000', padding: '8px' }}>
								{row.discription}
							</Typography>
						}
						arrow
						slotProps={{
							tooltip: {
								sx: {
									backgroundColor: '#fff',
									color: '#000',
									boxShadow: theme.shadows[1]
								}
							}
						}}
					>
						<Typography
							noWrap
							variant="body2_regular"
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								width: '100%',
								display: 'inline-block',
								whiteSpace: 'nowrap',
								cursor: 'pointer'
							}}
						>
							{row.discription}
						</Typography>
					</Tooltip>
				);
			}
		},
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
							title="Chỉnh sửa thực đơn"
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
							title="Xoá thực đơn"
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
							<IconButton sx={commonStyles.iconButton()} onClick={() => handleDeleteModal(row)}>
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
			<HeaderTitle title="Quản lý thực đơn" customStyles={{ marginBottom: '24px' }} />
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
							onClick={handleClickAdd}
						>
							Thêm thực đơn
						</Button>
					</Box>
					<TableCommon
						data={menuData || []}
						columns={operationColumns}
						customTableStyles={{
							height: '90%'
						}}
					/>

					<FormModal
						isOpenModal={isOpenModal}
						setIsOpenModal={setIsOpenModal}
						headerTitle={isEdit ? 'Chỉnh sửa thực đơn' : 'Thêm thực đơn'}
						cancelButtonLabel="Huỷ bỏ"
						submitButtonLabel={isEdit ? 'Cập nhật' : 'Lưu'}
						selectedUser={isEdit}
					/>

					<DeletePopUp
						onConfirm={handleDeleteConfirm}
						open={deleteModal}
						onClose={closeDeleteModal}
						title={'Xoá thực đơn'}
						content={
							<Typography sx={{ color: theme.palette.neutral.black, fontSize: '1.6rem' }}>
								Bạn có chắc chắn muốn xoá thực đơn {''}
								<Typography variant="body1_regular" component="span" sx={{ color: '#000' }}>
									{isEdit?.name} {''}
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

export default Menu;
