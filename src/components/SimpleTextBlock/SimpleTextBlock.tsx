import React from 'react';
import classes from "./SimpleTextBlock.module.css";


type PropsType = {
    text: string
}
const SimpleTextBlock: React.FC<PropsType> = ({text}) => {
    return (
        <div className={classes.info}>
            {text}
        </div>
    );
};

export default SimpleTextBlock;
