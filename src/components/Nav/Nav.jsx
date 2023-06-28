// import React from 'react'  /* Если что удалить */
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom'


//let classes = {
//'nav': 'Nav_nav__rSUjH',
//'item': 'Nav_item__pALOv'
//'active': 'Nav_active'
//}

//let c1 = 'item';
//let c2 = 'active';
// 'item active'
//let c3 = c1 + ' ' + c2;
//let classesNew = `${classes.item} ${classes.active}`;



const Navbar = () => {
    return (
     <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/Profile' className={navData=>navData.isActive? s.activeLink: s.item}>Profile</NavLink>
    </div> 
    <div className={`${s.item} ${s.active}`}>
      <NavLink to='/Dialogs' className={navData=>navData.isActive? s.activeLink: s.item}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='News' className={navData=>navData.isActive? s.activeLink: s.item}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='Music' className={navData=>navData.isActive? s.activeLink: s.item}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='Settings' className={navData=>navData.isActive? s.activeLink: s.item}>Settings</NavLink>
    </div>
  </nav>
)
}

export default Navbar