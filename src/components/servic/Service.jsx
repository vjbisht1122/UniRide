import "./Service.css"
import { FaMotorcycle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

import React from 'react'

function Service() {
  return (
    <section className="service">
        
        <div className="service-heading">
        <h2 className="service-title">
            Our Services
        </h2>

        <p className="service-subtitle">
             Smart travel solutions designed for students
        </p>

        </div>
       

        <div className="service-container">

        
        <div className="service-card">

          <FaMotorcycle className="service-icon" />

          <h3>Student Driver</h3>

        <p>Offer rides to fellow students travelling from college to home.</p>

        </div>


         <div className="service-card">

        <FaPeopleGroup className="service-icon" />

        <h3>Shared Travel</h3>

        <p>Travel together with students going to the same destination.</p>

        </div>

        <div className="service-card">

        <FaIndianRupeeSign className="service-icon" />

        <h3>Affordable Commute</h3>

        <p>Reduce transportation costs through ride sharing.</p>

        </div>

        <div className="service-card">

        <FaShieldAlt className="service-icon" />

        <h3>Verified Students</h3>

        <p>College verification for safer rides.</p>

        </div>

        </div>


    </section>
  )
}

export default Service
