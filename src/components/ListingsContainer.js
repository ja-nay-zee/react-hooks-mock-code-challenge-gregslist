import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";


function ListingsContainer({ searchQuery }) {
const[listings, setListings] = useState([])
// console.log(searchQuery) -> empty console.log since the initial value of useState is ("")
// console.log(searchQuery);

 useEffect(() => {
   fetch('http://localhost:6001/listings')
   .then(response => response.json())
   .then(listingsArray => {
    // console.log(listingsArray) -> works!
       setListings(listingsArray)
   })
 },[])

//  console.log(listings);


function listingDelete(id){
  const updatedListingArray = listings.filter(listing =>
    // console.log(listing)
    listing.id != id)
  setListings(updatedListingArray)
}

const filteredListings = listings.filter(listing => {
  return listing.description.toLowerCase().includes(searchQuery.toLowerCase())
})

 const listingCards = filteredListings.map((listingObject) => {
  //  return 10; -> this will iterate through the array elements! 
   return <ListingCard key={listingObject.id} listingInfo={listingObject} onDelete={listingDelete} />
 })

//  console.log(listingCards);

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
