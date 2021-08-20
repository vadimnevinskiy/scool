import React, {useEffect} from 'react';
import User from "../../components/User/User";
import {UserAPI} from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setUsers} from "../../redux/actions/Users";
import { UserType } from '../../redux/types';

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(({userPage}: AppStateType) => userPage.users)

    useEffect(() => {
        UserAPI.getUsers(10, 1)
            .then(response => {
                dispatch(setUsers(response.items))
            })
    }, [])


    return (
        <div className="row">
            {
                users.map((user: UserType) => {
                    return (
                        <React.Fragment key={user.id}>
                            <User user={user} />
                        </React.Fragment>
                    )
                })
            }

        </div>
    );
};

export default Users;
