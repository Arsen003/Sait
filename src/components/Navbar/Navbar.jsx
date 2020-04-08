import React from 'react';
import s from './Navbar.module.css';
import  {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
        <NavLink to ="../Profile" activeClassName={s.active} className={s.item}>Profile</NavLink>
         <NavLink to ="../Dialogs" activeClassName={s.active} className={s.item}>Messages</NavLink>

            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </div>
    </nav>;
}
export default Navbar;







