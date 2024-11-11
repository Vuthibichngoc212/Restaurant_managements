import * as Yup from 'yup';

export const tableSchema = Yup.object().shape({
	id: Yup.number().required('Số lượng bàn không được để trống')
});
