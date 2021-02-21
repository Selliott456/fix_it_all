import react from 'react'
import { bubble as Menu } from 'react-burger-menu'

const Mobilenav = () => {
  return <div>
    <Menu>
      <a id="home" className="menu-item" href="#About">About</a>
      <a id="about" className="menu-item" href="#Generalrepairs">General Repairs</a>
      <a id="contact" className="menu-item" href="#Landlords">Landlords</a>
      <a id="contact" className="menu-item" href="#Services">Services</a>
      <a id="contact" className="menu-item" href="#prices">Prices</a>
    </Menu>
    </div>

}

export default Mobilenav