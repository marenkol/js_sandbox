import React from 'react';
import ReactDOM from 'react-dom';


/* Task 1 */

const Css =  (backgroundColor = 'fff', borederRadius = 0) => {
	let styles = {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '150px',
		width: '150px',
		borderRadius: `${borederRadius}`,
		backgroundColor: `${backgroundColor}`,
		margin: '10px'
	}

	return styles;
}

function Circle ({backgroundColor, borederRadius, children}){
	const addition =
	children
	? <div>{children}</div>
	: null

	return (
		<div style={ Css(backgroundColor, borederRadius) }>
		{ addition }
		</div>
		)
}

function Box ({backgroundColor, borederRadius, children}){
	const addition =
	children
	? <div>{children}</div>
	: null

	return (
		<div style={ Css(backgroundColor, borederRadius) }>
		{ addition }
		</div>
		)
}

ReactDOM.render((
<div>
	<Circle backgroundColor="royalblue" borederRadius="50%">
		Hello
	</Circle>
	<Box backgroundColor="lightseagreen">
		Hello
	</Box>
</div>
), document.getElementById('root'));




/* Task 2 */
function Address ({ country, city, street, location }){

	const wrapStyles = {
		maxWidth: '980px',
		margin: '0 auto'
	}

	const elStyles = {
		margin: '10px',
		fontSize: '20px',
		fontFamily: 'sans-serif'
	}

	return (
		<div className="container" style={wrapStyles}>
			<div style={elStyles}>
				Country: { country }
			</div>

			<div style={elStyles}>
				City: { city }
			</div>

			<div style={elStyles}>
				Street: { street }
			</div>

			<div style={elStyles}>
				Location: lat { location.lat }, lng { location.lng }
			</div>

			<div style={elStyles}>
				<a href={`https://www.google.com/maps/@${location.lat},${location.lng},8.00z`}>Map Link</a>
			</div>

		</div>
	)
}

ReactDOM.render((
	<div>
		<Address
			country="Ukraine"
			city="Lviv"
			street="Shevchenko"
			location={{ lat: 49.842957, lng:24.031111 }}
		/>
	</div>
), document.getElementById('address'));
