import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCountClicks] = useState(0)

    const handleClick = () => {
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }
// the return REACTS to the parameter inside PropsAndState & the const function (handleClick)
    return (
        <>
            <h3>Welcome, {yourName} </h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Me!</button>
        </>
    )
}