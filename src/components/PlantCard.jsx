import React from "react";

/**
 * PlantCard Component
 * 
 * Displays individual plant information:
 * - Image, name, and price
 * - Button to toggle sold out status
 * 
 * Props:
 * - plant: Plant object with id, name, image, price, soldOut properties
 * - onSoldOut: Callback function to handle sold out status toggle
 */
function PlantCard({ plant, onSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!plant.soldOut ? (
        <button className="primary" onClick={() => onSoldOut(plant.id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onSoldOut(plant.id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
