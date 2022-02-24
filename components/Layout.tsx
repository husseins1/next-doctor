
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}:any) {
  // const {mode,toggleMode} = useContext(Context);
  // let color;
  // useEffect(() => {



  //   color = localStorage.getItem('color');
  //   if(color && color==="dark"){
  //     toggleMode();
  //   }
    

  //   if (!color) {
  //     localStorage.setItem('color', 'light');
  //     color = 'light';
  //   }

  // }, [])
  
  return <>
      
        <Header />
        {children}
        <Footer />

     
  </>;
}
