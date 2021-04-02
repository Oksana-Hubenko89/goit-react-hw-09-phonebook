import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {

  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
  <nav>
    <div>
      <div>
    <NavLink
      to="/" exact
       className={styles.link}
       activeClassName={styles.activeLink}
      >
            Главная
    </NavLink>
          
</div>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}>
        Заметки
      </NavLink>
      )}
      </div>
  </nav>
);}


