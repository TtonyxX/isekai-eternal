import React, { Component } from 'react';
import {Form, Button, Navbar, Nav} from 'react-bootstrap';
import logo from '../home/logo.png';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: "",
            password: "",
            confirmPassword: ""
        }
    }


    register = () => {
        if (this.state.password !== this.state.confirmPassword) {
            alert("please confirm your password!")
        } else {
            const data = {
                "userName": this.state.userName,
                "userEmail": this.state.userEmail,
                "password": this.state.password,
            }
            fetch('http://localhost:4000/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        // console.log(response);
                        this.props.history.push("/login");
                    }
                    else {
                        // console.log('false');
                    }
                    return response.json();
                })
                .then(json => {
                       alert(json.message); 
                    
                    // console.log(json);
                })
                .catch(error => console.log('error is ', error));
        }

    }
    handleGetName = (e) => {
        this.setState({
            userName: e.target.value
        });
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
    handleGetConfirmPass = (e) => {
        this.setState({
            confirmPassword: e.target.value
        });
    }

    render() {
        return (
            <div id="login" style={{backgroundColor:'#0F2540', height:'150%'}}>
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
                        <h1 className="text-center mb-3">
                            <i className="fas fa-user-plus"></i> Register</h1>
                        <form action="register" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    // value={this.state.userName}
                                    onChange={this.handleGetName}
                                />
                            </div>
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
                            <label for="inputmonth">Birthday</label>
                            <div class="form-row">
                                
                                <div class="form-group col-md-3">
                                    
                                    <select id="inputDay" class="form-control">
                                        <option selected>January</option>
                                        <option>Febuary</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2"></div>
                                <div class="form-group col-md-2">
                                    
                                    <input type="text" class="form-control" id="inputDay" placeholder="Day"/>
                                </div>
                                <div class="form-group col-md-2"></div>
                                <div class="form-group col-md-3">
                                    
                                    <input type="text" class="form-control" id="inputYear" placeholder="Year"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Create Password"
                                    onChange={this.handleGetPassword}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Confirm Password</label>
                                <input
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    onChange={this.handleGetConfirmPass}
                                />
                            </div>
                            <button type="button" onClick={this.register} className="btn btn-secondary btn-block">Register</button>
                        </form>
                        <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
            <div style={{paddingTop:'3%', paddingBottom:'3%'}}>
                <p></p>
            </div>
            </div>
        );
    }
}
