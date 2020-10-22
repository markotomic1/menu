import React from "react";

const Item = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        const {
          id,
          title,
          price,
          img,
          desc,
        } = item;
        return (
          <article key={id} className='menu-item'>
            <img
              src={img}
              alt={title}
              className='photo'
            />
            <div className='item-info'>
              <header>
                <h2>{title}</h2>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Item;
