import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts =[

        {id: 1, message: 'Hi, how are you?', likescount: 12},
        {id: 2, message: 'It/`s my first post ', likescount: 11},
    ]

   let  postsElements = posts.map(p => <post  message={p.message} Likescount={p.likescount}/>);




    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.message}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button className={s.btn}>add posts</button>
                </div>
            </div>

            <div className={s.item}>
                <div>
                    <img src='https://im0-tub-ru.yandex.net/i?id=ccaf7c26cc242d83cfdb8ec97ecb8da4&n=13'

                         className={s.img}/>
                    <span>Hi, are you?</span>
                </div>
                <span>like 0</span>
            </div>

            <div className={s.item}>
                <div>
                    <img src='https://im0-tub-ru.yandex.net/i?id=ccaf7c26cc242d83cfdb8ec97ecb8da4&n=13'
                         className={s.img}/>
                    <span>It` s my first post</span>
                </div>
                <span>like 23</span>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>);
}
export default MyPosts;