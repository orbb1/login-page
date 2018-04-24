import React from 'react';
import './ErrorMessage.css';

export const ErrorMessage = (props) => {
  return (
    <div className="ErrorMessage-wrapper">
        <p className="ErrorMessage-paragraph">{props.message}</p>
    </div>
  )
}