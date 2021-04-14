import React from 'react';
import {useHistory} from 'react-router-dom';
import './person.css';

const Person = (props) => {
let history = useHistory();
    return (
        <div className='person'>
            <p>Name: {props.person.name.title} {props.person.name.first} {props.person.name.last}</p>
            <p>Phone Number: {props.person.phone}</p>
            <img src={props.person.picture.medium} alt={`Profile of ${props.person.name.first} ${props.person.name.last}`}/>
            <button onClick={() => history.push(`/user/${props.id}`)}>Details</button>
        </div>
    )
}

export default Person;