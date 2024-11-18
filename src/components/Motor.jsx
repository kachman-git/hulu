const Motor = ({ open, toggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full ${open} transition-opacity duration-150 bg-black/50`}
    >
      <div className="my-[10%] mx-auto w-[370px] rounded bg-white">
        <div className="p-10 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Log In</h1>
            <img
              onClick={toggle}
              src="/img/close.svg"
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="uppercase">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border-[.5px] rounded border-black/50 py-1 px-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="uppercase">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-[.5px] rounded border-black/50 py-1 px-2 "
            />
          </div>
          <a
            href="#"
            className="block w-full py-4 mx-auto text-center text-white uppercase bg-black rounded"
          >
            Log in
          </a>
        </div>
        <div className="flex items-center justify-center py-5 space-x-3 bg-gray-200">
          <p> Don't have an account? </p>
          <a href="#" className="text-blue-500">
            Start your free trial
          </a>
        </div>
      </div>
    </div>
  );
};

export default Motor;
