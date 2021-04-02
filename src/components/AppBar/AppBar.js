import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AppBar.module.css';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav'
import { authSelectors } from '../../redux/auth';
import PageHeading from '../../components/PageHeading';
import stylesPageHeading from "../../components/PageHeading/PageHeading.module.css";
import { CSSTransition } from "react-transition-group";

export default function AppBar() {
  const isAuthenticated= useSelector(authSelectors.getIsAuthenticated);
 return (
    <div>
      <div>
        <CSSTransition classNames={stylesPageHeading} in={true} appear timeout={500} unmountOnExit>
          <PageHeading text="Phonebook" />
        </CSSTransition>
      </div>
      <div>
        <header className={styles.header}>
          <div>
            <Navigation />
          </div>
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
      </div>
    </div>
  )
};


