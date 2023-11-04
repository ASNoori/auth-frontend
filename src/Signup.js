import {React,useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import API_URL from './config/global';

const Signup = () => {
    const[FormData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    });
    const handleChange=(e)=>{
         const{name,value} = e.target;
         setFormData({...FormData,[name]:value})
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
        const response = await axios.post(`${API_URL}/signin/verify`,FormData);
        console.log(response);
        if(response.data === true){
            alert('Registration link sent to your emailid');
        } else if(response.data === false){
            alert('User already exists');
        }
        }catch(err){
            console.error('Error During Registration',err);
        }
    }
  return (
    <Container>
        <h1>Registration Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={FormData.name} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={FormData.email} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={FormData.password} onChange={handleChange} required/>
            </Form.Group>
            <Button variant='primary' type='submit'>Register</Button>
            <p>Already have an email?<Link to='/'>Login</Link></p>
        </Form>
    </Container>
  )
}

export default Signup