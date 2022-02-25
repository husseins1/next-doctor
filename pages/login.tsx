import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AuthLinks() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const loading = status === "loading";
    console.log(session);
    
    useEffect((): void => {
        if(session){
            router.push("/");
        }
    },[session]);


    return (
        <>
           
               
                    <div className="h-[100vh] flex flex-col justify-center items-center">
                        <button className="text-2xl " onClick={signIn}>Sign in</button>
                    </div>
               
           
        </>
    );
}

export default function IndexPage() {
    return <AuthLinks />;
}