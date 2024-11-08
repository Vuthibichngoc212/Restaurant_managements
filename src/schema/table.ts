import * as Yup from 'yup';

export const tableSchema = Yup.object().shape({
	numberOfTable: Yup.string().required('Số lượng bàn không được để trống')
});
