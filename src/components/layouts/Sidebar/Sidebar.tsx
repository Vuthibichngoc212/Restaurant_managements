/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from '@/assets/icons/logoRes.png';
import theme from '@/themes/theme.d';
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
	const { isOpenSidebar, setIsOpenSidebar, setExpanded } = useCommonStore();

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
				<Divider />
				<List>
					{filterSidebarRoutes(sidebar)
						.filter((value: any) => value?.children)
						?.map((primaryLevelItem: any) => {
							return (
								<Box key={primaryLevelItem.label}>
									<ListItem
										disablePadding
										sx={
											location.pathname === primaryLevelItem.path
												? {
														// backgroundColor: theme.palette.neutral.main,
														backgroundColor: '#D5BBA2',
														// color: theme.palette.neutral.deepCharcoal,
														color: '#fff',
														border: '1px solid #A67C52',
														borderRadius: '40px',
														'& .MuiButtonBase-root': {
															'& .MuiListItemIcon-root': {
																// color: theme.palette.neutral.deepCharcoal
																color: '#fff'
															},
															'& .MuiListItemText-root': {
																'& .MuiTypography-root': {
																	// color: theme.palette.neutral.deepCharcoal,
																	color: '#fff',
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
																// fill: theme.palette.neutral.deepCharcoal
																// fill: '#4B2C20'
																fill: '#F6F2ED'
																// fill: '#A67C52'
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
								</Box>
							);
						})}
				</List>
			</Drawer>
		</Box>
	);
};

export default SideBar;
