import { useState } from 'react'
import axios from 'axios'
import Definitions from './components/definitions'
import NoResults from './components/no-results'
import TopBar from './components/top-bar'
import Word from './components/word'
import { BarLoader } from 'react-spinners'
import './styles/main.scss'
import { SearchIcon } from './components/icons'

const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'

function App() {
	const [theme, setTheme] = useState(THEME_LIGHT)
	const [input, setInput] = useState('')
	const [searching, toggleSearching] = useState(false)
	const [results, setResults] = useState(null)
	const [error, setError] = useState(null)

	const handleInputChange = (event) => {
		const { value } = event.target
		setInput(value)
	}

	const handleSearchClick = async () => {
		try {
			const response = await searchWordDefinition(input)
			setResults(response)
		} catch (error) {
			console.dir(error)
		}
	}

	const handleSearchKeyDown = async (event) => {
		if (event.key === 'Enter') {
			try {
				const response = await searchWordDefinition(input)
				setResults(response)
			} catch (error) {
				console.dir(error)
			}
		}
	}

	const handleSynonymClick = async (synonym) => {
		try {
			setInput(synonym)
			const response = await searchWordDefinition(synonym)
			setResults(response)
		} catch (error) {
			console.dir(error)
		}
	}

	const handleThemeChange = (event) => {
		const { checked } = event.target
		setTheme(checked ? THEME_DARK : THEME_LIGHT)
	}

	const searchWordDefinition = async (word) => {
		setError(null)
		toggleSearching(true)
		try {
			const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			toggleSearching(false)
			return response.data
		} catch (error) {
			const { status, data } = error.response
			toggleSearching(false)
			if (status === 404) return null
			if (status === 500) {
				setError(data)
				return null
			}
		}
	}

	const containerStyle = {
		fontFamily: 'Inter',
		backgroundColor: theme === THEME_LIGHT ? '#ffffff' : '#050505',
		color: theme === THEME_LIGHT ? '#757575' : '#ffffff',
	}
	const inputStyle = {
		backgroundColor: theme === THEME_LIGHT ? '#e9e9e9' : '#1F1F1F',
	}

	const hasResults = results && results.length > 0
	const noResults = results && results.length === 0

	return (
		<div className='container' style={containerStyle}>
			<div className='app-wrapper'>
				<TopBar theme={theme} handleThemeChange={handleThemeChange} />
				<div className='search-bar'>
					<input
						onChange={handleInputChange}
						onKeyDown={handleSearchKeyDown}
						value={input}
						className='search-bar__input'
						type='text'
						placeholder='Search for any word...'
						style={inputStyle}
					/>
					<button onClick={handleSearchClick} className='search-bar__button' style={inputStyle}>
						<SearchIcon />
					</button>
				</div>
				<BarLoader loading={searching} width='100%' color='#e9e9e9' />
				{hasResults && (
					<>
						<Word results={results} />
						<Definitions results={results} handleSynonymClick={handleSynonymClick} />
					</>
				)}
				{noResults && <NoResults />}
				{error && (
					<div className='error-message'>
						<h2>{error.title}</h2>
						<p>{error.message}</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default App
