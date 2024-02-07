import { useForm } from "react-hook-form";
import Btn from "../../Component/Btn";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useAxios from "../../Hooks/useAxios";

const SignUp = () => {
  const imgbbKey = "741f857d3f007eab00beef241dce3448";
  const { createUser, googleSignup, update } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxios();


  // Sign up using email and password
  const handelSignup = async (data) => {
    const res = await axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${imgbbKey}`, {image: data.image[0]},{
      headers:{
        "Content-Type":'multipart/form-data'
      }
    } )
    console.log(res.data)

    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = res?.data?.data?.url;
    const phone = data.phone;
    const address = data.address;
    return createUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      update(name, image);

      const userData = {
        name,
        email,
        image,
        phone,
        address,
      }
      axiosPublic.post('/user',userData )
      .then(res=> console.log(res.data));


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  };

  // Signup using google
  const handleGoogle = () =>{
    return googleSignup()
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      const userData = {
        name : user.displayName,
        email: user.email,
        image: user.photoURL,
        phone: user.phoneNumber,
        address: null,
      }
      axiosPublic.post('/user',userData )
      .then(res=> console.log(res.data));



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
      <div className="max-w-[800px] mx-auto my-[10%] p-6 bg-white -md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full mb-8 sm:mb-0">
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-5">Sign Up Now</h2>
            <form onSubmit={handleSubmit(handelSignup)}>
              <div className="flex flex-col space-y-2 mb-2">
                <div className="grid grid-cols-2 gap-5 ">
                  <div>
                    <input
                      className={
                        errors.name
                          ? "h-12 border-b-2 border-red-500 px-4 w-full text-lg focus:outline-none focus:border-[#15c39a]"
                          : "h-12 border-b-2 border-gray-300 w-full px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                      }
                      placeholder="Your Name"
                      type="text"
                      {...register("name", { required: "Enter Your Name" })}
                    />
                    <p className="text-red-500">{errors.name?.message} </p>
                  </div>

                  <div>
                    <input
                      className={
                        errors.email
                          ? "h-12 border-b-2 border-red-500 px-4 text-lg w-full focus:outline-none focus:border-[#15c39a]"
                          : "h-12 border-b-2 border-gray-300 w-full px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                      }
                      placeholder="Your Email"
                      type="email"
                      {...register("email", {
                        required: "Enter your email address"
                      })}
                    />
                    <p className="text-red-500">{errors.email?.message} </p>
                  </div>

                  <div>
                    <input
                      className={
                        errors.phone
                          ? "h-12 border-b-2 border-red-500 px-4 w-full text-lg focus:outline-none focus:border-[#15c39a]"
                          : "h-12 border-b-2 w-full border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                      }
                      placeholder="Phone Number"
                      type="tel"
                      {...register("phone", {
                        required: "Enter your phone number",
                      })}
                    />
                    <p className="text-red-500">{errors.phone?.message} </p>
                  </div>

                  <div>
                    <input
                      className={
                        errors.address
                          ? "h-12 border-b-2 border-red-500 w-full px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                          : "h-12 border-b-2 border-gray-300 w-full px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                      }
                      placeholder="Present Address"
                      type="text"
                      {...register("address", {
                        required: "Enter your address",
                      })}
                    />
                    <p className="text-red-500">{errors.address?.message} </p>
                  </div>


                  <input
                      type="file"
                      {...register("image")}
                      className="file-input file:border-[#15c39a] file:bg-[#15c39a] border-[#15c39a] file:text-white w-full"
                      required
                    />


                  <div>
                    <input
                      className={
                        errors.password
                          ? "h-12 border-b-2 border-red-500 w-full px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                          : "h-12 border-b-2 border-gray-300 w-full px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                      }
                      placeholder="Password"
                      type="password"
                      {...register("password", {
                        // eslint-disable-next-line no-useless-escape
                        required: "Enter a password", pattern: {value: /^(?=.*[A-Z])(?=.*[\W_]).+$/, message:"Must contain at least one capital letter and one special character."}, minLength:{value:6, message:"Must contain at least 6 digit"}
                      })}
                    />
                    <p className="text-red-500">{errors.password?.message} </p>
                  </div>
                </div>
              </div>

              {/* sign up Button */}
              <Btn btnTitle={"Sign Up"}></Btn>
            </form>
            <p className="text-sm my-4 flex justify-center">Or</p>
            <div className="grid grid-cols-2 gap-2">
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
                SIGN UP WITH GOOGLE
              </button>
              <a href="/signin">
                <button className=" border-2 border-[#0e2e50] hover:text-white hover:bg-[#0e2e50] bg-white text-[#0e2e50] font-medium rounded-lg text-base px-5 py-2.5 w-full">
                  HAVE AN ACCOUNT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
