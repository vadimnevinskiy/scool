import React from 'react';
import classes from "./Contacts.module.css";
import fb from "../../assets/images/fb.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import link from "../../assets/images/link.png";
import twitter from "../../assets/images/twitter.png";
import website from "../../assets/images/website.png";
import youtube from "../../assets/images/youtube.png";
import {ContactsType} from "../../redux/types";

type PropsType = {
    contacts: ContactsType
}

const Contacts: React.FC<PropsType> = ({contacts}) => {
    return (
        <div className={classes.contacts}>
            {
                contacts.facebook &&
                <a href={contacts.facebook} target="_blank"><img src={fb} alt="" /></a>
            }
            {
                contacts.github &&
                <a href={contacts.github} target="_blank"><img src={github} alt="" /></a>
            }
            {
                contacts.instagram &&
                <a href={contacts.instagram} target="_blank"><img src={instagram} alt="" /></a>
            }
            {
                contacts.mainLink &&
                <a href={contacts.mainLink} target="_blank"><img src={link} alt="" /></a>
            }
            {
                contacts.twitter &&
                <a href={contacts.twitter} target="_blank"><img src={twitter} alt="" /></a>
            }
            {
                contacts.website &&
                <a href={contacts.website} target="_blank"><img src={website} alt="" /></a>
            }
            {
                contacts.youtube &&
                <a href={contacts.youtube} target="_blank"><img src={youtube} alt="" /></a>
            }
        </div>
    );
};

export default Contacts;
