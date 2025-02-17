type greetType = {
    name: string,
    age?: number,
    isLoggedIn: boolean
}
const Greet = (props: greetType) => {
    const {age = 35} = props;
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? `${props.name} is ${age}`: 'Welcome'
                }
            </h1>
        </div>
    );
};

export default Greet;