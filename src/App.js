import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {

	constructor(){
		super()
		this.state = {
			cityFieldValue: 'Reamstown, PA',
			city: 'Reamstown, PA',
			coord: '40,-83'
		}
	}

	updateCityAndFetch = (city) => {
		this.fetchACoordinate(this.fetchACity(city))
		return (city)
	}
	writeCity = (event) => {
		this.setState({cityFieldValue: event.target.value})
	}

	updateCity = () => {
		this.setState({city: this.updateCityAndFetch(this.state.cityFieldValue)})
	}

	fetchACity(city) {
		// const key = 'rjLXBlVWGsiGJ33H9kpLx4EoTWHqspy2'
		fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=rjLXBlVWGsiGJ33H9kpLx4EoTWHqspy2&location=${city}`).then(res=>res.json())
		.then(data => {
			const lat = data.results[0].locations[0].latLng.lat
			const lng = data.results[0].locations[0].latLng.lng
			const fetchCoord = (`${lat},${lng}`)
			this.setState({coord: fetchCoord})
			console.log(this.state.coord)
		})
	}

	fetchACoordinate () {
		fetch(`https://api.weather.gov/points/${this.state.coord}/forecast`)
		.then(res => res.json())
		.then(data => {this.setState({shortForecast: data.properties.periods[0].shortForecast})})
		console.log(this.state.shortForecast)
	}

	render() {
		return (
			<div className="App">
				<Header writeCity={this.writeCity} updateCity={this.updateCity}/>
				<Main city={this.state.city} />
			</div>
		)
	}
}

export default App;
