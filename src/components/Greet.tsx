type greetType = {
    name: string,
    age: number,
    isLoggedIn: boolean
}
const Greet = (props: greetType) => {
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `${props.name} is ${props.age}`: 'Welcome'
                }
            </h1>
        </div>
    );
};

export default Greet;