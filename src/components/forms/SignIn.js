import { useState, useEffect } from "react";
import config from "../../config/config";
import axios from 'axios';
const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setIsSideBarOpen} = useAppContext();

    const signIn = async () => {
        const api = `${config.apiUrl}auth/login`;

        const response = await axios.post(api, {
            username: userName,
            password: password
        })
        .then(res=>res)
        .catch(e=> {
            console.log(e);
        })

        const token = response.data.token;

        if (!token) {
            console.log('Error');
        }

        setIsSideBarOpen('false');
        

        console.log('login ', response.data);

    }
  return (
    <div>
      <h2>Sign In</h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Username
        </label>
        <input
          type="text"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <button onClick={signIn} type="button" class="btn btn-primary">Log In</button>

    </div>
  );
};

export default SignIn;
