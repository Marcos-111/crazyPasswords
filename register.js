import React, {useState} from "react";
import axios from 'axios';
 

function Register() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const [setLoginStatus] = useState("");

    const register = () => {
        Axios.post("https://localhost/3001/register", {
            username: usernameReg,
            password: passwordReg,

        }).then((response) => {
            console.log(response);
        });
    };

    const login = () => {
        Axios.post("https://localhost/3001/register", {
            username: username,
            password: password,

        }).then((response) => {

            if (response.data.message) {
                setLogStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }
        });
    };

    return (
        <div>
            <div>
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }} />
                <label>Password</label>
                <input type="text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button onClick={register}>Register</button>
            </div>
            <div>
                <h1>Login</h1>
                <div>
                    <label>Username</label>
                    <input type="text"
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }} />
                    <label>Password</label>
                    <input type="text"
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                    <button>Login</button>
                </div>
                <h1>{setLoginStatus}</h1>
            </div>
        </div>
    )
}

export default Register