// style.ts

import theme from '@/themes/theme.d';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
		'&.MuiPaper-root': {
			backgroundColor: '#fff',
			borderBottomLeftRadius: '12px',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)'
		},
		'&.MuiStack-root': {
			width: '100%'
		},
		flexShrink: 0,
		flexDirection: 'row'
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1.6rem 2.4rem'
	},

	userMenu: {
		marginTop: '45px'
	},
	title: {
		'&.MuiTypography-root': {
			fontSize: 24,
			lineHeight: '2.8rem',
			color: '#f26526'
		}
	},
	menuItemText: {
		'&.MuiTypography-root': {
			color: theme.palette.neutral.black
		}
	},
	userStack: {
		'&.MuiBox-root': {
			cursor: 'pointer',
			color: theme.palette.neutral.black,
			paddingRight: '2.4rem'
		}
	},
	menuItem: {
		'&.MuiTypography-root': {
			color: '#98989A'
		}
	},
	menuItemIcon: {
		'& .MuiSvgIcon-root': {
			color: theme.palette.neutral.black
		}
	}
});

export default useStyles;
