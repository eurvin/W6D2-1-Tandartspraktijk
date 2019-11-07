import React from 'react';
import './App.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import PraktijkOverview from './containers/PraktijkOverview/PraktijkOverview';
import ViewState from './components/ViewState/ViewState';

function App() {
	return (
		<>
			<Router>
				<Layout>
					<Navigation>
						<Link to='/'>Home</Link>
						<Link to='/tandartsen'>Tandartsen</Link>
						<Link to='/assistenten'>Assistenten</Link>
						<Link to='/patienten'>Patienten</Link>
					</Navigation>

					<Switch>
						<Route
							exact
							path='/tandartsen'
							render={(props) => (
								<PraktijkOverview {...props} filter={'tandarts'}>
									<ViewState />
								</PraktijkOverview>
							)}
						/>
						<Route
							exact
							path='/assistenten'
							render={(props) => (
								<PraktijkOverview {...props} filter={'assistent'} />
							)}
						/>
						<Route
							exact
							path='/patienten'
							render={(props) => (
								<PraktijkOverview {...props} filter={'patient'} />
							)}
						/>
						<Route
							exact
							path='/'
							render={(props) => (
								<PraktijkOverview {...props} filter={'home'} />
							)}
						/>
					</Switch>
				</Layout>
			</Router>
		</>
	);
}

export default App;
