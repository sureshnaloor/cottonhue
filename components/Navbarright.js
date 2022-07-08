const Navbar = () => {  
    return (
      <div className="relative">
        <div className="mt-0 flex bg-gray-200 dark:bg-gray-800 w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4">
          <div className="font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer">
            jrwjjrw
          </div>
          <div className="hidden md:flex ml-10 space-x-4"></div>

          <div className="space-x-8 hidden flex-1 sm:flex justify-end">
            <div className="text-base hover:scale-110 transition-transform hover:font-semibold dark:text-pink-300 underline text-pink-700 font-bold cursor-pointer">
              One
            </div>
            <div className="text-base hover:scale-110 transition-transform hover:font-semibold dark:text-pink-300 underline text-pink-700 font-bold cursor-pointer">
              Two
            </div>
            <div className="text-base hover:scale-110 transition-transform hover:font-semibold dark:text-pink-300 underline text-pink-700 font-bold cursor-pointer">
              Three
            </div>
          </div>
          <div className="sm:hidden cursor-pointer menu-icon">
            {
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            }
          </div>

          <div className="mx-auto">
            <div className="font-bold text-3xl -my-2 hover:scale-110 transition-transform sm:hidden cursor-pointer">
              jrwjjrw
            </div>
          </div>
          <div className="sm:mr-0 sm:ml-4 md:ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="inset-0 navback h-screen flex flex-col backdrop-blur-md backdrop-brightness-50 fixed">
          <div className="dark:bg-gray-800 bg-gray-200 h-screen fixed p-10 w-max">
            <div className="text-base p-2 dark:text-pink-300 text-pink-700 underline font-normal cursor-pointer">
              <a>One</a>
            </div>
            <div className="text-base p-2 dark:text-pink-300 text-pink-700 underline font-normal cursor-pointer">
              <a>Two</a>
            </div>
            <div className="text-base p-2 dark:text-pink-300 text-pink-700 underline font-normal cursor-pointer">
              <a>Three</a>
            </div>
            {/* Height Screen */}
            <div className="h-screen"></div>
          </div>
          <div className="h-screen"></div>
        </div>
      </div>
    );
  }
  
  export default Navbar
  