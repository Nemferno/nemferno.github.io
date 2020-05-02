import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, Row, Container, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isEmailCopied: false,
		};

		this.refList = {
			home: React.createRef(),
			intro: React.createRef(),
			academics: React.createRef(),
			volunteer: React.createRef(),
			development: React.createRef(),
			contact: React.createRef()
		};
		this.timeouts = [];

		this.scrollTo = this.scrollTo.bind(this);
	}

	componentWillUnmount() {
		this.timeouts.forEach((timeout) => {
			clearTimeout(timeout);
		});
	}

	scrollTo(name) {
		window.scrollTo({
			behavior: "smooth",
			top: name !== 'home' ? this.refList[name].current.offsetTop : 0
		});
	}

	render() {
		const { isEmailCopied } = this.state;

		return (
			<Container fluid>
				<Navbar fixed="top" expand="lg" bg="dark" variant="dark">
					<Navbar.Toggle style={{ margin: 'auto' }} />
					<Navbar.Collapse className="justify-content-end">
						<Nav>
							<Nav.Link onClick={() => this.scrollTo('home')}>Home</Nav.Link>
							<Nav.Link onClick={() => this.scrollTo('intro')}>Introduction</Nav.Link>
							<Nav.Link onClick={() => this.scrollTo('academics')}>Academics</Nav.Link>
							<Nav.Link onClick={() => this.scrollTo('volunteer')}>Volunteer</Nav.Link>
							<Nav.Link onClick={() => this.scrollTo('development')}>Experiences</Nav.Link>
							<Nav.Link onClick={() => this.scrollTo('contact')}>Contact Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Row ref={this.refList['home']}>
					<img className="image" src="/image/home-background.jpg" />
					<Row className="overlay center">
						<h1 className="inverted text-center" style={{ zIndex: 1 }}>
							Welcome to my World
						</h1>
					</Row>
				</Row>
				<Row ref={this.refList['intro']}>
					<img className="image" src="/image/intro-background.jpg" />
					<Row className="overlay overlay-two center">
						<h1 className="inverted text-center">
							My name is Jasper Bae
						</h1>
						<h3 className="inverted text-center">
							Learn. Apply. Share
						</h3>
					</Row>
				</Row>
				<Row className="padding" ref={this.refList['academics']}>
					<h3 className="section-title">
						Academic Experience
					</h3>
					<div>
						<p className="overline">
							September 2016 - May 2020
						</p>
						<h4>
							Rutgers University Business School - New Brunswick
						</h4>
						<h5>
							B.S. in Computer Science, Finance
						</h5>
					</div>
				</Row>
				<hr />
				<Row className="padding" ref={this.refList['volunteer']}>
					<h3 className="section-title">
						Volunteer Experience
					</h3>
					<div>
						<p className="overline">
							September 2017 - May 2020
						</p>
						<h4>
							Rutgers University Habitat for Humanity
						</h4>
						<h5>
							President
						</h5>
						<ul>
							<li>
								<p>
									Led 15 executive members to reorganize the organization, to lay down a new foundation for the next e-board, and to handle COVID-19 effects.
								</p>
							</li>
							<li>
								<p>
									Established positive relationships with our faculty advisor and parent affiliate, Habitat for Humanity of Greater Plainfield & Middlesex County, by having effective communication, understanding, and transparency.
								</p>
							</li>
							<li>
								<p>
									Fundraised effectively $7,000+ to be donated to our parent affiliate in its next housing project.
								</p>
							</li>
						</ul>
						<h5>
							Webmaster
						</h5>
						<ul>
							<li>
								<p>
									Developed the website for the organization, in 2017, by handling domain registration and payments, WordPress development, and new modifications to the website to enhance user experience.
								</p>
							</li>
							<li>
								<p>
									Utilized Google Sheets API and Google Apps Script to develop a REST API for the website to show a Javascript scoreboard for a large event.
								</p>
							</li>
							<li>
								<p>
									Simplified website design to reduce the requirement of web development knowledge.
								</p>
							</li>
						</ul>
					</div>
				</Row>
				<hr />
				<Row className="padding" ref={this.refList['development']}>
					<h3 className="section-title">
						Development Experience
					</h3>
					<div style={{ marginBottom: 50 }}>
						<p className="overline">
							<b>Now</b>
						</p>
						<h4>
							<a href="">Devotion Time</a>
						</h4>
						<p>
							Did you miss a Devotion Time with your brothers or sisters? Is it hard to communicate with each other to share your perspective
							on the Scripture and slice a portion of your time devoted to God? This mobile application handles this by digitalizing devotion time 
							and promoting fellowship among brothers and sisters in Christ.
						</p>
					</div>
					<div style={{ marginBottom: 50 }}>
						<p className="overline">
							2019
						</p>
						<h4>
							UniNav: A Rutgers Bus App
						</h4>
						<p className="overline">
							<a style={{ marginRight: 15 }} href="https://github.com/Nemferno/rutgersbusapp-backend">Backend</a>
							<a href="https://github.com/Nemferno/rutgersbusapp-front">Frontend</a>
						</p>
						<p>
							Tired of the miscommunication and doubts of the Rutgers Official App and NextBus system? Fear not, this mobile app can display 
							bus routes in real time, notify you before the bus arrives, and alerts when buses have taken breaks.
						</p>
					</div>
					<div style={{ marginBottom: 50 }}>
						<p className="overline">
							2018
						</p>
						<h4>
							<a href="https://github.com/Nemferno/Course-Sniper-Bot">Rutgers Course Sniper RegBot</a>
						</h4>
						<p>
							Simple bot that can register a student for him/her based on a query of a selection of classes. It can course snipe anyone who is 
							saving for another student or during any time of day, locking in your query for next semester.
						</p>
					</div>
					<div style={{ marginBottom: 50 }}>
						<p className="overline">
							2015
						</p>
						<h4>
							<a href="https://github.com/Nemferno/Liberandum">Liberandum</a>
						</h4>
						<p>
							An android mobile game that revolves around multi-tasking.
						</p>
					</div>
					<div style={{ marginBottom: 50 }}>
						<p className="overline">
							2015
						</p>
						<h4>
							<a href="https://github.com/Nemferno/USlickAI2D">USlickAI2d</a>
						</h4>
						<p>
							A Java game UI library that creates and customizes user interfaces without the need for XML configuration files. This 
							technique allows developers to programmatically create user interfaces.
						</p>
					</div>
				</Row>
				<hr />
				<div className="padding" ref={this.refList['contact']}>
					<h3 className="section-title text-center">
						Contact Me
					</h3>
					<div>
						<Button variant="primary" size="lg" href="https://linkedin.com/in/jasperbae" block>
							LINKEDIN
						</Button>
						<CopyToClipboard
							text={'jasperbae@gmail.com'}
							onCopy={() => {
								this.setState({ isEmailCopied: true });
								this.timeouts.push(setTimeout(() => {
									this.setState({ isEmailCopied: false });
								}, 5000));
							}}>
							<Button variant="primary" size="lg" block>
								{ isEmailCopied ? 'Copied Email!' : 'EMAIL' }
							</Button>
						</CopyToClipboard>
						<Button variant="primary" size="lg" href="https://linkedin.com/in/bae.jasper" block>
							INSTAGRAM
						</Button>
					</div>
				</div>
				<hr />
				<div className="padding">
					<p className="outline text-center">
						Web Version 1.0
					</p>
					<p className="outline text-center">
						(c) 2020 Jasper Bae. All Rights Reserved.
					</p>
				</div>
			</Container>
		);
	}
}

export default App;
