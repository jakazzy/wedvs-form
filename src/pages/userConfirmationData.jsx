import Button from "react-bootstrap/Button";


const UserConfirmationData=({previous, handleChange, userData}) =>{

    const goBack=(e)=>{
        e.preventDefault();
        previous();
       }
    return (
        <div>
            Hello world
            <Button variant="primary" onClick={goBack }>Previous</Button>
        </div>
    )
}

export default UserConfirmationData