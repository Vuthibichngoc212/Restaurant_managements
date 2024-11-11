/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	Typography,
	Divider,
	Box
} from '@mui/material';
import { useStyles } from './DeletePopUp.styles';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import CloseIcon from '@mui/icons-material/Close';
import theme from '@/themes/theme.d';

interface DeletePopUpProps {
	open: boolean;
	onClose: (event: any) => void;
	onConfirm: (event: any) => void;
	title: string;
	content: React.ReactNode;
}

const DeletePopUp: React.FC<DeletePopUpProps> = ({ open, onClose, onConfirm, title, content }) => {
	const classes = useStyles();

	return (
		<Dialog open={open} onClose={onClose} className={classes.root}>
			<DialogTitle className={classes.dialogTitle}>
				<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
					<HeaderTitle
						title={title}
						customStyles={{
							// '& .MuiTypography-root': { color: '#000' },
							'& .MuiTypography-root': { color: theme.palette.primary.freshMint },
							textAlign: 'center',
							mb: '1.6rem',
							gridColumn: '2/3'
						}}
						variant="title2_bold"
					/>
					<Box sx={{ gridColumn: '3', textAlign: 'end' }}>
						<CloseIcon onClick={onClose} sx={{ cursor: 'pointer' }} />
					</Box>
				</Box>
				<Divider sx={{ mb: '1.6rem' }} />
			</DialogTitle>

			<DialogContent>
				<DialogContentText>
					<Typography className={classes.dialogContent}>{content}</Typography>
				</DialogContentText>
			</DialogContent>
			<DialogActions className={classes.dialogActions}>
				<Button
					variant="outlined"
					size="medium"
					onClick={onClose}
					sx={{
						marginRight: '1.6rem'
					}}
					color="info"
				>
					Huỷ bỏ
				</Button>
				<Button
					variant="contained"
					size="medium"
					onClick={() => {
						onConfirm(event);
					}}
				>
					Xác nhận
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeletePopUp;
