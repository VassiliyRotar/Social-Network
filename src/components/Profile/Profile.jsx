import React from 'react'  /* Если что удалить */
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
  
    return  <div>
    <div>
      <img src='https://www.amadey.voyage/foto/1/8391.jpg'></img>
      </div>
      <div>
        ava + description
      </div>
     <MyPosts /> 
    </div>

}

export default Profile