import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {

	constructor(){
		super()
		this.state = {
			city: 'Reamstown, PA'
		}
	}

	setCity = (city) => {
		this.setState({city})
	}

	render() {
		return (
			<div className="App">
				<Header setCity={this.setCity} city={this.state.city}/>
				<Main />
			</div>
		)
	}
}

export default App;
