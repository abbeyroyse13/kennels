import React from "react"
import "./Customer.css"

export const CustomerCard = ({ name, address }) => (
    <section className="customer">
        <h3 className="customer__name">{name}</h3>
        <div className="customer__address">Address: {address}</div>
    </section>
)