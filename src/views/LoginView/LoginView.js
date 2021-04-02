import React, { useState} from 'react';
import styles from './LoginView.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../../components/Button/Button.module.css'


export default function LoginView() {
    const dispatch = useDispatch();
       
    const [email, setEmail] = useState('');

    const handleChangeEmail = ({target:{value}}) => {
    
        setEmail(value);
    };

    const [password, setPassword] = useState('');

    const handleChangePassword = ({target:{value}} ) => {
    
        setPassword( value );
    };

    const handleSubmit = e => {
        e.preventDefault();
              
        if (email.trim() ===''){
            toast.error('Введите email ');
        return;
        }          
       if(password.trim() ===''  ){
           toast.error('Введите password');
        return;
         }
        dispatch(authOperations.logIn({email,password}));
       
        setEmail('');
        setPassword('');
    };


        return (
            <div>
                <h1 className={styles.Title}>Страница логина</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles.Form}
                    autoComplete='off'>
                    <label className={styles.Label}>
                        Почта <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail} />
                    </label>
                    <label className={styles.Label}>
                        Пароль <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChangePassword}/>
                    </label>
                    <button className={s.Button} type="submit" >Войти</button>
                    </form>
            </div>
        );
    
};
// 