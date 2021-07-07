import contactsReducer from './contacts/contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';

// ----------------first-step-------------------
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
//----------------------------------------------------------------------

// ---------------second-step--------------------------------------------
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
