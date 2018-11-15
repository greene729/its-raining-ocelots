import React from 'react'
import { Component } from 'react'


class Main extends Component {
	constructor({ city }) {
		super({ city })
		this.state ={
			shortForecast: ''
		}
	}

	render (){
		return(
			<main>
			<h2>{this.props.city}</h2>
			<article>{this.state.shortForecast}</article>
			<article>little boxes go here</article>
			</main>
			)
	}
}

export default Main