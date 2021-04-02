import {contactsReducer} from './contacts';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authActions from '../redux/auth/auth-actions';
import logger from 'redux-logger';
import {createReducer} from '@reduxjs/toolkit';
import {
        persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, 
} from 'redux-persist';
 import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import actionsContact from '../redux/contacts/contacts-actions';
const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError
} = authActions;


const { fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter } = actionsContact;


const middleware = [
    ...getDefaultMiddleware({
    serializableCheck:{
    ignoredActions:[
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, 
        ],
    }
    }),
   logger
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token']
}

const store = configureStore({
 
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        error: createReducer(null, {
            [authActions.registerError]: (_, { payload }) => payload,
            [authActions.loginError]: (_, { payload }) => payload,
            [authActions.logoutError]: (_, { payload }) => payload,
            [authActions.getCurrentUserError]: (_, { payload }) => payload,
        }),
        loading: createReducer(false, {
            [registerRequest]: () => true,
            [registerSuccess]: () => false,
            [registerError]: () => false,
            [loginRequest]: () => true,
            [loginSuccess]: () => false,
            [loginError]: () => false,
            [logoutRequest]: () => true,
            [logoutSuccess]: () => false,
            [logoutError]: () => false,
            [getCurrentUserRequest]: () => true,
            [getCurrentUserSuccess]: () => false,
            [getCurrentUserError]: () => false,
            [addContactRequest]: () => true,
            [addContactSuccess]: () => false,
            [addContactError]: () => false,
            [deleteContactRequest]: () => true,
            [deleteContactSuccess]: () => false,
            [deleteContactError]: () => false,
            [fetchContactsRequest]: () => true,
            [fetchContactsSuccess]: () => false,
            [fetchContactsError]: () => false,
        }),
        middleware,
        devTools: process.env.NODE_ENV === 'development',
    }
});

const persistor = persistStore(store);

export default { store, persistor };


