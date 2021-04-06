import React from "react"
import "./Location.css"

export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Discharge</button>
        </div>
      </div>
    );
  }
  // the class names are the same as the animal.css, that's why location.css is overridden