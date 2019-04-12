import React from 'react';

const title = 'Just To-Do It';

const Header = (props) => (
  <div className ='header'>
    <div className='container'>
      <h1 className='header__title'>{title}</h1>
      {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
    </div>
  </div>
);

export default Header;