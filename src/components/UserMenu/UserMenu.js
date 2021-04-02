import React, { useCallback }from 'react';
import styles from './UserMenu.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {authSelectors, authOperations} from '../../redux/auth'
import defaultAvatar from './default-avatar.png';
import s from '../../components/Button/Button.module.css'

export default function UserMenu() {
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(authOperations.logOut());
    }, [dispatch]
    );

    const name = useSelector(authSelectors.getUserName);


    return (
        <div className={styles.Container}>
            <img src={defaultAvatar} alt="" width="32" styles={styles.Avatar} />
            <span className={styles.Name}>Welcome, {name}</span>
            <button className={s.Button}type="button" onClick={onLogout}> Logout</button>
        </div>
    );
};
