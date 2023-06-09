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
          name: user.displayName,
          email: user.email,
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
      className="justify-center py-1 px-2"
    >
      <FcGoogle/>
      Fazer login
    </button>
  );
}