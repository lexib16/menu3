import React from 'react';

const Menu = (props) => {
  const { data, search } = props;

  return (
    <div className="section-center">
      {search === 'all'
      ? data.map((item) => (
     <article key={item.id} className='menu-item'>
        <img src={item.img} alt="" className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">{item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
      ))
      : data
      .filter((item) => item.category === search)
      .map((item) => (
        <artical key={item.id} className='menu-item'>
          <img src={item.img} alt='' className='photo'/>
          <div className='item-info'>
            <header>
              <h4>{item.title}</h4>
              <h4 className='price'>{item.price}</h4>
            </header>
            <p className='item-text'>{item.desc}</p>
          </div>
        </artical>
      ))}
    </div>
  );
};

export default Menu;
