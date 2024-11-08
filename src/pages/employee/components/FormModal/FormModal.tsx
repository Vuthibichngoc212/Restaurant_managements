/* eslint-disable @typescript-eslint/no-explicit-any */

import CRUDModal from '@/components/common/CRUDModal/CRUDModal';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import { employeeSchema } from '@/schema/employee';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const FormModal = ({
	isOpenModal,
	setIsOpenModal,
	headerTitle,
	cancelButtonLabel,
	submitButtonLabel
	// editRole,
	// setEditRole,
	// fetchData
}: any) => {
	const methods = useForm({
		resolver: yupResolver(employeeSchema)
	});

	const handleSubmitForm = (data: any) => {
		console.log(data);
	};

	useEffect(() => {
		methods.reset({
			username: '',
			fullname: '',
			email: '',
			phoneNumber: '',
			address: ''
		});
	}, [isOpenModal, methods]);

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
					<CustomTextField
						label="Tên tài khoản "
						name="username"
						control={methods.control}
						required
					/>

					<CustomTextField label="Tên đầy đủ " name="fullname" control={methods.control} required />
					<CustomTextField label="Email" name="email" control={methods.control} required />
					<CustomTextField
						label="Số điện thoại "
						name="phoneNumber"
						control={methods.control}
						required
					/>
					<CustomTextField label="Địa chỉ " name="address" control={methods.control} required />
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};
export default FormModal;
