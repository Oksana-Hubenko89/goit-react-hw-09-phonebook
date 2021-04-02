import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { Switch, BrowserRouter} from 'react-router-dom';
import Container from '../Container';
import AppBar from '../../components/AppBar';
import { authOperations} from '../../redux/auth';
import { useDispatch,useSelector } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {contactsSelectors} from '../../redux/contacts';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "home-view" */),
);


export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(authOperations.getCurrentUser());
  
  }, [dispatch]);
const isAuthenticated=useSelector(contactsSelectors.getLoadingContact);
  
    return (
      
        <BrowserRouter> 
        <Container>
          <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          
          <Switch>
            <PublicRoute exact path="/" >
            <HomeView/></PublicRoute>
             <PrivateRoute path="/contacts"
              redirectTo="/login"><ContactsView /></PrivateRoute>
              <PublicRoute path="/register" restricted
            redirectTo="/contacts"><RegisterView/></PublicRoute>
          
            <PublicRoute path="/login" restricted
                  redirectTo="/contacts"><LoginView /></PublicRoute>
            
        </Switch>

        </Suspense>
      <ToastContainer />
        </Container>
        </BrowserRouter>
      );
  }




