import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>
        </>
    )
}