import React from 'react'
// import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import PageTemplate from '../components/page_template.component';
import FormButton from '../components/button.component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import swal from 'sweetalert';

const  UserPortfolio =({ next, previous, submitData, userData})=> {

    const schema = yup.object().shape({
        porfolio: yup.string().min(1, 'provide URLS to your projects').max(150, 'username is too long'),
        expectations: yup.string().min(0 , 'postal address should not be empty').max(150, 'username is too long'),   
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
  
        submitData(data)

        swal({
            title: "You are awesome!",
            text: "Form has been successfully submitted!",
            icon: "success",
          });
        
    }

    //    const goBack=(e)=>{
    //     e.preventDefault();
    //     previous();
    //    }
    return (
        <PageTemplate userData= {userData}>
            <Form onSubmit={handleSubmit(onSubmit)}
            // style={{  padding: '0 5rem 5rem 5rem' }}
            >
                <Form.Group controlId="portfolio">
                    <Form.Label>"Portfolio URLs"</Form.Label>
                    <Form.Control 
                    style={{ resize: 'none'}}
                    type="text" 
                    as="textarea" 
                    name="portfolio" 
                    ref={register} rows={2} 
                    placeholder="Provide URL to recent projects" />
                    {errors.portfolio && (
                    <p className="error-message">{errors.portfolio.message}</p>
                    )}
                </Form.Group>
    
                <Form.Group controlId="expectations">
                    <Form.Label>What are your expectations</Form.Label>
                    <Form.Control 
                    type="text"  
                    style={{ resize: 'none'}}
                    as="textarea" rows={2} 
                    ref={register} 
                    name="expectations" 
                    placeholder="Kindly let us know your expectations" />
                    {errors.expectations && (
                    <p className="error-message">{errors.expectations.message}</p>
                    )}
                </Form.Group>
                {/* <Button variant="primary" onClick={goBack }>Previous</Button> */}
                <FormButton>Confirm and Save</FormButton>
            </Form>
        </PageTemplate>
        )
}

export default UserPortfolio