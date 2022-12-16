import React from 'react';
import Login from '../Login';

function Login() {
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