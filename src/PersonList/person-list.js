import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom';


function PersonList(props) {
    let history = useHistory();
    let match = useRouteMatch();
    let [page, setPage] = React.useState(1)
    function prevPage(){
        if(page !== 1){
            setPage(page -1);
            history.push(`/page/${page}`)
            
        }
    }
    function nextPage(){
        if((props.peopleArray.length /10) > page){
            setPage(page + 1);
            history.push(`/page/${page}`)
        }
    }
    let start = (page*10) - 10;
    let fullResults = props.peopleArray;
    let results =
        fullResults
        .filter((person, index) => {
            console.log(index)
            return index >= start })
        .filter((person,index) => index < 10);

    console.log(fullResults);
    console.log(results);
    return (
        <div>
            <h2>People</h2>
            {results}
            <p>Page {page}</p>
            <button onClick={prevPage}>Previous Page</button>
            <button type='button' onClick={props.handleGetResults}>Get More Results</button>
            <button onClick={nextPage}>Next Page</button>
            
        </div>
    )
}

export default PersonList;