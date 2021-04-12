import helpers from './helper-functions';

async function getPerson(i) {
    let person = await helpers.getPerson();
    people[i] = person;
}
let people = [];
for(let i=0; i<10; i++){
    getPerson(i)
}

export default people;
