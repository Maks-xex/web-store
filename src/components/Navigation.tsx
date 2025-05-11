import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => (
  <nav className="flex justify-end w-full top-0 p-2 bg-blue-500 rounded-b shadow-md z-10">
    <h1 className="font-extrabold text-blue-600 drop-shadow-md shadow-blue-600/50 uppercase"></h1>
    <ul className="flex flex-row text-white mt-{10px}">
      <li className="pr-2 capitalize">
        <Link to="/products">Products</Link>
      </li>
      <li className="pr-2 capitalize">
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
);
