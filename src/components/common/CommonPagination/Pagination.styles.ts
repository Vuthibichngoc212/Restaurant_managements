import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	root: {
		position: 'fixed',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: '10',
		gap: '8px',
		bottom: '24px',
		right: '24px',
		'& .MuiPagination-root': {
			'& .MuiButtonBase-root': {
				borderRadius: '0'
			},
			'& .MuiButtonBase-root.Mui-selected': {
				backgroundColor: '#f0f0f0',
				borderRadius: '4px',
				border: '1px solid #498CE8'
			},
			'& svg': {
				fontSize: '2rem',
				fill: '#92939E'
			}
		}
	}
}));
