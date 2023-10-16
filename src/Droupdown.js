import React, { useState } from "react";

const DropdownMenu = ({ list, setList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (sortFunction) => {
    const sortedMovies = [...list].sort(sortFunction);
    setList(sortedMovies);
    setIsOpen(false);
  };

  const sortByNameAsc = (a, b) => a.name.localeCompare(b.name);
  const sortByNameDesc = (a, b) => b.name.localeCompare(a.name);
  const sortByReleaseDateAsc = (a, b) => b.year - a.year;
  const sortByReleaseDateDesc = (a, b) => a.year - b.year;

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Sort by
      </button>
      <div className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
        <button className="dropdown-item"  onClick={() => handleSort(sortByNameAsc)}>
          Name (A-Z)
        </button>
        <button className="dropdown-item"  onClick={() => handleSort(sortByNameDesc)}>
          Name (Z-A)
        </button>
        <button className="dropdown-item"  onClick={() => handleSort(sortByReleaseDateAsc)}>
          Release date (new to old)
        </button>
        <button className="dropdown-item"  onClick={() => handleSort(sortByReleaseDateDesc)}>
          Release date (old to new)
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
