import { combineReducers } from 'redux';

import contactsTest from 'data/contactsTest.json';
import parsedContacts from 'components/localStorage';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from 'components/redux/contacts-actions';

// ----------------first-step-------------------
// import types from './contacts-types';

// const items = (
//   state = parsedContacts ? parsedContacts : contactsTest,
//   { type, payload },
// ) => {
//   switch (type) {
//     case types.ADD:
//       if (
//         state.some(
//           ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
//         )
//       ) {
//         alert(`${payload.name} is already in contacts`);
//         return [...state];
//       }
//       if (state.some(({ number }) => number === payload.number)) {
//         alert(`${payload.number} is already in contacts`);
//         return [...state];
//       }

//       return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
//----------------------------------------------------------------------

// ---------------second-step--------------------------------------------
const items = createReducer(parsedContacts ? parsedContacts : contactsTest, {
  [contactsAction.addContact]: (state, action) => {
    if (
      state.some(
        ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase(),
      )
    ) {
      alert(`${action.payload.name} is already in contacts`);
      return [...state];
    }
    if (state.some(({ number }) => number === action.payload.number)) {
      alert(`${action.payload.number} is already in contacts`);
      return [...state];
    }

    return [action.payload, ...state];
  },
  [contactsAction.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [contactsAction.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
