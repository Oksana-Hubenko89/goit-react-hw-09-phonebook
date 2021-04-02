import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { Switch} from 'react-router-dom';
import Container from '../Container';
import AppBar from '../../components/AppBar';
import { authOperations} from '../../redux/auth';
import { useDispatch,useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';



//import {contactsSelectors} from '../../redux/contacts';

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
//const isAuthenticated=useSelector(contactsSelectors.getLoadingContact);
  const isLoading = useSelector(state => state.loading);
 
  const isError = useSelector(state => state.error);
  if (isError !== null) {
    toast.error(isError)
  }
  // "Ошибка логина или регистрации"
   
    return (
      
     
        <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          {isLoading && <p>Загружаем...</p>}
        <Switch>
        <PublicRoute exact path="/" >
        <HomeView/></PublicRoute>
        <PrivateRoute path="/contacts"
              redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
        <PublicRoute path="/register" restricted
              redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
        <PublicRoute path="/login" restricted
              redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
        </Switch>
        </Suspense>
        <ToastContainer/>
        </Container>
      
      );
  }




