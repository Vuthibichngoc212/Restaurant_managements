/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '@/assets/icons/logoRes.png';
import theme from '@/themes/theme.d';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStyles } from './Sidebar.styles';
import useCommonStore from '@/stores/common.stores';
import useRouter from '@/routes/routerHook';

const drawerWidth = 260;
const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: 'hidden',
	overflowY: 'auto'
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`
	}
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme)
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme)
		})
	})
);
const SideBar = () => {
	const location = useLocation();
	const classes = useStyles();
	const { sidebar, navigate } = useRouter();
	const { isOpenSidebar, setIsOpenSidebar, expanded, setExpanded } = useCommonStore();

	const handleItemClick = (itemPath: any) => {
		navigate(itemPath);
	};

	const isChildActive = (primaryLevelItem: any) => {
		return primaryLevelItem.children?.some((child: any) =>
			location.pathname.startsWith(child.path)
		);
	};

	const filterSidebarRoutes = (routes: any) => {
		if (!routes) return [];
		return routes
			.map((route: any) => {
				if (route?.children && route?.children.length > 0) {
					const filteredChildren = filterSidebarRoutes(route.children);

					const routeHasPermission = !route.resource;
					if (filteredChildren.length > 0 || routeHasPermission) {
						return {
							...route,
							children: filteredChildren.length > 0 ? filteredChildren : undefined
						};
					}
					return null;
				} else {
					const routeHasPermission = !route.resource;
					return routeHasPermission ? route : null;
				}
			})
			.filter((route: null) => route !== null);
	};

	const handleExpansion = (label: any) => (_: any, isExpanded: any) => {
		setExpanded({
			...expanded,
			[label]: isExpanded
		});
	};

	useEffect(() => {
		setIsOpenSidebar(isOpenSidebar);
	}, [isOpenSidebar, setIsOpenSidebar]);

	const handleDrawer = () => {
		setIsOpenSidebar(!isOpenSidebar);
		setExpanded(false);
	};

	return (
		<Box>
			<Drawer
				variant="permanent"
				open={isOpenSidebar}
				sx={{
					marginTop: '0px',
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
					'&.MuiDrawer-root': {
						position: 'relative',
						'& >.MuiPaper-root': {
							overflowY: 'auto',
							height: '100vh',
							boxShadow:
								'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
							border: 'none',
							padding: isOpenSidebar ? '0rem 2.4rem ' : 0,
							'& > div:first-of-type': {
								display: 'flex',
								justifyContent: 'center !important',
								alignItems: 'center',
								width: '100%',
								minHeight: isOpenSidebar ? '13.4rem' : '4.8rem',
								marginBottom: isOpenSidebar ? '0' : 0,
								'& .MuiBox-root': {
									width: '66%',
									'& img': {
										width: '100%'
									}
								}
							}
						}
					}
				}}
			>
				<Box onClick={handleDrawer} sx={{ cursor: 'pointer' }}>
					<img
						src={Logo}
						alt="logo"
						style={{
							maxWidth: isOpenSidebar ? '100%' : '50%'
						}}
					/>
				</Box>

				<List>
					{filterSidebarRoutes(sidebar)
						.filter((value: any) => value?.children)
						?.map((primaryLevelItem: any) => {
							return (
								<Box key={primaryLevelItem.label}>
									{primaryLevelItem.name === 'System Setting' && <Divider sx={{ m: '1.6rem 0' }} />}
									{primaryLevelItem.children && primaryLevelItem.children.length > 0 ? (
										<Accordion
											expanded={expanded[primaryLevelItem.label]}
											onChange={handleExpansion(primaryLevelItem.label)}
											sx={{
												'&.MuiAccordion-root': {
													boxShadow: 'none',
													background: 'none',
													'& .MuiAccordionSummary-root': {
														minHeight: '0',
														padding: '0.8rem 0.8rem 0.8rem 1.1rem',
														'&:hover': {
															backgroundColor: 'rgba(0, 0, 0, 0.04)',
															borderRadius: '40px'
														},
														borderRadius: '40px',
														backgroundColor: primaryLevelItem.children.some((child: any) =>
															location.pathname.startsWith(child.path)
														)
															? theme.palette.neutral.main
															: '',
														'& .MuiAccordionSummary-content': {
															margin: 0
														},
														'& .MuiAccordionSummary-expandIconWrapper': {
															display: isOpenSidebar ? 'block' : 'none'
														}
													},
													'& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
														minHeight: '4.8rem'
													},
													'& .MuiAccordionSummary-content.Mui-expanded': {
														margin: 0
													},
													...{
														'& path': {
															fill: theme.palette.neutral.slateGray
														}
													}
												}
											}}
										>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1-content"
												id="panel1-header"
												onClick={() => handleItemClick(primaryLevelItem.path)}
												sx={{
													'&.MuiAccordionSummary-root': {
														padding: 0
													}
												}}
											>
												<Box
													sx={{
														display: 'flex',
														width: '100%',
														alignItems: 'center',
														justifyContent: 'center',
														gap: '1.4rem'
													}}
												>
													<Box
														sx={{
															position: 'relative',
															right: !isOpenSidebar ? '0.4rem' : 0,
															top: '0.2rem'
														}}
													>
														<primaryLevelItem.icon />
													</Box>

													<ListItemText
														className={classes.itemTextRoot}
														sx={{
															display: isOpenSidebar ? 'block' : 'none',
															'& .MuiTypography-root': {
																color:
																	(location.pathname.startsWith(primaryLevelItem.path) &&
																		!isChildActive(primaryLevelItem)) ||
																	isChildActive(primaryLevelItem)
																		? theme.palette.neutral.deepCharcoal
																		: theme.palette.neutral.slateGray,
																fontWeight: location.pathname.startsWith(primaryLevelItem.path)
																	? 600
																	: 500
															}
														}}
														primary={primaryLevelItem.label}
													/>
												</Box>
											</AccordionSummary>
											<AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
												<Box display={'flex'} height={'100%'} paddingLeft={2.5} gap={1}>
													<Box width={'100%'}>
														{primaryLevelItem.children.map((secondaryLevelItem: any) => {
															return (
																<Box key={secondaryLevelItem.label}>
																	<ListItem
																		onClick={() => {
																			navigate(secondaryLevelItem.path);
																			setIsOpenSidebar(true);
																		}}
																		disablePadding
																		sx={{
																			display: 'block',
																			borderRadius: '40px',
																			textAlign: 'center',
																			':hover': {
																				backgroundColor: theme.palette.neutral.main
																			},
																			'& .MuiListItemText-root': {
																				'& .MuiTypography-root': {
																					color: location.pathname.startsWith(
																						secondaryLevelItem.path
																					)
																						? theme.palette.neutral.deepCharcoal
																						: theme.palette.neutral.slateGray,
																					fontWeight: location.pathname.startsWith(
																						secondaryLevelItem.path
																					)
																						? 500
																						: 400
																				}
																			},
																			'&::after': {
																				content: '""',
																				position: 'absolute',
																				top: 14,
																				left: 19,
																				width: '0.2rem',
																				height: '1.8rem',
																				borderRadius: '40px'
																			},
																			'& .MuiButtonBase-root.MuiListItemButton-root:hover': {
																				backgroundColor: 'transparent'
																			}
																		}}
																	>
																		<ListItemButton
																			sx={{
																				padding: 1,
																				paddingLeft: 2
																			}}
																		>
																			<Box>
																				<ListItemText
																					className={classes.itemTextRoot}
																					sx={{ textAlign: 'center' }}
																					primary={secondaryLevelItem.label}
																				/>
																			</Box>
																		</ListItemButton>
																	</ListItem>
																</Box>
															);
														})}
													</Box>
												</Box>
											</AccordionDetails>
										</Accordion>
									) : (
										<ListItem
											disablePadding
											sx={
												location.pathname === primaryLevelItem.path
													? {
															backgroundColor: theme.palette.neutral.main,
															color: theme.palette.neutral.deepCharcoal,
															borderRadius: '40px',
															'& .MuiButtonBase-root': {
																'& .MuiListItemIcon-root': {
																	color: theme.palette.neutral.deepCharcoal
																},
																'& .MuiListItemText-root': {
																	'& .MuiTypography-root': {
																		color: theme.palette.neutral.deepCharcoal,
																		fontWeight: 600
																	}
																}
															}
														}
													: {}
											}
											onClick={() => {
												navigate(primaryLevelItem.path);
												setIsOpenSidebar(true);
											}}
										>
											<ListItemButton
												className={classes.listItemRoot}
												sx={{
													paddingLeft: isOpenSidebar ? '0px' : '10px',
													...(location.pathname === primaryLevelItem.path
														? {
																'& path': {
																	fill: theme.palette.neutral.deepCharcoal
																}
															}
														: {
																'& path': {
																	fill: theme.palette.neutral.slateGray
																}
															})
												}}
											>
												<ListItemIcon>
													<primaryLevelItem.icon />
												</ListItemIcon>
												<ListItemText
													className={classes.itemTextRoot}
													primary={primaryLevelItem.label}
													sx={{ opacity: isOpenSidebar ? 1 : 0 }}
												/>
											</ListItemButton>
										</ListItem>
									)}
								</Box>
							);
						})}
				</List>
			</Drawer>
		</Box>
	);
};

export default SideBar;
