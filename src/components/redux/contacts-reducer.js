import { combineReducers } from 'redux';
import types from './contacts-types';
import contactsTest from 'data/contactsTest.json';
import parsedContacts from 'components/localStorage';

const items = (
  state = parsedContacts ? parsedContacts : contactsTest,
  { type, payload },
) => {
  switch (type) {
    case types.ADD:
      if (
        state.some(
          ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
        )
      ) {
        alert(`${payload.name} is already in contacts`);
        return [...state];
      }
      if (state.some(({ number }) => number === payload.number)) {
        alert(`${payload.number} is already in contacts`);
        return [...state];
      }

      return [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
