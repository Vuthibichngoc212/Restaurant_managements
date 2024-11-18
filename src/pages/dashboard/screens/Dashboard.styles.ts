import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	cardContentRoot: {
		'&.MuiCardContent-root:last-child': {
			paddingBottom: '1.6rem'
		}
	},
	boxContent: {
		display: 'flex',
		alignItems: 'center',
		gap: '1.6rem'
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		'& > .MuiBox-root': {
			// backgroundColor: '#FFF1EA',
			width: '6.4rem',
			height: '6.4rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '50%'
		},
		'& .MuiSvgIcon-root': {
			fontSize: '3.6rem'
		}
	}
}));
