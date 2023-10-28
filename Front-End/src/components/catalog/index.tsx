import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Catalog = () => {
  const [isCatalogVisible, setCatalogVisible] = useState(false);

  const toggleCatalog = () => {
    setCatalogVisible(!isCatalogVisible);
  };

  const catalogStyles = {
    maxHeight: isCatalogVisible ? "200px" : "0",
    opacity: isCatalogVisible ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 1s ease-in-out, opacity 0.3s ease-in-out",
  };
  const pStyles = {
    color: "rgba(23, 26, 83, 1)",
    "font-size": "18px",
    "font-family": "Montserrat",
    display: "flex",
    "align-items": "end",
  };
  const div = {
    "max-width": "100px",
    width: "100%",
  };
  return (
    <div style={div}>
      <p onClick={toggleCatalog} style={pStyles}>
        Каталог <MdOutlineKeyboardArrowDown />
      </p>
      <div className="catalog-content" style={catalogStyles}>
        <ul>
          <li>Ссылка 1</li>
          <li>Ссылка 2</li>
          <li>Ссылка 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
