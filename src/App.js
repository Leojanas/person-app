import React from 'react';
import {Route} from 'react-router-dom';
import PersonList from './PersonList/person-list';
import PersonDetail from './PersonDetail/person-detail';
import Person from './Person/person';
import people from './people';
import helpers from './helper-functions';
import Home from './Home/home';

function App() {
  let initialArray = [];
  for(let i=0; i<people.length; i++){
      initialArray.push(<Person key={i} id={i} person={people[i]}/>)
  }
  let [peopleArray, setPeopleArray] = React.useState(initialArray);
   
  async function handleGetResults() {
      let person = await helpers.getPerson();
      let newArray = peopleArray.map(obj => ({...obj}));
      newArray.push(<Person key={peopleArray.length} id={peopleArray.length} person={person} />);
      setPeopleArray(newArray);
  }
  return (
    <main className='App'>
      <Route 
        exact path={'/'}
        component={Home}
      />
      <Route
        exact path={'/page/:page'}
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
