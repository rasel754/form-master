
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submit');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" /><br />
                <input type="email" name="email" /><br />
                <input type="text" name="phone" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;