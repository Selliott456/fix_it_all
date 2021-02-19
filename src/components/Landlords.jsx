import React from 'react'
import landlord from '../images/keys.jpg'



const Landlords = () => {

return <div className="main" role="main">
  <h2>Landlords</h2>
  <p>
    Fix It All has year of experience in managing
    property portfolios on behalf of landlords. 
    <br></br>
    <br></br>
    Whatever you need in terms of maintaining your
    property, Fix It All can provide you with it. 
  </p>
<img alt="landlord" className="landlord" src={landlord}></img>
</div>

}

export default Landlords