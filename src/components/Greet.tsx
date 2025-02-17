type greetType = {
    name: string
}
const Greet = (props: greetType) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
};

export default Greet;