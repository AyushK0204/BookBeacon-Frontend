import React from 'react'
import {NavLink} from 'react-router-dom'
import {motion} from "framer-motion";
import { useState } from "react";

import { FaHome } from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { LuBookUp2 } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
// creating an array
const arr=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },

        {
          path:"/profile",
          name:"Profile",
          icon:<CgProfile />
        },
        {
          path:"/admin",
          name:"Admin",
          icon:<RiAdminFill/>
        
      },
      {
        path:"/books",
        name:"Books",
        icon:<IoBookSharp />
    },
    {
      path:"/Issue_book",
      name:"Issue Book",
      icon:<LuHelpingHand />
  },
  {
    path:"/events",
    name:"Events",
    icon:<MdEvent />
},
{
  path:"/help",
  name:"Help",
  icon:<MdOutlineHelp />
},



{
  path:"/return",
  name:"Return",
  icon:<LuBookUp2 />
  
},
{
  path:"/logout",
  name:"Logout",
  icon:<CiLogout />
}
]




const Sidebar = ({children}) => {







const [open,setIsOpen]=useState(false);


  const toggle=()=>setIsOpen(!open)



  return (
    <div className="main-container">
        <motion.div animate={{width: open ? "200px" : "49px",
        transition:{
               duration:0.5,
               type:"spring",
               damping:10
        }
        }} className='sidebar' >
                   


                 <div className="nav_top">
                  <div className="bars">  <FaBars onClick={toggle}/>   </div>
                { open && <h1 className='nav_logo'>BookBeacon</h1>}
                 </div>





<div className="nav_search">
 
  <div className="search_icon">
        <BiSearch />
  </div>

   {
      open &&  <input type="text" placeholder="Search..."/>
   }

</div>




                   





           <section className="links">

                   {

                   arr.map((ele)=>(
                   <NavLink activeClassName="active" to={ele.path} key={ele.name} className='link_contents'>
                         <div className="icon">{ele.icon}</div>
                      { open &&  <div className="linktext">{ele.name}</div>}
                   </NavLink>))
           
                   }
                     </section>

          
        </motion.div>

        <main> {children}</main>
    </div>
  )
}

export default Sidebar
