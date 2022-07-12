import React, { useState } from 'react';
import data from './data';
import Person from './Person';

const App = () => {

	const [people, setPeople] = useState(data)

	return (
		<main>
			<section className='container'>
				<h3>{people.length} cumpleaños</h3>
				<Person people={people} />
				<button onClick={() => setPeople([])}>Eliminar todos</button>
			</section>
		</main>
	);
}

export default App;
