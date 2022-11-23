import React from 'react'
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import '../css/FormInput.css'

export default function FormInput(props) {

  const {label, errorMsg, onChange, ...inputData} = props

  const [focus, setFocus] = useState(false)

  const handleFocus = (event) => {
        setFocus(true)
  }


  return (
    <Col className='col-input'>
        <label>{label} <span className='required-field'>*</span></label>
        <input className='form-input' {...inputData} onChange={onChange} onBlur={handleFocus} focused={focus.toString()}/>
        <span className='form-error'>{errorMsg}</span>
    </Col>
  )
}
