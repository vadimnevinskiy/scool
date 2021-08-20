import React, {useEffect, useState} from 'react';
import classes from './Paginator.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/actions/Users";
import {AppStateType} from "../../redux/store";

type PropsType = {
    totalCount: number,
    currentPage: number,
    pageSize: number
}
const Paginator: React.FC<PropsType> = ({totalCount, currentPage, pageSize}) => {
    const dispatch = useDispatch()
    const [pages, setPages] = useState<number[]>([])


    const generatePages = (totalCount: number, pageSize: number) => {
        let pagesCount = Math.ceil(totalCount / pageSize)
        let arrPages = []
        for (let i = 1; i <= pagesCount; i++) {
            arrPages.push(i)
        }
        setPages(arrPages)
    }

    useEffect(() => {
        generatePages(totalCount, pageSize)
    }, [totalCount])



    const changePage = (currentPage: number) => {
        // alert(currentPage)
        dispatch(setCurrentPage(currentPage))
    }

    return (
        <div className={classes.paginator}>
            {
                pages.map(item => {
                    return (
                        <span key={item} className={currentPage === item ? classes.active : ''} onClick={() => changePage(item)}>{item}</span>
                    )
                })
            }
        </div>
    );
};

export default Paginator;
