import { Box, Typography, TextFieldProps } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import updateLocale from 'dayjs/plugin/updateLocale';
import calendarIcon from '@/assets/icons/calendar.svg';
import arrowDownIcon from '@/assets/icons/arrowDown-icon.svg';
interface DatePickerFieldProps<TFieldValues extends FieldValues>
	extends Omit<DatePickerProps<dayjs.Dayjs>, 'name'> {
	control: Control<TFieldValues>;
	name: Path<TFieldValues>;
	label?: string;
	required?: boolean;
	icon?: string;
	textFieldProps?: TextFieldProps;
	placeholder?: string;
}
import 'dayjs/locale/vi';
import { convertDay } from '@/utils/DateTime';
dayjs.extend(updateLocale);

const CustomDatePicker = <TFieldValues extends FieldValues>({
	control,
	name,
	label,
	textFieldProps,
	required,
	...props
}: DatePickerFieldProps<TFieldValues>) => {
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

					<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
						<DatePicker
							value={value ? dayjs(value) : null}
							onChange={(date) => {
								onChange(date ? dayjs(date).toISOString() : '');
							}}
							{...props}
							dayOfWeekFormatter={(date: Dayjs) => convertDay(date)}
							slots={{
								openPickerIcon: () => (
									<img style={{ padding: 5 }} src={calendarIcon} alt="calendar-icon" />
								)
							}}
							slotProps={{
								textField: {
									helperText: error?.message ?? '',
									error: !!error?.message,
									placeholder: props.placeholder,
									...textFieldProps
								},
								popper: {
									sx: {
										'& .MuiPaper-root': {
											borderRadius: '12px',
											marginTop: '4px',
											boxShadow: '0px 12px 50px rgba(0, 13, 46, 0.1)'
										},
										'& .MuiDayCalendar-weekDayLabel': {
											fontWeight: 600,
											fontSize: '14px',
											lineHeight: '18px',
											color: '#4361EE'
										},
										'& .MuiPickersYear-yearButton': {
											fontWeight: 500,
											fontSize: '12px',
											lineHeight: '16px',
											color: '#141416',
											'&.Mui-selected': {
												color: '#FEFEFE',
												border: 'none',
												backgroundColor: '#4361EE !important'
											}
										},
										'& .MuiSvgIcon-root': {
											width: '20px',
											height: '20px'
										},
										'& .MuiPickersCalendarHeader-switchViewIcon': {
											backgroundImage: `url(${arrowDownIcon})`,
											width: '14px',
											height: '14px'
										},
										'& .MuiPickersArrowSwitcher-button': {
											backgroundColor: '#F7F7F8',
											marginRight: '0px'
										}
									}
								}
							}}
						/>
					</LocalizationProvider>
				</Box>
			)}
		/>
	);
};

export default CustomDatePicker;
