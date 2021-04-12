import React from 'react';
import './person.css';

const Person = (props) => {
console.log(props)
    return (
        <div className='person'>
            <p>Name: {props.person.name.title} {props.person.name.first} {props.person.name.last}</p>
            <p>Phone Number: {props.person.phone}</p>
            <img src={props.person.picture.medium} alt={`Profile of ${props.person.name.first} ${props.person.name.last}`}/>
            <button>Details</button>
        </div>
    )
}

export default Person;