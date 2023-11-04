import React ,{useState,useEffect} from 'react'
import { Container,Button } from 'react-bootstrap'
import API_URL from './config/global';
import axios from 'axios';

const Home = () => {
   const [res,setRes] = useState({});
  useEffect(()=>{
   const user = JSON.parse(localStorage.getItem('userInfo'));
   console.log(user);
   if(user && user.token){
    getData(user.token);
   }
  },[])
  const getData = async(token) =>{
    try{
      const config = {
        headers: {
          Authorization: token,
        },
      };
      console.log(config);
     const response = await axios.get(`${API_URL}/home`,config);
     console.log(response.data);
     if(response.data==='Invalid Token'){
      alert('login again');
     } else if(response.data === 'Server Busy'){
      alert('unauthorized access');
     }else if(response?.status){
      setRes(response.data);
     }
    }catch(err){
        console.log(err);
    } 
  }
  return (
    <Container>
        <h1>Welcome to our website</h1>
        <p>We are here to serve you {res.name}</p>
        <Button>Get Started</Button>
    </Container>
  )
}

export default Home