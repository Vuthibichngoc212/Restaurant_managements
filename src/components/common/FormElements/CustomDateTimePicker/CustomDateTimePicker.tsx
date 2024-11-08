import { Box, InputLabel, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Control, Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { useStyles } from './CustomDateTimePicker.styles';
import dayjs from 'dayjs';

interface DateTimePickerViewProps {
	control?: Control<any>;
	name: string;
	label?: string;
	variant?: 'standard' | 'outlined' | 'filled' | undefined;
	size?: 'small' | 'medium' | undefined;
	required?: boolean;
	[x: string]: any;
	customStyles?: any;
}

const CustomDateTimePicker = ({
	control,
	name,
	label,

	required,
	customStyles,
	...props
}: DateTimePickerViewProps) => {
	const classes = useStyles();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<Box sx={{ mb: '1.2rem', ...customStyles }}>
					<InputLabel>
						{label}{' '}
						{required && (
							<Typography component="span" color="red">
								*
							</Typography>
						)}
					</InputLabel>

					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							viewRenderers={{
								hours: renderTimeViewClock,
								minutes: renderTimeViewClock,
								seconds: renderTimeViewClock
							}}
							value={value ? dayjs(value) : null}
							onChange={onChange}
							{...props}
							className={classes.DateTimePickerSize}
						/>
					</LocalizationProvider>
				</Box>
			)}
		/>
	);
};

export default CustomDateTimePicker;
