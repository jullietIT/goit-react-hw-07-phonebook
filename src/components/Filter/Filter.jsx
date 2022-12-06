import React from 'react';
import { FilterWrapper, Title, Title2 } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { nanoid } from 'nanoid';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);
  const filterId = nanoid(3);

  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value)); //передаємо значення у фільтрі
  };
  return (
    <FilterWrapper htmlFor={filterId}>
      <Title2>Contacts</Title2>
      <Title>Find contact by name</Title>
      <label>
        <input
          type="text"
          id={filterId}
          value={filters}
          onChange={handleChange}
        />
      </label>
    </FilterWrapper>
  );
};

export default Filter;
