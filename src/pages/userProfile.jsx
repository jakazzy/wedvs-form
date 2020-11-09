import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormButton from "../components/button.component";
import PageTemplate from '../components/page_template.component'
import './userProfile.styles.css'


const UserProfile =({next, userData, submitData}) =>{

    const schema = yup.object().shape({
        username: yup.string().min(2, 'username is invalid').max(50, 'username is too long'),
        password: yup.string().min(8, 'password should be more than 8 characters'),
        email: yup.string().email('Invalid email'),
      })

    const { register,  
        handleSubmit, 
        errors 
    } = useForm({
        resolver: yupResolver(schema),
      })


   const onSubmit = data => {
    submitData(data)
    next()
}
 
    return (
      <PageTemplate userData= {userData}>
        <Form onSubmit= { handleSubmit(onSubmit)} 
        // style={{  padding: '0 5rem 5rem 5rem' }}
         >
            <Form.Group  controlId="username">
                <Form.Label  >Username</Form.Label>
                
                <Form.Control 
                type="text" 
                placeholder="Enter username" 
                name="username" 
                ref={register}/>
                {errors.username && (
                <p className="error-message">{errors.username.message}</p>
                )}
               
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password" 
                ref={register}/>
                {errors.password && (
                <p className="error-message">{errors.password.message}</p>
                )}
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name="email" ref={register}/>
                {errors.email && (
                <p className="error-message">{errors.email.message}</p>
                )}
            </Form.Group>
            <FormButton>Next</FormButton>
        </Form>
      </PageTemplate>
    
    )
}

export default UserProfile;
// deep - #065fea
// light - #07adf4
// 'linear-gradient(to right, #065fea 0%, #07adf4 100%)'
// background: 'linear-gradient(to right, #2868BB 0%, #02B8F4 100%)'