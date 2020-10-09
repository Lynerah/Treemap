import React, {Component} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignPage extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { apiResponse: "" };
	// 	this.onChangeUserName = this.onChangeUserName.bind(this);
	// 	this.onChangeEmail = this.onChangeEmail.bind(this);
	// 	this.onChangePassword = this.onChangePassword.bind(this);
	// 	this.onSubmit = this.onSubmit.bind(this);
	// 	
	// 	this.state = {
	// 		userName : '',
	// 		email : '',
	// 		password : ''		  
	// 	}
	// }
	// 
	// callAPI() {
	// 	fetch("http://localhost:8000/user/")
	// 		.then(res => res.text())
	// 		.then(res => this.setState({ apiResponse: res }));
	// }
	// 
	// componentWillMount() {
	// 	this.callAPI();
	// }
	// 
	constructor(props) {
		super(props);
		// this.emailElement = React.createRef();
		// this.passwordElement = React.createRef();
		this.onChangeUserName = this.onChangeUserName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		
		this.state = {
			userName : '',
		    email : '',
		    password : ''		  
		}
	}
	
	  
	onChangeUserName(event){
		this.setState({
		  userName: event.target.value
		});
	}
	
	onChangeEmail(event) {
		this.setState({
		  email: event.target.value
		});
	  }
	  
	onChangePassword(event) {
		this.setState({
			password: event.target.value
		});
	}
		  
	onSubmit(event) {
	  event.preventDefault()
	  
	  const userData = {
		  userName : this.state.userName,
		  email : this.state.email,
		  password : this.state.password
	  };
	  
	console.log(userData);
	
	
	// axios.post('http://localhost:8000/user/signup', userData)
	// 	.then((res) => {
	// 	console.log(res.data)
	// }).catch((error) => {
	// 	console.log(error)
	// });

	  this.setState({
		  userName: '',
		  email : '',
		  password : ''	})
	// window.location = '/';
	}		
	
	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
				<Label for="name">Email</Label>
				<Input type="text" name="name" id="name" value={this.state.userName} onChange={this.onChangeUserName} placeholder="Name" />
			  </FormGroup>
			  <FormGroup>
				<Label for="exampleEmail">Email</Label>
				<Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.onChangeEmail} placeholder="with a placeholder" />
			  </FormGroup>
			  <FormGroup>
				<Label for="examplePassword">Password</Label>
				<Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.onChangePassword}  placeholder="password placeholder" />
			  </FormGroup>
			  // <p className="App-intro">;{this.state.apiResponse}</p>
			  <Button type="submit">Submit</Button>
			</Form>
		);
	}
}

export default SignPage;