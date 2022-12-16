import React from 'react';
//import './login.css';

class Loginhere extends React.Component {
  
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
    
  render() {
    return (
      <div className="container" style={{ paddingTop: "5%" }}>

      <h1 className='login'>Log In Here</h1>
        <form
          onSubmit={e => {
            this.submitForm(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              onChange={e => this.changeInputValue(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={e => this.changeInputValue(e)}
              
            />
          </div>
          <button value="submit" className="btn btn-primary" onClick={this.postDetails}>
            Submit
          </button>
        </form>
      </div>
    
    );
  }
}

export default Loginhere;