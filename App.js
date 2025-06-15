{/* <div id="parent">
    <div id="chid1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"chidren"},[
        React.createElement("h1", {}, "I am an h1 tag from child1"),
        React.createElement("h2", {}, "I am an h2 tag from child1") 
    ]),
    React.createElement("div", {id:"chidren"},[
        React.createElement("h1", {}, "I am an h1 tag from child2"),
        React.createElement("h2", {}, "I am an h2 tag from child2") 
    ])
])
//Can have parent,child and siblings(create array)

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!")
const root1 = ReactDOM.createRoot(document.getElementById("root1"))
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root1.render(heading) //render method -> coverting object into the tag
root2.render(parent)

console.log(heading) // -> returns object
