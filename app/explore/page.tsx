"use client";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import logo from "./assets/logo1.svg";
import { BiWorld, BiLogOut,BiMessageDetail } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Image from 'next/image';
import Rentals from './components/Rentals';
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost,FaRobot } from "react-icons/fa";
import AIChatModal from '../components/AIChatModal';
import { useState } from 'react';



const Explore = () => {
  const router = useRouter();
  const icons = [
    <BsTwitter />,
    <BsInstagram />,
    <BsFacebook />,
    <FaSnapchatGhost />,
  ];
  const [message,setMessage] = useState([
    {sender: "user", message: "Hello, how are you?"},
    {sender: "bot", message: "I am fine. How are you?"},
]);
const [openChat, setOpenChat] = useState(false)

  return (
    <div>
      
      <AIChatModal setVisible={setOpenChat} visible={openChat} messageData={message} setMessageData={setMessage}/>
      <div className="border-b sticky top-0 z-50 bg-[#ecfdf5]  ">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
       
        <div className="  h-20 items-center flex">
        <Image src={logo} className=" w-16 h-16" alt="Logo" />

        </div>
       
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full ">
          <input
            type="search"
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
            <button className="w-full">Place</button>
            <button className="border-l border-x px-6">Time</button>
            <button className="w-full text-gray-600/60 pl-2">Group Size</button>
          </div>
          <div className="bg-emerald-700 p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
        
        <div className="flex items-center pr-3  font-semibold text-gray-600">
          <p className="text-[17px]"></p>
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div>

          <div onClick={()=> {
            router.push("/conversations")
          }} className="flex cursor-pointer items-center border mr-2 px-3 py-2 rounded-md gap-2 bg-emerald-700 text-white font-bold hover:bg-emerald-800 duration-100 ease-out">
          <p>Messages</p>
            <BiMessageDetail className="text-[22px]" />
            
          </div>
          <div onClick={()=> {
            signOut()
          }} className="flex cursor-pointer items-center border px-3 py-2 rounded-md gap-2 bg-emerald-700 text-white font-bold hover:bg-emerald-800 duration-100 ease-out">
            
            <p>Logout</p>
            <BiLogOut className="text-[22px]" />
            
          </div>
        </div>
      </div>
    </div>
    <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        
        <Rentals />
      </div>
      <div className="bg-white border-t-2 shadow-md  shadow-gray-300 sticky bottom-0 h-20 w-full flex items-center justify-center gap-6">
        
      <BsTwitter className="ml-16 text-[30px] text-emerald-700 hover:text-black duration-100 ease-out " />
    <BsInstagram className="ml-16 text-[30px] text-emerald-700 hover:text-black duration-100 ease-out " />
    <BsFacebook className="ml-16 text-[30px] text-emerald-700 hover:text-black duration-100 ease-out " />
    <FaSnapchatGhost className="ml-16 text-[30px] text-emerald-700 hover:text-black duration-100 ease-out " />
      <div onClick={()=> {
        setOpenChat(!openChat)
      }} className=" ml-auto flex cursor-pointer items-center border mr-8 px-3 py-2 rounded-md gap-2 bg-emerald-700 text-white font-bold hover:bg-emerald-800 duration-100 ease-out">
          <p>AI Assistant</p>
          <FaRobot className="text-[22px]" />
          
            
          </div>
          
    </div>
    </div>

  )
}

export default Explore