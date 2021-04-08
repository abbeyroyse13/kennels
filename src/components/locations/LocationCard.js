import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location, handleDeleteLocation }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-petname">
          {location.name}
        </span></h3>
        <p>Address: {location.address}</p>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Discharge</button>
        <Link to={`/locations/${location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
  // the class names are the same as the animal.css, that's why location.css is overridden
  // need to go in & change this later ^^ 