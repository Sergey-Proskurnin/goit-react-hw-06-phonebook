import React from 'react';

import ElementContactList from 'components/ElementContactList';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      <ElementContactList />
    </ul>
  );
};

export default ContactList;
