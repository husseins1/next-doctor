import Link from "next/link";
import { useState } from "react";
import { signIn, signOut,useSession } from "next-auth/react";
import { Avatar, Burger, Drawer,  Tooltip,  useMantineColorScheme } from "@mantine/core";



export default function Header() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { data: session, status } = useSession();
  
  return (
   <>
   

    <div  className="  ">
    
      <div className="flex justify-between mx-2 p-4 items-center  ">
        <h1  className="text-2xl font-bold cursor-pointer flex items-center space-x-1">
         
          <span 
          
          >Doctor</span>
          </h1>
          <span onClick={() => {
            toggleColorScheme();

          }} className={"cursor-pointer ml-auto mr-6 text-xl flex pt-1 group" + colorScheme}>{dark ? <i className="fas fa-sun "></i> : <i className="fas fa-moon"></i>}</span>
        <Burger
          
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          
        />
      </div>

         
        
          

          {/* <div className={`flex flex-col absolute top-0 bottom-0 w-full bg-natours-dark z-10  transition-all ease-linear duration-200 ${!navOpen && "left-full"} ${navOpen && "left-0"}`}>
          <nav className="flex flex-1">
              <ul className="flex flex-col flex-1 items-center justify-around">
              <li><Link href="/" ><a className="text-3xl">Home</a></Link></li>
                  <li><Link href="/" ><a className="text-3xl">About</a></Link></li>
                  <li><Link href="/" ><a className="text-3xl">Book an Appointment</a></Link></li>
                  <li  className="text-3xl cursor-pointer">
              {session ? (<span onClick={signOut} className="w-20 h-20 rounded-full bg-natours flex items-center justify-center">H</span>) :(<span  onClick={signIn} >Sign In </span>)
              
              }
              
              </li>
              </ul>
              </nav>
            </div> */}
        <Drawer className="text-center items-center justify-around  pt-12"  noOverlay hideCloseButton={true}  opened={opened} onClose={() => setOpened(false)} position="left" size="50%">
              
         
          
            <Tooltip  position="right" label="Sign In" radius="lg" withArrow>
              <Avatar  color="grape" size="lg" radius="xl" className="cursor-pointer " >Mg</Avatar>
            </Tooltip>
                 <div className="flex flex-col justify-around h-full">
                   
                      <Link href="/"><a className="text-3xl hover:text-4xl transition-all ease-linear duration-100 hover:text-white ">Home</a></Link>
                                  <Link href="/about"><a className="text-3xl hover:text-4xl transition-all ease-linear duration-100 hover:text-white">About</a></Link>
                   
                                  <Link href="/book"><a className="text-3xl hover:text-4xl transition-all ease-linear duration-100 hover:text-white">Book</a></Link>
                 </div>
                  

            
              
              </Drawer>
    </div>
    </>
  );
}
