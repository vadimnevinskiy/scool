import React from 'react';
import classes from "./Avatar.module.css";

type PropsType = {
    avatarUrl: string
}

const Avatar: React.FC<PropsType> = ({ avatarUrl }) => {
    return (
        <div>
            <div className={classes.avatar}><img src={avatarUrl} alt="" className="circle responsive-img"/></div>
        </div>
    );
};

export default Avatar;
