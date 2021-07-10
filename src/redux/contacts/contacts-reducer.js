import { combineReducers } from 'redux';

import initialContacts from 'components/localStorage';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contacts-actions';

// ----------------first-step-------------------
// import types from './contacts-types';
// import contactsTest from 'data/contactsTest.json';
// import parsedContacts from 'components/localStorage';
// import stateItemNoRepeat from 'components/helpersReducer';

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

// // stateItemNoRepeat(state, action),

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

const items = createReducer(initialContacts, {
  [contactsAction.addContact]: (state, action) => [action.payload, ...state],
  [contactsAction.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
const filter = createReducer('', {
  [contactsAction.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
