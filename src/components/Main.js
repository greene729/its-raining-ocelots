import React from 'react'
import { Component } from 'react'
import Ghost from './rain-graphics/Ghost'
import Tiger from './rain-graphics/Tiger'
import Bison from './rain-graphics/Bison'
import Snake from './rain-graphics/Snake'


class Main extends Component {


	render (){

	let kindOfRain = 'nothing'
	let rainGraphic
	if (this.props.detailedForecast.toLowerCase().includes('storm')){
		kindOfRain = 'tigers'
		rainGraphic = <Tiger />
	} else if (this.props.detailedForecast.toLowerCase().includes('snow')){
		kindOfRain = 'bison'
		rainGraphic = <Bison />
	} else if (this.props.detailedForecast.toLowerCase().includes('rain')){
		kindOfRain = 'snakes'
		rainGraphic = <Snake />
	}  else if (this.props.detailedForecast.toLowerCase().includes('cloud')){
		kindOfRain = 'ghosts'
		rainGraphic = <Ghost />
	} else if (this.props.detailedForecast.toLowerCase().includes('overcast')){
		kindOfRain = 'ghouls'
		rainGraphic = <Ghost />
	} else if (this.props.detailedForecast.toLowerCase().includes('fog')){
		kindOfRain = 'ghouls'
		rainGraphic = <Ghost />
	} else if (this.props.detailedForecast.toLowerCase().includes('haze')){
		kindOfRain = 'ghosts'
		rainGraphic = <Ghost />
	} else {
		kindOfRain = 'nothing'
	}

		return(
			<main>
			<section className="information">
				<h2>{this.props.city}</h2>
				<h3>It&#8217;s raining fucking {kindOfRain}</h3>
				<p>{this.props.shortForecast}</p>
			</section>
			{rainGraphic}
			</main>
			)
	}
}

export default Main