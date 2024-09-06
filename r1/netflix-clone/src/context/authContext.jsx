import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect,useState,useContext } from "react";
import { auth,db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";



const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user,setUser] = useState({})



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[]);


    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password);
        setDoc(doc(db,'users',email),{
            faveShows:[],
        });
    }


    function logIn(email,password){
        signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth);
    }
    return <AuthContext.Provider value={{user,signUp,logIn,logOut}}>{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext);
}