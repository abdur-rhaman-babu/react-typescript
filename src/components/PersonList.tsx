type PersonListType = {
    persons:{
        first:string,
        last:string
    }[]
}
const PersonList = (props: PersonListType) => {
    return (
        <div>
            {
                props.persons.map(person=><div key={person.first}>
                    <h1>{person.first} {person.last}</h1>
                </div>)
            }
        </div>
    );
};

export default PersonList;