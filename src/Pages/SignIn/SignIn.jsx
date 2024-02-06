import { useForm } from "react-hook-form";
import Btn from "../../Component/Btn";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {


  const {login, googleSignup} = useContext(AuthContext);
// initialize rect hook form
  const {register, handleSubmit, formState: { errors }} = useForm();
  
  // Handle signin using btn
  const onSubmit = (data) => {
    console.log(data)
    return login(data.email, data.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
  }

// handle signin using google
const handleGoogle = () =>{
  return googleSignup()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(token, user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...


    console.log(errorCode, errorMessage, email, credential);
  }); 
}


  return (
    <div className="bg-[#eaf7f4] min-h-[70vh] py-12">
      <div className="max-w-[800px] mx-auto mt-[10%] p-6 bg-white -md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-5">Sign in Now</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex flex-col space-y-2">
                  <input
                    className={errors.password? "h-12 border-b-2 border-red-500 px-4 text-lg focus:outline-none focus:border-[#15c39a]": "h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"}
                    placeholder="Your Email"
                    type="email"
                    {...register("email", { required: "Enter Your Email" })}
                  />
                  <p className="text-red-500">{errors.email?.message} </p>
                  <input
                    className={errors.password? "h-12 border-b-2 border-red-500 px-4 text-lg focus:outline-none focus:border-[#15c39a]": "h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"}
                    placeholder="Password"
                    type="password"
                    {...register("password", { required: "Enter Your Password" })}
                  />
                  <p className="text-red-500">{errors.password?.message} </p>
                </div>
              </div>
              {/* Login Button */}

              <Btn btnTitle={"Log in"}></Btn>
            </form>
            <p className="text-sm mt-6 flex gap-2">
              Did you{" "}
              <a className="text-blue-600" href="#">
                {" "}
                forget your password?{" "}
              </a>
            </p>
          </div>
          {/* Right side content */}
          <div className="w-full sm:w-1/2">
            <p className="text-sm mb-6">
              If you don&apos;t already have an account click the button below
              to create your account.
            </p>
            <a href="/signup"><button  className=" border-2 border-[#0e2e50] hover:text-white hover:bg-[#0e2e50] bg-white text-[#0e2e50] font-medium rounded-lg text-base px-5 mt-5 py-2.5 w-full">
              CREATE ACCOUNT
            </button></a>
            <p className="text-center my-4">OR</p>
            <button onClick={handleGoogle} className="inline-flex items-center justify-center rounded-md text-sm font-bold  h-12 px-4 py-2 w-full mb-2 border-2 border-blue-600 hover:text-white hover:bg-blue-600 bg-white text-blue-600 ">
              <svg
                className="w-6 h-6 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              SIGN IN WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
