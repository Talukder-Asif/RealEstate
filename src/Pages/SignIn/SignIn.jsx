import Btn from "../../Component/Btn";

const SignIn = () => {
  return (
    <div className="bg-[#eaf7f4] min-h-[70vh] py-12">
      <div className="max-w-[800px] mx-auto mt-[10%] p-6 bg-white -md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-5">Sign in Now</h2>
            <form>
              <div className="flex flex-col space-y-2 mb-2">
                <div className="flex flex-col space-y-2">
                  <input
                    className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#0e2e50]"
                    placeholder="Your Email"
                    type="email"
                  />
                  <input
                    className="h-12 border-b-2 border-gray-300 px-4 text-lg focus:outline-none focus:border-[#0e2e50]"
                    placeholder="Password"
                    type="password"
                  />
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
              SIGN IN WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
