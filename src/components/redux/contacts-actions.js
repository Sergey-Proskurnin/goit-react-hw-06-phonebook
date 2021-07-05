import types from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

// formAddContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const contact = {
//       name: name,
//       number: number,
//       id: uuidv4(),
//     };
//     contacts.some(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
//     )
//       ? alert(`${name} is already in contacts`)
//       : contacts.some(({ number }) => number === contact.number)
//       ? alert(`${number} is already in contacts`)
//       : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});
export default { addContact, deleteContact };
