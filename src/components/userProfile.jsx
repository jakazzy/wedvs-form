import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';


const UserProfile =({next, handleChange, userData}) =>{

   const continueStep=(e)=>{
    e.preventDefault();
    next();

   }

    return (
    <Card style={{ width: "60vw", height: "65vh", margin: "5rem auto" }}>
      <Card.Body>
        {/*  form */}
        <Form >
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
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" onClick={continueStep }>Continue</Button>
        </Form>

      </Card.Body>
    </Card>
    )
}

export default UserProfile
