import React from 'react';
const uuid = require('uuid/v4');
//import classes from './Navigation.css';

const navigation = (props) => (
	<>
		<nav>
			<ul>
				{props.children.map((child) => (
					<li key={uuid()}>{child}</li>
				))}
			</ul>
		</nav>
	</>
);

export default navigation;
