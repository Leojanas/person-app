import React from 'react';
import {useRouteMatch, useHistory} from 'react-router-dom';
import './person-list.css';


function PersonList(props) {
    let history = useHistory();
    let match = useRouteMatch();
    if(!match.params.page){
        history.push('/page/1')
    }
    let [page, setPage] = React.useState(1)
    function prevPage(){
        if(parseInt(page) !== 1){
            history.push(`/page/${page - 1}`)
            setPage(page -1);

        }
    }
    function nextPage(){
        if((props.peopleArray.length /10) > page){
            history.push(`/page/${page + 1}`)
            setPage(page + 1);
            
        }
    }
    let start = (page*10) - 10;
    let fullResults = props.peopleArray;
    let results =
        fullResults
        .filter((person, index) => index >= start )
        .filter((person, index) => index < 10);
    return (
        <div>
            <h2 className='center'>Users</h2>
            {results}
            <p className='center'>Page {page}</p>
            <div className='buttons'>
                <button onClick={prevPage}>Previous Page</button>
                <button type='button' onClick={props.handleGetResults}>Get More Results</button>
                <button onClick={nextPage}>Next Page</button>
            </div>

            
        </div>
    )
}

export default PersonList;