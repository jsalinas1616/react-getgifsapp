import React, { useState } from "react";
import Proptypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    setCategories((originCat) => [inputValue, ...originCat]);
  };

  return (
    <form onSubmit={handleSubmint}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired,
};
