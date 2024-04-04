import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name,setChangeName]=useInputState('rasel')
    const emailState = useInputState('email@example.com');

    const handleSubmit = e => {
        console.log(emailState.value);
        e.preventDefault();

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={name}
                onChange={setChangeName}
                 name="name" placeholder="Enter your name" /><br /> */}

                <input {...emailState} type="email" name="email" /><br />

                <input type="password" name="password" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;