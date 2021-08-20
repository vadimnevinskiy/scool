import React from 'react';
import classes from "./LookingForAJob.module.css";


type PropsType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
}
const LookingForAJob: React.FC<PropsType> = ({lookingForAJob, lookingForAJobDescription}) => {
    return (
        <div className={classes.lookingForAJob}>
            <span className={lookingForAJob ? classes.active : classes.inactive}>{lookingForAJobDescription}</span>
        </div>
    );
};

export default LookingForAJob;
