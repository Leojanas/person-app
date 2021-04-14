import React from 'react';
import { Link} from 'react-router-dom';
import './person.css';

const Person = (props) => {
    return (
        <div className='person group'>
            <div className='item'>
                <Link to={`/user/${props.id}`}><img src={props.person.picture.medium} alt={`Profile of ${props.person.name.first} ${props.person.name.last}`}/></Link>
            </div>
            <div className='item'>
                <p>Name: {props.person.name.title} {props.person.name.first} {props.person.name.last}</p>
                <p>Phone Number: {props.person.phone}</p>
            </div>  
        </div>
    )
}

export default Person;