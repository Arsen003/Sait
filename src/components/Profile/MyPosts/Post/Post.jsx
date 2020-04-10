import React from "react";
import s from './Post.module.css';


const Post =(props) =>{
  return <div className={s.content}>

      {props.message}
  <div>

     <div>ava + description</div>
    </div>
 </div>
}
 export default Post;
