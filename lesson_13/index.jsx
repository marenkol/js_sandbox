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



/* Task 2 */
function Header ({ links = { home: 'Home' } }){

	const headerStyles = {
		display: 'flex',
		justifyContent: 'center',
		position: 'fixed',
		left: 0,
		top: 0,
		width: '100%',
		backgroundColor: 'lightseagreen',
		textAlign:'center',
		color: '#fff'
	}

	const headerLinkStyles = {
		display: 'flex',
		alignItems: 'center',
		padding: '20px',
		textAlign:'center',
		color: '#fff',
		textDecoration: 'none'
	}

	return (
		<header style={headerStyles}>
			<a href="#" style={headerLinkStyles}>Home</a>
			<a href="#" style={headerLinkStyles}>About</a>
			<a href="#" style={headerLinkStyles}>Footer</a>
		</header>
	)
}

function Main ({ children }){
	return (
		<main className="main">
			{ children }
		</main>
	)
}

function Content ({ children }){
	return (
		<section className="content">
			{ children }
		</section>
	)
}

function Sidebar ({ children }){
	return (
		<aside className="sidebar">
			{ children }
		</aside>
	)
}

function Address ({ country, city, street, location }){

	const elStyles = {
		margin: '10px',
		fontFamily: 'sans-serif'
	}

	if (location) {
		return (
			<div className="address">
				<div style={elStyles}>
					Country: { country }
					<br/>
					City: { city }
					<br/>
					Street: { street }
				</div>

				<div style={elStyles}>
					Location: lat { location.lat }, lng { location.lng }
				</div>

				<div style={elStyles}>
					<a href={`https://www.google.com/maps/@${location.lat},${location.lng},10.00z`}>Map Link</a>
				</div>
			</div>
		)
	} else {
		return (
			<div className="footer-address">
				<div style={elStyles}>
					Country: { country }, City: { city }, Street: { street }
				</div>
			</div>
		)
	}
}

function Footer ({ children }){
	const address = children
	? children
	: null

	const footerStyles = {
		position: 'fixed',
		left: 0,
		bottom: 0,
		right: 0,
		padding: '20px',
		backgroundColor: 'lightseagreen',
		textAlign:'center',
		color: '#fff'
	}

	return (
		<footer style={footerStyles}>
			{ address }
		</footer>
	)
}

ReactDOM.render((
	<div>
		<Header />

		<Main>
			<Content>
				<Circle backgroundColor="royalblue" borederRadius="50%">
					Hello
				</Circle>

				<Box backgroundColor="lightseagreen">
					Hello
				</Box>
			</Content>

			<Sidebar>
				<Address
				country="Ukraine"
				city="Lviv"
				street="Shevchenko"
				location={{ lat: 49.842957, lng: 24.031111 }}
				/>
			</Sidebar>
		</Main>

		<Footer>
			<Address
			country="Ukraine"
			city="Lviv"
			street="Shevchenko"
			/>
		</Footer>
	</div>
), document.getElementById('root'));



