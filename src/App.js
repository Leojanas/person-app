import React from 'react';
import {Route, useRouteMatch, useHistory} from 'react-router-dom';
import PersonList from './PersonList/person-list';
import PersonDetail from './PersonDetail/person-detail';
import Person from './Person/person';
import people from './people';
import helpers from './helper-functions';

function App() {
  let match = useRouteMatch();
  let history = useHistory();
  let initialArray = [];
  for(let i=0; i<people.length; i++){
      initialArray.push(<Person key={i} id={i} person={people[i]}/>)
  }
  let [peopleArray, setPeopleArray] = React.useState(initialArray);
   
  async function handleGetResults() {
      let person = await helpers.getPerson();
      let newArray = peopleArray.map(obj => ({...obj}));
      console.log(newArray)
      newArray.push(<Person key={peopleArray.length} id={peopleArray.length} person={person} />);
      setPeopleArray(newArray);
  }
  return (
    <main className='App'>

      <Route
        path={'/page/:page'}
        render={() => <PersonList peopleArray={peopleArray} handleGetResults={handleGetResults}/>} 
      />
      <Route 
        path={'/user/:id'}
        render={() => <PersonDetail peopleArray={peopleArray}/>}
      />
        
    </main>
  );
}

export default App;
