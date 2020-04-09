import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.message}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button className={s.btn}>Add post</button>
                </div>
            </div>

            <div className={s.item}>
                <div>
                    <img src='https://im0-tub-ru.yandex.net/i?id=ccaf7c26cc242d83cfdb8ec97ecb8da4&n=13'
                         className={s.img}/>
                    <span>Hi, are you?</span>
                </div>
                <span>like</span>
            </div>

            <div className={s.item}>
                <div>
                    <img src='https://im0-tub-ru.yandex.net/i?id=ccaf7c26cc242d83cfdb8ec97ecb8da4&n=13'
                         className={s.img}/>
                    <span>post 2</span>
                </div>
                <span>like 0</span>
            </div>

            <div className={s.posts}>
                <post message='Hi, are you?' Likescount='0'/>
                <post message="It's my first post" Likescount='23'/>
            </div>
        </div>);
}
export default MyPosts;