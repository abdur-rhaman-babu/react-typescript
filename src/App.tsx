import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";


const App = () => {
//   const persons = {
//     first: 'Abul',
//     last:'hasnat'
// }

// const personList = [
//   {
//     first:'Hasan',
//     last:'Ali'
//   },
//   {
//     first:'Badsha',
//     last:'Khan'
//   },
//   {
//     first:'Sumon',
//     last:"Miya"
//   }
// ]
  return (
    <div>
        <Status status='error'/>
        <Heading>This is a heading</Heading>
        <Oscar>
          <Heading>This is Heading2</Heading>
        </Oscar>
    </div>
  );
};

export default App;