import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-white text-black h-[120px] items-center px-[60px]">
      <div className="flex">
        <img
          src="/next.png"
          alt=""
          height={"50"}
          width={"50"}
        />
        <p className=" tracking-widest font-bold text-1xl ml-2 italic ">
          FRANTIC
        </p>
      </div>

      <div className="flex justify-center gap-8 items-center text-sm">
        <p className="text-purple-500 font-bold">Home</p>
        {/* <img
          src="/ethpurp.png"
          alt=""
          className="h-[30px] w-[30px] ethpic"
        /> */}
        <p>Services</p>
        <p>About</p>
      </div>

      <div className="flex justify-end gap-8 items-center">
        <button className="bg-purple-600 px-5 py-2 text-white font-bold rounded-md text-sm">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
