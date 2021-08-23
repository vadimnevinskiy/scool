import React from 'react';
import classes from './Preloader.module.css'

const PreloaderCircular = () => {
    return (
        <div className={classes.spinnerBlock}>
            <div className={classes.opacityBlock}></div>
            <div className={classes.spinner + " preloader-wrapper big active"}>
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreloaderCircular;
