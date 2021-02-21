import React from 'react'
import repair from '../images/repair.jpg'
import repair2 from '../images/repair_2.jpg'
import carpenter from '../images/carpenter.jpg'


const Home = () => {

  return <div className="main" role="main">
    <h1>About</h1>
   
    <div className="container">
    <p className="justify">
      Fix It All aim to provide you with home improvement and
      property management services without the headaches. You tell
      us what you need, we make it happen. No nonsense. No fuss. From
      Gas engineers, tilers and Plumbers to decorators and cleaners, We've
      got you covered.
    </p>
    <img className="repair" alt="repair" src={repair}></img>
    <h2>
      Project Management
    </h2>
    <p className="justify">
      At Fix It All you will find experienced
      and professional tradesmen with an eye for
      quality and a passion for customer satisfaction.
      We do not accept anything short of perfection and
      neither should you.
    </p>
    </div>
  </div>

}

export default Home