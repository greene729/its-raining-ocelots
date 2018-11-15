import React from 'react'

const Header = ({ writeCity, updateCity }) => {

	return (
		<header>
			<h1>weather</h1>
	      	<label><input type="text" id="city" onChange={writeCity} /></label>
	      	<button onClick={updateCity}>Search</button>
    	</header>
	)
}

export default Header