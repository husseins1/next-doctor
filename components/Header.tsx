import Link from "next/link";
import { useState } from "react";
import { signIn, signOut,useSession } from "next-auth/react";
import { Avatar, Burger, Drawer,  Tooltip,  useMantineColorScheme } from "@mantine/core";
import { useRouter } from "next/router";



export default function Header() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { data: session, status } = useSession();
  
  
  return (
   <>
   

    <div  className="">
    
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

         

        <Drawer noScrollLock={false} className="text-center items-center justify-around     "  noOverlay hideCloseButton={true}  opened={opened} onClose={() => setOpened(false)} position="left" size="50%">
              
         
          
            <Tooltip  position="right" label={session?"Sign out":"Sign in"} radius="lg" withArrow>
              <Avatar onClick={()=>{
                if(session){
                  signOut()
                }else{
                  signIn()
                }
              }}  color="grape" size="lg" radius="xl" className="cursor-pointer" >{session?session.user?.email?.slice(0,1).toUpperCase():""}</Avatar>
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
