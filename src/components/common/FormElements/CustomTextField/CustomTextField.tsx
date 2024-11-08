import { Box, InputAdornment, TextField, TextFieldProps, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
interface TextFieldViewProps<TFieldValues extends FieldValues>
	extends Omit<TextFieldProps, 'name'> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	label?: string;
	required?: boolean;
	icon?: string;
}

const CustomTextField = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	required,
	icon,
	...props
}: TextFieldViewProps<TFieldValues>) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: required ? `${label} bắt buộc nhập` : false
			}}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<Box>
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

					<TextField
						InputLabelProps={{
							shrink: true
						}}
						InputProps={{
							startAdornment: icon ? (
								<InputAdornment position="start">
									<img src={icon} alt={`${name}-icon`} />
								</InputAdornment>
							) : null
						}}
						fullWidth
						value={value}
						error={!!error?.message}
						helperText={error?.message ?? ''}
						onChange={onChange}
						{...props}
					/>
				</Box>
			)}
		/>
	);
};

export default CustomTextField;
