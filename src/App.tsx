import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

const App = () => {
  const persons = {
    first: 'Abul',
    last:'hasnat'
}

const personList = [
  {
    first:'Hasan',
    last:'Ali'
  },
  {
    first:'Badsha',
    last:'Khan'
  },
  {
    first:'Sumon',
    last:"Miya"
  }
]
  return (
    <div>
      <Greet name='Abdur Rhaman' age={35} isLoggedIn ={false}/>
      <Person persons={persons}/>
      <PersonList persons={personList}/>
    </div>
  );
};

export default App;