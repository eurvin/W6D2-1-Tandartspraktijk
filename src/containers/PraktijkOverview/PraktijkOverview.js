import React, { Component } from 'react';
import Axios from '../../axios';
import ViewState from '../../components/ViewState/ViewState';
//import AddToStateForm from '../../components/UI/AddToStateForm/AddToStateForm';
const uuid = require('uuid/v4');

class PraktijkOverview extends Component {
	state = {};

	getPraktijk = () => {
		Axios.firebase.get('tandartspraktijk.json').then((res) => {
			const newState = Object.values(res.data);
			this.setState(newState);
		});
	};

	addToFirebase = (obj) => {
		Axios.firebase.post('tandartspraktijk.json', obj).then((res) => {
			console.log(res.name);
		});
	};

	addToState = (event) => {
		let obj = {};
		if (event.target.role.value === 'afspraak') {
			obj = {
				tandarts: event.target.tandarts.value,
				assistent: event.target.assistent.value,
				patient: event.target.patient.value,
				behandeling: event.target.behandeling.value,
				id: uuid(),
				datum: null,
			};
		} else {
			obj = {
				role: event.target.role.value,
				id: uuid(),
				name: event.target.name.value,
				surname: event.target.surname.value,
				email: event.target.email.value,
				phone: event.target.phone.value,
				isHealthy: true,
			};
		}
		event.preventDefault();
		this.setState(Object.values(this.state).concat(obj));
		this.addToFirebase(obj);
	};

	filterForm = () => {
		const tandartsen = Object.values(this.state).filter(
			(tandarts) => tandarts.role === 'tandarts'
		);
		const assistenten = Object.values(this.state).filter(
			(assistent) => assistent.role === 'assistent'
		);
		const patienten = Object.values(this.state).filter(
			(patient) => patient.role === 'patient'
		);
		return { tandartsen, assistenten, patienten };
	};

	filterState = (filter) => {
		const filteredObjects = Object.values(this.state).filter(
			(obj) => obj.role === filter
		);
		return filteredObjects;
	};

	isHealthyHandler = (id) => {
		const newState = Object.values(this.state).forEach((obj) => {
			if (obj.id === id) {
				obj.isHealthy = !obj.isHealthy;
			} else {
				return obj;
			}
		});
		this.setState(newState);
		return this.state;
	};

	componentDidMount() {
		this.getPraktijk();
	}
	// <AddToStateForm role='tandarts' clicked={this.addToState} />
	// <AddToStateForm role='assistent' clicked={this.addToState} />
	// <AddToStateForm role='patient' clicked={this.addToState} />
	// 	<AddToStateForm
	// 	role='afspraak'
	// 	clicked={this.addToState}
	// 	persons={this.filterState()}
	// />
	render() {
		const filter = this.props.filter;
		console.log(this.isHealthyHandler('fbf8e917-6ef4-4c61-9226-fbaf96efb08b'));

		//console.log(this.filterState(filter));
		return (
			<>
				<div>{this.props.children}</div>
			</>
		);
	}
}

export default PraktijkOverview;
