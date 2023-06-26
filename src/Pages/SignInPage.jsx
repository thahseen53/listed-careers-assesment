import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
//

// 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
const SignInPage = () => {
  const navigate = useNavigate();
  //     <GoogleLogin
  //   onSuccess={credentialResponse => {
  //     console.log(credentialResponse);
  //   }}
  //   onError={() => {
  //     console.log('Login Failed');
  //   }}
  // />;
  const login = () => {
    navigate("/dashboard");
  };
  return (
    // <GoogleOAuthProvider">
    <div className="lg:flex">
      <div className="w-full bg-black text-white p-5 text-center md:p-8 lg:h-screen lg:flex lg:items-center lg:w-[588px]">
        <h1 className="text-3xl font-montserrat font-bold md:text-5xl lg:w-full lg:text-[72px]">
          Board.
        </h1>
      </div>
      <div className="flex flex-col p-6 gap-6 font-lato bg-[#F5F5F5] h-screen w-full md:items-center lg:h-screen lg:items-center lg:justify-center">
        <div className="flex flex-col gap-4  lg:w-[385px]">
          <h2 className="text-2xl font-semibold font-montserrat text-center md:text-4xl lg:text-[36px] lg:font-bold lg:text-left">
            Sign In
          </h2>
          <p className="p-0  text-1xl lg:text-[16px]">
            sign in to your account
          </p>
          <div className="flex gap-2 font-lato">
            <div className="flex gap-2 items-center justify-center bg-white w-[180px] h-[30px] rounded-lg">
              <span>
                <FcGoogle />
              </span>
              <p
                className="text-sm text-gray-400 md:text-lg lg:text-base cursor-pointer"
                onClick={login}
              >
                sign in with google
              </p>
            </div>
            <div className="flex gap-2 items-center justify-center bg-white w-[180px] h-[30px] rounded-lg">
              <span>
                <FaApple className="text-gray-400" />
              </span>
              <p className="text-sm text-gray-400 md:text-lg lg:text-base">
                sign in with apple
              </p>
            </div>
          </div>
          <form className="bg-white flex flex-col p-5 rounded-lg  md:w-full md:p-10">
            <label
              htmlFor="email"
              className="text-1xl p-1 md:text-3xl lg:text-[16px]"
            >
              Enter email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#F5F5F5] p-2 ml-1 focus:bg-[#999999] outline-none rounded-lg md:p-5 md:text-2xl lg:text-[16px] lg:p-1 lg:font-semibold "
            />

            <label
              htmlFor="password"
              className="text-1xl p-1 md:text-3xl lg:text-[16px]"
            >
              Enter password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-[#F5F5F5] p-2 focus:bg-[#999999] ml-1 outline-none rounded-lg md:p-5 md:text-2xl lg:text-[16px] lg:p-1 lg:font-semibold"
            />
            <a
              href="#"
              className="p-2 text-blue-500 md:text-3xl lg:text-[16px]"
            >
              Forget password ?
            </a>
            <button className="bg-black text-white p-2 font-montserrat font-bold rounded-lg md:p-5 md:text-3xl lg:text-[16px] lg:p-1 ">
              Sign in
            </button>
          </form>

          <span className="tetx-2xl text-slate-400 md:text-3xl lg:text-[16px]">
            Don't have an account?
            <a href="#" className="text-blue-500">
              {" "}
              Register here
            </a>
          </span>
        </div>
      </div>
    </div>
    // {/* </GoogleOAuthProvider> */}
  );
};

export default SignInPage;
