// import React, { Component } from 'react';
import React from 'react';
import { FilterWrapper, Title, Title2 } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getStatusFilter);

  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value)); //передаємо значення у фільтрі
  };
  return (
    <FilterWrapper>
      <Title2>Contacts</Title2>
      <Title>Find contact by name</Title>
      <label>
        <input type="text" onChange={handleChange} />
      </label>
    </FilterWrapper>
  );
};

export default Filter;
