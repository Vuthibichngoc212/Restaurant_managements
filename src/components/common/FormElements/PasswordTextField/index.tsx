import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Box,
	IconButton,
	InputAdornment,
	TextField,
	TextFieldProps,
	Typography
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface TextFieldViewProps<TFieldValues extends FieldValues>
	extends Omit<TextFieldProps, 'name'> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	label?: string;
	required?: boolean;
	icon?: string;
}

const PasswordTextField = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	variant,
	size = 'small',
	required,
	icon,
	...props
}: TextFieldViewProps<TFieldValues>) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<Controller
			control={control}
			name={name}
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
						variant={variant || 'outlined'}
						type={showPassword ? 'text' : 'password'}
						size={size}
						fullWidth
						value={value}
						error={!!error?.message}
						helperText={error?.message ?? ''}
						onChange={onChange}
						InputProps={{
							startAdornment: icon ? (
								<InputAdornment position="start">
									<img src={icon} alt={`${name}-icon`} />
								</InputAdornment>
							) : null,
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleClickShowPassword}>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							)
						}}
						{...props}
					/>
				</Box>
			)}
		/>
	);
};

export default PasswordTextField;
