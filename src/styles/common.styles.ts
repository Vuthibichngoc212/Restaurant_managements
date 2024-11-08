import theme from '@/themes/theme.d';

const completionConfirmationButton = () => {
	return {
		width: '14rem',
		'&.MuiButton-root': { height: '2.8rem', backgroundColor: theme.palette.primary.ceruleanBlue }
	};
};

const iconButton = () => {
	return { '&.MuiIconButton-root': { p: 0 } };
};

export const commonStyles = {
	completionConfirmationButton,
	iconButton
};
