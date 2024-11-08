/* eslint-disable @typescript-eslint/no-explicit-any */

import CRUDModal from '@/components/common/CRUDModal/CRUDModal';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import { tableSchema } from '@/schema/table';
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
		resolver: yupResolver(tableSchema)
	});

	const handleSubmitForm = (data: any) => {
		console.log(data);
	};

	useEffect(() => {
		methods.reset({
			numberOfTable: ''
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
						label="Số lượng bàn"
						name="numberOfTable"
						control={methods.control}
						required
					/>
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};
export default FormModal;
