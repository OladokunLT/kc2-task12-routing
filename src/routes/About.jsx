import React, { Component } from 'react'

class About extends Component {
  state = {
    number: 328,
    name: "Lukupay"
  }

  render() {
    return (
      <>
        <h3>About</h3>
        <p>Our company name is <strong>{this.state.name}</strong>. We work towards cloning MTN Nigeria</p>
        <p>We have more than <strong>{this.state.number}</strong> customers.</p>
        
      </>
    )
  }
}

export default About



// import React from 'react'

// function About() {
//   return (
//     <>
//     <h3>About</h3>
//     <p>We aspire to make data affordable to every one</p>
//     </>
//   )
// }

// export default About