import React from 'react'
import gas from '../images/gas.jpg'
import plumber from '../images/plumber.jpg'
import electrician from '../images/electrician.jpg'
import abseilers from "../images/abseilers.jpg"
import roofers from "../images/roofers.jpg"
import drain from "../images/drain.jpg"
import cleaners from "../images/cleaners.jpg"
import painter from "../images/painter.jpg"
import maintenance from "../images/maintenance.jpg"
import waste from "../images/waste.jpg"

const Services = () => {
  return <div className="services">
    <h2>Services</h2>
    <section className="service-containers">
      <div className="service">
        <h1>Gas Engineers</h1>
        <img src={gas} alt="gas engineer" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Plumbers</h1>
        <img src={plumber} alt="plumber" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Electricians</h1>
        <img src={electrician} alt="electrician" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Abseilers</h1>
        <img src={abseilers} alt="abseilers" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Roofers</h1>
        <img src={roofers} alt="roofers" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Drain Cleaners</h1>
        <img src={drain} alt="drain cleaners" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Domestic Cleaners</h1>
        <img src={cleaners} alt="cleaners" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Painters and Decorators</h1>
        <img src={painter} alt="painter" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>General Maintenance</h1>
        <img src={maintenance} alt="maintenance" className="serviceImg"></img>
      </div>
      <div className="service">
        <h1>Household Waste Removers</h1>
        <img src={waste} alt="waste" className="serviceImg"></img>
      </div>
    </section>
  </div>
}

export default Services
