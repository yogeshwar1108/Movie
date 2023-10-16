import React, { useState } from "react";

const DropdownMenu = ({ list, setList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const sortByNameAsc = () => {
    const sortedMovies = [...list].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setList(sortedMovies);
    setIsOpen(false)

  };

  const sortByNameDesc = () => {
    const sortedMovies = [...list].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });

    setList(sortedMovies);
    setIsOpen(false)

  };

  const sortByReleaseDateAsc = () => {
    const sortedMovies = [...list].sort((a, b) => {
      return a.year - b.year;
    });

    setList(sortedMovies);
    setIsOpen(false)

  };

  const sortByReleaseDateDesc = () => {
    const sortedMovies = [...list].sort((a, b) => {
      return b.year - a.year;
    });

    setList(sortedMovies);
    setIsOpen(false)

  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleOpen}>
        Sort by
      </button>
      <div className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
        <a className="dropdown-item" href="#" onClick={sortByNameAsc}>
          Name (A-Z)
        </a>
        <a className="dropdown-item" href="#" onClick={sortByNameDesc}>
          Name (Z-A)
        </a>
        <a className="dropdown-item" href="#" onClick={sortByReleaseDateAsc}>
          Release date (new to old)
        </a>
        <a className="dropdown-item" href="#" onClick={sortByReleaseDateDesc}>
          Release date (old to new)
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
