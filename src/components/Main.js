import React from 'react'
import { Component } from 'react'


class Main extends Component {


	render (){

	let kindOfRain = 'nothing'
	if (this.props.detailedForecast.includes('storm')){
		kindOfRain = 'tigers'
	} else if (this.props.detailedForecast.includes('snow')){
		kindOfRain = 'bison'
	} else if (this.props.detailedForecast.includes('rain')){
		kindOfRain = 'snakes'
	} else if (this.props.detailedForecast.includes('sunny')){
		kindOfRain = 'nothing'
	} else if (this.props.detailedForecast.includes('cloud')){
		kindOfRain = 'ghosts'
	} else if (this.props.detailedForecast.includes('overcast')){
		kindOfRain = 'ghouls'
	}

		return(
			<main>
			<h2>{this.props.city}</h2>
			<h2>{this.props.shortForecast}</h2>
			<p>It's raining fucking {kindOfRain}</p>
			</main>
			)
	}
}

export default Main