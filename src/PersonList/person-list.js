import React from 'react';
import Person from '../Person/person';
import people from '../people';

const PersonList = () => {
    console.log(people)
    let [peopleArray, addPerson] = React.useState([]);
    console.log(peopleArray)
    if(peopleArray.length < people.length){
        let newArray = peopleArray;
        newArray.push(<Person key={peopleArray.length} person={people[peopleArray.length]} />);
        console.log(newArray)
        addPerson(newArray);
    }

    return (
        <div>
            <h2>People</h2>
            {peopleArray}
        </div>
    )
}

export default PersonList;