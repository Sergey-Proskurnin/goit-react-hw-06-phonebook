import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// ----------------first-step-------------------
// import types from './contacts-types';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
//--------------------------------------------------------------------------------

// ---------------second-step-----------------------------------------------------
const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const contactsAction = { addContact, deleteContact, changeFilter };
export default contactsAction;
