import React, { Component } from 'react'
import FormSignIn from './FormSignIn'
import FormSignUp from './FormSignUp'
import axios from "axios";

export default class SignInUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }
    handleAddUser = async (user) => {
        try {
          await axios({
            method: "POST",
            url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users`,
            data: user,
          });
          //   this.fetchUsera();
          //   this.HandleToggleModal();
        } catch (error) {
          console.log(error);
        }
      };
    
    render() {
        return (
            <div>
                <FormSignIn />
                <FormSignUp onAddUser={this.handleAddUser} />
            </div>
        )
    }
}
