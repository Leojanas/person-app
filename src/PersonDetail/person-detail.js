import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom';

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
            <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
            <p>Phone Number: {person.phone}</p>
            <p>Age: {person.dob.age}</p>
            <p>Location: {person.location.city}, {person.location.country}</p>
            <img src={person.picture.medium} alt={`Profile of ${person.name.first} ${person.name.last}`}/>
            <div>
                <button onClick={() => history.push(`/user/${previous}`)}>Previous</button>
                <button onClick={() => history.push('/page/1')}>Back to List</button>
                <button onClick={() => history.push(`/user/${next}`)}>Next</button>
            </div>

        </div>
    )
}

export default PersonDetail;