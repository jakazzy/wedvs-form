import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';


const UserProfile =({next, handleChange, userData}) =>{

   const continueStep=(e)=>{
    e.preventDefault();
    next();

   }
 
    return (
    <Card className="shadow-lg" style={{ width: "50vw", height: "64vh", margin: "10rem auto"}}>
        <Card.Header as="h5">Featured</Card.Header>
    <Card.Header as="h4" style={{ backgroundColor: '#bef4da', color: "#7ba69c" }} className="text-center">Step - {userData.step}</Card.Header>
      <Card.Body>
        {/*  form */}
        <Form style={{  padding: '0 5rem 5rem 5rem' }} >
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <div className="text-center">
                <Button className="text-center" onClick={continueStep } style={{ 
                    width: '7rem',height: '3rem',borderRadius: '2rem', background: 'linear-gradient(to right, #065fea 0%, #07adf4 100%)'}}>Next</Button>
            </div>
        </Form>

      </Card.Body>
    </Card>
    )
}

export default UserProfile
// deep - #065fea
// light - #07adf4
// 'linear-gradient(to right, #065fea 0%, #07adf4 100%)'
// background: 'linear-gradient(to right, #2868BB 0%, #02B8F4 100%)'