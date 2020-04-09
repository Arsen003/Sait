import React from "react";
import s from '../Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Profileinfo from "../Profileinfo/Profileinfo"

const Profile = (props) => {
  return(
    <div>
        <Profileinfo/>
        <MyPosts />
    </div>);
}
export default Profile;