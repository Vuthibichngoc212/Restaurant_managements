import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	card: {
		padding: '2.4rem 3.2rem',
		marginTop: '2.4rem',
		'&.MuiCard-root': {
			boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
		}
	},
	headerTitle: {
		margin: '4.4rem 0 2.4rem 0'
	},
	basebuttonRoot: {
		'&.MuiButton-root': {
			backgroundColor: '#f2f2f2',
			boxShadow: 'none',
			'&:hover': {
				backgroundColor: '#f2f2f2',
				boxShadow: 'none'
			}
		}
	}
}));
