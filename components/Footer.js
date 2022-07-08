import React from "react";
import Image from "next/image";
import fashion1 from "../public/fashion1.png";
import fashion2 from "../public/fashion2.png";
import fashion3 from "../public/fashion3.png";
function Footer() {
  return (
    <footer>
      <div className="bg-sky-300 grid md:grid-cols-6 md:gap-5 font-cormorant">
        <div className="md:self-center">
          <div className="md:flex justify-center md:text-xl lg:text-xl font-eagle font-semibold text-[#4c7df8] md:tracking-widest md:pb-3">
            {" "}
            Cottonhue{" "}
          </div>
          <div className="md:flex justify-evenly">
            <Image
              src={fashion2}
              width={50}
              height={50}
              className="hover:bg-slate-200 rounded-full"
            />
            <Image
              src={fashion1}
              width={50}
              height={50}
              className="hover:bg-slate-200 rounded-full"
            />
            <Image
              src={fashion3}
              width={50}
              height={50}
              className="hover:bg-slate-200 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="text-sm md:text-md lg:text-lg font-black uppercase flex pb-3 md:pb-0">company </div>
          <div className="md:pt-3">
            <p> A4-303, Rima Residences</p>
            <p> Al-Khobar, Saudi Arabia</p>
            <hr /> 
            <p className="tracking-wide"><br/>This is our warehouse.</p>
            
            <p>We do not have a physical storefront. </p><hr/>
            
            <p className="md:pt-6"> 
              <span className="font-semibold">When to reach us:</span>
            </p>

            <p className="pb-3 md:pb-0">Mon-Fri 9am - 5pm CST</p>
          </div>
        </div>
        <div>
          <div className="text-sm md:text-md lg:text-lg font-black uppercase pb-3 md:pb-0"> Contact </div>
          <div>
            {" "}
            <p className="md:pt-3">
              <span className="font-bold">Phone: </span>(966) 564824693
            </p>  
            <p className="md:pt-3 lg:pt-5 pb-3 md:pb-0">
              <span className="font-bold ">Email: </span>hello@cottonhue.com{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="text-sm md:text-md lg:text-lg font-black uppercase pb-3 md:pb-0"> Community </div>
          <ul className="py-3">
            <li className="pb-1"> Blog </li>
            <li className="pb-1"> Vendor partner program</li>
            <li className="pb-1"> Our Story </li>
            <li className="pb-1"> FAQ</li>
            <li className="pb-1"> Gift cards </li>
          </ul>
        </div>
        <div className="bg-[#628af1] text-slate-50 col-span-2 flex flex-col justify-evenly items-center">
        <div className="pb-6 text-sm md:text-md lg:text-lg font-black uppercase"> Join Us</div>
        <p className="text-sm md:text-md text-center lg:text-[16] tracking-widest font-bold">
        (Subscribe for new products,  <br/> <span className=" text-[16] lg:text-[18] font-bold text-orange-300">exclusive offers </span><br/> and other surprises)
        </p>
        <div className="p-3 w-full flex">
        <input type="text" className="w-full py-2 placeholder:italic placeholder:text-slate-400 outline-none shadow-md shadow-cyan-900"  placeholder="abc@xyz.com"/>
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-cyan-900 py-2 text-white font-bold no-underline"> SUBMIT</button>
        </div>
        <p className="text-[9px]  flex justify-center align-middle font-black pt-3 pb-3 text-white">
        {" "}
        © COPYRIGHT 2022 COTTONHUE / TERMS & CONDITIONS / PRIVACY POLICY
      </p>
        </div>
        
      </div>
      
    </footer>
  );
}

export default Footer;
