import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ name, address }) => (
    <section className="employee">
        <h3 className="employee__name">{name}</h3>
        <div className="employee__address">Address: {address}</div>
    </section>
)