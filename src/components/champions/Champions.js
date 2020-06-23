import React, { Component } from 'react';
import './Champions.css';
import {Tabs, Tab, Row, Card, Button, Col, Nav, Navbar, Form, Jumbotron, Container} from 'react-bootstrap';
import Kinuta from './Kinuta.png';
import Kito from './Kito.png';
import Arwen from './Arwen.png';
import Ozax from './Ozax.png';
import JJ from './JJ.png';
import Iris from './Iris.png';
import Roku from './Roku.png';
import Hideyoshi from './Hideyoshi.png';
import logo from '../home/logo.png';

class Champion extends Component{

    /*getChampion = async (props) => {
        await fetch(`http://localhost:3000/tickets/Hotel`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({HotelList:json}); 
            })
            .catch(error => {
                console.log(error);
            })
     }*/

    render(){

        return(
            <div id="champions" style={{backgroundColor:'#0F2540'}}>
				<Navbar bg="dark" variant="dark"  sticky="top">
                    <Navbar.Brand><img alt={logo} src={logo} style={{height: '50px', width: '230px'}}></img></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="champion">Champions</Nav.Link>
                    </Nav>
                    <Form inline>
					<Button variant="outline-info" href="https://drive.google.com/open?id=10vrKI9b-LqfArc4pdZBJ74tJNza9pKAp">Download</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outline-info" href="login">Sign in</Button>
                    </Form>
                </Navbar>
				<div class="container p-3 my-3 border" style={{backgroundColor:'white'}}>
				<div id="champions_body" style={{paddingLeft:'0%',paddingRight:'0%'}}>
                <h1 style={{fontFamily: 'Work Sans', fontWeight: 'bold', paddingTop:'5%', paddingLeft:'3%'}}>Choose Your CHAMPION !</h1>
                <hr></hr>
				<Tabs defaultActiveKey="all" id="uncontrolled-tab-example" style={{paddingLeft:'3%', paddingRight:'3%'}}>
					<Tab eventKey="all" title="All">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Kinuta} style={{height: '200px', width: '150px'}}/>
									<Card.Body>
										<Card.Title>Kinuta</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Kito} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Kito</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Arwen} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Arwen</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={JJ} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>JJ</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Roku} style={{height: '200px', width: '150px'}}/>
									<Card.Body>
										<Card.Title>Roku</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Hideyoshi} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Hideyoshi</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Iris} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Iris</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Ozax} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Ozax</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>


					<Tab eventKey="assasin" title="Assassin">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Roku} style={{height: '200px', width: '150px'}}/>
									<Card.Body>
										<Card.Title>Roku</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>


					<Tab eventKey="bruiser" title="Bruiser">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Kito} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Kito</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>


					<Tab eventKey="carry" title="Carry">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Kinuta} style={{height: '200px', width: '150px'}}/>
									<Card.Body>
										<Card.Title>Kinuta</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={JJ} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>JJ</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Hideyoshi} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Hideyoshi</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>

					<Tab eventKey="enchanter" title="Enchanter">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Iris} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Iris</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>

					<Tab eventKey="fighter" title="Fighter">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Kito} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Kito</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>


					<Tab eventKey="mage" title="Mage">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Arwen} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Arwen</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Ozax} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Ozax</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>


					

					<Tab eventKey="support" title="Support">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
						</Row>
					</Tab>


					<Tab eventKey="tank" title="Tank">
						<Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Kito} style={{maxHeight:'200px'}}/>
									<Card.Body>
										<Card.Title>Kito</Card.Title>
										<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Tab>
				</Tabs>
				</div>

				<div>
                    <Jumbotron fluid>
                        <Container>
                            <Row>
                                <Col>
                                    <h5>Features</h5>
                                    <ul class="list-unstyled text-small">
                                        <li><a class="text-muted" href="home">Team feature</a></li>
                                        <li><a class="text-muted" href="home">Stuff for developers</a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h5>Resources</h5>
                                    <ul class="list-unstyled text-small">
                                        <li><a class="text-muted" href="home">Resource</a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h5>About</h5>
                                    <ul class="list-unstyled text-small">
                                        <li><a class="text-muted" href="home">Team</a></li>
                                        <li><a class="text-muted" href="home">Locations</a></li>
                                        <li><a class="text-muted" href="home">Privacy</a></li>
                                        <li><a class="text-muted" href="home">Terms</a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <small class="d-block mb-3 text-muted">&copy; 2019-2020</small>
                                    <i class="fab fa-google-plus-square"></i>
                                    <i class="fab fa-twitter-square" ></i>
                                    <i class="fab fa-linkedin"></i>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </div>
				</div>
			</div>
		);
    }
}
export default Champion;