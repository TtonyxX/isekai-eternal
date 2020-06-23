import React, { Component } from 'react';
import './home.css';
import {Form, Row, Col, Button, Navbar, Nav, Jumbotron, Container, Carousel, Card} from 'react-bootstrap';
import YouTube from '@u-wave/react-youtube';
import home_bg from './Home.png';
import logo from './logo.png';
import map1 from './map.png';
import map2 from './map2.png';
import about from './about.png';
import Kinuta from '../champions/Kinuta.png';
import Kito from '../champions/Kito.png';
import Arwen from '../champions/Arwen.png';
import JJ from '../champions/JJ.png';


class Home extends Component{
    
    render(){

        return(
            <div id="home" style={{backgroundColor:'#0F2540'}}>
                <Navbar bg="dark" variant="dark"  sticky="top">
                    <Navbar.Brand><img alt={logo} src={logo} style={{height: '50px', width: '230px'}}></img></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="champion">Champions</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button variant="outline-info" href="https://drive.google.com/open?id=10vrKI9b-LqfArc4pdZBJ74tJNza9pKAp">Download</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="outline-info" href="login">Sign in</Button>
                    </Form>
                </Navbar>

                <Container style={{paddingLeft:'6%', paddingRight:'6%', backgroundColor:'white'}}>
                <div id="home_logo" style={{paddingTop:'3%', paddingBottom: '13%', textAlign: 'center', backgroundImage: `url("${home_bg}")`, width: '100%', margin: '0'}}>
                    
                    
                    <br>
                    </br>
                    <h1 style={{fontFamily: 'Work Sans', fontWeight: 'Semi-bold', color: 'white', borderColor: 'black', border: '1px'}}>Welcome to</h1>
                    <h1 style={{fontSize: '7em', fontFamily: 'Work Sans', fontWeight: 'Semi-bold', color: 'white'}}>Isekai Eternal</h1>
                    <br>
                    </br>
                    <br>
                    </br>
                    <Button variant="warning"  href="register">Sign Up and Play Now</Button>{' '}
                </div>

                <div id="home_about" style={{paddingTop:'3%'}}>
                    <div id='h1' style={{paddingLeft: '5%', paddingRight: '5%'}}>
                        <h1>About the Game</h1>  
                        <hr></hr>
                        <img alt={about} src={about} style={{width: '100%'}}></img>
                    </div>
                </div>

                <div id="video" style={{paddingTop:'3%'}}>
                    <div id='h1' style={{paddingLeft: '5%', paddingRight: '5%'}}>
                        <h1>Video Collection</h1>  
                        <hr></hr>
                        <Row>
                            <Col>
                                <YouTube
                                    video="pOfYkywwP-Y"
                                    
                                />
                            </Col>
                            
                            <Col>
                                <YouTube
                                    video="F02rycYadrQ"
                                    
                                />
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <a href="https://youtu.be/pOfYkywwP-Y" target="_blank" rel="noopener noreferrer" style={{fontSize:'1.5em'}}>05/06/2020</a>
                            </Col>
                            
                            <Col>
                                <a href="https://youtu.be/F02rycYadrQ" target="_blank" rel="noopener noreferrer" style={{fontSize:'1.5em'}}>06/09/2020</a>
                            </Col>
                            
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <YouTube
                                    
                                    video="f4sOM5O-t3c"
                                /> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href="https://youtu.be/f4sOM5O-t3c" target="_blank" rel="noopener noreferrer" style={{fontSize:'1.5em'}}>06/16/2020</a>
                            </Col>
                            
                        </Row>
                    </div>
                </div>

                <div id="home_champion" style={{paddingTop:'3%'}}>
                    <div id='h1' style={{paddingLeft: '5%', paddingRight: '5%'}}>
                        <Row>
                            <Col>
                                <h1>Meet the Champions</h1>
                            </Col>
                            <Col style={{ textAlign: "right", paddingRight: '5%'}}>
                                <Button variant="dark" href="champion">Learn More</Button>
                            </Col>
                        </Row>
                        
                        <hr></hr>
                        <Row style={{paddingTop:'3%', paddingBottom: '3%'}}>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Kinuta} style={{height: '200px', width: '150px'}}/>
									<Card.Body style={{backgroundColor: 'black', color: 'white'}}>
										<Card.Title>Kinuta</Card.Title>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={Kito} style={{maxHeight:'200px'}}/>
									<Card.Body style={{backgroundColor: 'black', color: 'white'}}>
										<Card.Title>Kito</Card.Title>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem'}}>
									<Card.Img variant="top" src={Arwen} style={{maxHeight:'200px'}}/>
									<Card.Body style={{backgroundColor: 'black', color: 'white'}}>
										<Card.Title>Arwen</Card.Title>
									</Card.Body>
								</Card>
							</Col>
							<Col style={{paddingRight: '5%'}}>
								<Card style={{ width: '15rem' }}>
									<Card.Img variant="top" src={JJ} style={{maxHeight:'200px'}}/>
									<Card.Body style={{backgroundColor: 'black', color: 'white'}}>
										<Card.Title>JJ</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						</Row>
                    </div>
                </div>

                <div id="home_map" style={{paddingTop:'3%'}}>
                    <div id='h1' style={{paddingLeft: '5%', paddingRight: '5%'}}>
                        <h1>Maps</h1>
                        <hr></hr>
                    </div>
                    
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={map1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={map2}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
                </Container>
			</div>
		);
        
    }
}
export default Home;