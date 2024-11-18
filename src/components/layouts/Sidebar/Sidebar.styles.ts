import theme from '@/themes/theme.d';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	listItemRoot: {
		'&.MuiButtonBase-root': {
			'&.MuiListItemButton-root:hover': {
				borderRadius: '40px'
			},
			'& .MuiListItemIcon-root': {
				minWidth: 0,
				margin: '0px 14px 0px 10px'
				// color: theme.palette.primary.main
				// color: '#fff !important'
			}
		}
	},
	itemTextRoot: {
		'& .MuiTypography-root': {
			...theme.typography.body2_medium,
			color: theme.palette.neutral.slateGray
		}
	}
}));
