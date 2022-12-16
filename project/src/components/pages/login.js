import React from 'react';
import '../../App.css';
import Login from '../Login';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validationForm() {
    let returnData = {
      error : false,
      msg: ''
    }
    const {password} = this.state
    //Check password
    if(password.length < 8) {
      returnData = {
        error: true,
        msg: 'Password must be more than 8 characters'
      }
    }
    return returnData;
  }

  submitForm(e) {
    e.preventDefault();
    const validation = this.validationForm()
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (validation.error) {
      alert(validation.msg)
    }else if(username === 'iona.sloan@gmail.com' && password === 'password') {
      window.location = "/";
    }else {
      alert("Wrong password or username");
    }
  }
}

export default Login;