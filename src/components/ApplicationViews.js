import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./locations/LocationDetail"
import { CustomerDetail } from "./customers/CustomerDetail"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationForm } from "./locations/LocationForm"
import { CustomerForm } from "./customers/CustomerForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"

export const ApplicationViews = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customers") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customers", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customers") !== null)
    }

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}
// go back & add in details for customer & employee 