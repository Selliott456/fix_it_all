import React from 'react'
import repair from '../images/repair.jpg'
import repair2 from '../images/repair_2.jpg'
import carpenter from '../images/carpenter.jpg'


const Home = () => {

  return <div role="main">
    <h1>About</h1>
    <h2>
      Project Management
    </h2>
    <p>
      Fix It All aim to provide you with home improvement and
      property management services without the headaches. You tell
      us what you need, we make it happen. No nonsense. No fuss. From
      Gas engineers, tilers and Plumbers to decorators and cleaners, We've
      got you covered.
    </p>
    <h3>"Good enough is never enough"</h3>
    <img className="repair" alt="repair" src={repair}></img>
    <img className="repair" alt="repair" src={repair2}></img>
    <img className="repair" alt="repair" src={carpenter}></img>
    <p>
      At Fix It All you will find experienced
      and professional tradesmen with an eye for
      quality and a passion for customer satisfaction.
      We do not accept anything short of perfection and
      neither should you.
    </p>

  </div>

}

export default Home