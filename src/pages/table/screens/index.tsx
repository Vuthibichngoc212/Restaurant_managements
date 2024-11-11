/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCommon from '@/components/common/CommonTable/CommonTable';
import theme from '@/themes/theme.d';
import { Box, Button, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material';
import FormModal from '../components/FormModal/FormModal';
import HeaderTitle from '@/components/common/HeaderTitle/HeaderTitle';
import Trash from '@/assets/icons/trash-table.svg?react';
import { commonStyles } from '@/styles/common.styles';
import { useGetTableQuery, useDeleteTableMutation } from '@/redux/api/api.caller';
import Add from '@mui/icons-material/Add';
import { useState } from 'react';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import { toast } from 'react-toastify';

const Table = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isEdit, setIsEdit] = useState<any>(null);
	const [deleteModal, setDeleteModal] = useState(false);

	const [deleteTable] = useDeleteTableMutation();
	const { data: tables, refetch, isLoading } = useGetTableQuery();
	const tableData = tables?.data?.map((table, index) => ({
		...table,
		stt: index + 1
	}));

	const handleClickAdd = () => {
		setIsOpenModal(true);
		setIsEdit(null);
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
			const deletedAt = new Date().toISOString();
			await deleteTable({ tablesId: isEdit.id, deleted_at: deletedAt }).unwrap();
			toast.success('Xóa bàn thành công', {
				position: 'bottom-right',
				autoClose: 1000,
				theme: 'colored'
			});
			refetch();
			closeDeleteModal();
		} catch (error) {
			toast.error('Xóa bàn thất bại', {
				theme: 'colored',
				autoClose: 1000,
				position: 'bottom-right'
			});
		}
	};

	const operationColumns = [
		{
			name: 'stt',
			title: 'STT',
			align: 'center',
			width: 50
		},
		{
			name: 'id',
			title: 'Số bàn',
			align: 'left',
			width: 100,
			render: (row: any) => {
				return <Typography variant="body2_regular">Bàn số {row.id}</Typography>;
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
			<HeaderTitle title="Quản lý bàn" customStyles={{ marginBottom: '24px' }} />
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
							Thêm bàn
						</Button>
					</Box>
					<TableCommon
						data={tableData || []}
						columns={operationColumns}
						customTableStyles={{
							height: '90%'
						}}
					/>

					<FormModal
						isOpenModal={isOpenModal}
						setIsOpenModal={setIsOpenModal}
						headerTitle="Thêm số lượng bàn"
						cancelButtonLabel="Huỷ bỏ"
						submitButtonLabel="Lưu"
					/>

					<DeletePopUp
						onConfirm={handleDeleteConfirm}
						open={deleteModal}
						onClose={closeDeleteModal}
						title={'Xoá thực đơn'}
						content={
							<Typography sx={{ color: theme.palette.neutral.black, fontSize: '1.6rem' }}>
								Bạn có chắc chắn muốn xoá bàn {''}
								<Typography variant="body1_regular" component="span" sx={{ color: '#000' }}>
									{isEdit?.íd} {''}
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

export default Table;
