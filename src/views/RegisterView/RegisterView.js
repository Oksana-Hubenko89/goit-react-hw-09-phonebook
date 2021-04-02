import React, { useState } from 'react';
import style from './RegisterView.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authSelectors } from '../../redux/auth';

export default function RegisterView() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoadingAuth = useSelector(authSelectors.getLoadingAuth);

    const handleChangeName = ({target:{value}}) => {
    
     setName(value );
    };

    const handleChangeEmail = ({target:{value}}) => {
    
        setEmail(value );
    };

   const handleChangePassword = ({target:{value}} ) => {
    
        setPassword( value );
    };

    const handleSubmit = e => {
        e.preventDefault();
              
        if(name.trim() ===''  ){
           toast.error('Введите Имя');
        return;
         }
          if (email.trim() ===''){
            toast.error('Введите Почту ');
        return;
        }          
       if(password.trim() ===''  ){
           toast.error('Введите Пароль');
        return;
       }
        
        dispatch(authOperations.register({name,email,password}));
        setName('');
        setEmail('');
        setPassword('');
    };



        return (
            <div >
                <h1 className={style.title}>Страница регистрации</h1>
                <div >
                <form className={style.form}
                    onSubmit={handleSubmit}
                    
                        autoComplete='off'>
                        <div >
                    <label  className={style.label}>
                        Имя  
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChangeName} />
                    </label>
                        </div>
                        <div >
                    <label className={style.label}>
                        Почта  
                        <input 
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail} />
                            </label>
                        </div>
                        <div >
                    <label className={style.label}>
                        Пароль  
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChangePassword} />
                            </label>
                        </div>
                        <div >
                    <button className={style.Button} type="submit" >Зарегестрироваться</button>
                        </div>
                        {isLoadingAuth && <p>Загружаем...</p>}
                    </form>
                   </div>
            </div>
        );
   
};


