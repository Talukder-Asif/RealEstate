import Btn from "../../Component/Btn";

const SignUp = () => {
  return (
    <div className="bg-[#eaf7f4] min-h-[70vh] py-12">
      <div className="max-w-[800px] mx-auto my-[10%] p-6 bg-white -md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full mb-8 sm:mb-0">
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-5">Sign Up Now</h2>
            <form>
              <div className="flex flex-col space-y-2 mb-2">
                <div className="grid grid-cols-2 gap-5 ">
                  <input
                    className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                  />
                  <input
                    className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                  />
                  <input
                    className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                  />
                  <input
                    className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#15c39a]"
                    placeholder="Present Address"
                    type="text"
                    name="address"
                  />
                </div>
              </div>

              {/* sign up Button */}
              <Btn btnTitle={"Sign Up"}></Btn>
            </form>
            <p className="text-sm my-4 flex justify-center">Or</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-bold  h-12 px-4 py-2 w-full mb-2 border-2 border-blue-600 hover:text-white hover:bg-blue-600 bg-white text-blue-600 ">
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
              <a href="/signin"><button  className=" border-2 border-[#15c39a] hover:text-white hover:bg-[#15c39a] bg-white text-[#15c39a] font-medium rounded-lg text-base px-5 py-2.5 w-full">
              HAVE AN ACCOUNT
            </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
