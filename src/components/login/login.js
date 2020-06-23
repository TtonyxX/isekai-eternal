import React, { Component } from 'react';
import {Form, Button, Navbar, Nav} from 'react-bootstrap';
import logo from '../home/logo.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            password: "",
        }
    }
    login = () => {
        fetch(`http://localhost:5000/login/${this.state.userEmail},${this.state.password}`)
            .then(response => 
                response.json()
            )
            .then(data => {
                if(data.code===200){
                    localStorage.setItem("userName",data.user.userName);
                    localStorage.setItem("userEmail",data.user.userEmail)
                    this.props.history.push("/home");
                    // console.log(localStorage.getItem("userName"));
                }
                else{
                    alert("Invalid Email and Password")
                }
            })
            .catch(error => console.log('error is ', error));
    }
    handleGetEmail = (e) => {
        this.setState({
            userEmail: e.target.value
        });
    }
    handleGetPassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    render() {
        return (
            <div id="login" style={{backgroundColor:'#0F2540', height:'100vh'}}>
                <Navbar bg="dark" variant="dark"  sticky="top">
                    <Navbar.Brand><img alt={logo} src={logo} style={{height: '50px', width: '230px'}}></img></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="champion">Champions</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button variant="outline-info" href="login">Sign in</Button>
                    </Form>
                </Navbar>
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
                        <form action="" method="POST">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    onChange={this.handleGetEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    onChange={this.handleGetPassword}
                                />
                            </div>
                            <button type="button" onClick={this.login} className="btn btn-secondary btn-block">Login</button>
                        </form>
                        <p className="lead mt-4">
                            No Account? <a href="register">Register</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}