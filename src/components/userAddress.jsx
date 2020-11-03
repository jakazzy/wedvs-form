import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

const  UserAddress =({next, previous, handleChange, userData})=> {

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
                <Form.Group controlId="residentialAddress">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your residential address" />
                </Form.Group>
    
                <Form.Group controlId="postalAddress">
                    <Form.Label>Postal Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Postal Address" />
                </Form.Group>
    
                <Form.Group controlId="digitalAddress">
                    <Form.Label>Digital Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Ghana Post Digital Address" />
                   
                </Form.Group>
                
                <Button variant="primary" onClick={goBack }>Previous</Button>
                <Button variant="primary" onClick={continueStep }>Continue</Button>
            </Form>
    
          </Card.Body>
        </Card>
        )
}

export default UserAddress