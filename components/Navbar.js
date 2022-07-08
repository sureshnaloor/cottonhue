const Navbar = () => {  
    return (
      <div className="relative">
        <div className="mt-0 flex bg-sky-300 w-full fixed top-0 flex-1 md:px-12 px-6 py-4 md:py-4">
          <div className="font-bold text-3xl -my-2 hidden sm:block hover:scale-110 transition-transform cursor-pointer">
            Cottonhue
          </div>
          

          <div className="space-x-8 hidden flex-1 sm:flex justify-end">
            <div className="text-lg tracking-widest transition-transform hover:text-slate-400 text-white/90 cursor-pointer">
              Contact
            </div>
            <div className="text-lg tracking-widest transition-transform hover:text-slate-400  text-white/90 cursor-pointer">
              Search
            </div>
            <div className="text-lg tracking-widest transition-transform hover:text-slate-400 text-white/90 cursor-pointer">
              My Account
            </div>
          </div>
          <div className="sm:hidden cursor-pointer menu-icon">
          </div>
        </div>

        
      </div>
    );
  }
  
  export default Navbar
  