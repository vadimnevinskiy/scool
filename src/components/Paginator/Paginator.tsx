import React, {useCallback, useEffect, useState} from 'react';
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
    const [portionPages, setPortionPages] = useState<number[]>([])

    //TODO need to remember number of current portion for comes from profile page
    const [portionNumber, setPortionNumber] = useState(0)
    const portionSize = 8
    const startPortion = portionNumber * portionSize
    const endPortion = startPortion + portionSize

    useEffect(() => {
        generatePages(totalCount, pageSize)
    }, [totalCount])


    const generatePages = (totalCount: number, pageSize: number) => {
        let pagesCount = Math.ceil(totalCount / pageSize)
        let arrPages = []
        for (let i = 1; i <= pagesCount; i++) {
            arrPages.push(i)
        }
        setPages(arrPages)
        slicePages(startPortion, endPortion)
    }


    useEffect(() => {
        slicePages(startPortion, endPortion)
    }, [portionNumber, pages])

    const slicePages = (startPortion: number, endPortion: number) => {
        setPortionPages(pages.slice(startPortion, endPortion))
    }


    const changePage = (currentPage: number) => {
        dispatch(setCurrentPage(currentPage))
    }


    const changePortion = (argument: string) => {
        if (argument === 'decrement' && portionNumber >= 1) {
            setPortionNumber(portionNumber - 1)
        } else if (argument === 'increment' && (portionNumber + 1) < (pages.length / portionSize)) {
            setPortionNumber(portionNumber + 1)
        } else if (argument === 'first') {
            setPortionNumber(0)
        } else if (argument === 'last') {
            setPortionNumber((pages.length / portionSize) - 1)
        }
    }


    return (
        <div className={classes.paginator}>
            {
                portionPages.length > 0 &&
                <>
                    <span onClick={() => changePortion('first')}>
                        <i className="material-icons">first_page</i>
                    </span>
                    <span onClick={() => changePortion('decrement')}>
                        <i className="material-icons">arrow_back</i>
                    </span>

                    {
                        portionPages.map(item => {
                            return (
                                <span key={item} className={currentPage === item ? classes.active : ''}
                                      onClick={() => changePage(item)}>{item}</span>
                            )
                        })
                    }

                    <span onClick={() => changePortion('increment')}>
                        <i className="material-icons">arrow_forward</i>
                    </span>
                    <span onClick={() => changePortion('last')}>
                        <i className="material-icons">last_page</i>
                    </span>
                </>
            }

        </div>
    );
};

export default Paginator;
