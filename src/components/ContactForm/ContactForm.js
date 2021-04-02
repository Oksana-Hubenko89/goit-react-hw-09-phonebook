
import React , {useState} from 'react';
import Container from "../Container";
import b from "../Button/Button.module.css";
import s from "./ContactForm.module.css";
import {useDispatch,useSelector } from "react-redux";
import q from '../ContactList/ContactList.module.css';
import Message from '../../components/Message';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function  ContactForm (){

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState(null);
    const contacts = useSelector(contactsSelectors.getAllContacts);
    const dispatch = useDispatch();
    const onSubmit = (name,number) => dispatch(contactsOperations.addContact(name,number));

    const errorMessage=(event)=>{
       setMessage(event);
       setTimeout(() => {
         setMessage(null)  
       }, 2500);
    }

    const handleInputChangeName = e => {
               
        setName(e.currentTarget.value);
    };
    const handleInputChangeNumber = e => {
               
        setNumber(e.currentTarget.value);
    };
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim() === '') {
            errorMessage('Введите имя контакта')
            return;
        }
        if (number.trim() === '') {
            errorMessage('Введите номер контакта')
            return;
        }
        if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
            errorMessage('Контакт существует')
            return;
        }
        onSubmit(name, number);

        setName('');
        setNumber('')
    };
    

        return (
            
        <Container>
          
          <Message message={message}/>
        
            <form  onSubmit={handleSubmit}>
                <label className={q.Contact}>
                  Name <br/> <input className={s.Input} type="text" name="name" value={name}  placeholder='Name Surname' onChange={handleInputChangeName }/>
                </label>
                <br/>
                <label className={q.Contact}>
                  Number <br/> <input className={s.Input} type="tel" name="number" value={number} placeholder='+38 ( 000 ) 000 - 00 - 00' onChange={handleInputChangeNumber}/>
                </label>
                <br/>
                <button className={b.Button} type='submit'>Add contact</button>
       
            </form>
            
       </Container>
        )
       
}

