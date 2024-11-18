/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
	Box,
	Button,
	CircularProgress,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Typography
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Add from '@mui/icons-material/Add';
import Trash from '@/assets/icons/trash.svg?react';
import bgTableImage from '@/assets/images/bg-table.jpeg';
import { useDeleteTableMutation, useGetTableQuery } from '@/redux/api/api.caller';
import { toast } from 'react-toastify';
import DeletePopUp from '@/components/common/DeletePopUp/DeletePopUp';
import FormModal from '../components/FormModal/FormModal';
import theme from '@/themes/theme.d';

const Table = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isEdit, setIsEdit] = useState<any>(null);
	const [deleteModal, setDeleteModal] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedTable, setSelectedTable] = useState<number | null>(null);
	const open = Boolean(anchorEl);

	const { data: tablesData, refetch, isLoading } = useGetTableQuery();
	const [deleteTable] = useDeleteTableMutation();

	const tableData = tablesData?.data || [];

	const handleClickAdd = () => {
		setIsOpenModal(true);
		setIsEdit(null);
	};

	const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
		setAnchorEl(event.currentTarget);
		setSelectedTable(id);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		setSelectedTable(null);
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

	return (
		<>
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
			<Grid container spacing={3}>
				{isLoading ? (
					<Box
						sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '66vh' }}
					>
						<CircularProgress />
					</Box>
				) : (
					tableData.map((table: any) => (
						<Grid item xs={12} sm={6} md={4} lg={2.4} key={table.id}>
							<Box
								sx={{
									borderRadius: 3,
									overflow: 'hidden',
									boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
									textAlign: 'center',
									position: 'relative',
									display: 'flex',
									flexDirection: 'column',
									cursor: 'pointer'
								}}
							>
								<Box
									component="img"
									src={bgTableImage}
									alt={`Bàn ${table.id}`}
									sx={{
										width: '100%',
										height: 150,
										backgroundColor: '#f0f0f0'
									}}
								/>
								<IconButton
									onClick={(event) => handleMenuOpen(event, table.id)}
									sx={{
										position: 'absolute',
										top: 10,
										right: 10,
										color: '#DADADD',
										backgroundColor: 'rgba(128, 128, 128, 0.8)',
										'&:hover': {
											backgroundColor: 'rgba(105, 105, 105, 0.9)'
										}
									}}
								>
									<MoreVertIcon />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									open={open && selectedTable === table.id}
									onClose={handleMenuClose}
									anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
									transformOrigin={{ vertical: 'top', horizontal: 'right' }}
								>
									<MenuItem
										onClick={() => handleDeleteModal(table)}
										sx={{ color: 'red', fontWeight: 'bold' }}
									>
										<Trash style={{ marginRight: '5px' }} />
										<Typography variant="body2_medium" color="red">
											Xoá
										</Typography>
									</MenuItem>
								</Menu>

								<Box
									sx={{
										backgroundColor: '#D5BBA2',
										padding: '10px 0',
										color: '#fff',
										fontWeight: 'bold',
										fontSize: '16px',
										marginTop: 0
									}}
								>
									Bàn {table.id}
								</Box>
							</Box>
						</Grid>
					))
				)}
			</Grid>
			<FormModal
				isOpenModal={isOpenModal}
				setIsOpenModal={setIsOpenModal}
				headerTitle="Thêm bàn"
				cancelButtonLabel="Huỷ bỏ"
				submitButtonLabel="Lưu"
			/>

			<DeletePopUp
				onConfirm={handleDeleteConfirm}
				open={deleteModal}
				onClose={closeDeleteModal}
				title={'Xoá bàn'}
				content={
					<Typography sx={{ color: theme.palette.neutral.black, fontSize: '1.6rem' }}>
						Bạn có chắc chắn muốn xoá bàn {''}
						<Typography variant="body1_regular" component="span" sx={{ color: '#000' }}>
							{isEdit?.id} {''}
						</Typography>
						không?
					</Typography>
				}
			/>
		</>
	);
};

export default Table;
