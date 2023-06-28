import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props)  =>  {
 return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
            Ronald
        </div>
        <div className={s.dialog}>
            Nick
        </div>
        <div className={s.dialog}> 
            Margo
        </div>
        <div className={s.dialog}>
            Rafael
        </div>
        <div className={s.dialog}>
            Mario
        </div>
        <div className={s.dialog}>
            Arseniy
        </div>
        </div>

        <div className={s.messages}>
             <div className={s.dialog}>Hi</div>
             <div className={s.dialog}>How is your man?</div>
             <div className={s.dialog}>Yo</div>
    </div>

    </div>
    
    )
}

export default Dialogs