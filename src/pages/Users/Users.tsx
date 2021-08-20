import React, {useEffect} from 'react';
import User from "../../components/User/User";
import {UserAPI} from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setTotalCount, setUsers} from "../../redux/actions/Users";
import {UserType} from '../../redux/types';
import Paginator from "../../components/Paginator/Paginator";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(({userPage}: AppStateType) => userPage.users)
    const totalCount = useSelector(({userPage}: AppStateType) => userPage.totalCount)
    const currentPage = useSelector(({userPage}: AppStateType) => userPage.currentPage)
    const pageSize = useSelector(({userPage}: AppStateType) => userPage.pageSize)


    useEffect(() => {
        UserAPI.getUsers(10, currentPage)
            .then(response => {
                dispatch(setUsers(response.items))
                dispatch(setTotalCount(response.totalCount))
            })
    }, [currentPage])


    return (
        <>
            <Paginator totalCount={totalCount} currentPage={currentPage} pageSize={pageSize} />
            <div className="row">
                {
                    users.map((user: UserType) => {
                        return (
                            <React.Fragment key={user.id}>
                                <User user={user}/>
                            </React.Fragment>
                        )
                    })
                }

            </div>
        </>
    );
};

export default Users;
