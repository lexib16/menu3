import React from 'react';

const Categories = (props) => {
  const { category, setSearch} = props;
  return (
    <div className="btn-container">
      {category.map((item, index) => (
        <button 
        onClick={() => setSearch(item)}
        key={index}
        type="button"
        className='filter-btn'
        >
          {item}
        </button>
      ))}
      
    </div>
  );
};

export default Categories;
