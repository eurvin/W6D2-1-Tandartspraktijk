import React from 'react';

const addToStateForm = (props) => {
	const label = Object.keys(props.persons);
	const roles = Object.values(props.persons);
	const select = roles.map((role, index) => {
		const htmlinput = role.map((person) => (
			<option key={person.id}>
				{person.name} {person.surname}
			</option>
		));
		return (
			<>
				<div>
					<label htmlFor={label[index]}>
						<h4>{label[index]} :</h4>
						<select name={label[index]}>{htmlinput}</select>
					</label>
				</div>
			</>
		);
	});

	const afspraak = (
		<>
			<div>
				<h3> Plan een nieuwe {props.role}:</h3>
				<input
					type='text'
					style={{ display: 'none' }}
					name='role'
					value={props.role}
					readOnly={true}
				/>
			</div>
			{select}
			<div>
				<label htmlFor='tandarts'>
					assistent:
					<select name='tandarts'>
						<option value='R&B'>R&B</option>
					</select>
				</label>
			</div>
			<div>
				<input type='submit' value='Voeg toe' />
			</div>
		</>
	);

	const person = (
		<>
			<div>
				<h3>Voeg een {props.role} toe:</h3>
				<input
					type='text'
					style={{ display: 'none' }}
					name='role'
					value={props.role}
					readOnly={true}
				/>
			</div>
			<div>
				<label htmlFor='name'>
					Voornaam:
					<input type='text' placeholder='Voornaam' name='name' />
				</label>
			</div>
			<div>
				<label htmlFor='surname'>
					Achternaam:
					<input type='text' placeholder='Achternaam' name='surname' />
				</label>
			</div>
			<div>
				<label htmlFor='email'>
					E-mail:
					<input type='text' placeholder='E-mail' name='email' />
				</label>
			</div>
			<div>
				<label htmlFor='phone'>
					Tel:
					<input type='text' placeholder='Telefoonnummer' name='phone' />
				</label>
			</div>
			<div>
				<input type='submit' value='Voeg toe' />
			</div>
		</>
	);

	return (
		<div>
			<form onSubmit={props.clicked}>
				{props.role === 'afspraak' ? afspraak : person}
			</form>
		</div>
	);
};

export default addToStateForm;
