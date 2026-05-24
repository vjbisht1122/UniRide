import "./Offer.css"
import { FaCarSide } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

function Offer (){
  return (
    <section className="offer-section">

        <h2 className="offer-title"> What We Offer</h2>

         <p className="offer-subtitle">Making daily student travel affordable, safe, and convenient.</p>

         <div className="offer-container">

            <div className="offer-card">

                <FaCarSide className="offer-icon"/>

                <h3>Student Ride Sharing </h3>
                
                <p>Connect students travelling on similar routes and share rides together.</p>

            </div>

            <div className="offer-card">

                 <FaIndianRupeeSign className="offer-icon"/>

                <h3>
                    Affordable Travel
                </h3>

                <p>
                    Reduce daily transport expenses by splitting ride costs.
                </p>

            </div>

            <div className="offer-card">

               <FaShieldAlt className="offer-icon"/>

                <h3>Verified Students</h3>

                <p>
                    Ride only with verified students for a safer travel experience.
                </p>

            </div>

            <div className="offer-card">

                <FaLocationDot className="offer-icon"/>

                <h3>Smart Route Matching</h3>

                <p>
                    Find students travelling from college to nearby locations.
                </p>

            </div>

            <div className="offer-card">

               <FaUsers className="offer-icon"/>

                <h3>
                    Community Travel
                </h3>

                <p> Build connections while travelling with fellow students.</p>
            </div>

            <div className="offer-card">

                <FaLeaf className="offer-icon"/>

                <h3>
                    Eco Friendly Commute
                </h3>

                <p>Fewer vehicles, less traffic, and reduced carbon footprint.</p>
            </div>

         </div>

    </section>
  )
}

export default Offer
