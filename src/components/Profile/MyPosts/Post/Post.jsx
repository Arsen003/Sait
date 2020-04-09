import React from "react";
import s from './Post.module.css';


const Post =(props) =>{
  return <div className={s.content}>
      <img src='https://pbs.twimg.com/media/DeBEZEyUQAAPOOV.jpg'/>
      {props.message}
  <div>
     <span>ava + description</span>
    </div>
 </div>
}
 export default Post;
