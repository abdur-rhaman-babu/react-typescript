import Greet from "./components/Greet";
import Person from "./components/Person";

const App = () => {
  const persons = {
    first: 'Abul',
    last:'hasnat'
}
  return (
    <div>
      <Greet name='Abdur Rhaman' age={35} isLoggedIn ={false}/>
      <Person persons={persons}/>
    </div>
  );
};

export default App;