import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts />
    </div>
}
export default Profile;
