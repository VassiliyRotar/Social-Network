import React from 'react'  /* Если что удалить */
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {

  return (
    <div>
      <div>
        <img src='https://www.amadey.voyage/foto/1/8391.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>

    </div>
  )
}

export default ProfileInfo