/* eslint-disable @typescript-eslint/no-explicit-any */
import CRUDModal from '@/components/common/CRUDModal/CRUDModal';
import CustomTextField from '@/components/common/FormElements/CustomTextField/CustomTextField';
import { menuSchema } from '@/schema/menu';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
	useAddMenuMutation,
	useGetCategoryQuery,
	useGetMenuQuery,
	useUpdateMenuMutation
} from '@/redux/api/api.caller';
import CustomAutocomplete from '@/components/common/FormElements/CustomAutoComplete';
import { IMenuItem } from '@/types/menu';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormModal = ({
	isOpenModal,
	setIsOpenModal,
	headerTitle,
	cancelButtonLabel,
	submitButtonLabel,
	selectedUser
}: any) => {
	const [imageURL, setImageURL] = useState('');

	const { refetch } = useGetMenuQuery();
	const [addMenu] = useAddMenuMutation();
	const [updateMenu] = useUpdateMenuMutation();

	const { data: categories } = useGetCategoryQuery();
	const categoryOptions =
		categories?.data?.map((category: any) => ({
			label: category.name,
			value: category.id
		})) || [];

	const methods = useForm({
		resolver: yupResolver(menuSchema)
	});

	const handleSubmitForm = async (data: any) => {
		try {
			const payload: IMenuItem = {
				name: data.name,
				price: data.price,
				image_url: imageURL || data.image_url,
				categories_id: data.categories_id,
				discription: data.discription
			};

			if (selectedUser) {
				const response = await updateMenu({ id: selectedUser.id, ...payload }).unwrap();
				if (response) {
					console.log('Menu updated successfully:', response);
					toast.success('Chỉnh sửa thực đơn thành công', {
						position: 'bottom-right',
						autoClose: 1000,
						theme: 'colored'
					});
					refetch();
				}
			} else {
				await addMenu(payload).unwrap();
				console.log('Menu added successfully');
				toast.success('Thêm thực đơn thành công', {
					position: 'bottom-right',
					autoClose: 1000,
					theme: 'colored'
				});
				refetch();
			}

			setIsOpenModal(false);
			methods.reset();
		} catch (error) {
			console.error('Error submitting menu:', error);
			toast.error('Lỗi khi xử lý', {
				position: 'bottom-right',
				autoClose: 1000,
				theme: 'colored'
			});
		}
	};

	useEffect(() => {
		if (isOpenModal) {
			if (!selectedUser) {
				methods.reset({
					name: '',
					price: 0,
					image_url: '',
					categories_id: undefined,
					discription: ''
				});
				setImageURL('');
			} else {
				methods.reset({
					name: selectedUser.name || '',
					price: selectedUser.price || 0,
					image_url: selectedUser.image_url || '',
					categories_id: selectedUser.categories_id || undefined,
					discription: selectedUser.discription || ''
				});
				setImageURL(selectedUser.image || '');
			}
		} else {
			setImageURL('');
		}
	}, [isOpenModal, selectedUser, methods]);

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
				<Box sx={{ width: '60rem', display: 'flex', gap: '2rem' }}>
					<Box sx={{ flex: 2 }}>
						<CustomTextField label="Tên thực đơn" name="name" control={methods.control} required />
						<CustomTextField label="Giá" name="price" control={methods.control} required />
						<CustomTextField label="Link ảnh" name="image_url" control={methods.control} required />
						<CustomAutocomplete
							label="Loại thực đơn"
							name="categories_id"
							control={methods.control}
							options={categoryOptions}
						/>
						{/* <CustomTextField label="Mô tả" name="discription" control={methods.control} required /> */}
						<CustomTextField
							label="Mô tả"
							name="discription"
							control={methods.control}
							required
							inputProps={{
								style: {
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis'
								}
							}}
						/>
					</Box>
				</Box>
			</FormProvider>
		</CRUDModal>
	);
};
export default FormModal;
