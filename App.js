import React from 'react'
import ReactDOM from 'react-dom/client'

//this code is transpiled before it reached JS engine by Parcel (by the help of babel)
// JSX -> transpiled (by babel) -> React.createElement -> JS object -> Rendered as HTML element

//React Element

const element = <h6>Testing</h6>
const heading = <h1 id="root">Namaste React from react element {element}</h1>

//Functional component

const HeadingComponent1 = () => {
    return (
        <div>
            <h1>Namaste React from functional component </h1>
            <HeadingComponent2 />
            <HeadingComponent3></HeadingComponent3>
            {HeadingComponent4()}
        </div>
    )
}
const HeadingComponent2 = () => <h1>Same thing</h1>

const HeadingComponent3 = () => (
    <h1>Same thing again</h1>
)

const HeadingComponent4 = function() {
    return(
        <h1>Without arrow functions with function keywords</h1>
    )
}

const number = 1000
const HeadingComponent5 = () => {
    return (
        <div>
            {number}
            <h1> Hello here {number}</h1>
            {10000+123-987979}
            {console.log("Testing console")}
            {heading}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

//Rendering for react element
root.render(heading)

//Rendering for react component
root.render(<HeadingComponent1 />)
