import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom';
import './person-detail.css';

const PersonDetail = (props) => {
    let history = useHistory();
    let match = useRouteMatch();
    let previous = parseInt(match.params.id) - 1;
    let next = parseInt(match.params.id) + 1;
    if(parseInt(match.params.id) === 0){
        previous = parseInt(props.peopleArray.length) - 1;
    }
    if(parseInt(match.params.id) === (props.peopleArray.length -1)){
        next = 0;
    }
    let person = props.peopleArray[match.params.id].props.person;
    return (
        <div className='person-detail'>
            <div className='img-container'>
                <img src={person.picture.large} alt={`Profile of ${person.name.first} ${person.name.last}`}/>
            </div>
            <h2 className='center'>{person.name.title} {person.name.first} {person.name.last}</h2>
            <p className='center'>Phone Number: {person.phone}</p>
            <p className='center'>Email Address: {person.email}</p>
            <p className='center'>Age: {person.dob.age}</p>
            <p className='center'>Location: {person.location.city}, {person.location.country}</p>
            
            <div className='buttons'>
                <button onClick={() => history.push(`/person-app/user/${previous}`)}>Previous</button>
                <button onClick={() => history.push('/person-app/page/1')}>Back to List</button>
                <button onClick={() => history.push(`/person-app/user/${next}`)}>Next</button>
            </div>

        </div>
    )
}

export default PersonDetail;