import React, {useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {ProfileAPI} from "../../redux/api";
import {AppStateType} from "../../redux/store";
import {setProfile} from "../../redux/actions/Profile";
import Contacts from "../../components/Contacts/Contacts";
import LookingForAJob from "../../components/LookingForAJob/LookingForAJob";
import Avatar from '../../components/Avatar/Avatar';
import SimpleTextBlock from "../../components/SimpleTextBlock/SimpleTextBlock";

import classes from './Profile.module.css';
import avatar from "../../assets/images/defaultimg.jpg";


const Profile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = Number(history.location.pathname.split('/')[2])
    const profile = useSelector(({profilePage}: AppStateType) => profilePage.profile)


    useEffect(() => {
        if (userId) {
            ProfileAPI.getProfile(userId)
                .then(response => {
                    console.log(response)
                    dispatch(setProfile(response))
                })
        }
    }, [userId])


    return (
            <div>
                {
                    profile && profile.photos.small
                        ? <Avatar avatarUrl={profile.photos.small} />
                        : <Avatar avatarUrl={avatar} />
                }

                {
                    profile && profile.fullName &&
                    <h1 className={classes.userName}>{profile.fullName}</h1>
                }

                {
                    profile && profile.contacts &&
                    <Contacts contacts={profile.contacts}/>
                }
                {
                    profile && profile.aboutMe &&
                    <SimpleTextBlock text={profile.aboutMe} />
                }
                {
                    profile && profile.lookingForAJobDescription &&
                    <LookingForAJob lookingForAJob={profile.lookingForAJob} lookingForAJobDescription={profile.lookingForAJobDescription} />
                }

                <div className="fixed-action-btn">
                    <NavLink to={'/users'}  className="btn-floating btn-large red">
                        <i className="large material-icons">arrow_back</i>
                    </NavLink>
                </div>
            </div>
    );
};

export default Profile;
