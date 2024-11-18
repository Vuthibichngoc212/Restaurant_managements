/* eslint-disable @typescript-eslint/no-explicit-any */

import CRUDModal from '@/components/common/CRUDModal/CRUDModal';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import {
	useCreateUsersMutation,
	useGetUsersQuery,
	useUpdateUsersMutation
} from '@/redux/api/api.caller';
import { employeeSchema } from '@/schema/employee';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormModal = ({
	isOpenModal,
	setIsOpenModal,
	headerTitle,
	cancelButtonLabel,
	submitButtonLabel,
	selectedUser
}: any) => {
	const { refetch } = useGetUsersQuery();
	const [addEmployees] = useCreateUsersMutation();
	const [updateEmployees] = useUpdateUsersMutation();

	const methods = useForm({
		resolver: yupResolver(employeeSchema)
	});

	const handleSubmitForm = async (data: any) => {
		try {
			if (selectedUser) {
				await updateEmployees({ userId: selectedUser.id, ...data }).unwrap();
				console.log('Người dùng đã được cập nhật', data);
				toast.success('Chỉnh sửa nhân viên thành công', {
					position: 'bottom-right',
					autoClose: 1000,
					theme: 'colored'
				});
				refetch();
			} else {
				await addEmployees(data).unwrap();
				console.log('Người dùng đã được thêm mới', data);
				toast.success('Thêm nhân viên thành công', {
					position: 'bottom-right',
					autoClose: 1000,
					theme: 'colored'
				});
				refetch();
			}
			setIsOpenModal(false);
		} catch (error) {
			console.error('Lỗi khi xử lý:', error);
			toast.error('Lỗi khi xử lý', {
				theme: 'colored',
				autoClose: 1000,
				position: 'bottom-right'
			});
		}
	};

	useEffect(() => {
		if (selectedUser) {
			methods.reset({
				name: selectedUser.name || '',
				email: selectedUser.email || '',
				password: selectedUser.password || '',
				phone: selectedUser.phone || '',
				address: selectedUser.address || ''
			});
		} else {
			methods.reset({
				name: '',
				email: '',
				password: '',
				phone: '',
				address: ''
			});
		}
	}, [selectedUser, methods, isOpenModal]);

	return (
		<>
			<ToastContainer />
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
						<CustomTextField label="Họ tên " name="name" control={methods.control} required />
						<CustomTextField label="Email" name="email" control={methods.control} required />
						<CustomTextField label="Mật khẩu" name="password" control={methods.control} required />
						<CustomTextField
							label="Số điện thoại"
							name="phone"
							control={methods.control}
							required
						/>
						<CustomTextField label="Địa chỉ" name="address" control={methods.control} required />
					</Box>
				</FormProvider>
			</CRUDModal>
		</>
	);
};
export default FormModal;
