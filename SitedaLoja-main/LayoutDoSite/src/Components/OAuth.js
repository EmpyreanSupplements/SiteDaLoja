import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Googlebutton.css"


export default function OAuth() {

  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ver se o usuário existe no storage

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: result.user.displayName,
          email: result.user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
      toast.success("Você está logado!")
    } catch (error) {
      toast.error("Não foi possível continuar com sua conta Google");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="justify-center w-5 py-1  shadow p-3 mb-3 rounded mt-2"
      style={{ width: '30%' , height: '48px'}}
    >
      <FcGoogle style={{ width: '30%' , height: '80%', marginLeft:'0'}}/> 
      Logar com o Google
    </button>
    
  );

  
}