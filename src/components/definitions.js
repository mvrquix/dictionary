const Definitions = ({ results, handleSynonymClick }) => {
	let meanings = []
	results.forEach((result) => {
		meanings = [...meanings, ...result.meanings]
	})
	return (
		<div className='definitions-container'>
			{meanings.map((meaning, index) => {
				const { partOfSpeech, definitions, synonyms } = meaning
				const key = `${partOfSpeech}-${index}`
				return (
					<div key={key} className='definition'>
						<div className='definition__word-type'>
							<h3>{partOfSpeech}</h3>
							<span className='line'></span>
						</div>
						<div className='definition__meaning'>
							<h5>Meaning</h5>
							<ul className='definition__meaning-list'>
								{definitions.map((d, index) => {
									const { definition } = d
									return <li key={`definition-${index}`}>{definition}</li>
								})}
							</ul>
						</div>
						{synonyms.length > 0 && (
							<div className='definition__synonyms'>
								<h5>Synonyms</h5>
								<div className='definition__synonyms-list'>
									{synonyms.map((synonym) => {
										return (
											<a key={synonym} onClick={() => handleSynonymClick(synonym)} href={'#' + synonym}>
												{synonym}
											</a>
										)
									})}
								</div>
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Definitions
