export const LogoIcon = () => (
	<svg
		width='4rem'
		strokeWidth='1.5'
		height='4rem'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		color='#757575'>
		<path
			d='M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114M6 17h14M6 21h14'
			stroke='#757575'
			strokeWidth='1.5'
			strokeLinecap='round'></path>
		<path d='M6 21a2 2 0 110-4' stroke='#757575' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'></path>
		<path d='M9 7h6' stroke='#757575' strokeWidth='1.5' strokeLinecap='round'></path>
	</svg>
)

export const DarkModeIcon = ({ theme }) => (
	<svg
		width='24px'
		height='24px'
		strokeWidth='1.5'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		color={theme === 'light' ? '#757575' : '#a445ed'}>
		<path
			d='M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z'
			stroke={theme === 'light' ? '#757575' : '#a445ed'}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'></path>
	</svg>
)

export const SearchIcon = () => (
	<svg
		width='2rem'
		height='2rem'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		color='#a445ed'>
		<path
			d='M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z'
			stroke='#a445ed'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'></path>
	</svg>
)

export const PlayIcon = () => (
	<svg
		width='3.5rem'
		height='3.5rem'
		strokeWidth='0'
		viewBox='0 0 24 24'
		fill='#a445ed'
		xmlns='http://www.w3.org/2000/svg'
		color='#000000'>
		<path
			d='M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z'
			stroke='#000000'
			strokeWidth='0'
			strokeLinecap='round'
			strokeLinejoin='round'></path>
	</svg>
)
