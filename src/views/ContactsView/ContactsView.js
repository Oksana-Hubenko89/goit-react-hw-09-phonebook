import React,{useState,useEffect} from 'react'
import ContactList from '../../components/ContactList';
import s from '../../components/ContactList/ContactList.module.css';
import ContactForm from '../../components/ContactForm';
import {CSSTransition} from "react-transition-group";
import Filter from '../../components/Filter ';
import StyleFilter from '../../components/Filter /Filter.module.css';
import { useSelector,useDispatch} from "react-redux";
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactsView() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getTotalContactCount);
  const isloadingContacts = useSelector(contactsSelectors.getLoadingContact);
  const [, setError] = useState(false);
  const [message, ] = useState('');
   
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
 
  const handleSubmit = () => {
         setError(true)
    };
  const resetError=()=>{
    setError(false)
  };
  
  
    return (
          <>
          <ContactForm onSubmitContact={()=>{handleSubmit(message)}} onResetError={()=>{resetError()}}/>
          <form><h2 classNames={s.Title}>Contacts</h2>
          <CSSTransition classNames={StyleFilter} in={contacts >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
          </CSSTransition>
          </form>
        {isloadingContacts && <p>Загружаем...</p>}
          <ContactList /> 
          </>  
    ) 
};

