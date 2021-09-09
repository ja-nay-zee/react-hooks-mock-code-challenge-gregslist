import React, { useState } from "react"



function ListingCard({ listingInfo, onDelete }) {
  // console.log(listingInfo); -> will print each element's info
  const { description, image, location, id } = listingInfo

  const [isFavorited, setIsFavorited] = useState(false)

  function handleIsFavoritedClick(){
    setIsFavorited((previousIsFavorited) => {
       return !previousIsFavorited
    })
  }
    

    function handleDeleteListingClick(){
      console.log("Agh delete button works!")
      fetch(`http://localhost:6001/listings/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        // update the DOM 
        onDelete(id)
      });
    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleIsFavoritedClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleIsFavoritedClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListingClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
