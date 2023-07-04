import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

 
const DialogItem = (props) =>  {

    let path ='/dialogs/' + props.id ;
    
    return  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path} className={navData=>navData.isActive? s.activeLink: s.dialog}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props)  =>  {

 return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>

        <DialogItem name='Nick' id='1'/>
        <DialogItem name='Martin' id='2'/>
        <DialogItem name='John' id='3'/>
        <DialogItem name='Ansel' id='4'/>
        <DialogItem name='Rich' id='5'/> 
        <DialogItem name='Henry' id='6'/>
        </div>

        <div className={s.messages}>
             <Message message='Hi' />
             <Message message='How is your Frontend?' />
             <Message message='Yo' />
    </div>

    </div>
    
    )
}



export default Dialogs