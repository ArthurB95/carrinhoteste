import React from "react";
import "./style.css"
import SearchBar from "../SearchBar/page";
import CartButton from "../CartButton/page";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <p className="title"><strong className="strong">MKS</strong> Sistemas</p>
         <SearchBar />
         <button>
          <CartButton />
         </button>
      </div>
    </header>
  );
};

export default Header;
