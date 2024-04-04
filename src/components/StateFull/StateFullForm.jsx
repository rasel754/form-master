import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail]=useState(null);
    const [name, setName]=useState(null);
    const [password, setPassword]=useState(null);
    const [error,setError]=useState('');

    const handleSubmit =e => {
        e.preventDefault();
        if(password.length<6){
            setError('Password must be at least 6 characters');
        }
        else{
            setError('');
            console.log(email ,name, password);
        }
    }

    const handleEmailChange =e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleNameChange =e => {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handlePasswordChange =e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                 type="text" name="name" placeholder="Enter your name" /><br />
                <input
                onChange={handleEmailChange}
                 type="email" name="email" /><br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" />
                <input type="submit" value="submit" />
                {
                    error && <p >{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;