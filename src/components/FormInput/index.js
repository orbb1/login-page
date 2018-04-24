import React from 'react';
import './FormInput.css';

export const FormInput = (props) => {
  return (
    <div className="FormInput-group">
      <label className="FormInput-label" key={1} htmlFor={props.name}>{props.label}</label>
      <input className="FormInput-input" key={2} type={props.type} name={props.name} id={props.name} value={props.value} onChange={props.handleChange} />
    </div>
  )
}