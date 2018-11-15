import React from 'react'

const Header = ({ writeCity, updateCity }) => {

	return (
		<header>
			<h1>weather</h1>
	      	<div>
	      		<label><input type="text" id="city" onChange={writeCity} /></label>
	      		<button onClick={updateCity}>Search</button>
	      	</div>
    	</header>
	)
}

export default Header