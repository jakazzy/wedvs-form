import React from 'react'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import PageTemplate from '../components/page_template.component';
import FormButton from '../components/button.component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const  UserAddress =({ next, previous, submitData, userData})=> {

    const schema = yup.object().shape({
        residentialAddress: yup.string().min(1, 'residential address should not be empty').max(150, 'username is too long'),
        postalAddress: yup.string().min(1, 'postal address should not be empty').max(150, 'username is too long'),
        digitalAddress: yup.string().min(0, 'password should be more than 8 characters').max(150, 'username is too long'),
        
      })

    const { register,  
        handleSubmit, 
        errors 
    } = useForm({
        resolver: yupResolver(schema),
      })

    // const continueStep=(e)=>{
    //     e.preventDefault();
    //     next();
    //    }

    const onSubmit = data => {
        console.log( 
          data,
          'what is happening now'
        )
        submitData(data)
        next()
    }

       const goBack=(e)=>{
        e.preventDefault();
        previous();
       }
    return (
        <PageTemplate userData= {userData}>
            <Form onSubmit={handleSubmit(onSubmit)}
            // style={{  padding: '0 5rem 5rem 5rem' }}
            >
                <Form.Group controlId="residentialAddress">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control 
                    style={{ resize: 'none'}}
                    type="text" 
                    as="textarea" 
                    name="residentialAddress" 
                    ref={register} rows={2} 
                    placeholder="Enter your residential address" />
                    {errors.residentialAddress && (
                    <p className="error-message">{errors.residentialAddress.message}</p>
                    )}
                </Form.Group>
    
                <Form.Group controlId="postalAddress">
                    <Form.Label>Postal Address</Form.Label>
                    <Form.Control 
                    type="text"  
                    style={{ resize: 'none'}}
                    as="textarea" rows={2} 
                    ref={register} 
                    name="postalAddress" 
                    placeholder="Enter your Postal Address" />
                    {errors.postalAddress && (
                    <p className="error-message">{errors.postalAddress.message}</p>
                    )}
                </Form.Group>
    
                <Form.Group controlId="digitalAddress">
                    <Form.Label>Digital Address</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="digitalAddress" 
                    ref={register} 
                    placeholder="Enter your Ghana Post Digital Address" />
                    {errors.digitalAddress && (
                    <p className="error-message">{errors.digitalAddress.message}</p>
                    )}
                </Form.Group>
                
                <Button variant="primary" onClick={goBack }>Previous</Button>
                <FormButton>Next</FormButton>
            </Form>
        </PageTemplate>
        )
}

export default UserAddress