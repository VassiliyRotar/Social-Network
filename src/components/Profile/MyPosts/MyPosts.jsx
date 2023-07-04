import React from 'react'  /* Если что удалить */
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
 
    return (
    <div className={s.postsBlock}>
      <h3 className={s.myPosts}>
        My posts
        </h3>
        <div className={s.addPostForm}>
          <form className={s.addPostArea}>
          <textarea className={s.addPostTextarea} name='post-text' placeholder='Введите сообщение' data-autoresize></textarea>

          </form>
          </div>
          
       
          <button className={s.button}>Add post</button>
       

        <div className={s.posts}> 
        <Post message='Hi, how are you?' likeCounts='15'/>
         <Post  message="It's my first post " likeCounts='20' />
    </div>
      </div>
       )

}

export default MyPosts