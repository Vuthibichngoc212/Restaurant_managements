import { Autocomplete, Box, InputLabel, TextField, Typography } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import arrowDownIcon from '@/assets/icons/arrowDown-icon.svg';

interface CustomAutocompleteProps<TFieldValues extends FieldValues> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	label?: string;
	required?: boolean;
	options: { label: string; value: any }[];
	placeholder?: string;
	handleColorValue?: (value: string) => string;
}

const CustomAutocomplete = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	required = false,
	options,
	placeholder,
	handleColorValue,
	...props
}: CustomAutocompleteProps<TFieldValues>) => {
	const findOptionFromValue = (value: any) => options.find((option) => option.value === value);

	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: false,
				validate: (value) =>
					required && value !== undefined && value !== null
						? true
						: required
							? `${label} bắt buộc nhập`
							: true
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
					<Autocomplete
						options={options}
						value={findOptionFromValue(value) || null}
						getOptionLabel={(option) => option.label}
						isOptionEqualToValue={(option, value) => option.value === value.value}
						onChange={(_, selectedOption) => onChange(selectedOption?.value)}
						ListboxProps={{
							sx: {
								'& .MuiAutocomplete-option': {
									fontWeight: 500,
									fontSize: '14px',
									lineHeight: '18px',
									padding: '12px 16px'
								},
								'&.MuiAutocomplete-listbox': {
									marginTop: '12px',
									marginBottom: '12px'
								}
							}
						}}
						componentsProps={{
							paper: {
								sx: {
									borderRadius: '12px',
									marginTop: '4px',
									boxShadow: '0px 12px 50px rgba(0, 13, 46, 0.1)'
								}
							}
						}}
						sx={{
							backgroundColor: handleColorValue ? handleColorValue(value) : 'initial',
							'& .MuiAutocomplete-popupIndicator': {
								backgroundImage: `url(${arrowDownIcon})`,
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								color: 'transparent'
							}
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								error={!!error?.message}
								helperText={error?.message ?? ''}
								required={required}
								{...props}
								placeholder={placeholder}
							/>
						)}
					/>
				</Box>
			)}
		/>
	);
};

export default CustomAutocomplete;
