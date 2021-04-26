import React, { Component } from 'react';

class SettingPage extends React.Component{
    render(){
        return(
            <div align='center'>
                    <h2>Login Form</h2>
                    <form>
                      <div className="imgcontainer">
                        <img src="logo.jpg" alt="Avatar" className="avatar"/>
                      </div>

                      <div className="container" align='left'>
                        <label>
                          <b>Username</b>
                        </label>
                        <p><input type="text" placeholder="Enter Username" name="uname" required/></p>
                        
                        <p><label><b>Password</b></label></p>

                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <p><button type="submit">Login</button></p>
                      </div>
                      <div>
                        
                      </div>
                    </form>
                </div>
        )
    }
}

export default SettingPage
