import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Form state for new plant
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.image || !formData.price) {
      alert("Please fill in all fields");
      return;
    }

    // Call parent handler to add plant
    onAddPlant(formData);

    // Reset form
    setFormData({
      name: "",
      image: "",
      price: "",
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
