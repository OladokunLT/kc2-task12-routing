import React, { Component } from 'react'

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageName: "Contact",
      email: "lukmanoladokun86@gmail.com",
      location: "Ibadan Nigeria"
    }

  }

  render() {
    return (
      <>
        <h3> {this.state.pageName} </h3>
        <p><b>Email</b>: {this.state.email} </p>
        <p><b>Address</b>: {this.state.location} </p>
      </>
    )
  }
}

export default Contact