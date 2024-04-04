import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import HookForm from './components/HookForm/HookForm'
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from './components/refForm/RefForm'
// import StateFullForm from './components/StateFull/StateFullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("form sigh up form ", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("form update profile  form ", data);
  // };
  return (
    <>
      <h1>form master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h1>please sign up</h1>
            <p>and do it right know</p>
          </div>
      </ReusableForm>

      <ReusableForm
        handleSubmit={handleUpdateProfile}
        formTitle={"form Update"}
        SubmitBtnText="Update"
      >
        <div>
          <h1>update your profile</h1>
          <p>always keep update your profile</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
