import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { styled } from '@mui/system';

interface CommonCheckboxProps<TFieldValues extends FieldValues>
	extends Omit<CheckboxProps, 'name'> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	label?: string;
}

const UnCheckedIconCustom = styled('span')(() => ({
	width: 20,
	height: 20,
	borderRadius: 4,
	backgroundColor: '#FEFEFE',
	border: '1px solid #DADADD',
	'.Mui-focusVisible &': {
		outline: '#158802',
		outlineOffset: 2
	}
}));

const CheckedIconCustom = styled(UnCheckedIconCustom)({
	backgroundColor: '#001233',
	border: 'none',
	'&:before': {
		width: 20,
		height: 20,
		display: 'block',
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
			" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
			"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
		content: '""'
	}
});

const CommonCheckbox = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	...props
}: CommonCheckboxProps<TFieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControlLabel
					control={
						<Checkbox
							{...field}
							checked={!!field.value}
							disableRipple
							checkedIcon={<CheckedIconCustom />}
							icon={<UnCheckedIconCustom />}
							{...props}
						/>
					}
					label={label}
				/>
			)}
		/>
	);
};

export default CommonCheckbox;
