import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const UserProfile =({next, userData}) =>{

    const schema = yup.object().shape({
        username: yup.string().min(2, 'username is invalid').max(50, 'username is too long'),
        password: yup.string().min(8, 'password should be more than 8 characters'),
        email: yup.string().email('Invalid email'),
        // lastname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
        // phonenumber: yup.string(),
        // age: yup.number(),
        // height: yup.number(),
        // weight: yup.number(),
        // about: yup.string()
      })

    const { register,  
        handleSubmit, 
        errors 
    } = useForm({
        resolver: yupResolver(schema),
      })

//    const continueStep=(e)=>{
//     e.preventDefault();
//     next();

//    }

   const onSubmit = data => {
    console.log( 
      data,
      'what is happening now'
    )
    next()
}
 
    return (
    <Card className="shadow-lg" style={{ width: "50vw", height: "64vh", margin: "10rem auto"}}>
        <Card.Header as="h5">Featured</Card.Header>
    <Card.Header as="h4" style={{ backgroundColor: '#bef4da', color: "#7ba69c" }} className="text-center">Step - {userData.step}</Card.Header>
      <Card.Body>
        <Form onSubmit= { handleSubmit(onSubmit)} style={{  padding: '0 5rem 5rem 5rem' }} >
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" ref={register}/>
                {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" ref={register}/>
                {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" ref={register}/>
                {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
            </Form.Group>
            <div className="text-center">
                <Button className="text-center"  type="submit" style={{ 
                    width: '9rem',height: '3rem',borderRadius: '2rem', background: 'linear-gradient(to right, #065fea 0%, #07adf4 100%)'}}>Next</Button>
            </div>
        </Form>

      </Card.Body>
    </Card>
    )
}

export default UserProfile;
// deep - #065fea
// light - #07adf4
// 'linear-gradient(to right, #065fea 0%, #07adf4 100%)'
// background: 'linear-gradient(to right, #2868BB 0%, #02B8F4 100%)'