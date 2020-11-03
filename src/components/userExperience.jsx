import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

function UserExperience({next, previous, handleChange, userData}) {

    const continueStep=(e)=>{
        e.preventDefault();
        next();
       }

       const goBack=(e)=>{
        e.preventDefault();
        previous();
       }

    return (
        <Card style={{ width: "60vw", height: "65vh", margin: "5rem auto" }}>
          <Card.Body>
            {/*  form */}
            <Form >
                <Form.Group controlId="experience">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control type="text" placeholder="Enter years of software experience" />
                </Form.Group>
    
                <Form.Group controlId="currentEngineeringRole">
                    <Form.Label>current  Role</Form.Label>
                    <Form.Control type="password" placeholder="Enter your current role" />
                </Form.Group>
    
                <Form.Group controlId="placeOfWork">
                    <Form.Label>Work Place</Form.Label>
                    <Form.Control type="text" placeholder="Enter your place of work" />
                </Form.Group>
                
                <Button variant="primary" onClick={goBack }>Previous</Button>
                <Button variant="primary" onClick={continueStep }>Continue</Button>
            </Form>
    
          </Card.Body>
        </Card>
        )
}

export default UserExperience