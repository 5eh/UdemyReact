import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'yoooo'
  })

  const [name, setName] = useState('peter')
  const [age, setAge] = useState('43')
  const [message, setMessage] = useState('siiiooo')
  
  const changeMessage = () => {

    setPerson({...person, age: '67', name: 'Watsoo'});
  }

  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>
      Change message
    </button>
    
  </>;
};

export default UseStateObject;
