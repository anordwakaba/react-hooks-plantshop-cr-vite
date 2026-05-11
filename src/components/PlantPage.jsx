import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

/**
 * PlantPage Component
 * 
 * Main page component that manages state for:
 * - All plants fetched from backend
 * - Search query filter
 * 
 * Handles all CRUD operations:
 * - GET: Fetches plants on mount
 * - POST: Adds new plant from form submission
 * - PATCH: Updates plant's sold out status
 */
function PlantPage() {
  // State for all plants and filtered plants
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all plants on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name && plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle adding a new plant
  const handleAddPlant = (newPlantData) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlantData),
    })
      .then((res) => res.json())
      .then((newPlant) => setPlants([...plants, newPlant]))
      .catch((error) => console.error("Error adding plant:", error));
  };

  // Handle marking plant as sold out
  const handleSoldOut = (id) => {
    const plantToUpdate = plants.find((plant) => plant.id === id);
    const updatedPlant = {
      ...plantToUpdate,
      soldOut: !plantToUpdate.soldOut,
    };

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((updated) => {
        setPlants(plants.map((plant) => (plant.id === id ? updated : plant)));
      })
      .catch((error) => console.error("Error updating plant:", error));
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PlantList plants={filteredPlants} onSoldOut={handleSoldOut} />
    </main>
  );
}

export default PlantPage;
