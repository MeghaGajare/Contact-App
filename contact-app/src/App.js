import React, {useState,useEffect} from 'react';
import './App.css';
import './components/AddContact.js';
import AddContact from './components/AddContact.js';
import Header from './components/Header.js';
import ContactList from './components/ContactList.js';
// import * as uuid from 'uuid'

function App() {

  const LOCAL_STORAGE_KEY = 'Contacts_key';

  const [contacts,setContacts] = useState([]);
  const addContactHandler =(contact)=>{
     console.log('contact: ',contact);
     setContacts([...contacts,{ ...contact}]);  
  }

  useEffect(()=>{
    const retrieveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    if(retrieveItems) setContacts(retrieveItems);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    console.log('i m in useEffect');
  },[contacts]);


  return (
    <>

        <div   >
       <Header/>
       <AddContact addContactHandler = {addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
    </>
  );
}

export default App;
