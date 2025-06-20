import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 * -- Restaurant Card
 * --- Img
 * --- Name, Star Rating, cuisine
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return (
        <div className = "header">
            <div className="logo-container"> 
                <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// const styleCard = {
//     backgroundColor: red,
// }
const RestaurantCard = (props) => {
    const {resData} = props 
    const {resName, cuisine, stars, deliveryTime,costForTwo} = resData

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={resData.imgSource} />
            <h3>{resName}</h3>
            <h4>{cuisine.join(" , ")}</h4>
            <h4>{stars} stars</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>Rs {costForTwo/100} for two</h4>
        </div>
    )
}

const resList = [{
    "resID": 1,
    "resName":"Dominos",
    "imgSource":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9iRJd6qbAblgaIm2z0Nh0bTPnNYUJEkVg&s",
    "cuisine":["Italian", "fast food"],
    "stars":"3.8",
    "deliveryTime":"28",
    "costForTwo":40000
},
{
    "resID": 2,
    "resName":"KFC",
    "imgSource":"https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    "cuisine":["burger", "chicken", "fast food"],
    "stars":"3.6",
    "deliveryTime":"25",
    "costForTwo":35000
},
{
    "resID": 3,
    "resName":"Pizza Hut",
    "imgSource":"https://cdn2.gyftr.com/gyftrweb/brands/21.png",
    "cuisine":["pizza", "chicken", "fast food"],
    "stars":"3.6",
    "deliveryTime":"26",
    "costForTwo":30000
}
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard
                resData={resList[0]}
                imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9iRJd6qbAblgaIm2z0Nh0bTPnNYUJEkVg&s"
                resName="Dominos" 
                cuisine="Italian, fast food"
                stars="3.8"
                deliveryTime="28 min"
                /> */}
                {resList.map(restaurant => 
                    <RestaurantCard key={resList.resID} resData={restaurant} />
                )}
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
