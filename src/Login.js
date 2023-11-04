import {React,useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import API_URL from './config/global';

const Login = () => {
    const[FormData,setFormData]=useState({
        email:'',
        password:''
    });

    const navigate = useNavigate();
    const handleChange=(e)=>{
         const{name,value} = e.target;
         setFormData({...FormData,[name]:value})
    }
    const handleSubmit =async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`${API_URL}/login`,FormData);
            console.log(response);
            if(response.data ==='Invalid Username or Password'){
                alert('Invalid Username or Password');
            } else if(response.data ==='Server Busy'){
                alert('Verify your email id');
            }else if(response?.status){
                localStorage.setItem('userInfo',JSON.stringify(response.data));
                navigate('/home');
            }
            }catch(err){
                console.error('Error During Login',err);
            }
    }
  return (
    <Container>
        <h1>Login Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={FormData.email} onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={FormData.password} onChange={handleChange} required/>
            </Form.Group>
            <Button variant='primary' type='submit'>Login</Button>
            <p>New here?<Link to='/signup'>Signup</Link></p>
        </Form>
    </Container>
  )
}

export default Login