import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" bg-blue-400 rounded-t-2xl inset-shadow-sm ">
        <div className="flex justify-between p-4 ml-40 mr-30">
          <div> 
            <div className="flex flex-col justify-center items-center ">
              <img src="../logo.png" alt="image" className="h-20  "/>
              <h3 className="text-4xl font-bold">BlogPost</h3>
              <p className="w-[14em] ml-6 text-[18px] ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae dolore expedita nesciunt, eius vitae saepe.
              </p>
            </div>
          </div>
          <div className="flex items-center text-[18px]">
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Press releases</li>
            </ul>
          </div>
          <div className="flex items-center text-[18px]">
            <ul>
              <li>Company</li>
              <li>Products</li>
              <li>Resources</li>
              <li>Solution</li>
              <li>News</li>
            </ul>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
