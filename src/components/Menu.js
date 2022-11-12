import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const [menu, setMenu] = useState([
    {link:"/", name:"Главная"},
    {link:"/drift", name:"Дрифт-такси"},
    {link:"/timeattack", name:"Time Attack"},
    {link:"/forza", name:"Forza Karting"},
  ]);

  return (
    <nav className="menu">
      {menu.map((item, index) =>
        <NavLink
          key={index}
          className={({ isActive }) => (isActive ? "menu__item active" : "menu__item")}
          to={item.link}>
          {item.name}
        </NavLink>
        )}
    </nav>
  );
};