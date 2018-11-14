import React from 'react'

const Header = ({ setCity, city }) => {
	return (
		<header>
			<h1>weather</h1>
	      	<label><input type="text" id="city" onChange={() => setCity(value)} /></label>
	      	<button>Search</button>
    	</header>
	)
}

export default Header