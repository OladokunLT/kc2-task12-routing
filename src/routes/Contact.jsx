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
        <p>Email: {this.state.email} </p>
        <p>Address: {this.state.location} </p>
      </>
    )
  }
}

export default Contact







// import React from 'react'

// function Contact() {
//   return (
//     <main>
//         <>
//           <h3>Contact</h3>
//           <p>Email: lukmanoladokun86@gmail.com</p>
//           <p>website: https://lukupay.com.ng</p>
//         </>
//     </main>
//   )
// }

// export default Contact