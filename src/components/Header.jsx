import React, { useContext, useState } from "react";

// import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { BsBell, BsCameraVideo, BsYoutube } from "react-icons/bs";
// import { IoAppsSharp } from "react-icons/io5";
// import { TiMicrophone } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import ytLogo from "../images/ytLogo.png";
// import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      // ? is optional chaining
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center gap-8">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}

        {/* <div className="max-sm:hidden">
          <GiHamburgerMenu />
        </div> */}

        <Link to="/" className="flex h-5 items-center gap-1 justify-center">
          <BsYoutube className="text-3xl text-red-600" />
          <span className="text-xl font-medium ">YouTube</span>
          {/* <span className="text-xl font-medium max-sm:hidden">YouTube</span> */}

          {/* <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          /> */}
          {/* <img className="h-full md:hidden" src={ytLogo} alt="Youtube" /> */}
        </Link>
      </div>
      <div className="group flex items-center max-sm:px-10">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          {/* <img src="xsgames.co/randomusers/avatar.php?g=male" alt="profile " /> */}
          <img src={require("../images/yt_profile-Pic.png")} alt="profile" />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="flex justify-between items-center  px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
  // <div className="flex gap-8 items-center text-2xl">
  //   <div>
  //     <GiHamburgerMenu />
  //   </div>
  //   <Link to="/">
  //     <div className="flex gap-1 items-center justify-center">
  //       <BsYoutube className="text-3xl text-red-600" />
  //       <span className="text-xl font-medium">YouTube</span>
  //     </div>
  //   </Link>
  // </div>
  //     <div className="flex items-center justify-center gap-5">
  //       <form
  //         onSubmit={(e) => {
  //           // e.preventDefault();
  //           // handleSearch();
  //         }}
  //       >
  //         <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
  //           <div className="flex gap-4 items-center pr-5">
  //             <div>
  //               <AiOutlineSearch className="text-xl" />
  //             </div>
  //             <input
  //               type="text"
  //               className="w-96 bg-zinc-900 focus:outline-none border-none"
  //               // value={searchTerm}
  //               // onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
  //             />

  //             <AiOutlineClose
  //               className={`text-xl cursor-pointer `}
  //               // className={`text-xl cursor-pointer
  //               //  ${!searchTerm ? "invisible" : "visible"}`
  //               // }
  //               // onClick={() => dispatch(clearSearchTerm())}
  //             />
  //           </div>
  //           <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
  //             <AiOutlineSearch className="text-xl" />
  //           </button>
  //         </div>
  //       </form>
  //       <div className="text-xl p-3 bg-zinc-900 rounded-full">
  //         <TiMicrophone />
  //       </div>
  //     </div>
  //     <div className="flex gap-5 items-center text-xl">
  //       <BsCameraVideo />
  //       <IoAppsSharp />
  //       <div className="relative">
  //         <BsBell />
  //         <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
  //           9+
  //         </span>
  //       </div>
  //       <img
  //         src={require("../images/yt_profile-Pic.png")}
  //         className="w-9 h-9 rounded-full"
  //         alt="logo"
  //       />
  //     </div>
  //   </div>
  // );
};

export default Header;
