import React from 'react'

const Ad = () => {

	function getRandomInt(max) {
 		return Math.floor(Math.random() * Math.floor(max));
	}

	const titlesArray = [
		'Jerry\'s Swift Kick in the Ass',
		'Pruning Shears',
		'Barely Legal Ocelots',
		'Seven Types of Internet Cheese',
		'Risk-Free Dog Cloning!',
		'Lady Stuff',
		'Ranch Dressing Fountain',
		'Animated Cat GIFs'

	]
	const contentArray = [
		'Need a swift kick in the ass? Call Jerry for all your "a swift kick in the ass" needs.',
		'Pruning shears? Pruning shears, pruning shears. Pruning shears!',
		'Need to buy an ocelot semi-legally? We\'ve got you covered!',
		'We have all seven types of cheese on the internet!',
		'We clone you dog risk free trial!',
		'All the best discount lady stuff. Free shipping!',
		'Buy fondue party accessories online',
		'All the animated cat gifs at strong discount price'

	]
	const siteArray = [
		'www.jerryasskicker.com',
		'www.pruningshearspruningshears.com',
		'www.buyocelotsonline.nz',
		'www.whole7.com/offer',
		'www.easyreplacepet.tv',
		'www.myfairpricelady.us',
		'www.ranchdressingfountain.com',
		'www.animateurcatgiffs.gov'

	]

	let index = getRandomInt(8)

	let adTitle = titlesArray[index]
	let adContent = contentArray[index]
	let adSite = siteArray[index]


	return (
		<div className="ad">
			<a href="#">{adTitle}</a>
			<p>{adContent}</p>
			<a href="#" id="green-links">{adSite}</a>
		</div>

	)
}

export default Ad