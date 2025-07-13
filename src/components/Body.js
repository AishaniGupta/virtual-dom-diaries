import { useState } from 'react'
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

const Body = () => {

    // Local State Variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    //Normal JS Variable
    // let listOfRestaurants = [{
    //     "resID": 1,
    //     "resName":"Dominos",
    //     "imgSource":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5s9iRJd6qbAblgaIm2z0Nh0bTPnNYUJEkVg&s",
    //     "cuisine":["Italian", "fast food"],
    //     "stars":"4.1",
    //     "deliveryTime":"28",
    //     "costForTwo":40000
    // }]

    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    // Normal logic for filtering
                    // listOfRestaurants = listOfRestaurants.filter(
                    //     (res)=>res.data.avgRating > 4)
                    const filtererdList = listOfRestaurants.filter(
                        (res) => res.stars >= 4)
                    setListOfRestaurants(filtererdList)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => 
                    <RestaurantCard key={resList.resID} resData={restaurant} />
                )}
            </div>
        </div>
    )
}

export default Body