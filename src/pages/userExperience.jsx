// import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FormButton from "../components/button.component";
import PageTemplate from '../components/page_template.component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



function UserExperience({next, previous, submitData, userData}) {

    const schema = yup.object().shape({
        experience: yup.number().min(1, 'residential address should not be empty').max(150, 'username is too long'),
        currentEngineeringRole: yup.string().min(1, 'postal address should not be empty').max(150, 'username is too long'),
        placeOfWork: yup.string().min(0, 'password should be more than 8 characters').max(150, 'username is too long'),
        
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

    //    const goBack=(e)=>{
    //     e.preventDefault();
    //     previous();
    //    }

    const onSubmit = data => {

        submitData(data)
        next()
    }

    return (
       <PageTemplate userData={userData}>
           <Form onSubmit={handleSubmit(onSubmit)}
            // style={{  padding: '0 5rem 5rem 5rem' }}
            >
                <Form.Group controlId="experience">
                    <Form.Label>Years of Software Experience</Form.Label>
                    <Form.Control 
                    type="number" placeholder="2" 
                    ref={register}
                    name="experience" />
                     {errors.experience && (
                    <p className="error-message">{errors.experience.message}</p>
                    )}
                </Form.Group>
    
                <Form.Group controlId="currentEngineeringRole">
                    <Form.Label>current  Role</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Enter your current role" 
                    ref={register}
                    name="currentEngineeringRole" />
                     {errors.currentEngineeringRole && (
                    <p className="error-message">{errors.currentEngineeringRole.message}</p>
                    )}
                </Form.Group>
    
                <Form.Group controlId="placeOfWork">
                    <Form.Label>Work Place</Form.Label>
                    <Form.Control type="text" 
                     ref={register}
                    name="placeOfWork" 
                    placeholder="Enter your place of work" />
                    {errors.placeOfWork && (
                    <p className="error-message">{errors.placeOfWork.message}</p>
                    )}
                </Form.Group>
                
                {/* <Button variant="primary" onClick={goBack }>Previous</Button> */}
                <FormButton>Next</FormButton>
            </Form>
       </PageTemplate>
        )
}

export default UserExperience