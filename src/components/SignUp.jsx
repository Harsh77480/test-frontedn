
import { Button, TextField , Snackbar} from "@mui/material"
import { useState  } from "react";
import axios from 'axios';
import { Route, useNavigate } from "react-router-dom";

export function SignUp(){

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        
      e.preventDefault();
      setError('');
      if( !username || !email || !password1 || !password2 || password1 != password2){
        setError('Please Enter All Fields and Matching Passwords');
      }
      else{
        try{

          const config = {
            headers : {
              "Content-type" : "application/json",
            },
            
          };
          
          setIsLoading(1);
          const {data} = await axios.post('https://api-fb6o.onrender.com/user/register',{name : username,email : email,password : password1},config);
          setIsLoading(0);
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/join");
          // console.log(data);
        }catch(err){  
          if(err.response){
            console.log(err);
            const message = err.response.data.message;
            setError((message)?(message):'');
          }else{
            console.log(err);
          }

        }
      }

    };
    
      return (
        <div className="center" style={{height : '100vh'}}>
          {
            isLoading ? <Snackbar
            open={true}
            autoHideDuration={600}
            message={"Please wait,This might take a while....."}
            /> : <></>
          }

        {error ? <Snackbar
        open={true}
        autoHideDuration={600}
        message={error}
        /> : <></> }
        

        <form onSubmit={handleSubmit} className="card">
        

        <TextField
            label="Name"
            variant="outlined"
            name="email"
            onChange={(e)=>{setUsername(e.target.value)}}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            onChange={(e)=>{setPassword1(e.target.value)}}
            fullWidth
            margin="normal"
          />
        <TextField
            label="Confirm Password"
            variant="outlined"
            name="password"
            onChange={(e)=>{setPassword2(e.target.value)}}
            fullWidth
            margin="normal"
          />

          <Button variant="contained" color="primary" type="submit">
            Sign In
          </Button>
            
            <p onClick={()=>navigate("/login")} style={{cursor : 'pointer'}} >already registered? </p>

        </form>
        </div>
      );
}