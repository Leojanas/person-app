import React from 'react';


function PersonList(props) {

    return (
        <div>
            <h2>People</h2>
            {props.peopleArray}
            <button type='button' onClick={props.handleGetResults}>Get More Results</button>
            
        </div>
    )
}

export default PersonList;