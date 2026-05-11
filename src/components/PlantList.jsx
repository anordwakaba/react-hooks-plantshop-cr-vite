import React from "react";
import PlantCard from "./PlantCard";

/**
 * PlantList Component
 * 
 * Renders a list of plant cards.
 * Maps over plants array and creates a PlantCard for each plant.
 * 
 * Props:
 * - plants: Array of plant objects to display
 * - onSoldOut: Callback function to handle sold out status toggle
 */
function PlantList({ plants, onSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onSoldOut={onSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
