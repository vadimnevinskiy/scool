import React from 'react';
import {NavLink} from "react-router-dom";
import { UserType } from '../../redux/types';
import classes from './User.module.css'
import avatar from "../../assets/images/defaultimg.jpg";


type PropsType = {
    user: UserType
}
const User: React.FC<PropsType> = ({user}) => {
    return (
        <div className="col s12 m6 l4 xl3">
            <div className="card  blue darken-4">
                <div className={classes.UserImage + " card-image"}>
                    {
                        user.photos.small
                        ? <img src={user.photos.small} />
                        : <img src={avatar} />
                    }
                    {/*<span className={classes.userName + " card-title"}>{user.name}</span>*/}
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                    </a>
                </div>
                <div className={classes.cardContent + " card-content"}>
                    <p>{user.status}</p>
                </div>
                <div className="card-action">
                    <NavLink to={`/profile/${user.id}`}>
                        {user.name}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default User;
