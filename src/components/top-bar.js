import { DarkModeIcon, LogoIcon } from './icons'

const TopBar = ({ theme, handleThemeChange }) => {
	return (
		<div className='top-bar'>
			<div className='top-bar__logo'>
				<span className='icon'>
					<LogoIcon />
				</span>
			</div>
			<div className='top-bar__options'>
				<label className='top-bar__options-switch'>
					<input onChange={handleThemeChange} type='checkbox' />
					<span className='slider round'></span>
				</label>
				<span className='top-bar__options-theme-icon'>
					<DarkModeIcon theme={theme} />
				</span>
			</div>
		</div>
	)
}

export default TopBar
