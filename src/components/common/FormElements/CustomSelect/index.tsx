import { FormControl, InputLabel, MenuItem, Select, SelectProps, Typography } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface CustomSelectProps<TFieldValues extends FieldValues> extends Omit<SelectProps, 'name'> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	label?: string;
	required?: boolean;
	options: { label: string; value: any }[];
}

const CustomSelect = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	required = false,
	options,
	...props
}: CustomSelectProps<TFieldValues>) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: required ? `${label} không được để trống` : false,
				validate: (value) => {
					if (value == null) {
						return `${label} không được để trống`;
					}
					return true;
				}
			}}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<FormControl fullWidth error={!!error?.message}>
					{label && (
						<InputLabel>
							{label}{' '}
							{required && (
								<Typography component="span" color="red">
									*
								</Typography>
							)}
						</InputLabel>
					)}
					<Select value={value} onChange={onChange} {...props}>
						{options.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</Select>
					{error?.message && (
						<Typography variant="caption" color="error">
							{error.message}
						</Typography>
					)}
				</FormControl>
			)}
		/>
	);
};

export default CustomSelect;
