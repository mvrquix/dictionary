import { useRef } from 'react'
import { PlayIcon } from './icons'

const Word = ({ results }) => {
	const { word, phonetic, phonetics } = results[0]
	const audioRef = useRef(null)
	const phoneticAudio = phonetics[0]

	const handlePhoneticPlayClick = () => {
		audioRef.current.play()
	}

	return (
		<div className='word-container'>
			<div className='word'>
				<h1>{word}</h1>
				<span className='word__pronunciation'>{phonetic}</span>
			</div>
			<button onClick={handlePhoneticPlayClick} className='pronunciation-button' type='button'>
				<PlayIcon />
			</button>
			<audio ref={audioRef} src={phoneticAudio.audio}></audio>
		</div>
	)
}

export default Word
