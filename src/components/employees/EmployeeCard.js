import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">
            {employee.name}
          </span></h3>
          <p>Address: {employee.address}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
        </div>
      </div>
    );
  }
  // the class names are the same as the animal.css, that's why employee.css is overridden