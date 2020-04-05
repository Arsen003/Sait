import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.content}>

            <div></div>
            <Post/>

            <div className={s.item}>My Posts
                <div className={s.item}></div>
                <div><textarea></textarea></div>
                <button>Add post</button>
            </div>

            <div className='item'>
                <img src='https://im0-tub-ru.yandex.net/i?id=ccaf7c26cc242d83cfdb8ec97ecb8da4&n=13'/>
            </div>
            <div>post 1</div>
            <span>like</span>
            <div className="item">
            </div>

            <div className='item'>
                <img src='https://im0-tub-ru.yandex.net/i?id=ccaf7c26cc242d83cfdb8ec97ecb8da4&n=13'/>
            </div>
            <div>post 2</div>
            <span>like</span>
            <div className="item">
            </div>


            <div className={s.posts}>
                <post message='Hi, are you?' Likescount='0'/>
                <post message="It's my first post" Likescount='23'/>
            </div>
        </div>);
}
export default MyPosts;