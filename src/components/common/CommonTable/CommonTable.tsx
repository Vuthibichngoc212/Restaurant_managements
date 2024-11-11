/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Box,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';
import { useState } from 'react';
import theme from '@/themes/theme.d';
import noData from '@/assets/images/noData.svg';

interface DataTableProps {
	columns?: any;
	data: any;
	options?: any;
	customTableStyles?: any;
	isLoading?: boolean;
	total?: number;
}

const TableCommon: React.FC<DataTableProps> = ({
	data = [],
	columns,
	options,
	customTableStyles,
	isLoading = false
}) => {
	const [show, setShow] = useState(false);
	const [render, setRender] = useState(false);

	return (
		<Box
			sx={{
				'&.MuiBox-root': {
					height: '100%',
					width: '100%',
					boxSizing: 'border-box',
					...customTableStyles
				}
			}}
		>
			{/* TABLE */}
			<TableContainer
				sx={{
					'&.MuiTableContainer-root': {
						borderRadius: '0.8rem',
						overflowY: 'auto',
						maxHeight: '100%',
						// pr: '1rem',
						'&::-webkit-scrollbar': {
							width: '6px',
							height: '6px'
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: theme.palette.neutral.lightSilver,
							borderRadius: '10rem'
						},
						'&::-webkit-scrollbar-thumb:hover': {
							backgroundColor: theme.palette.neutral.coolGray
						},
						'& .MuiTable-root': {
							minWidth: 1,
							'& .MuiTableHead-root': {
								'& .MuiTableRow-root': {
									'& .MuiTableCell-root': {
										padding: '1.4rem 1.2rem',
										border: 'none',
										backgroundColor: theme.palette.primary.babyBlue
									},
									'& .MuiTableCell-root:first-of-type': {
										borderRadius: '0.8rem 0 0 0.8rem'
									},
									'& .MuiTableCell-root:last-child': {
										borderRadius: '0 0.8rem 0.8rem 0'
									}
								}
							},
							'& .MuiTableBody-root': {
								'& .MuiTableRow-root': {
									'&:hover': {
										backgroundColor: data.length > 0 ? '#F0F7FE !important' : ''
									},
									'& .MuiTableCell-root': {
										padding: !isLoading ? '1.2rem' : '1.2rem 1.2rem 1.2rem 0',
										border: 'none'
									},
									'&:nth-of-type(even)': {
										backgroundColor:
											!isLoading && !show ? theme.palette.neutral.main : 'transparent'
									},
									'&:nth-of-type(odd)': {
										backgroundColor: !isLoading && show ? theme.palette.neutral.main : 'transparent'
									},
									'& .MuiTableCell-root:first-of-type': {
										borderRadius: '0.8rem 0 0 0.8rem'
									},
									'& .MuiTableCell-root:last-child': {
										borderRadius: '0 0.8rem 0.8rem 0',
										paddingRight: !isLoading ? '1.2rem' : '0'
									}
								}
							}
						}
					}
				}}
			>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns
								.filter((col: any) => col)
								.map((col: any, index: number) => {
									return (
										<TableCell
											key={index}
											align={col.align}
											sx={{
												'&.MuiTableCell-root': {
													minWidth: col.width,
													maxWidth: col.width,
													wordBreak: 'break-word'
												}
											}}
										>
											{typeof col.title === 'string' ? (
												<Typography variant="body2_semibold">{col.title}</Typography>
											) : (
												col.title()
											)}
										</TableCell>
									);
								})}
							{/* {options && options.checkList && options.checkList.isShow && (
								<TableCell
									sx={{
										'&.MuiTableCell-root': {
											textAlign: 'center',
											minWidth: 70,
											maxWidth: 70
										}
									}}
								>
									<Typography variant="body2_semibold">Chọn</Typography>
								</TableCell>
							)} */}
						</TableRow>
					</TableHead>
					<TableBody>
						{options && options.filter && options.filter.isShow && render && (
							<TableRow
								sx={{
									opacity: show ? 1 : 0,
									transform: show ? 'translateY(0)' : 'translateY(-20px)',
									transition: 'opacity 0.1s  , transform 0.1s ',

									'@keyframes slideDown': {
										from: {
											opacity: 0,
											transform: 'translateY(-20px)'
										},
										to: {
											opacity: 1,
											transform: 'translateY(0)'
										}
									}
								}}
							>
								{columns
									.filter((e: any) => e)
									.map((column: { name: any }) => {
										const findFilterOption = options.filter.filterOptions.find(
											(e: { name: any }) => e.name === column.name
										);
										if (!findFilterOption)
											return (
												<TableCell
													key={column.name}
													sx={{
														backgroundColor: theme.palette.primary.lightSkyBlue,
														'&.MuiTableCell-root': {
															padding: '1rem !important'
														},
														'& .MuiInput-underline': {
															fontSize: '1.4rem',
															'& .MuiInputBase-input ': {
																pb: '0.1rem'
															},
															'&::before': {
																borderBottomColor: theme.palette.neutral.lightSilver
															}
														}
													}}
												></TableCell>
											);
										return (
											<TableCell
												key={column.name}
												sx={{
													backgroundColor: theme.palette.primary.lightSkyBlue,
													'&.MuiTableCell-root': {
														padding: '1rem !important'
													},
													'& .MuiInput-underline': {
														fontSize: '1.4rem',
														'& .MuiInputBase-input ': {
															pb: '0.1rem'
														},
														'&::before': {
															borderBottomColor: theme.palette.neutral.lightSilver
														}
													}
												}}
											>
												{findFilterOption.component}
											</TableCell>
										);
									})}
							</TableRow>
						)}
						{isLoading ? (
							new Array(20).fill(0).map((_, index) => (
								<TableRow key={index}>
									{new Array(columns.filter((e: any) => e).length).fill(0).map((_, index) => (
										<TableCell key={index}>
											<Skeleton variant="rounded" width="100%" animation="wave" height={36} />
										</TableCell>
									))}
								</TableRow>
							))
						) : data.length > 0 ? (
							data.map((row: any, index: number) => {
								return (
									<TableRow key={index}>
										{columns
											.filter((e: any) => e)
											.map((cell: any) => {
												return (
													<TableCell
														key={cell.name}
														sx={{
															'&.MuiTableCell-root': {
																textAlign:
																	cell.align === 'right'
																		? 'end'
																		: cell.align === 'left'
																			? 'start'
																			: 'center',
																minWidth: cell.width,
																maxWidth: cell.width,
																wordBreak: 'break-word'
															}
														}}
													>
														{cell.render ? (
															cell.render(row, index)
														) : (
															<Typography
																variant="body2_regular"
																sx={{
																	color: row[cell.name] ? 'black' : theme.palette.neutral.coolGray
																}}
															>
																{row[cell.name] ? row[cell.name] : 'Không có dữ liệu'}
															</Typography>
														)}
													</TableCell>
												);
											})}
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={10} sx={{ height: '40vh' }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											height: '100%'
										}}
									>
										<img src={noData} alt="no data" />
									</Box>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default TableCommon;
