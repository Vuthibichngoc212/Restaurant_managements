import { Breadcrumbs, Link as MuiLink, Box, Typography } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

type BreadcrumbKeys = 'DASHBOARD' | 'EMPLOYEE' | 'MENU' | 'TABLE' | 'PROFILE' | 'ORDER';

const BREADCRUMB: Record<BreadcrumbKeys, { INDEX: string }> = {
	DASHBOARD: { INDEX: 'Tổng quan' },
	EMPLOYEE: { INDEX: 'Quản lý nhân viên' },
	MENU: { INDEX: 'Quản lý thực đơn' },
	TABLE: { INDEX: 'Quản lý bàn' },
	PROFILE: { INDEX: 'Trang cá nhân' },
	ORDER: { INDEX: 'Quản lý đơn hàng' }
};

const Breadcrumb = () => {
	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

	return (
		<Box>
			<Breadcrumbs>
				{pathSegments.length === 0 ? (
					<Typography variant="subbody1_medium" color="#4B2C20">
						{BREADCRUMB.DASHBOARD.INDEX}
					</Typography>
				) : (
					pathSegments.map((segment, index) => {
						const breadcrumbKey = segment.toUpperCase() as BreadcrumbKeys;
						const breadcrumbLabel = BREADCRUMB[breadcrumbKey]?.INDEX || segment;
						const isLast = index === pathSegments.length - 1;

						return isLast ? (
							<Typography key={index} variant="subbody1_medium" color="#4B2C20">
								{breadcrumbLabel}
							</Typography>
						) : (
							<MuiLink
								component={Link}
								key={index}
								to={`/${pathSegments.slice(0, index + 1).join('/')}`}
								variant="subbody1_medium"
								color="inherit"
								underline="none"
							>
								{breadcrumbLabel}
							</MuiLink>
						);
					})
				)}
			</Breadcrumbs>
		</Box>
	);
};

export default Breadcrumb;
