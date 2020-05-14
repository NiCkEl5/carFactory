import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

  return(
    <div className="ui secondary pointing menu">
      <div className='item'>
        <Link to="/">Contact</Link>
      </div>
      <div className='item'>
        <Link to="/Inventory">Inventory</Link>
      </div>
      {/* <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;