import * as React from "react";
import BackToHomeButton from "./BackToHomeButton";

const SocialLoginButton = ({ src, alt, platform }) => (
  <div className="flex gap-2 px-5 py-3 mt-4 rounded-2xl border border-violet-100 border-solid text-stone-400">
    <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[30px]" />
    <div className="my-auto">
      <span className="font-extrabold">Login with </span>
      <span className="font-extrabold text-stone-400">{platform}</span>
    </div>
  </div>
);

function LoginPage() {
  const socialLogins = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6d3d808ab4073688c4ad1c7066eb7286e3889dc42405f8a6653ac235230880a?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
      alt: "Google logo",
      platform: "Google",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fa1d3850e3eeda2cd776a21e765a8e4ba0878db7438b78d1f53599c2a7d0366?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&",
      alt: "Facebook logo", 
      platform: "Facebook",
    },
  ];

  return (
    <div className="">

    <div className="pl-20  bg-v max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col self-stretch my-auto text-base text-white max-md:mt-10">
            <h1 className="self-center text-5xl font-extrabold tracking-tight leading-[52.8px] max-md:text-4xl">
              Login
            </h1>
            <p className="self-center mt-7 text-xl">Your paradise escape starts here!</p>
            <form>
              <label htmlFor="username" className="sr-only">Username</label>
              <div className="flex gap-1.5 px-5 py-3.5 mt-5 font-bold whitespace-nowrap rounded-2xl bg-orange-100 bg-opacity-80 text-zinc-900">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a592f3e6a871ed42db10bc4b9f20d0695722c54d3a3fcd5c1e267f84847048a?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 w-6 aspect-square" />
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="flex-auto my-auto bg-transparent outline-none"
                />
              </div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="flex gap-1.5 px-5 py-3.5 mt-5 font-bold whitespace-nowrap rounded-2xl bg-orange-100 bg-opacity-80 text-zinc-900">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7ac098f5db87311adb5bb39ad666714d75de6cb890f8468d9b4fea61602d32?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 w-6 aspect-square" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="flex-auto my-auto bg-transparent outline-none"
                />
              </div>
              <div className="flex flex-col items-end mt-5 ml-6 max-w-full w-[222px] max-md:ml-2.5">
                <div className="flex gap-2 self-stretch text-sm">
                  <input type="checkbox" id="rememberMe" className="shrink-0 bg-white border border-white border-solid h-[15px] w-[15px]" />
                  <label htmlFor="rememberMe" className="flex-auto my-auto">Remember me</label>
                </div>
              </div>
                <button type="submit" className="justify-center px-6 py-5 mt-6 font-bold text-v bg-amber-300  hover:bg-amber-400 rounded-2xl shadow-lg max-md:px-5">
                  Login Now
                </button>
            </form>
            <p className="mt-8">
              <span className="font-bold text-stone-400">Login</span>{" "}
              <span className="font-bold">with Others</span>
            </p>
            {socialLogins.map((login, index) => (
              <SocialLoginButton key={index} {...login} />
            ))}
            <p className="self-center mt-7 text-xl font-medium tracking-normal leading-7">
              have you forgotten your password?
            </p>
            <p className="self-center mt-8 text-2xl font-extrabold tracking-tight">
              Create Account
            </p>
            <div className="mt-24">

            <BackToHomeButton/>
            </div>
          </section>
        </div>
        <div className=" flex flex-col ml-5 w-[70%]   max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8f08c581a5a38d8116e6387c776ccefd9769d799cc74f3c96f1a5f826826c1?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="Decorative image" 
          className=" grow w-full aspect-[1.11] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;