import contactsTest from 'data/contactsTest.json';

const contactsLocale = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contactsLocale);
const initialContacts = parsedContacts ? parsedContacts : contactsTest;

export default initialContacts;
