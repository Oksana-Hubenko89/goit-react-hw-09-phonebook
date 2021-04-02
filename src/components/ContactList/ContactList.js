import React from 'react';
import s from "./ContactList.module.css";
import b from '../Button/Button.module.css';
import Container from "../Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useDispatch,useSelector } from 'react-redux';
import {contactsSelectors, contactsOperations} from '../../redux/contacts/';

export default function ContactList() {

  const contacts = useSelector(contactsSelectors.getvisibleContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

  return (
    
    <Container>
   <form>
                  <TransitionGroup component="ul" className={s.List} >
              
            {contacts.map(({ id, name, number }) =>
                <CSSTransition key={id} classNames={s} timeout={250}>
                <li className={s.Contact} key={id} ><span>{name}: {number} </span>
                  <button className={b.Button} type="button" onClick={() => onDelete(id)} >Delete</button>
                </li>
                 </CSSTransition>
            )}           
           
            </TransitionGroup>
         
       </form>   
  </Container>);}
 
// const mapStateToProps = (state) => ({
//  contacts:contactsSelectors.getvisibleContacts(state),
 
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: id =>dispatch(contactsOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList); 