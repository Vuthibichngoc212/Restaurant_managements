import { createTheme } from '@mui/material';

// const fontFamily = ["Inter", "sans-serif"].join(",");
const fontFamily = ['Plus Jakarta Sans'].join(',');
// Update the Typography's variant prop options
declare module '@mui/material/styles' {
	interface TypographyVariants {
		display1_regular: React.CSSProperties;
		display1_medium: React.CSSProperties;
		display1_semibold: React.CSSProperties;
		display1_bold: React.CSSProperties;
		display2_regular: React.CSSProperties;
		display2_medium: React.CSSProperties;
		display2_semibold: React.CSSProperties;
		display2_bold: React.CSSProperties;
		heading1_regular: React.CSSProperties;
		heading1_medium: React.CSSProperties;
		heading1_semibold: React.CSSProperties;
		heading1_bold: React.CSSProperties;
		heading2_regular: React.CSSProperties;
		heading2_medium: React.CSSProperties;
		heading2_semibold: React.CSSProperties;
		heading2_bold: React.CSSProperties;
		title1_regular: React.CSSProperties;
		title1_medium: React.CSSProperties;
		title1_semibold: React.CSSProperties;
		title1_bold: React.CSSProperties;
		title2_regular: React.CSSProperties;
		title2_medium: React.CSSProperties;
		title2_semibold: React.CSSProperties;
		title2_bold: React.CSSProperties;
		title3_regular: React.CSSProperties;
		title3_medium: React.CSSProperties;
		title3_semibold: React.CSSProperties;
		title3_bold: React.CSSProperties;
		body1_regular: React.CSSProperties;
		body1_medium: React.CSSProperties;
		body1_semibold: React.CSSProperties;
		body1_bold: React.CSSProperties;
		body2_regular: React.CSSProperties;
		body2_medium: React.CSSProperties;
		body2_semibold: React.CSSProperties;
		body2_bold: React.CSSProperties;
		subbody1_regular: React.CSSProperties;
		subbody1_medium: React.CSSProperties;
		subbody1_semibold: React.CSSProperties;
		subbody1_bold: React.CSSProperties;
		subbody2_regular: React.CSSProperties;
		subbody2_medium: React.CSSProperties;
		subbody2_semibold: React.CSSProperties;
		subbody2_bold: React.CSSProperties;
		subbody3_regular: React.CSSProperties;
		subbody3_medium: React.CSSProperties;
		subbody3_semibold: React.CSSProperties;
		subbody3_bold: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		display1_regular: React.CSSProperties;
		display1_medium: React.CSSProperties;
		display1_semibold: React.CSSProperties;
		display1_bold: React.CSSProperties;
		display2_regular: React.CSSProperties;
		display2_medium: React.CSSProperties;
		display2_semibold: React.CSSProperties;
		display2_bold: React.CSSProperties;
		heading1_regular: React.CSSProperties;
		heading1_medium: React.CSSProperties;
		heading1_semibold: React.CSSProperties;
		heading1_bold: React.CSSProperties;
		heading2_regular: React.CSSProperties;
		heading2_medium: React.CSSProperties;
		heading2_semibold: React.CSSProperties;
		heading2_bold: React.CSSProperties;
		title1_regular: React.CSSProperties;
		title1_medium: React.CSSProperties;
		title1_semibold: React.CSSProperties;
		title1_bold: React.CSSProperties;
		title2_regular: React.CSSProperties;
		title2_medium: React.CSSProperties;
		title2_semibold: React.CSSProperties;
		title2_bold: React.CSSProperties;
		title3_regular: React.CSSProperties;
		title3_medium: React.CSSProperties;
		title3_semibold: React.CSSProperties;
		title3_bold: React.CSSProperties;
		body1_regular: React.CSSProperties;
		body1_medium: React.CSSProperties;
		body1_semibold: React.CSSProperties;
		body1_bold: React.CSSProperties;
		body2_regular: React.CSSProperties;
		body2_medium: React.CSSProperties;
		body2_semibold: React.CSSProperties;
		body2_bold: React.CSSProperties;
		subbody1_regular: React.CSSProperties;
		subbody1_medium: React.CSSProperties;
		subbody1_semibold: React.CSSProperties;
		subbody1_bold: React.CSSProperties;
		subbody2_regular: React.CSSProperties;
		subbody2_medium: React.CSSProperties;
		subbody2_semibold: React.CSSProperties;
		subbody2_bold: React.CSSProperties;
		subbody3_regular: React.CSSProperties;
		subbody3_medium: React.CSSProperties;
		subbody3_semibold: React.CSSProperties;
		subbody3_bold: React.CSSProperties;
	}
}
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		display1_regular: true;
		display1_medium: true;
		display1_semibold: true;
		display1_bold: true;
		display2_regular: true;
		display2_medium: true;
		display2_semibold: true;
		display2_bold: true;
		heading1_regular: true;
		heading1_medium: true;
		heading1_semibold: true;
		heading1_bold: true;
		heading2_regular: true;
		heading2_medium: true;
		heading2_semibold: true;
		heading2_bold: true;
		title1_regular: true;
		title1_medium: true;
		title1_semibold: true;
		title1_bold: true;
		title2_regular: true;
		title2_medium: true;
		title2_semibold: true;
		title2_bold: true;
		title3_regular: true;
		title3_medium: true;
		title3_semibold: true;
		title3_bold: true;
		body1_regular: true;
		body1_medium: true;
		body1_semibold: true;
		body1_bold: true;
		body2_regular: true;
		body2_medium: true;
		body2_semibold: true;
		body2_bold: true;
		subbody1_regular: true;
		subbody1_medium: true;
		subbody1_semibold: true;
		subbody1_bold: true;
		subbody2_regular: true;
		subbody2_medium: true;
		subbody2_semibold: true;
		subbody2_bold: true;
		subbody3_regular: true;
		subbody3_medium: true;
		subbody3_semibold: true;
		subbody3_bold: true;
	}
}

// Update the Palette's color prop options
declare module '@mui/material/styles' {
	interface PaletteColorOptions {
		main?: string;
		black?: string;
		lightSkyBlue?: string;
		babyBlue?: string;
		lightCornflowerBlue?: string;
		lightBlueSky?: string;
		mediumSkyBlue?: string;
		ceruleanBlue?: string;
		blueSapphire?: string;
		deepSkyBlue?: string;
		royalBlue?: string;
		darkSapphire?: string;
		midnightBlue?: string;
		peachPuff?: string;
		peachyOrange?: string;
		orangeSalmon?: string;
		orangeTangerine?: string;
		burntOrange?: string;
		rustRed?: string;
		deepRed?: string;
		mahoganyRed?: string;
		deepMaroon?: string;
		lightPink?: string;
		blushPink?: string;
		pastelPink?: string;
		coralPink?: string;
		salmonPink?: string;
		coralRed?: string;
		scarletRed?: string;
		vermilionRed?: string;
		crimsonRed?: string;
		burgundyRed?: string;
		deepBurgundy?: string;
		cream?: string;
		paleYellow?: string;
		lightApricot?: string;
		bananaYellow?: string;
		amberYellow?: string;
		tangerineOrange?: string;
		pumpkinOrange?: string;
		goldenBrown?: string;
		bronze?: string;
		rustyBrown?: string;
		darkBrown?: string;
		lightMint?: string;
		paleMint?: string;
		lightSeaGreen?: string;
		mintGreen?: string;
		seaGreen?: string;
		jadeGreen?: string;
		emeraldGreen?: string;
		forestGreen?: string;
		hunterGreen?: string;
		deepGreen?: string;
		darkGreen?: string;
		whisper?: string;
		lightGray?: string;
		lightSilver?: string;
		lightSlateGray?: string;
		coolGray?: string;
		slateGray?: string;
		dimGray?: string;
		darkSlateGray?: string;
		charcoalGray?: string;
		darkCharcoalGray?: string;
		deepCharcoal?: string;
	}
}
declare module '@mui/material/styles' {
	interface PaletteColor {
		main?: string;
		black?: string;
		lightSkyBlue?: string;
		babyBlue?: string;
		lightCornflowerBlue?: string;
		lightBlueSky?: string;
		mediumSkyBlue?: string;
		ceruleanBlue?: string;
		blueSapphire?: string;
		deepSkyBlue?: string;
		royalBlue?: string;
		darkSapphire?: string;
		midnightBlue?: string;
		peachPuff?: string;
		peachyOrange?: string;
		orangeSalmon?: string;
		orangeTangerine?: string;
		burntOrange?: string;
		rustRed?: string;
		deepRed?: string;
		mahoganyRed?: string;
		deepMaroon?: string;
		lightPink?: string;
		blushPink?: string;
		pastelPink?: string;
		coralPink?: string;
		salmonPink?: string;
		coralRed?: string;
		scarletRed?: string;
		vermilionRed?: string;
		crimsonRed?: string;
		burgundyRed?: string;
		deepBurgundy?: string;
		cream?: string;
		paleYellow?: string;
		lightApricot?: string;
		bananaYellow?: string;
		amberYellow?: string;
		tangerineOrange?: string;
		pumpkinOrange?: string;
		goldenBrown?: string;
		bronze?: string;
		rustyBrown?: string;
		darkBrown?: string;
		lightMint?: string;
		paleMint?: string;
		lightSeaGreen?: string;
		mintGreen?: string;
		seaGreen?: string;
		jadeGreen?: string;
		emeraldGreen?: string;
		forestGreen?: string;
		hunterGreen?: string;
		deepGreen?: string;
		darkGreen?: string;
		whisper?: string;
		lightGray?: string;
		lightSilver?: string;
		lightSlateGray?: string;
		coolGray?: string;
		slateGray?: string;
		dimGray?: string;
		darkSlateGray?: string;
		charcoalGray?: string;
		darkCharcoalGray?: string;
		deepCharcoal?: string;
	}
}
declare module '@mui/material/styles' {
	interface Palette {
		base: Palette['primary'];
		neutral: Palette['primary'];
	}

	interface PaletteOptions {
		base?: Palette['primary'];
		neutral?: PaletteOptions['primary'];
	}
}

//custom new typo and palette
let theme = createTheme({
	spacing: 8,
	typography: {
		fontFamily,
		allVariants: {
			fontFamily
		},
		// display1
		display1_regular: {
			fontWeight: 400,
			fontSize: 48,
			lineHeight: '56px'
		},
		display1_medium: {
			fontWeight: 500,
			fontSize: 48,
			lineHeight: '56px'
		},
		display1_semibold: {
			fontWeight: 600,
			fontSize: 48,
			lineHeight: '56px'
		},
		display1_bold: {
			fontWeight: 700,
			fontSize: 48,
			lineHeight: '56px'
		},
		// display2
		display2_regular: {
			fontWeight: 400,
			fontSize: 36,
			lineHeight: '48px'
		},
		display2_medium: {
			fontWeight: 500,
			fontSize: 36,
			lineHeight: '48px'
		},
		display2_semibold: {
			fontWeight: 600,
			fontSize: 36,
			lineHeight: '48px'
		},
		display2_bold: {
			fontWeight: 700,
			fontSize: 36,
			lineHeight: '48px'
		},
		// heading1
		heading1_regular: {
			fontWeight: 400,
			fontSize: 32,
			lineHeight: '40px'
		},
		heading1_medium: {
			fontWeight: 500,
			fontSize: 32,
			lineHeight: '40px'
		},
		heading1_semibold: {
			fontWeight: 600,
			fontSize: 32,
			lineHeight: '40px'
		},
		heading1_bold: {
			fontWeight: 700,
			fontSize: 32,
			lineHeight: '40px'
		},
		// heading2
		heading2_regular: {
			fontWeight: 400,
			fontSize: 28,
			lineHeight: '36px'
		},
		heading2_medium: {
			fontWeight: 500,
			fontSize: 28,
			lineHeight: '36px'
		},
		heading2_semibold: {
			fontWeight: 600,
			fontSize: 28,
			lineHeight: '36px'
		},
		heading2_bold: {
			fontWeight: 700,
			fontSize: 28,
			lineHeight: '36px'
		},
		// title1
		title1_regular: {
			fontWeight: 400,
			fontSize: 24,
			lineHeight: '28px'
		},
		title1_medium: {
			fontWeight: 500,
			fontSize: 24,
			lineHeight: '28px'
		},
		title1_semibold: {
			fontWeight: 600,
			fontSize: 24,
			lineHeight: '28px'
		},
		title1_bold: {
			fontWeight: 700,
			fontSize: 24,
			lineHeight: '28px'
		},
		// title2
		title2_regular: {
			fontWeight: 400,
			fontSize: 20,
			lineHeight: '26px'
		},
		title2_medium: {
			fontWeight: 500,
			fontSize: 20,
			lineHeight: '26px'
		},
		title2_semibold: {
			fontWeight: 600,
			fontSize: 20,
			lineHeight: '26px'
		},
		title2_bold: {
			fontWeight: 700,
			fontSize: 20,
			lineHeight: '26px'
		},
		// title3
		title3_regular: {
			fontWeight: 400,
			fontSize: 18,
			lineHeight: '24px'
		},
		title3_medium: {
			fontWeight: 500,
			fontSize: 18,
			lineHeight: '24px'
		},
		title3_semibold: {
			fontWeight: 600,
			fontSize: 18,
			lineHeight: '24px'
		},
		title3_bold: {
			fontWeight: 700,
			fontSize: 18,
			lineHeight: '24px'
		},
		// body1
		body1_regular: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: '22px'
		},
		body1_medium: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: '22px'
		},
		body1_semibold: {
			fontWeight: 600,
			fontSize: 16,
			lineHeight: '22px'
		},
		body1_bold: {
			fontWeight: 700,
			fontSize: 16,
			lineHeight: '22px'
		},
		// body2
		body2_regular: {
			fontWeight: 400,
			fontSize: 14,
			lineHeight: '18px'
		},
		body2_medium: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: '18px'
		},
		body2_semibold: {
			fontWeight: 600,
			fontSize: 14,
			lineHeight: '18px'
		},
		body2_bold: {
			fontWeight: 700,
			fontSize: 14,
			lineHeight: '18px'
		},
		// subbody1
		subbody1_regular: {
			fontWeight: 400,
			fontSize: 12,
			lineHeight: '16px'
		},
		subbody1_medium: {
			fontWeight: 500,
			fontSize: 12,
			lineHeight: '16px'
		},
		subbody1_semibold: {
			fontWeight: 600,
			fontSize: 12,
			lineHeight: '16px'
		},
		subbody1_bold: {
			fontWeight: 700,
			fontSize: 12,
			lineHeight: '16px'
		},
		// subbody2
		subbody2_regular: {
			fontWeight: 400,
			fontSize: 10,
			lineHeight: '14px'
		},
		subbody2_medium: {
			fontWeight: 500,
			fontSize: 10,
			lineHeight: '14px'
		},
		subbody2_semibold: {
			fontWeight: 600,
			fontSize: 10,
			lineHeight: '14px'
		},
		subbody2_bold: {
			fontWeight: 700,
			fontSize: 10,
			lineHeight: '14px'
		},
		// subbody3
		subbody3_regular: {
			fontWeight: 400,
			fontSize: 8,
			lineHeight: '12px'
		},
		subbody3_medium: {
			fontWeight: 500,
			fontSize: 8,
			lineHeight: '12px'
		},
		subbody3_semibold: {
			fontWeight: 600,
			fontSize: 8,
			lineHeight: '12px'
		},
		subbody3_bold: {
			fontWeight: 700,
			fontSize: 8,
			lineHeight: '12px'
		}
	},
	palette: {
		primary: {
			main: '#213970',
			lightSkyBlue: '#F0F7FE',
			babyBlue: '#DEEBFB',
			lightCornflowerBlue: '#C4DEF9',
			lightBlueSky: '#9BC9F5',
			mediumSkyBlue: '#6CACEE',
			ceruleanBlue: '#498CE8',
			blueSapphire: '#3470DC',
			deepSkyBlue: '#498CE8',
			royalBlue: '#294BA4',
			darkSapphire: '#213970',
			midnightBlue: '#1C2A4F',
			antiqueWhite: '#FEF6EE',
			peachPuff: '#FEE9D6',
			lightApricot: '#FBD0AD',
			peachyOrange: '#F9AF78',
			orangeSalmon: '#F58342',
			orangeTangerine: '#F26522',
			burntOrange: '#E34813',
			rustRed: '#BC3412',
			deepRed: '#962B16',
			mahoganyRed: '#792615',
			deepMaroon: '#411009'
		},
		error: {
			main: '#F04438',
			lightPink: '#FEF3F2',
			blushPink: '#FEE4E2',
			pastelPink: '#FFCDC9',
			coralPink: '#FDAAA4',
			salmonPink: '#F97970',
			coralRed: '#F04438',
			scarletRed: '#DE3024',
			vermilionRed: '#BB241A',
			crimsonRed: '#9A221A',
			burgundyRed: '#80231C',
			deepBurgundy: '#460D09'
		},
		warning: {
			main: '#FFFBED',
			cream: '#FFFBED',
			paleYellow: '#FFF7D4',
			lightApricot: '#FFEBA8',
			bananaYellow: '#FFDA71',
			amberYellow: '#FFBF38',
			tangerineOrange: '#FDA712',
			pumpkinOrange: '#F79009',
			goldenBrown: '#C56A09',
			bronze: '#9D530F',
			rustyBrown: '#7E4510',
			darkBrown: '#442106'
		},
		success: {
			main: '#EDFCF3',
			lightMint: '#EDFCF3',
			paleMint: '#D3F8E0',
			lightSeaGreen: '#AAF0C7',
			mintGreen: '#73E2A7',
			seaGreen: '#3BCC84',
			jadeGreen: '#17B26A',
			emeraldGreen: '#0B9055',
			forestGreen: '#097347',
			hunterGreen: '#0A5B39',
			deepGreen: '#094B31',
			darkGreen: '#042A1C'
		},
		background: {
			default: '#FAFAFA',
			paper: '#FFFFFF'
		}
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					heading1: 'h4',
					heading2: 'h4',
					heading3: 'h4',
					title1: 'h4',
					title2: 'h4',
					title3: 'h4',
					title4: 'h4',
					body1: 'h4',
					body2: 'h4',
					body3: 'h4',
					body4: 'h4',
					body5: 'h4',
					subbody1: 'h4',
					subbody2: 'h4'
				}
			}
		}
	}
});

theme = createTheme(theme, {
	palette: {
		base: theme.palette.augmentColor({
			color: {
				main: '#FFFFFF',
				black: '#000000'
			},
			name: 'base'
		}),
		neutral: theme.palette.augmentColor({
			color: {
				main: '#F7F7F8',
				whisper: '#F7F7F8',
				lightGray: '#EEEEF0',
				lightSilver: '#DADADD',
				lightSlateGray: '#B9BAC0',
				coolGray: '#92939E',
				slateGray: '#757682',
				dimGray: '#5F5F6A',
				darkSlateGray: '#4D4D57',
				charcoalGray: '#42424A',
				darkCharcoalGray: '#3A3A40',
				deepCharcoal: '#141416'
			},
			name: 'neutral'
		})
	}
});
const submitButtonStyle = {
	backgroundColor: theme.palette.primary.orangeTangerine,
	color: theme.palette.neutral.main,
	boxShadow: 'none',
	padding: '1.2rem 2.4rem',
	height: '4.2rem',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: theme.palette.primary.orangeTangerine,
		boxShadow: 'none'
	},
	'&:focus': {
		outline: 'none',
		boxShadow: 'none'
	}
};
const textButtonStyle = {
	color: '#C6C6C6',
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
	height: '4.6rem',
	borderRadius: '8px',
	'&:hover': {
		color: '#C6C6C6',
		backgroundColor: 'transparent'
	},
	'&:focus': {
		color: '#C6C6C6',
		backgroundColor: 'transparent',
		outline: 'none'
	}
};

const washedButtonStyle = {
	backgroundColor: theme.palette.base.main,
	border: '1px solid rgba(242, 101, 34, 1)',
	color: 'rgba(242, 101, 34, 1)',
	height: '4.2rem',
	'&:hover': {
		color: 'rgba(242, 101, 34, 1)',
		border: '1px solid rgba(242, 101, 34, 1)',
		backgroundColor: theme.palette.base.main,
		boxShadow: 'none'
	}
};
theme = createTheme(theme, {
	components: {
		MuiButton: {
			defaultProps: {},
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderRadius: '24px',
					height: '40px',
					padding: '11px 20px ',
					...theme.typography.body1_medium
				}
			},
			variants: [
				{
					props: { variant: 'contained' },
					style: submitButtonStyle
				},
				{
					props: { variant: 'contained', size: 'small' },
					style: { ...submitButtonStyle, width: '120px' }
				},
				{
					props: { variant: 'outlined' },
					style: textButtonStyle
				},
				{
					props: { variant: 'outlined', color: 'error' },
					style: {
						...textButtonStyle,
						color: theme.palette.error.main,
						border: `1px solid ${theme.palette.error.main}`
					}
				},
				{
					props: { variant: 'outlined', size: 'small' },
					style: { ...textButtonStyle, width: '120px' }
				},
				{
					props: { variant: 'outlined', size: 'small' },
					style: { ...textButtonStyle, width: '120px' }
				},
				{
					props: { variant: 'outlined', color: 'primary' },
					style: {
						...textButtonStyle,
						color: theme.palette.secondary.vividBlue,
						border: '1px solid #4361EE',
						'svg path': {
							fill: theme.palette.secondary.vividBlue
						},
						'&:hover': {
							borderColor: theme.palette.secondary.vividBlue
						}
					}
				},
				{
					props: { variant: 'outlined', color: 'info' },
					style: {
						...washedButtonStyle
						// color: '#001233',
						// '&:hover': {
						// 	borderColor: 'rgba(0, 18, 51, 0.8)'
						// }
					}
				}
			]
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.05)',
					borderRadius: '1.6rem'
				}
			}
		},
		MuiFormControlLabel: {
			styleOverrides: {
				label: {
					...theme.typography.body2_regular
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-root': {
						borderRadius: '8px',
						borderWidth: '1px',

						backgroundColor: '#FEFEFE',
						height: '44px',
						'& input': {
							fontWeight: 400,
							fontSize: '14px',
							lineHeight: '18px',
							color: '#141416',
							'&:-webkit-autofill': {
								WebkitBoxShadow: '0 0 0 100px #FEFEFE  inset',
								WebkitTextFillColor: 'default'
							}
						},
						'& fieldset': {
							borderColor: '#DADADD',
							'&path': {
								fill: '#17171C'
							}
						},
						'&:hover fieldset': {
							borderColor: '#17171C'
						},
						'&.Mui-focused fieldset': {
							borderColor: '#17171C',
							'&path': {
								fill: '#17171C'
							}
						},
						'&.MuiFilled fieldset': {
							borderColor: '#17171C',
							'&path': {
								fill: '#17171C'
							}
						}
					},
					'&.Mui-error .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#DE3024'
						}
					}
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: '#141416',
					fontSize: '14px',
					lineHeight: '18px',
					marginBottom: '6px'
				}
			}
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					fontWeight: 400,
					fontSize: '12px',
					lineHeight: '16px',
					color: '#EF233C'
				}
			}
		},
		MuiPickersCalendarHeader: {
			styleOverrides: {
				switchViewIcon: {
					color: 'transparent'
				},
				label: {
					fontWeight: 600,
					fontSize: '16px',
					lineHeight: '21px',
					textTransform: 'capitalize'
				}
			}
		},
		MuiPickersDay: {
			styleOverrides: {
				root: {
					fontWeight: 500,
					fontSize: '12px',
					lineHeight: '16px',
					color: '#141416',
					'&.Mui-selected': {
						color: '#fff',
						border: 'none',
						backgroundColor: '#4361EE !important'
					},
					'&.MuiPickersDay-today': {
						color: '#4361EE',
						borderColor: '#4361EE',
						backgroundColor: 'transparent'
					}
				}
			}
		}
	}
});

export default theme;
