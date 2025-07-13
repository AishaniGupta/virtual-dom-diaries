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

export default RestaurantCard