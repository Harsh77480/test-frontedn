
import { Button, TextField , Snackbar} from "@mui/material"
import { useState  } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        
      e.preventDefault();
      setError('');
      if( !email || !password ){
        setError('Please Enter All Fields');
      }
      else{
        try{

          const config = {
            headers : {
              "Content-type" : "application/json",
            },
            
          };

          setIsLoading(1);
          const {data} = await axios.post('https://api-fb6o.onrender.com/user/login',{email,password},config);
          setIsLoading(0);

          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/join");
          console.log(data);
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
            onChange={(e)=>{setPassword(e.target.value)}}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          
        </form>
        </div>
      );
}