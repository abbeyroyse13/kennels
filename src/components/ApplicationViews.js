import React from "react"
import { Route } from "react-router-dom"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./locations/LocationCard"
import { CustomerCard } from "./customers/CustomerCard"
import { EmployeeCard } from "./employees/EmployeeCard"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <> 
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/animals">
                <AnimalCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>

            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}