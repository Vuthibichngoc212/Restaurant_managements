/* eslint-disable @typescript-eslint/no-explicit-any */
import CRUDModal from '@/components/common/CRUDModal/CRUDModal';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import { useAddTableMutation, useGetTableQuery } from '@/redux/api/api.caller';
import { tableSchema } from '@/schema/table';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormModal = ({
	isOpenModal,
	setIsOpenModal,
	headerTitle,
	cancelButtonLabel,
	submitButtonLabel
}: any) => {
	const methods = useForm({
		resolver: yupResolver(tableSchema)
	});

	const { refetch } = useGetTableQuery();
	const [addTable] = useAddTableMutation();

	const handleSubmitForm = async (data: any) => {
		try {
			const payload = {
				id: data.id,
				status: 0
			};
			await addTable(payload).unwrap();
			toast.success('Thêm số bàn thành công', {
				position: 'bottom-right',
				autoClose: 1000,
				theme: 'colored'
			});
			refetch();
			setIsOpenModal(false);
			methods.reset();
		} catch (error: any) {
			if (error?.data?.error?.includes('Duplicate entry')) {
				toast.error('Số bàn này đã tồn tại, vui lòng chọn số khác.', {
					position: 'bottom-right',
					autoClose: 1000,
					theme: 'colored'
				});
			} else {
				toast.error('Lỗi khi xử lý yêu cầu, vui lòng thử lại.', {
					position: 'bottom-right',
					autoClose: 1000,
					theme: 'colored'
				});
			}
		}
	};
	useEffect(() => {
		methods.reset({
			id: 0
		});
	}, [methods, isOpenModal]);

	return (
		<CRUDModal
			isOpenModal={isOpenModal}
			setIsOpenModal={setIsOpenModal}
			headerTitle={headerTitle}
			cancelButtonLabel={cancelButtonLabel}
			submitButtonLabel={submitButtonLabel}
			onSubmit={methods.handleSubmit(handleSubmitForm)}
		>
			<FormProvider {...methods}>
				<Box sx={{ width: '60rem' }}>
					<CustomTextField label="Số lượng bàn" name="id" control={methods.control} required />
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};
export default FormModal;
