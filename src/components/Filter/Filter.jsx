// import React, { Component } from 'react';

export const Filter = ({ value, onChange }) => (
  <>
    <lable>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </lable>
  </>
);
