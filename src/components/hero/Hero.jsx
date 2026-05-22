import "./Hero.css"
import hero from "../../assets/hero/hero.jpg"
import { FaUniversity } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

function Hero () {
  return (
    <section className="hero-section">

        <div className="left-side">

            <h1 className="hero-title">

                <span className="first-line">
                    India's First
                </span>

                <span className="second-line">
                    Student Sharing Ride Platform
                </span>
            </h1>
            <p className="hero-description">

             Affordable, safe, and shared rides for students travelling between college and home.

            </p>

            <div className="input-field">
                 <div className="input-box">

                <FaUniversity className="input-icon" />
                <input type="text" placeholder="Enter Pickup Location" />

                </div>

                <div className="input-box">

                <FaLocationDot className="input-icon" />
                <input type="text" placeholder="Enter Drop Location" />
                
                </div>
                
            </div>

            <div className="hero-btn">
                <button > Search Ride</button>
            </div>

        </div>

            <div className="right-side">
                <img src={hero} alt="Student Ride" />
            </div>

    </section>
  )
}

export default Hero
