import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './Filter.module.css';

const filterInputId = uuidv4();

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label htmlFor={filterInputId}>
      <span className={s.span}>Find contacts by name and number</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;
