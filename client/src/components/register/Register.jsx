
import React from 'react';
import EmailInput from './EmailInput'; 
import UsernameInput from './UsernameInput'; 
import PasswordInputs from './PasswordInputs'; 
import { useNavigate } from 'react-router-dom';

function SignUpForm({ onSubmit }) {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, username, password, confirmPassword, acceptTerms });
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navega a la página de registro cuando se hace clic en "Create Account"
  };

  return (
    <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col grow px-5 mt-4 text-xl text-white max-md:mt-8">
              <h1 className="self-center text-5xl font-extrabold tracking-tight leading-[52.8px] max-md:text-4xl">
                Sign up
              </h1>
              <p className="mt-8 font-medium">If you already have an account register</p>
              <p className="mt-3.5 text-white">
                <span className="font-medium">You can </span>
                <button
                onClick={handleLoginClick}
                  className="font-medium text-stone-400 bg-transparent border-none cursor-pointer focus:outline-none hover:text-amber-400 transition-colors"
                                >
                    Login here !
                </button>

              </p>
            </header>
          </div>
          <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25892cbf3476ccf2d405e37c56c84deea956d485c435892414ec8afbcdc06d34?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 aspect-square w-[83px] max-md:mt-4" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <UsernameInput value={username} onChange={(e) => setUsername(e.target.value)} />
        <PasswordInputs
          password={password}
          confirmPassword={confirmPassword}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="flex gap-3 mt-8 max-md:flex-wrap">
          <div className="flex flex-col justify-center">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="shrink-0 w-6 h-6 bg-white rounded-lg border border-solid border-neutral-200 ml-6"
            />
          </div>
          <label htmlFor="terms" className="flex-auto text-base leading-6 text-justify text-white">
            I accept the terms and conditions and privacy policy.
          </label>
        </div>
        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-7 text-2xl font-extrabold text-white whitespace-nowrap bg-amber-300  hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full ml-48"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default function Register() {
  const handleSignUp = (data) => {
    console.log("Sign up data:", data);
    
  };

  return (
    <div className="rounded-3xl bg-v">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center w-full rounded-none bg-gray-950 bg-opacity-50 max-md:mt-9 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4cffa6d4db4a3a8887391b8e57ff692b1908a1aaa0a91ca34590f6157d7289e?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
              alt="Sign up background"
              className="w-full aspect-[1.12] max-md:mr-2.5 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <SignUpForm onSubmit={handleSignUp} />
        </div>
      </div>
    </div>
  );
}
