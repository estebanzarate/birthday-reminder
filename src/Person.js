import React from 'react';

const Person = ({ people }) => {

	return (
		<>
			{people.map(person => {
				const { id, name, age, image } = person;
				return (
					<article key={id} className='person'>
						<img src={image} alt={name} />
						<div>
							<h4>{name}</h4>
							<p>{age} {age === 1 ? 'año' : 'años'}</p>
						</div>
					</article>
				)
			})}
		</>
	);
};

export default Person;