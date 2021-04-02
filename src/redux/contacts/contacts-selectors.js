import { createSelector } from "@reduxjs/toolkit";

//const getLoadingContact = state => state.contacts.loadingContact;
const getFilter = store => store.contacts.filter;
const getAllContacts = store => store.contacts.items;

const getTotalContactCount = createSelector (
    [getAllContacts],
    // const contacts = getAllContacts(state);
    (contacts)=>{
    return contacts.length;}
);
const getvisibleContacts = createSelector(
    [getAllContacts, getFilter],

    (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
    },    
);


export default {
   //getLoadingContact,
    getFilter,
    getvisibleContacts,
    getTotalContactCount,
    getAllContacts,
}
