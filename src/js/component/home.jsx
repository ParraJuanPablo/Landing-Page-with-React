import React from "react";
import PropType from "prop-types";

//include images into your bundle
import foto from "../../img/our-office-8.jpg";

//create your first component

const jumbotronStyles = {
	background: "#eaecef"
};
const h1Style = {
	fontWeight: "400"
};

const NavBar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
			<div className="mx-5">
				<a className="navbar-brand" href="#">Start Bootstrap</a>
			</div>
			<div className="mx-5">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const Jumbotron = () => {
	return(
		<div style={jumbotronStyles} className="jumbotron  m-5 px-4 py-5">
			<h1 style={h1Style} className="display-4">A Warm Welcome!</h1>
			<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus eros vitae maximus suscipit.</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to Action!
			</a>
		</div>
	);
};
const Card = (props) => {
	return(
		<div className="card m-2 w-25">
			<img className="card-img-top" src={foto} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.text}</p>
			</div>
			<div className="card-footer d-flex justify-content-center">
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	text: PropType.string,
};
const Cards = () => {
	return (
		<div className="d-flex justify-content-between m-5">
			<Card text="Vestibulum tempus eros vitae maximus suscipit. Curabitur pellentesque, libero vel pretium sodales, elit nulla mollis nunc, nec ornare neque libero et justo." />
			<Card text="Vestibulum blandit arcu a quam congue pulvinar. Etiam fermentum tellus nisl, consequat sodales velit porta sed." />
			<Card text="Vivamus volutpat eros at venenatis facilisis. Cras egestas sed lacus vel finibus. Morbi semper tellus id ante dignissim suscipit." />
			<Card text="Integer urna lacus, maximus sed purus at, venenatis ullamcorper libero. Pellentesque gravida, nulla vehicula efficitur ullamcorper, tellus nisi rutrum est, quis facilisis dolor purus at felis." />
		</div>
	);
};

const Container = () => {
	return[
		<Jumbotron />,
		<Cards />
	];
};

const Footer = () => {
	return(
		<footer className="bg-dark text-center text-white">
			<div className="text-center p-3">
    			Copyright © Your Company 2023
  			</div>
		</footer>
	);
};
const Home = () => {
	return [
		<NavBar />,
		<Container />,
		<Footer />
	];
};

export default  Home;
