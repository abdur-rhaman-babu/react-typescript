type PersonType={
    persons:{
        first: string,
        last: string
    }
}
const Person = (props: PersonType) => {
   
    return (
        <div>
            <h1>{props.persons.first} {props.persons.last}</h1>
        </div>
    );
};

export default Person;