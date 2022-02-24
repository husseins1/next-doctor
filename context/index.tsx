import { createContext, useState } from "react";


interface AppContext{
    mode:String,
    toggleMode:Function,
}


export const Context = createContext<AppContext | null>(null);
const ContextProvider=({children}:any)=>{
    
    
    
    const [mode,setMode]=useState("light");
    const value:AppContext ={
        mode,
        toggleMode:()=>{
            setMode((prviousMode)=>{
                localStorage.setItem("color",prviousMode==="light"?"dark":"light");
              return  prviousMode==="light"?"dark":"light"
            }
            
            );
            
        }
           
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
    }


export default ContextProvider;
