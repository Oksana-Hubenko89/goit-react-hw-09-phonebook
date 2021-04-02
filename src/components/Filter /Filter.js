import React from 'react';
import Container from "../Container";
import { useSelector,useDispatch } from "react-redux";
import s from "../ContactForm/ContactForm.module.css";
import { contactsSelectors,contactsActions } from '../../redux/contacts';

export default function Filter(){
    const value = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();
    const onChange = event => dispatch(contactsActions.changeFilter(event.target.value));

  return(  <Container>
        <form>
    <label styles={s.contact}>
        Find contacts by name <br/>
        <input styles={s.Input} value={value} type="text" placeholder='Name or Surname' onChange={onChange} />
            </label>
            </form>
</Container>)
};


