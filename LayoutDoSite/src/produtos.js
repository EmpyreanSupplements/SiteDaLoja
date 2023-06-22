import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

async function findAll() {
  const querySnapshot = await getDocs(collection(db, "produtos"));
  const docArray = [];

  querySnapshot.forEach((doc) => {
    const docData = doc.data();
    docArray.push({
      id: doc.id,
      produtoNome: docData.produtoNome,
      produtoDesc: docData.produtoDesc,
      produtoPreco: docData.produtoPreco,
      produtoImg: docData.produtoImg
    });
  });

  return docArray;
}

export default findAll;
