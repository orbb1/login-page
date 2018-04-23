import React from 'react';

export const FormInput = (props) => {
  return [
    <label key={1} htmlFor={props.name}>{props.label}</label>,
    <input key={2} type={props.type} name={props.name} id={props.name} value={props.value} onChange={props.handleChange} />
  ]
}