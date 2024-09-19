import React from "react";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          NagaPoojith Store Shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
              <ShoppingCartSharpIcon/> 
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
