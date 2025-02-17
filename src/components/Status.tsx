type StatusProps={
    status: 'loading' | 'success' | 'error'
}
const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'loading...'
    }else if(props.status === 'success'){
        message = 'Data Fetch Successfully'
    }else if(props.status === 'error'){
        message = 'an error occurs'
    }
    return (
        <div>
            <h1>Status: {message}</h1>
        </div>
    );
};

export default Status;