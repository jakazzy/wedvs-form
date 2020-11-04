import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import PageTemplate from '../components/page_template.component';

function UserExperience({next, previous, submitData, userData}) {

    const continueStep=(e)=>{
        e.preventDefault();
        next();
       }

       const goBack=(e)=>{
        e.preventDefault();
        previous();
       }

    return (
       <PageTemplate userData={userData}>
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
       </PageTemplate>
        )
}

export default UserExperience