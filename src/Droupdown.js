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
        <a className="dropdown-item" href="#" onClick={() => handleSort(sortByNameAsc)}>
          Name (A-Z)
        </a>
        <a className="dropdown-item" href="#" onClick={() => handleSort(sortByNameDesc)}>
          Name (Z-A)
        </a>
        <a className="dropdown-item" href="#" onClick={() => handleSort(sortByReleaseDateAsc)}>
          Release date (new to old)
        </a>
        <a className="dropdown-item" href="#" onClick={() => handleSort(sortByReleaseDateDesc)}>
          Release date (old to new)
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
