import React from "react";

/**
 * Search Component
 * 
 * Controlled input component for searching plants by name.
 * Updates parent state as user types.
 * 
 * Props:
 * - searchQuery: Current search filter text
 * - setSearchQuery: Callback to update search query in parent
 */
function Search({ searchQuery, setSearchQuery }) {
  // Handle search input changes - updates parent state in real-time
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
