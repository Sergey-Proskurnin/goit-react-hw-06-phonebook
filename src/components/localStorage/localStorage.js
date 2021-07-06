const contactsLocale = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contactsLocale);
export default parsedContacts;
